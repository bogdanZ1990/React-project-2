import EditSub from "./EditSub";
import { Link } from "react-router-dom";

export default function SummaryCard({summaryCard, handleDelete}){
    const {orderId, amount, img_url, name, price, size, bread} = summaryCard;



    return (
        <li className="summary_card" >
            <span>x{amount}</span>
            <img src={img_url} alt={name}/>
            <div>
                <p className="summary_name">{size + ' ' + bread + ' ' + name}</p>
                <p>Item for: Name it</p>
                <div>
                    <Link to={`/menu/item-customize/${orderId}`}>Edit Item</Link>
                    <button onClick={() => handleDelete(summaryCard)}>Delete Item</button>
                    {/* <button onClick={() => console.log(orderId)}>Delete Item</button> */}
                </div>
            </div>
            <h2>${price * amount}</h2>
        </li>
    )
}