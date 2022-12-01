const displayChoices = document.getElementById('choices')
const displayResult = document.querySelector('#result')
const choices = ['rock', 'paper', 'scissors']

const handleClick = (e) => {
     getresult(e.target.innerHTML, choices[Math.floor(Math.random() * choices.length)])
}
choices.forEach(choice=> {
    const button = document.createElement('button')
    button.innerHTML = choice
    displayChoices.appendChild(button)
    button.addEventListener('click', handleClick)

})

const getresult = (userChoice, computerChoice)=>{
    switch(userChoice+computerChoice){
        case 'rockscissors':
        case 'scissorspaper':
        case 'paperrock':

        displayResult.innerHTML=('you select: '+ userChoice + ', computer select :' + computerChoice +  '- you won')
        break
        case 'scissorsrock':
            case 'paperscissors':
            case 'rockpaper':

            displayResult.innerHTML=('you select: '+ userChoice + ', computer select :' + computerChoice +  '- you lost')
            break

            case 'scissorsscissors':
                case 'paperpaper':
                case 'rockrock':

                displayResult.innerHTML=('you select: '+ userChoice + ', computer select :' + computerChoice +  '- its a game')
                break

    }
}
