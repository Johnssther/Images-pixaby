const fpost = ({ span = 1, img, name, tags, pageURL }) => {
    let arr = tags.split(','); 
    return (
        ` 
        <div class="card two span-${span} span-sm-1">
            <div class="two__img_1">
                <a href="${img}" target="_blank" download="custom-filename.jpg">
                    <img class="border-radius-1 cursor" src="${img}" alt="${name}">
                </a>
            </div>
        </div>
        `
    )
}

const getData = () => {

    fetch('https://pixabay.com/api?key=20970363-e25f75efc680fcf7698affe51&per_page=200')
    .then(response => response.json())
    .then((data) => {

        let posts = '';
        data.hits.forEach((element, index) => {
            index+=1
            posts += fpost({ img:element.largeImageURL, name:"image1", tags:element.tags, pageURL:element.pageURL })
        });
        document.getElementById('posts').innerHTML = posts

    })
}
getData();
