(function() {
    'use strict';
    console.log('reading js');

    const guessInput = document.querySelector('#guess');
    const numberDisplay = document.querySelector('.number');
    const potchichi = document.querySelector('.potchichi');
    const resultDisplay = document.querySelector('.result');
    const higherButton = document.querySelector('#higher_button');
    const lowerButton = document.querySelector('#lower_button');
    const rectangle = document.querySelector('.rectangle');
    const resultAnswer = document.querySelector('.resultAnswer p');
    const player1ScoreDisplay = document.querySelector('.player1_score');
    const player2ScoreDisplay = document.querySelector('.player2_score');
    const player2TransitionOverlay = document.querySelector('#player_2_transition');
    const player1TransitionOverlay = document.querySelector('#player_1_transition');
    const gameOverlay = document.querySelector('#game_end_overlay');
    const player2Transition = document.querySelector('.player2_transition');
    const player1Transition = document.querySelector('.player1_transition');
    const restartButton = document.querySelector('#restart_button');
    const volumeButton = document.querySelector('.volume_button');
    const volumeButtonUnmute = document.querySelector('.volume_button_unmuted');
    const gameStartAudio = new Audio('audio/game_start.mp3');
    const buttonPressAudio = new Audio('audio/button_press.mp3');
    const playerTransitionAudio = new Audio('audio/player_transition_acnh.mp3');
    const potchichiHappyAudio = new Audio('audio/potchichi_happy.mp3');
    const potchichiAngryAudio = new Audio('audio/potchichi_angry.mp3');
    const winAudio = new Audio('audio/win.mp3');
    const drawAudio = new Audio('audio/draw.mp3');
    const backgroundMusic = document.querySelector('.background_music');
    const inlineAudioElements = Array.from(document.querySelectorAll('audio'));
    const audioPlayers = [gameStartAudio, buttonPressAudio, playerTransitionAudio, potchichiHappyAudio, potchichiAngryAudio, winAudio, drawAudio];
    let audioMuted = false;
    const winnerDisplay = document.querySelector('.winner');
    const player1FinalScore = document.querySelector('.player1_final_score');
    const player2FinalScore = document.querySelector('.player2_final_score');
    const gameEndHeadline = document.querySelector('#game_end_overlay h2');

    function randomNumber(){
        return Math.floor(Math.random() * 9) + 1;
    }

    let player1Score = 0;
    let player2Score = 0;
    let player1Guesses = 0;
    let player2Guesses = 0;
    let player2TurnStarted = false;

    function updateScoreDisplay() {
        player1ScoreDisplay.textContent = `Player 1: ${player1Score} (Guesses: ${player1Guesses})`;
        player2ScoreDisplay.textContent = `Player 2: ${player2Score} (Guesses: ${player2Guesses})`;
    }

    function isPlayer1Active() {
        return player1ScoreDisplay.classList.contains('highlight');
    }

    function isPlayer2Active() {
        return player2ScoreDisplay.classList.contains('highlight');
    }

    function addScoreIfCorrect(isCorrect) {
        if (!isCorrect) return;
        if (isPlayer1Active()) {
            player1Score++;
        } else if (isPlayer2Active()) {
            player2Score++;
        }
    }

    function startPlayer2Transition() {
        console.log('startPlayer2Transition called');

        if (player2TurnStarted) {
            console.log('already started');
            return;
        }

        player2TurnStarted = true;
        if (player2TransitionOverlay) {
            player2TransitionOverlay.style.display = 'flex';
            player2TransitionOverlay.style.visibility = 'visible';
        }
        if (playerTransitionAudio) {
            playerTransitionAudio.currentTime = 0;
            playerTransitionAudio.play().catch(function(error) {
                console.warn('Player transition audio could not play:', error);
            });
        }
    }

    function startPlayer1Transition() {
        console.log('startPlayer1Transition called');
        if (player1TransitionOverlay) {
            player1TransitionOverlay.style.display = 'flex';
            player1TransitionOverlay.style.visibility = 'visible';
        }
        if (playerTransitionAudio) {
            playerTransitionAudio.currentTime = 0;
            playerTransitionAudio.play().catch(function(error) {
                console.warn('Player transition audio could not play:', error);
            });
        }
    }

 function startEndTransition() {
    console.log('startEndTransition called');
    if (!gameOverlay) return;

    player1FinalScore.textContent = player1Score;
    player2FinalScore.textContent = player2Score;

    if (player1Score === player2Score) {
        if (gameEndHeadline) {
            gameEndHeadline.textContent = 'It is a draw! Try Again?';
        }
        winnerDisplay.textContent = '';
        if (!audioMuted && drawAudio) {
            drawAudio.currentTime = 0;
            drawAudio.play().catch(function(error) {
                console.warn('Draw audio could not play:', error);
            });
        }
    } else {
        const winnerNumber = player1Score > player2Score ? '1' : '2';
        winnerDisplay.textContent = winnerNumber;
        if (gameEndHeadline) {
            gameEndHeadline.textContent = `Congrats to Player ${winnerNumber} for winning the game!`;
        }
        if (!audioMuted && winAudio) {
            winAudio.currentTime = 0;
            winAudio.play().catch(function(error) {
                console.warn('Win audio could not play:', error);
            });
        }
    }

    gameOverlay.style.display = 'block';
 }


    function setButtonsDisabled(disabled) {
        higherButton.disabled = disabled;
        lowerButton.disabled = disabled;
    }

    function setAllAudioMuted(muted) {
        inlineAudioElements.forEach(function(audio) {
            audio.muted = muted;
        });
        audioPlayers.forEach(function(player) {
            if (player) {
                player.muted = muted;
            }
        });
        audioMuted = muted;
        if (volumeButton) {
            volumeButton.style.display = muted ? 'none' : 'block';
        }
        if (volumeButtonUnmute) {
            volumeButtonUnmute.style.display = muted ? 'block' : 'none';
        }
    }

    function playBackgroundMusicIfAllowed() {
        if (!backgroundMusic) return;
        backgroundMusic.loop = true;
        backgroundMusic.volume = 0.35;
        backgroundMusic.muted = audioMuted;
        if (!audioMuted) {
            backgroundMusic.play().catch(function(error) {
                console.warn('Background music could not autoplay:', error);
            });
        }
    }

    if (volumeButton) {
        volumeButton.addEventListener('click', function() {
            setAllAudioMuted(true);
        });
    }

    if (volumeButtonUnmute) {
        volumeButtonUnmute.addEventListener('click', function() {
            setAllAudioMuted(false);
            playBackgroundMusicIfAllowed();
            if (buttonPressAudio) {
                buttonPressAudio.currentTime = 0;
                buttonPressAudio.play().catch(function(error) {
                    console.warn('Button press audio could not play:', error);
                });
            }
        });
    }

    function showRectangle() {
        rectangle.classList.add('rectangle');
        rectangle.classList.remove('rectangle-hidden');
    }

    function hideRectangle() {
        rectangle.classList.remove('rectangle');
        rectangle.classList.add('rectangle-hidden');
    }

    let correctAnswer;

    function updateGameNumbers() {
        const numberValue = randomNumber();
        let resultValue = randomNumber();

        while (resultValue === numberValue) {
            resultValue = randomNumber();
        }

        numberDisplay.textContent = numberValue;
        resultDisplay.textContent = resultValue;
        correctAnswer = resultValue > numberValue ? 'higher' : 'lower';
    }

    

    function handleGuess(userChoice) {
        hideRectangle();
        console.log(`Player 1 Guess: ${player1Guesses}`);
        const isCorrect = userChoice === correctAnswer;

        if (isCorrect) {
            resultAnswer.innerHTML = 'Correct!';
            potchichi.src = 'image/potchichi_happy.gif';
            if (!audioMuted && potchichiHappyAudio) {
                potchichiHappyAudio.currentTime = 0;
                potchichiHappyAudio.play().catch(function(error) {
                    console.warn('Potchichi happy audio could not play:', error);
                });
            }
        } else {
            resultAnswer.innerHTML = 'Wrong!';
            potchichi.src = 'image/potchichi_angry.gif';
            if (!audioMuted && potchichiAngryAudio) {
                potchichiAngryAudio.currentTime = 0;
                potchichiAngryAudio.play().catch(function(error) {
                    console.warn('Potchichi angry audio could not play:', error);
                });
            }
        }

        // function isPlayer1Active() {
        //  return player1ScoreDisplay.classList.contains('highlight');
        // }

        addScoreIfCorrect(isCorrect);
        if (isPlayer1Active()) {
            player1Guesses++;
        } else {
            player2Guesses++;
        }
        updateScoreDisplay();
        setButtonsDisabled(true);

        setTimeout(function() {
            showRectangle();
            updateGameNumbers();
            potchichi.src = 'image/potchichi_idle.gif';
            resultAnswer.innerHTML = '';

            if (isPlayer1Active() && player1Guesses >= 5) {
                startPlayer2Transition();
            } else {
                setButtonsDisabled(false);
            }

            if (isPlayer2Active() && player2Guesses >= 5) {
                startEndTransition();
            } else {
                setButtonsDisabled(false);
            }
        }, 2500); 
    }

    showRectangle();
    updateGameNumbers();
    updateScoreDisplay();
    playBackgroundMusicIfAllowed();

    if (player2Transition && player2TransitionOverlay) {
        player2Transition.addEventListener('animationend', function() {
            player2TransitionOverlay.style.visibility = 'hidden';
            player2TransitionOverlay.style.display = 'none';
            player1ScoreDisplay.classList.remove('highlight');
            player2ScoreDisplay.classList.add('highlight');
            setButtonsDisabled(false);
        });
    }

    if (player1Transition && player1TransitionOverlay) {
        player1Transition.addEventListener('animationend', function() {
            player1TransitionOverlay.style.visibility = 'hidden';
            player1TransitionOverlay.style.display = 'none';
            player1ScoreDisplay.classList.add('highlight');
            player2ScoreDisplay.classList.remove('highlight');
            setButtonsDisabled(false);
        });
    }


    higherButton.addEventListener('click', function() {
        if (buttonPressAudio) {
            buttonPressAudio.currentTime = 0;
            buttonPressAudio.play().catch(function(error) {
                console.warn('Button press audio could not play:', error);
            });
        }
        handleGuess('higher');
    });

    lowerButton.addEventListener('click', function() {
        if (buttonPressAudio) {
            buttonPressAudio.currentTime = 0;
            buttonPressAudio.play().catch(function(error) {
                console.warn('Button press audio could not play:', error);
            });
        }
        handleGuess('lower');
    }); 

    restartButton.addEventListener('click', function() {
        player1Score = 0;
        player2Score = 0;
        player1Guesses = 0;
        player2Guesses = 0;
        player2TurnStarted = false;

        if (gameEndHeadline) {
            gameEndHeadline.textContent = 'Congrats to Player ';
            gameEndHeadline.appendChild(winnerDisplay);
            gameEndHeadline.append(' for winning the game!');
        }

        if (winnerDisplay) {
            winnerDisplay.textContent = '';
        }

        if (resultAnswer) {
            resultAnswer.innerHTML = '';
        }

        if (potchichi) {
            potchichi.src = 'image/potchichi_idle.gif';
        }

        if (player2TransitionOverlay) {
            player2TransitionOverlay.style.display = 'none';
            player2TransitionOverlay.style.visibility = 'hidden';
        }

        if (player1TransitionOverlay) {
            player1TransitionOverlay.style.display = 'none';
            player1TransitionOverlay.style.visibility = 'hidden';
        }

        if (gameOverlay) {
            gameOverlay.style.display = 'none';
        }

        if (gameStartAudio) {
            gameStartAudio.currentTime = 0;
            gameStartAudio.play().catch(function(error) {
                console.warn('Restart audio could not play:', error);
            });
        }

        updateScoreDisplay();
        updateGameNumbers();
        showRectangle();
        setButtonsDisabled(true);
        startPlayer1Transition();
    });

    



    
})();