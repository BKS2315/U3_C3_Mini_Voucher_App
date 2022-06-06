let user = JSON.parse(localStorage.getItem("user"));
console.log('user:', user);
let balance = user.amount;

let walletBalance = document.getElementById("wallet_balance");
walletBalance.innerText = balance;

let showVounchers = async ()=>{
    try{
        
        let url =`https://masai-vouchers-api.herokuapp.com/api/vouchers`;
        let res = await fetch(url);
        let vouchers = await res.json();
        // console.log('vouchers:', vouchers)
        appendVouchers(vouchers[0].vouchers);
    }catch(err){
        console.log('err:', err);
    }

}

let appendVouchers = (vouchers)=>{
   let voucherList = document.getElementById("voucher_list");
   console.log('vouchers:', vouchers);

   vouchers.map(({name,image,price})=>{

     let card = document.createElement("div");
     card.setAttribute("class","voucher");

     let vImg = document.createElement("img");
     vImg.src = image;

     let vName = document.createElement("p");
     vName.innerText = name;

     let vprice = document.createElement("h4");
     vprice.innerText = price;

     let arg = {name,image,price};

     let buyButton = document.createElement("button");
     buyButton.setAttribute("class","buy_voucher")
     buyButton.innerText = "Buy";
     buyButton.addEventListener("click",()=>{
         buyVoucher(arg)
     })
      
     card.append(vImg,vName,vprice,buyButton);
     voucherList.append(card);

   })
}
let purchase = JSON.parse(localStorage.getItem("purchase")) || [] ;
let buyVoucher = (arg)=>{
    console.log('arg:', arg)
    if(arg.price > balance){
        alert("Sorry! insufficient balance");
    }
    else{
        purchase.push(arg);
        localStorage.setItem("purchase",JSON.stringify(purchase));
        balance = balance-arg.price;
        amount = balance;
        name =user.name;
        email = user.email;
        address = user.address;
        let data ={name,email,address,amount};

        localStorage.setItem("user",JSON.stringify(data))
        alert("Hurray! purchase successful");
        window.location.reload();
    }
    
}


showVounchers()
