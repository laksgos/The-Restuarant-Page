const welcome = {
    title: "Welcome to Chai Cafe",
    info: "We are proudly serving fresh home brew drinks from local sources. Our beans and tea leafs come directly from our community providers",
}

const contact = {
    title: "Contact Us",
    info: "Concerns, Feedback, Experiences",
    info2: "Send us a Message and we will be sure to get back to you"
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
    intropic: "../image/chai.png",
    breakimg: "../image/break.png"
}

const map = {
    googleMap: "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d12102.744294968943!2d-73.94773805!3d40.6808854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1638939465087!5m2!1sen!2sus"
}



function elementcreator(attacher, elem, insidetext = "", class1 = "", class2 = "", source = "") {
    const elementcreated = document.createElement(`${elem}`)
    if (class1) { elementcreated.classList.add(`${class1}`) }
    if (class2) { elementcreated.classList.add(`${class2}`) }
    if (insidetext) { elementcreated.innerText = insidetext }
    if (attacher) { attacher.appendChild(elementcreated) }


    if (elem == "img") {
        elementcreated.src = `${source}`
    }

    return elementcreated;
}

function elementcreator2(attacher, elem, insidetext = "", classes, id = "", source = "", type = "", placeholder = "") {

    const elementcreated = document.createElement(`${elem}`)
    if (Array.isArray(classes)) {
        for (x = 0; x < classes.length; x++) {
            elementcreated.classList.add(`${classes[x]}`)
        }
    }
    if (!Array.isArray(classes) && classes) { elementcreated.classList.add(`${classes}`) }

    if (insidetext) { elementcreated.innerText = insidetext }


    if (elem == "img") {
        elementcreated.src = `${source}`
    }
    if (id) { elementcreated.id = `${id}` }
    if (type) { elementcreated.type = `${type}` }
    if (placeholder) { elementcreated.placeholder = `${placeholder}` }
    if (attacher) { attacher.appendChild(elementcreated) }

    return elementcreated;

}
// NAV CREATOR 
function createNav() {

    nav1 = elementcreator2("", "nav", "", "navbar")
    div1 = elementcreator2(nav1, "div", "Chai Cafe", "logo")
    ul1 = elementcreator2(nav1, "ul", "", "nav-links")
    div2 = elementcreator2(ul1, "div", "", "navMenu")

    li1 = elementcreator2(div2, "li", "", "", "homeli")

    a1 = elementcreator2(li1, "a", "Home", "home", "home")

    // a1.addEventListner("click", homePage())


    li2 = elementcreator2(div2, "li", "", "", "menuli")
    a2 = elementcreator2(li2, "a", "Menu", "menu", "menu")
        // a2.addEventListner("click", menuPage())
    li3 = elementcreator(div2, "li", "", "", "contactli")
    li3.id = "contactli"
    a3 = elementcreator2(li3, "a", "Contact", "contact", "contact")
        // a3.addEventListner("click", contactPage())

    attacherdiv = document.querySelector("#content")

    attacherdiv.appendChild(nav1);

    homebtn = document.getElementById("homeli")
    homebtn.addEventListener("click", () => { homePage() })
    menubtn = document.getElementById("menuli")
    menubtn.addEventListener("click", () => { menuPage() })
    contactbtn = document.getElementById("contactli")
    contactbtn.addEventListener("click", () => { contactPage() })

}

// HOME PAGE FUNCTION

function introMessage(welcome, images) {
    div1 = document.querySelector("#content")

    elementcreator2(div1, "img", "", "chai1", "", images.intropic)
    elementcreator2(div1, "img", "", "chai1", "", images.intropic)
    elementcreator2(div1, "img", "", "chai2", "", images.intropic)
    elementcreator2(div1, "img", "", "chai2", "", images.intropic)

    // imagecreator(div1, images.intropic, "image", "chai1")
    // imagecreator(div1, images.intropic, "image", "chai2")
    // imagecreator(div1, images.intropic, "image", "chai2")

    div2 = elementcreator2(div1, "div", "", "pageContent")
    elementcreator2(div2, "div", welcome.title, "title")
    elementcreator2(div2, "div", welcome.info, "info")

    if (welcome.info2) {
        elementcreator2(div2, "div", welcome.info2, "info")
    }
}

function schedule(hours) {

    div3 = elementcreator2(div2, "div", "", "hoursFrame")
    elementcreator2(div3, "div", "Hours", "header")

    Object.keys(hours).forEach(day => {
        elementcreator2(div3, "div", hours[day], "subtext")
    });
}

