document.addEventListener("DOMContentLoaded", function() {

  var topic1 = document.getElementById("topic1");
  let myArray = [document.getElementById("word1"),document.getElementById("word2"),document.getElementById("word3"),document.getElementById("word4"),document.getElementById("word5"),document.getElementById("word6"),document.getElementById("word7"),document.getElementById("word8"),document.getElementById("word9"),document.getElementById("word10"),document.getElementById("word11"),document.getElementById("word12"),document.getElementById("word13"),document.getElementById("word14"),document.getElementById("word15"),document.getElementById("word16"),document.getElementById("word17"),document.getElementById("word18"),document.getElementById("word19"),document.getElementById("word20"),document.getElementById("word21"),document.getElementById("word22"),document.getElementById("word23"),document.getElementById("word24"),document.getElementById("word25"),document.getElementById("word26"),document.getElementById("word27"),document.getElementById("word28"),document.getElementById("word29"),document.getElementById("word30"),document.getElementById("word31")];
   

   var index=0;
  var color="blue";
  function changecolor(i){
    myArray[i].style.color=color;
  }
  
  for(let i=0;i<myArray.length;i++){
    
    myArray[i].addEventListener("click",function(){changecolor(i)});
    
  
  }
  
    function getinput() {
    let input1 = document.getElementById("fname").value;
    myArray[index].innerHTML = input1;
    console.log(myArray[index]);
    index++;
  }
  
  topic1.addEventListener("click", getinput);
 function setcolor(){
    color=document.getElementById("color").value;
    console.log(document.getElementById("color").value);
  }

   document.getElementById("color").addEventListener("input",function(){setcolor()}); 



  

  fetch('/api-key')
  .then(response => response.json())
  .then(data => {
    const apiKey = data.apiKey;
    console.log('API Key:', apiKey);
    // Use the API key as needed in your client-side code
  })
  .catch(error => {
    console.error('Error fetching API key:', error);
  });

 

  

 

 
});
