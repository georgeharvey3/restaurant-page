const populateMenu = function (element) {
    element.innerHTML = "";

    let menuDiv = document.createElement('div');
    menuDiv.classList.add('menu');

    let menuHeader = document.createElement('h2');
    menuHeader.textContent = "Serenity";

    menuDiv.appendChild(menuHeader);

    let priceInfo1 = document.createElement('p');
    priceInfo1.textContent = "2 Courses - 120,000 FC";
    priceInfo1.classList.add('price-info');

    menuDiv.appendChild(priceInfo1);

    let priceInfo2 = document.createElement('p');
    priceInfo2.textContent = "3 Courses - 170,000 FC";
    priceInfo2.classList.add('price-info');

    menuDiv.appendChild(priceInfo2);


    let starterHeader = document.createElement('h3');
    starterHeader.textContent = "Starters";
    starterHeader.classList.add('food-section-header');

    menuDiv.appendChild(starterHeader);

    menuDiv.appendChild(document.createElement('hr'));

    let starterItems = [
        ['Sweet Potato Canapes with Hollandaise Mung Bean Sprouts'],
        ['Arugula Salad with Apricots and Champagne Vinaigrette'],
        ['Roasted Balsamic Beets and Rutabaga']
    ]

    starterItems.forEach(item => {
        let foodText = document.createElement('p');
        foodText.textContent = item[0];

        let foodRowDiv = document.createElement('div');
        foodRowDiv.classList.add('food-row');

        foodRowDiv.appendChild(foodText);

        menuDiv.appendChild(foodRowDiv);
    });

    let mainHeader = document.createElement('h3');
    mainHeader.textContent = "Main Courses";
    mainHeader.classList.add('food-section-header');

    menuDiv.appendChild(mainHeader);

    menuDiv.appendChild(document.createElement('hr'));

    let mainItems = [
        ['Chickpea Turmeric Quinoa Bowl Buddha Bowl'],
        ['Miso Glazed Eggplant Scallops'],
        ['Linguine with Heirloom Tomato Sauce & Oyster Mushrooms'],
        [' Whole Roasted Cauliflower with Zaatar Spice and Tahini Sauce']
    ]

    mainItems.forEach(item => {
        let foodText = document.createElement('p');
        foodText.textContent = item[0];

        let foodRowDiv = document.createElement('div');
        foodRowDiv.classList.add('food-row');

        foodRowDiv.appendChild(foodText);

        menuDiv.appendChild(foodRowDiv);
    
    });

    let dessertHeader = document.createElement('h3');
    dessertHeader.textContent = "Desserts";
    dessertHeader.classList.add('food-section-header');

    menuDiv.appendChild(dessertHeader);

    menuDiv.appendChild(document.createElement('hr'));

    let dessertItems = [
        ['Pumpkin Parfait with Almond Ganache'],
        ['Pistachio Tart with Basil-Avocado Sorbet'],
        ['Blackberry Shortcake with Marscapone Cream'],
    ]

    dessertItems.forEach(item => {
        let foodText = document.createElement('p');
        foodText.textContent = item[0];

        let foodRowDiv = document.createElement('div');
        foodRowDiv.classList.add('food-row');

        foodRowDiv.appendChild(foodText);

        menuDiv.appendChild(foodRowDiv);
    
    });

    menuDiv.appendChild(document.createElement('hr'));

    let footerDiv = document.createElement('div');
    
    let footerText = document.createElement('p');
    footerText.textContent = "We are happy to make substitutions where possible. Please speak to your waiter for more information."

    footerDiv.appendChild(footerText);

    menuDiv.appendChild(footerDiv)

    element.appendChild(menuDiv);
} 

export default populateMenu;