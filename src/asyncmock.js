const products = [
    {
        id:'1',
        title:'ocelot gaming ogec01',
        description:'Gabinete, Factor de Forma ATX, Micro ATX y Mini ITX, Panel de Cristal Templado Frontal y Lateral, sin Fuente de Poder',
        price:13662.06,
        stock:50,
        category:'computadoras',
        pictureUrl:'https://m.media-amazon.com/images/I/614q-EzXbnL._AC_SX425_.jpg'
    },
    {
        id:'2',
        title:'xiaomi poco m3 pro 5g',
        description:'Memoria RAM (128 GB/6 GB, doble SIM, color amarillo',
        price:3999.99,
        stock:50,
        category:'celulares',
        pictureUrl:'https://m.media-amazon.com/images/I/51dkoYpSsmS._AC_SX425_.jpg'

    },
    {
        id:'3',
        title:'laptop hp 14-dk1508la',
        description:'AMD Ryzen 3 8 GB RAM 256 GB SSD Plata',
        price:10299 ,
        stock:10,
        category:'laptops',
        pictureUrl:'https://cdn1.coppel.com/images/catalog/pm/2258773-1.jpg'
    },
    {
        id:'4',
        title:'ocelot gaming ogec01',
        description:'Gabinete, Factor de Forma ATX, Micro ATX y Mini ITX, Panel de Cristal Templado Frontal y Lateral, sin Fuente de Poder',
        price:13662.06,
        stock:50,
        category:'computadoras',
        pictureUrl:'https://m.media-amazon.com/images/I/614q-EzXbnL._AC_SX425_.jpg'
    },
    {
        id:'5',
        title:'xiaomi poco m3 pro 5g',
        description:'Memoria RAM (128 GB/6 GB, doble SIM, color amarillo',
        price:3999.99,
        stock:50,
        category:'celulares',
        pictureUrl:'https://m.media-amazon.com/images/I/51dkoYpSsmS._AC_SX425_.jpg'

    },
    {
        id:'6',
        title:'laptop hp 14-dk1508la',
        description:'AMD Ryzen 3 8 GB RAM 256 GB SSD Plata',
        price:10299 ,
        stock:10,
        category:'laptops',
        pictureUrl:'https://cdn1.coppel.com/images/catalog/pm/2258773-1.jpg'
    }
]
export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 1000);
    })
}
export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 1000)
    })
}

export const getProductById = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 1000)
    })
}