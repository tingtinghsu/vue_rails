import consumer from "./consumer"
console.log("loading")
// consumer.subscriptions.create({ channel: "ColumnChannel"}, {
consumer.subscriptions.create("ColumnChannel", {
  connected() {
    console.log("connected")
  },

  received(data) {
    console.log("ColumnChannel")    
    console.log(data)

    // if(data.commit){
    //   window.$store.commit(data.commit)
    // }
  },

  disconnected() {
    console.log("disconnected")
  }


});