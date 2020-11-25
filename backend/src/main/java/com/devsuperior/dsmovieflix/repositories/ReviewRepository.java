package com.devsuperior.dsmovieflix.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.dsmovieflix.entities.Review;

public interface ReviewRepository extends JpaRepository<Review, Long>{

}
