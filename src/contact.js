const populateContact = function (element) {
    element.innerHTML = ""

    let contentBackgroundDiv = document.createElement('div');
    contentBackgroundDiv.classList.add('content-background');

    let contentHeader = document.createElement('h2');
    contentHeader.classList.add('content-header');
    contentHeader.textContent = "Contact"

    let headHr = document.createElement('hr');
    headHr.classList.add('about-hr');

    contentBackgroundDiv.appendChild(contentHeader);
    contentBackgroundDiv.appendChild(headHr);

    let contentGridDiv = document.createElement('div');
    contentGridDiv.classList.add('content-grid');

    let contactMethodsDiv = document.createElement('div');
    contactMethodsDiv.classList.add('contact-methods');

    let emailP = document.createElement('p');
    emailP.textContent = "Email: \enquiries@serenitydining.com";

    let phoneP = document.createElement('p');
    phoneP.textContent = "Phone: \n+243 888789558";

    let addressP = document.createElement('p');
    addressP.textContent = "Address:";

    let addressList = ["2222 Mtaa Wa Mailitatu Road", "Goma", "Democratic Republic of the Congo"];

    addressList.forEach(line => {
        let lineP = document.createElement('p');
        lineP.textContent = line;
        lineP.classList.add('hours');
        addressP.appendChild(lineP);
        });

    let hoursP = document.createElement('p');
    hoursP.textContent = "Hours:";

    let hoursList = ["Monday: Closed", "Tuesday-Friday: 3pm - 10pm", "Weekends: 3pm - 11pm"];

    hoursList.forEach(line => {
        let lineP = document.createElement('p');
        lineP.textContent = line;
        lineP.classList.add('hours');
        hoursP.appendChild(lineP);
        });

    contactMethodsDiv.appendChild(emailP);
    contactMethodsDiv.appendChild(phoneP);
    contactMethodsDiv.appendChild(addressP);
    contactMethodsDiv.appendChild(hoursP);

    contentGridDiv.appendChild(contactMethodsDiv);

    let locationImg = document.createElement('img');
    locationImg.classList.add("location");
    locationImg.src = "static/location.png";

    contentGridDiv.appendChild(locationImg);

    contentBackgroundDiv.appendChild(contentGridDiv);

    element.appendChild(contentBackgroundDiv);
}

export default populateContact;