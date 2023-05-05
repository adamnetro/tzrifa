window.onload = function(){
    alert("هذا الموقع يحتوي على أكواد خبيثة هل انت متأكد تريد تكملة")
}


let btn = document.querySelector('body a')
let image = document.querySelector('img')

btn.addEventListener('click', () => {
    image.style.display = "block"
})