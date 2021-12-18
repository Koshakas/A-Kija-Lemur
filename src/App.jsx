import axios from "axios";
import { useEffect, useReducer, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { actionGetAllFromServers, actionSelectorsChanged } from "./Actions/books";
import Book from "./Components/Books2/Book";
import Filter from "./Components/Books2/FIlter";
import List from "./Components/Books2/List";
import NotFound from "./Components/Books2/NotFound";
import Pager from "./Components/Books2/Pager";
import Sort from "./Components/Books2/Sort";
import BooksContext from "./Contexts/Books2";
import SelectorsContext from "./Contexts/Selectors";
import TypesContext from "./Contexts/Types";
import booksReducer from "./Reducers/booksReducer";

export const BOOKS_PER_PAGE = 3;

const App = () => {
    const [books, dispatchBooks] = useReducer(booksReducer, {
        showBooks: [],
        masterBooks: [],
        showPages: 0
    });
    const [selectors, setSelectors] = useState({
        sort: "",
        filter: "",
        page: 0
    });
    const [types, setTypes] = useState([]);
    const [pages, setPages] = useState([]);

    useEffect(() => {
        const pages = [];
        for (let i = 0; i < Math.ceil(books.showBooks.length / BOOKS_PER_PAGE); i++) {
            pages.push(i + 1);
        }
        setPages(pages);
    }, [books]);

    useEffect(() => {
        dispatchBooks(actionSelectorsChanged(selectors));
    }, [selectors]);

    useEffect(() => {
        axios.get("https://in3.dev/knygos/").then(res => {
            dispatchBooks(actionGetAllFromServers(res.data));
        });
    }, []);

    useEffect(() => {
        axios.get("https://in3.dev/knygos/types/").then(res => {
            setTypes(res.data);
            console.log(res.data);
        });
    }, []);

    return (
        <BooksContext.Provider value={books}>
            <SelectorsContext.Provider value={setSelectors}>
                <TypesContext.Provider value={types}>
                    <div className="App col top">
                        <div className="books">
                            <h1>Knygynas</h1>
                            <div>
                                <Sort />
                                <Filter />
                            </div>
                            <Pager pages={pages} />
                            <BrowserRouter>
                                <Routes>
                                    <Route path="/" element={<List />}></Route>
                                    <Route path="/book/:id" element={<Book />}></Route>
                                    <Route path="*" element={<NotFound />}></Route>
                                </Routes>
                            </BrowserRouter>
                        </div>
                    </div>
                </TypesContext.Provider>
            </SelectorsContext.Provider>
        </BooksContext.Provider>
    );
};

export default App;
