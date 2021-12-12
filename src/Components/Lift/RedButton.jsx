function RedButton({ count, minus }) {
    return (
        <button onClick={minus} className="button red">
            -{count}
        </button>
    );
}

export default RedButton;
