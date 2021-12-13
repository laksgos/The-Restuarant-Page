import { clearPage, elementcreator2, createNav } from './config'
import { welcome, hours, mapLocation, images, map } from './objects'


function introMessage(welcome, images) {
    let div1 = document.querySelector("#content")

    elementcreator2(div1, "img", "", "chai1", "", images.intropic)
    elementcreator2(div1, "img", "", "chai1", "", images.intropic)
    elementcreator2(div1, "img", "", "chai2", "", images.intropic)
    elementcreator2(div1, "img", "", "chai2", "", images.intropic)

    // imagecreator(div1, images.intropic, "image", "chai1")
    // imagecreator(div1, images.intropic, "image", "chai2")
    // imagecreator(div1, images.intropic, "image", "chai2")

    let div2 = elementcreator2(div1, "div", "", "pageContent", "pageContent")
    elementcreator2(div2, "div", welcome.title, "title")
    elementcreator2(div2, "div", welcome.info, "info")

    if (welcome.info2) {
        elementcreator2(div2, "div", welcome.info2, "info")
    }
}

function schedule(hours) {

    let div2 = document.querySelector("#pageContent")

    let div3 = elementcreator2(div2, "div", "", "hoursFrame")
    elementcreator2(div3, "div", "Hours", "header")

    Object.keys(hours).forEach(day => {
        elementcreator2(div3, "div", hours[day], "subtext")
    });

}

function location(mapLocation) {

    let div2 = document.querySelector(".pageContent")
    elementcreator2(div2, "img", "", "breakimg", "", images.breakimg)
    let div3 = elementcreator2(div2, "div", "", "locationFrame")
    elementcreator2(div3, "div", mapLocation.header, "header")
    elementcreator2(div3, "div", mapLocation.location, "subtext")
    let map1 = elementcreator2(div3, "iframe", "", "embeddedmap")
    map1.width = "400"
    map1.height = "400"
    map1.style = "border:1px"
    map1.allowfullscreen = ""
    map1.loading = "lazy"
    map1.src = map.googleMap;


}

//HOME PAGE CREATOR 
function homePage() {
    clearPage()
    createNav()
    introMessage(welcome, images)
    schedule(hours)
    location(mapLocation)
}


export { homePage }