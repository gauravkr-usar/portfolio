package com.gaurav.portfolio.controller;

import com.gaurav.portfolio.model.ChatRequest;
import com.gaurav.portfolio.model.ChatResponse;
import com.gaurav.portfolio.service.AiAssistantService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/chat")
public class AiChatController {

    private final AiAssistantService aiAssistantService;

    public AiChatController(AiAssistantService aiAssistantService) {
        this.aiAssistantService = aiAssistantService;
    }

    @PostMapping
    public ResponseEntity<?> chat(@Valid @RequestBody ChatRequest request, BindingResult result) {
        if (result.hasErrors()) {
            return ResponseEntity.badRequest().body(Map.of(
                "error", "Message cannot be empty."
            ));
        }

        ChatResponse response = aiAssistantService.handleChat(request);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/suggestions")
    public ResponseEntity<List<String>> getSuggestions() {
        return ResponseEntity.ok(List.of(
            "Tell me about QueryDocs AI and RAG architecture",
            "What is the SWVAS project with OWASP ZAP?",
            "What is Gaurav's Spring Boot experience?",
            "What are his LeetCode and DSA ratings?",
            "How can I contact or hire Gaurav?"
        ));
    }
}
