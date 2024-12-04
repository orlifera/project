import React from "react";
import { WishType } from "../types";

type WishProps = WishType & {
    onMarkAsDone: (id: number) => void;
    onDelete: (id: number) => void;
};

const Wish: React.FC<WishProps> = ({ id, title, description, isCompleted, onMarkAsDone, onDelete }) => {
    return (
        <div className={`wish-container ${isCompleted ? "complete" : "not-completed"}`}>
            <h2 id="wish-title" className="title">{title}</h2>
            <div className="wish-details">
                <p className="wish-description">{description}</p>
                <p className="wish-status">{isCompleted ? "Completato!" : "Non Completo :("}</p>
            </div>
            <button className="btn btn-complete" onClick={() => onMarkAsDone(id)} disabled={isCompleted}>
                Segna come completato
            </button>
            <button className="btn btn-delete" onClick={() => onDelete(id)}>Cancella</button>
        </div >
    );
};

export default Wish;
