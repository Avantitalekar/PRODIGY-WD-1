// const nav=document.querySelector('nav');
//   const line=document.createElement('div');
//   line.classList.add('line');
//   nav.appendChild(line);

//   const active=nav.querySelector('.active');
//   let pos =0;
//   let wid =0;

//   if(active)
//   {
//     pos=active.offsetleft;
//     wid=active.offsetwidth;
// line.style.left='${pos}px';
// line.widthh.left='${wid}px';

//   }

//   nav.querySelectorAll('ul li a').forEach(link=>{
//     link.addEventListener('click',e=>{
//         e.preventDefault();

//         const clickedItem=e.target.parentNode;
//         if(!clickedItem.classList.contains('active')&& !nav.classList.contains('animate')){
//             nav.classList.add('animate');

//         clickedItem.classList.add('active')
//         }
//     });
//   });




const navItems = document.querySelectorAll('nav a');

navItems.forEach(item => {
  item.addEventListener('mouseover', function(e) {
    e.target.style.backgroundColor = '#ff00000';
  });

  item.addEventListener('click', function(e) {
    e.target.style.Color= '#000';
  });
});
