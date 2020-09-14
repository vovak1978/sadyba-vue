import Vue from 'vue';
import Vuex from 'vuex';
import {db} from '../firebase';




Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        products:[],
        dishes:[],
            check: []
    },

        mutations:{
        getProducts(state, products){
            state.products = products
        },
        newProducts(state, payload){
            state.products.push(payload)
        },
            getDishes(state, dishes){
            state.dishes = dishes;
            },
        newDish(state, payload){
            state.dishes.push(payload)
        },
        newcheckrow(state, payload){
            state.check.push(payload)
        }
    },
    actions:{
        getProducts(context) {
            db.collection('products').get().then(snap =>{
            const products = [];
            snap.forEach(doc => {
                products.push({
                    id: doc.id,
                    name: doc.data().name,
                    pricepergr: doc.data().pricepergr
                })
            })
            context.commit('getProducts', products)
        })
        },

        newProducts({commit}, payload){
                db.collection('products').add(payload).then(() => {
                    alert('Успішно додано');
                    commit('newProducts', payload)
                  }).catch((error) => {
                        console.log(error)
                    });

          },
         getDishes(context){
           db.collection('dishes').get().then(snap => {
               const dishes = []
               snap.forEach(doc => {
                   dishes.push({
                       id: doc.id,
                       name: doc.data().name,
                       ingridients: doc.data().ingridients,
                       totalsum: doc.data().totalsum,
                       sumForPay: doc.data().sumForPay
                   })
                   })
               context.commit('getDishes', dishes)
           })
         },
         newDish({commit}, payload){
            db.collection('dishes').add(payload).then(() => {
                alert('Упішно додано');
                commit('newDish', payload)
            }).catch((error) => {
                console.log(error)
            })
        },
        newcheckrow({commit}, payload){
            commit('newcheckrow', payload)
        }
    },
    getters:{
        products(state) {
            return state.products
        },
        dishes(state) {
            return state.dishes
        },
        check(state) {
            return state.check
        }
    }

})
