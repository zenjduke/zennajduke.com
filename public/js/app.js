
// Modal Image Gallery

$(document).on("click", ".project", function (e) {

    e.preventDefault();
    
    document.getElementById("project-modal").style.display = "block";

    var title = $(this).attr("alt");
    var image = $(this).attr("src");
    var demo = $(this).attr("demo");
    var git = $(this).attr("git");

    console.log(title);
    console.log(demo);
    console.log(git);

    $("#project-info").empty().text(title);
    $("#project-git").attr("href", git);
    $("#project-demo").attr("href", demo);
    $("#project-img").attr("src", image);

});


// Change style of navbar on scroll
window.onscroll = function() {myFunction()};

function myFunction() {
      var navbar = document.getElementById("myNavbar");
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
          navbar.className = "w3-bar" + " w3-card" + " w3-animate-top" + " w3-white";
      } else {
          navbar.className = navbar.className.replace(" w3-card w3-animate-top w3-white", "");
      }
};

// Used to toggle the menu on small screens when clicking on the menu button
function toggleFunction() {
      var x = document.getElementById("navSmall");
      if (x.className.indexOf("w3-show") == -1) {
          x.className += " w3-show";
      } else {
          x.className = x.className.replace(" w3-show", "");
      }
};