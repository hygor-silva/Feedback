package com.feedback.entities;

public enum Setor {

	INFORMATICA ("Informática"), 
	RECURSOS_HUMANOS ("Recursos Humanos"), 
	CONTABILIDADE ("Contabilidade"), 
	DIRETORIA ("Diretoria"), 
	PORTARIA ("Portaria");
	
	private String setor;

	private Setor(String setor) {
		this.setor = setor;
	}

	public String getSetor() {
		return setor;
	}
	
	
	
}
