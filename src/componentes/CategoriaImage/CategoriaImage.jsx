import React from 'react';
import './CategoriaImage.css';

const CategoriaImage = ({ categoria }) => {
  let imgCat;

  switch (categoria) {
    case '1':
      imgCat = '../images/libros.png';
      break;
    case '2':
      imgCat = '../images/ingles.png';
      break;
    case '4':
      imgCat = '../images/packss.png';
      break;
    case '3':
      imgCat = '../images/agendas.png';
      break;
    default:
      imgCat = '../images/libros.jpg';
  }

  return <img className="categoriaImage" src={imgCat} alt={`${categoria}`} />;
};

export default CategoriaImage;
