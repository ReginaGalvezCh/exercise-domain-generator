(() => console.log("Me autoejecute"))()
const pronoun = ['the', 'our'];
const adj = ['great', 'crazy'];
const noun = ['jogger', 'racoon'];
const extn = ['.com', '.cl'];


for (let p = 0; p < pronoun.length; p++) {
    for (let a = 0; a < adj.length; a++) {
        for (let n = 0; n < noun.length; n++) {
            for (let e = 0; e < extn.length; e++) {
                const domain = pronoun[p] + adj[a] + noun[n] + extn[e];

                console.log(`www.` + domain);


            }
        }
    }
};