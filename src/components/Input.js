import React, { useState } from "react"

function Input(props) {

    const [titleValue, setTitleValue] = useState("")
    const [artistValue, setArtistValue] = useState("")
    const [genreValue, setGenreValue] = useState("")
    const [ratingValue, setRatingValue] = useState("")

    function onButtonPress(event) {
        event.preventDefault()
        if(titleValue && artistValue && genreValue && ratingValue !="") {
            props.addToState(titleValue, artistValue, genreValue, ratingValue)

            setTitleValue("")
            setArtistValue("")
            setGenreValue("")
            setRatingValue("")
        }
    }

    return (
        <div>
            <form className="input-form">
                <input 
                    type="text" 
                    placeholder="Add title" 
                    value={titleValue} 
                    onChange={(event) => setTitleValue(event.target.value)}
                />
                <input 
                    type="text" 
                    placeholder="Add artist" 
                    value={artistValue} 
                    onChange={(event) => setArtistValue(event.target.value)}
                />
                
                <select name="genre" value={genreValue} onChange={(event) => setGenreValue(event.target.value)}>
                    <option value="">Add genre</option>
                    <option value="rock">Rock</option>
                    <option value="pop">Pop</option>
                    <option value="punk">Punk</option>
                    <option value="latin">Latin</option>
                </select>

                <select name="rating" value={ratingValue} onChange={(event) => setRatingValue(event.target.value)}>
                    <option value="">Give a rating</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>

                <button type="submit" onClick={onButtonPress}>Add</button>
                <button onClick={props.eraseAll}>Clear</button>
            </form>
        </div>
    )
    

}

export default Input
