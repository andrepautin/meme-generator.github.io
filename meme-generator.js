let memeData = document.getElementById("meme-data");
let memeList = document.querySelector(".memes");

memeData.addEventListener("submit", function(e) {
    e.preventDefault;
    let memeItem = document.createElement("div");
    memeItem.classList.add("meme");

    let imageURL = document.getElementById("meme-image").value, 
    src = imageURL, 
    image = document.createElement("img");
    image.src = src;

    let memeTop = document.createElement("div");
    memeTop.classList.add("text", "top");
    memeTop.innerText = document.getElementById("top-text").value;

    let memeBottom = document.createElement("div");
    memeBottom.classList.add("text", "bottom");
    memeBottom.innerText = document.getElementById("bottom-text").value;

    let removeMeme = document.createElement("div");
    removeMeme.classList.add("delete-mark");
    removeMeme.innerText = "X";
    removeMeme.style.color = "red";

    memeList.appendChild(memeItem);
    memeItem.appendChild(image);
    memeItem.appendChild(memeTop);
    memeItem.appendChild(memeBottom);
    memeItem.appendChild(removeMeme);
    memeData.reset();
});

function remove(e){
    e.target.parentNode.remove();
}
memeList.addEventListener("click", remove, false);
