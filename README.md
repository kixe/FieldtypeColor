FieldtypeColor
=====================

## Fieldtype/Inputfield for ProcessWire 2.0, 3.0

Fieldtype stores a 32bit integer value reflecting a RGBA value.

## Inputfield  
Select between **4 types of Inputfields** 
 
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
+ *string* 32bit raw hex value. Example: **'fa4496dd'**
+ *int 32bit*. Example: **'4198799069'** (unformatted storage value)
		
		
The Fieldtype includes
[**Spectrum Color Picker** by Brian Grinstead](https://github.com/bgrins/spectrum)