function location(mapLocation) {

    div2 = document.querySelector(".pageContent")
    elementcreator2(div2, "img", "", "breakimg", "", images.breakimg)
    div3 = elementcreator2(div2, "div", "", "locationFrame")
    elementcreator2(div3, "div", mapLocation.header, "header")
    elementcreator2(div3, "div", mapLocation.location, "subtext")
    map1 = elementcreator2(div3, "iframe", "", "embeddedmap")
    map1.width = "400"
    map1.height = "400"
    map1.style = "border:1px"
    map1.allowfullscreen = ""
    map1.loading = "lazy"
    map1.src = map.googleMap;
}

const menuHeaderinfo = {
    title: { el: "div", text: "Menu", class: "title" },
    info2: { el: "div", text: "Select below items and click Submit to proceed to checkout.", class: "info" },
    breakimg: { el: "img", class: "breakimg", source: "../image/break.png" }
}

const BeverageItems = {
    Cappucino: {
        id: 1,
        title: "Cappucino",
        price: "$4.50",
        description: "Locally sourced milk frothed to perfection with freshly brewed espresso",
        imgSource: "../image/cappuccino.png"
    },
    Coffee: {
        id: 2,
        title: "Coffee",
        price: "$3",
        description: "in-house ground and brewed daily fresh",
        imgSource: "../image/coffee.png"
    },
    Coldbrew: {
        id: 3,
        title: "Cold Brew",
        price: "$3",
        description: "Steeped nightly at 8 pm for a fresh aroma boost",
        imgSource: "../image/coldbrew.png"
    },
    Kombucha: {
        id: 5,
        title: "Kombucha",
        price: "$4.50",
        description: "Taste the antioxidents and freshen up the start of your day with locally sourced Scoby ",
        imgSource: "../image/kombucha.png"
    },
    Tea: {
        id: 6,
        title: "Herbal Tea",
        price: "$4.50",
        description: "Now with many different options, from Jasmine to Roseherb",
        imgSource: "../image/herbal.png"
    },
    Chai: {
        id: 7,
        title: "Chai",
        price: "$4.50",
        description: "Spiced tea mixture brewed strong with milk and sweetened with Honey",
        imgSource: "../image/menuchai.png"
    },
    Turmeric: {
        id: 8,
        title: "Turmeric Latte",
        price: "$4.50",
        description: "Milk infused with Turmeric with a shot of espresso!",
        imgSource: "../image/turmeric.png"
    },


}

const Pastryitems = {
    Kolache: {
        id: 9,
        title: "Kolache",
        price: "$6",
        description: "Sweet or Savery buttery Kolache in seasonal flavors!",
        imgSource: "../image/Kolache.png"
    },
    almondcroissants: {
        id: 10,
        title: "Almond Croissant",
        price: "$4.50",
        description: "Our rich, almond flan enveloped in a flaky, buttery croissant",
        imgSource: "../image/acroissant.png"
    },
    butercroissant: {
        id: 11,
        title: "Butter Croissant",
        price: "$4.50",
        description: "Buttery, homemade multilayered Butter Croissant!",
        imgSource: "../image/bcroissant.png"
    },
    Potatocroissant: {
        id: 12,
        title: "Potato Pastry",
        price: "$5",
        description: "Savory cheesy potatoes folded into flakey croissant dough",
        imgSource: "../image/pfold.png"
    },
    Shortbread: {
        id: 13,
        title: "Shortbread Cookies",
        price: "$2.50",
        description: "Delicious buttery taste and a rich sweetness with vanilla notes.",
        imgSource: "../image/scookie.png"
    },
    Eclair: {
        id: 14,
        title: "Eclair Cookies",
        price: "$4",
        description: "Milky and Creamy filling and rich chocolate topping for a perfect",
        imgSource: "../image/ecookie.png"
    },

}



// MENU FUNCTIONS

function menuHeader(menuHeaderinfo) {

    const title = menuHeaderinfo.title

    div1 = document.querySelector("#content")
    div2 = elementcreator2(div1, "div", "", "pageContent")


    elementcreator2(div2, title.el, title.text, title.class)
    elementcreator2(div2, menuHeaderinfo.info2.el, menuHeaderinfo.info2.text, menuHeaderinfo.info2.class)

    elementcreator2(div2, menuHeaderinfo.breakimg.el, "", menuHeaderinfo.breakimg.class, "", menuHeaderinfo.breakimg.source)
    console.log(div2)

    // Object.keys(menuHeaderinfo).forEach(key => {
    //     elementcreator(div2, menuHeaderinfo[key].el, menuHeaderinfo[key] text, menuHeaderinfo[key].class, menuHeaderinfo[key].class2, menuHeaderinfo[key].source)
    // });


}

