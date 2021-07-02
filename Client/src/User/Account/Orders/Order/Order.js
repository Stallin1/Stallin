import React from 'react';
import './Order.css';
import OrderItemList from './OrderItemList/OrderItemList';

import mapImg from '../../images/Google Maps Old.png'


function Order(props) {


    let background;

    switch(props.status) {
        case("Pending"):
            background="#89C2D9";
            break;
            
            case("Delivered"):
            background="#3DC242";
            break;
            
            case("Cancelled"):
            background="#FF0000";
            break;
            
            case("Packed"):
            background="#EBB700";
            break;


            default:
                break
    }



  

    return (
        <div className='Order'>
            <div className='Order_head'>

                <section className="Order_left">
                    <p className='Order_shop_id'>Shop Id - {props.shopId}</p>
                    <p className='Order_shop_name'>{props.shopName}</p>
                    <p className='Order_distance'>Around {props.distance} from you</p>
                    <a href="/" className="Order_direction_btn">
                        <div className='Order_direction_icon'><img src={mapImg} alt="" /> </div>
                        <span>Get Direction</span>
                    </a>
                </section>

                <section className="Order_mid">
                    <p className='Order_mid_head'>Ordered at</p>
                    <p>{props.orderedAt}</p>
                </section>

                <section className="Order_right">
                    <div className="Order_right_dropdown" >
                            <button className="Order_right_status_button" style={{"backgroundColor": background}}>{props.status}</button>  
                    </div>

                    <div className='Order_right_total'>
                        <p className='Order_right_total_head'>Total Amt.</p>
                        <p>₹ {props.totalAmt}</p>
                    </div>
                </section>

            </div>
            <OrderItemList/>
        </div>

    )
}

export default Order;
