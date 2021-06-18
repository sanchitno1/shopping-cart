//import getProducts from '@/api/shop.js'
import shop from '@/api/shop'
export default{

    state:{
        products:[]
    },

    getters:{
        availableProducts(state,getters){
            return state.products.filter(product => product.inventory > 0)
            },
        
        productIsInStock(){
            return (product)=>{
                return product.inventory>0
            }
        }
    },
    mutations:{
        setProducts(state,products){
            //update products
            state.products=products
        },
        decrementProductInventory(state,product){
            product.inventory--
        }
    },
    actions:{
        fetchProducts({commit},payload){
            //console.log("fetchProducts")
            //fetch("https://fakestoreapi.com/products")
            //shop.getProducts()
        // .then(res => res.json())
        // .then(json => commit("setProducts", json));
            return new Promise((resolve,reject)=>{
            shop.getProducts(products => {    //shop
               //console.log(products)
               commit('setProducts',products)
               resolve()
            })
         })
         }
    } 
}