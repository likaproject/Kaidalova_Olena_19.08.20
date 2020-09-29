'use strict';

export default class itemDetailsModal {
    constructor (film) {
        this.image = film.img;
        this.hasImage = !film.img.includes('restrictions');
        this.titleNode = document.createTextNode(film.name);
        this.descriptionNode = document.createTextNode(film.description);
        this.year = document.createTextNode(film.year);
        this.director = document.createTextNode(film.director);
        this.starring = document.createTextNode(film.starring);
        this.genres = film.genres;
        this.noContent = document.createTextNode('NO IMAGE');
    }

    open () {
        let curtain = document.createElement('DIV');
        curtain.setAttribute('class', 'curtain');
        // close the modal on click outside of it
        curtain.addEventListener('click', this.close);

        let modal = document.createElement('DIV');
        modal.setAttribute('class', 'modal');
        // close the modal when cross clicked
        modal.addEventListener('click', (e) => {
            if(!e.target.closest('.modal__cross')) { return; }
            this.close();
        });

        let leftColumn = document.createElement('DIV');
        leftColumn.setAttribute('class', 'modal__leftColumn');

        let rightColumn = document.createElement('DIV');
        rightColumn.setAttribute('class', 'modal__rightColumn');

        let image = document.createElement('IMG');
        image.setAttribute('src', this.image);
        image.setAttribute('alt', 'Promo image');
        image.setAttribute('class', 'modal__leftColumn_img');

        let noImg = document.createElement('P');
        noImg.setAttribute('class', 'modal__leftColumn_noImg');
        noImg.appendChild(this.noContent);

        let title = document.createElement('H2');
        title.setAttribute('class', 'modal__rightColumn_title');
        title.appendChild(this.titleNode);

        let description = document.createElement('P');
        description.appendChild(this.descriptionNode);

        let star = document.createElement('DIV');
        star.innerHTML = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
    viewBox="0 0 512 512" width="35px" style="enable-background:new 0 0 512 512;" xml:space="preserve">
        <g>
        <path id=${this.id} fill="grey" class="starBody" d="M512,200.9c0,4.7-2.8,9.3-8.4,14.9L391.5,325.1l26.2,154.2c0,1.9,0,3.7,0,6.5c0,4.7-0.9,8.4-2.8,11.2
    c-1.9,2.8-5.6,4.7-9.3,4.7c-3.7,0-8.4-0.9-12.1-3.7l-138.3-73.8l-138.3,72.9c-4.7,2.8-8.4,3.7-12.1,3.7c-4.7,0-7.5-1.9-9.3-4.7
    s-2.8-6.5-2.8-11.2c0-0.9,0-3.7,0.9-6.5l26.2-154.2L7.5,214.9C1.9,209.3,0,204.6,0,199.9c0-7.5,5.6-12.1,17.8-14l155.1-22.4
    L242,23.4c3.7-8.4,9.3-13.1,14.9-13.1c5.6,0,11.2,4.7,14.9,13.1L341,163.5l155.1,22.4C506.4,188.7,512,193.4,512,200.9z"/>
    </g>
    </svg>`;
        // ToDo: add isFavorite and color
        star.setAttribute('class', 'modal__leftColumn_details_item');

        let year = document.createElement('DIV');
        let yearSpan = document.createElement('P');
        yearSpan.appendChild(this.year);
        year.setAttribute('class', 'modal__leftColumn_details_item');
        year.appendChild(yearSpan);

        let director = document.createElement('P');
        director.setAttribute('class', 'modal__rightColumn_director');
        director.appendChild(this.director);
        let directorNode = document.createTextNode('Director: ');
        director.prepend(directorNode);

        let starring = document.createElement('P');
        starring.setAttribute('class', 'modal__rightColumn_starring');
        let starringNode = document.createTextNode('Starring: ');
        starring.appendChild(this.starring);
        starring.prepend(starringNode);

        let details = document.createElement('DIV');
        details.setAttribute('class', 'modal__leftColumn_details');
        details.appendChild(star);
        details.appendChild(year);

        this.genres.forEach(genre => {
            let g = document.createElement('DIV');
            g.setAttribute('class', 'modal__leftColumn_details_item');
            let text = document.createTextNode(genre.toUpperCase());
            g.appendChild(text);
            details.appendChild(g);
        });

        this.hasImage ? leftColumn.appendChild(image) : leftColumn.appendChild(noImg);
        leftColumn.appendChild(details);

        rightColumn.appendChild(title);
        rightColumn.appendChild(description);
        rightColumn.appendChild(director);
        rightColumn.appendChild(starring);

        let cross = document.createElement('SPAN');
        cross.setAttribute('class', 'fas fa-times modal__cross');

        modal.appendChild(leftColumn);
        modal.appendChild(rightColumn);
        modal.appendChild(cross);

        document.body.appendChild(curtain);
        document.body.appendChild(modal);
    }

    close() {
        let curtain = document.getElementsByClassName('curtain')[0];
        let modal = document.getElementsByClassName('modal')[0];

        document.body.removeChild(curtain);
        document.body.removeChild(modal);
    }
}
