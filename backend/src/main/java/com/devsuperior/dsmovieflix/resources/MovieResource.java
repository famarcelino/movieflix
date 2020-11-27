package com.devsuperior.dsmovieflix.resources;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.devsuperior.dsmovieflix.dto.MovieDTO;
import com.devsuperior.dsmovieflix.services.MovieService;

@RestController
@RequestMapping(value = "/movies")
public class MovieResource {
	
	@Autowired
	private MovieService service;

	@GetMapping
	public ResponseEntity<Page<MovieDTO>> findAll(
			@RequestParam(value = "genreId", defaultValue = "0") Long genreId,
			@RequestParam(value = "page", defaultValue = "0") Integer page,
			@RequestParam(value = "size", defaultValue = "5") Integer size) {

		PageRequest pageRequest = PageRequest.of(page, size);

		Page<MovieDTO> list = service.listOfMovies(genreId, pageRequest);
		return ResponseEntity.ok().body(list);
	}
}
