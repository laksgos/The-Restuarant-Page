import { contactPage } from "./contact"
import { homePage } from "./home"
import { menuPage } from "./menu"

//ELEMENT CREATORS 


function imagecreator(attacher, source, cls1 = "", cls2 = "") {
    let image = document.createElement("img")
    image.src = `${source}`
    if (cls1) { image.classList.add(`${cls1}`) }
    if (cls2) { image.classList.add(`${cls2}`) }
    if (attacher) { attacher.appendChild(image) }


}

function elementcreator(attacher, elem, insidetext = "", class1 = "", class2 = "", source = "") {
    let elementcreated = document.createElement(`${elem}`)
    if (class1) { elementcreated.classList.add(`${class1}`) }
    if (class2) { elementcreated.classList.add(`${class2}`) }
    if (insidetext) { elementcreated.innerText = insidetext }
    if (attacher) { attacher.appendChild(elementcreated) }


    if (elem == "img") {
        elementcreated.src = `${source}`
    }

    return elementcreated;

}


function elementcreator2(attacher, elem, insidetext = "", classes, id = "", source = "", typ = "", placeholder = "") {

    let elementcreated = document.createElement(`${elem}`)
    if (Array.isArray(classes)) {
        for (let x = 0; x < classes.length; x++) {
            elementcreated.classList.add(`${classes[x]}`)
        }
    }
    if (!Array.isArray(classes) && classes) { elementcreated.classList.add(`${classes}`) }

    if (insidetext) { elementcreated.innerText = insidetext }


    if (elem == "img") {
        elementcreated.src = `${source}`
    }
    if (id) { elementcreated.id = `${id}` }
    if (typ) { elementcreated.type = `${typ}` }
    if (placeholder) { elementcreated.placeholder = `${placeholder}` }
    if (attacher) { attacher.appendChild(elementcreated) }

    return elementcreated;


}

// NAV CREATOR 
function createNav() {

    let nav1 = elementcreator2("", "nav", "", "navbar")
    let div1 = elementcreator2(nav1, "div", "Chai Cafe", "logo")
    let ul1 = elementcreator2(nav1, "ul", "", "nav-links")
    let div2 = elementcreator2(ul1, "div", "", "navMenu")

    let li1 = elementcreator2(div2, "li", "", "", "homeli")

    let a1 = elementcreator2(li1, "a", "Home", "home", "home")

    // a1.addEventListner("click", homePage())


    let li2 = elementcreator2(div2, "li", "", "", "menuli")
    let a2 = elementcreator2(li2, "a", "Menu", "menu", "menu")
        // a2.addEventListner("click", menuPage())
    let li3 = elementcreator(div2, "li", "", "", "contactli")
    li3.id = "contactli"
    let a3 = elementcreator2(li3, "a", "Contact", "contact", "contact")
        // a3.addEventListner("click", contactPage())

    let attacherdiv = document.querySelector("#content")

    attacherdiv.appendChild(nav1);

    let homebtn = document.getElementById("homeli")
    homebtn.addEventListener("click", () => { homePage() })
    let menubtn = document.getElementById("menuli")
    menubtn.addEventListener("click", () => { menuPage() })
    let contactbtn = document.getElementById("contactli")
    contactbtn.addEventListener("click", () => { contactPage() })

}

//HOME PAGE FUNCTION


let buying = []


function menuItemSelector(obj) {

    buying.push(obj.id)
}

function clearPage() {
    let div1 = document.querySelector("#content")
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
            let errordisplay = document.getElementById("errorDisplaySection")
            errordisplay.innerHTML = "Form submitted successfully"
                // elementcreator(messagesection, "div", "Form submitted successfully")
            document.getElementById("contact-name").value = ""
            document.getElementById("contact-email").value = ""
            document.getElementById("contact-message").value = ""
        })
        .catch(function(e) {
            const errors = e.errors.join("<br>")
            let errordisplay = document.getElementById("errorDisplaySection")
            errordisplay.innerHTML = errors

        })
}

function ordered() {
    let items = Array.from(document.getElementsByClassName("highlight"));
    let orderedItems = []
    items.forEach(function(item, index) {
        orderedItems.push(Number(item.id))
    });
    return orderedItems

}

export { ordered, errorChecking, clearPage, menuItemSelector, imagecreator, elementcreator2, createNav, buying }