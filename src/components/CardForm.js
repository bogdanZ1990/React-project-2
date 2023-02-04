import { useState } from "react"



export default function CardForm({card, addToMyOrder, handleClick}){
    const [formData, setFormData] = useState({
        id: card.id, 
        name: card.name,
        price: card.type ? card.price.Medium : card.price,
        img_url: card.img_url,
        calories: card.type ? card.calories.Medium : card.calories,
        bread: card.type ? 'White' : '',
        size: card.type ? 'Medium' : '',
        pickle: true,
        amount: 1,
        orderId : card.id + Date().slice(16, 24)
        
    })

    //  useEffect check every card for state, whichever I click on make it active, turn all others deactive

    function handleChange(e){
        const name = e.target.name
        let value = e.target.value


        if (e.target.type === 'checkbox') {
            value = e.target.checked
        }

        setFormData({
            ...formData,
            [name]: value
        })

        console.log(formData)
    }

 

    function handleSize(e){
        setFormData({
            ...formData,
            size: e.target.value,
            price: (e.target.value === 'Small') ? card.price.Small : (e.target.value === 'Medium') ? card.price.Medium : card.price.Large
        })
        console.log(formData)
    }

    function increaseAmount(){
        setFormData({
            ...formData,
            amount: formData.amount + 1
        })
    }

    function decreaseAmount(){

        setFormData({
            ...formData,
            amount: formData.amount - 1
        })
    }

    // function handleOrderId(){
    //     setFormData({
    //     ...formData,
    //     orderId : card.id + Date().slice(16, 24)
    //     });
    // }

    function handleSubmit(e){
        e.preventDefault();
        // handleOrderId();
        addToMyOrder(formData);
        console.log(formData)
    }

    return (
        <form className="item_form" key={card.id} onSubmit={handleSubmit}>
            <div className="delete_button_cont">
                <button onClick={handleClick}>X</button>
            </div>
            <h3>{card.name}</h3>
            <p>{card.description}</p>
            {card.type 
            ?   <div className="item_bread">
                    <div>
                        <input type='radio' name='bread' id='white' value='White' defaultChecked onChange={handleChange}/>
                        <label htmlFor='white'>WHITE</label>
                    </div>
                    <div>
                        <input type='radio' name='bread' id='wheat' value='Wheat' onChange={handleChange}/>
                        <label htmlFor='wheat'>WHEAT</label>
                    </div>
                    <div>
                        <input type='radio' name='bread' id='gluten_free' value='Gluten Free' onChange={handleChange}/>
                        <label htmlFor='gluten_free'>GLUTEN FREE</label>
                    </div>
                </div>
            : null
            }
            {card.price.Small
            ?   <div className="item_size">
                    <div>
                        <input type='radio' name='size' id='small' value='Small' onChange={handleSize}/>
                        <label htmlFor='small'>SMALL</label>
                    </div>
                    <div>
                        <input type='radio' name='size' id='medium' value='Medium' defaultChecked onChange={handleSize}/>
                        <label htmlFor='medium'>MEDIUM</label>
                    </div>
                    <div>
                        <input type='radio' name='size' id='large' value='Large' onChange={handleSize}/>
                        <label htmlFor='large'>LARGE</label>
                    </div>
                </div>
            : <div className="item_size"></div>
            }
            {card.price.Small
            ?   <div className="item_price">
                    <span>${card.price.Small}</span>
                    <span>${card.price.Medium}</span>
                    <span>${card.price.Large}</span>
                </div>
            :   <div className="item_price">
                    <span>${card.price}</span>
                </div>
            }
            {card.calories.Small
            ?   <div className="item_calories">
                    <span>{card.calories.Small}cal</span>
                    <span>{card.calories.Medium}cal</span>
                    <span>{card.calories.Large}cal</span>
                </div>
            :   <div className="item_calories">
                    <span>{card.calories}cal</span>
                </div>
            }
            {card.type &&
            <div className="item_pickle">
                <input type='checkbox' name='pickle' id='pickle' onChange={handleChange} checked={formData.pickle}/>
                <label htmlFor="pickle">Pickle Spear (on side)</label>
            </div>
            }
            <div className="item_counter">
                <button type="button" onClick={decreaseAmount} >-</button>
                <input type='number' name='amount' id='amount' value={formData.amount} />
                <button type="button" onClick={increaseAmount}>+</button>
            </div>
            <div className="item_button">
                <button type='submit'>ADD TO ORDER</button>
            </div>
        </form>
    )
}