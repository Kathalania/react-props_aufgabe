export default function Greetings(props: {names: string[]}){
    return (<div>
        <p>Hello</p>
            {props.names.map((name) => {
                return <p>{name}</p>
            })}
    </div>)
}