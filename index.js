const express = require('express');
const bodyParser = require('body-parser');
const {WebhookClient} = require('dialogflow-fulfillment');
const app = express()
app.use(bodyParser.json())
const port = process.env.PORT || 3000
app.post('/dialogflow-fulfillment', (request, response) => {
     dialogflowFulfillment(request, response)
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})

const dialogflowFulfillment = (request, response) => {
    const agent = new WebhookClient({request, response})

    function sayHello(agent){
        agent.add("Hello, this response is coming from Heroku")
    }
    function HR(agent)
    {
     agent.add("Okay so let us begin with the HR interview..Should we start with it? say yes or no")
	}

    let intentMap = new Map();
    intentMap.set("Default Welcome Intent", sayHello)
     intentMap.set("HR", HR)
    agent.handleRequest(intentMap)

}