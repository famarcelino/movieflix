package com.devsuperior.dsmovieflix.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.dsmovieflix.dto.MovieDTO;
import com.devsuperior.dsmovieflix.entities.Movie;
import com.devsuperior.dsmovieflix.repositories.MovieRepository;

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
	
}
