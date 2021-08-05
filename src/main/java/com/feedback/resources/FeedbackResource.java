package com.feedback.resources;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.feedback.entities.Feedback;
import com.feedback.repositories.FeedbackRepository;


@RestController
@RequestMapping(value = "/feedback" )
public class FeedbackResource {

	@Autowired
	private FeedbackRepository repository;
	
	//getmapping, postmapping, deletemapping e patchmapping
	
	@GetMapping
	public ResponseEntity<List<Feedback>>listarFeedback(){
		List<Feedback> list = repository.findAll();
		
		return ResponseEntity.ok().body(list);
		
	}
	
	
}
