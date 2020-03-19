//Rock paper Scissor
function rpsGame(yourChoice){
    let humanChoice, compChoice
    humanChoice = yourChoice.id
    console.log(humanChoice)

    compChoice = numberToChoice(randIdForComputer())
    console.log('Computer Choice:',compChoice)

    results = decideWinner(humanChoice, compChoice) 
    console.log(results)

    message = finalMessage(results) //Color:'red', message:''
    console.log(message)
    
    rpsFrontEnd(yourChoice.id, compChoice, message)
}

function randIdForComputer(){
    return Math.floor(Math.random()*3)
}

function numberToChoice(num){
    return ['rock','paper','scissors'][num]
}

function decideWinner(humanChoice, compChoice){
    var rpsDatabase = {
        'rock':{'scissors':1, 'rock':0.5, 'paper':0},
        'paper':{'rock':1, 'paper':0.5, 'scissors':0},
        'scissors':{'paper':1, 'scissors':0.5, 'rock':0},
    }

    var yourScore = rpsDatabase[humanChoice][compChoice]
    var compScore = rpsDatabase[compChoice][humanChoice]

    return [yourScore, compScore]
}

function finalMessage([yourScore]){
if(yourScore === 0){ 
    return {'message':'You Lost!!!', 'color':'red'}
}
else if(yourScore === 0.5){
    return {'message':'You Tied!', 'color':'green'}
}
else{
    return {'message':'You Won!', 'color':'blue'}
}
}

function rpsFrontEnd(humanImgChoice, compImageChoice, finalMessage){

    var imageDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src,
    }

    //remove the images
    document.getElementById('rock').remove()
    document.getElementById('paper').remove()
    document.getElementById('scissors').remove()

    //div for all
    var humanDiv = document.createElement('div')
    var compDiv = document.createElement('div')
    var messageDiv = document.createElement('div')

    humanDiv.innerHTML ="Human Choice"+"<img src='" + imageDatabase[humanImgChoice] +"' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1)'>"
    compDiv.innerHTML = "Computer Choice"+"<img src='" + imageDatabase[compImageChoice] +"' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243, 38, 24, 1)'>"
    messageDiv.innerHTML = "<h1 style='color:"+finalMessage['color'] +"'font-size:60px; padding:30px;'>"+finalMessage['message']+"</h2>"

    document.getElementById('flex-box-rps-div').appendChild(humanDiv)
    document.getElementById('flex-box-rps-div').appendChild(messageDiv)
    document.getElementById('flex-box-rps-div').appendChild(compDiv)

}


//Challenge 4: Changing Color
let all_buttons = document.getElementsByTagName('button')
console.log(all_buttons)

let copyAllButtons = []
for(let i=0; i< all_buttons.length; i++){
    copyAllButtons.push(all_buttons[i].classList[1])
}
console.log(copyAllButtons)

function buttonColorChange(buttonColor){
   // console.log(buttonColor.value)   
   if(buttonColor.value === 'red'){
       buttonsRed()
   }else if(buttonColor.value === 'green'){
       buttonsGreen()
   }else if(buttonColor.value === 'reset'){
       buttonsReset()
   }else{
    randomColors()
   }
}

function buttonsRed(){
    for(let i=0;i<all_buttons.length;i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1])
        all_buttons[i].classList.add('btn-danger')
    }
}
function buttonsGreen(){
    for(let i=0;i<all_buttons.length;i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1])
        all_buttons[i].classList.add('btn-success')
    }
}

function buttonsReset(){
    for(let i=0;i<all_buttons.length;i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1])
        all_buttons[i].classList.add(copyAllButtons[i])
    }
}

function randomColors(){
    let choices = ['btn-primary', 'btn-success', 'btn-warning', 'btn-danger'] 
    for(let i=0;i<all_buttons.length;i++){
        let random = Math.floor(Math.random()*4)
        all_buttons[i].classList.remove(all_buttons[i].classList[1])
        all_buttons[i].classList.add(choices[random])
    }
}