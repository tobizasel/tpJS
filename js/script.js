const calculadoraEdad = (ano) => {
    const date = new Date(ano)
    const hoy = new Date();
    const edad = hoy.getFullYear() - date.getFullYear();

    if (hoy.getMonth > date.getMonth) {
        edad--;
    }

    parrafo.innerText = `Tenes ${edad} años`;
}

const tiroFruta = (fruta) => {    
    if(frutas.includes(fruta)){
        parrafo.innerText = `Hay ${fruta}`
    } else parrafo.innerText = `Tiro fruta`
}

const mostrarCiudad = () => {
    console.log("ahre");
    let string = "";
    for (const key in ciudad) {
        string+= `${key}: ${ciudad[key]}\n`
    }

    parrafo.innerText = string;
}

const duplicarNumeros = (numeros) => {
    const array = Array.from(String(numeros));
    const duplicado =  array.map(n => n*2);
    let texto = "";
    duplicado.forEach(n => {
        texto+= `${n} `
    });
    parrafo.innerText = texto;
}

const piramide = () => {
    let piramide = "";
    for (let index = 0; index < 6; index++) {
        for (let j = 0; j < index; j++) {
            piramide+="*"       
        }
        piramide+="\n"
    }
    parrafo.innerText=piramide
}
