'use strict';

import getFavorite from '../services/getFavorite';

function favList(list) {
    const listContainer = document.getElementById('list');
    listContainer.addEventListener('click', deleteFromFavList);

    listContainer.innerHTML = '';

    list.forEach((item) => {
        const li = document.createElement('LI');
        li.setAttribute('class', 'favListItem');

        const nodeName = document.createTextNode(item.name);

        const div = document.createElement('DIV');
        const i = document.createElement('I');
        div.setAttribute('data-id', item.id);
        i.setAttribute('class', 'fas fa-times');
        div.appendChild(i);

        li.appendChild(nodeName);
        li.appendChild(div);

        listContainer.appendChild(li);

        const path = document.getElementById(item.id);
        path.classList.add('favorite');
    });
}
// ToDo: implement button to clear favorite list
function deleteFromFavList(event, ...rest) {
    const filmId = event.target.closest('div').dataset.id || rest[0];
    const favorite = getFavorite();

    let film = favorite.find(film => {
        if(film.id === +filmId) {
            return film;
        }}) || rest[1];

    if(filmId){
        favorite.splice(favorite.indexOf(film), 1);

        localStorage.setItem('favorite', JSON.stringify(favorite));

        // render list in a sideBar
        favList.renderList(favorite);

        if(event.target.classList.contains('starBody')) {
            event.target.classList.remove('favorite');
        } else {
            document.getElementById(film.id).classList.remove('favorite');
        }
    }
}

function addToFavList(event, film) {
        film.isFavorite = true;
        const favorite = getFavorite();
        favorite.push(film);

        localStorage.setItem('favorite', JSON.stringify(favorite));

        // render list in a sideBar
        favList.renderList(favorite);
        event.target.classList.add('favorite');
}

export default favList = {
    renderList: favList,
    deleteFromFavList: deleteFromFavList,
    addToFavList: addToFavList
};
