package com.feedback.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.feedback.entities.Feedback;

public interface FeedbackRepository extends JpaRepository<Feedback, Long>{

}






