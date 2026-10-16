package com.gaurav.portfolio.model;

import java.util.List;

public class Project {
    private String id;
    private String title;
    private String subtitle;
    private String description;
    private List<String> bulletPoints;
    private List<String> technologies;
    private String category; // e.g., "GenAI / RAG", "Spring Boot & Microservices", "Full-Stack Web"
    private String githubUrl;
    private String liveUrl;
    private String status;
    private boolean featured;
    private List<String> architecturalHighlights;

    public Project() {}

    public Project(String id, String title, String subtitle, String description,
                   List<String> bulletPoints, List<String> technologies, String category,
                   String githubUrl, String liveUrl, String status, boolean featured,
                   List<String> architecturalHighlights) {
        this.id = id;
        this.title = title;
        this.subtitle = subtitle;
        this.description = description;
        this.bulletPoints = bulletPoints;
        this.technologies = technologies;
        this.category = category;
        this.githubUrl = githubUrl;
        this.liveUrl = liveUrl;
        this.status = status;
        this.featured = featured;
        this.architecturalHighlights = architecturalHighlights;
    }

    public String getId() { return id; }
    public void setId(String id) { this.id = id; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getSubtitle() { return subtitle; }
    public void setSubtitle(String subtitle) { this.subtitle = subtitle; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public List<String> getBulletPoints() { return bulletPoints; }
    public void setBulletPoints(List<String> bulletPoints) { this.bulletPoints = bulletPoints; }

    public List<String> getTechnologies() { return technologies; }
    public void setTechnologies(List<String> technologies) { this.technologies = technologies; }

    public String getCategory() { return category; }
    public void setCategory(String category) { this.category = category; }

    public String getGithubUrl() { return githubUrl; }
    public void setGithubUrl(String githubUrl) { this.githubUrl = githubUrl; }

    public String getLiveUrl() { return liveUrl; }
    public void setLiveUrl(String liveUrl) { this.liveUrl = liveUrl; }

    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }

    public boolean isFeatured() { return featured; }
    public void setFeatured(boolean featured) { this.featured = featured; }

    public List<String> getArchitecturalHighlights() { return architecturalHighlights; }
    public void setArchitecturalHighlights(List<String> architecturalHighlights) { this.architecturalHighlights = architecturalHighlights; }
}
