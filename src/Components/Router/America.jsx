import { Link, Outlet } from "react-router-dom";
const America = () => {
    return (
        <div className="america">
            <nav>
                <Link to="eagle">Eagle</Link>
                <Link to="grizzley">Grizzley</Link>
                <Link to="bison">Bison</Link>
            </nav>
            <Outlet />
        </div>
    );
};

export default America;
