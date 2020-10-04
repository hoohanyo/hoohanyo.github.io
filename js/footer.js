function openNav() {
    document.getElementById("mySidepanel").style.height = "15.625em";
    document.getElementById("mySidepanel").style.visibility = "visible";
    document.getElementById("openbtn").style.visibility = "hidden";
    document.getElementById("closebtn").style.visibility = "visible";

}

function closeNav() {
    document.getElementById("mySidepanel").style.height = "0";
    document.getElementById("mySidepanel").style.visibility = "hidden";
    document.getElementById("openbtn").style.visibility = "visible";
    document.getElementById("closebtn").style.visibility = "hidden";

}