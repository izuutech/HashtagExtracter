# HashTag Extracter

## Description

I created this package because of a problem i faced. Basically, it returns an array after you pass in a string/sentence to it. This returned array contains elements that are a word in your sentence as hashtag.

## How it works

You pass in a starter(what each word should start with), an array of what should be used to signify that it should be a new hashtag and your sentence.

The content of the returned array are your words but grouped as array elements beginning with the starter you specified.

Eg. if you specify "/" as the starter it would start all words in the array with "/" or if its "#" it starts all words like hashtags

## Sample usage

First install from npm via

```bash
npm install hashtag-extracter
```

```bash

import extracter from 'hashtag-extracter';

const starter="#";
const triggers=["#", " ", "/"];
const string="A boy is a girl ##awoman day# /go / #gsh";


console.log(extracter(starter, triggers, string))
```

Result will be:

```bash
[
  '#A',    '#boy',
  '#is',   '#a',
  '#girl', '#awoman',
  '#day',  '#go',
  '#gsh'
]
```

You do not necessarily need to console.log your data, use the output immediately

## More info

This project is open source and you are welcome to fork and make changes to improve it then make a pull request. After review, it can be merged

## Incoming features(Required features)

- Decrease the time complexity of the code
