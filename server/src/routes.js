const words = [
  {
    word: "potato",
    meaning: "A starchy plant tuber which is one of the most important food crops, cooked and eaten as a vegetable."
  }
]

module.exports = (express, app) => {

  const r = express.Router();

  r.use("/search", (req, res) => {

    const { q } = req.query;

    if (!q)
      return res.status(400).json({ error: "No substring was provided" });
    
    const matches = words.filter(obj => obj.word.includes(q)).map(obj => obj.word);

    res.status(200).json({ words: matches });

  });

  r.use("/meaning", (req, res) => {
    const { w } = req.query;

    if (!w)
      return res.status(400).json({ error: "No word was provided" });
    
    const match = words.find(obj => obj.word === w);
    if (!match)
      return res.status(400).json({ error: "Word not found" });
    
    res.status(200).json({ meaning: match.meaning });

  });

  app.use("/word", r);

}