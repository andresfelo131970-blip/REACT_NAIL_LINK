package com.naillink.backend.service;

import java.time.LocalDate;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.naillink.backend.dto.LoginRequest;
import com.naillink.backend.dto.RegistroRequest;
import com.naillink.backend.entity.Cliente;
import com.naillink.backend.entity.Persona;
import com.naillink.backend.entity.Usuario;
import com.naillink.backend.repository.ClienteRepository;
import com.naillink.backend.repository.PersonaRepository;
import com.naillink.backend.repository.UsuarioRepository;

@Service
public class AuthService {

    @Autowired
    private PersonaRepository personaRepository;

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private ClienteRepository clienteRepository;

    // Registrar usuario
    public String registrar(RegistroRequest request) {

        Optional<Usuario> usuarioExistente =
                usuarioRepository.findByUsuario(request.getUsuario());

        if (usuarioExistente.isPresent()) {
            return "El usuario ya existe";
        }

    // Validar identificación
        if (personaRepository.existsByIdentificacion(request.getIdentificacion())) {
            return "La identificación ya está registrada";
        }

    // Validar correo
        if (personaRepository.existsByCorreo(request.getCorreo())) {
         return "El correo ya está registrado";
        }

        // Guardar Persona
        Persona persona = new Persona();
        persona.setNombre(request.getNombre());
        persona.setApellidos(request.getApellidos());
        persona.setTipoDocumento(request.getTipoDocumento());
        persona.setIdentificacion(request.getIdentificacion());
        persona.setCorreo(request.getCorreo());
        persona.setTelefono(request.getTelefono());
        persona.setDireccion(request.getDireccion());

        persona = personaRepository.save(persona);

        // Guardar Usuario
        Usuario usuario = new Usuario();
        usuario.setUsuario(request.getUsuario());
        usuario.setContrasena(request.getContrasena());
        usuario.setRol("CLIENTE");

        usuario = usuarioRepository.save(usuario);

        // Guardar Cliente
        Cliente cliente = new Cliente();
        cliente.setPersona(persona);
        cliente.setUsuario(usuario);
        cliente.setFechaRegistro(LocalDate.now());
        cliente.setEstado("ACTIVO");

        clienteRepository.save(cliente);

        return "Usuario registrado correctamente";
    }

    // Login
    public String login(LoginRequest request) {

        Optional<Usuario> usuario =
                usuarioRepository.findByUsuarioAndContrasena(
                        request.getUsuario(),
                        request.getContrasena());

        if (usuario.isPresent()) {
            return "Login correcto";
        }

        return "Usuario o contraseña incorrectos";
    }

}