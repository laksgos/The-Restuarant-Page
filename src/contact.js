import { errorChecking, clearPage, elementcreator2, createNav } from './config'
import { contact, images } from './objects'

function introMessage(welcome, images) {
    let div1 = document.querySelector("#content")

    elementcreator2(div1, "img", "", "chai1", "", images.intropic)
    elementcreator2(div1, "img", "", "chai1", "", images.intropic)
    elementcreator2(div1, "img", "", "chai2", "", images.intropic)
    elementcreator2(div1, "img", "", "chai2", "", images.intropic)

    // imagecreator(div1, images.intropic, "image", "chai1")
    // imagecreator(div1, images.intropic, "image", "chai2")
    // imagecreator(div1, images.intropic, "image", "chai2")

    let div2 = elementcreator2(div1, "div", "", "pageContent")
    elementcreator2(div2, "div", welcome.title, "title")
    elementcreator2(div2, "div", welcome.info, "info")

    if (welcome.info2) {
        elementcreator2(div2, "div", welcome.info2, "info")
    }
}

function contactForm() {


    let div1 = document.querySelector("#content")
    let divcontainer = elementcreator2(div1, "div", "", "container")
    let section = elementcreator2(divcontainer, "section", "", "")
    let form = elementcreator2(section, "form", "", "")

    let div2 = elementcreator2(form, "div", "", "mb-3")
    let label = elementcreator2(div2, "label", "Your Name", "form-label")
    label.for = "Name"
    let input = elementcreator2(div2, "input", "", "form-control", "contact-name", "", "text", "First and Last Name")
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
    label = elementcreator2(div2, "label", "Message", "form-label")
    label.for = "contact-message"
    input = elementcreator2(div2, "textarea", "", ["form-control", "contactMessage"], "contact-message", "", "", "Write us something..")
        // input.classList.add("contactMessage")
        // input.placeholder = "Write us something.."
        // input.type = 'text'
        // input.id = "contact-message" //bernard: add to the elementcreator 
    input.style = "height:200px"


    div2 = elementcreator2(form, "div", "", "text-center")
    let button = elementcreator2(div2, "input", "Submit", ["btn", "btn-success", "col-6"], "", "", "button")
    button.value = "Submit"
    button.onclick = errorChecking

    const messagesection = document.getElementById("errordisplay")
    let errordisplay = elementcreator2(messagesection, "div", ``, "", "errorDisplaySection")



    // let btnRemove = document.createElement("input");
    // btnRemove.type = "button";
    // btnRemove.value = "remove";
    // btnRemove.onclick = controllerRemoveBook;
}
//CONTACT PAGE CREATOR 
function contactPage() {

    clearPage()
    createNav()
    introMessage(contact, images)
    contactForm()
}

export { contactPage }