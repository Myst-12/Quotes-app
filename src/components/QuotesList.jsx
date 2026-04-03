import Quote from "./Quote"
import { useState, useEffect } from "react"

export default function QuotesList() {

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

    return (
        <div>
            {quotes.map((item, index) => (
                <Quote key={index} q={item.q} a={item.a} />
            ))}
        </div>
    )
}