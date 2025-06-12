// Importação bootstrap
import Container from 'react-bootstrap/Container';
import Form from "react-bootstrap/Form";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';

// Importação do useForm para mexer com o formulário.
import { useForm } from "react-hook-form";

import { useNavigate, useParams } from "react-router-dom";

import { useBuscarTarefaPorId, useAtualizarTarefa, useListaUsuarios } from '../../hooks/useApi.js';

// Importação estilos.
import styles from './EditarTarefa.module.css'

import { useEffect, useState } from 'react';

const EditarTarefa = () => {
    // Inicialização das funções.
    const { buscarTarefaPorId } = useBuscarTarefaPorId();
    const { atualizarTarefa } = useAtualizarTarefa();

    // Lista com todos usuários.
    const usuarios = useListaUsuarios();

    const { id_tarefa } = useParams();

    console.log(id_tarefa)

    // Controla se o livro já foi carregado
    const [carregado, setCarregado] = useState(false);

    // Criando o navigate
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: {errors},
        reset,  
    } = useForm();

    useEffect(() => {
        async function fetchTarefa() {
            try{
                if (usuarios.length === 0) {
                    return;
                }

                const tarefa = await buscarTarefaPorId(id_tarefa)

                if (tarefa && !carregado) {
                    reset({
                        desc_tarefa: tarefa.desc_tarefa,
                        nome_setor: tarefa.nome_setor,
                        prioridade: tarefa.prioridade,
                        usuario: tarefa.usuario,
                        status_tarefa: tarefa.status_tarefa
                    });

                    setCarregado(true);
                }
            }
            catch (erro) {
                console.error("Erro ao buscar tarefa: ", erro);

                if (erro.message.includes("Unexpected")) {
                    alert("Tarefa não encontrada");
                    navigate("/Inicio");
                }
            }
        }
        
        fetchTarefa();
    }, [usuarios]);

    // Enviando os dados.
    const onSubmit = (dados) => {
        console.log("Dados:", dados);

        atualizarTarefa(dados, id_tarefa);

        alert("Tarefa atualizada com sucesso")
        navigate("/Inicio")
    }

    // Se acontecer erro.
    const onError = (errors) => {
        console.log("Erros: ", errors);
    }
  return (
    <div className="d-flex justify-content-center align-items-center" style={{height: '94vh'}}>
        <div className={styles.formulario}>
          <h1 className={styles.titulo}>Editar tarefa</h1>
            <Container>
              <Form onSubmit={handleSubmit(onSubmit, onError)}>
                {/* Descrição */}
                  <Row style={{marginBottom: "40px"}}>
                    <Col>
                      <FloatingLabel
                        controlId='floatingInputDescricao'
                        label="Descricao*"
                      >
                        <Form.Control 
                          type='text'
                          placeholder='Descricao*'
                          {...register("desc_tarefa", {
                            required: "A descrição é obrigatória",
                            minLength: {
                              value: 5,
                              message: "A descrição deve conter pelo menos 5 caracteres",
                            },
                            maxLength: {
                              value: 150,
                              message: "A descrição deve conter no máximo 150 caracteres"
                            }
                          })}
                        />
                        {errors.desc_tarefa && <p className="error">{errors.desc_tarefa.message}</p>}
                      </FloatingLabel>
                    </Col>
                  </Row>

                {/* Setor */}
                  <Row style={{marginBottom: "40px"}}>
                    <Col>
                        <FloatingLabel
                          controlId='FloatingLabelSetor'
                          label="Setor*"
                        >
                          <Form.Control 
                            type='text'
                            placeholder='Setor*'
                            {...register("nome_setor", {
                                required: "O setor é obrigatório",
                                minLength: {
                                    value: 2,
                                    message: "O setor deve conter pelo menos 2 caracteres",
                                },
                                maxLength: {
                                    value: 75,
                                    message: "O setor deve conter no máximo 75 caracteres"
                                }
                            })}
                          />
                          {errors.nome_setor && <p className="error">{errors.nome_setor.message}</p>}
                        </FloatingLabel>
                    </Col>
                  </Row>
                
                {/* Usuário */}
                  <Row>
                    <Col>
                        <FloatingLabel controlId='floatingSelectUsuario' label="Usuario*" className="mb-5">
                          <Form.Select
                            {...register("usuario", {
                              validate: (value) => value != "Nenhum" || "Escolha um usuario",
                            })}
                          >
                            <option value="Nenhum">Escolha um usuario</option>
                            {usuarios.map((user) => (
                              <option 
                                key={user.id}
                                value={user.nome}
                              >
                                {user.nome}
                              </option>
                            ))}
                          </Form.Select>
                          {errors.usuario && (<p className="error">{errors.usuario.message}</p>)}
                        </FloatingLabel>
                    </Col>
                  </Row>
                
                {/* Prioridade */}
                  <Row>
                    <Col>
                        <FloatingLabel controlId='floatingSelectPrioridade' label="Prioridade*" className="mb-5">
                          <Form.Select
                            {...register("prioridade", {
                              validate: (value) => value != "Nenhum" || "Escolha uma prioridade",
                            })}
                          >
                            <option value="Nenhum">Escolha uma prioridade</option>
                            <option value="Baixa">Baixa</option>
                            <option value="Média">Média</option>
                            <option value="Alta">Alta</option>
                            
                          </Form.Select>
                          {errors.usuario && (<p className="error">{errors.usuario.message}</p>)}
                        </FloatingLabel>
                    </Col>
                  </Row>

                  {/* Status */}
                  <Row>
                    <Col>
                        <FloatingLabel controlId='floatingSelectStatus' label="Prioridade*" className="mb-5">
                          <Form.Select
                            {...register("status_tarefa", {
                              validate: (value) => value != "Nenhum" || "Escolha um status",
                            })}
                          >
                            <option value="Nenhum">Escolha um status</option>
                            <option value="A fazer">A fazer</option>
                            <option value="Fazendo">Fazendo</option>
                            <option value="Pronto">Pronto</option>
                            
                          </Form.Select>
                          {errors.usuario && (<p className="error">{errors.usuario.message}</p>)}
                        </FloatingLabel>
                    </Col>
                  </Row>
                
                {/* Enviar */}
                  <Container className={styles.caixaBotao}>
                    <Button className={styles.botao} type="submit">Cadastrar</Button>
                  </Container>
              </Form>
            </Container>
        </div>
    </div>
  )
}

export default EditarTarefa