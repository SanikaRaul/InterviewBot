const express = require('express');
const bodyParser = require('body-parser');
const {WebhookClient} = require('dialogflow-fulfillment');
const app = express()
app.use(bodyParser.json())
const port = process.env.PORT || 5000




const request = require("request");
const cors = require("cors");
const path = require('path');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use(express.static(path.join(__dirname , 'frontend/front')));
//app.use("/", express.static(path.join(__dirname, 'dist/mean')));
app.post("/", function(req,res,body){
  data=req.body.firstName;
  console.log(data);
  res.end();

  })




const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./question.db');


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
global.globalString = "";
global.data="";


//Retrieving All Rows
db.all("SELECT question , options, answer FROM questions", (error, rows) => {
    globalString=rows;
});








/*
  db.get("SELECT question , options, answer FROM questions", (error, row) => {
         console.log(row.question +""+ row.options +""+ row.answer);
          globalString=row.question;
             });*/


             //nosql and SQL
             //unix os
             //datastructures low medium and difficult



const dialogflowFulfillment = (request, response) => {
    const agent = new WebhookClient({request, response})
    

    function sayHello(agent)
    {
        agent.add("Hello candidate!!Should We begin with the Interview?")
    }
   
    function apti1(agent)
    {
         const temp=agent.parameters.apt1;
        
         if (temp=='c' || temp=='C')
         {
          result=result+1;
         }
        
         agent.add("Okay Cool we are done with the first question your current score is noted!")
         agent.add("Aptitude Question 2")
         agent.add(`${globalString[0].question}`)
         agent.add(`${globalString[0].options}`)
          console.log(data)
         
         
       
	}


    function apti2(agent)
    {
         const apt2=agent.parameters.apti2;
         var ans2=globalString[0].answer;
        
         if (apt2==ans2)
         {
          result=result+1;
	     }
     
         agent.add("Okay Cool we are done with the second question your current score is noted!")
         agent.add("Aptitude Question 3")
         agent.add(`${globalString[1].question}`)
         
         agent.add(`${globalString[1].options}`)

         
 
	}


       function apti3(agent)
    {
         const apt3=agent.parameters.apti3;
         var ans3=globalString[1].answer;

         if (apt3==ans3)
         {
          result=result+1;
         }
         agent.add("Okay Cool we are done with the third question your current score is noted!")
         agent.add("Aptitude Question 4")
         agent.add(`${globalString[2].question}`)
         agent.add(`${globalString[2].options}`)
         
  
	}

        function apti4(agent)
    {
         const apt4=agent.parameters.apti4;
         var ans4=globalString[2].answer;
         if (apt4==ans4)
         {
          result=result+1;
         }
         agent.add("Okay Cool we are done with the forth question your current score is noted!")
         agent.add("Aptitude Question 5")
         agent.add(`${globalString[3].question}`)
         agent.add(`${globalString[3].options}`)
          
   
	}

      function apti5(agent)
    {
         const apt5=agent.parameters.apti5;
          var ans5=globalString[3].answer;

         if (apt5==ans5)
         {
          result=result+1;
         }
          agent.add("Okay Cool we are done with the fifth question your current score is noted!")
         agent.add("Aptitude Question 6")
         agent.add(`${globalString[4].question}`)
         agent.add(`${globalString[4].options}`)
          
     
	}
     
    
     function apti6(agent)
    {
     
     const apt6=agent.parameters.apti6;
     var ans6=globalString[4].answer;
      if (apt6==ans6)
         {
          result=result+1;
         }

         agent.add("Okay Cool we are done with the sixth question your current score is noted!")
         agent.add("Aptitude Question 7")
         agent.add(`${globalString[5].question}`)
         agent.add(`${globalString[5].options}`)

    }


    function apti7(agent)
    {
     
     const apt7=agent.parameters.apti7;
     var ans7=globalString[5].answer;
      if (apt7==ans7)
         {
          result=result+1;
         }

         agent.add("Okay Cool we are done with the seventh question your current score is noted!")
         agent.add("Aptitude Question 8")
         agent.add(`${globalString[6].question}`)
         agent.add(`${globalString[6].options}`)

    }


    
    function apti8(agent)
    {
     
     const apt8=agent.parameters.apti8;
     var ans8=globalString[6].answer;
      if (apt8==ans8)
         {
          result=result+1;
         }

         agent.add("Okay Cool we are done with the eightth question your current score is noted!")
         agent.add("Aptitude Question 9")
         agent.add(`${globalString[7].question}`)
         agent.add(`${globalString[7].options}`)

    }

       
    function apti9(agent)
    {
     
     const apt9=agent.parameters.apti9;
     var ans9=globalString[7].answer;
      if (apt9==ans9)
         {
          result=result+1;
         }

         agent.add("Okay Cool we are done with the nineth question your current score is noted!")



         
     var temp=parseInt((result/9)*100);
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
       
    }


    


         
    


   function tech1(agent)
   {
       lchoice=agent.parameters.tech1;
       lchoice = lchoice.toUpperCase();
       agent.add(`Okay cool!! Great to hear that you are interested in ${lchoice} .Let me ask you few questions related to ${lchoice}`)
       if (lchoice=="PYTHON")
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
         if (lchoice=="JAVA")
       {
        agent.add("In which process, a local variable has the same name as one of the instance variables?")
        agent.add(` A) Serialization
                    B) Variable Shadowing
                    C) Abstraction
                    D) Multi-threading`)
	   }
       
   }



   function tech2(agent)
   {
       const tech2=agent.parameters.tech2;
       tech2 = tech2.toUpperCase();
       agent.add("We are done with the first question!! Let us move on to the second question")
       if (tech2 == "A" && lchoice=="PYTHON")
       {
        techresult=techresult+1
	   }
        if (tech2 == "B" && lchoice=="JAVA" )
       {
        techresult=techresult+1
	   }
       
        if (lchoice=="PYTHON")
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
         if (lchoice=="JAVA")
       {
   
        agent.add(`Given,

                    int values[ ] = {1,2,3,4,5,6,7,8,9,10};  
                    for(int i=0;i< Y; ++i)  
                    System.out.println(values[i]);  
                    Find the value of value[i]?
`)
 agent.add(`A) 10
            B) 11
            C) 15
            D) None of the above`)
	   }
       
   }


   function tech3(agent)
   {
       const tech3=agent.parameters.tech3;
       tech3 = tech3.toUpperCase();
       agent.add("We are done with the second question!! Let us move on to the third question")
       if (tech3 == "C" && lchoice=="PYTHON")
       {
        techresult=techresult+1
	   }
        if (tech3 == "D"  && lchoice=="JAVA")
       {
        techresult=techresult+1
	   }
       
        if (lchoice=="PYTHON")
       {
        agent.add(" What will be the output of the following Python code?")
        agent.add(`x = [[0], [1]]
                   print(len(' '.join(list(map(str, x)))))`)
        agent.add(` A) 2
                    B) 3
                    C) 7
                    D) 8`)
	   }
         if (lchoice=="JAVA")
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
       tech4 = tech4.toUpperCase();
       agent.add("We are done with the third question!! Let us move on to the forth question")
       if (tech4 == "C" && lchoice=="PYTHON")
       {
        techresult=techresult+1
	   }
       if (tech4 == "A" && lchoice=="JAVA")
       {
        techresult=techresult+1
	   }
       
        if (lchoice=="PYTHON")
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
         if (lchoice=="JAVA")
       {
    
        agent.add("Multiple inheritances is not supported in case of class but it is supported in case of interface.")
        agent.add(`A ) True  
                   B ) False?`)
	   }
       
   }





    function tech5(agent)
   {
       const tech5=agent.parameters.tech5;
       tech5 = tech5.toUpperCase();
       agent.add("We are done with the forth question!! Let us move on to the fifth question")
       if (tech5 == "A" && lchoice=="PYTHON")
       {
        techresult=techresult+1
	   }
       if (tech5 == "A" && lchoice=="JAVA")
       {
        techresult=techresult+1
	   }
       
        if (lchoice=="PYTHON")
       {
        agent.add(`How many keyword arguments can be passed to a function in a single function call?`)
        agent.add(` a) zero
                    b) zero or more
                    c) one
                    d) one or more`)
	   }
         if (lchoice=="JAVA")
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
       tech6 = tech6.toUpperCase();
       agent.add("We are done with the fifth question!! ")
       if (tech6 == "B" && lchoice=="PYTHON")
       {
        techresult=techresult+1
	   }
       if (tech6 == "D" && lchoice=="PYTHON")
       {
        techresult=techresult+1
	   }


       agent.add("It was nice to inteview you regarding the language you are comfortable with!")

     var temp=parseInt((techresult/6)*100);
     var n = temp.toString();
     console.log(n)
     console.log(techresult)
     agent.add(`Your Final score is ${n}`) 
 
     if(temp<50)
     {
      agent.add("We are sorry to inform you that you didnt pass the technical section! Since your score is less than 50%")
      agent.add("We suggest you to practice more and attempt the aptitude section again!")
	 }
     else
     {
     agent.add("Congratulations You have scored more than 50% you are eligible  for the next round.Type 'Unix' to get started with the Unix")
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
    intentMap.set("Aptitude7", apti7)
    intentMap.set("Aptitude8", apti8)
    intentMap.set("Aptitude9", apti9)
    


     intentMap.set("Technical1", tech1)
     intentMap.set("Technical2", tech2)
     intentMap.set("Technical3", tech3)
     intentMap.set("Technical4", tech4)
     intentMap.set("Technical5", tech5)
     intentMap.set("Technical6", tech6)
     
     
     
    agent.handleRequest(intentMap)

}
