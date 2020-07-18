// create a new Vue instance
new Vue({

    // which element to bind to
    el: "#vue-app",

    // create some data that can be used within the elm
    // that we are bound to
    data: {
        name: "John Doe",
        topic: "Data Binding",
        website: "http://www.thenetninja.co.uk",
        websiteTag: '<a href="http://www.thenetninja.co.uk"> The NetNinja From Vue Instance</a>'
    },

    methods: {
        /*
            Accessing fields from the data property
            when you want to access a property in the data field
            you will NOT use **this.data.propertyName**
            instead you use **this.propertyName**

            Vue will take all the filds from the data object and bring them up to
            the root level of the Vue instance so that we can just use **this.propertyName**
        */
        greeting: function(timeOfDay){
            return `Good ${timeOfDay} my name is ${this.name}. Im a ${this.job} for Acme Sales Group`
        }
    }
})