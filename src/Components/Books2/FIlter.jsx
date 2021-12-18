import { useContext, useState } from "react";
import SelectorsContext from "../../Contexts/Selectors";
import TypesContext from "../../Contexts/Types";

function Filter() {
    const selectors = useContext(SelectorsContext);
    const types = useContext(TypesContext);
    const [select, setSelect] = useState("");

    const handleChange = e => {
        setSelect(e.target.value);
        selectors(prev => ({ ...prev, filter: e.target.value }));
    };

    return (
        <div className="books__selectors__sort">
            <select value={select} onChange={handleChange}>
                <option value="">Rodyti visas kategorijas</option>
                {types.map(t => (
                    <option key={t.id} value={t.id}>
                        {t.title}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default Filter;
