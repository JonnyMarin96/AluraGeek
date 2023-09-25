/*
function displayBtnAdd(flagAdmin){
    if(flagAdmin = false){
        const btnAdd = document.getElementById('btnAdd');
        btnAdd.style.display = "none";
    }else{
        const btnAdd = document.getElementById('btnAdd');
        btnAdd.style.display = "flex";
    }


        flag
    console.log("Si entra")
    

}*/
const Admin = localStorage.getItem("Admin")

const displayBtnAdd = () => {
    const btnAdd = document.getElementById('btnAdd')
    if(Admin == "true"){
        btnAdd.style.display = "flex";
    }else{
        btnAdd.style.display = "none";
    }
}

const displayLogIn = () => {
    const btn = document.getElementById('btnLogin')
    if(Admin == "true"){
        btn.style.display = "none";
        console.log("no")
    }
}

const displayLogOut = () => {
    const btn = document.getElementById('btnLogout')
    if(Admin == "true"){

    }else{
        btn.style.display = "none";
        console.log("no")
    }
}

displayBtnAdd()
displayLogIn()
displayLogOut()

