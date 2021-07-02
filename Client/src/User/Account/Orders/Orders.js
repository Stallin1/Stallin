import React from 'react';
import './Orders.css';

import Order from './Order/Order';


function Orders() {



    return (
        <div className='Orders'>
            <section className="Orders_head">
                <h2>Orders</h2>
            </section>

            <section className='Orders_section'>
                <Order shopId="#1" orderedAt="10:00 AM" shopName="Jhun Jhun Wala & Sons" distance="4 kms" status="Pending" totalAmt="999.99" />
                <Order shopId="#1" orderedAt="10:00 AM" shopName="Jhun Jhun Wala & Sons" distance="4 kms" status="Delivered" totalAmt="999.99" />
                <Order shopId="#1" orderedAt="10:00 AM" shopName="Jhun Jhun Wala & Sons" distance="4 kms" status="Cancelled" totalAmt="999.99" />
            </section>
        </div>
    )
}

export default Orders;
