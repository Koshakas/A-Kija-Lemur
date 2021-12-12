import axios from "axios";
import { useEffect, useReducer, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { actionGetAllFromServers, actionSelectorsChanged } from "./Actions/books";
import Book from "./Components/Books/Book";
import List from "./Components/Books/List";
import NotFound from "./Components/Books/NotFound";
import Sort from "./Components/Books2/Sort";
import BooksContext from "./Contexts/Books2";
import SelectorsContext from "./Contexts/Selectors";
import booksReducer from "./Reducers/booksReducer";

const App = () => {
    const [books, dispatchBooks] = useReducer(booksReducer, { showBooks: [], masterBooks: [] });
    const [selectors, setSelectors] = useState({
        sort: "",
        filter: "",
        page: 0
    });

    useEffect(() => {
        dispatchBooks(actionSelectorsChanged(selectors));
    }, [selectors]);

    useEffect(() => {
        axios.get("https://in3.dev/knygos/").then(res => {
            console.log(res.data);
            dispatchBooks(actionGetAllFromServers(res.data));
        });
    }, []);

    return (
        <BooksContext.Provider value={books}>
            <SelectorsContext.Provider>
                <div className="App col top">
                    <div className="books">
                        <h1>Knygynas</h1>
                        <Sort />
                        <BrowserRouter>
                            <Routes>
                                <Route path="/" element={<List></List>}></Route>
                                <Route path="/book/:id" element={<Book></Book>}></Route>
                                <Route path="*" element={<NotFound></NotFound>}></Route>
                            </Routes>
                        </BrowserRouter>
                    </div>
                </div>
            </SelectorsContext.Provider>
        </BooksContext.Provider>
    );
};

export default App;
