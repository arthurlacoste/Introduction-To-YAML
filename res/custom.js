function myFunction() {
    var x = document.getElementsByClassName("gitbook-link");
    //console.log(x[0]);
    x[0].innerHTML = "Arthur Lacoste";
    x[0].href = "http://arthurlacoste.com"
}

  gitbook.events.bind("page.change", function() {
       myFunction();
    });
