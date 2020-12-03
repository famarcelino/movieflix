package com.devsuperior.dsmovieflix.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.dsmovieflix.entities.Genre;

public interface GenreRepository extends JpaRepository<Genre, Long> {
}
