const products = [
    {
        id: '1',
        name: 'Florero de yeso',
        description: 'Frasco de yeso con un diseño elegante, ideal para decoración y almacenamiento.',
        stock: 10,
        price: 2500,
        category: 'Yeso',
        img: '/img/yeso1.jpg',
    }, 
    
    {
        id: '2',
        name: 'Macetas',
        description: 'Ideal para suculentasy cactus, con un diseño moderno y elegante.',
        stock: 5,
        price: 1500,
        category: 'Yeso',
        img: '/img/yeso2.jpg',
    }, 


    {
        id: '3',
        name: 'Hechizo de amor Diosa Ainé',
        description: 'Aroma de Vainilla con toques de canela y miel, ideal para atraer el amor y la pasión.',
        stock: 0,
        price: 3000,
        category: 'Velas',
        img: '/img/vela1.jpg',
    },

    {
        id: '4',
        name: 'Camino de mesa',
        description: 'Ideal para decorar tu hogar, con una tela suave y elegante.',
        stock: 20,
        price: 5000,
        category: 'Hogar Deco',
        img: '/img/camino.jpg',
    }, 

    {
        id: '5',
        name: 'Jarrones ',
        description: 'Cojín de terciopelo con un diseño moderno y elegante, ideal para decorar tu hogar.',
        stock: 15,
        price: 3500,
        category: 'Hogar Deco',
        img: '/img/yeso3.jpg',
    }, 

    {
        id: '6',
        name: 'Set de velas aromáticas',
        description: 'Set de 3 velas aromáticas con diferentes aromas, ideal para crear un ambiente relajante.',
        stock: 8,
        price: 4000,
        category: 'Velas',
        img: '/img/vela2.jpeg',
    },

    {
        id: '7',
        name: 'Niña ',
        description: 'Jarrón de cerámica con un diseño moderno y elegante, ideal para decorar tu hogar.',
        stock: 12,
        price: 6000,
        category: 'Hogar Deco',
        img: '/img/yeso6.jpg',
    }, 

    {
        id: '8',
        name: 'Cascada de Humo',
        description: 'Cascada de humo de cerámica con un diseño elegante, ideal para crear un ambiente relajante.',
        stock: 10,
        price: 4500,
        category: 'Yeso',
        img: '/img/yeso4.jpg',
    },
    {
        id: '9',
        name: 'Porta Sahumerio',
        description: 'Porta sahumerio de yeso con un diseño moderno y elegante, ideal para decorar tu hogar.',
        stock: 7,
        price: 7000,
        category: 'Hogar Deco',
        img: '/img/yeso5.jpg',
    }, 

    {
        id: '10',
        name: 'Set de aromatizadores',
        description: 'Set de 3 aromatizadores con diferentes aromas, ideal para crear un ambiente relajante.',
        stock: 5,
        price: 3500,
        category: 'Aromatizantes',
        img: '/img/aromatizador2.jpeg',
    },

    {
        id: '11',
        name: 'Perfume de ambiente',
        description: 'Aroma a Flores Blancas, ideal para perfumar tu hogar y crear un ambiente fresco y relajante.',
        stock: 6, 
        price: 2000,
        category: 'Aromatizantes',  
        img: '/img/aromatizador1.jpg',
    },






]

let error = false;

export const getProducts = () =>{
    let error = false
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            if(error){
                reject('Hubo un error')
            }else{
                resolve(products)
            }
        },3000)
    })
}
export const getOneProduct = (id) =>{
    let error = false
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            if(error){
                reject('Hubo un error')
            }else{
                let product= products.find((prod)=> prod.id === id)
                resolve(product)
            }
        },1000)
    })
}

