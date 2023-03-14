function openMenu() {
    document.querySelector(".navigation").style.width = "100vw";
    document.getElementById("hamburger-list").style.display='block';
  }
  
function closeMenu() {
  document.querySelector(".navigation").style.width = "0";
  document.getElementById("hamburger-list").style.display='none';

}
var open = false;
function showcart(){
  

    if(open)

    {
        document.getElementById('my-cart').style.display='none';
        open=false;
    }

    else
    {
        document.getElementById('my-cart').style.display='block';
        open=true;
    }
}
function searchfocus(){
  var searchmenu = document.getElementById('onsearch');
  searchmenu.style.display = 'block';    
}

function focusout(){
  var searchmenu = document.getElementById('onsearch');
  searchmenu.style.display = 'none';    
}
