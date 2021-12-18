import { useContext } from "react";
import { Link } from "react-router-dom";
import TypesContext from "../../Contexts/Types";

const Listbook = ({ book }) => {
    const types = useContext(TypesContext);

    return (
        <div className="books__book">
            <div className="type">{types.length ? types.filter(t => t.id === book.type)[0].title : "Loading..."}</div>

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
