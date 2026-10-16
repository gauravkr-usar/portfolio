package com.gaurav.portfolio.controller;

import com.gaurav.portfolio.model.ContactMessage;
import com.gaurav.portfolio.service.ContactService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/contact")
public class ContactController {

    private final ContactService contactService;

    public ContactController(ContactService contactService) {
        this.contactService = contactService;
    }

    @PostMapping
    public ResponseEntity<?> submitContactMessage(@Valid @RequestBody ContactMessage message, BindingResult result) {
        if (result.hasErrors()) {
            Map<String, String> errors = new HashMap<>();
            result.getFieldErrors().forEach(err -> errors.put(err.getField(), err.getDefaultMessage()));
            return ResponseEntity.badRequest().body(Map.of(
                "success", false,
                "message", "Validation failed",
                "errors", errors
            ));
        }

        ContactMessage processed = contactService.processMessage(message);

        return ResponseEntity.status(HttpStatus.CREATED).body(Map.of(
            "success", true,
            "message", "Thank you, " + processed.getName() + "! Your message has been received.",
            "referenceId", processed.getId(),
            "timestamp", processed.getReceivedAt()
        ));
    }

    @GetMapping("/messages")
    public ResponseEntity<List<ContactMessage>> getMessages() {
        return ResponseEntity.ok(contactService.getAllMessages());
    }
}
