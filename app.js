// create a new Vue instance
new Vue({

    // which element to bind to
    el: "#vue-app",

    // create some data that can be used within the elm
    // that we are bound to
    data: {
        age: 25,
        topic: "Events",
        x: 0,
        y: 0
    },
    methods: {
        addYear: function(inc){
            this.age += inc;
        },
        subtractYear: function(dec){
            this.age -= dec;
        },
        // pass the event object
        updateMouse(event){
            this.x = event.offsetX
            this.y = event.offsetY
        }
    }
})