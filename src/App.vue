<template>
  <div class="app">
    <head>
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossorigin="anonymous"/>

    </head>
    <div id="navigation" style="background-color: #110d78">
      <a href="index.html"><img id="logo" src="cw1logo.png" /></a
      ><!--website logo-->
      <p
        style="
          position: absolute;
          margin-top: -110px;
          margin-left: 40%;
          color: white;
          font-family: Arial, Helvetica, sans-serif;
        "
      >
        Search:
      </p>
      <input
        id="searchInput"
        v-model="searchValue"
        type="text"
        placeholder="Search lessons..."
      /><!--search input, searchVal is tracked here-->
      <!--change made here-->
    </div>
    <h3 id="welcomeText">
      Welcome! Buy any lesson you want and pursue your studies
      <em>AfterSchool</em>
    </h3>
    <!--welcome message-->
    <!-- <div v-if="showLesson"> v-if here also because I don't want the sort buttons to be there in the checkout page -->
      <div v-if="showLesson">

    <div id="sortPriceButtons">
      <!--here are all the sorting buttons- sort by price-->
      <button @click="sortByPrice('ascending')">
        Sort by Price (Low to High)
      </button>
      <button @click="sortByPrice('descending')">
        Sort by Price (High to Low)
      </button>
    </div>
    <div id="sortSubButtons">
      <!--sort by subject-->
      <button id="sortSubButton" @click="sortAlphabetically('ascending')">
        Sort by Subject (A to Z)
      </button>
      <button id="sortSubButton" @click="sortAlphabetically('descending')">
        Sort by Subject (Z to A)
      </button>
    </div>
    <div id="sortLocationButtons">
      <!--sort by location-->
      <button
        id="sortLocButtons"
        @click="sortLocationAlphabetically('ascending')"
      >
        Sort by Location (A to Z)
      </button>
      <button
        id="sortLocButtons"
        @click="sortLocationAlphabetically('descending')"
      >
        Sort by Location (Z to A)
      </button>
    </div>
    <div id="sortSpacesButtons">
      <!--sort by spaces-->
      <button @click="sortBySpaces('ascending')">
        Sort by Spaces (Low to High)
      </button>
      <button @click="sortBySpaces('descending')">
        Sort by Spaces (High to Low)
      </button>
      </div>
    </div>

    <!-- </div> -->
    <header>
      <!-- <h1>{{sitename}}</h1> -->
      <button id="checkOutButton" @click="showCheckout" :disabled="cart.length === 0 && showLesson">
        <!-- <span class="fas fa-cart-plus">Checkout</span> -->
        <span class="fas fa-cart-plus"><br>{{ this.cart.length }} Checkout</span>
      </button>
    </header>
    <main>
      <product-list
        v-if="showLesson"
        :lessons="lessonList"
        @addProduct="addToCart"
      ></product-list> <!--addProduct is the event, the addTocart is the method thats linked here-->
      <!-- <checkout v-else :cart="cart"></checkout> -->
      <checkout v-else :cart="cart" @remove-item="removeFromCart" @empty-cart="emptyCart"></checkout>
    </main>
    <div id="footer">
      <p style="margin-left: 45%">Web page made by Krish Kalvani</p>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import productList from "./components/ProductList.vue";
import checkout from "./components/Form.vue";

