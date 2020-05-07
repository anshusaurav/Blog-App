let clearElem = document.querySelector('.clear-anchor');
clearElem.addEventListener('click', function(event){
    let parentFormElem = event.target.closest('form');
    // console.log(parentFormElem);
    parentFormElem.reset();
})

function confirmEdit(event){
    mscConfirm("Delete", "Are you sure you want to delete this post?", function(){
        alert("Post deleted");
      });
}