import { Container, Row, Col, ListGroup, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Trash } from "react-bootstrap-icons";

const Dettaglio = () => {
  const preferiti = useSelector((state) => state.favorites.list);
  const dispatch = useDispatch();

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <div className="d-flex justify-content-between align-items-center">
            <h1 className="display-4">Aziende Preferite</h1>
            <Link to="/" className="btn btn-primary">
              Torna alla Ricerca
            </Link>
          </div>
          <hr />
        </Col>

        <Col xs={10} className="mx-auto">
          {preferiti.length > 0 ? (
            <ListGroup>
              {preferiti.map((azienda) => (
                <ListGroup.Item
                  key={azienda._id}
                  className="d-flex justify-content-between align-items-center"
                >
                  <div>
                    <Link to={`/${azienda.company_name}`} className="fw-bold">
                      {azienda.company_name}
                    </Link>
                    <span className="ms-3 text-muted">{azienda.title}</span>
                  </div>

                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() =>
                      dispatch({
                        type: "REMOVE_FAVORITES",
                        payload: azienda._id,
                      })
                    }
                  >
                    <Trash />
                  </Button>
                </ListGroup.Item>
              ))}
            </ListGroup>
          ) : (
            <div className="text-center mt-5">
              <h3>La tua lista è vuota</h3>
              <p>Torna in home e clicca sulla stella per aggiungere aziende!</p>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Dettaglio;
