(function() {
    //set the counter
    const buttons = document.querySelectorAll('.counterBtn')
    let count = 0
    

    //add functionality on each button
    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            if (button.classList.contains('prevBtn')) {
                count--
            } else if (button.classList.contains('nextBtn')) {
                count++
            }

            //Select the counter text to change color
            const counter = document.querySelector('#counter')
            counter.textContent = count

            if (count > 0) {
                counter.style.color = 'green'
            } else if (count < 0){
                counter.style.color = 'red'
            } else {
                counter.style.color = 'black'
            }

        })
    })
})();
