import { FC } from "react"
import Card from "./Card"

interface MainProps {
    cards: number[]
    deleteCard: (number: number) => void
}

const Main: FC<MainProps> = ({ cards, deleteCard }) => {
    console.log('main');

    return (
        <main className="main">
            {cards.length ? <div className="card-container">
                {cards.map(card => (
                    <Card card={card} key={card} deleteCard={deleteCard} />
                ))}
            </div> :
                <h1>Add Cards</h1>}
        </main>
    )
}

export default Main