import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    status: 'UP',
    service: 'Gaurav Kumar Portfolio (Next.js & Spring Boot)',
    timestamp: new Date().toISOString()
  });
}
