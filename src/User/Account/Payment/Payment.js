import React, { createContext, useState } from 'react';
import EditCard from './EditCard/EditCard';
import './Payment.css';

import ViewCard from './ViewCard/ViewCard';

export const EditContext = createContext();
export const ModeContext = createContext();
export const CardContext = createContext();

function Payment() {

    const [mode, setMode] = useState("view");
    const [cards, setCards] = useState([{
        id: "kkkk",
        number: "44444",
        expiry: "2023-04",
        name: "Aman Patidar",
        bankName: "State Bank of India"
    }, {
        id: "llklkl",
        number: "2222",
        expiry: "2024-04",
        name: "Hello Hunny",
        bankName: "Punjab National Bank"
    }]);

    const [editId, setEditId] = useState("");

    return (
        <div className="Payment">

                    <section className="Payment_head">
                        <h2>Payment Method</h2>
                    </section>

            <EditContext.Provider value={[editId, setEditId]}>
                <ModeContext.Provider value={[mode, setMode]}>
                    <CardContext.Provider value={[cards, setCards]}>

                    {mode === "view" ? <ViewCard /> : <EditCard  mode={mode} setMode={setMode}/>}
                    </CardContext.Provider>
                </ModeContext.Provider>
            </EditContext.Provider>
        </div>
    )
}

export default Payment;
