
const toggleButton = document.querySelector("#logo"); 
const dropdown = document.querySelector(".dropdown");

toggleButton.addEventListener("click", () => {
    dropdown.classList.toggle("open"); 
});

// Form validation

const form = document.getElementById("myForm");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value
const mail = document.getElementById("mail").value
const phone = document.getElementById("phone").value
const text = document.getElementById("text").value

    if (name === "" || mail === "" || phone === "" || text === "") {
        alert("please fill the form")
        return;
    }
    let formData={
        name: name,
        mail: mail,
        phone: phone,
        text: text
    }
    localStorage.setItem('formData', JSON.stringify(formData))
    form.reset()
});

let properties1 = [
    {
        image:"https://plus.unsplash.com/premium_photo-1684175656320-5c3f701c082c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXBhcnRtZW50fGVufDB8fDB8fHww",
        type :"For Rent",
        typer :"Residential",
        housetype:"Morden Apartment",
        price :"$ 1500/mo",
        length:"3 bd /2 ba / 1100 sq Ft"
    },
    {
        image:"https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXBhcnRtZW50fGVufDB8fDB8fHww",
        type :"For Sale",
        typer :"Residential",
        housetype:"Family Home",
        price :"$ 175,000",
        length:"4 bd /3 ba / 2700 sq Ft"
    },
    {
        image:"https://images.unsplash.com/photo-1502672023488-70e25813eb80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFwYXJ0bWVudHxlbnwwfHwwfHx8MA%3D%3D",
        type :"For Rent",
        typer :"Comercial",
        housetype:"Morden Apartment",
        price :"$ 200/mo",
        length:"3 bd /3 ba / 1400 sq Ft"
    },
    {
        image:"https://images.unsplash.com/photo-1501876725168-00c445821c9e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFwYXJ0bWVudHxlbnwwfHwwfHx8MA%3D%3D",
        type :"For Sale",
        typer :"Comercial",
        housetype:"Elegant Studio Flat",
        price :"$ 138,000",
        length:"3 bd /2 ba / 1100 sq Ft"
    },
]
properties1.forEach((e)=>{
    let div = document.createElement("div");
    let image = document.createElement("img");
    image.src = e.image;
    let type = document.createElement("h4");
    type.innerHTML = e.type;
    let typer = document.createElement("p");
    typer.innerHTML = e.typer;
    let housetype = document.createElement("h2");
    housetype.innerHTML = e.housetype;
    let price = document.createElement("h3");
    price.innerHTML = e.price;
    let length = document.createElement("h5");
    length.innerHTML = e.length;
    div.appendChild(image);
    div.appendChild(type);
    div.appendChild(typer);
    div.appendChild(housetype);
    div.appendChild(price);
    div.appendChild(length);
    document.getElementById("property1").appendChild(div);
})







let properties2 = [
    {
        img:"https://images.unsplash.com/photo-1675279200694-8529c73b1fd0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YXBhcnRtZW50JTIwaW50ZXJpb3J8ZW58MHx8MHx8fDA%3D",
        type :"For Rent",
        typer :"commercial",
        housetype:"Awesome Office Space",
        price :"$ 5235/mo",
        location:"123 Fifth Avenue, NY 10160",
        length:"Offices: 20 / Baths: 6 / Sq Ft: 10450 "

    },
    {
        img:"https://plus.unsplash.com/premium_photo-1676823553207-758c7a66e9bb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXBhcnRtZW50JTIwaW50ZXJpb3J8ZW58MHx8MHx8fDA%3D",
        type :"For Rent",
        typer :"commercial",
        housetype:"Modern Apartment",
        price :"$ 1100/mo",
        location:"123 Fifth Avenue, NY 10160",
        length:"Bedrooms: 3 / Baths: 2 / Sq Ft: 1450  "

    },
    {
        img:"https://images.unsplash.com/photo-1689043528099-2ba014dd7c64?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGFwYXJ0bWVudCUyMGludGVyaW9yfGVufDB8fDB8fHww",
        type :"For Rent",
        typer :"Residential",
        housetype:"City Center House",
        price :"$ 1600/mo",
        location:"123 Fifth Avenue, NY 10160",
        length:"Bedrooms: 2 / Baths: 1 / Sq Ft: 450 "

    },
    {
        img:"https://images.unsplash.com/photo-1665249934445-1de680641f50?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGFwYXJ0bWVudCUyMGludGVyaW9yfGVufDB8fDB8fHww",
        type :"For Rent",
        typer :"commercial",
        housetype:"Glamorous Flat",
        price :"$ 1235/mo",
        location:"123 Fifth Avenue, NY 10160",
        length:"Bedrooms: 3 / Baths: 2 / Sq Ft: 1450 "

    },
    {
        img:"https://images.unsplash.com/photo-1689913793549-564c93fbecef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGFwYXJ0bWVudCUyMGludGVyaW9yfGVufDB8fDB8fHww",
        type :"For Sale",
        typer :"Residential",
        housetype:"Gorgeous Studio Flat",
        price :"$ 89,500",
        location:"123 Fifth Avenue, NY 10160",
        length:"Bedrooms: 1 / Baths: 1 / Sq Ft: 150  "

    },
    {
        img:"https://images.unsplash.com/photo-1647341159891-302156d1bbdf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGFwYXJ0bWVudCUyMGludGVyaW9yfGVufDB8fDB8fHww",
        type :"For Rent",
        typer :"commercial",
        housetype:"Luxury Family Home",
        price :"$ 1300/mo",
        location:"123 Fifth Avenue, NY 10160",
        length:"Bedrooms: 2 / Baths: 2 / Sq Ft: 725 "

    },
]

properties2.forEach((e)=>{
    let div = document.createElement("div");
    let image = document.createElement("img");
    image.src = e.img;
    let type = document.createElement("h4");
    type.innerHTML = e.type;
    let typer = document.createElement("p");
    typer.innerHTML = e.typer;
    let housetype = document.createElement("h2");
    housetype.innerHTML = e.housetype;
    let price = document.createElement("h3");
    price.innerHTML = e.price;
    let location = document.createElement("h5");
    location.innerHTML = e.location;
    let length = document.createElement("h5");
    length.innerHTML = e.length;
    let btn = document.createElement("button")
    btn.innerHTML = "View Details";
    div.appendChild(image);
    div.appendChild(type);
    div.appendChild(typer);
    div.appendChild(housetype);
    div.appendChild(price);
    div.appendChild(location);
    div.appendChild(length);
    div.appendChild(btn);
    document.getElementById("property2").appendChild(div);

})