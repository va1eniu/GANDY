const ulrGet = "http://localhost:1000/auth/login";

const postLogin = async (objeto) => {
    try {
        await fetch(ulrGet,{
            method: "POST",
            body: JSON.stringify(objeto),
            headers:{
                "Content-Type":"application/json"
            }
        })
            .then(response => response.json())
            .then(data => {
            if (data.success){
                alert(data.message); 
                localStorage.removeItem('token');
                window.location.href = "../../../home.html";
                localStorage.setItem('token', data.token);
                const datos = localStorage.getItem('token');
                console.log(datos);
            } else {
                alert("usuario no valido"); 
            }
        })
    } catch (error) {
        console.log(error);
    }
}

export {
    postLogin
};


