import consumer from "./consumer"
console.log("loading")
// consumer.subscriptions.create({ channel: "ColumnChannel"}, {
consumer.subscriptions.create("ColumnChannel", {
  connected() {
    console.log("connected")
  },

  received(data) {
    console.log("ColumnChannel**")    
    console.log(data)

    if(data.commit){
      console.log("data commit!")
      // window.$store.commit(data.commit)
      console.log(window.$store.state.columns)
      window.$store.state.columns
    }
  },

  disconnected() {
    console.log("disconnected")
  }


});