function menu(menuItems) {
    div1 = document.querySelector("#content")
    divContainer = elementcreator2(div1, "div", "", "container")
    divMenu = elementcreator2(divContainer, "div", "", "menu")
    elementcreator2(divMenu, "h2", "Beverages", "menu-group-heading")
    divMenuGroup = elementcreator2(divMenu, "div", "", "menu-group")

    Object.keys(BeverageItems).forEach(key => {

        divMenuItem = elementcreator2(divMenuGroup, "div", "", "menu-item", "BeverageItems[key].id")
        image = elementcreator(divMenuItem, "img", "", "menu-item-image", "", BeverageItems[key].imgSource)
        image.alt = `${BeverageItems[key].title}`

        divMenuItemText = elementcreator2(divMenuItem, "div", "", "menu-item-text")
        divMenuItemHeading = elementcreator2(divMenuItemText, "h3", "", "menu-item-heading")
        elementcreator2(divMenuItemHeading, "span", BeverageItems[key].title, "menu-item-name")
        elementcreator2(divMenuItemHeading, "span", BeverageItems[key].price, "menu-item-price")

        elementcreator2(divMenuItemText, "p", BeverageItems[key].description, "menu-item-description")

        divMenuItem.addEventListener("click", (e) => {

            menuItemSelector(BeverageItems[key])


            divselector = document.getElementById(`${BeverageItems[key].id}`)

            // if (divselector.classList.contains("highlight")) {
            //     divselector.classList.toggle("highlight")
            // }
            divselector.classList.toggle("highlight")

            ordered()

        })

    });

    elementcreator2(divMenu, "h2", "Pastry", "menu-group-heading")
    divMenuGroup = elementcreator2(divMenu, "div", "", "menu-group")

    Object.keys(Pastryitems).forEach(key => {
        divMenuItem = elementcreator2(divMenuGroup, "div", "", "menu-item", Pastryitems[key].id)

        image = elementcreator2(divMenuItem, "img", "", "menu-item-image", "", Pastryitems[key].imgSource)
        image.alt = `${Pastryitems[key].title}`

        divMenuItemText = elementcreator2(divMenuItem, "div", "", "menu-item-text")
        divMenuItemHeading = elementcreator2(divMenuItemText, "h3", "", "menu-item-heading")
        elementcreator2(divMenuItemHeading, "span", Pastryitems[key].title, "menu-item-name")
        elementcreator2(divMenuItemHeading, "span", Pastryitems[key].price, "menu-item-price")

        elementcreator2(divMenuItemText, "p", Pastryitems[key].description, "menu-item-description")

        divMenuItem.addEventListener("click", (e) => {

            menuItemSelector(Pastryitems[key])


            divselector = document.getElementById(`${Pastryitems[key].id}`)

            // if (divselector.classList.contains("highlight")) {
            //     divselector.classList.toggle("highlight")
            // }
            divselector.classList.toggle("highlight")


        })

    });
    buttonDiv = elementcreator2(div1, "div", "", "buttonDiv")
    submissionButton = elementcreator2(buttonDiv, "button", "Order", ["menu-item-submission", "col-6", "btn-success", "btn"], "", "", "submit")

    submissionButton.addEventListener("click", () => {
        let totalprice = 0;
        const orderedItems = ordered()
        const orderedItemsDetails = []
        console.log(orderedItems)

        Object.keys(Pastryitems).forEach(key => {
            if (orderedItems.includes(Pastryitems[key].id)) {

                orderedItemsDetails.push([Pastryitems[key].title, Number(Pastryitems[key].price.slice(1))])
                totalprice += Number(Pastryitems[key].price.slice(1))
            }

        });
        console.log(orderedItemsDetails)
        console.log(totalprice)

    })


    // divMenuItem = elementcreator(divMenuGroup, "div", "", "menu-item")
    // image = elementcreator(divMenuItem, "img", "", "menu-item-image", "", BeverageItems.Cappucino.imgSource)
    // image.alt = `${BeverageItems.Cappucino.title}`

    // divMenuItemText = elementcreator(divMenuItem, "div", "", "menu-item-text")
    // divMenuItemHeading = elementcreator(divMenuItemText, "h3", "", "menu-item-heading")
    // elementcreator(divMenuItemHeading, "span", BeverageItems.Cappucino.title, "menu-item-name")
    // elementcreator(divMenuItemHeading, "span", BeverageItems.Cappucino.price, "menu-item-price")

    // elementcreator(divMenuItemText, "p", BeverageItems.Cappucino.description, "menu-item-description")

}
const buying = []


