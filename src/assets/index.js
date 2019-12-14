const profile = [{
    img: "Assets/profile.png",
    alt: "image of user",
    name: "Mohamed"
}];


profile.forEach((item, index) => {


    var profile_image = document.getElementById("image");
    profile_image.setAttribute("src", item.img);
    profile_image.setAttribute("alt", item.alt);
    profile_image.className += "profile_img p-10";


    var profile_name = document.getElementById("ProfileName");
    profile_name.className += "profile_name p-1";
    profile_name.innerText = "Welcome " + item.name + ",";

});