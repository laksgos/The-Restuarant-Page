//info objects 
const welcome = {
    title: "Welcome to Chai Cafe",
    info: "We are proudly serving fresh home brew drinks from local sources. Our beans and tea leafs come directly from our community providers",
}
const hours = {
    Sunday: "Sunday Closed",
    Monday: "Monday 9am - 5 pm",
    Tuesday: "Tuesday 9am - 5 pm",
    Wednesday: "Wednesday 9am - 5 pm",
    Thursday: "Thursday 9am - 5 pm",
    Friday: "Friday 9am - 5 pm",
    Saturday: "Saturday 9am - 5 pm"
}
const mapLocation = {
    header: "Location",
    location: "500 Lafayette Avenue, Brooklyn 11209",
    googleMap: "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d12102.744294968943!2d-73.94773805!3d40.6808854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1638939465087!5m2!1sen!2sus"
}

const images = {
    intropic: "../src/chai.png",
    breakimg: "../src/break.PNG"
}

const map = {
    googleMap: "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d12102.744294968943!2d-73.94773805!3d40.6808854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1638939465087!5m2!1sen!2sus"
}

// function homePage(welcome, hours, mapLocation) {
//     // console.log(welcome)
//     // originaldiv=document.querySelector("#content")
//     // titlemessage = welcome.title
//     // titleframe= document.createElement("div")
//     // titleframe.innerText=titlemessage
//     // originaldiv.appendChild(titleframe)
//     // console.log(titleframe)
//     // titleframe.classList.add("home", "title")
//     addImage("#content", "../src/chai.png", "image", "chai1")
//     addImage("#content", "../src/chai.png", "image", "chai1")
//     addImage("#content", "../src/chai.png", "image", "chai2")
//     addImage("#content", "../src/chai.png", "image", "chai2")
//     newElement("#content", "div", welcome.title, "title")
//     newElement("#content", "div", welcome.info, "info")
//     newElement("#content", "div", "Hours", "header", "hours")
//     Object.keys(hours).forEach(day => {
//         newElement(".hours", "div", hours[day], "daily")

//     });

//     newElement("#content", "div", Object.keys(mapLocation)[0], "header", "location")
//     newElement(".location", "div", mapLocation.Location, "locationtext")

// }

// function newElement(attach, element, text, classtext, classtext2 = "") {
//     let attachingTo = document.querySelector(`${attach}`);
//     let newElem = document.createElement(`${element}`);
//     newElem.innerHTML = text;
//     newElem.classList.add(`${classtext}`)
//     newElem.classList.add(`${classtext2}`)
//     attachingTo.appendChild(newElem)
//     console.log(newElem)
// }

// function addImage(attach, link, classtext, classtext2) {
//     let attachingTo = document.querySelector(`${attach}`);
//     let newElem = document.createElement("img");
//     newElem.src = `${link}`
//     newElem.classList.add(`${classtext}`)
//     newElem.classList.add(`${classtext2}`)
//     attachingTo.appendChild(newElem)

// }
// //navigation Home, menu, contact  
// function createNav() {
//     originaldiv = document.querySelector("#content")
//     console.log(originaldiv)

//     navbar = document.createElement("nav")
//     navbar.classList.add("navbar")
//     console.log(navbar)

//     originaldiv.appendChild(navbar);

//     navdiv = document.createElement("div")
//     navdiv.classList.add("logo_header")
//     navA = document.createElement("a")
//     navA.classList.add("logo");
//     navA.href = "#"
//     navLogoButton = document.createElement("button")
//     navLogoButton.classList.add("navbar_toggle")
//     navLogoButton.textContent = "hi"

//     navbarButtonI = document.createElement("i")
//     navbarButtonI.classList.add("fas", "fa-bars")

//     navbar.appendChild(navdiv)
//     navdiv.appendChild(navA)
//     navdiv.appendChild(navLogoButton)
//     navLogoButton.appendChild(navbarButtonI);

