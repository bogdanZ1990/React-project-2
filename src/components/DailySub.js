import { useEffect } from 'react';
import SideNavBar from './SideNavbar'
import Card from './Card'
import Footer from './Footer';



export default function DailySub({dailySub, setDailySub, addToMyOrder}){


    // dailySub.price.Medium = (dailySub.price.Medium - 0.40)

    

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
    console.log(dailySub)

    if(dailySub) {
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
    } else {
        return null
    }
}