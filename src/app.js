'use strict';

import getData from './services/getData';
import getFavorite from './services/getFavorite';
import itemCard from './components/itemCard';
import favList from './components/favList';
import './styles/itemCard.css';
import './styles/favList.css';

const container = document.getElementById('container');

getData('http://my-json-server.typicode.com/moviedb-tech/movies/list')
    .then(list => {
        for(let i = 0; i < 8; i++) {
            list[i].isFavorite = false;
            itemCard(list[i].id, list[i].name, list[i].year, list[i].img, list[i].isFavorite);
        }

        return list;
    })
    .then((list) => {
        localStorage.setItem('fullList', JSON.stringify(list));
        const favorite = getFavorite();

        container.addEventListener('click', (event) => {
            let filmId = event.target.id;
            let film = list[filmId - 1];

            const isInFavoriteList = favorite.some(film => {
                return film.id === +filmId;
            });

            if(event.target.classList.contains('starBody')
                && !event.target.classList.contains('favorite')
                && !isInFavoriteList) {
                favList.addToFavList(event, film);
            } else if(event.target.classList.contains('starBody')) {
                favList.deleteFromFavList(event, filmId, film);
            }
        });

        favList.renderList(favorite);
    });
