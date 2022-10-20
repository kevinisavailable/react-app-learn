
export default function Name(props){
    console.log(props);
    return(
    <div style={props.st}>
        <h1>{props.name.name}</h1>
    </div>)
}
    