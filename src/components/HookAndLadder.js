import SideNavBar from './SideNavbar'
import Card from './Card'
import Footer from './Footer';



export default function HookAndLadder({database, addToMyOrder}){
    const sub = database[0].hot_subs[0];

   
    

    return (
        <div className="home">
            <SideNavBar/>
            <div className="main">
                <div className="main_top">
                    <div className="main_top_text">
                        <div>
                            <img className='hook_logo' src='https://nolocdnmsftaznua.azureedge.net/Content?companyCode=FISU001&ContentFile=Hook-Banner_01.jpg&designId=11' alt='hook & ladder logo'/>
                        </div>
                    </div>
                    <div className="main_top_sub">
                        <img src='https://nolocdnmsftaznua.azureedge.net/Content?companyCode=FISU001&ContentFile=Hook-Banner_02.jpg&designId=11' alt={sub.name}/>
                    </div>
                </div>
                <hr className='hr'/>
                <div className="main_bot">
                    <Card card={sub} addToMyOrder={addToMyOrder}/>
                </div>
            </div>
        </div>
    )
}




