document.addEventListener('DOMContentLoaded', function() {
    const envelope = document.getElementById('letter'); 
    const container = document.querySelector('.container');
    const letter = document.querySelector('.main_letter');
    let animationComplete = false;
    function writeLetter() {
        let i = 0;
        const text = `Happy Valentine's Day! I hope you have a great day today. I'm sorry I can't be there with you today, but
        I hope this little surprise makes up for it. I love you so much and I can't wait to see you again.`;
        const speed = 75; // Speed of typing in milliseconds
      
        function typeWriter() {
          if (i < text.length) {
            document.querySelector(".main_letter2").innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
          }
        }
      
        typeWriter();
      }
    function fadeEnvelope (){
        if (animationComplete === true) {
            console.log('Envelope clicked');
            envelope.style.animation = 'moveLetter 1s forwards'
            container.style.animation = 'fadeOut 1s forwards';
            container.style.position = 'fixed';
            setTimeout( () => {
                letter.style.display = 'flex';
                letter.style.animation = 'dropDown 1s forwards';
            }, 1000);
            setTimeout( () => {
                writeLetter();
            }, 2250);
        } else {
            console.log('Animation not complete');
    }
    }

    envelope.addEventListener('animationend', () => {
        console.log('Animation ended');
        envelope.style.transform = 'rotate(360deg)';
        animationComplete = true;
    })

    container.addEventListener('click', fadeEnvelope);

});
// def pick_random_word(self):
// with open("words.txt", "r") as file:
//     words = file.read().splitlines()
// return random.choice(words)