# Events

## using v-on: and @ create some events and handle them accordingly

1. Update Age
- create a p tag that reads the data **year** from the Vue instance
- add two buttons one to increment and decrement the year by 1
- add two buttons one to increment and decrement the year by 10
- create click handlers for the buttons and connect the buttons to the click handlers in the Vue instance.
     - hint use a param called inc and dec to pass in 1 or 10 accordingly

2. Get Mouse Cordinates
- create a div with the id of canvas. 
- in the Vue instance create data for x and y cordinates
- listen for the mousemove event and call an event listerner to udpate the x and y values
    - hint: you will need to pass the event object to the event listener to have access to the offset of x and y.