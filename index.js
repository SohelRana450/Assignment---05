function getElement(id){
    const element = document.getElementById(id)
    return element
}
const heartIcons =document.getElementsByClassName("heart-icon")
for(const icon of heartIcons){
    icon.addEventListener("click",function(){
        const listIcon = getElement("available-number").innerText
        const quantity = Number(listIcon) + 1
        getElement("available-number").innerText = quantity

    })
}    
const cartBtns = document.getElementsByClassName("btn-form")
let coinNumber = 100;
for(const button of cartBtns){
    button.addEventListener("click",function(){
        const element = getElement("coin");
        const callCost = 20;
        //  const productItem = button.parentNode.parentNode.children[1].children[0].innerText
        // const listItem2 = button.parentNode.parentNode.children[2].children[0].innerText;
        if (coinNumber >= callCost) {
            coinNumber -= callCost;
            element.innerText = coinNumber;
        const productItem = button.parentNode.parentNode.children[1].children[0].innerText
        const listItem2 = button.parentNode.parentNode.children[2].children[0].innerText;
            alert(`📞 Calling ${productItem} at ${listItem2}...`);
            addToHistory(productItem, listItem2);

        } else {
            alert("❌ Insufficient coins to make this call.");
        }
})}
function addToHistory(name, number) {
    const cartContainer = getElement("cart-container");

    const newCart = document.createElement("div");
    newCart.innerHTML = `
        <div class="flex bg-[#f5fff6] justify-between items-center md:py-3 mt-3 p-2 rounded-xl">
            <div>
                <h2 class="font-bold md:text-[13px] text-base">${name}</h2>
                <p class="font-bold md:text-sm text-lg text-[#5C5C5C]">${number}</p>
            </div>
            <div>
                <p class="font-normal">${new Date().toLocaleTimeString()}</p>
            </div>
        </div>
    `;
    cartContainer.append(newCart);
}
document.getElementById("clear").addEventListener("click",function(){
     const cartContainer = getElement("cart-container")
     cartContainer.innerHTML = '';
})
let copyCounter = 0;
const copyButton = document.getElementsByClassName("button")
for (const copy of copyButton) {
    copy.addEventListener("click",function(){
const text = copy.parentNode.parentNode.children[2].children[0].innerText;
console.log(text);
// const text2 = copy.parentNode.parentNode.children[1].children[1].innerText;
// console.log(text2);
      const tempInput = document.createElement("input");
      document.body.appendChild(tempInput);
      tempInput.value = text;
      tempInput.select();
      document.execCommand("copy");
      document.body.removeChild(tempInput);
      copyCounter++;
      document.getElementById("copy").innerText = copyCounter;
      alert(`The number has been copied : ${text}`);
    });
}
        // const getButton = getElement("copy").innerText
        // alert(
        // )
        //     const buttonNum = Number(getButton) + 1;
        // getElement("copy").innerText = buttonNum
