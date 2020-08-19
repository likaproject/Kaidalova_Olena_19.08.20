'use strict';

export default function itemCard(id, name, year, img, isFavorite) {
    let root = document.getElementById('container');

    let outerDiv = document.createElement('DIV');
    let innerDiv = document.createElement('DIV');

    let p = document.createElement('P');
    let span = document.createElement('SPAN');
    let nodeName = document. createTextNode(name);
    let nodeYear = document. createTextNode(year);
    p.appendChild(nodeName);
    span.appendChild(nodeYear);

    let star = document.createElement('DIV');
    star.innerHTML = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
    viewBox="0 0 512 512" width="35px" style="enable-background:new 0 0 512 512;" xml:space="preserve">
        <g>
        <path id=${id} fill="grey" class="starBody" d="M512,200.9c0,4.7-2.8,9.3-8.4,14.9L391.5,325.1l26.2,154.2c0,1.9,0,3.7,0,6.5c0,4.7-0.9,8.4-2.8,11.2
    c-1.9,2.8-5.6,4.7-9.3,4.7c-3.7,0-8.4-0.9-12.1-3.7l-138.3-73.8l-138.3,72.9c-4.7,2.8-8.4,3.7-12.1,3.7c-4.7,0-7.5-1.9-9.3-4.7
    s-2.8-6.5-2.8-11.2c0-0.9,0-3.7,0.9-6.5l26.2-154.2L7.5,214.9C1.9,209.3,0,204.6,0,199.9c0-7.5,5.6-12.1,17.8-14l155.1-22.4
    L242,23.4c3.7-8.4,9.3-13.1,14.9-13.1c5.6,0,11.2,4.7,14.9,13.1L341,163.5l155.1,22.4C506.4,188.7,512,193.4,512,200.9z"/>
    </g>
    </svg>`;
    star.setAttribute('class', 'star');

    let image = document.createElement('IMG');
    image.setAttribute('src', img);
    image.setAttribute('alt', 'Preview Image');
    image.setAttribute('class', 'preview');

    innerDiv.appendChild(star);
    innerDiv.appendChild(image);
    innerDiv.setAttribute('class', 'innerDiv');

    outerDiv.appendChild(innerDiv);
    outerDiv.appendChild(p);
    outerDiv.appendChild(span);
    outerDiv.setAttribute('class', 'itemStyle');
    root.appendChild(outerDiv);
};
