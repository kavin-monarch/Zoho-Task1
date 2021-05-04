
let input = document.getElementById('input');
let list  = document.getElementById('list');
let display_area= document.getElementById('display_area');
let selected=0;
let list_length;
let array;


let database =[
    'Zoho',
    'Zoho Mail',
    'Zoho Team Inbox',
    'Zoho People',
    'Zoho Books',
    'Zoho Inventory',
    'Zoho CRM',
    'Zoho Sites',
    'Zoho Projects',
    'Zoho Desk',
    'Zoho Social',
    'Zoho SalesIQ',
    'Zoho Expense',
    'Zoho Recruit',
    'Zoho One'
]
window.onload= function(){
    list.style.overflow = 'hidden';
};
let feature =(key)=>{

    let arr=[];
    for(i=0;i<database.length;i++){
        if(database[i].toLowerCase().includes(key)){
            arr.push(database[i]);
        }
    }
    return arr;
}

let renderList =(list_array,index)=>{
    list_length=list_array.length;
    array=list_array;
    if(list_length>4){
        list.style.overflow = 'scroll';
    }
    else{
        list.style.overflow = 'hidden';
    }
    for(i=0;i<list_array.length;i++){
        if(i==index){
            list.innerHTML+='<li id="current">'+list_array[i]+'</li>'
        }
        else{

            list.innerHTML+='<li>'+list_array[i]+'</li>'
        }
    }
}
input.addEventListener('keyup',(event)=>{
    let key=input.innerText.toLowerCase();
    if(key.length>0){
        
        let list_array=[];

        list.innerHTML='';
        list_array=feature(key);

        renderList(list_array,selected);
    }
    else{
        list.innerHTML='';
        list.style.overflow = 'hidden';
    }
});

y=0;
document.addEventListener('keydown', function(e) {
    let code=e.keyCode
    if(code==38){
        if(selected-1>=0){
            y-=64;
            list.scrollTo(0, y);
            selected--;
        }
    }
    else if(code==40){
        if(selected+1<list_length){
            list.scrollTo(0, y);
            y+=60;
            selected++;
        }
    }
    else if(code==13){
        e.preventDefault();
        display_area.innerHTML='';
        display_area.innerHTML+=array[selected];
        input.innerText=array[selected];
        y=0;
        window.scrollTo(0, y);

    }
    else if(code==8){
        selected=0;
    }
});





