const input = document.querySelector("input");
const button = document.querySelector("button");
var list = document.querySelector("ul");
var stringList=new Array();
button.addEventListener('click', () => {
    const textValue = input.value;
    let isInList = false;
    const listElement = document.createElement("LI");
    const buttonDelete = document.createElement("button");
    buttonDelete.innerText = "Delete";
    
    if (textValue != "") {
        var liItems = list.querySelectorAll("LI");
        liItems.forEach(function (userItem) {
            if (userItem.getAttribute("data-value") === textValue)
                isInList = true;
        });

        if (!isInList) {
            listElement.setAttribute("data-value", textValue);
            listElement.append(textValue, buttonDelete);
            //stringList=localStorage.getItem('stringList');
           
            //stringList.push(textValue);
            //console.log(stringList);
            
            list.appendChild(listElement);
            //localStorage.setItem('stringList', stringList);
            localStorage.setItem('ulEl', ulEl);
            buttonDelete.addEventListener('click', () => {
                //localStorage.remove();
                
                //stringList.pop();
                //console.log(stringList);
               
                //localStorage.setItem('stringList', stringList);
            })
        }
    }

})

/*var listToDo =localStorage.getItem('stringList');
function initList(){
        const buttonDelete = document.createElement("button");
        const listElement = document.createElement("LI");
        buttonDelete.innerText = "Delete";

    
   for(var i=0;i<listToDo.length;i++){ 

        listElement.append(listToDo[i], buttonDelete);
        list.appendChild(listElement);
          
       
   } 
   buttonDelete.addEventListener('click', () => {
            //localStorage.remove();
           
            listToDo.pop(); 
            listElement.remove();
            console.log(listToDo);
            localStorage.setItem('stringList', listToDo);
        })
}
initList();
*/


/////////////////////////////////////////////////////

const THEME1={
    'primary':'rgb(199, 199, 199)',
    'header':'rgb(23, 74, 116)',
    'title':'rgb(243, 239, 239)',
    'secondaryHeader':'gainsboro',
}

const THEME2={
    'primary':'#2a9d8f',
    'header':'#264653',
    'title':'#e9c46a',
    'secondaryHeader':'#f4a261',
}

const THEME3={
    'primary':'#84a98c',
    'header':'#2f3e46',
    'title':'#52796f',
    'secondaryHeader':'#cad2c5',
}

const  dropBtn=document.getElementsByClassName('dropbtn');
const dropContent=document.getElementById("myDropdown");
function showBtns(){
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

function chooseTheme(nrTheme){
var buttons = dropContent.querySelectorAll("button");
var theme;

/*for(var i=0;i<buttons.length;i++){
    if(nrTheme==i)
        theme=themes[i];
}*/
        if (nrTheme == 1){
            theme= THEME1;
        }
        if (nrTheme== 2){   
            theme= THEME2;    
        }
        if (nrTheme == 3){
            theme= THEME3;               
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










/////////////////////////////////////////////////////////////  
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
