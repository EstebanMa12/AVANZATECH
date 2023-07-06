function generateHashtag (str) {
    if (str.trim()===''){
    return false
    }
    const arraySplit = str.split(" ")
    const capitalizedWords = arraySplit.map(word => word.charAt(0).toUpperCase()+ word.slice(1))
    const hashtag = '#'+capitalizedWords.join('');
    if (hashtag.length > 140 || capitalizedWords[capitalizedWords.length - 1].length > 140) {
    return false;
    }
    
    return hashtag
  }