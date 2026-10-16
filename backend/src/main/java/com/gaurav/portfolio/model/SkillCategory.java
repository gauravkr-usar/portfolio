package com.gaurav.portfolio.model;

import java.util.List;

public class SkillCategory {
    private String category;
    private String iconName;
    private List<SkillItem> skills;

    public SkillCategory() {}

    public SkillCategory(String category, String iconName, List<SkillItem> skills) {
        this.category = category;
        this.iconName = iconName;
        this.skills = skills;
    }

    public String getCategory() { return category; }
    public void setCategory(String category) { this.category = category; }

    public String getIconName() { return iconName; }
    public void setIconName(String iconName) { this.iconName = iconName; }

    public List<SkillItem> getSkills() { return skills; }
    public void setSkills(List<SkillItem> skills) { this.skills = skills; }

    public static class SkillItem {
        private String name;
        private int proficiency; // 0 - 100
        private String level; // e.g., "Advanced", "Proficient", "Familiar"

        public SkillItem() {}

        public SkillItem(String name, int proficiency, String level) {
            this.name = name;
            this.proficiency = proficiency;
            this.level = level;
        }

        public String getName() { return name; }
        public void setName(String name) { this.name = name; }

        public int getProficiency() { return proficiency; }
        public void setProficiency(int proficiency) { this.proficiency = proficiency; }

        public String getLevel() { return level; }
        public void setLevel(String level) { this.level = level; }
    }
}
