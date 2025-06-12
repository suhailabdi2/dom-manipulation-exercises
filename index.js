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