import Children2 from "./Children2";

const Children1 = ({ text }) => {
    return (
        <div className="children nr1">
            <Children2 text={text} />
        </div>
    );
};

export default Children1;
