console.log('this is a String');
    let reftodiv = document.getElementById("my text");
    
    let userrole="admin";

    if(userrole==="admin"){ 
        reftodiv.textContent = "Admin Dashboard";
    } else {
        reftodiv.textContent = "Welcome to my website";
    }
