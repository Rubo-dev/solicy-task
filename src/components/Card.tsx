import { FC } from "react";

interface CardProps {
    card: number;
    deleteCard: (number: number) => void
}

const Card: FC<CardProps> = ({ card, deleteCard }) => {

    return (

        <div className="card">
            <span>{card}</span>
            <button className="delete-button" onClick={() => deleteCard(card)}>
                X
            </button>
        </div>
    )
}

export default Card