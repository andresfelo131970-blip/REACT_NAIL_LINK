package com.naillink.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.naillink.backend.entity.Persona;

@Repository
public interface PersonaRepository extends JpaRepository<Persona, Integer> {

    boolean existsByIdentificacion(String identificacion);

    boolean existsByCorreo(String correo);

}