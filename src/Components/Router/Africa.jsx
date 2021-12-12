import { Outlet } from "react-router-dom";
import Superlink from "./Superlink";

const Africa = () => {
    return (
        <div className="africa">
            <Outlet />
            <nav>
                <Superlink to="tigers" children={"Tigers"}></Superlink>
                <Superlink to="lions" children={"Lions"}></Superlink>
                <Superlink to="zebras" children={"Zebras"}></Superlink>
            </nav>
        </div>
    );
};

export default Africa;
