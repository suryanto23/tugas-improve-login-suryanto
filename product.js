// let makanan =[
//     {
//         nama: "Ayam Taliwang",
//         desc: "Lombok style grilled chicken using native chicken with dry chili sauce",
//         gambarMakanan: "images/ayam taliwang.jpg",
//         linkWiki:"https://en.wikipedia.org/wiki/Ayam_Taliwang"
//     },
//     {
//         nama: "Gurame Terbang",
//         desc: "An exquisite food from gourami fish made by making its fin like wings that ready to fly",
//         gambarMakanan: "images/gurame terbang.jpg",
//         linkWiki:"https://en.wikipedia.org/wiki/Ikan_goreng"
//     },
//     {
//         nama: "Sate Klathak",
//         desc: "Unlike other satay that use bamboo skewers, this satay use iron skewers as heat conductor",
//         gambarMakanan: "images/sate klathak.jpg",
//         linkWiki:"https://en.wikipedia.org/wiki/Sate_klatak"
//     },
//     {
//         nama: "Capcay",
//         desc: "Cuisine from chinese and indonesian culture. Made from mostly vegetables",
//         gambarMakanan: "images/capcay.jpg",
//         linkWiki:"https://en.wikipedia.org/wiki/Cap_cai"
//     },
//     {
//         nama: "Mie Aceh",
//         desc: "Authentic noodle made from western most part of indonesia. Its super spicy",
//         gambarMakanan: "images/mie aceh.jpg",
//         linkWiki:"https://en.wikipedia.org/wiki/Mie_aceh"
//     },
//     {
//         nama: "Nasi Goreng Mawut",
//         desc: "A mix from fried rice and fried noodle taking advantages of their respectively unique taste",
//         gambarMakanan: "images/nasi goreng mawut.jpg",
//         linkWiki:"https://en.wikipedia.org/wiki/Nasi_goreng"
//     },
//     {
//         nama: "Pempek",
//         desc: "Made from finely ground fish meat with starch flour. A Palembang original taste",
//         gambarMakanan: "images/pempek.jpg",
//         linkWiki:"https://en.wikipedia.org/wiki/Pempek"
//     },
//     {
//         nama: "Asinan Bogor",
//         desc: "Cuisine made from preserving fruits in salty solution overnight. Rain city special",
//         gambarMakanan: "images/asinan.jpg",
//         linkWiki:"https://en.wikipedia.org/wiki/Asinan"
//     },
//     {
//         nama: "Soto Betawi",
//         desc: "Traditional indonesian soup mainly composed of broth,meat and vegetables",
//         gambarMakanan: "images/soto betawi.jpg",
//         linkWiki:"https://en.wikipedia.org/wiki/Soto_(food)"
//     },
// ]


const url = "https://6023a8436bf3e6001766b514.mockapi.io/product";

let loginButtonHome = document.querySelector("#loginButtonHome");
let registerButtonHome = document.querySelector("#registerButtonHome");
let logoutGreetings = document.querySelector("#logoutGreetings");
let logoutButton = document.querySelector("#logoutButton");
let cartItem = document.querySelector("#cartItem")

let local = localStorage.getItem("user")
let localObj = JSON.parse(local)




// On-click function
loginForm = () => {
    window.location.href = "login.html"
};

registerForm = () => {
    window.location.href = "register.html"
};

logout = () => {
    localStorage.clear()
    alert ("Anda berhasil Logout")
    window.location.href = "index.html"
};

checkout = () => {
    window.location.href = "cart.html"
}


if (local) {

    loginButtonHome.setAttribute("class" , "hide")
    registerButtonHome.setAttribute("class" , "hide")
    logoutGreetings.setAttribute("class" , "btn btn-dark unhide")
    cartItem.setAttribute ("class", "btn btn-danger px-2  unhide")
    logoutButton.setAttribute("class" , "btn border-danger text-danger unhide")

    logoutGreetings.innerHTML = `Halo ${localObj.name}`

}

showCart = () => {

    fetch (`https://6023a8436bf3e6001766b514.mockapi.io/login-app/${localObj.id}/barang`)

    .then (result => result.json())
    .then (data => {

        cartItem.innerHTML = "🛒" +data.length

    })

}

showCart()



const getData = async () => {
    
    let response = await fetch(url);
    let result = await response.json()
    console.log(result)
    display(result);
}



let display = (result)=>{
    let display = document.querySelector("#display");
    result.forEach(item =>{

        let createDiv = document.createElement("div");
        createDiv.innerHTML = `
                            <div class="col">
                                   <div class="card shadow-sm border-dark">
                                    
                                    <img style="width: 100%; height: 300px;" src="" class="card-img-top" alt="">
                                
                                    <div class="card-body">
                                      <h5 class="card-title fs-3 fw-normal">${item.namaProduk}</h5>
                                      <p class="card-text">${item.keterangan}</p>
                                      <a href="${item.desc}" class="btn btn-dark" target= "_blank">Learn more</a>
                                      <button type="button" onclick = "addToCart(${item.id} , '${item.namaProduk}' ,  ${item.harga} )" class="btn btn-dark"  >Buy for: Rp.${item.harga}</button>
                                      <div class="d-flex justify-content-between align-items-center"> 
                                        <small class="text-muted">© NU-SANTARA</small>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                            `;
        display.appendChild(createDiv);

    });
}

getData();


addToCart =  (id, barang ,harga) => {

    if (local == undefined){
        alert ("Please Login or Register to add this item")
        return;
    }


    let dataBarangObj = {
        produk : barang,
        harga : harga,
    }

    let dataBarangJSON = JSON.stringify(dataBarangObj)


    console.log(id)
    console.log(barang);
    console.log(harga);

    console.log(dataBarangJSON);

    const option = {
        method : "POST",
        headers : { "Content-Type" : "application/json" },
        body : dataBarangJSON
    }


    fetch ( `https://6023a8436bf3e6001766b514.mockapi.io/login-app/${localObj.id}/barang` , option)

    .then (result => result.json())
    .then (data => console.log("ini data json" +data))
    .catch (err => console.log("Terjadi kesalahan, ga tau kenapa"))

}
