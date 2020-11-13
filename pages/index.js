import Head from 'next/head';
import RecipesList from '../components/recipes-list';
import { Container, Row } from 'react-bootstrap';

const Index = () => {
  return (
    <>
      <Head>
        <title>Home - Deliciosas Recitas</title>
      </Head>
      <Container>
        <RecipesList />
      </Container>
    </>
  )
}

export default Index
