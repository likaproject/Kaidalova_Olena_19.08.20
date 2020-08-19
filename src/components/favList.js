'use strict';

function favList(list) {
    const listContainer = document.getElementById('list');
    listContainer.innerHTML = '';

    list.forEach((item) => {
        const li = document.createElement('LI');
        const nodeName = document.createTextNode(item.name);
        li.appendChild(nodeName);
        li.setAttribute('class', 'favListItem')
        listContainer.appendChild(li);

        const path = document.getElementById(item.id);
        path.classList.add('favorite');
    });

}

export default favList;