(function(){"use strict";var t={6285:function(t,e,o){var n=o(5130),s=o(6768),r=o(4232);const i={class:"app"},a=(0,s.Lk)("head",null,[(0,s.Lk)("link",{rel:"stylesheet",href:"https://use.fontawesome.com/releases/v5.15.4/css/all.css",integrity:"sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm",crossorigin:"anonymous"})],-1),l={id:"navigation",style:{"background-color":"#110d78"}},c=(0,s.Lk)("a",{href:"index.html"},[(0,s.Lk)("img",{id:"logo",src:"cw1logo.png"})],-1),u=(0,s.Lk)("p",{style:{position:"absolute","margin-top":"-110px","margin-left":"40%",color:"white","font-family":"Arial, Helvetica, sans-serif"}}," Search: ",-1),d=(0,s.Lk)("h3",{id:"welcomeText"},[(0,s.eW)(" Welcome! Buy any lesson you want and pursue your studies "),(0,s.Lk)("em",null,"AfterSchool")],-1),h={key:0},p={id:"sortPriceButtons"},k={id:"sortSubButtons"},m={id:"sortLocationButtons"},L={id:"sortSpacesButtons"},f=["disabled"],b={class:"fas fa-cart-plus"},v=(0,s.Lk)("br",null,null,-1),g=(0,s.Lk)("div",{id:"footer"},[(0,s.Lk)("p",{style:{"margin-left":"45%"}},"Web page made by Krish Kalvani")],-1);function y(t,e,o,y,C,w){const S=(0,s.g2)("product-list"),A=(0,s.g2)("checkout");return(0,s.uX)(),(0,s.CE)("div",i,[a,(0,s.Lk)("div",l,[c,u,(0,s.bo)((0,s.Lk)("input",{id:"searchInput","onUpdate:modelValue":e[0]||(e[0]=t=>C.searchValue=t),type:"text",placeholder:"Search lessons..."},null,512),[[n.Jo,C.searchValue]])]),d,C.showLesson?((0,s.uX)(),(0,s.CE)("div",h,[(0,s.Lk)("div",p,[(0,s.Lk)("button",{onClick:e[1]||(e[1]=t=>w.sortByPrice("ascending"))}," Sort by Price (Low to High) "),(0,s.Lk)("button",{onClick:e[2]||(e[2]=t=>w.sortByPrice("descending"))}," Sort by Price (High to Low) ")]),(0,s.Lk)("div",k,[(0,s.Lk)("button",{id:"sortSubButton",onClick:e[3]||(e[3]=t=>w.sortAlphabetically("ascending"))}," Sort by Subject (A to Z) "),(0,s.Lk)("button",{id:"sortSubButton",onClick:e[4]||(e[4]=t=>w.sortAlphabetically("descending"))}," Sort by Subject (Z to A) ")]),(0,s.Lk)("div",m,[(0,s.Lk)("button",{id:"sortLocButtons",onClick:e[5]||(e[5]=t=>w.sortLocationAlphabetically("ascending"))}," Sort by Location (A to Z) "),(0,s.Lk)("button",{id:"sortLocButtons",onClick:e[6]||(e[6]=t=>w.sortLocationAlphabetically("descending"))}," Sort by Location (Z to A) ")]),(0,s.Lk)("div",L,[(0,s.Lk)("button",{onClick:e[7]||(e[7]=t=>w.sortBySpaces("ascending"))}," Sort by Spaces (Low to High) "),(0,s.Lk)("button",{onClick:e[8]||(e[8]=t=>w.sortBySpaces("descending"))}," Sort by Spaces (High to Low) ")])])):(0,s.Q3)("",!0),(0,s.Lk)("header",null,[(0,s.Lk)("button",{id:"checkOutButton",onClick:e[9]||(e[9]=(...t)=>w.showCheckout&&w.showCheckout(...t)),disabled:0===C.cart.length&&C.showLesson},[(0,s.Lk)("span",b,[v,(0,s.eW)((0,r.v_)(this.cart.length)+" Checkout",1)])],8,f)]),(0,s.Lk)("main",null,[C.showLesson?((0,s.uX)(),(0,s.Wv)(S,{key:0,lessons:w.lessonList,onAddProduct:w.addToCart},null,8,["lessons","onAddProduct"])):((0,s.uX)(),(0,s.Wv)(A,{key:1,cart:C.cart,onRemoveItem:w.removeFromCart,onEmptyCart:w.emptyCart},null,8,["cart","onRemoveItem","onEmptyCart"]))]),g])}o(4114);const C=t=>((0,s.Qi)("data-v-41de5a12"),t=t(),(0,s.jt)(),t),w={id:"lessonsGrid"},S=["src"],A={id:"lessonContent"},P=["onClick"],B={key:1,id:"disabledAddToCartButton",disabled:"disabled"},O=C((()=>(0,s.Lk)("br",null,null,-1)));function I(t,e,o,n,i,a){return(0,s.uX)(),(0,s.CE)("div",null,[(0,s.Lk)("div",w,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(o.lessons,(t=>((0,s.uX)(),(0,s.CE)("div",{id:"lessonCard",key:t.id},[(0,s.Lk)("figure",null,[(0,s.Lk)("img",{id:"lessonPic",src:t.image},null,8,S)]),(0,s.Lk)("main",A,[(0,s.Lk)("p",null,"Subject: "+(0,r.v_)(t.subject),1),(0,s.Lk)("p",null,"Location: "+(0,r.v_)(t.location),1),(0,s.Lk)("p",null,"Price (AED): "+(0,r.v_)(t.price),1),(0,s.Lk)("p",null,"Spaces: "+(0,r.v_)(t.spaces),1),a.canAddToCart(t)?((0,s.uX)(),(0,s.CE)("button",{key:0,id:"addtocartButton",onClick:e=>a.add(t)},"Add to cart",8,P)):((0,s.uX)(),(0,s.CE)("button",B,[(0,s.eW)("Sold "),O,(0,s.eW)(" Out")]))])])))),128))])])}var j={name:"ProductList",props:["lessons"],methods:{add(t){console.log("added product",t.id),this.$emit("addProduct",t)},canAddToCart:function(t){return t.spaces>0}}},E=o(1241);const x=(0,E.A)(j,[["render",I],["__scopeId","data-v-41de5a12"]]);var V=x;const _=(0,s.Lk)("h2",{id:"checkOutHeading"},"Checkout",-1),X={id:"checkoutTable"},T=(0,s.Lk)("thead",null,[(0,s.Lk)("tr",null,[(0,s.Lk)("th",null,"Lesson"),(0,s.Lk)("th",null,"Subject"),(0,s.Lk)("th",null,"Location"),(0,s.Lk)("th",null,"Price"),(0,s.Lk)("th",null,"Stock")])],-1),H={style:{width:"10%"}},F=["src"],W=["onClick"],Z=(0,s.Lk)("h3",{id:"credentialHeading"},"Please enter your credentials:",-1),K={id:"credentialBox"},N={id:"BothCredentials"},R={id:"nameCredential"},$=(0,s.Lk)("strong",null,"Name:",-1),D={id:"phoneCredential"},U=(0,s.Lk)("strong",null,"Phone No.:",-1),z=(0,s.Lk)("h2",{id:"orderInfoHeading"},"Order Information",-1),G={id:"orderInfoBox"},J={id:"orderInfoDetails"},M=(0,s.Lk)("strong",null,"Name (autofilled): ",-1),Q=(0,s.Lk)("strong",null,"Phone Number (autofilled): ",-1),q=(0,s.Lk)("p",{style:{"font-size":"small","font-family":"Arial, Helvetica, sans-serif","text-align":"center","margin-left":"50%"}}," Make sure to enter the valid form of credentials to place order ",-1),Y=["disabled"];function tt(t,e,o,i,a,l){return(0,s.uX)(),(0,s.CE)("div",null,[_,(0,s.Lk)("table",X,[T,(0,s.Lk)("tbody",null,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(o.cart,((t,e)=>((0,s.uX)(),(0,s.CE)("tr",{key:t.id},[(0,s.Lk)("td",H,[(0,s.Lk)("img",{src:t.image,alt:"Product Image"},null,8,F)]),(0,s.Lk)("td",null,(0,r.v_)(t.subject),1),(0,s.Lk)("td",null,(0,r.v_)(t.location),1),(0,s.Lk)("td",null,"Price: "+(0,r.v_)(t.price),1),(0,s.Lk)("td",null,"Spaces: "+(0,r.v_)(t.spaces),1),(0,s.Lk)("td",null,[(0,s.Lk)("button",{onClick:t=>l.removeItem(e)},"Remove",8,W)])])))),128))])]),Z,(0,s.Lk)("div",K,[(0,s.Lk)("div",N,[(0,s.Lk)("div",R,[$,(0,s.bo)((0,s.Lk)("input",{"onUpdate:modelValue":e[0]||(e[0]=t=>a.name=t),type:"text"},null,512),[[n.Jo,a.name]])]),(0,s.Lk)("div",D,[U,(0,s.bo)((0,s.Lk)("input",{"onUpdate:modelValue":e[1]||(e[1]=t=>a.phone=t),type:"tel"},null,512),[[n.Jo,a.phone]])])])]),z,(0,s.Lk)("div",G,[(0,s.Lk)("div",J,[M,(0,s.Lk)("p",null,(0,r.v_)(a.name),1),Q,(0,s.Lk)("p",null,(0,r.v_)(a.phone),1)])]),q,(0,s.Lk)("button",{id:"PlaceOrderButton",onClick:e[2]||(e[2]=(...t)=>l.submitForm&&l.submitForm(...t)),disabled:!l.credentialsValidation}," Place Order ",8,Y)])}var et={name:"Form-Component",props:["cart"],data(){return{name:"",phone:""}},methods:{removeItem(t){console.log("Attempting to remove item at index:",t),this.$emit("remove-item",t),console.log("form function done")},submitForm(){0===this.cart.length?alert("Please add lessons to your cart to place an order."):alert("Order Submitted. Thank you!"),this.$emit("empty-cart")}},computed:{nameValidation:function(){return/^[A-Za-z\s]+$/.test(this.name)},phoneValidation:function(){return/^[0-9]+$/.test(this.phone)},credentialsValidation:function(){return this.nameValidation&&this.phoneValidation}}};const ot=(0,E.A)(et,[["render",tt]]);var nt=ot,st={name:"App",components:{productList:V,checkout:nt},data(){return{sitename:"AfterSchool",cart:[],showLesson:!0,searchValue:"",sortOrder:"ascending",lessons:[]}},created(){this.fetchLessons()},methods:{fetchLessons(){fetch("http://localhost:3000/lessons").then((t=>t.json())).then((t=>{this.lessons=t})).catch((t=>console.error("Error fetching lessons:",t)))},emptyCart(){this.cart=[]},showCheckout(){this.showLesson=!this.showLesson},addToCart:function(t){t.spaces>0&&(t.spaces--,t.cartItemCount++,this.cart.push(t))},removeFromCart(t){const e=this.cart[t];this.cart.splice(t,1);const o=this.lessons.find((t=>t.id===e.id));o&&(o.cartItemCount=Math.max(0,o.cartItemCount-1),o.spaces++)},sortByPrice:function(t){this.sortOrder=t,this.lessons.sort(((e,o)=>"ascending"===t?e.price-o.price:"descending"===t?o.price-e.price:0))},sortAlphabetically:function(t){this.sortOrder=t,this.lessons.sort(((e,o)=>"ascending"===t?e.subject.localeCompare(o.subject):"descending"===t?o.subject.localeCompare(e.subject):0))},sortLocationAlphabetically:function(t){this.sortOrder=t,this.lessons.sort(((e,o)=>"ascending"===t?e.location.localeCompare(o.location):"descending"===t?o.location.localeCompare(e.location):0))},sortBySpaces:function(t){this.sortOrder=t,this.lessons.sort(((e,o)=>"ascending"===t?e.spaces-e.cartItemCount-(o.spaces-o.cartItemCount):"descending"===t?o.spaces-o.cartItemCount-(e.spaces-e.cartItemCount):0))}},computed:{lessonList(){return this.searchValue.trim().length>0?this.lessons.filter((t=>{let e=this.searchValue.trim().toLowerCase(),o=t.subject.toLowerCase().includes(e),n=t.location.toLowerCase().includes(e);return o||n})):this.lessons}}};const rt=(0,E.A)(st,[["render",y]]);var it=rt;(0,n.Ef)(it).mount("#app")}},e={};function o(n){var s=e[n];if(void 0!==s)return s.exports;var r=e[n]={exports:{}};return t[n].call(r.exports,r,r.exports,o),r.exports}o.m=t,function(){var t=[];o.O=function(e,n,s,r){if(!n){var i=1/0;for(u=0;u<t.length;u++){n=t[u][0],s=t[u][1],r=t[u][2];for(var a=!0,l=0;l<n.length;l++)(!1&r||i>=r)&&Object.keys(o.O).every((function(t){return o.O[t](n[l])}))?n.splice(l--,1):(a=!1,r<i&&(i=r));if(a){t.splice(u--,1);var c=s();void 0!==c&&(e=c)}}return e}r=r||0;for(var u=t.length;u>0&&t[u-1][2]>r;u--)t[u]=t[u-1];t[u]=[n,s,r]}}(),function(){o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,{a:e}),e}}(),function(){o.d=function(t,e){for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={524:0};o.O.j=function(e){return 0===t[e]};var e=function(e,n){var s,r,i=n[0],a=n[1],l=n[2],c=0;if(i.some((function(e){return 0!==t[e]}))){for(s in a)o.o(a,s)&&(o.m[s]=a[s]);if(l)var u=l(o)}for(e&&e(n);c<i.length;c++)r=i[c],o.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return o.O(u)},n=self["webpackChunkafterschoolstorebackend"]=self["webpackChunkafterschoolstorebackend"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=o.O(void 0,[504],(function(){return o(6285)}));n=o.O(n)})();
//# sourceMappingURL=app.d99bd4a0.js.map