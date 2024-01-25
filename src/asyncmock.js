const libros = [
    { id: "1", nombre: "Harry Potter 1: La piedra filosofal", autor: "J.K Rowling", precio: 34000, img: "./images/hp1.jpeg", idCat: 2},
    { id: "2", nombre: "Harry Potter 2: La cámara de los secretos", autor: "J.K Rowling", precio: 34000, img: "./images/hp2.jpg", idCat: 2},
    { id: "3", nombre: "Harry Potter 3: El prisionero de Azkaban", autor: "J.K Rowling", precio: 34000, img: "./images/hp3.jpg", idCat: 2},
    { id: "4", nombre: "Harry Potter 4: El caliz de fuego", autor: "J.K Rowling", precio: 34000, img: "./images/hp4.jpg", idCat: 2},
    { id: "5", nombre: "Harry Potter 5: La orden del fenix", autor: "J.K Rowling", precio: 34000, img: "./images/hp5.jpg", idCat: 2},
    { id: "6", nombre: "Harry Potter 6: El misterio del príncipe", autor: "J.K Rowling", precio: 36000, img: "./images/hp6.jpg", idCat: 2},
    { id: "7", nombre: "Harry Potter 7: Las reliquias de la muerte", autor: "J.K Rowling", precio: 36000, img: "./images/hp7.jpg", idCat: 2},
    { id: "8", nombre: "Tokio Blues", autor: "Haruki Murakami", precio: 19000, img: "./images/tb.jpg", idCat: 2},
    { id: "9", nombre: "Heartstopper", autor: "Alice Oseman", precio: 11000, img: "./images/nv.jpg", idCat: 2},
    { id: "10", nombre: "Agenda FREE", autor: "Clarisa", precio: 23000, img: "./images/agenda1.jpeg", idCat: 3},
    { id: "11", nombre: "Agenda SHANTI", autor: "Clarisa", precio: 23000, img: "./images/agenda2.jpg", idCat: 3},
    { id: "12", nombre: "Agenda FLOWERS", autor: "Clarisa", precio: 23000, img: "./images/agenda3.jpg", idCat: 3},
    { id: "13", nombre: "Agenda MINDFULL", autor: "Clarisa", precio: 23000, img: "./images/agenda4.jpg", idCat: 3},
    { id: "14", nombre: "Agenda KEMPES", autor: "Clarisa", precio: 23000, img: "./images/agenda5.jpg", idCat: 3},
    { id: "15", nombre: "Agenda BRUJIS", autor: "Clarisa", precio: 23000, img: "./images/agenda6.jpg", idCat: 3},
]

export const getLibros = () => {
    return new Promise( (resolve) => {
        setTimeout( ()=> {
            resolve(libros);
        }, 2000)
    })
}

export const getUnLibro = (id) => {
    return new Promise(resolve => {
        setTimeout( () => {
            const libro = libros.find(prod => prod.id === id);
            resolve(libro);
        }, 2000)
    })
}

export const getLibrosPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout( () => {
            const librosCategoria = libros.filter(prod => prod.idCat === idCategoria)
            resolve(librosCategoria);
        }, 2000)
    })
}