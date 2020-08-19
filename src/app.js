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
        const favorite = getFavorite('favorite', list);

        container.addEventListener('click', (event) => {
            let filmId = event.target.id;
            let film = list[filmId - 1];

            const isInFavoriteList = (favorite.some(film => {
                return film.id === +filmId;
            }));

            if(event.target.classList.contains('starBody')
                && !event.target.classList.contains('favorite')
                && !isInFavoriteList) {
                film.isFavorite = true;
                favorite.push(film);
                favList(favorite); // render list in a sideBar
                localStorage.setItem('favorite', JSON.stringify(favorite));
                event.target.classList.add('favorite');

            } else if(event.target.classList.contains('starBody')
                && event.target.classList.contains('favorite')
                && isInFavoriteList) {
                film.isFavorite = false;
                favorite.splice(favorite.indexOf(film), 1);
                favList(favorite); // render list in a sideBar
                localStorage.setItem('favorite', JSON.stringify(favorite));
                event.target.classList.remove('favorite');
            }
        });

        favList(favorite);
    });
