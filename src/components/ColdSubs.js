import { Grid } from "semantic-ui-react";
import Card from "./Card";
import SideNavbar from "./SideNavbar";



export default function ColdSubs({database, addToMyOrder}){
    const coldSubs = database[1].cold_subs

    const coldSubsToRender = coldSubs.map(sub=> <Card key={sub.id} card={sub} addToMyOrder={addToMyOrder} />)


    return (
        <div className="home">
            <SideNavbar/>
            <div className="grid_cont">
                <Grid>{coldSubsToRender}</Grid>
            </div>
        </div>
    )
}
