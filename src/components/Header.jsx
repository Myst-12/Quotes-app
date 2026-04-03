export default function Header({ Search, setSearch }){
    return(
        <div className="flex justify-between p-2 bg-gray-100 text-black shadow-lg border-b-gray-500">
            <div>
                <h1 className="ml-8 font-thin cursor-pointer">Quotes</h1>
            </div>
            <div className="flex justify-around gap-16">
                <p className="cursor-pointer">Home</p>
                <p className="cursor-pointer">Contacts</p>
                <p className="cursor-pointer">About</p>
            </div>
            <div>
                <input className="mr-8 border rounded-xl px-1" type="text" placeholder=" Type to Search" value={Search} onChange={(e) => setSearch(e.target.value)}/> 
            </div>
        </div>
    )
}