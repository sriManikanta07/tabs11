const about = document.querySelector(".about");
const btns = document.querySelectorAll(".tab-btn")
const contents =document.querySelectorAll(".content");

about.addEventListener("click",(e) =>{
    
    //console.log(e.target);
    const id = e.target.dataset.id;
    //console.log(id);
    // for filtering buttons
    
      if (id) {
          // remove selected from other buttons
          btns.forEach(function (btn) {
            btn.classList.remove("active");
            //console.log("123");
          });
          e.target.classList.add("active");

          //removing active
          contents.forEach((content) =>{
           // console.log(content.currentTarget);
            content.classList.remove("active");
          });
          
        
          //getting element
          const element = document.getElementById(id);
          //console.log(element);
          element.classList.add("active");

     }
    
});