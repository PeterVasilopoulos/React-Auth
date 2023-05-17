package com.heidichen.backend.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.heidichen.backend.models.Student;

public interface StudentRepository extends CrudRepository<Student, Long> {

	List<Student> findAll();
}
