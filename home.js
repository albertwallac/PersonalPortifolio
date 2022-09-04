//Functions created to show sessions as selected in the menu
function about(show) {
    var div = document.getElementById("about");
    if(show) 
    {
        div.style.display = "block";
        experience(false)
        contact(false)
        education(false)
        hobbie(false)

    }
    else div.style.display = "none";
}

function experience(show) {
    var div = document.getElementById("experience");
    if(show)
    {
        div.style.display = "block";
        about(false)
        contact(false)
        education(false)
        hobbie(false)
    }
    else div.style.display = "none";
}

function contact(show) {
    var div = document.getElementById("contact");
    if(show)
    {
        div.style.display = "block";
        about(false)
        experience(false)
        education(false)
        hobbie(false)
    }
    else div.style.display = "none";
}

function education(show) {
    var div = document.getElementById("education");
    if(show)
    {
        div.style.display = "block";
        about(false)
        experience(false)
        contact(false)
        hobbie(false)
    }
    else div.style.display = "none";
}

function hobbie(show) {
    var div = document.getElementById("hobbie");
    if(show)
    {
        div.style.display = "block";
        about(false)
        experience(false)
        contact(false)
        education(false)
    }
    else div.style.display = "none";

}