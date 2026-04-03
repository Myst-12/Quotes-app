import Header from "./components/Header.jsx"
import QuotesList from "./components/QuotesList"
import Footer from "./components/Footer"
import { useState } from "react"
export default function App() {

  const [Search, setSearch] = useState("")
  const [Sorted, setIsSorted] = useState(false)
  return (
    <div>
      <Header Search={Search} setSearch={setSearch} Sorted={Sorted} setIsSorted={setIsSorted}/>
      <QuotesList Search={Search} Sorted={Sorted}/>
      <Footer />
    </div>
  )
}