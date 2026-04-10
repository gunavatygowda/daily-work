package com.example.demo;

import com.example.demo.controller.NoteController;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.annotation.Bean;


@SpringBootApplication
public class SpringBasicsApplication {
//	private final NoteController noteController;
//	
//	public SpringBasicsApplication(NoteController noteController) {
//		this.noteController = noteController;
//	}
//
	public static void main(String[] args) {
		ConfigurableApplicationContext context = SpringApplication.run(SpringBasicsApplication.class, args);
//		ConfigurableApplicationContext context1 = SpringApplication.run(SpringBasicsApplication.class, args);
		NoteController service = context.getBean(NoteController.class);
//		NoteController controller1 = context.getBean(NoteController.class);
	System.out.println(service);
//		System.out.println(controller1);
	}
	@Bean
	NoteController noteController() {
		return new NoteController();
	}
	
}
