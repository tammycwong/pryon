import React from 'react'
import image from "../images/main.jpg"

export default function Home() {
    return (
        <div>
            <section className="banner">
            {/* <img src="https://wallpapercave.com/wp/wp3981392.jpg" alt=""/> */}
            <img src={image} alt="astronaut"/>
            </section>
        </div>
    )
}
