import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import CardTarefa from "../../components/card-tarefa/CardTarefa.jsx";

// Importando a função de ListaTarefas.
import { useListaTarefas } from "../../hooks/useApi.js";

const Inicio = () => {

  const tarefas = useListaTarefas();

  return (
    <div>
      <Row>
        <Col xs={4}>
          <h1>A fazer</h1>
          {tarefas.map((tarefa) => tarefa.status_tarefa === "A fazer" && (
            <CardTarefa 
              key={tarefa.id}
              id={tarefa.id}
              desc_tarefa={tarefa.desc_tarefa}
              nome_setor={tarefa.nome_setor}
              prioridade={tarefa.prioridade}
              usuario={tarefa.usuario}
            />
          ))}
        </Col>

        <Col xs={4}>
          <h1>Fazendo</h1>
          {tarefas.map((tarefa) => tarefa.status_tarefa === "Fazendo" && (
            <CardTarefa 
              key={tarefa.id}
              id={tarefa.id}
              desc_tarefa={tarefa.desc_tarefa}
              nome_setor={tarefa.nome_setor}
              prioridade={tarefa.prioridade}
              usuario={tarefa.usuario}
            />
          ))}
        </Col>

        <Col xs={4}>
          <h1>Pronto</h1>
          {tarefas.map((tarefa) => tarefa.status_tarefa === "Pronto" && (
            <CardTarefa 
              key={tarefa.id}
              id={tarefa.id}
              desc_tarefa={tarefa.desc_tarefa}
              nome_setor={tarefa.nome_setor}
              prioridade={tarefa.prioridade}
              usuario={tarefa.usuario}
            />
          ))}
        </Col>
      </Row>
    </div>
  )
}

export default Inicio