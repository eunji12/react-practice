import React from 'react';
import PropTyps from 'prop-types';

function Movie({id, title, summary , year, poster}){
    return (
        <div>
            <h5>{title}</h5>
        </div>
    )
}
Movie.PropTyps  = {
    id : PropTyps.number.isRequired,
    title : PropTyps.string.isRequired,
    summary : PropTyps.string.isRequired,
    year : PropTyps.number.isRequired,
    poster : PropTyps.string.isRequired
}

export default Movie;