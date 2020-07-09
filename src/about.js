const populateAbout = function (element) {
    element.innerHTML = "";

    let contentBackgroundDiv = document.createElement('div');
    contentBackgroundDiv.classList.add('content-background');

    let contentHeader = document.createElement('h2');
    contentHeader.classList.add('content-header');
    contentHeader.textContent = "About"

    let headHr = document.createElement('hr');
    headHr.classList.add('about-hr');

    contentBackgroundDiv.appendChild(contentHeader);
    contentBackgroundDiv.appendChild(headHr);

    let aboutContentGridDiv = document.createElement('div');
    aboutContentGridDiv.classList.add('about-content-grid');

    let food1 = document.createElement('img');
    food1.src = "static/food2.jpg";
    food1.classList.add('food-pic')
    food1.classList.add('pic1')

    aboutContentGridDiv.appendChild(food1);

    let aboutTextDiv1 = document.createElement('div');
    aboutTextDiv1.classList.add('about-text')
    aboutTextDiv1.classList.add('word1')

    let aboutText1 = document.createElement('p');
    aboutText1.textContent = "Serenity was opened just after the 2012 M23 rebellion in the city of Goma, with the vision of bringing world-class vegan dining to the war-torn Kivu region.";
    
    aboutTextDiv1.appendChild(aboutText1);
    aboutTextDiv1.classList.add('about-text')

    aboutContentGridDiv.appendChild(aboutTextDiv1);

    let aboutTextDiv2 = document.createElement('div');
    aboutTextDiv2.classList.add('about-text')
    aboutTextDiv2.classList.add('word2')

    let aboutText2 = document.createElement('p');
    aboutText2.textContent = "We are here to show the people of the Democratic Republic of the Congo that expertly crafted plant-based cuisine made with locally sourced farm-fresh vegetables is as it good as it gets.";

    aboutTextDiv2.appendChild(aboutText2)

    aboutContentGridDiv.appendChild(aboutTextDiv2);

    let food2 = document.createElement('img');
    food2.src = "static/food1.jpg";
    food2.classList.add('food-pic')
    food2.classList.add('pic2')

    aboutContentGridDiv.appendChild(food2);

    contentBackgroundDiv.appendChild(aboutContentGridDiv);

    element.appendChild(contentBackgroundDiv);
}

export default populateAbout;