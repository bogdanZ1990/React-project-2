

export default function EditSub(){

    return (
        <div className="edit_sub">
            {/* <div>
                <div className="order_info">
                    <div className="info_left">
                        <h1>{card.name}</h1>
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
                                    <label  htmlFor='small'>SMALL</label>
                                </div>
                                <div>
                                    <input type='radio' name='size' id='medium' value='Medium' defaultChecked onChange={handleSize}/>
                                    <label  htmlFor='medium'>MEDIUM</label>
                                </div>
                                <div>
                                    <input type='radio' name='size' id='large' value='Large' onChange={handleSize}/>
                                    <label  htmlFor='large'>LARGE</label>
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
                    </div>
                    <div className="info_right">
                        <img src={card.img_url} alt={card.name}/>
                    </div>
                </div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div> */}
        </div>
    )
}