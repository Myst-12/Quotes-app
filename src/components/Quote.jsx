export default function Quote(props) {
    return(
        <div className="border-2 bg-cyan-200 border-cyan-500 p-3">
            <h1 className="italic">"{props.q}"</h1>
            <h2 className="font-bold">~{props.a}</h2>
        </div>
    )
}