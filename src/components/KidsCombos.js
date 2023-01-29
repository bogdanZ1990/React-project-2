import { Grid } from "semantic-ui-react";
import Card from "./Card";
import SideNavbar from "./SideNavbar";



export default function KidsCombos({database, addToMyOrder}){
    const kidsCombos = database[4].kids_combos

    const kidsCombosToRender = kidsCombos.map(combo => <Card key={combo.id} card={combo} addToMyOrder={addToMyOrder} />)


    return (
        <div className="home">
            <SideNavbar/>
            <div className="grid_cont">
                <Grid>{kidsCombosToRender}</Grid>
            </div> 
        </div>
    )
}