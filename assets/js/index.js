
function changeBg(){
    var bgChange = document.getElementById('bgChange');
    var scrollvalue = window.scrollY;
    
    if(scrollvalue < 50){
        bgChange.classList.remove('bgcolor');
        
    }else{
        bgChange.classList.add('bgcolor');       
    }

}

window.addEventListener('scroll' , changeBg);


// pre loader

var loader = document.getElementById('pre_loader');

window.addEventListener('load', function(){
    loader.style.display = 'none';
})

window.on('load', function(){
    $('pre_loader').fadeOut('slow');
})



