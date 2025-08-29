function getElement(id){
    const element = document.getElementById(id)
    return element
}
let coinNumber = 100;
 document.querySelectorAll('.btn-form').forEach( button =>{
        button.addEventListener('click', function() {
            const element = getElement("coin")
            const serName = this.dataset.serviceName;
            const serNumber = this.dataset.serviceNumber;
            const callCost = 20; 
            const coin1 =  coinNumber -callCost 
            element.innerText = coin1
            if (coinNumber > callCost) {
                coinNumber -= callCost;
                alert(`📞 Calling ${serName} at ${serNumber}...`);
            } else {
                alert("Insufficient coins to make this call.");
            }
        })
    })
getElement("heart").addEventListener("click",function(e){
    if(e.target.className.includes("btn-form")){
        const button = e.target
        const productItem = button.parentNode.parentNode.children[1].children[0].innerText
        
        const listItem2 = button.parentNode.parentNode.children[2].children[0].innerText;
        const cartContainer = getElement("cart-container")

        const newCart = document.createElement("div")
         
        newCart.innerHTML =`
        <div class="flex bg-[#f5fff6] justify-between items-center md:py-3 mt-3 p-3 rounded-xl">
                <div>
                    <h2 class="font-bold md:text-[15px] text-base">${productItem}</h2>
                    <p class="font-bold md:text-sm text-lg text-[#5C5C5C]">${listItem2}</p>
                </div>
                <div>
                    <p class="font-medium">${new Date().toLocaleTimeString()}</p>
                </div>
            </div>`
           
cartContainer.append(newCart)
    }
})
    const heartIcons =document.getElementsByClassName("heart-icon")
for(const icon of heartIcons){
    icon.addEventListener("click",function(){
        const listIcon = getElement("available-number").innerText
        const quantity = Number(listIcon) + 1
        getElement("available-number").innerText = quantity

    })
}
const allButtons = document.getElementsByClassName("button")
for (const button of allButtons) {
    button.addEventListener("click",function(){
        const buttonList = getElement("copy").innerText
        const totalNumber = Number(buttonList) + 1;
        getElement("copy").innerText = totalNumber
    })
}    
    
const cartBtns = document.getElementsByClassName("btn-form")
// // console.log(cartBtns);
// for(const button of cartBtns){
//     button.addEventListener("click",function(){
        
//         const productItem = button.parentNode.parentNode.children[1].children[0].innerText
        
//         const listItem2 = button.parentNode.parentNode.children[2].children[0].innerText;

//         // const timeList = button.parentNode.parentNode.parentNode.parentNode.parentNode.children[1].children[1].children[1];
        

//         const cartContainer = getElement("cart-container")

//         const newCart = document.createElement("div")
         
//         newCart.innerHTML =`
//         <div class="flex bg-[#f5fff6] justify-between items-center md:py-3 mt-3 p-3 rounded-xl">
//                 <div>
//                     <h2 class="font-bold md:text-[15px] text-xl">${productItem}</h2>
//                     <p class="font-bold md:text-sm text-lg text-[#5C5C5C]">${listItem2}</p>
//                 </div>
//                 <div>
//                     <p class="font-medium">${new Date().toLocaleTimeString()}</p>
//                 </div>
//             </div>`
           
// cartContainer.append(newCart)
// })}
document.getElementById("clear").addEventListener("click",function(){
     const cartContainer = getElement("cart-container")
     cartContainer.innerHTML = '';
})