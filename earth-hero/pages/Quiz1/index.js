import {useState} from 'react';
// import './quiz.css';
import Router from 'next/router';
import Quiz from '../../comps/Quiz';

import {data, ChangeData} from '../../data';

var ind = 0;


const Quiz1 = () =>{
    var category = "";
    var quizQuestions = [
     {
        quizName: "",
        quizNumber: "",
        quizQuestion: "",
        quizChoice1: "",
        quizChoice2: "",
        quizChoice3: "",
        quizChoice4: ""
     }
 ];
    
    if(data.quiz === "wildfiresquiz"){
        category = "Wildfires";
        quizQuestions = [
            {
                quizName:"Question 1",
                quizNumber:"1/5",
                quizQuestion:"What kind of environments are very likely to have wildfires start?",
                quizChoice1:"Wet and rainy environments",
                quizChoice2:"Dry environments",
                quizChoice3:"Snowy and cold environments",
                quizChoice4:"",
                answer:2
            },
            {
                quizName:"Question 2",
                quizNumber:"2/5",
                quizQuestion:"Which of the following is a problem caused by wildfires?",
                quizChoice1:"Flooding",
                quizChoice2:"Respiratory problems",
                quizChoice3:"Cold temperatures",
                quizChoice4:"Tsunamis",
                answer:2
            },
            {
                quizName:"Question 3",
                quizNumber:"3/5",
                quizQuestion:"What is one good thing that wildfires help with?",
                quizChoice1:"They kill off the surplus amount of wildlife",
                quizChoice2:"They can burn old houses down",
                quizChoice3:"They kill bad diseases and insects that harm trees",
                quizChoice4:"They help produce heat in cold areas",
                answer:3
            },
            {
                quizName:"Question 4",
                quizNumber:"4/5",
                quizQuestion:"True or false: Wildfires can start from natural disasters.",
                quizChoice1:"True",
                quizChoice2:"False",
                quizChoice3:"",
                quizChoice4:"",
                answer:1
            },
            // {
            //     quizName:"Question 5",
            //     quizNumber:"5/5",
            //     quizQuestion:"Which of the following is a way you can help prevent wildfires?",
            //     quizChoice1:"Not extinguishing your fire",
            //     quizChoice2:"Starting a fire when it's windy",
            //     quizChoice3:"Never leaving your fire unattended",
            //     quizChoice4:"Thowing away lit matches",
            //     answer:3
            // }
        ]
    }else if(data.quiz === "watershortagequiz"){
        category = "Water Shortage";
        quizQuestions = [
            {
                quizName: "Question 1",
                quizNumber: "1/5",
                quizQuestion: "True or false: Dry environments tend to suffer from water shortage more than wet environments.",
                quizChoice1: "True",
                quizChoice2: "False",
                quizChoice3: "",
                quizChoice4: "",
                answer:1
            },
            {
                quizName: "Question 2",
                quizNumber : "2/5",
                quizQuestion : "What is the reason why some water found in some countries can be dangerous to drink?",
                quizChoice1: "The water is too cold",
                quizChoice2: "The water is polluted",
                quizChoice3: "The water has minerals in it",
                quizChoice4: "",
                answer:2
            },
            {
                quizName: "Question 3",
                quizNumber: "3/5",
                quizQuestion: "If most of the Earth is made of water, how come we can’t use all of it for drinking?",
                quizChoice1: "Most of Earth's water is too expensive",
                quizChoice2: "Most of Earth's water is too far away",
                quizChoice3: "Most of Earth's water has bugs in it",
                quizChoice4: "Most of Earth's water is salt water",
                answer:4
            },
            {
                quizName: "Question 4",
                quizNumber: "4/5",
                quizQuestion: "What is one way you can help with the issue of water shortage?",
                quizChoice1: "Donate clean water to charities and families in need",
                quizChoice2: "Keep the sink running often",
                quizChoice3: "Take longer showers",
                quizChoice4: "",
                answer:1
            },
            // {
            //     quizName: "Question 5",
            //     quizNumber: "5/5",
            //     quizQuestion: "True or false: People who experience water shortage in their area may experience dehydration and disease.",
            //     quizChoice1: "True",
            //     quizChoice2: "False",
            //     quizChoice3: "True",
            //     quizChoice4: "False",
            //     answer:1
            // }
        ]
    }else if(data.quiz === "faminequiz"){
        category = "Famine";
        quizQuestions = [
            {
                quizName: "Question 1",
                quizNumber: "1/4",
                quizQuestion: "What is a famine?",
                quizChoice1: "A surplus amount of food in an area",
                quizChoice2: "A lack of water in an area",
                quizChoice3: "An extreme shortage of food in an area",
                quizChoice4: "An area that is very dry",
                answer:3
            },
            {
                quizName: "Question 2",
                quizNumber: "2/4",
                quizQuestion: "What does famine quite often lead to?",
                quizChoice1: "Floods",
                quizChoice2: "Droughts",
                quizChoice3: "Starvation",
                quizChoice4: "A natural disaster",
                answer:3
            },
            {
                quizName: "Question 3",
                quizNumber: "3/4",
                quizQuestion: "True or false: Famine can be caused by crop failure.",
                quizChoice1: "True",
                quizChoice2: "False",
                quizChoice3: "",
                quizChoice4: "",
                answer:1
            },
            {
                quizName: "Question 4",
                quizNumber: "4/4",
                quizQuestion: "True or false: Famine can lead to increase in intelligence.",
                quizChoice1: "True",
                quizChoice2: "False",
                quizChoice3: "",
                quizChoice4: "",
                answer:2
            }
        ]
    }else if(data.quiz === 'wildlifequiz'){
        category = "Wildlife";
        quizQuestions = [
            {
                quizName: "Question 1",
                quizNumber: "1/4",
                quizQuestion: "How do droughts affect the wildlife?",
                quizChoice1: "They help keep wildlife healthy",
                quizChoice2: "They can cause diseases that harm the wildlife",
                quizChoice3: "Droughts allow the wildlife to live their best lives",
                quizChoice4: "They provide more water that helps the wildlife",
                answer:2
            },
            {
                quizName: "Question 2",
                quizNumber: "2/4",
                quizQuestion: "What do droughts lead to?",
                quizChoice1: "Diseases",
                quizChoice2: "Wildfires",
                quizChoice3: "Decrease of wildlife",
                quizChoice4: "All of the above",
                answer:4
            },
            {
                quizName: "Question 3",
                quizNumber: "3/4",
                quizQuestion: "True or false: Droughts are increasing the population of wildlife.",
                quizChoice1: "True",
                quizChoice2: "False",
                quizChoice3: "",
                quizChoice4: "",
                answer:2
            },
            {
                quizName: "Question 4",
                quizNumber: "4/4",
                quizQuestion: "True or false: You can help stop droughts by conserving water.",
                quizChoice1: "True",
                quizChoice2: "False",
                quizChoice3: "",
                quizChoice4: "",
                answer:2
            }
        ]
    }else if(data.quiz === "icebergmeltingquiz"){
        category = "Iceberg Melting";
        quizQuestions = [
            {
                quizName: "Question 1",
                quizNumber: "1/4",
                quizQuestion: "True or False: Polar bears are suffering because of the icebergs melting.",
                quizChoice1: "True",
                quizChoice2: "False",
                quizChoice3: "",
                quizChoice4: "",
                answer:1
            },
            {
                quizName: "Question 2",
                quizNumber: "2/4",
                quizQuestion: "What leads to the icebergs melting?",
                quizChoice1: "Droughts",
                quizChoice2: "Polar bears",
                quizChoice3: "A rise in temperatures",
                quizChoice4: "Asteroids",
                answer: 3
            },
            {
                quizName: "Question 3",
                quizNumber: "3/4",
                quizQuestion: "True or False: Icebergs have been decreasing in size over several years.",
                quizChoice1: "True",
                quizChoice2: "False",
                quizChoice3: "",
                quizChoice4: "",
                answer:1
            },
            {
                quizName: "Question 4",
                quizNumber: "4/4",
                quizQuestion: "True or False: Icebergs cause an increase in sea levels.",
                quizChoice1: "True",
                quizChoice2: "False",
                quizChoice3: "",
                quizChoice4: "",
                answer:1
            }
        ]
    }else if(data.quiz === "citiesquiz"){
        category = "Cities";
        quizQuestions = [
            {
                quizName: "Question 1",
                quizNumber: "1/4",
                quizQuestion: "Floods are caused by:",
                quizChoice1: "Icebergs melting",
                quizChoice2: "Clogged drains",
                quizChoice3: "Heavy precipitation",
                quizChoice4: "All of the above",
                answer:4
            },
            {
                quizName: "Question 2",
                quizNumber: "2/4",
                quizQuestion: "True or False: Floods cause people to move out of their homes.",
                quizChoice1: "True",
                quizChoice2: "False",
                quizChoice3: "",
                quizChoice4: "",
                answer:1
            },
            {
                quizName: "Question 3",
                quizNumber: "3/4",
                quizQuestion: "True or False: When there are floods, the grounds are always able to absorb the water.",
                quizChoice1: "True",
                quizChoice2: "False",
                quizChoice3: "",
                quizChoice4: "",
                answer:2
            },
            {
                quizName: "Question 4",
                quizNumber: "4/4",
                quizQuestion: "True or False: Buildings are at a higher risk of sinking from floods.",
                quizChoice1: "True",
                quizChoice2: "False",
                quizChoice3: "",
                quizChoice4: "",
                answer:1
            }
        ]
    }else if(data.quiz === "carbonfootprintquiz"){
        category = "Carbon Footprint";
        quizQuestions = [
            {
                quizName: "Question 1",
                quizNumber: "1/4",
                quizQuestion: "Carbon footprints are made by a person's:",
                quizChoice1: "Breathing",
                quizChoice2: "Eating habits",
                quizChoice3: "Carbon dioxide released",
                quizChoice4: "Pets",
                answer:3
            },
            {
                quizName: "Question 2",
                quizNumber: "2/4",
                quizQuestion: "A way to minimise your carbon footprint is to:",
                quizChoice1: "Recycle",
                quizChoice2: "Waste food",
                quizChoice3: "Use a personal car",
                quizChoice4: "All of the above",
                answer:1
            },
            {
                quizName: "Question 3",
                quizNumber: "3/4",
                quizQuestion: "True or False: Things as simple as taking transportation can make a difference in reducing your carbon footprint.",
                quizChoice1: "True",
                quizChoice2: "False",
                quizChoice3: "",
                quizChoice4: "",
                answer:1
            },
            {
                quizName: "Question 4",
                quizNumber: "4/4",
                quizQuestion: "True or False: A person's activities can show their carbon footprint amount.",
                quizChoice1: "True",
                quizChoice2: "False",
                quizChoice3: "",
                quizChoice4: "",
                answer:1
            }
        ]
    }else if(data.quiz === "acidrainquiz"){
        category = "Acid Rain";
        quizQuestions = [
            {
                quizName: "Question 1",
                quizNumber: "1/4",
                quizQuestion: "True/False: Acid rain can harm animals.",
                quizChoice1: "True",
                quizChoice2: "False",
                quizChoice3: "",
                quizChoice4: "",
                answer:1
            },
            {
                quizName: "Question 2",
                quizNumber: "2/4",
                quizQuestion: "Acid rain can come in the form of rain and…?",
                quizChoice1: "Heat",
                quizChoice2: "Tornados",
                quizChoice3: "Snow",
                quizChoice4: "Hurricanes",
                answer:3
            },
            {
                quizName: "Question 3",
                quizNumber: "3/4",
                quizQuestion: "True or False: Acid rain helps speed up the growing rate of trees.",
                quizChoice1: "True",
                quizChoice2: "False",
                quizChoice3: "",
                quizChoice4: "",
                answer:2
            },
            {
                quizName: "Question 4",
                quizNumber: "4/4",
                quizQuestion: "Acid rain is caused by:",
                quizChoice1: "Droughts",
                quizChoice2: "Air pollution",
                quizChoice3: "Icebergs melting",
                quizChoice4: "Famines",
                answer:2
            }
        ]
    }else if(data.quiz === "respiratoryproblemsquiz"){
        category = "Respiratory Problems";
        quizQuestions = [
            {
                quizName: "Question 1",
                quizNumber: "1/4",
                quizQuestion: "True/False: Pollution can cause breathing problems.",
                quizChoice1: "True",
                quizChoice2: "False",
                quizChoice3: "",
                quizChoice4: "",
                answer:1
            },
            {
                quizName: "Question 2",
                quizNumber: "2/4",
                quizQuestion: "Pollution can cause most damage to the:",
                quizChoice1: "Lungs",
                quizChoice2: "Kidneys",
                quizChoice3: "Pancreas",
                quizChoice4: "Left arm",
                answer:1
            },
            {
                quizName: "Question 3",
                quizNumber: "3/4",
                quizQuestion: "Some of the symptoms of respiratory problems are:",
                quizChoice1: "Difficulty breathing",
                quizChoice2: "Diseases",
                quizChoice3: "Coughing",
                quizChoice4: "All of the above",
                answer:4
            },
            {
                quizName: "Question 4",
                quizNumber: "4/4",
                quizQuestion: "True/False: Limiting your time outdoors in polluted area can cause less damage to your lungs.",
                quizChoice1: "True",
                quizChoice2: "False",
                quizChoice3: "",
                quizChoice4: "",
                answer:1
            }
        ]
    }else if(data.quiz === "marinelifequiz"){
        category = "Marine Life";
        quizQuestions = [
            {
                quizName: "Question 1",
                quizNumber: "1/4",
                quizQuestion: "What is the main way the ocean is being polluted?",
                quizChoice1: "Cardboard",
                quizChoice2: "Laundry detergent",
                quizChoice3: "Paper",
                quizChoice4: "Plastic and garbage",
                answer:4
            },
            {
                quizName: "Question 2",
                quizNumber: "2/4",
                quizQuestion: "What amount of plastic is being recycled every year?",
                quizChoice1: "2%",
                quizChoice2: "18%",
                quizChoice3: "9%",
                quizChoice4: "49%",
                answer:3
            },
            {
                quizName: "Question 3",
                quizNumber: "3/4",
                quizQuestion: "True/False: Marine life are being harmed by the amount of plastic and garbage in the ocean.",
                quizChoice1: "True",
                quizChoice2: "False",
                quizChoice3: "",
                quizChoice4: "",
                answer:1
            },
            {
                quizName: "Question 4",
                quizNumber: "4/4",
                quizQuestion: "True/False: When garbage is being transported to the landfills, most of the garbage ends up in the oceans",
                quizChoice1: "True",
                quizChoice2: "False",
                quizChoice3: "",
                quizChoice4: "",
                answer:1
            }
        ]
    }else if(data.quiz === "eutrophicationquiz"){
        category = "Eutrophication";
        quizQuestions = [
            {
                quizName: "Question 1",
                quizNumber: "1/4",
                quizQuestion: "What is Eutrophication?",
                quizChoice1: "The gradual increase of phosphorus in an aging body of water",
                quizChoice2: "The lack of food in an area",
                quizChoice3: "A lack of water",
                quizChoice4: "Pollutions within the air",
                answer:1
            },
            {
                quizName: "Question 2",
                quizNumber: "2/4",
                quizQuestion: "True or False: Eutrophication leads to a decrease in plant growth.",
                quizChoice1: "True",
                quizChoice2: "False",
                quizChoice3: "",
                quizChoice4: "",
                answer:2
            },
            {
                quizName: "Question 3",
                quizNumber: "3/4",
                quizQuestion: "True or False: Eutrophication can cause harm to the fish and make the water unsafe to drink.",
                quizChoice1: "True",
                quizChoice2: "False",
                quizChoice3: "",
                quizChoice4: "",
                answer:1
            },
            {
                quizName: "Question 4",
                quizNumber: "4/4",
                quizQuestion: "A way to help reduce eutrophication around the world is to:",
                quizChoice1: "Use a compost bin",
                quizChoice2: "Limit your carbon footprint",
                quizChoice3: "Use public transportation",
                quizChoice4: "All of the above",
                answer:4
            }
        ]
    }else if(data.quiz === "drinkingwaterquiz"){
        category = "Drinking Water";
        quizQuestions = [
            {
                quizName: "Question 1",
                quizNumber: "1/4",
                quizQuestion: "The majority of water on Earth is:",
                quizChoice1: "Salt water (undrinkable)",
                quizChoice2: "Fresh water (drinkable)",
                quizChoice3: "",
                quizChoice4: "",
                answer:1
            },
            {
                quizName: "Question 2",
                quizNumber: "2/4",
                quizQuestion: "True or False: Most of the water that is not salt water is still contaminated with poisonous chemicals.",
                quizChoice1: "True",
                quizChoice2: "False",
                quizChoice3: "",
                quizChoice4: "",
                answer:1
            },
            {
                quizName: "Question 3",
                quizNumber: "3/4",
                quizQuestion: "True or False: The water that comes from the sinks, toilets, and showers end up polluting the water.",
                quizChoice1: "True",
                quizChoice2: "False",
                quizChoice3: "",
                quizChoice4: "",
                answer:1
            },
            {
                quizName: "Question 4",
                quizNumber: "4/4",
                quizQuestion: "True or False: Without clean water, the ecosystem and wildlife will suffer.",
                quizChoice1: "True",
                quizChoice2: "False",
                quizChoice3: "",
                quizChoice4: "",
                answer:1
            }
        ]
    }else if(data.quiz === "pollutioncitiesquiz"){
        category = "Cities";
        quizQuestions = [
            {
                quizName: "Question 1",
                quizNumber: "1/4",
                quizQuestion: "What is the main cause of pollution in cities?",
                quizChoice1: "Television",
                quizChoice2: "Air conditioning",
                quizChoice3: "Cars",
                quizChoice4: "Shops",
                answer:3
            },
            {
                quizName: "Question 2",
                quizNumber: "2/4",
                quizQuestion: "True or False: The most polluted areas are the most populated ones.",
                quizChoice1: "True",
                quizChoice2: "False",
                quizChoice3: "",
                quizChoice4: "",
                answer:1
            },
            {
                quizName: "Question 3",
                quizNumber: "3/4",
                quizQuestion: "People living in polluted areas are suffering from:",
                quizChoice1: "Lung problems",
                quizChoice2: "Diseases",
                quizChoice3: "All of the above",
                quizChoice4: "",
                answer:3
            },
            {
                quizName: "Question 4",
                quizNumber: "4/4",
                quizQuestion: "Some ways that you can help polluted cities are to:",
                quizChoice1: "Buy from non eco-friendly companies",
                quizChoice2: "Use a personal car to get somewhere",
                quizChoice3: "Reduce your waste",
                quizChoice4: "All of the above",
                answer:3
            }
        ]
    }else if(data.quiz === "pollutionwildlifequiz"){
        category = "Wildlife";
        quizQuestions = [
            {
                quizName: "Question 1",
                quizNumber: "1/4",
                quizQuestion: "Pollution can be caused by the increase in temperature, garbage, and…?",
                quizChoice1: "Acid rain",
                quizChoice2: "Hibernation",
                quizChoice3: "Biking",
                quizChoice4: "All of the above",
                answer:1
            },
            {
                quizName: "Question 2",
                quizNumber: "2/4",
                quizQuestion: "True or false: Higher pollution rates kill most of the wildlife.",
                quizChoice1: "True",
                quizChoice2: "False",
                quizChoice3: "",
                quizChoice4: "",
                answer:1
            },
            {
                quizName: "Question 3",
                quizNumber: "3/4",
                quizQuestion: "True or False: Many of the wildlife mistaken the garbage for food.",
                quizChoice1: "True",
                quizChoice2: "False",
                quizChoice3: "",
                quizChoice4: "",
                answer:1
            },
            {
                quizName: "Question 4",
                quizNumber: "4/4",
                quizQuestion: "A way to help wildlife is to:",
                quizChoice1: "Not litter",
                quizChoice2: "Bike or walk to places",
                quizChoice3: "Recycle and take care of the environment",
                quizChoice4: "All of the above",
                answer:4
            }
        ]
    }


    const [ind, setInd] = useState(0);
   
    return <div id='quizcomp'>
      
        
    <div>
        <Quiz
        category = {category}
        quizName = {quizQuestions[ind].quizName}
        quizNumber = {quizQuestions[ind].quizNumber}
        quizQuestion = {quizQuestions[ind].quizQuestion}
        quizChoice1 = {quizQuestions[ind].quizChoice1}
        quizChoice2 = {quizQuestions[ind].quizChoice2}
        quizChoice3 = {quizQuestions[ind].quizChoice3}
        quizChoice4 = {quizQuestions[ind].quizChoice4}
        onSelect={QuizSelect}
        />
        <div id='Button-text'>
        <div id='button1' onClick={()=>{
            if(quizQuestions[ind].answer === answer){
                data.score++;
                ChangeData(data);
                console.log(data.score);
            }
            if(ind >= quizQuestions.length-1){
                Router.push("/QuizResult");
                console.log(onclick);
            } else {
                setInd(ind+1);
            }
        }}>Next</div>
        </div>
    </div>
    </div>
    
}

var answer = 0;

function QuizSelect(num){
    answer = num;
}


function HighlightButtonQuiz(){
    document.querySelector("#button1").style.backgroundColor = '#46c75f';
}


var selected = false;
function SelectedChoice(){
    selected = true;
}

function NextQuizQuestion(){
    if (selected === true){
        window.location.pathname = '/Quiz2';
    }else{

    }
}



// Quiz1.defaultProps = {
//     category: "Wildfires",
//     quizName: "Question 1",
//     quizNumber: "1/5",
//     quizQuestion: "What kind of environments are very likely to have wildfires start?",
//     quizChoice1: "Wet and rainy environments",
//     quizChoice2: "Dry environments",
//     quizChoice3: "Snowy and cold environments",
//     quizChoice4: ""
// }

export default Quiz1;