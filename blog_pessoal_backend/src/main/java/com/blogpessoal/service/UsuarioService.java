package com.blogpessoal.service;

import com.blogpessoal.dto.UsuarioLogin;
import com.blogpessoal.model.Usuario;
import com.blogpessoal.repository.UsuarioRepository;
import com.blogpessoal.security.JwtService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private JwtService jwtService;

    public Optional<Object> logarUsuario(UsuarioLogin usuarioLogin) {
        Optional<Usuario> usuario = usuarioRepository.findByUsuario(usuarioLogin.getUsuario());
        if (usuario.isPresent() && new BCryptPasswordEncoder().matches(usuarioLogin.getSenha(), usuario.get().getSenha())) {
            String token = jwtService.generateToken(usuario.get().getUsuario());
            return Optional.of(token);
        }
        return Optional.empty();
    }

    public Optional<Usuario> cadastrarUsuario(Usuario usuario) {
        if (usuarioRepository.findByUsuario(usuario.getUsuario()).isPresent()) {
            return Optional.empty();
        }
        usuario.setSenha(new BCryptPasswordEncoder().encode(usuario.getSenha()));
        return Optional.of(usuarioRepository.save(usuario));
    }
}
