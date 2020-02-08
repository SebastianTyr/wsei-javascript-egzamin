document.addEventListener("DOMContentLoaded", () =>{
    const list = document.getElementById("shopping-list")
    const btn1 = document.getElementById("button-1")
    const btn2 = document.getElementById("button-2")
    const btn3 = document.getElementById("button-3")

    btn1.addEventListener("click", () =>{
        const li = document.createElement("li")
        li.innerText = "chleb"
        list.appendChild(li)
    })

    btn2.addEventListener("click", () =>{
        list.children[list.children.length - 1].remove()
    })

    btn3.addEventListener("click", () =>{
        const copy = list.children[list.children.length - 1].cloneNode(true)
        list.appendChild(copy)
    })
})