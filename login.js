

let loginButton = document.querySelector("#loginButton")



loginButton.addEventListener ("click" , function login  ()  {  


    let emailInput = document.querySelector("#exampleInputEmail1").value
    let passwordInput = document.querySelector("#exampleInputPassword1").value

    

    fetch ("https://6023a8436bf3e6001766b514.mockapi.io/login-app")


    .then ((response) =>  response.json()  )

    .then (data => {

        console.log("ini clg data " , data);

        let user = data.find ( (i) =>  i.email === emailInput && i.password === passwordInput )
        let userJSON = JSON.stringify(user)

        console.log("ini clg dari user (find)" , user);
        console.log("ini clg dari user (JSON)" , userJSON);
        
            


        if (user) {


            alert ("Login Berhasil")
            localStorage.setItem("user", userJSON)
            window.location.href = "index.html"
            
        } else {

            alert ("Login Gagal")
        }

    })
    



  } )


 

    
    






