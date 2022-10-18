(function(){
   
    const sliders = [...document.querySelectorAll('.testimoni__body')];
    const botonnext = document.querySelector('#next');
    const botonbefore = document.querySelector('#before');
    let value;

        botonnext.addEventListener('click', ()=> {
            changePosition(1);
        });
    
        botonbefore.addEventListener('click', ()=> {
            changePosition(-1);
        });

     const changePosition = (add)=>{
        const currentTestimoni = document.querySelector('.testimoni__body--show').dataset.id;
        value = Number(currentTestimoni);
        value+= add;

        sliders[Number(currentTestimoni)-1].classList.remove('testimoni__body--show');  
        if(value === sliders.length+1 || value === 0){
            value = value === 0 ? sliders.length : 1;
            }   

        sliders[value-1].classList.add('testimoni__body--show');

    }   

})();