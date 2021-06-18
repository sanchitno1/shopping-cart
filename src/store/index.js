import Vuex from 'vuex'
import Vue from 'vue'
import shop from '@/api/shop'
import actions from './actions'
import cart from './modules/cart'
import products from './modules/products'
Vue.use(Vuex)

export const store= new Vuex.Store({
    modules:{
        cart,
        products
    },
    state:{ //=data
       // products: [],
            
    },
    getters:{ //=Computed properties
        
    },
    actions: actions,
     //..methods and can be used when to make a call from API
            //Make a Call
            //Responsible for making an AJAX Call
            //Instead of AJAX Call run setproducts mutation
    //     fetchProducts({commit}){
    //         return new Promise((resolve,reject)=>{
    //         shop.getProducts(products => {
    //            commit('setProducts',products)
    //            resolve()
    //         })
    //     })
    //     },
    //     addProductToCart({state,getters,commit},product){
    //         if (getters.productIsInStock(product)){
    //             const cartItem=state.cart.find(item=>item.id===product.id)
    //             if(!cartItem){
    //                 commit('pushProductToCart',product.id)
    //             }else{
    //                 commit('incrementItemQuantity',cartItem)
    //             }
    //             commit('decrementProductInventory',product)
    //         }
    //     },
    //     checkout({state,commit}){
    //         shop.buyProducts(
    //             state.cart,
    //             ()=>{
    //                 commit('emptyCart')
    //                 commit('setCheckoutStatus','success')
    //             },
    //             ()=>{
    //                 commit('setCheckoutStatus','fail')
    //             }
    //         )
    //     }
    // },

        
        
    mutations:{ //Setting and Updating an state
        
    }
})