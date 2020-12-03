package com.devsuperior.dsmovieflix.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.dsmovieflix.dto.GenreDTO;
import com.devsuperior.dsmovieflix.entities.Genre;
import com.devsuperior.dsmovieflix.repositories.GenreRepository;

@Service
public class GenreService {
	
	@Autowired
	private GenreRepository repository;
	
	@Transactional(readOnly = true)
	public List<GenreDTO> findAll() {
		List<Genre> list = repository.findAll();
		
		return list.stream().map(x -> new GenreDTO(x)).collect(Collectors.toList());
	}

}
