// const element = document.getElementById('three'); 

// window.addEventListener('scroll', () => {
//   const rect = element.getBoundingClientRect();
//   console.log(rect)
//   if (rect.top < window.innerHeight) {
//     // element is visible
//   }
// });


///First select the Elements to Target = Here we target all the images which have data-src 
const images = document.querySelectorAll('img[data-src]');

// we created an instance on intersection observer api
const observer = new IntersectionObserver((entries,observer)=>{
      entries.forEach(item=>{
       if( item.isIntersecting){
        let img = item.target; // get each image
        img.src =img.dataset.src // change the image src
        img.style.width ="300px" // added litle bit animation 
        //  observer.unobserve(img); // if we dont want once
       }else{
        let img = item.target;
        img.src=""
        img.style.width ="100px"
       }
      })
},{
  root:null,
  threshold:0.9,

})


images.forEach(i=>observer.observe(i))