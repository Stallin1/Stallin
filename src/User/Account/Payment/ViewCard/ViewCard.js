import React, { useContext } from 'react';
import './ViewCard.css';

import AddIcon from '@material-ui/icons/Add';
import SCard from './Card/SCard';
import { CardContext, ModeContext } from '../Payment';


function ViewCard(props) {

    const [mode, setMode] = useContext(ModeContext);
    const [cards, setCards] = useContext(CardContext);

    
    const addCard = () => {
        setMode("add");
    }


    return (
        <section className='Payment_section'>
            <h3>Saved Cards</h3>
            <button onClick={addCard} className='Profile_edit_btn'><AddIcon /> | <span>Add Card</span> </button>
            
            {cards.map(element => {
                return (<SCard  details={element} key={element.id} />)
            })}
            
        </section>
    )
}

export default ViewCard;
