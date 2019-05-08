<template>
    <div>
      <div class="container">
        
        <h1> ANdon Monitoring </h1>
        <h3>Machine Status :</h3>
        <p>{{ Status }}</p>
        <b-alert variant="success" show>Success Alert</b-alert>
      </div>
    </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      data:'',
      temp:[],
      humi:[]
    };
  },
  sockets: {
      temp_humi: function(msg) {
        this.data = msg
        console.log(this.data);
      }
   },
   methods: {
     sepData: function(){
    
     }
   },
   created() {
         setInterval(() => {
           this.sepData();
         }, 1000);
     },
    computed: {
      Status() {
        if (this.data == 1){
          return "ON"
        }else {
          return "OFF"
        }
      } 
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
