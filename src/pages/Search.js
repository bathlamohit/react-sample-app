import React from 'react';

const SearchBar = (props) => {
    const BarStyling = {
        width: "20rem", background: "#F2F1F9", border: "none", padding: "0.5rem", marginLeft: "19%",
        marginTop: "2%"
    };
    return (
        <input
            style={BarStyling}
            key="random1"
            value={props.input}
            onChange={(e) => props.onChange(e.target.value)}
        />
    );
}

export default SearchBar