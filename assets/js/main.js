
document.getElementById('popup').style.display ="none";

function openPopup(){
    document.getElementById("popup").style.display = "block";
    document.getElementById("article-form").style.display = "none";
    const user_email = document.getElementById("user-email").value;
    console.log("Your email is" , user_email);
}

function closePopup(){
    document.getElementById("popup").style.display = "none";
    document.getElementById("article-form").style.display = "block";
}