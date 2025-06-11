const products = [
    {
        id: '1',
        name: 'Producto 1',
        description: 'Descripción del Producto 1',
        stock: 10,
        price: 2500,
        category: 'Categoria 1',
        img: 'https://picsum.photos/200',
    }, 
    
    {
        id: '2',
        name: 'Producto 2',
        description: 'Descripción del Producto 2',
        stock: 5,
        price: 1500,
        category: 'Categoria 2',
        img: 'https://picsum.photos/450',
    }, 


    {
        id: '3',
        name: 'Producto 3',
        description: 'Descripción del Producto 3',
        stock: 0,
        price: 3000,
        category: 'Categoria 3',
        img: 'https://picsum.photos/800',
    },

    {
        id: '4',
        name: 'Producto 4',
        description: 'Descripción del Producto 4',
        stock: 20,
        price: 5000,
        category: 'Categoria 4',
        img: 'https://picsum.photos/600',
    }


]

let error = false; // Cambia a true para simular un error

export const getProducts = () => {
    const getProducts = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (error) {
                    reject('Error al cargar los productos');
                } else {
                    resolve(products);
                }
            }, 2000);
        });
    };

    return getProducts();
};

