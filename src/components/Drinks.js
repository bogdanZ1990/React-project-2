import { Grid } from "semantic-ui-react";
import Card from "./Card";
import SideNavbar from "./SideNavbar";



export default function Drinks({database, addToMyOrder}){
    const drinks = database[3].drinks

    const drinksToRender = drinks.map(drink => <Card key={drink.id} card={drink} addToMyOrder={addToMyOrder} />)


    return (
        <div className="home">
            <SideNavbar/>
            <div className="grid_cont">
                <Grid>{drinksToRender}</Grid>
            </div>     
        </div>
    )
}