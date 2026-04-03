import { useState } from "react"

export default function Quote(props) {
    const [Like, setLike] = useState("♡")
    return(
        <div className="flex justify-between p-5 border-2 bg-white border-gray-600 shadow-xl rounded-xl transform transition duration-300 hover:scale-105">
            <div>
                <h1 className="italic">"{props.q}"</h1>
                <h2 className="font-bold">~{props.a}</h2>
            </div>
            <div>
                <button className="mr-10 text-xl" onClick={() => {if(Like=="♡"){setLike("❤")}else setLike("♡")}}>{Like}</button>
            </div>
        </div>
    )
}