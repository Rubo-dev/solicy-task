import { FC, useCallback, useMemo, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Instructions from './components/Instructions';
import Footer from './components/Footer';

const App: FC = () => {

  const [cards, setCards] = useState<number[]>([]);
  const addCard = useCallback(() => {
    const existingNumbers = cards.map((card) => card);
    let randomNumber: number = Math.floor(Math.random() * 1000)
    if (existingNumbers.some(num => num === randomNumber)) {
      randomNumber = Math.floor(Math.random() * 1000)
    }
    const newCard = randomNumber
    setCards([...cards, newCard]);
  }, [cards]);

  const sortCards = () => {
    const sortedCards = [...cards].sort((a, b) => a - b)
    setCards(sortedCards);

  }

  const deleteCard = useCallback((number: number) => {
    const updatedCards = cards.filter((cardNumber) => cardNumber !== number);
    setCards(updatedCards);
  }, [cards]);

  return (
    <div className="app">
      <Header addCard={addCard} sortCards={sortCards} />
      <Main deleteCard={deleteCard} cards={cards} />
      <Instructions />
      <Footer />
    </div>
  );
};

export default App;