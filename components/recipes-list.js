import { useEffect, useState } from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import Pagination from 'react-responsive-pagination';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile, faHeart } from '@fortawesome/free-solid-svg-icons';
import { fetchRecipes } from '../actions';

const RecipesList = () => {

  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(useSelector(state => state.recipes.currentPage))

  useEffect(() => {
    dispatch(fetchRecipes(currentPage));
  }, [dispatch]);

  const recipes = useSelector(state => state.recipes.items);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    dispatch(fetchRecipes(page));
  }
  
  return (
    <>
      <Row>
        {
          recipes.map((recipe, i) => (
            <Col xs={6} md={3} key={i}>
              <Card className="mt-5">
                <Card.Img variant="top" src={recipe.thumbnail || '/images/logo.png'} alt={recipe.title}></Card.Img>
                <Card.Body>
                  <Card.Title>{ recipe.title }</Card.Title>
                  <Card.Text>{ recipe.ingredients }</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Row>
                    <Col sm={6} className="text-center text-primary">
                      <FontAwesomeIcon icon={ faFile } size="lg" />
                    </Col>
                    <Col sm={6} className="text-center text-primary">
                      <FontAwesomeIcon icon={ faHeart } size="lg" />
                    </Col>
                  </Row>
                </Card.Footer>
              </Card>
            </Col>
          ))
        }
        <Col xs={12} md={{ span: 6, offset: 3 }} className="my-4">
          <Pagination
            current={currentPage}
            total={100}
            onPageChange={handlePageChange}
          />
        </Col>
      </Row>
    </>
  );
}

export default RecipesList;
