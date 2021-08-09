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


const sqlite3 = require('sqlite3');


const db = new sqlite3.Database('./question.db');



app.post('/dialogflow-fulfillment', (request, response) => {

     dialogflowFulfillment(request, response)
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})

global.data="";

app.post("/", function(req,res,body)
{
  data=req.body.firstName;
  console.log(data);
  res.end();
  })

//global.fresult=0;
global.result=0;
//global.lchoice="";
//global.langresult=0;
global.dbresult=0;
global.shellresult=0;
global.dsresult=0;
global.r=[];
global.f=[];



global.globalString = "";
global.mongoString = "";
global.mysqlString = "";
global.unixString ="";
global.easyString ="";
global.mediumString ="";
global.difficultString ="";


//Accessing everything from database

//Retrieving All Rows of Aptitude

 db.serialize(() => {
                db.all("SELECT question , options, answer FROM questions", (error, rows) => {
    console.log("Error");
    console.log(error);
    globalString=rows;
    console.log("Rows are");
    console.log(rows);
                    });
            });



//Retrieving All Rows database Mongodb
db.all("SELECT question , options, answer FROM Mongodb", (error, rows) => {
   mongoString =rows;
   console.log("Error for mongo");
    console.log(error);
});
//Retrieving All Rows database Mysql
db.all("SELECT question , options, answer FROM Mysql", (error, rows) => {
   mysqlString =rows;
});

//Retrieving All Rows Unix
db.all("SELECT question , options, answer FROM Shellscript", (error, rows) => {
   unixString =rows;
});

//Retrieving All Rows easy ds
db.all("SELECT question , options, answer FROM DSeasy", (error, rows) => {
   easyString =rows;
});
//Retrieving All Rows medium ds
db.all("SELECT question , options, answer FROM DSmedium", (error, rows) => {
   mediumString =rows;
});

//Retrieving All Rows difficult ds
db.all("SELECT question , options, answer FROM DSdifficult", (error, rows) => {
   difficultString =rows;
});


/*
  db.get("SELECT question , options, answer FROM questions", (error, row) => {
         console.log(row.question +""+ row.options +""+ row.answer);
          globalString=row.question;
             });*/


             //nosql and SQL
             //unix os
             //datastructures low medium and difficult

