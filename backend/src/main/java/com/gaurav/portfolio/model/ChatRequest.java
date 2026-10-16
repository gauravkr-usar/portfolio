package com.gaurav.portfolio.model;

import jakarta.validation.constraints.NotBlank;
import java.util.List;

public class ChatRequest {
    @NotBlank(message = "Message prompt cannot be empty")
    private String message;

    private List<HistoryItem> history;

    public ChatRequest() {}

    public ChatRequest(String message, List<HistoryItem> history) {
        this.message = message;
        this.history = history;
    }

    public String getMessage() { return message; }
    public void setMessage(String message) { this.message = message; }

    public List<HistoryItem> getHistory() { return history; }
    public void setHistory(List<HistoryItem> history) { this.history = history; }

    public static class HistoryItem {
        private String role; // "user" or "assistant"
        private String content;

        public HistoryItem() {}
        public HistoryItem(String role, String content) {
            this.role = role;
            this.content = content;
        }

        public String getRole() { return role; }
        public void setRole(String role) { this.role = role; }

        public String getContent() { return content; }
        public void setContent(String content) { this.content = content; }
    }
}
