var encryptThis = function(text) {
  text = text.split(" ");
  let encrypted = "";
  for(let i=0; i<text.length;i++) {
    let unicode = text[i].charCodeAt(0); //Take the first letter's unicode
    let word = text[i].substring(1,text[i].length); //Use every letter after the first one
    let newWord;
    if(word.length!=1) {
      newWord = unicode + word.charAt(word.length-1) + word.substring(1,word.length-1) + word.charAt(0);
    } else {
      newWord = unicode + word;
    }
    if(i != text.length-1) {
      encrypted += newWord + " ";
    } else {
      encrypted += newWord;
    }
  }
  return encrypted;
}
