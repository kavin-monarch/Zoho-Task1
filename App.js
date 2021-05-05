
let input = document.getElementById('input');
let list  = document.getElementById('list');
let display_area= document.getElementById('display_area');
let selected=0;
let list_length;
let array;
let key='';

let database =[
   'Dharnish',
   'Kavin Prasanth',
   'Karthik',
   'Jack',
   'Jackson',
   'Master'
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
    key=input.innerText.toLowerCase();
    if(event.key==='@'){
        start=key.length-1;
        flag=true;
    }
    if(event.key===' ' && flag==true){
        flag=false;
    }
    if(flag==true){
        let list_array=[];
        list.innerHTML='';
        list_array=feature(key.substring(start+1, key.length-1));
        renderList(list_array,selected);
    }
    else{
        list.innerHTML='';
        list.style.overflow ='hidden';
    }
});
function moveCursorToEnd(el) {
    if (typeof el.selectionStart == "number") {
        el.selectionStart = el.selectionEnd = el.value.length;
    } else if (typeof el.createTextRange != "undefined") {
        el.focus();
        var range = el.createTextRange();
        range.collapse(false);
        range.select();
    }
}

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

        let current_length=array[selected].length+2;
        // input.innerHTML="<h1>helllo</h1>";

        let v =create(array[selected]);
        input.prepend(v);
        // console.log(start);
        // console.log(key.length);
        // console.log(current_length);
        // console.log(input.innerText);
        // let t=input.innerText;
        // t.replace(key,'');
        // console.log(t);
        input.prepend();
        y=0;
        window.scrollTo(0, y);

    }
    else if(code==8){
        selected=0;
    }
});


let rem =()=>{
    var sample=(String) (input.innerText);
    return sample.replace(key,' ');
}

let create =(x)=>{
    let v =document.createElement('span');
        v.innerText='#'+x+' ';
        v.setAttribute('class','span');
        v.setAttribute('contentEditable','false');
    return v;
}



