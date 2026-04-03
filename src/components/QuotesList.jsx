import Quote from "./Quote"
import { useState, useEffect } from "react"

export default function QuotesList({ Search , Sorted}) {

    const [quotes, setQuotes] = useState([]);

    useEffect(() => {
    fetch("https://corsproxy.io/?https://zenquotes.io/api/quotes")
        .then(res => res.text())
        .then(data => {
            const parsed = JSON.parse(data);
            console.log(parsed);
            setQuotes(parsed);
        })
        .catch(err => console.log(err));
}, []);

    const filteredQuotes = quotes.filter((item) =>
        item.q.toLowerCase().includes(Search.toLowerCase()) ||
        item.a.toLowerCase().includes(Search.toLowerCase())
    );

    if(Sorted){
    filteredQuotes.sort((a, b) => {
    if (a.a < b.a) return -1;
    if (a.a > b.a) return 1;
    return 0;
    });
    }


    return (
        <div className="grid col-span-1 gap-3 p-1 mt-3 mx-8">
            {filteredQuotes.map((item, index) => (
                <Quote key={index} q={item.q} a={item.a} />
            ))}
        </div>
    )
}