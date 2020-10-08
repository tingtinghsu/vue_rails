import consumer from "./consumer"

consumer.subscriptions.create({ channel: "KanbanChannel"}, {
  connected() {
    console.log("kanban connected")    
    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    console.log("kanban disconnected")       
  },

  received(data) {
    console.log("kanban received")       
    console.log("KanbanChannel")     
    console.log(data)
  }
});
