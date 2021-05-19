
const mongoose= require('mongoose');
const Product= require('./models/product');

mongoose.connect('mongodb://localhost:27017/farmStand', {useNewUrlParser: true})
    .then(()=>{
        console.log('connection open');
    }). catch((err)=>{
        console.log("error found");
        console.log(err);
    })

// const p= new Product({
//     name:'Ruby Grapefruit',
//     price: 1.99,
//     category: 'fruit'
// })

// p.save()
//      .then(p=>{
//          console.log(p);
//      }).catch(e=>{
//          console.log(e);
//      })

const seedProducts= [
    {
        name: 'fairy Eggplant',
        price: 1.00,
        category: 'vegetable'
    },
    {
        name: 'Organic Goddess melon',
        price: 4.99,
        category: 'fruit'
    },
    {
        name: 'organic Mini seedless watermelon',
        price: 3.99,
        category: 'fruit',
    },
    {
        name: 'Organic Celery',
        price: 1.50,
        category: 'vegetable'
    }
]

Product.insertMany(seedProducts)
   .then(res=>{
       console.log(res);
   }).catch(err=>{
       console.log(err);
   })