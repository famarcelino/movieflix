package com.devsuperior.dsmovieflix.dto;

import java.io.Serializable;

import javax.validation.constraints.NotBlank;

import com.devsuperior.dsmovieflix.entities.Review;

public class ReviewDTO implements Serializable {
	private static final long serialVersionUID = 1L;

	private Long id;
	
	@NotBlank(message = "Esse campo não pode ser vazio.")
	private String text;
	private Long userId;
	private Long movieId;
	
	private UserDTO user;
	
	public ReviewDTO() {
	}

	public ReviewDTO(Long id, String text, Long userId, Long movieId) {
		this.id = id;
		this.text = text;
		this.userId = userId;
		this.movieId = movieId;
	}
	
	public ReviewDTO(Review entity) {
		id = entity.getId();
		text = entity.getText();
		userId = entity.getUser().getId();
		movieId = entity.getMovie().getId();
		user = new UserDTO(entity.getUser());
	}
	
	public ReviewDTO(Review entity, UserDTO user) {
		this(entity);
		user = new UserDTO(entity.getUser());
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getText() {
		return text;
	}

	public void setText(String text) {
		this.text = text;
	}

	public Long getUserId() {
		return userId;
	}

	public void setUserId(Long userId) {
		this.userId = userId;
	}

	public Long getMovieId() {
		return movieId;
	}

	public void setMovieId(Long movieId) {
		this.movieId = movieId;
	}

	public UserDTO getUser() {
		return user;
	}

	public void setUser(UserDTO user) {
		this.user = user;
	}
}
