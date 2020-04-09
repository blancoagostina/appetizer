const modal = document.querySelector(".openModal");
const close = document.getElementById('closeModal');
modal.addEventListener("click",openModal);
close.addEventListener("click",closeModal);


function openModal(){
  document.querySelector(".modal-background").style.display = "block";
  document.querySelector(".modal-background").style.opacity = "1";
  document.querySelector(".modal-background").style.zIndex = "100";
}


function closeModal(){
  document.querySelector(".modal-background").style.opacity = "0";
  $("iframe").each(function() { 
    var src= $(this).attr('src');
    $(this).attr('src',src);  
});
  setTimeout(()=>{
      document.querySelector(".modal-background").style.display = "none";
  },600)
}


