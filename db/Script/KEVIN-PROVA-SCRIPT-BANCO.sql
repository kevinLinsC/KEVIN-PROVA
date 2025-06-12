CREATE DATABASE tarefas;

USE tarefas;

CREATE TABLE usuarios(
	id_usuario INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(75),
    email VARCHAR(120)
);

CREATE TABLE tarefa(
	id_tarefa INT PRIMARY KEY AUTO_INCREMENT,
    desc_tarefa VARCHAR(150),
    nome_setor VARCHAR(75),
	prioridade ENUM("Baixa", "Média", "Alta"),
    dt_cadastro DATE,
    status_tarefa ENUM("A Fazer", "Fazendo", "Pronto"),
    id_usuario INT,
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario)
);