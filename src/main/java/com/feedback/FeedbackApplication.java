package com.feedback;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.feedback.entities.Feedback;
import com.feedback.entities.Setor;
import com.feedback.repositories.FeedbackRepository;

@SpringBootApplication
public class FeedbackApplication implements CommandLineRunner{
	
	@Autowired
	private FeedbackRepository repository;
	

	public static void main(String[] args) {
		SpringApplication.run(FeedbackApplication.class, args);
	}


	@Override
	public void run(String... args) throws Exception {
		Feedback feed = new Feedback(null, "Este é o primeiro feedback da aplicação.", Setor.CONTABILIDADE);
		Feedback feed2 = new Feedback(null, "Este é o teste de feedback da aplicação.", Setor.DIRETORIA);
		repository.save(feed);
		repository.save(feed2);
		
	}

}
