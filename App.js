import React from "react"
import Data from "./Data"
import Card from "./components/Card"
import Header from "./components/Header"

export default function App(){
    const badges = Data.map(item => {
        return (
            <Card
                key={item.id}
                {...item}
            />
        )
    })
    return (
        <div className="page">
            <Header />
            <section>
                {badges} 
            </section>
        </div>
        
    )
}