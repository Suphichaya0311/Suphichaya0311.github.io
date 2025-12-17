// หัวใจคลิกแล้วเด้ง
document.addEventListener("click",e=>{
  if(e.target.classList.contains("heart")){
    e.target.classList.toggle("active");
  }
});

// ปฏิทินคลิกแล้วรูปเด้ง
function showPic(img){
  document.getElementById("popupImg").src = img;
  document.getElementById("popup").style.display="flex";
}
function closePic(){
  document.getElementById("popup").style.display="none";
}
