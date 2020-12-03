package com.devsuperior.dsmovieflix.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.dsmovieflix.entities.Role;

public interface RoleRepository extends JpaRepository<Role, Long> {
}
