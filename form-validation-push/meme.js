const topText = document.getElementById("top")
const bottomText = document.getElementById("bottom")

const params = document.location.search
const queries = params.replace("?", "").split("&")
const values = queries.map((query) => query.split("=")[1])
const newImage = values[2]

topText.innerText = values[0].replaceAll("+", " ")
bottomText.innerText = values[1].replaceAll("+", " ")

const image = document.getElementById("main-img")
image.src = `img/${newImage}`
