import { Grid } from "semantic-ui-react";
import Card from "./Card";
import SideNavbar from "./SideNavbar";



export default function HotSubs({database, addToMyOrder}){
    const hotSubs = database[0].hot_subs

    const hotSubsToRender = hotSubs.map(sub=> <Card key={sub.id} card={sub} addToMyOrder={addToMyOrder} />)


    return (
        <div className="home">
            <SideNavbar/>
            <div className="grid_cont">
                <Grid>{hotSubsToRender}</Grid>
            </div>
        </div>
    )
}