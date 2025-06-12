// Url da api do arquivo .env
const url = import.meta.env.VITE_API_URL;

import { useState, useEffect } from "react";

export function useInserirUsuario() {
    const inserirUsuario = async (dados) => {
        console.log(url)
        const req = await fetch(`${url}/usuarios`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(dados)
        });

        const res = await req.json();
        console.log("Usuario cadastrado: ", res);

        return res;
    };

    return { inserirUsuario };
}

export function useListaUsuarios() {
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const req = await fetch(`${url}/usuarios`);
                const res = await req.json();
                setUsuarios(res);
            }
            catch(erro) {
                console.log(erro);
            }
        }
        fetchData();
    },[])

    return usuarios
}

export function useInserirTarefa() {
    const inserirTarefa = async (dados) => {
        const req = await fetch(`${url}/tarefas`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(dados)
        });

        const res = await req.json();
        console.log("Tarefa cadastrada: ", res);

        return res;
    };

    return { inserirTarefa };
}

export function useListaTarefas() {
    const [tarefas, setTarefas] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const req = await fetch(`${url}/tarefas`);
                const res = await req.json();
                setTarefas(res);
            }
            catch(erro) {
                console.log(erro);
            }
        }
        fetchData();
    },[])

    return tarefas
}

export function useBuscarTarefaPorId() {
    const buscarTarefaPorId = async (id_tarefa) => {
        const req = await fetch(`${url}/tarefas/${id_tarefa}`);
        const res = await req.json();

        console.log("Tarefa encontrada: ", res);
        return res;
    };

    return { buscarTarefaPorId };
}

export function useAtualizarTarefa() {
  const atualizarTarefa = async (data, id_tarefa) => {
    console.log(data);
    
    const req = await fetch(`${url}/tarefas/${id_tarefa}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const res = await req.json();

    console.log("livro atualizado:", res);
    // Retorna o livro atualizado
    return res;
  };
  return { atualizarTarefa };
}

export function useDeletarTarefa() {
    const deletarTarefa = async (id_tarefa) => {
        const req = await fetch(`${url}/tarefas/${id_tarefa}`, {
            method: "DELETE",
        });

        const res = await req.json();

        return res;
    };

    return { deletarTarefa };
}