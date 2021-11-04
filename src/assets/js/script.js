function navBtn() {
    var btn = document.getElementById('navButton');
    var nav = document.getElementById('navigation');
    console.log("Checking")


    btn.addEventListener('click', function() {
    if(nav.style.display == 'none') {
        nav.style.display = 'block';
    }      
    else {
        nav.style.display = 'none';
    }      
    });
}
