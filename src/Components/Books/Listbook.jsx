import { Link } from "react-router-dom";

const Listbook = ({ book }) => {
    return (
        <div className="books__book">
            <div className="title">
                <Link to={`book/${book.id}`}>{book.title}</Link>
            </div>
            <Link to={`book/${book.id}`}>
                <img src={book.img} alt={book.title} />
            </Link>
            <div className="author">{book.author}</div>
            <div className="price">
                <div>{book.price} &euro;</div>
                <button>Pirkti</button>
            </div>
        </div>
    );
};

export default Listbook;
