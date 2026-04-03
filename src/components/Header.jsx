export default function Header(){
    return(
        <div className="flex justify-around p-2 bg-gray-10 text-black shadow-lg border-b-gray-500">
            <div>
                <h1>Quotes</h1>
            </div>
            <div className="flex justify-around gap-5">
                <p>Home</p>
                <p>Contacts</p>
                <p>About</p>
            </div>
            <div>
                <p>Search</p>
            </div>
        </div>
    )
}