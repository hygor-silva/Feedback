package com.feedback.resources;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.feedback.entities.Feedback;
import com.feedback.repositories.FeedbackRepository;


@RestController
@RequestMapping
public class FeedbackResource {

	@Autowired
	private FeedbackRepository repository;
	
	//Lista todos os feedbacks cadastrados.
	@GetMapping("/feedback")
	public ResponseEntity<List<Feedback>>listarFeedback(){
		List<Feedback> list = repository.findAll();
		
		return ResponseEntity.ok().body(list);
		
	}
	
	//Lista feedback pesquisado pelo Id
	@GetMapping(value = "/feedback/{id}")
	public ResponseEntity<Feedback>findById(@PathVariable Long id){
		Feedback feed = repository.findById(id).get();
		
		return ResponseEntity.ok().body(feed);
	}
	
	//Cadastra feedbacks
	@PostMapping
	public void cadastroFeedback(@RequestBody Feedback feedback) {
		repository.save(feedback);
	}
	
	
	
}
