package com.gaurav.portfolio.controller;

import com.gaurav.portfolio.model.*;
import com.gaurav.portfolio.service.PortfolioService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class PortfolioController {

    private final PortfolioService portfolioService;

    public PortfolioController(PortfolioService portfolioService) {
        this.portfolioService = portfolioService;
    }

    @GetMapping("/health")
    public ResponseEntity<Map<String, Object>> health() {
        return ResponseEntity.ok(Map.of(
            "status", "UP",
            "service", "Gaurav Kumar Portfolio Backend",
            "version", "1.0.0",
            "runtime", "Java 21 & Spring Boot 3.3.4"
        ));
    }

    @GetMapping("/profile")
    public ResponseEntity<Profile> getProfile() {
        return ResponseEntity.ok(portfolioService.getProfile());
    }

    @GetMapping("/projects")
    public ResponseEntity<List<Project>> getProjects(
            @RequestParam(required = false) String category,
            @RequestParam(required = false) Boolean featured) {
        List<Project> all = portfolioService.getProjects();
        if (category != null && !category.equalsIgnoreCase("All")) {
            all = all.stream()
                     .filter(p -> p.getCategory().equalsIgnoreCase(category))
                     .toList();
        }
        if (featured != null && featured) {
            all = all.stream()
                     .filter(Project::isFeatured)
                     .toList();
        }
        return ResponseEntity.ok(all);
    }

    @GetMapping("/skills")
    public ResponseEntity<List<SkillCategory>> getSkills() {
        return ResponseEntity.ok(portfolioService.getSkillCategories());
    }

    @GetMapping("/experience")
    public ResponseEntity<List<Experience>> getExperience() {
        return ResponseEntity.ok(portfolioService.getExperiences());
    }

    @GetMapping("/certifications")
    public ResponseEntity<List<Certification>> getCertifications() {
        return ResponseEntity.ok(portfolioService.getCertifications());
    }

    @GetMapping("/stats")
    public ResponseEntity<Map<String, Object>> getStats() {
        return ResponseEntity.ok(portfolioService.getStats());
    }
}
