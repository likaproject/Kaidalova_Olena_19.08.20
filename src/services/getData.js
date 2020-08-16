'use strict';

const getData = async function (url) {
    let data = await fetch(url)
            .then(res => res.json())
            .then(res => res);

    return data;
};

export default getData;
