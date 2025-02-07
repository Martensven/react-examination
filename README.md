The application consists of a navbar at the top, where you can choose what to show beneath in the main area:
Homepage
About
Projects (Greeting, Stopwatch, Memory, Toto-list and MovieSearch)
Contact

And att the bottom, a feature to change the theme/background-image.

This project is built using React with Vite. 
I also use react-redux, @reduxjs/toolkit, react-router-dom and gh-pages.
node js v20.18.0

Languages and libraries used: 
HTML, 
React for SPA,
react redux for state management,
vanilla JS to fill in the gaps.
CSS for styling

The commands i've used to set up the application:

npm create vite@latest 
>React
>Javascript

npm install @reduxjs/toolkit
npm install react-router-dom
npm install gh-pages

React hooks used:
UseState for local state management
UseEffect to trigger additional commands.
UseRef to store values without the application having to rerender when its not necessary.

I use all these hooks in my stopWatch application. 
UseState to keep track of elapsed time and if the application is running or not.
UseEffect that runs every time the isRunning function is active, updating every 10 milliseconds.
UseRef to stop the interval and to start the timer again on the correct amount of elapsed time




