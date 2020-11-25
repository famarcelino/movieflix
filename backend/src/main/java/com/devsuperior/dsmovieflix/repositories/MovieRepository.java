package com.devsuperior.dsmovieflix.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.dsmovieflix.entities.Movie;

public interface MovieRepository extends JpaRepository<Movie, Long>{

}
