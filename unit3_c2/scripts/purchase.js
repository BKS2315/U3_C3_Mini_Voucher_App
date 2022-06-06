let user = JSON.parse(localStorage.getItem("user"));
console.log('user:', user);
let balance = user.amount;

let walletBalance = document.getElementById("wallet_balance");
walletBalance.innerText = balance;

let purchase = JSON.parse(localStorage.getItem("purchase"));
console.log('purchase:', purchase)

let append = (purchase)=>{

    let voucherList = document.getElementById("purchased_vouchers");
    purchase.map(({name,image,price})=>{

        let card = document.createElement("div");
        card.setAttribute("class","voucher");
   
        let vImg = document.createElement("img");
        vImg.src = image;
   
        let vName = document.createElement("p");
        vName.innerText = name;
   
        let vprice = document.createElement("h4");
        vprice.innerText = price;
   
        card.append(vImg,vName,vprice);
        voucherList.append(card);
    })
}
append(purchase);