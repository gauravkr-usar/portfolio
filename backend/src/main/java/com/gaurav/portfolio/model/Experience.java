package com.gaurav.portfolio.model;

import java.util.List;

public class Experience {
    private String id;
    private String role;
    private String organization;
    private String mentor;
    private String location;
    private String period;
    private String type; // e.g., "Academic Research & Engineering", "Education"
    private List<String> descriptionPoints;
    private List<String> technologies;

    public Experience() {}

    public Experience(String id, String role, String organization, String mentor,
                      String location, String period, String type,
                      List<String> descriptionPoints, List<String> technologies) {
        this.id = id;
        this.role = role;
        this.organization = organization;
        this.mentor = mentor;
        this.location = location;
        this.period = period;
        this.type = type;
        this.descriptionPoints = descriptionPoints;
        this.technologies = technologies;
    }

    public String getId() { return id; }
    public void setId(String id) { this.id = id; }

    public String getRole() { return role; }
    public void setRole(String role) { this.role = role; }

    public String getOrganization() { return organization; }
    public void setOrganization(String organization) { this.organization = organization; }

    public String getMentor() { return mentor; }
    public void setMentor(String mentor) { this.mentor = mentor; }

    public String getLocation() { return location; }
    public void setLocation(String location) { this.location = location; }

    public String getPeriod() { return period; }
    public void setPeriod(String period) { this.period = period; }

    public String getType() { return type; }
    public void setType(String type) { this.type = type; }

    public List<String> getDescriptionPoints() { return descriptionPoints; }
    public void setDescriptionPoints(List<String> descriptionPoints) { this.descriptionPoints = descriptionPoints; }

    public List<String> getTechnologies() { return technologies; }
    public void setTechnologies(List<String> technologies) { this.technologies = technologies; }
}
