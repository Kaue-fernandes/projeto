function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')


    // pegar a tag img para 

    const img = document.querySelector("#profile img")

    //substituir a imagem
if(html.classList.contains('light')) {
    //ligado 
    img.setAttribute('src', './assets/assets/avatar-light.png')

} else {
// desligado
    img.setAttribute('src', './assets/assets/avatar.png')
}


}
