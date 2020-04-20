function openLightbox(src, isVideo){
    const lightbox = document.getElementById("lightbox");

    if(!isVideo){
        const img = document.getElementById("lightbox-img");
        img.src = src;

        window.addEventListener("click", e => {
            if(e.target.tagName != "IMG"){
                lightbox.style.display = "none";
            }
        })
    } else{
        const vid = document.getElementById("lightbox-vid");
        vid.src = src;

        window.addEventListener("click", e => {
            console.log(e.target.tagName);
            if(e.target.tagName != "video"){
                lightbox.style.display = "none";
            }
        })
    }
    lightbox.style.display = "block";
}
