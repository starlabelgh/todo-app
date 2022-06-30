document.addEventListener("click", function(e){
    //delete feature
    if(e.target.classList.contains("delete-me")){
        if (confirm("Do you really want to delete this item permanently")){
            axios.post('/delete-item', {id: e.target.getAttribute("data-id")}).then(function(){
                e.target.parentElement.parentElement.remove()
           }).catch(function(){
            console.log("Please try again later")
           })
        }
    }
    //update feature
    if(e.target.classList.contains("edit-me")){
       let userInput = prompt("enter your desired new test", e.target.parentElement.parentElement.querySelector(".item-text").innerHTML)
       if (userInput){
        axios.post('/update-item', {text: userInput, id: e.target.getAttribute("data-id")}).then(function(){
            e.target.parentElement.parentElement.querySelector(".item-text").innerHTML = userInput
       }).catch(function(){
        console.log("Please try again later")
       })
       }
    }
})