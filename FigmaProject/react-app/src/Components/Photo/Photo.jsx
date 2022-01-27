import React from 'react'
import "./Photo.css"
import image from "../../images/Image.png"

function Photo() {
    return (
        <div class="apartmets">
            <img id="image" src={image} alt="Image" />
        </div>
    )
}

export default Photo