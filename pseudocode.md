alert()
    alert a message
confirm()
prompt()
    pop up to enter text into to gather data
    (FOR R P or S capability)

What sort of data to I need to keep track of in the duration of the game?
-->Stats
    -User/Computer Wins
    -User/Computer Losses
    -Ties

# Declare Needed Variables
<!-- Primary -->
- wins
-losses
- ties
- computerChoice = ["R","P","S"];  --> array!

<!-- Secondary -->
- userChoice = ["R","P","S"];  

# Task is playing a single game

1. [prompt()] user for their answer
2. [userChoice]
3. Randomly select choice for the computer from [computerChoice]
4. Store choice in [computerChoice]
5. [alert()] user of computer choice
6. Determine the win, loss, or tie in [condition]
        IF the user wins THEN we increment [wins] by 1
            [alert()] user of win
            [alert()] current stats
        IF the user loses THEN we increment [losses] by 1
            [alert()] user of loss
            [alert()] current stats
        IF the user ties THEN we increment [ties] by 1
            [alert()] user of tie
            [alert()] current stats