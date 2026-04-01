import Quote from "./Quote"
import { useState, useEffect } from "react"

export default function QuotesList() {

    const [quotes, setQuotes] = useState([]);

    useEffect(() => {
        fetch("https://api.allorigins.win/get?url=https://zenquotes.io/api/quotes")
            .then(res => res.json())
            .then(data => {
                console.log("RAW:", data);

                if (!data.contents) {
                    console.log("No contents received");
                    return;
                }

                try {
                    const parsed = JSON.parse(data.contents);
                    console.log("PARSED:", parsed);
                    setQuotes(parsed);
                } catch (e) {
                    console.log("JSON parse error", e);
                }
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