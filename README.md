# HashTag Extracter

## Description

I created this package because of a problem i faced. BAsically, you pass in a starter, an array of what should separete this words and a sentence into the function and it will return you an array with your words. The content of this array are your words but grouped as array elements beginning with the start you specified. Eg if you specify "/" as start it would start all words in the array with "/" or if its "#" it starts all words likee hashtags

## Sample output

wordsextracter(
"#",
["#", " ", "/"],
"A boy is a girl ##awoman day# /go / #gsh"
);
