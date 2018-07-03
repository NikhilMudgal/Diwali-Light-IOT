var client;
var val = "No option";
$(document).ready(function () {
// Create a client instance: Broker, Port, Websocket Path, Client ID
client = new Paho.MQTT.Client("iot.eclipse.org", Number(80), "/ws", "q1w2e3r4");
function onConnect(){
    console.log("Connected!");
  //   var mess=new Paho.MQTT.Message(val);
  // client.send("diwali",mess,2);
}
client.connect({
    onSuccess: onConnect, 
    mqttVersion: 3,
    keepAliveInterval:120

})
})

function OFF(valu1){
  $.mobile.changePage("#mainpage", "fade");
  valu1='e';
  client.send("diwali",valu1,2);
}
function choice(valu){
  val=valu;
  console.log(val);
 // var mess=new Paho.MQTT.Message(val);
  client.send("diwali",val,2);
}
