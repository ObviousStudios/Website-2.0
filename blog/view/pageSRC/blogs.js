const blogContents = document.getElementById("blogContents");

function getparam(parametername) //blogid here
{
    let params = new URLSearchParams(window.location.search);
    return params.get(parametername);
}

fetch("https://raw.githubusercontent.com/ObviousStudios/Website-Asset-Directory/main/blogs/"+getparam("blogID")+".dave")
.then(code => code.text())
.then((text) => {
  blogContents.innerHTML = text;
})