package com.blogpessoal.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import java.util.List;

@Entity
@Table(name = "tb_temas")
public class Tema {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    private String descricao;

    @OneToMany(mappedBy = "tema", cascade = CascadeType.ALL)
    private List<Postagem> postagens;

    // Getters e Setters
}
