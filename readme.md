React Bootstrap Counter
=====================
> A counter input component for react using bootstrap

![alt tag](http://manojsinghnegi.com/img/ezgif-3871712982.gif)

react-bootstrap-counter uses bootstrap and font-awesome for styling so don't forget to include them.
You can inlude your own glyph if you do not want to use the default plus and minus from Awsome font-awesome

```html
<link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css">
<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
```

Installation
------------
```sh
npm install react-bootstrap-personalized-counter --save
````
Usage
---
````javascript
import React from 'react';
import ReactDOM from 'react-dom';
import CounterInput from 'react-bootstrap-personalized-counter';
ReactDOM.render(<CounterInput value={2} min={1} max={50} glyphPlus={{glyph:'fa fa-plus', position:'left'}} glyphMinus={{glyph:'fa fa-minus', position:'right'}} onChange={ (value) => { console.log(value) } } />, document.getElementById('page'));
````
Props
-----
## value
Initial value of the input default is `0`.
```html
<CounterInput value="1" />
```

## max
Maximum range input value can go default is `infinite`.
```html
<CounterInput max={40} />
```

## min
Maximum range input value can go default is `0`.
```html
<CounterInput min={10} />
```

## glyph
Set the position and the glyph displayed.
```html
<CounterInput glyphPlus={{glyph:'fa fa-plus', position:'left'}} glyphMinus={{glyph:'fa fa-minus', position:'right'}} />
```

## glyphPlus
Set the plus glyph, the glyph and the position.
The minus one is not required, the default one is 'fa fa-minus' and the position is the opposite position.
```html
<CounterInput glyphPlus={{glyph:'fa fa-plus', position:'left'}} />
```

## glyphMinus
Set the minus glyph, the glyph and the position.
The plus one is not required, the default one is 'fa fa-plus' and the position is the opposite position.
```html
<CounterInput glyphMinus={{glyph:'fa fa-minus', position:'right'}} />
```

## onChange
Get called whenever input field value gets changed returns input `value` as a argument.
```html
<CounterInput onChange={ (value) => { console.log(value) } } />
```

Customize look and feel
-----------------------
The main parent div is consist of a class `.counter-input` with this you can style its children because react-bootstrap-counter uses bootstrap you can customize it fairly easily

```css
/* to style input use */
.counter-input .form-control {
    /* your style */
}
/* to style buttons use */
.counter-input .input-group-addon {
     /* your style */
}
```

Using this component then please star this component and feel free to contribute.

### About Me
 * [Github](http://github.com/ayyouboulidi) (@ayyouboulidi)

this project is forked from:

 * [My website](http://manojsinghnegi.com) (manojsinghnegi.com)
 * [Github](http://github.com/manojsinghnegiwd) (@manojsinghnegiwd)
 * [Twitter](http://twitter.com/manojnegiwd) (@manojnegiwd)
