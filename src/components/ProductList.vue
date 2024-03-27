<template>
  <div>
    <div id="lessonsGrid">
    <div id="lessonCard" v-for="lesson in lessons" :key="lesson.id"><!--lessonCard for CSS, v-for to iterate over the lessons array (now lessons list array) to display the lessons-->
          <figure>
            <img id="lessonPic" v-bind:src="lesson.image"><!--lesson image-->
          </figure>
          <main id="lessonContent"><!--lesson details-->
            <p>Subject: {{ lesson.subject }}</p>
            <p>Location: {{ lesson.location }}</p>
            <p>Price (AED): {{ lesson.price }}</p>
            <p>Spaces: {{lesson.spaces}}</p>
            <button id="addtocartButton" @click="add(lesson)" v-if="canAddToCart(lesson)" >Add to cart</button>
            <button id="disabledAddToCartButton" disabled="disabled" v-else>Sold <br> Out</button>
          </main>
        </div>
        </div>
  </div>
</template>

<script>
export default {
  name: "ProductList",
  props: ['lessons'],
  methods:{
    add(lesson){
        console.log("added product", lesson.id);
        this.$emit('addProduct', lesson);
    },
    canAddToCart: function (lesson) { //checks if we can add to the cart or not, we put this in a v-if else so we can disable the add to cart button
      return lesson.spaces > 0; //checks if the spaces is more than the lessons that have been added
    },
  },

};


</script>

<style scoped>
#lessonPic{
    height: 10%;
    width: 10%;
}


/* size of the lesson picture */
#lessonPic{
    height: 40%;
    width: 40%;
    margin-left:-160px;
    margin-top: 50px;
    
}

#lessonContent{ /*CSS for the subject, location, price, spaces and the addtocart button*/
    margin-left: 50%;
    margin-top:-40%;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
}


#addtocartButton{ /*positioning and designing each addtocart button in each lesson*/
    margin-left:-83%; 
    margin-top:-5px;
    height: 25%;
    width: 70%;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    background-color: #9692f7;
}
#disabledAddToCartButton{/*same for the disabled version when its sold out*/
    margin-left:-83%; 
    margin-top:-5px;
    height: 25%;
    width: 70%;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    background-color: #9692f7;
    margin-bottom: 60px;

}

  #lessonsGrid { /*this sets up the display of the lessons using grid, it arranges it as 5 lessons per row*/
    display: grid;
    grid-template-columns: repeat(5, 1fr); 
    gap: 20px;
    justify-content: center;
  }

  #lessonCard { /*this sets up the border, size, and background color for each lesson*/
    margin: 10px;
    padding: 10px;
    border: 1px solid black;
    border-radius: 5px;
    text-align: center;
    width: 250px;
    height: 350px; 
    background-color: #e6edbe;
    /* display:flex;
    flex-direction: column; */
  }



#NoLessonFoundText{
    position: absolute;
    margin-left: 39%;
    margin-top: 10%;
    font-size: 40px;
    color: white;
    -webkit-text-stroke-color: black;
    -webkit-text-stroke-width: 1px;

}
</style>