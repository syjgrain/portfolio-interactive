(function(){
    const stageElem = document.querySelector('.stage');
    const houseElem = document.querySelector('.house');
    const barElem = document.querySelector('.progress-bar');
    const selectCharacterElem = document.querySelector('.select-character');
    const mousePos = {x:0, y:0};
    let maxScrollValue;
    
    
    
    
    function resizeHandler(){
        maxScrollValue = document.body.offsetHeight - window.innerHeight;
    }
    
    window.addEventListener('scroll', function(){
        const scrollStatus = pageYOffset / maxScrollValue;
        const zMove = scrollStatus * 980 - 490;
        houseElem.style.transform = 'translateZ(' + zMove + 'vw)';
        
        //progress bar
        barElem.style.width = scrollStatus *100 + '%'; 
    });
    window.addEventListener('mousemove', function(e){
        mousePos.x = -1 + (e.clientX / window.innerWidth) * 2;
        mousePos.y = 1 - (e.clientY / window.innerHeight) * 2;
        stageElem.style.transform = 'rotateX('+ (mousePos.y * 5)+ 'deg) rotateY('+ (mousePos.x * 5)+ 'deg)'
    });
    window.addEventListener('resize', resizeHandler);
    stageElem.addEventListener('click', function(e){
        if(window.pageYOffset < 1000){
            new Character({
                xPos : e.clientX / window.innerWidth * 100,
                speed: Math.random() * 0.5 + 0.2
            });
        }else{
            return false;
        }
            

    });
    
    
    resizeHandler();

    window.onload = function() {
        document.getElementById('contact-form').addEventListener('submit', function(event) {
            event.preventDefault();
            
            this.contact_number.value = Math.random() * 100000 | 0;
            
            emailjs.sendForm('service_x8524n5', 'template_qiuh7za', this)
                .then(function() {
                    alert('SUCCESS!');
                    
                }, function(error) {
                    alert('FAILED...', error);
                
                });
            
        });
        
    }
    emailjs.init("user_hoNqU8eJtZLfsIHoSf3Qc");

})();