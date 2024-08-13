document.addEventListener("DOMContentLoaded", function() {

function chooserandomword(){
  
               const xhr = new XMLHttpRequest();
                    xhr.withCredentials = true;

                    xhr.addEventListener('readystatechange', function () {
                        if (this.readyState === this.DONE) {
                            if (this.status === 200) {
                                const response = JSON.parse(this);
                                      console.log(response);
                                // Assuming the API returns an object with a property 'word'
                                const word = response.body[0];
                                document.getElementById("randomword").textContent = `Generated word: ${word}`;
                            } else {
                                        document.getElementById("randomword").textContent = 'Failed to fetch data';
                            }
                        }

  
              });
           xhr.open('GET', 'https://word-generator2.p.rapidapi.com/?length=5');
    xhr.setRequestHeader('x-rapidapi-key');
                                                 xhr.setRequestHeader('x-rapidapi-host', 'word-generator2.p.rapidapi.com');

                                                 xhr.send(null);
            }
 document.getElementById("randomwordbutton").addEventListener("click",function(){chooserandomword()}); 
});
