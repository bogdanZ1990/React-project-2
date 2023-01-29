import { useState, useEffect } from 'react';
import SideNavBar from './SideNavbar'
import Card from './Card'
import Footer from './Footer';



export default function DailySub({database, addToMyOrder}){
    const [dailySub, setDailySub] = useState();


    const listOfHotSubs = database[0].hot_subs

    const currentDay = Date().slice(0, 3);


    switch (currentDay) {
        case 'Mon':
           setDailySub(listOfHotSubs[1]);
            break;
        case 'Tue':
           setDailySub(listOfHotSubs[9]);
            break;
        case 'Wed':
           setDailySub(listOfHotSubs[3]);
            break;
        case 'Thu':
           setDailySub(listOfHotSubs[11]);
            break;
        case 'Fri':
           setDailySub(listOfHotSubs[12]);
            break;
        case 'Sat':
           setDailySub(listOfHotSubs[8]);
            break;
        case 'Sun':
           setDailySub(listOfHotSubs[4]);
            break;   
    }

    useEffect(() => {
        // dailySub.price.Medium = (dailySub.price.Medium - 0.40)
        setDailySub({
            ...dailySub,
        price : {
            Small: dailySub.price.Small,
            Medium: (dailySub.price.Medium - 0.40),
            Large: dailySub.price.Large
        }
        })
    }, [])
    

    return (
        <div className="home">
            <SideNavBar/>
            <div className="main">
                <div className="main_top">
                    <div className="main_top_sub">
                        <img src={dailySub.img_url} alt={dailySub.name}/>
                    </div>
                    <div className="main_top_text">
                        <div>
                            <h1>Daily Medium Sub Special</h1>
                            <hr/>
                            <h3>A deal for every day of the week.</h3>
                        </div>
                    </div>
                </div>
                <hr className='hr'/>
                <div className="main_bot">
                    <Card card={dailySub} addToMyOrder={addToMyOrder}/>
                </div>
            </div>
        </div>
        
    )
}