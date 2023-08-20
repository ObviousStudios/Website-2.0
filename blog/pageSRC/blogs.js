const blogStart = document.getElementById("listOfBlogs")

class blogElement{
    constructor(name,id,date,banner){
        name = name || "unnamed?";
        id = id || null;
        date = date || "Unknown!";
        banner = banner || "pageSRC/noBanner.svg";

        this.ContainingDiv = document.createElement("div");
        this.ContainingDiv.classList = "blogContainer";

        this.banner = document.createElement("div");
        this.banner.style.backgroundImage = `url(${banner})`;
        this.banner.classList = "blogBanner";
        this.ContainingDiv.appendChild(this.banner);

        this.lowerPortion = document.createElement("div");
        this.lowerPortion.classList = "blogBottom";
        this.ContainingDiv.appendChild(this.lowerPortion);

        this.name = document.createElement("p");
        this.name.classList = "blogAttribute";
        this.name.innerText = name;
        this.lowerPortion.appendChild(this.name);

        this.date = document.createElement("p");
        this.date.classList = "blogAttribute";
        this.date.style.top = "50%";
        this.date.innerText = date;
        this.lowerPortion.appendChild(this.date);

        blogStart.appendChild(this.ContainingDiv);

        console.log("https://obviousstudios.dev/blog/view?blogID="+encodeURIComponent(id))
        this.ContainingDiv.onclick = () => {
            window.location.href = "https://obviousstudios.dev/blog/view?blogID="+encodeURIComponent(id);
        }
    }
}

fetch("https://raw.githubusercontent.com/ObviousStudios/Website-Asset-Directory/main/json/blogs.json")
.then(code => code.text())
.then((text) => {
  const blogs = JSON.parse(text);

  blogs.forEach(blog => {
    new blogElement(blog.name,blog.source,blog.date,blog.banner);
  });
})