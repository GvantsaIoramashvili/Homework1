//Homework 1.

function replaceString(str, valueToReplace, valueToReplaceWith) {
    let result = '';
    let index = 0;
    const targetLength = valueToReplace.length;
    for (let i = 0; i < str.length; i++) {
      if (str.slice(i, i + targetLength) === valueToReplace) {
        result += str.slice(index, i) + valueToReplaceWith;
        i += targetLength - 1;
        index = i + 1;
      }
    }
    result += str.slice(index);
    return result;
  }

const inputString = 'This is valueToReplace!';
const replacedString = replaceString(inputString, 'valueToReplace', 'replacementValue');
console.log(replacedString); 


//Homework 2.

function capitalWords(sentence) {
    const words = sentence.split(' ');
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      words[i] = word.charAt(0).toUpperCase() + word.slice(1);
    }
    return words.join(' ');
  }
  
  const inputSentence = 'This is a sentence with capital letters.';
  const capitalSentence = capitalWords(inputSentence);
  console.log(capitalSentence);


  //Homework3.

  function sortUsersByAge(users) {
    return users.sort((a, b) => a.age - b.age);
  }

  const users = [
    { name: 'Lasha', age: 30 },
    { name: 'Saba', age: 20 },
    { name: 'John', age: 25 },
  ];
  const sortedUsers = sortUsersByAge(users);
  console.log(sortedUsers);
  
  const parentDiv = document.querySelector('div')
  const allPs = parentDiv.querySelectorAll('p')
  console.log(allPs)