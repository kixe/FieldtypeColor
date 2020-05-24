FieldtypeColor
==============

## Fieldtype/Inputfield for ProcessWire 3.0

Field that stores colors. Many options for Input (HTML5 Inputfield Color, Textfield with changing background, various jQuery/JS ColorPickers, custom jQuery/JS/CSS) and Output (RGB, RGBA, HSL, HSLA, HEX). Package includes Fieldtype Color Select.

## Inputfield  
Select between **5 types of Inputfields** 
 
+ Html5 Inputfield of type='color' (if supported by browser)   
+ Inputfield type='text' expecting a 24bit hexcode string (RGB). Input format: *'#4496dd'*  
The background color of the input fields shows selected color
+ Inputfield of type='text' expecting 32bit hexcode strings (RGB + alpha channel) Input format: *'#fa4496dd'*  
+ Inputfield with **Spectrum Color Picker** (JavaScript)  
Options modifiable
+ Inputfield type='text' with **custom JavaScript** and/or CSS


## Output

Define output format under **Details** - Tab in field settings. Select from the following options:

+ *string* 6-digit hex color. Example: **'#4496dd'**
+ *string* 8-digit hex color with leading Alpha channel (limited browser support).	 Example: **'#fa4496dd'**
+ *string* CSS color value **RGB**. Example: **'rgb(68, 100, 221)'**
+ *string* CSS color value **RGBA**. Example: **'rgba(68, 100, 221, 0.98)'**
+ *string* CSS color value **HSL**. Example: **'hsl(227, 69.2%, 56.7%)'**
+ *string* CSS color value **HSLA**. Example: **'hsla(227, 69.2%, 56.7%, 0.98)'**
+ *string* 32bit raw hex value. Example: **'fa4496dd'** (unformatted output value)
+ *int 32bit*. Example: **'4198799069'** (storage value)
+ *array()*

```
	array(
		[0] => 0-255, // opacity
		[1],['r'] => 0-255,
		[2],['g'] => 0-255,
		[3],['b'] => 0-255,
		['rx'] => 00-ff,
		['gx'] => 00-ff,
		['bx'] => 00-ff,
		['ox'] => 00-ff, // opacity
		['o'] => 0-1 // opacity
	)
```


## Templates & API 
You can always modify values or output format via ProcessWire API.

**Modify output format**  

```
$f = $page->fields->get('myColorField');
$f->outputFormat = 8;
echo $page->color['rx'];
```  

**Modify values**

+ Delete the page field value by setting empty string or *NULL*.
+ The values (int) 0, (string) '0', '00000000' and '#00000000' are similar and stored as (int) 0 (black, full transparent).

```
$page->of(false);
$page->myColorField = 'ff0000'; // red
$page->save('myColorField');
```

## Notes
**Deleting values** is only possible with inputfields of type='text' and via API.

If a **default value** is set, the field is filled with it if the field is empty (for example on newly created pages).  
If Inputfield of type='text' 32bit is selected you can set the value to '#00000000' and the default value will be ignored.
		
The Fieldtype includes
[**Spectrum Color Picker** by Brian Grinstead](https://github.com/bgrins/spectrum)

Any custom Javascript based Inputfield can be used.

---

Fieldtype Select Color Options
==============================

This fieldtype is included in the package. The module is an extension of the Core **FieldtypeOptions** module and offers colors as predefined selectable options via 4 different input field types (Select, SelectMultiple, Checkboxes and Radios).
