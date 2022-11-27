const buttonTags=document.querySelectorAll(".rate");
const selectstar=document.getElementById('selectstar');
const secondContainer=document.querySelector('.secondContainer');
const button=document.querySelector('.button');
const container=document.querySelector('.container');
selectstar.innerHTML="5";
   buttonTags.forEach((bu)=>{
    bu.addEventListener('click',()=>{
        selectstar.innerHTML=bu.innerHTML;
    })
   })

button.addEventListener('click', () => {
    secondContainer.classList.remove('hidden');
   container.style.display='none';
})