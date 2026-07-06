package com.naillink.backend.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.naillink.backend.entity.Usuario;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Integer> {

    Optional<Usuario> findByUsuario(String usuario);

    Optional<Usuario> findByUsuarioAndContrasena(String usuario, String contrasena);

}