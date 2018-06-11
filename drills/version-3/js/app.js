const canvas = document.querySelector(".canvas");

function createCanvas() {
    for (let i = 0; i < 198; i++) {
        const cell = document.createElement("div")
        cell.classList.add("cell")
        cell.addEventListener("click", (event => {
            event.target.style.backgroundColor = currentColor;
        }))
        canvas.appendChild(cell)
    }
}
createCanvas()

function createPalette() {


    const colorPalette = document.querySelector(".color-palette")
    const colors = ["red", "blue", "green", "yellow", "pink", "black", "orange"]

    colors.forEach(color => {
        const brush = document.createElement("div")
        brush.classList.add("brush")
        brush.style.backgroundColor = color
        brush.dataset.color = color
        brush.addEventListener("click", (event) => {
            currentColor = event.target.dataset.color
        })

        colorPalette.appendChild(brush)
    })


}
createPalette();