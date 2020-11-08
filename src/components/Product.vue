<template>
  <div>
    <h2>Products Form</h2>
    <div>
      <b-button class="btn-info" @click="showAddForm = !showAddForm"> Add product </b-button>
    </div>
           <div id="addproduct" v-show="showAddForm">
             <div class="form-group" :class="{ 'form-group--error': $v.name.$error }">
               <label class="form__label">Name</label>
               <input class="form__input" v-model.trim="$v.name.$model" placeholder="Enter product name"/>
             </div>
            <span v-if="!$v.name.required" class="text-light text-xl-center">Name is required!</span>
            <span v-if="!$v.name.alpha" class="text-light text-xl-center">Name can only contain letters!</span>


          <div class="form-group" :class="{ 'form-group--error': $v.name.$error }">
        <label class="form__label">Price per kg </label>
        <input class="form__input" v-model.trim="$v.priceperkg.$model" placeholder="Enter product price"/>
      </div>
      <span v-if="!$v.priceperkg.required" class="text-light text-xl-center">Price is required!</span>
      <span v-if="!$v.priceperkg.numeric" class="text-light text-xl-center">Price can only contain numeric!</span> <br>
         <b-button class="btn-info" @click="submitForm"> SAVE </b-button>
          </div>


   <div>
     <button @click="changeshow">{{buttontext}}</button>
   </div>

    <div v-show="seen">
      <b-table
          :items="products"
          :fields="fields"
          :sort-by.sync="sortBy"
          :sort-desc.sync="sortDesc"
          :striped=true
          :bordered=true
          :head-variant= "headVariant"
          :table-variant="color"
          sort-icon-left
          responsive="sm"
      >
        <template v-slot:cell(actions)="row">
          <b-button size="sm" @click="deleteProduct(row.item)" class="mr-1">
            <b-icon-trash></b-icon-trash>
          </b-button>
          <b-button size="sm" @click="editProduct(row.item)" class="mr-1">
            <b-icon-pencil-fill></b-icon-pencil-fill>
          </b-button>
        </template>
         </b-table>

        </div>
        <div id="product" class="modal fade" role="dialog">
       <div class="modal-dialog">

         <!-- Modal content-->
         <div class="modal-content">
           <div class="modal-header">
             <h4 class="modal-title">Edit product</h4>
           </div>
           <div class="modal-body">

            <div class="form-group">
              <label>Product name</label>
              <input type="text" v-model = 'product.name'>
            </div>

             <div class="form-group">
               <label>Product price per kg</label>
               <input type="text" v-model = 'product.priceperkg'>
             </div>

           </div>
           <div class="modal-footer">
             <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
             <b-button class="btn-light" @click="updateProduct"> Save Aplies</b-button>
           </div>
         </div>

       </div>
     </div>


  </div>

</template>

<script>
import {db} from '../firebase';
import {
  required,
  alpha,
    numeric
} from "vuelidate/lib/validators";

export default {
  name: 'Product',

  data() {
    return {
      product: {},
      name: '',
      pricepergr: null,
      priceperkg: null,
      seen: false,
      showAddForm: false,
      buttontext: 'Показати список продуктів',
      sortBy: 'name',
      sortDesc: false,
      fields: [
        {key: 'name', sortable: true},
        {key: 'pricepergr', sortable: true},
        {key: 'priceperkg', sortable: false},
        {key: 'actions', label: 'Actions'}
      ],
      headVariant: 'dark',
      color: 'info',
       }

  },
  validations: {
    name: {
      required,
      alpha
    },
    priceperkg:{
      required,
      numeric
    }
  },
  computed: {
    products() {
      return this.$store.getters.products;
    },
  },
  methods: {

    submitForm() {
      //fire validations
      this.$v.$touch();
      //check to see if form is valid before continuing
      if (!this.$v.$invalid) {
        this.product.pricepergr = this.priceperkg / 1000;
          this.product.name = this.name;
          this.product.priceperkg = this.priceperkg;
          this.$store.dispatch('newProducts', this.product);
          this.showAddForm = !this.showAddForm;
       this.resetForm()
               }
      },
    resetForm (){
      this.name = '',
      this.priceperkg = null
    },
    changeshow() {
      this.seen = !this.seen;
      this.seen === true ? this.buttontext = 'Сховати' : this.buttontext = 'Показати список продуктів';
    },
    editProduct(item){
      // eslint-disable-next-line no-undef
      $('#product').modal('show');
      this.product = item;
      console.log(this.product);
    },
    updateProduct(){
      this.product.pricepergr = this.product.priceperkg / 1000;
      db.collection("products").doc(this.product.id).update(this.product)
          .then(function() {
            alert('Item updated')
            console.log("Document successfully updated!");
          }).catch(function (error) {
            console.error("Error removing document: ", error);
    })},
    deleteProduct(item) {
      Object.values(this.products).forEach(element => {
        if (element.id === item.id) {
          // this.products.splice(, 1)
          console.log(element)
          db.collection("products").doc(item.id).delete().then(function () {
            alert('Запис видалено')
          }).catch(function (error) {
            console.error("Error removing document: ", error);
          });
        }
      })
    }
  }
}
</script>