function menuItemSelector(obj) {

    buying.push(obj.id)
}

function clearPage() {
    div1 = document.querySelector("#content")
    div1.innerHTML = ""

}

function errorChecking() {
    // import * as yup from "yup";
    const yup = require("yup");

    const userSchema = yup.object().shape({
        name: yup.string().required("Name is a required field"),
        email: yup.string().email("This is not a valid email address").required("Email is a required field"),
        message: yup.string().max(100, "The message can not be greater than 100 characters").required("Message is a required field"),
    })

    userSchema
        .validate({
            name: document.getElementById("contact-name").value,
            email: document.getElementById("contact-email").value,
            message: document.getElementById("contact-message").value
        }, { abortEarly: false })
        .then(function(valid) {
            errordisplay = document.getElementById("errorDisplaySection")
            errordisplay.innerHTML = "Form submitted successfully"
                // elementcreator(messagesection, "div", "Form submitted successfully")
            document.getElementById("contact-name").value = ""
            document.getElementById("contact-email").value = ""
            document.getElementById("contact-message").value = ""
        })
        .catch(function(e) {
            const errors = e.errors.join("<br>")
            errordisplay = document.getElementById("errorDisplaySection")
            errordisplay.innerHTML = errors

        })
}

function contactForm() {

    // const createUser = (event) => {
    //     event.preventDefault()
    //     let formData = {
    //         name: event.target[0].value,
    //         email: event.target[1].value,
    //         message: event.target[2].value,
    //     }
    //     console.log(formData)
    // }

    div1 = document.querySelector("#content")
    divcontainer = elementcreator2(div1, "div", "", "container")
    section = elementcreator2(divcontainer, "section", "", "")
    form = elementcreator2(section, "form", "", "")

    div2 = elementcreator2(form, "div", "", "mb-3")
    label = elementcreator2(div2, "label", "Your Name", "form-label")
    label.for = "Name"
    input = elementcreator2(div2, "input", "", "form-control", "contact-name", "", "text", "First and Last Name")
        // input.placeholder = "First and Last Name"
        // input.type = 'text'
        // input.id = "contact-name"

    div2 = elementcreator2(form, "div", "", "mb-3")
    label = elementcreator2(div2, "label", "Email", "form-label")
    label.for = "email-addr09ess"
    input = elementcreator2(div2, "input", "", "form-control", "contact-email", "", "text", "Email Address")
        // input.placeholder = "Email Address"
        // input.type = 'text'
        // input.id = "contact-email"

    div2 = elementcreator2(form, "div", "", "mb-3", "errordisplay")
    label = elementcreator(div2, "label", "Message", "form-label")
    label.for = "contact-message"
    input = elementcreator2(div2, "textarea", "", ["form-control", "contactMessage"], "contact-message", "", "text", "Write us something..")
        // input.classList.add("contactMessage")
        // input.placeholder = "Write us something.."
        // input.type = 'text'
        // input.id = "contact-message" //bernard: add to the elementcreator 
    input.style = "height:200px"


    div2 = elementcreator2(form, "div", "", "text-center")
    button = elementcreator2(div2, "input", "Submit", ["btn", "btn-success", "col-6"], "", "", "button")
    button.value = "Submit"
    button.onclick = errorChecking

    const messagesection = document.getElementById("errordisplay")
    errordisplay = elementcreator2(messagesection, "div", ``, "", "errorDisplaySection")



    // let btnRemove = document.createElement("input");
    // btnRemove.type = "button";
    // btnRemove.value = "remove";
    // btnRemove.onclick = controllerRemoveBook;
}
// CONTACT PAGE CREATOR 
function contactPage() {

    clearPage()
    createNav()
    introMessage(contact, images)
    contactForm()
}
// MENU PAGE CREATOR 
function menuPage() {
    clearPage()
    createNav()
    menuHeader(menuHeaderinfo)
    menu(BeverageItems)

}

// HOME PAGE CREATOR 
function homePage() {
    clearPage()
    createNav()
    introMessage(welcome, images)
    schedule(hours)
    location(mapLocation)
}


function loader() {

    contactPage()
    attacherdiv = document.querySelector("#content")

}
loader()

function ordered() {
    const items = Array.from(document.getElementsByClassName("highlight"));
    const orderedItems = []
    items.forEach(function(item, index) {
        orderedItems.push(Number(item.id))
    });
    return orderedItems

}