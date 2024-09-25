const chat = document.querySelector(".chat");
const participants = document.querySelector(".participants");
const main = document.querySelector(".main-bar");
const mood = document.querySelector(".mood-switch");
let chatClicked = false;
let participantsClicked = false;


mood.addEventListener("click", e => {
document.body.classList.toggle("light");


if(document.body.classList.contains("light") && chatClicked){
    chat.style.backgroundColor = "#889696";
    participants.style.backgroundColor = "#b8b8aa";
    main.textContent = "Dear Sir/Ma'am please kindly make changes to your chat here";
}

if(document.body.classList.contains("light") && participantsClicked ){
    chat.style.backgroundColor = "#b8b8aa";
    participants.style.backgroundColor = "#889696";
    main.textContent = "I am Okeke Onyedika Cyprian and i am so blessed! ";
}

if(!document.body.classList.contains("light") && chatClicked){
    chat.style.backgroundColor = "#000000";
    participants.style.backgroundColor = "#2b2c28";
    main.textContent = "Dear Sir/Ma'am please kindly make changes to your chat here";
}

if(!document.body.classList.contains("light") && participantsClicked ){
    chat.style.backgroundColor = "#2b2c28";
    participants.style.backgroundColor = "#000000";
    main.textContent = "I am Okeke Onyedika Cyprian and i am so blessed! ";
}

})

participants.addEventListener("click", event1 => {
    participantsClicked = true;
    chatClicked = false;
    if(document.body.classList.contains("light")){
        chat.style.color = "white";
        participants.style.color = "#f8f0d5";
        chat.style.backgroundColor = "#b8b8aa";
        participants.style.backgroundColor = "#889696";
        main.textContent = "I am Okeke Onyedika Cyprian and i am so blessed! ";

    }else if(!document.body.classList.contains("light")){
        chat.style.color = "#f8f0d5";
        chat.style.backgroundColor = "#2b2c28";
        participants.style.color = "white";
        participants.style.backgroundColor = "#000000";
        main.textContent = "I am Okeke Onyedika Cyprian and i am so blessed! ";

    }
})
    
chat.addEventListener("click", event2 => {
    chatClicked = true;
    participantsClicked = false;
    if(document.body.classList.contains("light")){
            participants.style.color = "white";
            chat.style.color = "#f8f0d5";
            participants.style.backgroundColor = "#b8b8aa";
            chat.style.backgroundColor = "#889696";
            main.textContent = "Dear Sir/Ma'am please kindly make changes to your chat here";
       }else if(!document.body.classList.contains("light")){
            participants.style.color = "#f8f0d5";
            participants.style.backgroundColor = "#2b2c28";
            chat.style.color = "white";
            chat.style.backgroundColor = "#000000";
            main.textContent = "Dear Sir/Ma'am please kindly make changes to your chat here";
    }
    })


        
    






    