//     //navbar rest 
//     ul = document.createElement("ul")
//     ul.classList.add("main_nav")
//     limenu = document.createElement("li")
//     limenua = document.createElement("a")
//     licontact = document.createElement("li")
//     licontacta = document.createElement("a")
//     licontacta.href = "#"
//     limenua.href = "#"
//     liHome = document.createElement("li")
//     liHomea = document.createElement("a")
//     liHomea.href = "#"

//     liHomea.innerText = "Home"
//     licontacta.innerText = "Contact"
//     limenua.innerText = "Menu"

//     ul.appendChild(liHome)
//     liHome.appendChild(liHomea)

//     ul.appendChild(limenu)
//     limenu.appendChild(limenua)
//     ul.appendChild(licontact)
//     licontact.appendChild(licontacta)
//     navbar.appendChild(ul)

// }

// createNav();
// homePage(welcome, hours, mapLocation);


//ELEMENT CREATORS 
function elementcreator(attacher, elem, insidetext = "", class1 = "", class2 = "") {
    let elementcreated = document.createElement(`${elem}`)
    if (class1) { elementcreated.classList.add(`${class1}`) }
    if (class2) { elementcreated.classList.add(`${class2}`) }
    if (insidetext) { elementcreated.innerText = insidetext }
    if (attacher) { attacher.appendChild(elementcreated) }
    return elementcreated;
}

function imagecreator(attacher, source, cls1 = "", cls2 = "") {
    let image = document.createElement("img")
    image.src = `${source}`
    if (cls1) { image.classList.add(`${cls1}`) }
    if (cls2) { image.classList.add(`${cls2}`) }
    if (attacher) { attacher.appendChild(image) }


}


// NAV CREATOR 
function createNav() {

    nav1 = elementcreator("", "nav", "", "navbar")
    div1 = elementcreator(nav1, "div", "Chai Cafe", "logo")
    ul1 = elementcreator(nav1, "ul", "", "nav-links")
    div2 = elementcreator(ul1, "div", "", "navMenu")

    li1 = elementcreator(div2, "li")
    a1 = elementcreator(li1, "a", "Home")

    li2 = elementcreator(div2, "li")
    a2 = elementcreator(li2, "a", "Menu")

    li3 = elementcreator(div2, "li")
    a3 = elementcreator(li3, "a", "Contact")

    attacherdiv = document.querySelector("#content")
    attacherdiv.appendChild(nav1);

}

//PAGE CREATOR

function introMessage(welcome, images) {
    div1 = document.querySelector("#content")

    imagecreator(div1, images.intropic, "image", "chai1")
    imagecreator(div1, images.intropic, "image", "chai1")
    imagecreator(div1, images.intropic, "image", "chai2")
    imagecreator(div1, images.intropic, "image", "chai2")

    div2 = elementcreator(div1, "div", "", "pageContent")
    elementcreator(div2, "div", welcome.title, "title")
    elementcreator(div2, "div", welcome.info, "info")
}

function schedule(hours) {

    div3 = elementcreator(div2, "div", "", "hoursFrame")
    elementcreator(div3, "div", "Hours", "header")

    Object.keys(hours).forEach(day => {
        elementcreator(div3, "div", hours[day], "subtext")
    });

}

function location(mapLocation) {

    div2 = document.querySelector(".pageContent")
    imagecreator(div2, images.breakimg, "breakimg")
    div3 = elementcreator(div2, "div", "", "locationFrame")
    elementcreator(div3, "div", mapLocation.header, "header")
    elementcreator(div3, "div", mapLocation.location, "subtext")
    map1 = elementcreator(div3, "iframe", "", "embeddedmap")
    map1.width = "400"
    map1.height = "400"
    map1.style = "border:1px"
    map1.allowfullscreen = ""
    map1.loading = "lazy"
    map1.src = map.googleMap;


}



// createNav()
// introMessage(welcome, images)
// schedule(hours)
// location(mapLocation)

createNav()