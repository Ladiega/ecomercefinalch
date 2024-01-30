const products = [{
  id: '1',
  name: 'Agua, Tierra',
  price: 500,
  category: 'pintura',
  img: 'https://firebasestorage.googleapis.com/v0/b/fb-ecomerce.appspot.com/o/paint1.jpg?alt=media&token=2eb3596a-cd17-4c4d-b8ec-324b1b0e9068',
  stock: 1,
  descrption:'Papel acuarela 90x75cn, Tinta, Acuarelas'
  
},
  {
    id: '2',
    name: 'KiKu',
    price: 500,
    category: 'pintura',
    img: 'https://firebasestorage.googleapis.com/v0/b/fb-ecomerce.appspot.com/o/paint2.jpg?alt=media&token=5ac79f09-adc7-44a3-adde-24d902e963dc',
    stock: 1,
    descrption: 'Papel acuarela 90x75cn, Tinta, Acuarelas'
  },
  {
    id: '3',
    name: 'RYU',
    price: 500,
    category: 'pintura',
    img: 'https://firebasestorage.googleapis.com/v0/b/fb-ecomerce.appspot.com/o/paint3.jpg?alt=media&token=b85c07cc-357c-45c2-8a1e-77d8471c88f4',
    stock: 1,
    descrption: 'Papel acuarela 90x75cn, Tinta, Acuarelas'
  },
]
export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products)
    }, 500)
  })
}

