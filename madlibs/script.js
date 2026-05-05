(function() {
    'use strict';
    console.log('reading js');

    const myForm = document.querySelector('#myform');
    const madlib = document.querySelector('#madlib');
    const overlay = document.querySelector('#overlay');
    const resetButton = document.querySelector('#resetButton');

    myForm.addEventListener('submit', function(event){
        event.preventDefault();

        const noun1 = document.querySelector('#noun1').value;
        const noun2 = document.querySelector('#noun2').value;
        const adj = document.querySelector('#adj').value;
        const bird = document.querySelector('#bird').value;
        const plant = document.querySelector('#plant').value;
        const number1 = document.querySelector('#number1').value;
        const number2 = document.querySelector('#number2').value;
        const number3 = document.querySelector('#number3').value;
        const occupation = document.querySelector('#occupation').value;
        const liquid = document.querySelector('#liquid').value;
        const time = document.querySelector('#time').value;
        const drink = document.querySelector('#drink').value;
        let myText;

        document.querySelector('#out-noun1').innerHTML = noun1;
        document.querySelector('#out-noun2').innerHTML = noun2;
        document.querySelector('#out-adj').innerHTML = adj;
        document.querySelector('#out-bird').innerHTML = bird;
        document.querySelector('#out-plant').innerHTML = plant;
        document.querySelector('#out-number1').innerHTML = number1;
        document.querySelector('#out-number2').innerHTML = number2;
        document.querySelector('#out-number3').innerHTML = number3;
        document.querySelector('#out-occupation').innerHTML = occupation;
        document.querySelector('#out-liquid').innerHTML = liquid;
        document.querySelector('#out-time').innerHTML = time;
        document.querySelector('#out-drink').innerHTML = drink;

        // if(noun1 == ''){
        //     myText = "Please provide a noun"
        //     document.querySelector('#noun1').focus();
        // }
        // else if(noun2 == ''){
        //     myText = "Please provide another noun"
        //     document.querySelector('#noun2').focus(); 
        // }  else if(adj == ''){
        //     myText = "Please provide an adjective"
        //     document.querySelector('#adj').focus(); 
        // }  else if(verb == ''){
        //     myText = "Please provide a verb"
        //     document.querySelector('#verb').focus(); 
        // } else {
        //      myText = `Here are the words you submitted: ${noun1}, ${noun2}, ${adj}, and ${verb}`;
        //      const textFields = document.querySelectorAll('input[type=text]');
        //      for( let i=0;i<textFields.length; i++){
        //         textFields[i].value='';
        //      }
        // }

        overlay.classList.toggle('on');
        overlay.classList.toggle('off');
    });

    resetButton.addEventListener('click', function () {
            overlay.classList.toggle('on');
            overlay.classList.toggle('off');
            myForm.reset();
        });


        madlib.innerHTML = myText;
})();
    