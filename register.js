
const url = "https://6023a8436bf3e6001766b514.mockapi.io/login-app"


submitRegister = () => {

    let nameForm = document.querySelector("#registerNameForm").value;
    let emailForm = document.querySelector("#registerEmailForm").value;
    let passwordForm = document.querySelector("#registerPasswordForm").value;
    let passwordConfirm = document.querySelector("#registerPasswordConfirm").value;
    let regexEmail = /\S+@\S+\.\S+/;

    if (nameForm == "" || emailForm == "" || passwordForm == "" || passwordConfirm == "") {

        alert ("Data belum lengkap!")
        return;

    } else if (passwordForm !== passwordConfirm ) {

        alert ("Password does not match!")
        document.querySelector("#registerPasswordForm").value = "";
        document.querySelector("#registerPasswordConfirm").value = "";
        return;

    } else if (regexEmail.test(emailForm) == false) {

        alert ("Invalid email format!")
        return;

    } else if (passwordForm.length < 5){

        alert ("Password minimal 5 karakter")
        return;

    }

    let dataObj = {
        name : nameForm,
        email : emailForm,
        password : passwordForm,
    }

    

    let dataJSON = JSON.stringify(dataObj)


    console.log("ini data JSON" , dataJSON);
    
    const option = {
        method : "POST",
        headers : { "Content-Type" : "application/json" },
        body : JSON.stringify(dataObj),
    }
    
    fetch(url , option)

    .then (result => result.json() )
    
    .then (hasil =>  {

       

       alert("Registrasi Berhasil!")
       window.location.href = " login.html "
       alert("Silahkan Login untuk melanjutkan")


    } )

    .catch (err => console.log("Terjadi Kesalahan"))


}