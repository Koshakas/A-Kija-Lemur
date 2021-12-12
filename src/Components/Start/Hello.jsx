import BorderWord from "../BorderWord";

function Hello({to, color, size, element}) {

    const add = w => w + '???';

    return (
        <h1 style={{
            color: color,
            fontSize: size
        }}>
            {element}
            <BorderWord word={add(to)} />
        </h1>
    );
}

export default Hello;