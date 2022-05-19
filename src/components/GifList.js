import React, { Component } from 'react';

class GifList extends Component {

    render() { 
        return (
            <ul>
                {this.props.gifs.map((gif, index) => {
                    return <li key={index}>
                        <img src={gif.url} />
                    </li>
                })}
            </ul>
        );
    }
}
 
export default GifList;