import React, { useContext } from 'react';
import './SCard.css';

import cardImage from '../../../images/card.svg';
import { CardContext, EditContext, ModeContext } from '../../Payment';


function SCard(props) {

    const [editId, setEditId] = useContext(EditContext);
    const [mode, setMode] = useContext(ModeContext);
    const [cards, setCards] = useContext(CardContext);


    const editClicked = () => {
        setEditId(props.details.id);
        setMode("edit");
    }

    const removeCard = () => {
        const newCards = [...cards];
        const cardIndex = cards.findIndex(card => card.id === props.details.id);
        newCards.splice(cardIndex, 1);

        console.log(newCards);

        setCards(newCards);
    }
    
    return (
        <div className="ViewCard" >
            <div className='ViewCard_Up'>

                <section className='ViewCard_Left'>

                    <p className='ViewCard_BankName'>{props.details.bankName}</p>
                    <p className='ViewCard_Heading'>CARD NUMBER</p>
                    <p>{props.details.number}</p>

                    <p className='ViewCard_Heading'>CARD HOLDER</p>
                    <p>{props.details.name}</p>
                </section>

                <section className='ViewCard_Right'>
                    <img src={cardImage} alt="" />

                    <p className='ViewCard_Heading'>VALIDITY</p>
                    <p>{props.details.expiry}</p>
                </section>

            </div>
            <section className='ViewCard_Strip'></section>
            <section className='ViewCard_Down'>
                <button onClick={editClicked}>EDIT</button>
                <div></div>
                <button onClick={removeCard}>REMOVE</button>
            </section>
        </div>
    )
}

export default SCard;