console.log(data)
console.log("The database is");
console.log(globalString);
const dialogflowFulfillment = (request, response) => {
    const agent = new WebhookClient({request, response})
    

    function sayHello(agent)
    {
        agent.add(`Hello ${data.firstName}!!Should We begin with the Interview?`)
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
         console.log("The data is")
         console.log(data); 
     
         
       
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

     agent.add(`Your Final score is ${n}`) 
     r.push(n)
     console.log(r)
     agent.add("So now you are done with the Aptitude section!!")
     if(temp<50)
     {
      agent.add("We are sorry to inform you that you didnt pass the aptitude section! Since your score is less than 50%")
      agent.add("We suggest you to practice more and attempt the aptitude section again!")
	 }
     else
     {
     agent.add("Congratulations You have scored more than 50% you are eligible  for the Technical round. We will start with the Database section!! ")
	 agent.add(`So we got to know that you are more interested in ${data.db}.So we will continue with asking questions based on ${data.db}`)
     agent.add("Type db to get started with Database Section")
     }
       
    }
    //****************************************************************************
    // Database Section
    function database1(agent)
    {

       agent.add("Database Question 1")
          if (data.db=="sql")
          {
       
         console.log(data.db)
         console.log(mysqlString[0].question)
         agent.add(`${mysqlString[0].question}`)
         agent.add(`${mysqlString[0].options}`)
         }
         else
         {
         
    
         agent.add(`${mongoString[0].question}`)
         agent.add(`${mongoString[0].options}`)
		 }
    }

    

    function database2(agent)
    {

       const db1=agent.parameters.db1ans;
       agent.add("Database Question 2")
       

          if (data.db=="sql")
          {
          var ans1=mysqlString[0].answer;
          if (db1==ans1)
         {
          dbresult=dbresult+1;
         }
        
         agent.add(`${mysqlString[1].question}`)
         agent.add(`${mysqlString[1].options}`)
         }
         else
         {
          var ans1=mongoString[0].answer;
          if (db1==ans1)
         {
          dbresult=dbresult+1;
         }
         
         agent.add(`${mongoString[1].question}`)
         agent.add(`${mongoString[1].options}`)
		 }
    }



     function database3(agent)
    {

       const db2=agent.parameters.db2ans;
          agent.add("Database Question 3")
          if (data.db=="sql")
          {
          var ans2=mysqlString[1].answer;
          if (db2==ans2)
         {
          dbresult=dbresult+1;
         }
      
         agent.add(`${mysqlString[2].question}`)
         agent.add(`${mysqlString[2].options}`)
         }
         else
         {
          var ans2=mongoString[1].answer;
          if (db2==ans2)
         {
          dbresult=dbresult+1;
         }

         agent.add(`${mongoString[2].question}`)
         agent.add(`${mongoString[2].options}`)
		 }
    }



    function database4(agent)
    {

       const db3=agent.parameters.db3ans;
          agent.add("Database Question 4")
       
          if (data.db=="sql")
          {
          var ans3=mysqlString[2].answer;
          if (db3==ans3)
         {
          dbresult=dbresult+1;
         }
     
         agent.add(`${mysqlString[3].question}`)
         agent.add(`${mysqlString[3].options}`)
         }
         else
         {
          var ans3=mongoString[2].answer;
          if (db3==ans3)
         {
          dbresult=dbresult+1;
         }
         
         agent.add(`${mongoString[3].question}`)
         agent.add(`${mongoString[3].options}`)
		 }
    }


    function database5(agent)
    {

       const db4=agent.parameters.db4ans;
       agent.add("Database Question 5")
       
          if (data.db=="sql")
          {
          var ans4=mysqlString[3].answer;
          if (db4==ans4)
         {
          dbresult=dbresult+1;
         }
   
         agent.add(`${mysqlString[4].question}`)
         agent.add(`${mysqlString[4].options}`)
         }
         else
         {
          var ans4=mongoString[3].answer;
          if (db4==ans4)
         {
          dbresult=dbresult+1;
         }
         agent.add(`${mongoString[4].question}`)
         agent.add(`${mongoString[4].options}`)
		 }
    }



    function database6(agent)
    {

       const db5=agent.parameters.db5ans;
      agent.add("We are done with the database section")
       
          if (data.db=="sql")
      { 
          var ans5=mysqlString[4].answer;
          if (db5==ans5)
         {
          dbresult=dbresult+1;
         }
         
         
         var temp=parseInt((dbresult/5)*100);
         var a = temp.toString();
       
         agent.add(`Your Final score for database section is ${a}`) 
         r.push(a)
         console.log(r)
     
     }
         else
         {
          var ans5=mongoString[4].answer;
          if (db5==ans5)
         {
          dbresult=dbresult+1;
         }

         var temp=parseInt((dbresult/5)*100);
         var b = temp.toString();
        
         agent.add(`Your Final score for database section is ${b}`) 
        
        r.push(b)
        console.log(r)
		 }
     
         if (data.shell=="yes")
         {
         agent.add("Glad to hear that you are interested in having a Unix round as well as a part of this interview process")
         agent.add("Without wasting time Lets begin with Unix Round")
         agent.add("Type 'unix' to get started")
		 }
         else
         {
         agent.add("We heard that you are not interested in having a Unix round as a part of this interview process")
         agent.add("Nonetheless you can always come at this place when you feel comfortable to take up this section")
         agent.add("So lets begin with the 'ds' section by typing DS")
        
		 }

    }


    
    //***************************************************************
    // Unix Section 

    function uni1(agent)
    {    
         agent.add("Unix Question 1")
         agent.add(`${unixString[0].question}`)
         agent.add(`${unixString[0].options}`)
          
	}

      function uni2(agent)
    {    
        
         const uans1=agent.parameters.u1;
         var ans1=unixString[0].answer;
        
         if (uans1==ans1)
         {
          shellresult=shellresult+1;
	     }
         agent.add("Unix Question 2")
         agent.add(`${unixString[1].question}`)
         agent.add(`${unixString[1].options}`)

          
	}
      function uni3(agent)
    {
    
         const uans2=agent.parameters.u2;
         var ans2=unixString[1].answer;
        
         if (uans2==ans2)
         {
          shellresult=shellresult+1;
	     }
         agent.add("Unix Question 3")
         agent.add(`${unixString[2].question}`)
         agent.add(`${unixString[2].options}`)
	}

        function uni4(agent)
    {
    
         const uans3=agent.parameters.u3;
         var ans3=unixString[2].answer;
        
         if (uans3==ans3)
         {
          shellresult=shellresult+1;
	     }
         var temp=parseInt((shellresult/3)*100);
         var c = temp.toString();
         r.push(c)
       console.log(r)
         agent.add(`Your Final score for unix section is ${c}`) 
         agent.add(`Hello ${data.dslevel} Programmer`)
         agent.add(`As you think you are a ${data.dslevel} when it comes to Datastructures.We will ask you questions accordingly `)
         agent.add("Type 'ds' to get started with the Datastructures Round")
        
	}
    // ********************************** Datastructures*********************************


    function Datastructure1(agent)
    {    
      agent.add("Welcome to the DS Section")
         if(data.dslevel=="beginner")
         {
            agent.add("DS easy Round Question 1")
            agent.add(`${easyString[0].question}`)
            agent.add(`${easyString[0].options}`)
		 }
        
         else if(data.dslevel=="intermediate")
         {
            agent.add("DS intermediate Round Question 1")
            agent.add(`${mediumString[0].question}`)
            agent.add(`${mediumString[0].options}`)
		 }
         else
         {
         agent.add("DS Expert Round Question 1")
            agent.add(`${difficultString[0].question}`)
            agent.add(`${difficultString[0].options}`)
		 }
        
	}


    
    function Datastructure2(agent)

    {    

         
         const ds1=agent.parameters.dsd1;
         
         agent.add("Current Score is noted")
         if(data.dslevel=="beginner")
         {  var ans1=easyString[0].answer;
            if(ds1==ans1)
            {
            dsresult=dsresult+1        
			}
            agent.add("DS easy Round Question 2")
            agent.add(`${easyString[1].question}`)
            agent.add(`${easyString[1].options}`)
		 }
        
         else if(data.dslevel=="intermediate")
         {  
            var ans1=mediumString[0].answer;
            if(ds1==ans1)
            {
            dsresult=dsresult+1        
			}
            agent.add("DS intermediate Round Question 2")
            agent.add(`${mediumString[1].question}`)
            agent.add(`${mediumString[1].options}`)
		 }
         else
         {
          var ans1=difficultString[0].answer; 
            if(ds1==ans1)
            {
            dsresult=dsresult+1        
			}
           agent.add("DS Expert Round Question 2")
            agent.add(`${difficultString[1].question}`)
            agent.add(`${difficultString[1].options}`)
		 }
        
	}








    
    function Datastructure3(agent)

    {    

         
         const ds2=agent.parameters.dsd2;
         
         agent.add("Current Score is noted")
         if(data.dslevel=="beginner")
         {  var ans2=easyString[1].answer;
            if(ds2==ans2)
            {
            dsresult=dsresult+1        
			}
            agent.add("DS easy Round Question 3")
            agent.add(`${easyString[2].question}`)
            agent.add(`${easyString[2].options}`)
		 }
        
         else if(data.dslevel=="intermediate")
         {  
            var ans2=mediumString[1].answer;
            if(ds2==ans2)
            {
            dsresult=dsresult+1        
			}
            agent.add("DS intermediate Round Question 3")
            agent.add(`${mediumString[2].question}`)
            agent.add(`${mediumString[2].options}`)
		 }
         else
         {
          var ans2=difficultString[1].answer; 
            if(ds2==ans2)
            {
            dsresult=dsresult+1        
			}
           agent.add("DS Expert Round Question 3")
            agent.add(`${difficultString[2].question}`)
            agent.add(`${difficultString[2].options}`)
		 }
        
	}






      
    function Datastructure4(agent)

    {    

         
         const ds3=agent.parameters.dsd3;
         
         agent.add("Current Score is noted")
         if(data.dslevel=="beginner")
         {  var ans2=easyString[2].answer;
            if(ds3==ans3)
            {
            dsresult=dsresult+1        
			}
           
		 }
        
         else if(data.dslevel=="intermediate")
         {  
            var ans3=mediumString[2].answer;
            if(ds3==ans3)
            {
            dsresult=dsresult+1        
			}
          
		 }
         else
         {
          var ans3=difficultString[2].answer; 
            if(ds3==ans3)
            {
            dsresult=dsresult+1        
			}
         
		 }

         var temp=parseInt((dsresult/3)*100);
         var d = temp.toString();
       
         agent.add(`Your Final score for database section is ${d}`)
         agent.add("Type HR to get started with HR round") 
         r.push(d)
        console.log(r)
	}

































         
    
/*

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
       console.log(tech2)
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

   */










      

  

  
    






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


       intentMap.set("db1",database1)
       intentMap.set("db2", database2)
       intentMap.set("db3", database3)
       intentMap.set("db4", database4)
       intentMap.set("db5", database5)
       intentMap.set("db6", database6)

        intentMap.set("unix1",uni1)
        intentMap.set("unix2",uni2)
        intentMap.set("unix3",uni3)
        intentMap.set("unix4",uni4)

       intentMap.set("DS1",Datastructure1)
       intentMap.set("DS2",Datastructure2)
       intentMap.set("DS3",Datastructure3)
       intentMap.set("DS4",Datastructure4)
        

    
    /*

     intentMap.set("Technical1", tech1)
     intentMap.set("Technical2", tech2)
     intentMap.set("Technical3", tech3)
     intentMap.set("Technical4", tech4)
     intentMap.set("Technical5", tech5)
     intentMap.set("Technical6", tech6)
    */ 
     
     
    agent.handleRequest(intentMap)
   f=[result,dbresult,dsresult,shellresult]
   console.log("f is")
   console.log(f)
    console.log("r is")
  console.log(r)
}

app.get("/",function(req,res,body){
    console.log(f);
    console.log(r);
    res.json(r);
})
