function createLevels(nrLevels){
    for (let i = 0; i < nrLevels; i++) {
        let newLevel = document.createElement('div');
        newLevel.classList.add('level');
        newLevel.id ='level ' + (i+1);
        newLevel.innerHTML = i +1;
        newLevel.addEventListener('click', function(){
            newLevel.innerHTML = 'clicked';
            askQuestion();
            displayAnswer();
        })
        document.getElementById('levels').appendChild(newLevel);
    }
}

function askQuestion(){
    console.log('ask question');
    document.getElementById('question').innerHTML = 'WTF?';
}

function displayAnswer(){
    console.log('display answers');
    document.getElementById('popup').style.display = 'block';
}

