package com.devsuperior.dsmovieflix.repositories;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.devsuperior.dsmovieflix.entities.Genre;
import com.devsuperior.dsmovieflix.entities.Movie;

@Repository
public interface MovieRepository extends JpaRepository<Movie, Long> {

	@Query("SELECT obj FROM Movie obj WHERE "
			+ "(:genre IS NULL OR genre = :genre) "
			+ "ORDER BY obj.title")
	Page<Movie> find(Genre genre, Pageable pageable);
}
