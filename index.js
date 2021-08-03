const input=document.querySelector("input");
const button=document.querySelector("button");
const list=document.querySelector("ul");


button.addEventListener('click', ()=>{
     textValue=input.value;
    if (textValue!=""){
        const listElement=document.createElement("LI");
        const buttonDelete=document.createElement("button");
        buttonDelete.innerText="Delete";
        listElement.append(textValue, buttonDelete)
        /*listElement.innerHTML=textValue;
        listElement.appendChild(buttonDelete);*/
        list.appendChild(listElement);
        buttonDelete.addEventListener('click', ()=>{
            listElement.remove();
        })
    }
        
})
