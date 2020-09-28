'use strict';

const getData = async function (url) {
    return await fetch(url)
            .then(res => res.json())
            .then(res => res);
};

export default getData;
