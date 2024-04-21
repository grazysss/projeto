/*function toggleMode() {
    const html = document.documentElement

    html.classList.toggle('light')

    const img = document.querySelector('#profile img')
    if (html.classList.contains("light")) {
        img.setAttribute("src", "./img/avatar.png")
    }
    else {
        img.setAttribute("src", "./img/avatar-light.png")
    }

    
    const alt = document.querySelector('#profile img')
    if (html.classList.contains("light")) {
        alt.setAttribute("alt", "O homi tá extourado, Mayk Brito") 
    }
    else {
        alt.setAttribute("alt", "O homi tá mais ainda, Mayk Brito.")
    }
}
*/

function toggleMode() {
    const html = document.documentElement
    html.classList.toggle("light")

    const img = document.querySelector("#profile img")
    if(html.classList.contains("light")) {
        img.setAttribute("src", "./img/avatar.png")
        }
    else{
        img.setAttribute("src", "./img/avatar-light.png")
    }

    const alt = document.querySelector("#profile img")
    if(html.classList.contains("light")) {
        alt.setAttribute("alt", "O homi é um estouro, Mayk Brito.")
    }
    else{
        alt.setAttribute("alt", "O homi é mais ainda, Mayk Brito.")
    }
}