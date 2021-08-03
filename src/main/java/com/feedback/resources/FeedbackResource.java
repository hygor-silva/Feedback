package com.feedback.resources;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.feedback.entities.Feedback;
import com.feedback.repositories.FeedbackRepository;


@RestController
@RequestMapping
public class FeedbackResource {

	@Autowired
	private FeedbackRepository repository;
	
	//getmapping, postmapping, deletemapping e patchmapping
	
	public List<Feedback>listarFeedback(){
		return repository.findAll();
	}
	
	
}
