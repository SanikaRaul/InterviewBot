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
    var result=0;

    function sayHello(agent){
        agent.add("Hello folk,Should We begin with the Interview?")
    }
   
    function apti1(agent)
    {
     const temp=agent.parameters.number;
     if (temp==47)
     {
      result=result+1;
      console.log(result);
      agent.add("Okay Cool we are done with the first question your current score is noted!")
	 }
     agent.add("Okay Cool we are done with the first question your current is noted!")
     agent.add("So the second question is blah blah")
	}
    let intentMap = new Map();
    intentMap.set("Default Welcome Intent", sayHello)
    intentMap.set("Aptitude1", apti1)
    agent.handleRequest(intentMap)

}