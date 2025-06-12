const products = [
    {
        id: '1',
        name: 'Frasco',
        description: 'Frasco de yeso con un diseño elegante, ideal para decoración y almacenamiento.',
        stock: 10,
        price: 2500,
        category: 'Yeso',
        img: 'https://picsum.photos/200',
    }, 
    
    {
        id: '2',
        name: 'Masetas',
        description: 'Ideal para suculentasy cactus, con un diseño moderno y elegante.',
        stock: 5,
        price: 1500,
        category: 'Yeso',
        img: 'https://picsum.photos/450',
    }, 


    {
        id: '3',
        name: 'Hechizo de amor Diosa Ainé',
        description: 'Aroma de Vainilla con toques de canela y miel, ideal para atraer el amor y la pasión.',
        stock: 0,
        price: 3000,
        category: 'Velas',
        img: 'https://picsum.photos/800',
    },

    {
        id: '4',
        name: 'Camino de mesa',
        description: 'Ideal para decorar tu hogar, con una tela suave y elegante.',
        stock: 20,
        price: 5000,
        category: 'Hogar Deco',
        img: 'https://picsum.photos/600',
    }, 

    {
        id: '5',
        name: 'Cojín decorativo',
        description: 'Cojín de terciopelo con un diseño moderno y elegante, ideal para decorar tu hogar.',
        stock: 15,
        price: 3500,
        category: 'Hogar Deco',
        img: 'https://picsum.photos/700',
    }, 

    {
        id: '6',
        name: 'Set de velas aromáticas',
        description: 'Set de 3 velas aromáticas con diferentes aromas, ideal para crear un ambiente relajante.',
        stock: 8,
        price: 4000,
        category: 'Velas',
        img: 'https://picsum.photos/500',
    },

    {
        id: '7',
        name: 'Jarrón de cerámica',
        description: 'Jarrón de cerámica con un diseño moderno y elegante, ideal para decorar tu hogar.',
        stock: 12,
        price: 6000,
        category: 'Hogar Deco',
        img: 'https://picsum.photos/300',
    }, 

    {
        id: '8',
        name: 'Set de macetas colgantes',
        description: 'Set de 3 macetas colgantes con un diseño moderno y elegante, ideal para decorar tu hogar.',
        stock: 10,
        price: 4500,
        category: 'Yeso',
        img: 'https://picsum.photos/400',
    },
    {
        id: '9',
        name: 'Candelabro de hierro',
        description: 'Candelabro de hierro con un diseño moderno y elegante, ideal para decorar tu hogar.',
        stock: 7,
        price: 7000,
        category: 'Hogar Deco',
        img: 'https://picsum.photos/200',
    }, 

    {
        id: '10',
        name: 'Set de aromatizadores',
        description: 'Set de 3 aromatizadores con diferentes aromas, ideal para crear un ambiente relajante.',
        stock: 5,
        price: 3500,
        category: 'Velas',
        img: 'https://picsum.photos/100',
    },

    {
        id: '11',
        name: 'Perfume de ambiente',
        description: 'Aroma a Flores Blancas, ideal para perfumar tu hogar y crear un ambiente fresco y relajante.',
        stock: 6, 
        price: 2000,
        category: 'Aromatizantes',  
        img: 'https://picsum.photos/250',
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

