<template>
    <div>
        <h1>Product List</h1>
        <img
            v-if="loading"
            src="@/assets/Preloader_4.gif"
        >
        <ul v-else>
            <li v-for = "product in products" v-bind:key="product.title">  
                {{product.title}}------{{product.price | currency}}-----{{product.inventory}}---- 
                <button 
                :disabled="!productIsInStock(product)"
                @click="addProductToCart(product)"
                >Add To Cart</button>
            </li>
        </ul>
    </div>
</template> 
    <script>
        import {mapState,mapGetters,mapActions} from 'vuex'
        //import shop from '@/api/shop'
        //import store from '../store'
        export default{
            data(){
                return{
                    loading:false,
                    productIndex:1
                }
            },
            // computed: mapState({
            //     products:state=>state.products,
            //     // firstProduct:state => state.products[0],
            //     // specificProduct(state){
            //     //     return state.products[this.productIndex]
            //     // }
            // }),
            computed:{
                ...mapState({
                    products:state=>state.products.products
                }),

                ...mapGetters({
                    productIsInStock:'productIsInStock'
                })
                //  products(){
                //      return this.$store.state.products
                //  },
                //  productIsInStock(){
                //      return this.$store.getters.productIsInStock
                //  }
             },
            methods:{
                ...mapActions({
                    fetchProducts:'fetchProducts',
                    addProductToCart:'addProductToCart'
                })
                // addProductToCart(product){
                //     this.$store.dispatch('addProductToCart',product)
                // }
            },
            created(){
                this.loading=true
                this.fetchProducts()
                .then(()=>this.loading=false)
               
            }
        }
    </script>
