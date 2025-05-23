package com.blogpessoal.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import java.time.LocalDate;

@Entity
@Table(name = "tb_postagens")
public class Postagem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    private String titulo;

    @NotBlank
    private String texto;

    private LocalDate data = LocalDate.now();

    @ManyToOne
    @JoinColumn(name = "fk_tema")
    private Tema tema;

    @ManyToOne
    @JoinColumn(name = "fk_usuario")
    private Usuario usuario;

    // Getters e Setters
}
