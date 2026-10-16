package com.gaurav.portfolio.model;

import java.util.List;

public class ChatResponse {
    private String response;
    private List<String> suggestions;
    private List<String> relevantProjects;
    private long timestamp;

    public ChatResponse() {
        this.timestamp = System.currentTimeMillis();
    }

    public ChatResponse(String response, List<String> suggestions, List<String> relevantProjects) {
        this();
        this.response = response;
        this.suggestions = suggestions;
        this.relevantProjects = relevantProjects;
    }

    public String getResponse() { return response; }
    public void setResponse(String response) { this.response = response; }

    public List<String> getSuggestions() { return suggestions; }
    public void setSuggestions(List<String> suggestions) { this.suggestions = suggestions; }

    public List<String> getRelevantProjects() { return relevantProjects; }
    public void setRelevantProjects(List<String> relevantProjects) { this.relevantProjects = relevantProjects; }

    public long getTimestamp() { return timestamp; }
    public void setTimestamp(long timestamp) { this.timestamp = timestamp; }
}
