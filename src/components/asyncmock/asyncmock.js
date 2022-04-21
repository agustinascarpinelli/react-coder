const products =[
    { id:'1',
      name:'Samsung Galaxy A52',
      description:"smartphone",
      price:40000,
      img:'https://tienda.movistar.com.ar/media/catalog/product/cache/1d01ed3f1ecf95fcf479279f9ae509ad/s/a/samsung_galaxy_a52_negro_1_1_1_1.png',
      categoryId:'Smartphone',
      stock:10
    },
    { id:'2',
      name:'Samsung Galaxy Z Flip 3 5G',
      description:"celular",
      price:56000,
      img:'https://tienda.movistar.com.ar/media/catalog/product/cache/1d01ed3f1ecf95fcf479279f9ae509ad/s/m/sm-f711_zflip3_openfront_phantomblack_1_7.png',
      category:'Smartphone',
      stock:10
    },
    { id:'3',
      name:'Samsung Galaxy A12 New 64GB',
      img:'https://tienda.movistar.com.ar/media/catalog/product/cache/1d01ed3f1ecf95fcf479279f9ae509ad/s/a/samsung_galaxy_a12_negro_frente_lifestyle_7_1_1.png',
      category:'Smartphone',
      stock:10
    }, 
    { id:'4',
      name:'Motorola Moto G71 5G',
      description:"smartphone",
      price:705800,
      img:'https://tienda.movistar.com.ar/media/catalog/product/cache/1d01ed3f1ecf95fcf479279f9ae509ad/g/7/g71-verde-frente.png',
      category:'Smartphone',
      stock:10
    },
    { id:'5',
      name:'Motorola Edge 20 Pro 5G con control remoto',
      description:"smartphone",
      price:89600,
      img:'https://tienda.movistar.com.ar/media/catalog/product/cache/1d01ed3f1ecf95fcf479279f9ae509ad/2/0/2021_sierra_basicpack_opticwhite_frontside_2_1_1_1.png',
      category:'Smartphone',
      stock:10
    }
    
    ]
    const categories=[
        {id:'Smartphone',description:'Smartphones'},
        {id:'Notebook',description:'Notebooks'},
        {id:'Tablet',description:'Tablets'}
    ]
    export const getCategories=()=>{
        return new Promise(resolve=>{setTimeout(()=>{resolve(categories)},500)
    })}
    export const getProducts =(categoryId)=>{
        return new Promise (resolve=>{setTimeout(()=>{
            resolve(categoryId?products.filter(prod=>prod.category===categoryId):products)},500)
        })}
    
    
    export const getProductsById =(id)=>{
        return new Promise (resolve=>{setTimeout(()=>{
            resolve(products.find(prod=>prod.id===id))},500)})}
        
            
    
    
    