import { FC } from "react"

interface HeaderProps {
    addCard: () => void;
    sortCards: () => void;
}

const Header: FC<HeaderProps> = ({ addCard, sortCards }) => {
    return (
        <header className="header">
            <button className="btn btn-primary" onClick={addCard}>Add Card</button>
            <button className="btn btn-primary" onClick={sortCards}>Sort Cards</button>
        </header>
    )
}

export default Header