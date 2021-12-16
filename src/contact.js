import { formSubmit, clearPage, elementcreator2, createNav } from './config'
import { contact, images } from './objects'

function introMessage(welcome, images) {
    const div1 = document.querySelector("#content")

    elementcreator2(div1, "img", "", "chai1", "", images.intropic)
    elementcreator2(div1, "img", "", "chai1", "", images.intropic)
    elementcreator2(div1, "img", "", "chai2", "", images.intropic)
    elementcreator2(div1, "img", "", "chai2", "", images.intropic)

    const div2 = elementcreator2(div1, "div", "", "pageContent")
    elementcreator2(div2, "div", welcome.title, "title")
    elementcreator2(div2, "div", welcome.info, "info")

    if (welcome.info2) {
        elementcreator2(div2, "div", welcome.info2, "info")
    }
}

function contactForm() {

    const div1 = document.querySelector("#content")
    const divcontainer = elementcreator2(div1, "div", "", "container")
    const section = elementcreator2(divcontainer, "section", "", "")
    const form = elementcreator2(section, "form", "", "")

    let div2 = elementcreator2(form, "div", "", "mb-3")
    let label = elementcreator2(div2, "label", "Your Name", "form-label")
    label.for = "Name"
    let input = elementcreator2(div2, "input", "", "form-control", "contact-name", "", "text", "First and Last Name")

    div2 = elementcreator2(form, "div", "", "mb-3")
    label = elementcreator2(div2, "label", "Email", "form-label")
    label.for = "email-address"
    input = elementcreator2(div2, "input", "", "form-control", "contact-email", "", "text", "Email Address")


    div2 = elementcreator2(form, "div", "", "mb-3", "errordisplay")
    label = elementcreator2(div2, "label", "Message", "form-label")
    label.for = "contact-message"
    input = elementcreator2(div2, "textarea", "", ["form-control", "contactMessage"], "contact-message", "", "", "Write us something..")

    input.style = "height:200px"

    div2 = elementcreator2(form, "div", "", "text-center")
    const button = elementcreator2(div2, "input", "Submit", ["btn", "btn-success", "col-6"], "", "", "button")
    button.value = "Submit"
    button.onclick = formSubmit

}
// CONTACT PAGE CREATOR 
function contactPage() {

    clearPage()
    createNav()
    introMessage(contact, images)
    contactForm()
}

export { contactPage }