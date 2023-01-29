import { useState } from "react"
import CardForm from "./CardForm";




export default function Card({card, addToMyOrder}){
    const [showDetails, setShowDetails] = useState(false);
    
    function handleClick(){
        setShowDetails(!showDetails)
    }

    
    return (
        <div className={showDetails ? 'card active' : "card"} id={card.id}>
            {showDetails 
            ?
            <CardForm card={card} addToMyOrder={addToMyOrder} handleClick={handleClick}/>
            :
            <button className="card_button" onClick={handleClick}>
                <div className={typeof card.price === 'object' && "cropped"}>
                    <img className={typeof card.price === 'object' ? "cropped-img" : 'non-cropped-img'} src={card.img_url} alt={card.name}/>
                </div>
                <h2>{card.name}</h2>
            </button>
            }
        </div>
        
    )
}
