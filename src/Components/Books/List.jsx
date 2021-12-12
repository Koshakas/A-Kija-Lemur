import { useContext } from "react";
import BooksContext from "../../Contexts/Books2";
import Listbook from "./Listbook";

const List = () => {
    const books = useContext(BooksContext);

    if (!books.showBooks.length) {
        return (
            <div className="books__list__loading">
                <span className="btn-shine">Loading..</span>
            </div>
        );
    }

    return (
        <div className="books__list">
            {books.showBooks.map(b => (
                <Listbook key={b.id} book={b} />
            ))}
        </div>
    );
};
export default List;
