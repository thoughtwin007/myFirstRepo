let name1=document.getElementById('name')
let age=document.getElementById('age')
let email=document.getElementById('emailId')
let details=document.getElementById('details')
let body=document.querySelector('body')
let chkName=()=>{
    if(name1.value.length<3){
        err=0;
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
    if(details.value.length>100) {
        err=0;
     let p=document.createElement('p')
     p.setAttribute('id','detail')
      p.innerText='details should be not more than 100 characters'
     p.style.color='red'
     if(!document.getElementById('detail'))body.appendChild(p)
    }else{
        let p=document.getElementById('detail')
        if(p)
        p.remove()}
}
let chkEmail=()=>{
    if(!email.value.endsWith('.com') || (email.value.indexOf('@')===-1) ){
        err=0;
        let p=document.createElement('p')
        p.setAttribute('id','email')
        p.innerText='email type is invalid'
        p.style.color='red'
        if(!document.getElementById('email'))body.appendChild(p)
    }else{ let p=document.getElementById('email')
        if(p)
        p.remove()}
}
let arr=[]
let err=1
let validations=(e)=>{
    err=1;
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
        if(err){
            console.log(obj)
            arr=[...arr,obj]
          localStorage.setItem('data',JSON.stringify(arr)) 
        // localStorage.clear();
    }
}
