let Start = performance.now()
// var time;
// let bioPaths = ["ph 1.jpeg", "ph 2.jfif"];
// let bioPhoto = document.getElementById("bio-segment_photo-galery_photo");
// let cur_bio_photo = 0;

// var next_photo_animation = function(){ 
//     cur_bio_photo++
//     if(cur_bio_photo > bioPaths.length-1)
//         cur_bio_photo = 0;
//     bioPhoto.src = bioPaths[cur_bio_photo];
// }

// var fading_bio = function(op){
//     bioPhoto.style.opacity = bioPhoto.style.opacity + op
//     if(bioPhoto.style.opacity < 1)
//         requestAnimationFrame(function(){fading_bio(op + 0.5)})
// }   

// setInterval(function(){
//     next_photo_animation()
// }, 7000);

let desc_button = document.getElementById('desc_button')
let offer_button = document.getElementById('offer_button') 
let contactsButton = document.getElementById('contacts_button')

window.addEventListener("scroll" , function(){
    if (this.window.pageYOffset < 900){
        desc_button.style.color = 'yellow'
        offer_button.style.color = 'white'
        contactsButton.style.color = 'white'
    }
    if(this.window.pageYOffset > 900 && this.window.pageYOffset < 2000){
        offer_button.style.color = 'yellow'
        desc_button.style.color = 'white'
        contactsButton.style.color = 'white'
    }
    if(this.window.pageYOffset > 2000){
        offer_button.style.color = 'white'
        desc_button.style.color = 'white'
        contactsButton.style.color = 'yellow'
    }
} );

desc_button.addEventListener('click', function(){
    window.scrollBy({ top: 0-window.pageYOffset, behavior: 'smooth' });
})

offer_button.addEventListener('click', function(){
    window.scrollBy({ top: 1000-window.pageYOffset, behavior: 'smooth' });
})

contactsButton.addEventListener('click', function(){
    window.scrollBy({ top: 2100-window.pageYOffset, behavior: 'smooth' });
})