import { useParams } from "react-router";

const Bisons = () => {
    const { count } = useParams();

    if (typeof count === "undefined") {
        return <h2>Bisons</h2>;
    }
    return <h2>{count} Bisons</h2>;
};

export default Bisons;
