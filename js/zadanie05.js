const button = document.getElementsByTagName("button")
const container = document.getElementById("container")

for(let i = 0; i < button.length; i++){
    button[i].addEventListener("click", function changeText(){
        container.innerText = button[i].dataset.text
    })
}