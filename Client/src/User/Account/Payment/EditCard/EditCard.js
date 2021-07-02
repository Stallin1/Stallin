import React, { useContext, useState } from 'react';
import './EditCard.css';
import DatePicker from '../../Utils/DatePicker/DatePicker'


import SaveIcon from '@material-ui/icons/Save';
import TextField from '@material-ui/core/TextField';
import { CardContext, EditContext } from '../Payment';


function EditCard(props) {

    const [editId, setEditId] = useContext(EditContext);
    const [cards, setCards] = useContext(CardContext);

    let initialDetails;

    if(props.mode === "edit") {
        const selectedCard = cards.find(card => card.id === editId);
        initialDetails = selectedCard;
    } else {
        initialDetails = {};
    }

    const [number, setNumber] = useState(initialDetails.number);
    const [name, setName] = useState(initialDetails.name);
    const [bankName, setBankName] = useState(initialDetails.bankName);
    const [expiry, setExpiry] = useState(initialDetails.expiry);

    const saveCard = () => {
        const details = {
            number: number,
            expiry: expiry,
            name: name,
            bankName: bankName
        }

        if (props.mode === "add") {
            setCards([...cards, details])
        }
        else {
            const newCards = [...cards];
            const cardIndex = cards.findIndex(card => card.id === editId);
            newCards[cardIndex] = details;
            setCards(newCards);
        }


        props.setMode("view")

        setEditId("");
    }

    return (
        <section className='Payment_section EditCard'>
            <h3>Add/ Edit Card</h3>
            <button onClick={saveCard} className='Profile_edit_btn'><SaveIcon /> | <span>Save</span> </button>


            <form noValidate autoComplete="off">
                <TextField id="standard-required" value={bankName} onChange={(event) => { setBankName(event.target.value) }} label="Bank Name*" />
                <TextField id="standard-required" value={number} onChange={(event) => { setNumber(event.target.value) }} label="Card Number*" />
                <TextField id="standard-required" value={name} onChange={(event) => { setName(event.target.value) }} label="Card Holder's Name*" />

                <DatePicker setValue={setExpiry} label="Expiry*" default={expiry} />

            </form>
        </section>
    )
}

export default EditCard
