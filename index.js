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
var lchoice="";
var techresult=0;
const dialogflowFulfillment = (request, response) => {
    const agent = new WebhookClient({request, response})
    

    function sayHello(agent)
    {
        agent.add("Hello candidate!!Should We begin with the Interview?")
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
     var n = temp.toString();
     console.log(n)
     console.log(result)
     agent.add(`Your Final score is ${n}`) 
 
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
     result=0
    }


   function tech1(agent)
   {
       lchoice=agent.parameters.tech1;
       agent.add(`Okay cool!! Great to hear that you are interested in ${lchoice} .Let me ask you few questions related to ${lchoice}`)
       if (lchoice=="Python" || lchoice=="python" ||lchoice=="PYTHON")
       {
        agent.add("What will be the output of the following Python code snippet?")
        agent.add(`def example(a):
                            a = a + '2'
                            a = a*2
                            return a
                   example("hello")`)
                   agent.add(`  a) indentation Error
                                b) cannot perform mathematical operation on strings
                                c) hello2
                                d) hello2hello2`)
	   }
         if (lchoice=="Java" || lchoice=="java" ||lchoice=="JAVA")
       {
        agent.add("In which process, a local variable has the same name as one of the instance variables?")
        agent.add(` Serialization
                    Variable Shadowing
                    Abstraction
                    Multi-threading`)
	   }
       
   }



   function tech2(agent)
   {
       const tech2=agent.parameters.tech2;
       agent.add("We are done with the first question!! Let us move on to the second question")
       if (tech2 == "indentation Error")
       {
        techresult=techresult+1
	   }
        if (tech2 == "Variable Shadowing")
       {
        techresult=techresult+1
	   }
       
        if (lchoice=="Python" || lchoice=="python" ||lchoice=="PYTHON")
       {
        agent.add(" What will be the output of the following Python code?")
        agent.add(`x = 'abcd'
                   for i in range(x):
                        print(i)`)
        agent.add(` a) a b c d
                    b) 0 1 2 3
                    c) error
                    d) none of the mentioned`)
	   }
         if (lchoice=="Java" || lchoice=="java" ||lchoice=="JAVA")
       {
   
        agent.add(`Given,

                    int values[ ] = {1,2,3,4,5,6,7,8,9,10};  
                    for(int i=0;i< Y; ++i)  
                    System.out.println(values[i]);  
                    Find the value of value[i]?
`)
 agent.add(`10
            11
            15
            None of the above`)
	   }
       
   }


   function tech3(agent)
   {
       const tech3=agent.parameters.tech3;
       agent.add("We are done with the second question!! Let us move on to the third question")
       if (tech3 == "Error" ||  tech3 == "error")
       {
        techresult=techresult+1
	   }
        if (tech3 == "None of the above" )
       {
        techresult=techresult+1
	   }
       
        if (lchoice=="Python" || lchoice=="python" ||lchoice=="PYTHON")
       {
        agent.add(" What will be the output of the following Python code?")
        agent.add(`x = [[0], [1]]
                   print(len(' '.join(list(map(str, x)))))`)
        agent.add(` a) 2
                    b) 3
                    c) 7
                    d) 8`)
	   }
         if (lchoice=="Java" || lchoice=="java" ||lchoice=="JAVA")
       {
       
        agent.add(` Predict the output of following Java Programs.



                public class Calculator 
                { 
                    int num = 100; 
                    public void calc(int num)  { this.num = num * 10;  } 
                    public void printNum()     { System.out.println(num); } 
  
                    public static void main(String[] args) 
                    { 
                        Calculator obj = new Calculator(); 
                        obj.calc(2); 
                        obj.printNum(); 
                    } 
                } `)

         agent.add(`Options :
                            A) 20
                            B) 100
                            C) 1000
                            D) 2`)
	   }
       
   }




    function tech4(agent)
   {
       const tech4=agent.parameters.tech4;
       agent.add("We are done with the third question!! Let us move on to the forth question")
       if (tech4 == 7 ||  tech4 == 7)
       {
        techresult=techresult+1
	   }
       if (tech4 == 20)
       {
        techresult=techresult+1
	   }
       
        if (lchoice=="Python" || lchoice=="python" ||lchoice=="PYTHON")
       {
        agent.add(" What will be the output of the following Python code?")
        agent.add(`def func(x, ans):
                           if(x==0):
                              return 0
                           else: 
                              return func(x-1, x+ans) 
                   print(func(2,0))`)
        agent.add(` a) 0
                    b) 1
                    c) 2
                    d) 3`)
	   }
         if (lchoice=="Java" || lchoice=="java" ||lchoice=="JAVA")
       {
    
        agent.add("Multiple inheritances is not supported in case of class but it is supported in case of interface.")
        agent.add("True or False?")
	   }
       
   }





    function tech5(agent)
   {
       const tech5=agent.parameters.tech5;
       agent.add("We are done with the forth question!! Let us move on to the fifth question")
       if (tech5 == 0)
       {
        techresult=techresult+1
	   }
       if (tech5 == "True" || tech5 == "true")
       {
        techresult=techresult+1
	   }
       
        if (lchoice=="Python" || lchoice=="python" ||lchoice=="PYTHON")
       {
        agent.add(`How many keyword arguments can be passed to a function in a single function call?`)
        agent.add(` a) zero
                    b) zero or more
                    c) one
                    d) one or more`)
	   }
         if (lchoice=="Java" || lchoice=="java" ||lchoice=="JAVA")
       {
        agent.add("What is it called if an object has its own lifecycle and there is no owner?")
        agent.add(`a) Aggregation
                    b) Composition
                    c) Encapsulation
                    d) Association`)
	   }
       
   }


   function tech6(agent)
   {
       const tech6=agent.parameters.tech6;
       agent.add("We are done with the fifth question!! ")
       if (tech6 == "zero or more")
       {
        techresult=techresult+1
	   }
       if (tech6 == "Association" ||  tech6 == "association")
       {
        techresult=techresult+1
	   }


       agent.add("It was nice to inteview you regarding the language you are comfortable with!")
       agent.add("Now let me ask you few of the SQL related questions!")
       agent.add("Q)Which is not DDL (data definition language) operation")
       agent.add("A.Renaming a table\nB.SQL create table\nC.Add a column to an existing table\nD.Update data into a table in SQL database")



       
   }












   
   function tech7(agent)
   {
       const tech7=agent.parameters.tech7;
       agent.add("We are done with the sixth question!! Let us move on to the seventh question")
      
       if (tech7 == "D" || tech7=="d")
       {
        techresult=techresult+1
	   }
      
       agent.add("Q) Which statement is wrong about PRIMARY KEY constraint in SQL?")
       agent.add("A.The PRIMARY KEY uniquely identifies each record in a SQL database table\nB.Primary key can be made based on multiple columns\nC.Primary key must be made of any single columns\nD.Primary keys must contain UNIQUE values.")
  
   }

   
   function tech8(agent)
   {
       const tech8=agent.parameters.tech8;
       agent.add("We are done with the seventh question!! Let us move on to the eightth question")
      
       if (tech8 == "C" || tech8=="c")
       {
        techresult=techresult+1
	   }
      
       agent.add("Q)  SQL Select statement to retrieve unique record from a table is")
       agent.add("A.SELECT DISTINCT\nB.SELECT UNIQUE\nC.SELECT UNION\nD.SELECT UNION ALL")
  
   }

      
   function tech9(agent)
   {
       const tech9=agent.parameters.tech9;
       agent.add("We are done with the eighth question!! ")
      
       if (tech9 == "A" || tech9=="a")
       {
        techresult=techresult+1
	   }
      
     var tem=parseInt((techresult/8)*100);
     var t = tem.toString();
     console.log(t)
     console.log(techresult)
     agent.add(`Your Final score is ${t}`)
 
     agent.add("So now you are done with the Technical Round!!")
     if(tem<50)
     {
      agent.add("We are sorry to inform you that you didnt pass the Technical Round! Since your score is less than 50%")
      agent.add("We suggest you to practice more and attempt the Technical Section again!")
      techresult=0 
	 }
     else
     {
     agent.add("Congratulations You have scored more than 50% you are eligible  for the next round.Type 'HR' to get started with the HR Round")
     techresult=0 
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


     intentMap.set("Technical1", tech1)
     intentMap.set("Technical2", tech2)
     intentMap.set("Technical3", tech3)
     intentMap.set("Technical4", tech4)
     intentMap.set("Technical5", tech5)
     intentMap.set("Technical6", tech6)
     intentMap.set("Technical7", tech7)
     intentMap.set("Technical8", tech8)
     intentMap.set("Technical9", tech9)
     
    agent.handleRequest(intentMap)

}
