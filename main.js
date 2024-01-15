async function getMeme() {
    try {
        await fetch('https://meme-api.com/gimme/wholesomememes').then((res) => {
            console.log(res);
            res.json().then((data) => {
                console.log(data.url);
                updateData(data)
            })
        })
    } catch (error) {
        console.log(error);
    }

}

function updateData(data){
    const memeImage = document.querySelector(".meme__img");
    const memeTitle = document.querySelector(".meme__title");
    const memeAuthor = document.querySelector(".meme__author");

    memeImage.src = data.url;
    memeTitle.innerText = "Title: "+ data.title;
    memeAuthor.innerHTML = "Author: " + data.author;

}