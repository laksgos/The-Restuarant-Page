import { ordered, clearPage, menuItemSelector, elementcreator2, createNav, buying } from './config'
import { menuHeaderinfo, BeverageItems, Pastryitems } from './objects'

function menuHeader(menuHeaderinfo) {

    let title = menuHeaderinfo.title
    let info1 = menuHeaderinfo.info1

    let div1 = document.querySelector("#content")
    let div2 = elementcreator2(div1, "div", "", "pageContent")


    elementcreator2(div2, title.el, title.text, title.class)
    elementcreator2(div2, menuHeaderinfo.info1.el, menuHeaderinfo.info1.text, menuHeaderinfo.info1.class)
    elementcreator2(div2, menuHeaderinfo.info2.el, menuHeaderinfo.info2.text, menuHeaderinfo.info2.class)

    elementcreator2(div2, menuHeaderinfo.breakimg.el, "", menuHeaderinfo.breakimg.class, "", menuHeaderinfo.breakimg.source)
    console.log(div2)

    // Object.keys(menuHeaderinfo).forEach(key => {
    //     elementcreator(div2, menuHeaderinfo[key].el, menuHeaderinfo[key] text, menuHeaderinfo[key].class, menuHeaderinfo[key].class2, menuHeaderinfo[key].source)
    // });


}

function menu(menuItems) {
    let div1 = document.querySelector("#content")
    let divContainer = elementcreator2(div1, "div", "", "container")
    let divMenu = elementcreator2(divContainer, "div", "", "menu")
    elementcreator2(divMenu, "h2", "Beverages", "menu-group-heading")
    let divMenuGroup = elementcreator2(divMenu, "div", "", "menu-group")

    Object.keys(BeverageItems).forEach(key => {

        let divMenuItem = elementcreator2(divMenuGroup, "div", "", "menu-item", BeverageItems[key].id)
        const image = elementcreator2(divMenuItem, "img", "", "menu-item-image", "", BeverageItems[key].imgSource)
        image.alt = `${BeverageItems[key].title}`

        let divMenuItemText = elementcreator2(divMenuItem, "div", "", "menu-item-text")
        let divMenuItemHeading = elementcreator2(divMenuItemText, "h3", "", "menu-item-heading")
        elementcreator2(divMenuItemHeading, "span", BeverageItems[key].title, "menu-item-name")
        elementcreator2(divMenuItemHeading, "span", BeverageItems[key].price, "menu-item-price")

        elementcreator2(divMenuItemText, "p", BeverageItems[key].description, "menu-item-description")

        divMenuItem.addEventListener("click", (e) => {

            menuItemSelector(BeverageItems[key])

            let divselector = document.getElementById(`${BeverageItems[key].id}`)



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
        let divMenuItem = elementcreator2(divMenuGroup, "div", "", "menu-item", Pastryitems[key].id)

        let image = elementcreator2(divMenuItem, "img", "", "menu-item-image", "", Pastryitems[key].imgSource)
        image.alt = `${Pastryitems[key].title}`

        let divMenuItemText = elementcreator2(divMenuItem, "div", "", "menu-item-text")
        let divMenuItemHeading = elementcreator2(divMenuItemText, "h3", "", "menu-item-heading")
        elementcreator2(divMenuItemHeading, "span", Pastryitems[key].title, "menu-item-name")
        elementcreator2(divMenuItemHeading, "span", Pastryitems[key].price, "menu-item-price")

        elementcreator2(divMenuItemText, "p", Pastryitems[key].description, "menu-item-description")

        divMenuItem.addEventListener("click", (e) => {

            menuItemSelector(Pastryitems[key])


            let divselector = document.getElementById(`${Pastryitems[key].id}`)

            // if (divselector.classList.contains("highlight")) {
            //     divselector.classList.toggle("highlight")
            // }
            divselector.classList.toggle("highlight")


        })

    });
    let buttonDiv = elementcreator2(div1, "div", "", "buttonDiv")
    let submissionButton = elementcreator2(buttonDiv, "button", "Order", ["menu-item-submission", "col-6", "btn-success", "btn"], "", "", "submit")

    submissionButton.addEventListener("click", () => {
        let totalprice = 0;
        let orderedItems = ordered()
        let orderedItemsDetails = []
        console.log(orderedItems)

        Object.keys(BeverageItems).forEach(key => {
            if (orderedItems.includes(BeverageItems[key].id)) {

                orderedItemsDetails.push([BeverageItems[key].title, Number(BeverageItems[key].price.slice(1))])
                totalprice += Number(BeverageItems[key].price.slice(1))
            }

        });
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

//MENU PAGE CREATOR 
function menuPage() {
    clearPage()
    createNav()
    menuHeader(menuHeaderinfo)
    menu(BeverageItems)
}

export { menuPage }