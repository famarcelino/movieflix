package com.devsuperior.dsmovieflix.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.dsmovieflix.dto.GenreDTO;
import com.devsuperior.dsmovieflix.dto.MovieDTO;
import com.devsuperior.dsmovieflix.entities.Genre;
import com.devsuperior.dsmovieflix.entities.Movie;
import com.devsuperior.dsmovieflix.repositories.MovieRepository;
import com.devsuperior.dsmovieflix.services.exceptions.ResourceNotFoundException;

@Service
public class MovieService {

	@Autowired
	private MovieRepository repository;
	
	@PreAuthorize("hasAnyRole('VISITOR', 'MEMBER')")
	@Transactional(readOnly = true)
	public Page<MovieDTO> listOfMovies(Long id, Pageable pageable) {
		Long genreId = (id == 0) ? null : id;
		Page<Movie> page = repository.find(genreId, pageable);
		return page.map(x -> new MovieDTO(x));
	}
	
	@PreAuthorize("hasAnyRole('VISITOR', 'MEMBER')")
	@Transactional(readOnly = true)
	public MovieDTO findById(Long id) {
		Optional<Movie> obj = repository.findById(id);
		Movie entity = obj.orElseThrow(() -> new ResourceNotFoundException("Entity not found"));
		return new MovieDTO(entity);
	}

	
}
