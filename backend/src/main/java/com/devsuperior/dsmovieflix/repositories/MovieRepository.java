package com.devsuperior.dsmovieflix.repositories;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.devsuperior.dsmovieflix.entities.Movie;

public interface MovieRepository extends JpaRepository<Movie, Long>{

	@Query("SELECT obj FROM Movie obj WHERE "
			+ "(:genreId IS NULL OR genre_id = :genreId) "
			+ "ORDER BY obj.title")
	Page<Movie> find(Long genreId, Pageable pageable);
}
