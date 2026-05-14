import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Star, StarFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import Job from "./Job";
import { addToFavoriteAction, removeFavoritesAction } from "../Redux/actions";

const MainSearch = () => {
  const [query, setQuery] = useState("");
  const [jobs, setJobs] = useState([]);

  const dispatch = useDispatch();

  const preferiti = useSelector((state) => state.favorites.list);

  const baseEndpoint =
    "https://strive-benchmark.herokuapp.com/api/jobs?search=";

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(baseEndpoint + query + "&limit=20");
      if (response.ok) {
        const { data } = await response.json();
        setJobs(data);
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Row>
        <Col
          xs={10}
          className="mx-auto my-3 d-flex justify-content-between align-items-center"
        >
          <h1 className="display-1">Remote Jobs Search</h1>

          <Link to="/favorites" className="btn btn-outline-primary">
            I Miei Preferiti ({preferiti.length})
          </Link>
        </Col>

        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              value={query}
              onChange={handleChange}
              placeholder="type and press Enter"
            />
          </Form>
        </Col>

        <Col xs={10} className="mx-auto mb-5 mt-4">
          {jobs.map((jobData) => {
            const isFav = preferiti.some((fav) => fav._id === jobData._id);

            return (
              <div key={jobData._id} className="d-flex align-items-center mb-2">
                <div className="flex-grow-1">
                  <Job data={jobData} />
                </div>

                <Button
                  variant={isFav ? "warning" : "outline-warning"}
                  className="ms-3"
                  onClick={() => {
                    if (isFav) {
                      dispatch(removeFavoritesAction(jobData._id));
                    } else {
                      dispatch(addToFavoriteAction(jobData));
                    }
                  }}
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
