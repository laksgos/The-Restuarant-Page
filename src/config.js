import { contactPage } from "./contact"
import { homePage } from "./home"
import { menuPage } from "./menu"

// ELEMENT CREATORS 


function imagecreator(attacher, source, cls1 = "", cls2 = "") {
    const image = document.createElement("img")
    image.src = `${source}`
    if (cls1) { image.classList.add(`${cls1}`) }
    if (cls2) { image.classList.add(`${cls2}`) }
    if (attacher) { attacher.appendChild(image) }


}

function elementcreator2(attacher, elem, insidetext = "", classes, id = "", source = "", typ = "", placeholder = "") {

    const elementcreated = document.createElement(`${elem}`)
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

    const nav1 = elementcreator2("", "nav", "", "navbar")
    const ul1 = elementcreator2(nav1, "ul", "", "nav-links")
    const div2 = elementcreator2(ul1, "div", "", "navMenu")

    const li1 = elementcreator2(div2, "li", "", "", "homeli")

    elementcreator2(li1, "a", "Home", "home", "home")

    // a1.addEventListner("click", homePage())


    const li2 = elementcreator2(div2, "li", "", "", "menuli")
    elementcreator2(li2, "a", "Menu", "menu", "menu")
        // a2.addEventListner("click", menuPage())
    const li3 = elementcreator(div2, "li", "", "", "contactli")
    li3.id = "contactli"
    elementcreator2(li3, "a", "Contact", "contact", "contact")
        // a3.addEventListner("click", contactPage())

    const attacherdiv = document.querySelector("#content")

    attacherdiv.appendChild(nav1);

    const homebtn = document.getElementById("homeli")
    homebtn.addEventListener("click", () => { homePage() })
    const menubtn = document.getElementById("menuli")
    menubtn.addEventListener("click", () => { menuPage() })
    const contactbtn = document.getElementById("contactli")
    contactbtn.addEventListener("click", () => { contactPage() })

}

// HOME PAGE FUNCTION


const buying = []


function menuItemSelector(obj) {

    buying.push(obj.id)
}

function clearPage() {
    const div1 = document.querySelector("#content")
    div1.innerHTML = ""

}


function ordered() {
    const items = Array.from(document.getElementsByClassName("highlight"));
    const orderedItems = []
    items.forEach(function(item, index) {
        orderedItems.push(Number(item.id))
    });
    return orderedItems

}

export { ordered, clearPage, menuItemSelector, imagecreator, elementcreator2, createNav, buying }