var offerslide1 = document.getElementById('offerslide1')
var offerslide2 = document.getElementById('offerslide2')
var offerslide3 = document.getElementById('offerslide3')
var offerslide4 = document.getElementById('offerslide4')
var offerslide5 = document.getElementById('offerslide5')
var offerslide6 = document.getElementById('offerslide6')
var offerslide7 = document.getElementById('offerslide7')
var special_offer = document.getElementById('special_offer')
var left_btn = document.getElementById('left_btn')
var right_btn = document.getElementById('right_btn')
let count = 1;
left_btn.style.display = 'none';

let translateXDistance = 50;
// console.log(special_offer)
right_btn.addEventListener('click', (event) => {
    event.preventDefault()
    if (count < 4) {
        console.log(count++)
        left_btn.style.display = 'block';
        let dis = -(count * translateXDistance);
        console.log(dis)
        special_offer.style.transform = `translateX(${dis}vw)`;
        special_offer.style.width="100vw";

    }
    else {
        right_btn.style.display = 'none';
    }
})
left_btn.addEventListener('click', () => {
    if (count > 0) {
        console.log(count--)
        let dis = -(count * translateXDistance);
        console.log(dis)
        special_offer.style.transform = `translateX(${dis}vw)`;
        right_btn.style.display = 'flex';
    }
    else {
        left_btn.style.display = 'none';
    }
})
