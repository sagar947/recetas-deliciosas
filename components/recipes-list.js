import { useEffect, useState } from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import Pagination from 'react-responsive-pagination';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecipes } from '../actions';
import Recipe from './recipe';

const RecipesList = () => {

  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(useSelector(state => state.recipes.currentPage))

  useEffect(() => {
    dispatch(fetchRecipes(currentPage));
  }, [dispatch]);

  const recipes = useSelector(state => state.recipes.items);

  const handlePageChange = (page) => {
    window.scroll(0, 0);
    setCurrentPage(page);
    dispatch(fetchRecipes(page));
  }
  
  return (
    <>
      <Row>
        {
          recipes.map((recipe, i) => (
            <Recipe recipe={recipe} key={i} />
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