export default {
  name: "App",
  components: {
    productList,
    checkout,
  },
  data() {
    return {
      sitename: "AfterSchool",
      cart: [],
      // lessonList:[],
      showLesson: true,
      searchValue: "",
      sortOrder: "ascending",
      lessons:[],
    };
  },

  created() {
    this.fetchLessons(); // Fetch lessons data when the component is created
  },

  methods: {

     fetchLessons() {
      fetch('http://localhost:3000/lessons') // Assuming your Express server is running locally on port 3000
        .then(response => response.json())
        .then(data => {
          this.lessons = data; // Assign fetched data to the lessons array
        })
        .catch(error => console.error('Error fetching lessons:', error));
    },
    // Your existing methods here

    emptyCart(){
      this.cart=[];
    },
    showCheckout() {
      this.showLesson = this.showLesson ? false : true; // Show the checkout form
    },
    addToCart: function (lesson) {
      //this function adds the IDs of each lesson thats added in the cart
      if (lesson.spaces > 0) {
        lesson.spaces--;
        //if the spaces left of the lesson is more that whats in the cart
        lesson.cartItemCount++; //then we can add it (increment the cartItemCount value)
        this.cart.push(lesson); //literally adding/pushing the lesson ID in the cart array
      }
    },

    // addToCart(lesson) {
    //   console.log("addProduct event received by the root component.");
    //   this.cart.push(lesson);
    // },

    // removeFromCart(index) {
    //   console.log("Removing item at index:", index);
    //   this.cart.splice(index, 1); // Remove item from cart
    // },
    removeFromCart(index) {
    // Get the removed item based on index
    const removedLesson = this.cart[index];
    // Splice it from the cart
    this.cart.splice(index, 1);
    // Now, find this lesson in your lessons array and update the cartItemCount and spaces
    const lessonToUpdate = this.lessons.find(lesson => lesson.id === removedLesson.id);
    if (lessonToUpdate) {
      // If the item is found, update its cartItemCount and spaces
      lessonToUpdate.cartItemCount = Math.max(0, lessonToUpdate.cartItemCount - 1);
      lessonToUpdate.spaces++;
    }
  },

  sortByPrice: function (order) {//order is the parameter where it will either be ascending or descending
      this.sortOrder = order; //storing it on sortOrder
      this.lessons.sort((a, b) => { //lets assume a and b are the objects (each lesson) in our lessons array, sort performs the ascending 
        //and descending/sorting
        if (order === 'ascending') {//if order is ascedning...
          return a.price - b.price;//display the first detected lesson minus the 2nd one
        } else if (order === 'descending') {// similarly for descending but 2nd lesson minus the 1st
          return b.price - a.price;
        }
        return 0; // this will not display any change if theres no ascending or descending detected
      });
    },

    sortAlphabetically: function (order){//sorting the subjects, using localeCompare as its used for arrange strings
        this.sortOrder= order;
        this.lessons.sort((a,b)=>{
          if(order==='ascending'){
            return a.subject.localeCompare(b.subject); //localeCompare compares 2 strings and returns a value that shows their order
            //if one string (A) is before another string (B), it will return a -ve number and sort in ascending order
          } else if (order==='descending') { //Similar concept for (B) before (A) i.e., descending order
            return b.subject.localeCompare(a.subject);
          }
          return 0;
        });
      },

    



    sortLocationAlphabetically: function (order) {//sorting the location, using localeCompare as its used for arrange strings
      this.sortOrder = order;
      this.lessons.sort((a, b) => {
        if (order === 'ascending') {
          return a.location.localeCompare(b.location); //localeCompare compares 2 strings and returns a value that shows their order
          //if one string (A) is before another string (B), it will return a -ve number and sort in ascending order
        } else if (order === 'descending') { //Similar concept for (B) before (A) i.e., descending order
          return b.location.localeCompare(a.location);
        }
        return 0;
      });
    },

    sortBySpaces: function (order) {//order is the parameter where it will either be ascending or descending
      this.sortOrder = order;
      this.lessons.sort((a, b) => { //lets assume a and b are the objects (each lesson) in our lessons array, sort performs the ascending 
        //and descending
        if (order === 'ascending') {//if order is ascedning...
          return (a.spaces-a.cartItemCount) - (b.spaces-b.cartItemCount);//display the first detected lesson minus the 2nd one but here
          //we dynamically check the cartItemCount's value (from each lesson) to sort the spaces
        } else if (order === 'descending') {// similarly for descending but 2nd lesson minus the 1st
          return (b.spaces-b.cartItemCount)-(a.spaces-a.cartItemCount);
        }
        return 0; // this will not display any change if theres no ascending or descending detected
      });
    },
    
  },
  computed:{
     lessonList(){ // i modified the previouse code to search by location as well
      if(this.searchValue.trim().length>0){ //if the user searches something
        return (this.lessons.filter((lesson)=>{// then return the following
          let lowerCaseSearch= this.searchValue.trim().toLowerCase(); //this stores all the search values in lowerCase
          let subjectSearch= lesson.subject.toLowerCase().includes(lowerCaseSearch);//searches by subject, we lowerCase the subject so we can get
          //results for searching a small letter, we do the lowerCasing during the search (in the includes) so that we can search big letters, we just want to make it
          //case insensitive
          let locationSearch= lesson.location.toLowerCase().includes(lowerCaseSearch);
          return subjectSearch||locationSearch;

        }));
        
        
      }
      return this.lessons;//this displays all the lessons at default when nothing is searched

    }
  }
  
};
</script>

<style>
body {
  /*body css*/
  margin: 0;
  background-color: #ff9900;
  /* background: linear-gradient(to bottom, #ff9900, #ff66cc); */
}
#navigation {
  /*navigation bar*/

  height: 70px;
  width: 100%;
}
#searchInput {
  /*search bar in the nav bar*/
  position: absolute;
  margin-top: 15px;
  margin-left: 35%;
  width: 300px;
  height: 30px;

  padding: 5px;
}

#sortPriceButtons {
  /*positioning the sort price button*/
  position: absolute;
  margin-left: 2%;
  margin-top: -2%;
}
#sortSubButtons {
  /*positioning the sort subject button*/
  position: absolute;
  margin-top: -2%;
  margin-left: 28%;
}

#sortLocationButtons {
  /*positioning the sort location button*/
  position: absolute;
  margin-top: -2%;
  margin-left: 51%;
}

#sortSpacesButtons {
  position: absolute;
  margin-top: -2%;
  margin-left: 74%;
}

#welcomeText {
  /*CSS for the welcome message*/
  font-size: 50px;
  margin-left: 3%;
  text-align: center;
  color: white;
  -webkit-text-stroke-color: black;
  -webkit-text-stroke-width: 2px;
}

/*Logo in the nav bar*/
#logo {
  height: 200px;
  width: 9%;
  margin-left: 1%;
  margin-top: -4.5%;
}
#checkOutButton {
  /*CSS for the checkout button on the top in the nav bar*/
  position: absolute;
  margin-top: -18.5%;
  margin-left: 90%;
  height: 8%;
  width: 6%;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  background-color: #9692f7;
}

#footer {
  /*footer at the bottom of the page*/
  position: absolute;
  /* margin-left: 50%; */
  background-color: #110d78;
  color: white;
  font-size: larger;
  width: 100%;
  margin-top: 30%;
}
</style>
