import { Link, useResolvedPath, useMatch } from "react-router-dom";

const Superlink = ({ to, children }) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: false });

    return (
        <Link
            to={to}
            style={{
                color: match ? "blueviolet" : "crimson",
                border: match ? "1px solid blueviolet" : "1px solid transparent"
            }}
        >
            {children}
        </Link>
    );
};

export default Superlink;
