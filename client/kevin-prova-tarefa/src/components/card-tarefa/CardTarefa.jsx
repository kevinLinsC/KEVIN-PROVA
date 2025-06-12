// Importação do react-bootstrap
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

// Importação de styles.
import styles from './CardTarefa.module.css';

import { useDeletarTarefa } from '../../hooks/useApi';


const CardTarefa = (props) => {
    const { deletarTarefa } = useDeletarTarefa();

    const handleDelete = async () => {
        const deleted = await deletarTarefa(props.id);

        alert(`Tarefa ${deleted.desc_tarefa} deletado com sucesso`);

        window.location.reload();
    }

  return (
    <div style={{minWidth: '100%', maxWidth: '100%'}}>
        <div style={{margin: '0', padding: '0', marginTop:"1rem"}}>
            <Container className={styles.caixaCard}>
                <Card style={{width: "100%", height: "20rem", display: "flex", flexDirection: "column"}}>
                    <Card.Body>
                        <Card.Text className={styles.textoCard}>
                            <span><strong>Descrição: </strong>{props.desc_tarefa}</span>
                        </Card.Text>

                        <Card.Text className={styles.textoCard}>
                            <span><strong>Setor: </strong>{props.nome_setor}</span>
                        </Card.Text>

                        <Card.Text className={styles.textoCard}>
                            <span><strong>Prioridade: </strong>{props.prioridade}</span>
                        </Card.Text>

                        <Card.Text className={styles.textoCard}>
                            <span><strong>Vinculado a: </strong>{props.usuario}</span>
                        </Card.Text>

                        <div className="d-flex justify-content-between mt-4">
                            <Button size="lg" type='button' href={`/Editar-tarefa/${props.id}`}>Editar</Button>
                            <Button style={{alignSelf: 'end'}} size="lg" variant="danger" type="button" onClick={handleDelete}>Excluir</Button>
                        </div>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    </div>
  )
}

export default CardTarefa