/// TO DO LIST //////////////////////////////////////
const input = document.querySelector("input");
const button = document.querySelector("button");
var list = document.querySelector("ul");
button.addEventListener('click', () => {
        const textValue = input.value;
        let isInList = false;
        const listElement = document.createElement("LI");
        const buttonDelete = document.createElement("button");
        buttonDelete.innerText = "Delete";

        if (textValue != "") {
            var liItems = list.querySelectorAll("LI");
            liItems.forEach(function(userItem) {
                if (userItem.getAttribute("data-value") === textValue)
                    isInList = true;
            });

            if (!isInList) {
                listElement.setAttribute("data-value", textValue);
                listElement.append(textValue, buttonDelete);


                list.appendChild(listElement);

                buttonDelete.addEventListener('click', () => {
                    listElement.remove();

                })
            }
        }

    })
    ///////////////

fetch('https://skyscraprzceresapp.azurewebsites.net/Login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },

        body: JSON.stringify({
            email: "user@example.com",
            password: "string"
        })
    }).then(res => {
        return res.json()
    }).then(data => console.log(data))
    .catch(error => {
        console.log('Error');
    })


///ALEGERE DE THEME CU LOCAL STORAGE//////////////////////////////////////////////////

const THEME1 = {
    'primary': 'rgb(199, 199, 199)',
    'header': 'rgb(23, 74, 116)',
    'title': 'rgb(243, 239, 239)',
    'secondaryHeader': 'gainsboro',
}

const THEME2 = {
    'primary': '#2a9d8f',
    'header': '#264653',
    'title': '#e9c46a',
    'secondaryHeader': '#f4a261',
}

const THEME3 = {
    'primary': '#84a98c',
    'header': '#2f3e46',
    'title': '#52796f',
    'secondaryHeader': '#cad2c5',
}

const dropBtn = document.getElementsByClassName('dropbtn');
const dropContent = document.getElementById("myDropdown");

function showBtns() {
    dropContent.classList.toggle("show");
}
const setTheme = theme => {
    const root = document.documentElement;
    /*for (const property in theme) {
        root.style.setProperty(property, theme[property]);
    }*/
    root.style.setProperty('--header', theme['header']);
    root.style.setProperty('--primary', theme['primary']);
    root.style.setProperty('--title', theme['title']);
    root.style.setProperty('--secondaryHeader', theme['secondaryHeader']);

}

function chooseTheme(nrTheme) {
    var buttons = dropContent.querySelectorAll("button");
    var theme;

    /*for(var i=0;i<buttons.length;i++){
        if(nrTheme==i)
            theme=themes[i];
    }*/
    if (nrTheme == 1) {
        theme = THEME1;
    }
    if (nrTheme == 2) {
        theme = THEME2;
    }
    if (nrTheme == 3) {
        theme = THEME3;
    }
    setTheme(theme);
    localStorage.setItem('Theme', nrTheme);
}

const initTheme = () => {
    // const theme = localStorage.getItem('isDarkTheme'); // DARK, LIGHT
    // const isDarkTheme = theme === 'DARK_THEME';
    const numberTheme = localStorage.getItem('Theme');
    chooseTheme(numberTheme);
}

initTheme();

///ANIMATII CU TIMER /////////////////////////////////////////////////////

/*const start=document.querySelector("#start");
const stop=document.querySelector("#stop");
const box=document.querySelector('#box');
let id=null;
start.addEventListener('click',() =>{
  

    id=setInterval(() =>{
        box.classList.toggle('active');
    },1000)

});
stop.addEventListener('click',()=>{
    clearInterval(id);

})*/

///Easy Assignment/////////////////////////////////////////////////////////////
const beginBtn = document.querySelector("#beginBtn");
const box1 = document.querySelector("#box1");
const box2 = document.querySelector("#box2");
const box3 = document.querySelector("#box3");
const box4 = document.querySelector("#box4");
const box5 = document.querySelector("#box5");
const box6 = document.querySelector("#box6");
let id = null;
let count = 0;
beginBtn.addEventListener('click', () => {
    id = setInterval(() => {
        count += 200;
        if (count >= 5000) {
            clearInterval(id);
        } else {
            box1.innerHTML = Math.floor(Math.random() * 10);
            box2.innerHTML = Math.floor(Math.random() * 10);
            box3.innerHTML = Math.floor(Math.random() * 10);
            box4.innerHTML = Math.floor(Math.random() * 10);
            box5.innerHTML = Math.floor(Math.random() * 10);
            box6.innerHTML = Math.floor(Math.random() * 10);
        }
    }, 200);

});

/// Hard Assigment////////////////////////////////////////////////////////////////
const inputText = document.querySelector("#input");
let newInput = "";
let i = 0;
let isChanged = true;

function verifyInput() {
    if (inputText.value != "" && isChanged) {
        console.log(inputText.value);
        setTimeout(changeInputContent, 1000);
        //changeInputContent();
    }
    //setTimeout(alert(newInput),2000);
}

function changeInputContent() {
    if (inputText.value == newInput) {
        console.log(newInput);
        isChanged = false
        alertMe();

    } else {
        newInput = inputText.value;
    }
}

function alertMe() {
    alert(newInput);
}

verifyId = setInterval(verifyInput, 2000);
//clearInterval(verifyId);

/// Carduri //////////////////////////////////////////////////////////  
/*usersData=[
    {
        name:'Vasilica',
        age: 23,
        email: 'vasilica123@yahoo.com'
    },
    {
        name:'Gigel',
        age: 27,
        email: 'gigel.gigi@yahoo.com'
    },
    {
        name:'Vasile',
        age: 18,
        email: 'vasi_vasi@gmail.com'
    }
];
const userContainer=document.getElementById("userContainer");

function generateUserCard(user){
    const card=document.createElement('div');
    const username=document.createElement('div');
    const age=document.createElement('div');
    const email=document.createElement('div');
    username.innerText=user.name;
    email.innerText=user.email;
    age.innerText=user.age;
    card.append(username,email,age);
    card.classList.add("card");
    username.style.backgroundColor="dimgrey";
    email.style.backgroundColor="grey";
    age.style.backgroundColor="darkgrey";


    return card;
}

function populateUsersContainer(users){
    users.forEach(user=>{
        userCard=generateUserCard(user);
        userContainer.appendChild(userCard);
    });
}

populateUsersContainer(usersData);*/