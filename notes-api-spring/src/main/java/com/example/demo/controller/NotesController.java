package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.NotesApiSpringApplication;
import com.example.demo.entity.Note;
import com.example.demo.service.NotesService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/notes")
public class NotesController {
   
    private final NotesApiSpringApplication notesApiSpringApplication;
	@Autowired
	NotesService notesService;

    NotesController(NotesApiSpringApplication notesApiSpringApplication) {
        this.notesApiSpringApplication = notesApiSpringApplication;
    }
	
	@GetMapping
	Note getNotes() {
		return notesService.getNotes();
	}
	@PostMapping
	void setNote(@RequestBody @Valid Note note) {
		notesService.setNote(note);
	}
}