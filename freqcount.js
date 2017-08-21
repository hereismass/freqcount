function countWords(text){
  //we remove punctuation from text. only works with en-US text. We lowercase all the text and remove words less than 2 letters.
  text = text.toLowerCase().replace(/\b\w{1,2}\b/g, "").match(/[^_\W]+/g);

  //our result array
  var result = {};

  //we iterate on each word of the text
  text.forEach(function(word){
    //if we already found this word, we set it at 1 occurence, otherwise we increment
    result[word] ? result[word]++ : result[word] = 1;
  });
  
  return result;
}