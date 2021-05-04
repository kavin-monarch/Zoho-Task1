let input = document.getElementById('input');
let list  = document.getElementById('list');


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

let feature =(key)=>{

    let arr=[];
    for(i=0;i<database.length;i++){
        if(database[i].toLowerCase().includes(key)){
            arr.push(database[i]);
        }
    }
    return arr;
}
input.addEventListener('keyup',(event)=>{
    let key=input.value.toLowerCase();
    console.log(key);

    if(key.length>0){
        let list_array=[];

        list.innerHTML='';
        list_array=feature(key);

        for(i=0;i<list_array.length;i++){
            // console.log(list_array[i]);
            // list.innerHTML+='<li>'+list_array[i]+'</li>';

            list.innerHTML+='<a target=”_blank” href="https://www.google.com/search?q='+list_array[i]+'"><li>'+list_array[i]+'</li></a>'
        }
    }
    else{
        list.innerHTML='';
    }

});




