(function (){
    const titlequestion = [...document.querySelectorAll('.question__titulo')];
    
    titlequestion.forEach(question => {
        question.addEventListener('click', () => {
            let height = 0;
            let answer = question.nextElementSibling;
            let addpadding = question.parentElement.parentElement;

            addpadding.classList.toggle('question__padding--add');
            question.children[0].classList.toggle('question__arrow--rotate');

            if(answer.clientHeight === 0){
                height = answer.scrollHeight;
            }

            answer.style.height = `${height}px`;
        })
    });
})();