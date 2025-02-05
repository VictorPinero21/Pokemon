//Componentes de Página Son los que representan una vista completa en la aplicación (como Home, History, y CardDetails).import { useEffect, useState } from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function CardDetails() {

  const { id } = useParams();
  const [card, setCard] = useState(null);

  //efecto para hacer el fetch a la api con el id que me han dado 
  useEffect(() => {
    fetch(`https://api.pokemontcg.io/v2/cards/${id}`)
      .then((res) => res.json())
      .then((data) => setCard(data.data));
  }, [id]);

  //Si no se encuentra la carta o tarda demasiado en cargar
  if (!card) return <p>Cargando...</p>;

  return (
    <div>
      <h1>{card.name}</h1>
      <img src={card.images.large} alt={card.name} />
      <p><strong>Tipo:</strong> {card.types?.join(', ') || 'Desconocido'}</p>
      <p><strong>Rareza:</strong> {card.rarity || 'No disponible'}</p>
      <p><strong>Set:</strong> {card.set.name}</p>
    </div>
  );
}

export default CardDetails;
