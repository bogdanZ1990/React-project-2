import DateObject from "react-date-object";
import SummaryList from "./SummaryList";




export default function MyOrder({myOrder, handleDelete}){
    

    const date = new DateObject().format("MM/DD/YYYY");
    const time = new DateObject().add(15, 'minute').format('hh:mm a');
    
    
 


    return (

        <div className="my_order">
            <div>
                <h2>ORDER REVIEW</h2>
                <div className="loc_time">
                    <div className="location">
                        <h3>PICKUP LOCATION</h3>
                        <p>FHS #042 - Uptown Station, 75 Elgin Pkwy #121 Ft. Walton Bch, FL, 32548</p>
                        <button type="button" >CHANGE</button>
                    </div>
                    <div className="date_time">
                        <h3>DATE & TIME</h3>
                        <div>
                            <div className="date">
                                <p><span >Date:</span> {date},</p>

                            </div>
                            <div className="time">
                                <p><span>Time:</span> {time}</p>
                            </div>
                        </div>
                        <button type="button">CHANGE</button>
                    </div>
                </div>
                <hr className='hr'/>
                <SummaryList myOrder={myOrder} handleDelete={handleDelete}/>
                <hr className='hr'/>
                <div className="coupon_fav">
                    <div className="coupon">
                        <label>Coupon Code:</label>
                        <div>
                            <input type='text' id='coupon' placeholder="Add coupon code"/>
                            <button>Apply</button>
                        </div>
                    </div>
                    <div className="sav_fav">
                        <label>Save favorite order</label>
                        <input/>
                    </div>
                </div>
                <div className="order_price">
                    <div>
                        <button>Continue Shopping</button>
                    </div>
                    <div className="total_cont">
                        <div className="subtotal">
                            <span>SubTotal:</span>
                            <span>$0.00</span>
                        </div>
                        <div className="tax">
                            <span>Tax:</span>
                            <span>$0.00</span>
                        </div>
                        <div className="total">
                            <span>Total:</span>
                            <span>$0.00</span>
                        </div>
                        <div>
                            <button>PAYMENT</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}