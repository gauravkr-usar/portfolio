package com.gaurav.portfolio.service;

import com.gaurav.portfolio.model.ContactMessage;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.*;
import java.util.concurrent.ConcurrentLinkedQueue;

@Service
public class ContactService {

    private static final Logger logger = LoggerFactory.getLogger(ContactService.class);
    private final Queue<ContactMessage> messages = new ConcurrentLinkedQueue<>();

    public ContactMessage processMessage(ContactMessage incoming) {
        String id = "MSG-" + UUID.randomUUID().toString().substring(0, 8).toUpperCase();
        incoming.setId(id);
        incoming.setReceivedAt(LocalDateTime.now());
        incoming.setStatus("DELIVERED");

        messages.add(incoming);

        logger.info("New portfolio inquiry received from: {} <{}> | Subject: {}", 
                    incoming.getName(), incoming.getEmail(), incoming.getSubject());

        return incoming;
    }

    public List<ContactMessage> getAllMessages() {
        return new ArrayList<>(messages);
    }
}
