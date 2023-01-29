import EditSub from "./EditSub";

export default function SummaryCard({summaryCard, handleDelete}){
    const {amount, img_url, name, price, size, bread} = summaryCard;

    

    return (
        <li className="summary_card">
            <span>x{amount}</span>
            <img src={img_url} alt={name}/>
            <div>
                <p className="summary_name">{size + ' ' + bread + ' ' + name}</p>
                <p>Item for: Name it</p>
                <div>
                    <button>Edit Item</button>
                    <button onClick={() => handleDelete(summaryCard)}>Delete Item</button>
                </div>
            </div>
            <h2>${price * amount}</h2>
        </li>
    )
}