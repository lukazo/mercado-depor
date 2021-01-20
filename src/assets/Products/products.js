export const productList = [
    {
        id: "1",
        nombre: 'Sweet dreams',
        description: 'Waffles con frutilla, marsmellow y salsa de frambuesa',
        precio: '300',
        categoria: 'Dulces'
    },
    {
        id: "2",
        nombre: 'Tropical breeze',
        description: 'Waffles con piña, kiwi y salsa de chocolate Blanco',
        precio: '200',
        categoria: 'Dulces'
    },
    {
        id: "3",
        nombre: 'Grooving spark',
        description: 'Waffles con arándanos, chocolate chips y helado de vainilla',
        precio: '400',
        categoria: 'Dulces'
    },
    {
        id: "4",
        nombre: 'Morning blast',
        description: 'Waffles con naranja, kiwi e ingrediente a elección más jugo natural',
        precio: '100',
        categoria: 'Dulces'
    },
    {
        id: "5",
        nombre: 'Fire Ranch',
        description: 'Waffles con pollo barbecue y tocino',
        precio: '100',
        categoria: 'Salados'
    },
    {
        id: "6",
        nombre: 'Sunny sunday',
        description: 'Waffles con queso vegano y verduras',
        precio: '100',
        categoria: 'Integrales'
    }
]

// const firebase = require('firebase');
// require("firebase/firestore");

// firebase.initializeApp({
//     apiKey: "AIzaSyBkBNsu4cSTvwNJ90RkqfcU55FBqZq25LY",
//     authDomain: "waffle-house-78483.firebaseapp.com",
//     projectId: "waffle-house-78483",
// });

// var db = firebase.firestore();

// var productos = [
//     {
//         id: "1",
//         nombre: 'Sweet dreams',
//         description: 'Waffles con frutilla, marsmellow y salsa de frambuesa',
//         precio: '300',
//         categoria: 'Dulces'
//         img: 'waffle.jpg'
//     },
//     {
//         id: "2",
//         nombre: 'Tropical breeze',
//         description: 'Waffles con piña, kiwi y salsa de chocolate Blanco',
//         precio: '200',
//         categoria: 'Dulces'
//         img: 'waffle.jpg'
//     },
//     {
//         id: "3",
//         nombre: 'Grooving spark',
//         description: 'Waffles con arándanos, chocolate chips y helado de vainilla',
//         precio: '400',
//         categoria: 'Dulces'
//         img: 'waffle.jpg'
//     },
//     {
//         id: "4",
//         nombre: 'Morning blast',
//         description: 'Waffles con naranja, kiwi e ingrediente a elección más jugo natural',
//         precio: '100',
//         categoria: 'Dulces'
//         img: 'waffle.jpg'
//     },
//     {
//         id: "5",
//         nombre: 'Fire Ranch',
//         description: 'Waffles con pollo barbecue y tocino',
//         precio: '100',
//         categoria: 'Salados'
//         img: 'waffle.jpg'
//     },
//     {
//         id: "6",
//         nombre: 'Sunny sunday',
//         description: 'Waffles con queso vegano y verduras',
//         precio: '100',
//         categoria: 'Integrales'
//         img: 'waffle.jpg'
//     }

// ];

// productos.forEach((obj) => {
//   db.collection("productos")
//     .add({
//       id: obj.id,
//       nombre: obj.nombre,
//       description: obj.description,
//       precio: obj.precio,
//       categoria: obj.categoria,
//       img: obj.img,
//     })
//     .then((docRef) => {
//       console.log("Producto registrado con ID: ", docRef.id);
//     })
//     .catch((error) => {
//       console.error("Error al agregar un documento: ", error);
//     });
// });
