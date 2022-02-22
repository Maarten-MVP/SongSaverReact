import React from "react"

function ListItem(props) {
    return (
        <div className="songlist-table-line" key={props.id}>
            <li className="list-item" value={props.item.title}>{props.item.title}</li>
            <li className="list-item" value={props.item.artist}>{props.item.artist}</li>
            <li className="list-item" value={props.item.genre}>{props.item.genre}</li>
            <li className="list-item" value={props.item.rating}>{props.item.rating}</li>
        </div>
    )
}

export default ListItem