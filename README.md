This is a very simple font picker with very simple initiation and setup.

Dependencies:
Jquery

Currently this is restricted to only google fonts.

To set up import the font-picker.js and font-picker.css from the following links:

JS:
https://cdn.jsdelivr.net/gh/Brady-Agranoff/font-picker/font-picker.js

CSS:
https://cdn.jsdelivr.net/gh/Brady-Agranoff/font-picker/font-picker.css

To initiate the font picker include a hidden input. Then Include a jquery init statement using the inputs selector as shown below. Any google fonts available must have their font name correctly entered into the "googleFonts" array in the options -- and they will be automatically imported.

```HTML
	<input id="font-family" type="hidden" />
```

```JavaScript
$("#font-family").initFontPicker({
	googleFonts: ["Roboto", "Open Sans", "Mukta", "Pacifico"],
});
```

How do I restyle the font picker?

I have built classes onto different elements of the font-picker. You can inspect elements and reference those classes in custom css. If a style is not working -- try using an !important tag at the end of the style to override styles I have written.

The css selectors I have provided as classes:
.font-picker-display-value
.font-picker-options
.font-picker-container
.font-picker-option

Demo:

https://codepen.io/brady-agranoff/pen/wvyMVGx
