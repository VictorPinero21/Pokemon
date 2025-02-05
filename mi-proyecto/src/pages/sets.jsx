import { useEffect, useState } from "react";
import styled from "styled-components";

// Contenedor Principal
const Container = styled.div`
  padding: 20px;
  background-color: #f5f5f5;
  min-height: 100vh;
`;

// Título de la serie
const SeriesTitle = styled.h1`
  font-size: 28px;
  font-weight: bold;
  color: #333;
  margin-top: 30px;
`;

// Grid de Sets
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  justify-content: center;
`;

// Tarjeta Individual del Set
const Card = styled.div`
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

// Logo del Set
const SetLogo = styled.img`
  width: 100%;
  max-height: 120px;
  object-fit: contain;
  margin-bottom: 10px;
`;

// Información del Set
const SetInfo = styled.p`
  font-size: 16px;
  color: #555;
`;

function sets() {
  const [sets, setSets] = useState([]); // Guardará todos los sets
  const [series, setSeries] = useState([]); // Guardará las series únicas

  useEffect(() => {
    fetch(`https://api.pokemontcg.io/v2/sets`)
      .then((res) => res.json())
      .then((data) => {
        if (data && data.data) {
          setSets(data.data);
          const uniqueSeries = [...new Set(data.data.map(set => set.series))];
          setSeries(uniqueSeries);
        }
      })
      .catch((error) => console.error("Error al obtener los sets:", error));
  }, []);

  return (
    <Container>
      {series.length === 0 ? (
        <p>Cargando series...</p>
      ) : (
        series.map((serie) => (
          <div key={serie}>
            <SeriesTitle>{serie}</SeriesTitle>
            <Grid>
              {sets
                .filter((set) => set.series === serie) // Filtra los sets por serie
                .map((set) => (
                  <Card key={set.id}>
                    <SetLogo src={set.images.logo} alt={set.name} />
                    <h2>{set.name}</h2>
                    <SetInfo>Released {set.releaseDate}</SetInfo>
                  </Card>
                ))}
            </Grid>
          </div>
        ))
      )}
    </Container>
  );
}

export default sets;
