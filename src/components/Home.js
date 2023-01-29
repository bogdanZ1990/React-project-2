import SideNavBar from './SideNavbar'
import Footer from './Footer'
import Card from './Card'



export default function Home({database, addToMyOrder}){
    const promoSub = database[0].hot_subs[13]


    return (
        <div className="home">
            <SideNavBar/>
            <div className="main">
                <div className="main_top">
                    <div className="main_top_sub">
                        <img src={'https://nolocdnmsftaznua.azureedge.net/Content?companyCode=FISU001&ContentFile=prime-rib-olo-banner2.jpg&designId=11'} alt={promoSub.name}/>
                    </div>
                    <div className="main_top_text">
                        <div>
                            <h1>The <span>NEW</span> Prime Rib Steak Sub</h1>
                            <hr/>
                            <h3>Slow cooked up to 12 hours.</h3>
                        </div>
                    </div>
                </div>
                <hr className='hr'/>
                <div className="main_bot">
                    <Card card={promoSub} addToMyOrder={addToMyOrder}/>
                </div>
            </div>
        </div>
    )
}