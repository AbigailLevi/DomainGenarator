window.onload = function() {
  const pronoun = ["the", "our"];
  const adj = ["great", "big"];
  const noun = ["jogger", "racoon"];

  for (let i = 0; i < pronoun.length; i++) {
   

    for (let c = 0; c < adj.length; c++) {
      

      for (let b = 0; b < noun.length; b++) {
        

        this.console.log(`${pronoun[i]}${adj[c]}${noun[b]}.com`);
      }
    }
  }
};
