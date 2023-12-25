import React from 'react'
import NavaBar from './componentes/NavBar/NavBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';

const App = () => {
  return (
  <>
    <NavaBar/>
    <ItemListContainer greeting="Acá vas a encontrar todos los libros que no conseguís en otro lado" />
  </>
  )
}

export default App