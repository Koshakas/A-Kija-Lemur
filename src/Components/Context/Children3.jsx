import { useContext } from "react";
import Context from "../../Context/Context";

const Children3 = ({ text }) => {
    const text2 = useContext(Context);

    return (
        <div className="children nr3">
            <span>{text}</span>
            <br />
            <span>{text2}</span>
        </div>
    );
};

export default Children3;
