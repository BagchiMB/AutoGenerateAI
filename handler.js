
    function sendData() {
      
        var form = document.getElementById("my_form");
      var XHR = new XMLHttpRequest();
  
      // Bind the FormData object and the form element
      var FD = new FormData(form);
      
      // Define what happens on successful data submission
      XHR.addEventListener("load", function(event) {
        // document.getElementById('my_form').style.display = "none";

        document.getElementById('res').innerHTML = FD.get("name");
        document.getElementById('overlay').style.display = "block";
        my_form.reset();
      });
  
      // Define what happens in case of error
      XHR.addEventListener("error", function(event) {
        alert('Oops! Something went wrong.');
      });
  
      // Set up our request
      XHR.open("POST", "http://34.93.49.60:8888/emailservice/api/");
  
      // The data sent is what the user provided in the form
      XHR.send(FD);
    }
   
