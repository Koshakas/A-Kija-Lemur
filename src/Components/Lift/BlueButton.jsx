function BlueButton({ count, plus }) {
    return (
        <button onClick={plus} className="button">
            +{count}
        </button>
    );
}

export default BlueButton;
