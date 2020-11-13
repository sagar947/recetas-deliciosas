import { useFirebase } from 'react-redux-firebase';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { Button, Col, Container, Row } from 'react-bootstrap';

const SignIn = () => {
  const firebase = useFirebase();
  const router = useRouter();

  const signInWithGoogle = () => {
    firebase.login({
      provider: 'google',
      type: 'popup'
    })
    .then(() => {
      router.push('/');
    })
    .catch(err => {
      console.log(err);
    })
  }

  return (
    <>
      <Head>
        <title>Sign In - Deliciosas Recetas</title>
      </Head>
      <Container>
        <Row>
          <Col sm={12} md={{span: 4, offset: 4}}>
            <Button
              variant="primary"
              block
              onClick={(event) => {
                event.preventDefault();
                signInWithGoogle();
              }}
            >Sign in with Google</Button>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default SignIn;