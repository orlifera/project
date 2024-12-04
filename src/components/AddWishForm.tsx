import React, { useState } from "react";
import { WishType } from "../types";

interface AddWishFormProps {
    onSubmit: (wish: WishType) => void;
}

const AddWishForm = ({ onSubmit }: AddWishFormProps) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            const newWish: WishType = { id: Date.now(), title, description };
            onSubmit(newWish);

            alert("Wish added successfully!");
        } catch (error) {
            console.error("Failed to add wish:", error);
        } finally {
            setLoading(false);
            setTitle("");
            setDescription("");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="wish-form">
            <h2 id="form-title" >Lista dei desideri</h2>
            <div className="wish-content">
                <label htmlFor="wish-name">Nome</label>
                <input
                    type="text"
                    placeholder="Wish Name"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <label htmlFor="wish-description">Descrizione</label>
                <textarea
                    placeholder="Wish Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <button type="submit" disabled={loading}>
                    {loading ? "Lo sto aggiungendo stai calmo" : "Aggiungi"}
                </button>
            </div>
        </form>
    );
};

export default AddWishForm;
