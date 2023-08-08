const ulrGet = "http://localhost:1000/auth/login";

const postLogin = async (objeto) => {
    try {
        console.log("Datos de inicio de sesión enviados:", objeto); // Agregado para depuración
        const response = await fetch(ulrGet, {
            method: "POST",
            body: JSON.stringify(objeto),
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await response.json();

        if (data.success) {
            alert(data.message);
            localStorage.removeItem('token');
            window.location.href = "../../../../../FRONEND/pages/home.html";
            localStorage.setItem('token', data.token);
            const datos = localStorage.getItem('token');
            console.log(datos);
        } else {
            alert("Usuario no válido");
        }
    } catch (error) {
        console.log("Error en la solicitud:", error);
    }
};

export {
    postLogin
};