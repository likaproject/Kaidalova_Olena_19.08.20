'use strict';

function getFavorite(localField, fullList) {
    return JSON.parse(localStorage.getItem(localField))
        ||
        fullList.filter(film => {
            return film.isFavorite === true;
        })
        || [];
}

export default getFavorite;
