let Start = performance.now()
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
    window.scrollBy({ top: 1100-window.pageYOffset, behavior: 'smooth' });
})

contactsButton.addEventListener('click', function(){
    window.scrollBy({ top: 2100-window.pageYOffset, behavior: 'smooth' });
})
