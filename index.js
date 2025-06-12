/* Add you solutions here! */
/*solution 1*/
Array.from({length:10},() =>{
    const li=document.createElement("li");
    const img=document.createElement("img");
    img.src="https://picsum.photos/200" ;
    li.append(img);
    document.querySelector("ul").append(li);

})
/*solution 2*/
function openDialog(){
    const modal = document.getElementById("modal-to-open");
    modal.classList.remove("modal--hidden");
    document.getElementById("open-dialog").style.display = "none";
}

/*solution 3*/
const cow = document.querySelector(".follow-me");
document.getElementById("follow-me-parent").addEventListener("mousemove",function (event){
    const {offsetX,offsetY} =event;
    cow.style=`top:${offsetY}px; left:${offsetX}px; position:absolute;`;
})
/*solution 4*/
document.querySelector(".has-children li:last-child").style.backgroundColor = "palevioletred";
document.querySelector(".has-children li:first-child").style.backgroundColor ="blue";
document.querySelector(".has-children li:nth-child(9)").style.backgroundColor ="green";
document.querySelectorAll(".has-children li:nth-child(even)").forEach(element =>element.style=`background-color:lime;color:white;`);
/*solution 5*/
const output= document.querySelector(".wrote");
document.querySelector("input[name='input']").addEventListener("keyup",function(event){
    output.innerHTML = event.target.value;
})
/*solution 6 */

function compareValues(){
    const v1 = parseInt(document.querySelector("input[name=large-value]").value);
    const v2 = parseInt(document.querySelector("input[name=smaller-value]").value);
    if(v2>v1){
        document.querySelector(".error").classList.remove("error--hidden");
        document.querySelector(`label[for ="smaller-value"]`).style.color="red";  
    }
    else{
        document.querySelector(".error").classList.add("error--hidden");
        document.querySelector(`label[for="smaller-value"]`).style.color="black";
    }
}
/*solution 7*/

function renderPhotos({format , author, image_url}){
    const li = document.createElement("li");
  const card = document.createElement("div");
  card.classList.add("card");

  const image = document.createElement("img");
  image.classList.add("card__image");
  image.src = image_url;

  const meta = document.createElement("div");
  meta.classList.add("card__meta");

  const authorEl = document.createElement("p");
  authorEl.classList.add("card__author");
  authorEl.append(author);

  const formatEl = document.createElement("p");
  formatEl.classList.add("card__format");
  formatEl.append(format);

  meta.appendChild(formatEl);
  meta.appendChild(authorEl);

  card.appendChild(image);
  card.appendChild(meta);

  li.appendChild(card);

  return li;
}
const Container = document.querySelector(".photos");
data.photos.map(photo =>Container.appendChild(renderPhotos(photo)));