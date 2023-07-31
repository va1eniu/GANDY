const urlGet = "http://localhost:1000/micro";

export async function getMicro() {
  try {
    const response = await fetch(urlGet);
    if (!response.ok) {
      throw new Error('Error al obtener los datos de la API');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return []; 
  }
}

const urlPro = "http://localhost:1000/productos";

export async function getProductos() {
  try {
    const response = await fetch(urlPro);
    if (!response.ok) {
      throw new Error('Error al obtener los datos de la API');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return []; 
  }
}

