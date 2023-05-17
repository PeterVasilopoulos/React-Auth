package com.heidichen.backend.controllers;

import java.net.URISyntaxException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.heidichen.backend.models.Student;
import com.heidichen.backend.repositories.StudentRepository;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api")
public class StudentAPI {

	@Autowired
	private StudentRepository studentRepo;
	
	@GetMapping("/students")
	public List<Student> allStudents(){
		return studentRepo.findAll();
	} 
	
    @PostMapping("/students")
    public Student createClient(@RequestBody Student student) {
        Student savedStudent = studentRepo.save(student);
        return savedStudent;
    }
	
    @DeleteMapping("/students/{id}")
    public ResponseEntity deleteClient(@PathVariable("id") Long id) {
        studentRepo.deleteById(id);
        return ResponseEntity.ok().build();
    }
    
	@GetMapping("/students/{id}")
	public Student oneStudent(@PathVariable Long id){
		return studentRepo.findById(id).orElseThrow(RuntimeException::new);
	}
    
    @PutMapping("/students/{id}")
    public ResponseEntity updateClient(@PathVariable("id") Long id, @RequestBody Student student) {
        Student foundStudent = studentRepo.findById(id).orElseThrow(RuntimeException::new);
        foundStudent.setName(student.getName());
        foundStudent.setEmail(student.getEmail());
        foundStudent = studentRepo.save(foundStudent);

        return ResponseEntity.ok(foundStudent);
    }
	
	
}
