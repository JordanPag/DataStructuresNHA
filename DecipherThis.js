function decipherThis(str) {
  str = str.split(" ");
  let decoded = "";
  for(let i=0; i<str.length;i++) {
    let unicode = str[i].replace(/\D/g, "");
    let word = str[i].replace(/[0-9]/g, '');
    let newWord;
    if(word.length!=1) {
      newWord = String.fromCharCode(unicode) + word.charAt(word.length-1) + word.substring(1,word.length-1) + word.charAt(0);
    } else {
      newWord = String.fromCharCode(unicode) + word;
    }
    if(i != str.length-1) {
      decoded += newWord + " ";
    } else {
      decoded += newWord;
    }
  }
  return decoded;
};
