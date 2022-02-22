import React, { useState } from "react"
import Input from "./Input"
import List from "./List"
import SortAndFilter from "./SortAndFilter"

function Songlist() {

    const [songs, setSongs] = useState([])
    const [filteredSongs, setFilteredSongs] = useState([])

    function addSongToState(title, artist, genre, rating) {
        setSongs([
            ...songs,
            {
                id: songs.length + 1,
                title: title,
                artist: artist,
                genre: genre,
                rating: rating
            }
        ])
    }

    function sort(event) {
        event.preventDefault()
        switch(event.target.name) {
            case "title":
                return setSongs([...songs.sort((a, b) => a.title > b.title ? 1 : -1)])
            case "artist":
                return setSongs([...songs.sort((a, b) => a.artist > b.artist ? 1 : -1)])
            case "genre":
                return setSongs([...songs.sort((a, b) => a.genre > b.genre ? 1 : -1)])
            case "rating":
                return setSongs([...songs.sort((a, b) => a.rating > b.rating ? 1 : -1)])
        }
    }

    function filter(event) {
        event.preventDefault()
        const emptySearch = [{id: 0, title: "", artist: "", genre: "", rating: ""}]

        if(event.target.className === "filter-rating") {
            const filteredSongsArray = [...songs.filter(song => song.rating === event.target.name)]

            filteredSongsArray.length === 0 ? setFilteredSongs(emptySearch) : setFilteredSongs(filteredSongsArray)
        }
        if(event.target.className === "filter-genre") {
            const filteredSongsArray = [...songs.filter(song => song.genre === event.target.name)]

            filteredSongsArray.length === 0 ? setFilteredSongs(emptySearch) : setFilteredSongs(filteredSongsArray)
        }
    }

    function eraseState(event) {
        event.preventDefault()
        setSongs([])
    }

    function clearFilters(event) {
        event.preventDefault()
        setFilteredSongs([])
    }

    return (
        <div>

            <Input addToState={addSongToState} eraseAll={eraseState} />
            <div className="songlist-table-headers">
                <h2>Title</h2>
                <h2>Artist</h2>
                <h2>Genre</h2>
                <h2>Rating</h2>
            </div>
            <List songs={songs} filters={filteredSongs} />
            <SortAndFilter sort={sort} filter={filter} clearFilters={clearFilters} />

        </div>
    )
}

    export default Songlist