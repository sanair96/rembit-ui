# rembit_react
## Origins of the front end for the task at hand

## How to use:

```
git clone https://github.com/Laziemo/rembit_react.git 
cd rembit_react &&
npm install -g parcel-bundler &&
npm install &&
npm run dev
```

## Details:

Components:

    MainNavigation
    
    MainSpace
    
        Jumbo

        About

        Footer
    
    Auth (via MainNavigation/Jumbo::Buttons)

### Application Flow

index.js --> App.js --> MainNavigator + MainSpace (default_route: /)


MainNavigator then routes to other components.


### basics.css

This css file contains styling for the components.
Add them as className to components.

class::<color>-back and <color>-font/ eg orange-back blue-font ; is where you set your theme colors.

class::outline is used as a reference to stay aware of div boundaries. Use as a wire framing tool.

## Updates:

Components:

    Profile

    KYC

Improved navigation mechanism:

    Requires recording browserHistory

Auth.js:

Input sanitization can be composed into its own function.


## Commits

When adding new components to this project please consider maintaining the following format:

```

//Files start with the format:
/*
Gita.Network: rembit_react

componenet: <name>
notes: <help-future-you & crew>
developed by (•̪●)==ε/̵͇̿​̿/’̿’̿ ̿ ̿̿ `(•.°)~
*/

// ------------------ ┌∩┐(◣_◢)┌∩┐ ------------------ 
//place dependencies here
// ------------------ ┌∩┐(◣_◢)┌∩┐ ------------------ 
//Start class...
Within a class; functions are separated by:
// ------------------ '(◣_◢)' ------------------
After closing a class, export statements and proptypes are contained in:
// ------------------° ̿ ̿'''\̵͇̿̿\з=(◕_◕)=ε/̵͇̿̿/'̿'̿ ̿ °------------------
export default <name>;
//    ‛¯¯٭٭¯¯(▫▫)¯¯٭٭¯¯’      FIN     ‛¯¯٭٭¯¯(▫▫)¯¯٭٭¯¯’

```



### Cool. Have fun! 

## email: vishalmenon.92@gmail.com
