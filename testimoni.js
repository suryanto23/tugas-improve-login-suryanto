

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
    //alert (`Halo ${localObj.name}, Selamat datang kembali!`)

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


    } )

}

showCart()





