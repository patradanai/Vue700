var mqtt = require('mqtt');
var client  = mqtt.connect('mqtt://MTL-740-031830.MTL1.CO.TH')

var obj
client.on('connect', function () {
  client.subscribe("Fx-PLC/Andon",{qos:1});
  console.log("Connected");
})

client.on('message', function (topic, message) {
  // message is Buffer
  //console.log(message.toString())
  obj = JSON.parse(message)
  if (obj[0] == 1){
	  console.log("Machine : ON");
  }else {
	  console.log("Machine : OFF");
  }
  
})