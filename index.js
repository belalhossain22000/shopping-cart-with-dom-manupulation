const buttonList = document.querySelectorAll('.btn-primary');
let count= 0;

let grandPrice=0;

for(const button of buttonList){
    
    button.addEventListener('click',function(e){
        count++;
        const items = e.target.parentNode.parentNode.children;
        const iName=items[0].innerText;
        const iprice = parseInt(items[2].children[0].innerText);
        const iquantity= parseInt(items[3].children[0].innerText);
        const totalPrice = iprice*iquantity;
        const tableContainer = document.getElementById('table-container')
        const tr=document.createElement('tr')
        tr.innerHTML=`
        <td>${count}</td>
        <td>${iName}</td>
        <td>${iprice}</td>
        <td>${iquantity}</td>
        <td>${totalPrice}</td>
        `
        tableContainer.append(tr)
    
    const totalExp=document.getElementById('totalExp')
    totalExp.innerText=grandPrice+=totalPrice;
    e.target.setAttribute("disabled", true);
    })
}