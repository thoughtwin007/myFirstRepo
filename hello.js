let name1=document.getElementById('name')
let age=document.getElementById('age')
let email=document.getElementById('emailId')
let details=document.getElementById('details')
let body=document.querySelector('body')
let arr=[];
let success=1;
let chkName=()=>{
    if(name1.value.length<3){
        success=0;
    let p=document.createElement('p')
        p.setAttribute('id','para')
        p.innerText='alleast 3 characters should be there in name'
        if(!document.getElementById('para'))body.appendChild(p)
        console.log(name1.value.length)
        p.style.color='red'
        console.log('not appropriate')
    }else {let para=document.getElementById('para')
        if(para)
        para.remove();
    }
}
let chkDetail=()=>{
    if(email.value===localStorage.getItem.mail)
    if(details.value.length>100) {
        success=0;
     let p=document.createElement('p')
     p.setAttribute('id','detail')
      p.innerText='details should be not more than 100 characters'
     p.style.color='red'
     if(!document.getElementById('detail'))email.appendChild(p)
    }else{
        let p=document.getElementById('detail')
        if(p)
        p.remove()}
}
let chkEmail=()=>{
    console.log('checking email')
    if(!email.value.endsWith('.com') || (email.value.indexOf('@')===-1) ){
        success=0;
        console.log('not valid mail')
        let p=document.createElement('p')
        p.setAttribute('id','email')
        p.innerText='email type is invalid'
        p.style.color='red'
        if(!document.getElementById('email'))body.appendChild(p)
    }else{
        let p=document.getElementById('email')
        if(p)
        p.remove()}
       if(localStorage.getItem('data')){ let a=localStorage.getItem('data');
        let parsed=JSON.parse(a)
        parsed.map((el)=>{if(el.mail===email.value){
            success=0
            console.log('mail matched:'+ el.mail)
             let p=document.createElement('p')
             p.innerHTML='email already exist'
             p.setAttribute('id','email')
             p.style.color='red'
             if(!document.getElementById('email'))body.appendChild(p)
        }}) } 
}
let addData=()=>{
    let element=document.getElementById('outer')
    let element1=document.getElementById('show')
    let element2=document.getElementById('addButton')
    element.style.display='block'
    element1.style.display='none'
    element2.style.display='none'
}
let showData=()=>{
    let showData =document.getElementById('show')
    let element2=document.getElementById('addButton')
    showData.innerHTML=' '
    let element=document.getElementById('outer')
    let element1=document.getElementById('show')
    element2.style.display='block'
     element1.style.display='block'
    element.style.display='none'
    let a=localStorage.getItem('data');
        let parsed=JSON.parse(a)
        parsed.map((el)=>{
            let outerShow=document.createElement('div')
            let button=createElement('button')
             button.innerHTML='Delete'
             let hr=createElement('hr')
            Object.values(el).map((e)=>{
            let p=document.createElement('p')
            p.setAttribute('class',"data")
            p.innerHTML=e
            if(e=="mail"){
             button.setAttribute('id',e)}
            outerShow.appendChild(p)
        }); outerShow.appendChild(button)
    outerShow.appendChild(hr)})
        let div=document.getElementById('show')
        div.appendChild(outerShow)
}
let validations=(e)=>{
    success=1;
    e.preventDefault();
    console.log(name1.value)
    name1.value=name1.value.trim(); 
    email.value=email.value.trim();
    email.value=email.value.toLowerCase();
    if(name1.value.length)name1.value=name1.value[0].toUpperCase()+name1.value.slice(1);
        let obj={name:name1.value,age:age.value,mail:email.value,info:details.value} 
    console.log(name1.value)
    chkName();
    console.log(details.value.length)
   chkDetail();
      chkEmail();
    //   if(success)display(obj);
      console.log(localStorage.getItem("data"))
        if(success){
            console.log(obj)
            arr=[...arr,obj]
          localStorage.setItem('data',JSON.stringify(arr)) 
        // localStorage.clear();
    }

}
