let addForm = document.addfrm;
let text = addForm.add;
let ul=document.querySelector(".todos");
let addItem = (item) =>{
    let str=`<li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${item}</span>
    <i class="far fa-trash-alt delete"></i>
</li>`;
ul.innerHTML += str;
};
addForm.addEventListener("submit",(e) => {
    e.preventDefault();
    let item=text.value;
    console.log(item);
    
    if(item.length > 0){
        addItem(item);
        text.value="";
    }
});
ul.addEventListener("click",(e) => {
    if(e.target.nodeName === 'I'){
        e.target.parentElement.remove();
    }
});
let searchList=(text) =>{
    let listItems =ul.children;
    for(let li of listItems){
        if(li.innerText.toLowerCase().indexOf(text) == -1){
            li.classList.add("filtered");
        }else{
            li.classList.remove("filtered");
        }
    }
};

