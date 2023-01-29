import { Grid } from "semantic-ui-react";
import Card from "./Card";
import SideNavbar from "./SideNavbar";


export default function Salads({database, addToMyOrder}){
    const salads = database[2].salads

    const saladsToRender = salads.map(salad => <Card key={salad.id} card={salad} addToMyOrder={addToMyOrder} />)


    return (
        <div className="home">
             <SideNavbar/>
            <div className="grid_cont">
                <Grid>{saladsToRender}</Grid>
            </div>
         </div>
    )
}

