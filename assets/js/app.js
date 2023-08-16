// localStorage.setItem("nombre", "Camilo");
// console.log(localStorage.getItem("nombre", "apellido"))
//--------------------------------
const integrantes = [{
        nombre: "Goku",
        apellido: "Son",
        edad: 30,
        img: "/assets/img/74373731b27c15d354401d02e03971d3.jpg"
    },
    {
        nombre: "Vegeta",
        apellido: "",
        edad: 40,
        img: "/assets/img/vegeta.jpg"
    }
];


let boton = document.querySelector('#boton');
boton.addEventListener('mouseover', () => {
    // Guardar en localStorage  
    localStorage.setItem("Lista", JSON.stringify(integrantes));

    // Obtener y analizar desde localStorage
    const local = JSON.parse(localStorage.getItem("Lista"));


    local.forEach(z => {
        let elementos = document.querySelector('#objetos');
        let div = document.createElement('div');

        div.classList.add('div-hijo')

        let img = document.createElement('img');
        img.classList.add('imagen-icono')
        img.src = z.img;

        div.innerHTML = z.nombre + " " + z.apellido + " " + z.edad + " ";

        div.appendChild(img);

        elementos.appendChild(div);

        console.log(div)
    });
})