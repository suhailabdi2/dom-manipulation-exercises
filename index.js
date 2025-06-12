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