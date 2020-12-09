package com.devsuperior.dsmovieflix.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.devsuperior.dsmovieflix.entities.Role;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
}
