package com.gaurav.portfolio.model;

import java.util.List;
import java.util.Map;

public class Profile {
    private String name;
    private String title;
    private String subtitle;
    private String location;
    private String email;
    private String phone;
    private String githubUrl;
    private String linkedinUrl;
    private String codolioUrl;
    private String leetcodeUrl;
    private String avatarUrl;
    private String summary;
    private Map<String, String> highlights;
    private List<String> focusAreas;

    public Profile() {}

    public Profile(String name, String title, String subtitle, String location, String email, 
                   String phone, String githubUrl, String linkedinUrl, String codolioUrl, String leetcodeUrl,
                   String avatarUrl, String summary, Map<String, String> highlights, List<String> focusAreas) {
        this.name = name;
        this.title = title;
        this.subtitle = subtitle;
        this.location = location;
        this.email = email;
        this.phone = phone;
        this.githubUrl = githubUrl;
        this.linkedinUrl = linkedinUrl;
        this.codolioUrl = codolioUrl;
        this.leetcodeUrl = leetcodeUrl;
        this.avatarUrl = avatarUrl;
        this.summary = summary;
        this.highlights = highlights;
        this.focusAreas = focusAreas;
    }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getSubtitle() { return subtitle; }
    public void setSubtitle(String subtitle) { this.subtitle = subtitle; }

    public String getLocation() { return location; }
    public void setLocation(String location) { this.location = location; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getPhone() { return phone; }
    public void setPhone(String phone) { this.phone = phone; }

    public String getGithubUrl() { return githubUrl; }
    public void setGithubUrl(String githubUrl) { this.githubUrl = githubUrl; }

    public String getLinkedinUrl() { return linkedinUrl; }
    public void setLinkedinUrl(String linkedinUrl) { this.linkedinUrl = linkedinUrl; }

    public String getCodolioUrl() { return codolioUrl; }
    public void setCodolioUrl(String codolioUrl) { this.codolioUrl = codolioUrl; }

    public String getLeetcodeUrl() { return leetcodeUrl; }
    public void setLeetcodeUrl(String leetcodeUrl) { this.leetcodeUrl = leetcodeUrl; }

    public String getAvatarUrl() { return avatarUrl; }
    public void setAvatarUrl(String avatarUrl) { this.avatarUrl = avatarUrl; }

    public String getSummary() { return summary; }
    public void setSummary(String summary) { this.summary = summary; }

    public Map<String, String> getHighlights() { return highlights; }
    public void setHighlights(Map<String, String> highlights) { this.highlights = highlights; }

    public List<String> getFocusAreas() { return focusAreas; }
    public void setFocusAreas(List<String> focusAreas) { this.focusAreas = focusAreas; }
}
