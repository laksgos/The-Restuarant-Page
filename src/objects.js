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

// menu object

const menuHeaderinfo = {
    title: { el: "div", text: "Menu", class: "title" },
    info1: { el: "div", text: "Fresh Brewed, Locally Sourced", class: "info" },
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

export { welcome, contact, hours, mapLocation, images, map, menuHeaderinfo, BeverageItems, Pastryitems }