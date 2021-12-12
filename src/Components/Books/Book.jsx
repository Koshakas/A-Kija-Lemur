import { useContext } from "react";
import { useParams } from "react-router";
import Books from "../../Contexts/Books";

const Book = () => {
    const books = useContext(Books);
    const { id } = useParams();
    const [book] = books.masterBooks.filter(b => b.id === parseInt(id));

    if (typeof book === "undefined") {
        return <h2>Palaukite, knyga kraunama</h2>;
    }

    if (books.masterBooks.length === 0) {
        return <div>Knyga nerasta</div>;
    }

    return (
        <div className="books__book__detail">
            <h2>{book.title}</h2>
            <img src={book.img} alt={book.title}></img>
            <div className="books__book__author">{book.author}</div>
            <div className="books__book__price">{book.price}&euro;</div>
            <div className="books__book__button">
                <button className="button">Pirkti</button>
            </div>
        </div>
    );
};

export default Book;
