const textArea = document.getElementById('textarea');
const resetBtn = document.querySelector('#reset-btn');
const submitBtn = document.querySelector('#submit-btn');
const ul = document.getElementById('list-container');
const modal = document.querySelector('.modal');
const textEl = document.getElementById('text-el');
const closeBtn = document.getElementById('close-btn');
const clearBtn = document.getElementById('clear-btn');
const dummy = document.querySelector('.dummy');
const textArray = [];
const itemArray = [];

submitBtn.addEventListener('click', ()=>{
    if(textArea.value){
        textArray.push(textArea.value);
        let text = textArea.value;
        if(text.length > 65){
            text =`${text.slice(0,65)}...`;
        }
        let li = document.createElement('li');
        itemArray.push(li);
        let phrase = document.createElement('p');
        phrase.textContent = text;
        let viewBtn = document.createElement('button');
        viewBtn.textContent = "view all";
        let deleteBtn = document.createElement('button');
        deleteBtn.innerHTML =  `<i class="fas fa-trash-alt"></i>`;
        li.append(phrase,viewBtn,deleteBtn);
        ul.append(li);
        viewBtn.addEventListener('click',(e)=> displayItem(e));
        deleteBtn.addEventListener('click',(e)=> deleteItem(e));
        dummy.style.zIndex = "-300";
        textArea.value = "";
    }
});

function deleteItem(e){
    let item = e.currentTarget.parentElement;
    item.remove();
    textArray.splice(item, 1);
    itemArray.splice(item, 1);
    if(itemArray.length === 0){
        dummy.style.zIndex = "300";
    }
}

function displayItem(e){
    let index = itemArray.indexOf(e.currentTarget.parentElement);
    textEl.textContent = textArray[index];
    modal.style.zIndex = '100';
}

resetBtn.addEventListener('click',()=> textArea.value = "");

closeBtn.addEventListener('click',()=>{
    modal.style.zIndex = '-999';
});

clearBtn.addEventListener('click',()=>{
    let items = document.querySelectorAll('li');
    items.forEach((item)=>{
        textArray.splice(item, 1);
        itemArray.splice(item, 1);
        item.remove();
    });
    dummy.style.zIndex = "300";
});