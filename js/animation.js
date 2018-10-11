const $rombo = document.querySelectorAll('.part2a ,.part2 ,.contCuadrito')
window.addEventListener("resize", heightRombo);

function heightRombo() {
    $rombo.forEach((ele,index)=> {
        ele.style.height = `${ele.clientWidth}px`
    })
}
heightRombo()
