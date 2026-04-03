export default function Quote(props) {
    return(
        <div className="p-5 border-2 bg-white border-gray-600 shadow-xl p-3 rounded-xl">
            <h1 className="italic">"{props.q}"</h1>
            <h2 className="font-bold">~{props.a}</h2>
        </div>
    )
}