import React from "react"
import ListItem from "./ListItem"

function List(props) {
    const songTitles = 
        props.songs
            .filter((item) => {
                if(props.filters.length === 0)
                    return item
                if(props.filters.includes(item)) {
                    return item
                }     
            })
            .map(item => {
                return (
                        <ListItem
                            key={item.id}  
                            item={item}  
                        />
                )
            })

    return (
        <div className="songlist-table">
            {songTitles}
        </div>
    )
}



export default List

