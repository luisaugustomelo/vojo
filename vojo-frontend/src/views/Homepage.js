import React, { useContext, useEffect } from 'react';
import {
  Container,
  Header,
  Footer,
  Typography,
  themes,
} from "@mindlab-vojo/component-library";

import { Jobs } from '../components/layouts';

import { ModalContext } from '../contexts/ModalContext';

import '../styles/Home.scss';

const Homepage = () => {
  const { setShow } = useContext(ModalContext);

  useEffect(() => {
    return () => setShow(false);
  }, []);

  return (
    <Container maxWidth="full">
      <Container maxWidth="full">
        <Header />
      </Container>

      <div className="jobs-container Login__Container">
        <div>
          <Typography
            tag="h1"
            type="title"
            color={themes.vojo.colors.primaryColor}
          >
            <strong>Vagas em aberto</strong>
          </Typography>
        </div>

        <Jobs />
      </div>

      <Container maxWidth="full">
        <Footer />
      </Container>
    </Container>
  );
}

export default Homepage;