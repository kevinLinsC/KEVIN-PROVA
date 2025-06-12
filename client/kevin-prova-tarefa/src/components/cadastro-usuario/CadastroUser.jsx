// Importação bootstrap
import Container from 'react-bootstrap/Container';
import Form from "react-bootstrap/Form";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Button from 'react-bootstrap/Button'

// Importação do useForm para mexer com o formulário.
import { useForm } from "react-hook-form";

// Importação das funções de InserirUsuario.
import { useInserirUsuario } from "../../hooks/useApi.js";

// Importação estilos.
import styles from './CadastroUser.module.css'

import { useNavigate } from "react-router-dom";

const CadastroUser = () => {
  // Inicialização das funções.
  const { inserirUsuario } = useInserirUsuario();

  // Criando o navigate
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm();

  // Enviando os dados.
  const onSubmit = async (dados) => {
    console.log(dados)
    alert("cadastro concluído com sucesso");

    inserirUsuario(dados);

    navigate("/Inicio")
  }

  // Se acontecer erro.
  const onError = (errors) => {
    console.log("Erros: ", errors);
  }

  return (
    <div className="d-flex justify-content-center align-items-center" style={{height: '94vh'}}>
        <div className={styles.formulario}>
          <h1 className={styles.titulo}>Cadastre um novo usuário</h1>
            <Container>
              <Form onSubmit={handleSubmit(onSubmit, onError)}>
                {/* Nome */}
                  <Row style={{marginBottom: "30px"}}>
                    <Col>
                      <FloatingLabel
                        controlId='floatingInputNome'
                        label="Nome*"
                      >
                        <Form.Control 
                          type='text'
                          placeholder='Nome*'
                          {...register("nome", {
                            required: "O nome é obrigatório",
                            pattern: {
                              value: /^[A-Za-zÀ-ÿ\s]+$/,
                              message: "Nome inválido",
                            },
                            minLength: {
                              value: 2,
                              message: "O nome deve conter pelo menos 2 caracteres",
                            },
                            maxLength: {
                              value: 75,
                              message: "O nome deve conter no máximo 75 caracteres"
                            }
                          })}
                        />
                        {errors.nome && <p className="error">{errors.nome.message}</p>}
                      </FloatingLabel>
                    </Col>
                  </Row>
                
                {/* E-mail */}
                  <Row style={{marginBottom: "30px"}}>
                    <Col>
                        <FloatingLabel
                          controlId='FloatingLabelEmail'
                          label="E-mail"
                        >
                          <Form.Control 
                            type='text'
                            placeholder='E-mail'
                            {...register("email", {
                              required: "O e-mail é obrigatório",
                              maxLength: {
                                value: 120,
                                message: "O e-mail não pode conter mais do que 120 caracteres."
                              },
                              pattern: {
                                value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                                message: "Email inválido",
                              },
                              validate: (value) => value.includes('@') || "E-mail inválido"
                            })}
                          />
                          {errors.email && <p className="error">{errors.email.message}</p>}
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

export default CadastroUser