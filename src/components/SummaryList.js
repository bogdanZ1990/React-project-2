import SummaryCard from "./SummaryCard"

export default function SummaryList({myOrder, handleDelete}){

    

    const summaryCardsToDisplay = myOrder.map(elem => <SummaryCard key={elem.id} summaryCard={elem} handleDelete={handleDelete} />)

    return (
        <div className="order_summary">
                    <h3>ORDER SUMMARY</h3>
                    <ul>
                    {summaryCardsToDisplay}
                    </ul>
                </div>
    )
}