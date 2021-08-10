import React from 'react';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings'
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';
import Rating from './components/Rating';
import {cards, creditCards, driverCards, carrouselContent} from './data/consts'
import DriverCard from './components/DriverCard';
import LikeButton from './components/LikeButton';
import ClickablePicture from './components/ClickablePicture';
import Dice from './components/Dice';
import Carrousel from './components/Carrousel';
import NumbersTable from './components/NumbersTable';
import Facebook from './components/Facebook';


function App() {
const cardsContent = cards.map((card, i) => {
  const cardObj = {...card, birth: card.birth.toLocaleDateString('en-EN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
  
  return <IdCard key={i} {...cardObj}/>
})

const creditCardContent = creditCards.map((cb, i) => <CreditCard key={i} getImage={() => cb.type === "Visa" ? "/img/visa.png" : "/img/master-card.svg"  } {...cb}/>)

const driverCardsContent = driverCards.map((dc, i) => <DriverCard key={i} {...dc}/>);
  return (
    <div className="App">
        {cardsContent}

        <Greetings lang='fr'>Quentin</Greetings>

        <Random min={2} max={10}/>

        <BoxColor r={128} g={255} b={0}/>

        {creditCardContent}

        <Rating>0</Rating>
        <Rating>1.49</Rating>
        <Rating>1.5</Rating>
        <Rating>3</Rating>
        <Rating>4</Rating>
        <Rating>5</Rating>

        {driverCardsContent}
        
        <LikeButton/>

        <ClickablePicture/>

        <Dice/>

        <Carrousel carrouselContent={carrouselContent}/>

        <NumbersTable limit={12}/>

        <Facebook/>
    </div>
  );
}

export default App;
