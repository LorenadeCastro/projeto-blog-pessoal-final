package com.blogpessoal.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import java.util.List;

@Entity
@Table(name = "tb_usuarios")
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    private String nome;

    @Email
    @Column(unique = true)
    private String usuario;

    @NotBlank
    private String senha;

    private String foto;

    private String tipo;

    @OneToMany(mappedBy = "usuario", cascade = CascadeType.REMOVE)
    private List<Postagem> postagens;

    // Getters e Setters
}
