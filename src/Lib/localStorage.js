// Save to Local Storage
export const WriteScoresToLocalStorage = (userName, scoreQuiz) => {
    const localStorageQuiz_Key = "TriviaTwist-Scoring";

    let scoresPlayers = readScoresFromLocalStorage();

    scoresPlayers.push({ userName: userName, score: scoreQuiz });

    // Sort players in highest to lowest scores ranking
    scoresPlayers.sort((a, b) => b.score - a.score);

    var jsonScoresPlayers = JSON.stringify(scoresPlayers);

    localStorage.setItem(localStorageQuiz_Key, jsonScoresPlayers);
};


// Load from Local Storage based on key:
export function readScoresFromLocalStorage() {
    const localStorageQuiz_Key = "TriviaTwist-Scoring";

    let scoresPlayers = [];
  
    var storedData = localStorage.getItem(localStorageQuiz_Key);
    if (storedData) {
        // load data into array: scoresPlayers 
        // after constructing the JavaScript value or object described by the string
        scoresPlayers = JSON.parse(storedData);
    }
  
    // return array
    return scoresPlayers;
}
