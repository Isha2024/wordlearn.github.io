document.addEventListener("DOMContentLoaded", function() {
let selectedtext;
  var color='rgb(55,55,55)';
  
  
  

function getbuttoncolor(event){
 color=getComputedStyle(event.target).backgroundColor;
  console.log(color);
}
document.getElementById("button1").addEventListener("click",function(event){getbuttoncolor(event)});
  document.getElementById("button2").addEventListener("click",function(event){getbuttoncolor(event)});
  document.getElementById("button3").addEventListener("click",function(event){getbuttoncolor(event)});
  document.getElementById("button4").addEventListener("click",function(event){getbuttoncolor(event)});
  document.getElementById("button5").addEventListener("click",function(event){getbuttoncolor(event)});

   function highlighting(){

     selectedtext=window.getSelection();
     
     let length=selectedtext.getRangeAt(0);

      if(length.startContainer.nodeType==Node.TEXT_NODE && length.endContainer.nodeType==Node.TEXT_NODE){
      
        let span=document.createElement("span");
        span.className="highlighter";
        if(color=='rgb(207, 238, 255)'){
      span.style.background='linear-gradient(to right,rgb(207,238,255),rgb(207,250,255)';
        
 
        }
        if(color=='rgb(242, 222, 252)'){
          span.style.background='linear-gradient(to right,rgb(242,222,252),rgb(242,230,255)';


        }
        if(color=='rgb(247, 208, 239)'){
          span.style.background='linear-gradient(to right,rgb(247,208,239),rgb(247,245,255)';

      
        }
        if(color=='rgb(244, 245, 203)'){
          span.style.background='linear-gradient(to right,rgb(244, 245, 203),rgb(244,245,210)';


        }
        if(color=='rgb(203, 245, 212)'){
          span.style.background='linear-gradient(to right,rgb(203, 245, 212),rgb(203,245,220)';


        }
         length.surroundContents(span);
        const notes=document.createElement("INPUT");
        notes.setAttribute("type","text");
        document.body.appendChild(notes);
        notes.style.borderColor=color;
        notes.style.borderWidth="thick";
    }
   }
               
             
  document.querySelectorAll(".highlightcheck").forEach(element =>{
    document.addEventListener("mouseup", highlighting);
    document.addEventListener("keyup", highlighting);
  });



  

      

});
