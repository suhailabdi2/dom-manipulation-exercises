/* Add you solutions here! */
Array.from({length:10},() =>{
    const li=document.createElement("li");
    const img=document.createElement("img");
    img.src="https://picsum.photos/200" ;
    li.append(img);
    document.querySelector("ul").append(li);

})