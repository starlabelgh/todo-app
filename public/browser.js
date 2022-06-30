document.addEventListener("click", function(e){
    if(e.target.classList.contains("edit-me")){
       let userInput = prompt("enter your desired new test")
       axios.post('/update-item', {text: userInput, id: e.target.getAttribute("data-id")}).then(function(){

       }).catch(function(){
        console.log("Please try again later")
       })
    }
})