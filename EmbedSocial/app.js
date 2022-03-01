var myArray = [];
var name = '';
var counter = 0;
var cards = document.querySelector(".cardHolder");
var like = './assets/heart.svg';
var liked = './assets/heartred.png';

fetch('./data.json')
    .then(results => results.json())
    .then((data) => {
        myArray = data;
        createCard();
    })


function createCard() {

    for (let i = this.counter; i <= this.counter + 3; i++) {
        let card = `
            <div class="card">
            <div class="top">
                <div class="user">
                <div class="profileImg">
                    <img src="${myArray[i].profile_image}" alt="">
                </div>
                <h3 id="name">${myArray[i].name}</h3><br><span>${myArray[i].date}</span>  
                </div>
                <div>
                <img src="./assets/instagram-logo.svg" alt="">
            </div>
            </div>
            <div class="imgBx">
                <img src="${myArray[i].image}" alt="" class="cover">
            </div>
            <div class="caption">
                <h4>${myArray[i].caption}</h4>
            </div>
            <hr>
            <div class="likes" id="likes">
                <img src=${like}  alt="" id="heart" class="heart" onclick="likeButton(${myArray[i].id})"> <span>${myArray[i].likes}</span>
            </div>
            </div>
            `;

        cards.innerHTML += card;
    }
    this.counter += 3;
    if (this.counter + 3 >= myArray.length)
        document.getElementById('btn').style.display = "none"

    this.counter++;
}

function likeButton(id) {
    const img = document.querySelector('#heart');
    for (i = 0; i <= myArray.length; i++) {
        let heart = document.querySelector('.heart');
        if (heart.src.match("./assets/heart.svg")) {
            this.myArray[id].likes++;
            heart.src = liked;
        }
        else {
            this.myArray[id].likes--;
            heart.src = like;
        }
    }

}




