const productos = [
    { id: "1", nombre: "Harry Potter 1: La piedra filosofal", autor: "J.K Rowling", precio: 34000, img: "../images/hp1.jpeg", idCat: "1",stock: 100},
    { id: "2", nombre: "Harry Potter 2: La cámara de los secretos", autor: "J.K Rowling", precio: 34000, img: "../images/hp2.jpg", idCat: "1",stock: 100 },
    { id: "3", nombre: "Harry Potter 3: El prisionero de Azkaban", autor: "J.K Rowling", precio: 34000, img: "../images/hp3.jpg", idCat: "1",stock: 100 },
    { id: "4", nombre: "Harry Potter 4: El caliz de fuego", autor: "J.K Rowling", precio: 34000, img: "../images/hp4.jpg", idCat: "1",stock: 100 },
    { id: "5", nombre: "Harry Potter 5: La orden del fenix", autor: "J.K Rowling", precio: 34000, img: "../images/hp5.jpg", idCat: "1",stock: 100 },
    { id: "6", nombre: "Harry Potter 6: El misterio del príncipe", autor: "J.K Rowling", precio: 36000, img: "../images/hp6.jpg", idCat: "1",stock: 100 },
    { id: "7", nombre: "Harry Potter 7: Las reliquias de la muerte", autor: "J.K Rowling", precio: 36000, img: "../images/hp7.jpg", idCat: "1",stock: 100 },
    { id: "8", nombre: "Tokio Blues", autor: "Haruki Murakami", precio: 19000, img: "../images/tb.jpg", idCat: "1", stock: 100 },
    { id: "9", nombre: "Ugly Love", autor: "Colleen Hoover", precio: 23550, img: "../images/ugly.jpg", idCat: "2" , stock: 100},
    { id: "10", nombre: "It Ends With Us", autor: "Colleen Hoover", precio: 23550, img: "../images/colleen.jpg", idCat: "2" , stock: 100},
    { id: "11", nombre: "It Starts With Us", autor: "Colleen Hoover", precio: 23550, img: "../images/colleen2.jpg", idCat: "2" , stock: 100},
    { id: "12", nombre: "The Song of Achilles", autor: "Madeline Miller", precio: 16000, img: "../images/song.jpg", idCat: "2" , stock: 100},
    { id: "13", nombre: "A Little Life", autor: "Hanya Yanagihara", precio: 24000, img: "../images/life.jpg", idCat: "2" , stock: 100},
    { id: "14", nombre: "Agenda FREE", autor: "Clarisa", precio: 23000, img: "../images/agenda1.jpeg", idCat: "3", stock: 100 },
    { id: "15", nombre: "Agenda SHANTI", autor: "Clarisa", precio: 23000, img: "../images/agenda2.jpg", idCat: "3" , stock: 100},
    { id: "16", nombre: "Agenda FLOWERS", autor: "Clarisa", precio: 23000, img: "../images/agenda3.jpg", idCat: "3", stock: 100 },
    { id: "17", nombre: "Agenda MINDFULL", autor: "Clarisa", precio: 23000, img: "../images/agenda4.jpg", idCat: "3", stock: 100 },
    { id: "18", nombre: "Agenda KEMPES", autor: "Clarisa", precio: 23000, img: "../images/agenda5.jpg", idCat: "3", stock: 100 },
    { id: "19", nombre: "Agenda BRUJIS", autor: "Clarisa", precio: 23000, img: "../images/agenda6.jpg", idCat: "3", stock: 100 },
    { id: "20", nombre: "Pack - Colleen Hoover", precio: 45000, img: "../images/pack.jpg", idCat: "4" , stock: 100},
    { id: "21", nombre: "Pack - De Sangre y Cenizas", precio: 106000, img: "../images/pack2.png", idCat: "4", stock: 100 },
    { id: "22", nombre: "Pack - Anhelos", precio: 85000, img: "../images/pack3.jpg", idCat: "4" , stock: 100},
    { id: "23", nombre: "Pack - Harry Potter Grifyndor", precio: 110000, img: "../images/pack4.webp", idCat: "4", stock: 100 },
    { id: "24", nombre: "Pack - Twisted", precio: 45000, img: "../images/pack5.webp", idCat: "4", stock: 100 },
    { id: "25", nombre: "Pack - El verano que me enamoré", precio: 96000, img: "../images/pack6.webp", idCat: "4", stock: 100 },
    { id: "26", nombre: "Pack - Reina Roja", precio: 88000, img: "../images/pack7.webp", idCat: "4", stock: 100 },
    { id: "27", nombre: "Pack - Aristótiles", precio: 56000, img: "../images/pack8.jpeg", idCat: "4", stock: 100 },
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos);
        }, 100)
    })
}

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = productos.find(prod => prod.id === id);
            resolve(producto);
        }, 100)
    })
}

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productosCategoria = productos.filter(prod => prod.idCat === idCategoria);
            resolve(productosCategoria);
        }, 100)
    })
}