package com.gaurav.portfolio.model;

public class Certification {
    private String id;
    private String title;
    private String issuer;
    private String date;
    private String credentialUrl;
    private String category; // "Certification" or "Achievement"
    private String description;

    public Certification() {}

    public Certification(String id, String title, String issuer, String date,
                         String credentialUrl, String category, String description) {
        this.id = id;
        this.title = title;
        this.issuer = issuer;
        this.date = date;
        this.credentialUrl = credentialUrl;
        this.category = category;
        this.description = description;
    }

    public String getId() { return id; }
    public void setId(String id) { this.id = id; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getIssuer() { return issuer; }
    public void setIssuer(String issuer) { this.issuer = issuer; }

    public String getDate() { return date; }
    public void setDate(String date) { this.date = date; }

    public String getCredentialUrl() { return credentialUrl; }
    public void setCredentialUrl(String credentialUrl) { this.credentialUrl = credentialUrl; }

    public String getCategory() { return category; }
    public void setCategory(String category) { this.category = category; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }
}
