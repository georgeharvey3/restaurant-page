const populateHome = function (element) {

    element.innerHTML = "";

    let splitDiv = document.createElement('div');
    splitDiv.classList.add('split-div')

    let overviewDiv = document.createElement('div');
    overviewDiv.classList.add('overview')

    let overviewCardDiv = document.createElement('div');
    overviewCardDiv.classList.add('overview-card');

    let wordsDiv = document.createElement('div');
    wordsDiv.classList.add("words");

    let hr1 = document.createElement('hr');
    hr1.classList.add('index-hr')

    let hr2 = document.createElement('hr');
    hr2.classList.add('index-hr')


    let wordsH2 = document.createElement('h2');
    wordsH2.textContent = "Serenity";

    let wordsH3 = document.createElement('h3');
    wordsH3.textContent = "Goma";

    wordsDiv.appendChild(hr1);
    wordsDiv.appendChild(wordsH2);
    wordsDiv.appendChild(wordsH3);
    wordsDiv.appendChild(hr2);

    overviewCardDiv.appendChild(wordsDiv);

    overviewDiv.appendChild(overviewCardDiv);

    splitDiv.appendChild(overviewDiv);
    
    let bulletsDiv = document.createElement('div');
    bulletsDiv.classList.add('bullets');

    let emptyDiv = document.createElement('div');

    let bulletCardDiv = document.createElement('div');
    bulletCardDiv.classList.add('bullet-card');

    let summaryDiv = document.createElement('div');
    summaryDiv.classList.add('summary');

    let hr3 = document.createElement('hr');
    hr3.classList.add('index-hr')

    let p1 = document.createElement('p');
    p1.textContent = "Pioneering innovative vegan cuisine";

    let p2 = document.createElement('p');
    p2.textContent = "In Africa's most violent city";

    let hr4 = document.createElement('hr');
    hr4.classList.add('index-hr')

    summaryDiv.appendChild(hr3);
    summaryDiv.appendChild(p1);
    summaryDiv.appendChild(p2);
    summaryDiv.appendChild(hr4);

    bulletCardDiv.appendChild(summaryDiv);

    bulletsDiv.appendChild(emptyDiv);
    bulletsDiv.appendChild(bulletCardDiv);

    splitDiv.appendChild(bulletsDiv);

    element.appendChild(splitDiv);
}

export default populateHome;