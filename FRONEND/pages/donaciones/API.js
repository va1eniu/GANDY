const urlGet = "http://localhost:1000/donaciones";
const urlPost = "http://localhost:1000/donaciones";
const urlDelete = "http://localhost:1000/donaciones";
const urlGetOne = "http://localhost:1000/donaciones"
const urlUpd = "http://localhost:1000/donaciones";

export const getCiclistas = async () => {
    try {
        const extract = await fetch(urlGet);
        const datos = await extract.json();
        console.log(datos);
        return datos;
    } catch (error) {
        console.log(error);
    }
}

export const postCiclistas = async (objeto) => {
    try {
        await fetch(urlPost, {
            method: "POST",
            body: JSON.stringify(objeto),
            headers: {
                "Content-Type":"application/json"
            }
        })
        window.location = "donaciones.html"
    } catch (error) {
        console.log(error);
    }
}


export async function deleteCiclistas(id_Ciclistas) {
    try {
        await fetch(`${urlDelete}/${id_Ciclistas}`,
        {
            method: 'DELETE'
        });
        window.location = "donaciones.html";
    } catch (error) {
        console.log();
    }
}

export const getCiclistasOne = async (id_Ciclistas) => {
    try {
        const extract = await fetch(`${urlGetOne}/${id_Ciclistas}`);
        const datos = await extract.json();
        return datos;
    } catch (error) {
        console.log(error);
    }
}


export async function updCiclistasOne(objeto, id_Ciclistas) {
    try {
      await fetch(`${urlUpd}/${id_Ciclistas}`, {
        method: "PATCH",
        body: JSON.stringify(objeto),
        headers: {
          "Content-Type": "application/json",
        },
      });
      window.location = "donaciones.html";
    } catch (error) {
      console.log(error);
    }
  }



  