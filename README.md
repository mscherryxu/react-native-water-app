# Async Week

## React Native Water App

Video Link: https://youtu.be/0w3XzNbXxfc

Hi everyone, this is Cherry and Warren.

For async week we teamed up to create a simple water tracker app using React Native.

This is our app, Hydro Homie! With Hydro Homie you can track your water intake by pressing the corresponding intake icons or the buttons.

If you need to reset, you can hit the reset button to restart your progress at any time.

Once you hit your intake goal, you get a popup to congratulate you- congrats! you’re a hydro homie!

As well as the most interesting man alive coming to commend you.  From there --

we can do it again!

## The technologies we used were:

- React Native framework with Expo CLI
- React Native Packages
- Progress bar
- Modal View
- React Hooks
  - useState to keep track of moving parts
  - useEffect as a lifecycle hook
  - useMemo for app to check for when the goal is met
- Expo Go to render and test on our phone
- Contrast Checker:  https://webaim.org/resources/contrastchecker to ensure good user experience  and accessibility

## Features to add

- Changing the goal
- Customizing water increments
- Animating water progress bar
- Modal view for reset button (are you sure you want to reset? Y/N)
- Screen rotate support
- Calendar and data storage (redux store)
- Support for iOS and web (some React Native elements were platform-specific)
  
## Bugs we ran into

- Installing `pods` was not working for iOS support
- Issues with animation functions
- Issues with image and font formats (.png files refusing to flex)
- Inconsistencies in display across Android devices