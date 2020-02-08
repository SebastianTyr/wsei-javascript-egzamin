//Podpunkt 1
const sampleClass = document.getElementsByClassName("sample_class")

function getTagsOfElements(element){
    let array = []

    for(let i = 0; i < element.length; i++){
        array.push(element[i].tagName)
    }

    return array
}

console.log(getTagsOfElements(sampleClass))

//Podpunkt 2
const sapmlpeId = document.getElementById("sample_id");

function getClassesOfElement(element) {
    let array = [];
    let classesList = element.classList

    for(let i = 0; i < classesList.length; i++){
        array.push(classesList[i])
    }
    return array
}
console.log(getClassesOfElement(sapmlpeId));

//Podpunkt 3
const sampleClass2 = document.getElementsByClassName("sample_class_2")
const list = sampleClass2[0].getElementsByTagName("li")

function getInnerTextsOfElements(elements){
    let array = []

    for(let i = 0; i < elements.length; i++){
        array.push(elements[i].innerText)
    }
    return array
}
console.log(getInnerTextsOfElements(list))

//Podpunkt 4
const links = document.getElementsByTagName("a")

function getAddressesOfElements(elements){
    let array = []

    for(let i = 0; i < elements.length; i++){
        array.push(elements[i].getAttribute("href"))
    }
    return array
}
console.log(getAddressesOfElements(links))

//Podpunkt 5
const sampleClass3 = document.getElementsByClassName("sample_class_3")[0]
const sampleClass3Children = sampleClass3.children

function getChildrenTags(element){
    let array = []

    for(let i = 0; i < element.length; i++){
        array.push(element[i].tagName)
    }
    return array
}
console.log(getChildrenTags(sampleClass3Children))