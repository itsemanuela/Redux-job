import { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Spinner,
  Alert,
} from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Star, StarFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import Job from "./Job";
import {
  addToFavoriteAction,
  removeFavoritesAction,
  getJobsAction,
} from "../Redux/actions";

const MainSearch = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const jobs = useSelector((state) => state.jobs.results);
  const isLoading = useSelector((state) => state.jobs.isLoading);
  const isError = useSelector((state) => state.jobs.isError);
  const preferiti = useSelector((state) => state.favorites.list);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getJobsAction(query));
  };

  return (
    <Container>
      <Row>
        <Col
          xs={10}
          className="mx-auto my-3 d-flex justify-content-between align-items-center"
        >
          <h1 className="display-1">Remote Jobs</h1>
          <Link to="/favorites" className="btn btn-outline-primary">
            Preferiti ({preferiti.length})
          </Link>
        </Col>

        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Cerca un lavoro e premi Invio"
            />
          </Form>
        </Col>

        <Col xs={10} className="mx-auto mb-5 mt-4">
          {isLoading && (
            <div className="text-center my-5">
              <Spinner animation="border" variant="primary" />
              <p>Caricamento in corso...</p>
            </div>
          )}

          {isError && (
            <Alert variant="danger">
              Ouch! Errore nel recupero dei dati. Riprova tra poco.
            </Alert>
          )}

          {!isLoading &&
            !isError &&
            jobs.map((jobData) => {
              const isFav = preferiti.some((fav) => fav._id === jobData._id);
              return (
                <div
                  key={jobData._id}
                  className="d-flex align-items-center mb-2"
                >
                  <div className="flex-grow-1">
                    <Job data={jobData} />
                  </div>
                  <Button
                    variant={isFav ? "warning" : "outline-warning"}
                    className="ms-3"
                    onClick={() =>
                      isFav
                        ? dispatch(removeFavoritesAction(jobData._id))
                        : dispatch(addToFavoriteAction(jobData))
                    }
                  >
                    {isFav ? <StarFill size={18} /> : <Star size={18} />}
                  </Button>
                </div>
              );
            })}
        </Col>
      </Row>
    </Container>
  );
};

export default MainSearch;
