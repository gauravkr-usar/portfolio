import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    if (!body.name || !body.email || !body.subject || !body.message) {
      return NextResponse.json(
        { success: false, message: 'Please fill in all required fields.' },
        { status: 400 }
      );
    }

    // If external Spring Boot URL is configured in environment, proxy it
    const springBootUrl = process.env.SPRING_BOOT_URL;
    if (springBootUrl) {
      try {
        const res = await fetch(`${springBootUrl}/api/contact`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body)
        });
        if (res.ok) {
          return NextResponse.json(await res.json());
        }
      } catch (err) {
        console.error('Spring Boot proxy failed, falling back to Next.js handler', err);
      }
    }

    // Direct Next.js Edge response
    const refId = `MSG-${Math.random().toString(36).substring(2, 10).toUpperCase()}`;
    return NextResponse.json({
      success: true,
      message: `Thank you, ${body.name}! Your message has been received.`,
      referenceId: refId,
      timestamp: new Date().toISOString()
    });
  } catch (err) {
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}
