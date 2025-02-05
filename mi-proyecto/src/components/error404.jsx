import React from "react";
import styled from "styled-components";
import imagen from "../assets/123.png"
// Contenedor principal
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;

`;

// Imagen
const Image = styled.img`
  max-width: 400px;
  margin-bottom: 20px;
`;

// Título y texto
const Title = styled.h1`
  font-size: 50px;
  font-weight: bold;
  color: #333;
`;

const Text = styled.p`
  font-size: 18px;
  color: #666;
`;

// Botón para volver al inicio
const Button = styled.a`
  padding: 10px 20px;
  font-size: 18px;
  color: white;
  background-color: #007bff;
  text-decoration: none;
  border-radius: 5px;
  margin-top: 20px;
  transition: background 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

function error404() {
  return (
    <Container>
    <Image src={imagen} />
      <Title>404</Title>
      <Text>Oops! La página que buscas no existe.</Text>
      <Button href="/">Volver al Inicio</Button>
    </Container>
  );
}

export default error404;
