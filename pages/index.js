import Link from 'next/link'
import RecipesList from '../components/recipes-list';
import { Container, Row } from 'react-bootstrap';

const Index = () => {
  return (
    <>
      <Container>
        <RecipesList />
      </Container>
    </>
  )
}

export default Index
