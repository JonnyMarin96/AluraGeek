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

const displayBtnAdd = (Admin) => {
    Admin = localStorage.getItem("Admin")
    const btnAdd = document.getElementById('btnAdd')
    console.log("Si entra")
    
    if(Admin == "true"){
        btnAdd.style.display = "flex";
        console.log("si")
    }else{
        btnAdd.style.display = "none";
        console.log("no")
    }
}

displayBtnAdd()


