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
var fresult=0;
var result=0;
const dialogflowFulfillment = (request, response) => {
    const agent = new WebhookClient({request, response})
    

    function sayHello(agent)
    {
        agent.add("Hello folk,Should We begin with the Interview?")
    }
   
    function apti1(agent)
    {
         const temp=agent.parameters.number;
         if (temp==47)
         {
          result=result+1;
         }
     
         agent.add("Okay Cool we are done with the first question your current score is noted!")

         agent.add("Okay so let us move on to the second question !!You are blindfolded and 10 coins are place in front of you on table. You are allowed to touch the coins, but can’t tell which way up they are by feel. You are told that there are 5 coins head up, and 5 coins tails up but not which ones are which.Can you make two piles of coins each with the same number of heads up? You can flip the coins any number of times. Please answer in Yes or No")
        
	}


    function apti2(agent)
    {
         const apt2=agent.parameters.apti2;
         if (apt2=='yes')
         {
          result=result+1;
	     }
     
         agent.add("Okay Cool we are done with the second question your current score is noted!")

         agent.add("Okay so let us move on to the third question !!Fresh fruit contains 68% water and dry fruit contains 20% water. How much dry fruit can be obtained from 100 kg of fresh fruits ?")
         agent.add(" Options are (A) 40 (B) 67 (C) 45 (D) 55")
 
	}


       function apti3(agent)
    {
         const apt3=agent.parameters.apti3;
         if (apt3==40)
         {
          result=result+1;
         }
         agent.add("Okay Cool we are done with the third question your current score is noted!")
         agent.add("Okay so let us move on to the forth question !! In the following question, one term in the number series is wrong. Find the wrong term.125, 126, 124, 127, 122, 128")

  
	}

        function apti4(agent)
    {
         const apt4=agent.parameters.apti4;
         if (apt4==122)
         {
          result=result+1;
         }
          agent.add("Okay Cool we are done with the forth question your current score is noted!")
          agent.add("Okay so let us move on to the fifth question !! ")
          agent.add(" All Lamels are Signots with buttons.No yellow Signots have buttons.No Lamels are yellow.If the first two statements are true, the third statement is True or False?")
	
   
	}

      function apti5(agent)
    {
         const apt5=agent.parameters.apti5;
         if (apt5=='True' || apt5=='true')
         {
          result=result+1;
         }
          agent.add("Okay Cool we are done with the fifth question your current score is noted!")
          agent.add("Okay so let us move on to the sixth question !! ")
          agent.add("What was the day on 15th august 1947?")
     
	}
     
    
     function apti6(agent)
    {
     
     const apt6=agent.parameters.apti6;
      if (apt6=='Friday' || apt6=='friday')
         {
          result=result+1;
         }

     var temp=parseInt((result/6)*100);

     console.log(temp)
     console.log(result)
     agent.add("Your Final score is "+temp)
     agent.add("So now you are done with the Aptitude section!!")
     if(temp<50)
     {
      agent.add("We are sorry to inform you that you didnt pass the aptitude section! Since your score is less than 50%")
      agent.add("We suggest you to practice more and attempt the aptitude section again!")
	 }
     else
     {
     agent.add("Congratulations You have scored more than 50% you are eligible  for the next round.Type 'Tech' to get started with the Technical Round")
	 }
    }
   

    let intentMap = new Map();
    intentMap.set("Default Welcome Intent", sayHello)
    intentMap.set("Aptitude1", apti1)
    intentMap.set("Aptitude2", apti2)
    intentMap.set("Aptitude3", apti3)
    intentMap.set("Aptitude4", apti4)
    intentMap.set("Aptitude5", apti5)
    intentMap.set("Aptitude6", apti6)
    agent.handleRequest(intentMap)

}