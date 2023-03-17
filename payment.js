const bankaccount = document.querySelector("#bankaccount"); 
const wallet = document.querySelector("#walletaccount");
const obj = document.querySelector("input");

let count = 0;
setInterval(()=>{
    if(count==0){
        obj.setAttribute("placeholder","Pay by name or phone number")
        count++;
    }
    else{
        obj.setAttribute("placeholder","Pay friends and merchant")
        count=0;
    }
},1000)

// function of asynchronous way to get data from backend
async function bankbalanceCheck(e){
    try{
        const comp = document.createElement("div");
        // let data = await axios.get("url");
        // let response = data.data;
        let response = {
            name : "Sumit",
            bankName:"UCO",
            accountNo: "03030110093146",
            accountBalance:"2000",
        }

        let accountDigit = (response.accountNo+"").slice(-4)

        comp.innerHTML = `
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header text-bg-dark pb-2 p-3">
                    <h3 class="d-flex justify-content-center align-items-center">Bank Account Balance</h3>
                    <div data-bs-target="#bank" data-bs-dismiss="modal">
                        <button class="btn-close d-flex justify-content-center align-items-center bg-white"></button>
                    </div>
                </div>
                <div class="modal-body container-fluid">
                    <div class="border border-danger">
                        <div class="border-bottom border-bottom-1 p-3">
                            <p>Saving Accounts</p>
                            <p class="fw-bolder">${response.bankName} xxxxxx${accountDigit}</p>
                        </div>
                        <div class="border-bottom border-bottom-1 p-3">
                            <p>Account Balance</p>
                            <p class="fw-bolder">${response.accountBalance}.00 &#8377;</p>
                        </div>
                    </div>
                </div>
            </div>
    </div>`  
    comp.className="modal";
    comp.setAttribute("id","bank");
    document.querySelector("body").append(comp);
    }
    catch(error){
        console.log(error);
    }
}

// function to get walletbalance asynchrously
async function walletbalanceCheck(e){
    try{
        const comp = document.createElement("div");
        // let data = await axios.get("url");
        // let response = data.data;
        let response = {
            name : "Sumit",
            bankName:"UCO",
            accountNo: "03030110093146",
            accountBalance:"2000",
        }

        let accountDigit = (response.accountNo+"").slice(-4)

        comp.innerHTML = `
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header text-bg-dark p-3">
                    <h3 class="d-flex justify-content-center align-items-center">Bank Account Balance</h3>
                    <div data-bs-target="#wallet" data-bs-dismiss="modal">
                        <button class="btn-close d-flex justify-content-center align-items-center bg-white"></button>
                    </div>
                </div>
                <div class="modal-body container-fluid">
                    <div class="border border-danger">
                        <div class="border-bottom border-bottom-1 ps-3 pt-2">
                            <p><img src="https://img.icons8.com/color/24/null/wallet--v1.png"/> &nbsp;Wallet Balance</p>
                            <p class="fw-bolder">${response.accountBalance}.00 &#8377;</p>
                        </div>
                    </div>
                </div>
            </div>
    </div>`  
    comp.className="modal";
    comp.setAttribute("id","wallet");
    document.querySelector("body").append(comp);
    }
    catch(error){
        console.log(error);
    }
}


bankaccount.addEventListener("click",async (e)=>{
    await bankbalanceCheck(e);
})

wallet.addEventListener("click",async (e)=>{
    await walletbalanceCheck(e);
})