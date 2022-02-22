import React from "react"

function SortAndFilter(props) {
    return (
        <div className="sort-and-filters">
            <div className="dropdown-wrapper">
                        <button className="sort-button">Sort</button>
                        <div className="dropdown-content">
                            <button onClick={props.sort} name="title">By title</button>
                            <button onClick={props.sort} name="artist">By artist</button>
                            <button onClick={props.sort} name="genre">By genre</button>
                            <button onClick={props.sort} name="rating">By rating</button>
                        </div>
            </div>

            <div className="dropdown-wrapper">
                        <button className="sort-button">Filter rating</button>
                        <div className="dropdown-content">
                            <button onClick={props.filter} name="1" className="filter-rating" >1</button>
                            <button onClick={props.filter} name="2" className="filter-rating" >2</button>
                            <button onClick={props.filter} name="3" className="filter-rating" >3</button>
                            <button onClick={props.filter} name="4" className="filter-rating" >4</button>
                            <button onClick={props.filter} name="5" className="filter-rating" >5</button>
                        </div>
            </div>

            <div className="dropdown-wrapper">
                        <button className="sort-button">Filter genre</button>
                        <div className="dropdown-content">
                            <button onClick={props.filter} name="Rock" className="filter-genre" >rock</button>
                            <button onClick={props.filter} name="Punk" className="filter-genre" >punk</button>
                            <button onClick={props.filter} name="Pop" className="filter-genre" >pop</button>
                            <button onClick={props.filter} name="Latin" className="filter-genre" >latin</button>
                        </div>
            </div>

            <button className="sort-button" onClick={props.clearFilters}>Clear filters</button>
        </div>
    )
}

export default SortAndFilter