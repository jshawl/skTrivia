# skTrivia
Trivia Game

User Stories:
1. I am a trivia fanatic and I want to play this game to test my knowledge.
2. I am studying, and I want to use trivia as a learning tool.
3. I want to play trivia to test my knowledge against other players.
4. I am a student and I want to play a game that takes my mind of school for a while.
5. I am at work and I want to play trivia while I am on break.
6. I am a parent and I want a game that is safe and fun for my kids to play.
7. I want a trivia game that I can play against my friends.
8. I don't play a lot of online games, so I want something that is easy to play.

***A readme.md file with explanations of the technologies used, the approach taken, installation instructions, unsolved problems, etc.***

After choosing to create a trivia game the frist thing I did was to try and conceptualize how the game would look and be played.  I started out just doing a rough sketch to determine the pieces I would need in the html file to make the game work.

When I had a decent idea of what I wanted to do, I started with my html file.  Initially I just created a skeleton outline of the working parts I thought I would need.  I had my h1, an h2 telling you to click to start, my first question and an empty box where I wanted to keep score.  From there I added radio inputs to select an answer and tried to label everything with divs, ids and classes so I could easily access them in my javascript.  I also added a submit button so I could keep score after every question.

At this point I started working on my javascript file to give my elements some functionality.  The first thing I did in JS was to create variables using jQuery, for the elements I would need to access.

Once I had the buttons and radio inputs working properly I started adding more questions which included more radio inputs, 'submit' buttons and 'next' buttons.  This is where I ran into the most problems.  I had everything working for the most part, but it was very repetitive.

The biggest difficulty for me in javascript was adhering to DRY.  I had a place where I needed 10 submit buttons, but I would have been repetitive to repeat the same function 10 times for each one.  The other place was with the next question button, again creating 10 seemed repetitive.  In both cases the answer was using the jQuery selector for 'this' so that it referred the the parent element and then proceeded to the next question.


Usually when I got stuck or frustrated I would start working on my stylesheet.  I just wanted the page to flow nicely and not look cluttered.  I also wanted it to be able to load on pages of different size.

After I was content in how things were working I tried adding a timer which went pretty well.  I referred to the timerjs exercise that we had done for homework, and that helped me get things running.

Things that were unresesolved were creating a leaderboard with high scores, and tracking scores across games.  I would also like more practice on refactoring for object oriented code.  I also learned a tough lesson which in retrospect is pretty obvious, but giving multiple elements the same ID screws your code up and sent me on a tangent until I figured it out.
