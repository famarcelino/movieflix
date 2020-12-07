package com.devsuperior.dsmovieflix.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.dsmovieflix.dto.ReviewDTO;
import com.devsuperior.dsmovieflix.entities.Movie;
import com.devsuperior.dsmovieflix.entities.Review;
import com.devsuperior.dsmovieflix.entities.User;
import com.devsuperior.dsmovieflix.repositories.ReviewRepository;

@Service
public class ReviewService {

	@Autowired
	private ReviewRepository repository;
	
	//@Autowired
	//private AuthService authService;

	@PreAuthorize("hasAnyRole('VISITOR', 'MEMBER')")
	@Transactional(readOnly = true)
	public List<ReviewDTO> findAll() {
		List<Review> list = repository.findAll();
		return list.stream().map(x -> new ReviewDTO(x)).collect(Collectors.toList());
	}

	/*@PreAuthorize("hasAnyRole('MEMBER')")
	@Transactional
	public void saveReview(Review entity) {
		try {
			User user = entity.getUser();
			Movie movie = entity.getMovie();
			
			String text = entity.getText();
			
			Review review = new Review(null, text, user, movie);
			repository.save(review);
		}
		catch () {
		}
	}*/
}
