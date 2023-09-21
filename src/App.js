import React from 'react';
import { GlobalStyle } from './Styles/GlobalStyle';
import { Navbar } from './Navbar/Navbar';
import { Banner } from './Banner/Banner';
import { Menu } from './Menu/Menu';
import { FoodDialog } from './FoodDialog/FoodDialog';
import { useOpenFood } from './hooks/useOpenFood';

function App() {
  const openFood = useOpenFood();

  return (
    <>
      <GlobalStyle />
      <FoodDialog {...openFood} />
      <Navbar />
      <Banner>
        <h2>Las comidas más ricas de Córdoba</h2>
        <p>Pedí por acá, es rápido y fácil</p>
      </Banner>
      <Menu {...openFood} />
    </>
  );
}

export default App;
