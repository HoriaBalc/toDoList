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
        
        
        liItems.forEach(function (userItem) {
            
            localStorage.getItem(userItem);
            localStorage.setItem(userItem, userItem);
            console.log(localStorage);
            if (userItem.getAttribute("data-value") === textValue)
                isInList = true;
        });

        if (!isInList) {
            listElement.setAttribute("data-value", textValue);
            listElement.append(textValue, buttonDelete);
            /*listElement.innerHTML=textValue;
            listElement.appendChild(buttonDelete);*/
            list.appendChild(listElement);
            buttonDelete.addEventListener('click', () => {
                //localStorage.remove();
                listElement.remove();
            })
        }
    }

})
usersData=[
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

populateUsersContainer(usersData);