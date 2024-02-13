document.addEventListener('DOMContentLoaded', function() {
    const envelope = document.getElementById('letter'); 
    const container = document.querySelector('.container');
    const letter = document.querySelector('.main_letter');
    let animationComplete = false;
    

    const paragraphs = [
        "Dear Jess,",
        "I'm a much better writer than I am a speaker. Writing down my thoughts more clearly is easier as I can think about them thoroughly. As time passes each day, I am getting more and more attached to you; you have become much more important to me in the past couple of months than anyone has in a while. I'm still in awe of how far we have come since last September, and I would have never expected any of these moments that we have had to ever happen. I am glad that I have met you. Every day, I am thankful that we talked all those months ago, which felt like a long time, but at the same time, it felt like yesterday. Whenever we hang out, whenever I am around you, time slows down, and I feel comforted by your presence. While you might not notice sometimes, I absolutely love all the times we are around each other, whether it be merely doing homework or following you around downtown while you do your errands.",
        "So much has changed for me in the past 6 months. You have helped me with things that you might know about. I have stopped fearing the future; I have stopped worrying about what might happen or not. The overthinking that happened has slowed down; I can be calmer, more than ever. For the first time in a long time, I can see the path of a possible future. I see a future where I settle down in a fantastic house that I would call home, where I would have a view of a forest with trees that are very much climbable by my kids. I want to tell my wife that we made it, built our home up from nothing, and made it a comfortable place for a family to be in.",
        "I want you to be part of that life, to be there beside me whenever I reach a milestone. I want to be there for you all the same. I know there will be times when you might feel alone, thinking it's you against the world. I've been there; I have been in deep valleys of being lost in life, but I have also been in the peaks of mountains and seen the views that many might not be able to see. You're not alone; I will be there alongside you as much as you need.",
        "While these are simple goals, they will be a rough and complicated path to climb. I am willing to go through it all to reach them. I know I can. I have strengths and weaknesses and am imperfect in several ways. After all, I am human.",
        "Before, you mentioned that you wanted to be a 'chill' girlfriend, but the way I see it, you are an awesome girlfriend already. I know there are a few hiccups here and there, but that's what relationships are all about: working through it together through communication and teamwork. How you have treated me in the past 3 months has been the best warm, comforting feeling I have felt in a long time.",
        "You truly are an incredible person; your stunning beauty and your cute smile, and to top it off, you have a personality that is unique to only you. A personality that can't be matched by anyone else, one who cares about her friends, worries about her loved ones when something feels wrong, brings random snacks without even asking, and checks up on someone when they're feeling down. There isn't a thing I would change about you; there isn't a thing I would add except the exceeding feelings that are building up every day. I hope we can continue to build upon this foundation that we have built so far, to blossom our relationship into something that others would see and immediately know that 'they are so in love.' The future can be rewritten, and it is up to us to change it; it is up to us to take things one step further, one step at a time; I will help you in any way that I can, and I promise that I won't leave because of some minor reasons, I will be there for you always as much as I can. ",
        "I love you,",
        "Caleb"
    ];

    function writeParagraph(index) {
        if (index >= paragraphs.length) return; 
        
        const paragraph = paragraphs[index];
        let i = 0;
        const speed = 50; // Typing speed
        const elementId = `paragraph${index + 1}`;
        const element = document.getElementById(elementId); 

        function typeWriter() {
            if (i < paragraph.length) {
                element.innerHTML += paragraph.charAt(i);
                i++;
                setTimeout(typeWriter, speed);
            } else {

                setTimeout(() => writeParagraph(index + 1), 500); 
            }
        }

        typeWriter();
    }

    function writeLetter() {
        writeParagraph(0); 
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
