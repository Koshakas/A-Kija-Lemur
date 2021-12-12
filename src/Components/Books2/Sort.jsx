import { useContext, useState } from "react";
import SelectorsContext from "../../Contexts/Selectors";

const Sort = () => {
    const selectors = useContext(SelectorsContext);
    const [select, setSelect] = useState("");

    const handleChange = e => {
        setSelect(e.target.value);
        selectors(prev => ({ ...prev, sort: e.target.value }));
    };

    return (
        <div className="books__selectors">
            <select value={select} onChange={handleChange} name="" id="">
                <option value="">Rūšiavimas</option>
                <option value="price_asc">Kaina nuo mažiausios</option>
                <option value="price_desc">Kaina nuo didžiausios</option>
                <option value="title_asc">Pavadinimas A-Z</option>
                <option value="title_desc">Pavadinimas Z-A</option>
            </select>
        </div>
    );
};

export default Sort;
