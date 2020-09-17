'use strict';

function getFavorite() {
    const favList = JSON.parse(localStorage.getItem('favorite'));

    return favList
        ||
        JSON.parse(localStorage.getItem('fullList')).filter(film => {
            return film.isFavorite === true;
        });
}

export default getFavorite;
