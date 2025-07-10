export const products = [
    
    {
        name: 'Macetas',
        description: 'Ideal para suculentasy cactus, con un diseño moderno y elegante.',
        stock: 5,
        price: 1500,
        category: 'Yeso',
        img: '/img/yeso2.jpg',
    }, 


    {
        name: 'Hechizo de amor',
        description: 'Aroma de Vainilla con toques de canela y miel, ideal para atraer el amor y la pasión.',
        stock: 0,
        price: 3000,
        category: 'Velas',
        img: '/img/vela1.jpg',
    },

    {
        name: 'Camino de mesa',
        description: 'Ideal para decorar tu hogar, con una tela suave y elegante.',
        stock: 20,
        price: 5000,
        category: 'Hogar Deco',
        img: '/img/camino.jpg',
    }, 

    {
        name: 'Jarrones ',
        description: 'Cojín de terciopelo con un diseño moderno y elegante, ideal para decorar tu hogar.',
        stock: 15,
        price: 3500,
        category: 'Hogar Deco',
        img: '/img/yeso3.jpg',
    }, 

    {
        name: 'Set de velas aromáticas',
        description: 'Set de 3 velas aromáticas con diferentes aromas, ideal para crear un ambiente relajante.',
        stock: 8,
        price: 4000,
        category: 'Velas',
        img: '/img/vela2.jpeg',
    },

    {
        name: 'Niña ',
        description: 'Jarrón de cerámica con un diseño moderno y elegante, ideal para decorar tu hogar.',
        stock: 12,
        price: 6000,
        category: 'Hogar Deco',
        img: '/img/yeso6.jpg',
    }, 

    {
        name: 'Cascada de Humo',
        description: 'Cascada de humo de cerámica con un diseño elegante, ideal para crear un ambiente relajante.',
        stock: 10,
        price: 4500,
        category: 'Yeso',
        img: '/img/yeso4.jpg',
    },
    {
        name: 'Porta Sahumerio',
        description: 'Porta sahumerio de yeso con un diseño moderno y elegante, ideal para decorar tu hogar.',
        stock: 7,
        price: 7000,
        category: 'Hogar Deco',
        img: '/img/yeso5.jpg',
    }, 

    {
        name: 'Set de aromatizadores',
        description: 'Set de 3 aromatizadores con diferentes aromas, ideal para crear un ambiente relajante.',
        stock: 5,
        price: 3500,
        category: 'Aromatizantes',
        img: '/img/aromatizador2.jpeg',
    },

    {
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

