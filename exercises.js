/**
 *
 */

// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
// ---------------------

function max(var1,var2){
    "use strict";
    if(var1<=var2){
    return var2;}
    else {
    return var1;
    }
    //...
}
console.assert(max(3,4)==4, 'Wrong' );

// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(num1,num2,num3){
    "use strict";
var numbers = [];
numbers.push(num1,num2,num3);
numbers.sort(function(a, b){return a-b;});

    if(numbers[0]<numbers[1] && numbers[1]<numbers[2]){
      return numbers[2];}
    else if (numbers[0]<numbers[1]) {
      return numbers[1];
    }
    else{
      return numbers[0];
    }    //...
}
console.assert(maxOfThree(5,3,7)==7, 'Wrong' );

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(char){
    "use strict";
if (char == 'a'||char == 'e'||char =='i'||char =='o'||char =='u'){
  return true;
}
else{
  return false;
}
    //...
}
console.assert(isVowel('u') === true, 'Wrong');
// ---------------------
// Write a function rovarspraket() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function rovarspraket(phrase){
var newPhrase = '';

var consonant = 'bcdfghjklmnpqrstvwxyz';

characters = phrase.split("");
for (i=0; i < phrase.length; i++)
{
      if (isVowel(characters[i])){
        newPhrase += characters[i];
    } else {
      characters[i] = characters[i] + 'o' + characters[i];
      newPhrase += characters[i];
    }

}
return newPhrase;    //...
}
console.log(rovarspraket('waffles'));

// ---------------------
// Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
// ---------------------

//Sum
function sum(value){
    "use strict";
    var count=0;
    for(var i=0; i < value.length; i++)
   {
      count = count + value[i];
   }
   return count;
    //...
}
var test = [2,2,2,1,1];
console.log(sum(test));
console.assert(sum(test)==8, 'wrong');

//multiply
function multiply(value){
    "use strict";
    value.sort(function(a, b){return b-a;});
    var count=0;
    for(var i=0; i < value.length; i++)
    {
      if(count===0){
        count = value[i];}
      else{
        count = count * value[i];
      }
    }

    return count;
    //...
}
var multi = [10,9,0];
console.assert(multiply(multi)===0, 'Wrong');
console.assert(multiply(multi)===0, 'Wrong');

// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(word){
    "use strict";
    var letters = word.split("");
    var newLetters= letters.reverse();
    return newLetters.join('');

    //...
}
console.log(reverse('trash panda'));
console.assert(reverse('slartibartfast')== 'tsaftrabitrals', 'Wrong');
// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------

function findLongestWord(words){
    "use strict";
var max ='';
words.sort(function(a,b){
  return b.length - a.length;
});
return words[0];
  }
    //...

var wordTest=['one','fish','panda','prototype'];
console.log(findLongestWord(wordTest));
console.assert(findLongestWord(wordTest)=='prototype', 'Wrong');
// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------

var approvedWords = [];
function filterLongWords(words, i){
    "use strict";
    for (var a=0; a<words.length;a++){
      if (words[a].length>i){
        approvedWords.push(words[a]);
    }
    }
  console.log(approvedWords);
  return approvedWords;
      }


//Assert not working but the function is returning the correct values
console.assert(filterLongWords(['turnip','frog','cat','gallop','pancake'],4) == ["turnip","gallop","pancake"], 'wrong');

// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------

function charFreq(string){
    "use strict";
    //...
}
