const main = document.querySelector('.main');


const fetchCharacters = async () => {
    const APIresponse = await fetch(`https://rickandmortyapi.com/api/character/`);

    const data = await APIresponse.json();

    data.results.map((char) => {
        const divCard = document.createElement('div');
        const divCardImg = document.createElement('div');
        const cardImg = document.createElement('img');
        const divCardInfos = document.createElement('div');
        const cardName = document.createElement('h3');
        const cardStatus = document.createElement('span');
        const cardSpecie = document.createElement('span');
        const cardGender = document.createElement('span');

        divCard.setAttribute('class', 'card');
        divCard.appendChild(divCardImg);
        divCardImg.setAttribute('class', 'card-img');
        divCardImg.appendChild(cardImg);
        divCard.appendChild(divCardInfos);
        divCardInfos.setAttribute('class', 'card-infos');
        cardName.setAttribute('class', 'card-name');

        if(char.status == 'Dead'){
            cardStatus.setAttribute('class', 'card-status-dead');
        }
        if(char.status == 'Alive') {
            cardStatus.setAttribute('class', 'card-status-alive');
        }
        if(char.status == 'unknown') {
            cardStatus.setAttribute('class', 'card-status-unknown');
        }

        cardSpecie.setAttribute('class', 'card-specie');
        divCardInfos.appendChild(cardName);
        divCardInfos.appendChild(cardStatus);
        divCardInfos.appendChild(cardSpecie);

        cardImg.setAttribute('src', char.image);
        cardName.innerHTML = char.name;
        cardStatus.innerHTML = "Status: " + char.status;
        cardSpecie.innerHTML = "Specie: " + char.species;
        cardGender.innerHTML = "Gender: " + char.gender;

        main.appendChild(divCard);
    });

    return data;
}

fetchCharacters();
