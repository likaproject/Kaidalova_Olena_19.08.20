'use strict';

const getFilmInfo = function (id) {
    let filmInfo = fetch(`http://my-json-server.typicode.com/moviedb-tech/movies/list/${id}`)
        .then(res => res.json())
        .then(res => res);

    return filmInfo;
};

export default getFilmInfo;
