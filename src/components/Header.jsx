export default function Header({ Search, setSearch, Sorted, setIsSorted }){
    return(
        <div className="flex justify-between p-2 bg-gray-100 text-black shadow-lg border-b-gray-500">
            <div>
                <h1 className="ml-8 font-thin cursor-pointer shadow-2xl">Quotes</h1>
            </div>
            <div className="flex justify-around gap-16">
                <p className="cursor-pointer font-mono">Home</p>
                <p className="cursor-pointer font-mono">About</p>
                <p className="cursor-pointer font-mono">Contact</p>
            </div>
            <div className="flex justify-between gap-5">
                <button className="border border-gray-400 shadow-lg px-3 rounded-xl" onClick={() => setIsSorted(!Sorted)}>Sort</button>
                <input className="mr-8 border rounded-xl px-1" type="text" placeholder=" Type to Search" value={Search} onChange={(e) => setSearch(e.target.value)}/> 
            </div>
        </div>
    )
}