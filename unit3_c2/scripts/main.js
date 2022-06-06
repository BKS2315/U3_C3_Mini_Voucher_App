
let submit = ()=>{
    let name = document.getElementById("name").value;
    console.log('name:', name)
    let email = document.getElementById("email").value;
    console.log('email:', email)
    let address =document.getElementById("address").value;
    console.log('address:', address)
    let amount = document.getElementById("amount").value;
    console.log('amount:', amount)
    amount = Number(amount);
    let data ={name,email,address,amount};

 localStorage.setItem("user",JSON.stringify(data))

    document.getElementById("name").value =null;
    document.getElementById("email").value=null;
    document.getElementById("address").value =null;
    document.getElementById("amount").value =null;


}