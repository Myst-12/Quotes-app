import Header from "./components/Header.jsx"
import QuotesList from "./components/QuotesList"
import Footer from "./components/Footer"
import { useState } from "react"
export default function App() {

  const [Search, setSearch] = useState("")
  return (
    <div>
      <Header Search={Search} setSearch={setSearch}/>
      <QuotesList Search={Search}/>
      <Footer />
    </div>
  )
}