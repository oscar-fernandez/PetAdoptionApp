const candidateNameList = document.querySelectorAll('.candidate-name');
const applicationList = document.querySelectorAll('.application-container');
const exitButtons = document.querySelectorAll('.application__exit');


candidateNameList.forEach((candidate, i)=>{
    candidate.addEventListener('click', ()=>{
        applicationList[i].classList.toggle('display--off');
    });
});

exitButtons.forEach((button, i)=>{
    button.addEventListener('click', ()=>{
        applicationList[i].classList.toggle('display--off');
    });
});