const words = [
  {
    word: "potato",
    meaning: "A starchy plant tuber which is one of the most important food crops, cooked and eaten as a vegetable."
  }
]

module.exports = (express, app) => {

  const r = express.Router();

  r.use("/search", (req, res) => {

    let { q } = req.query;

    if (!q)
      return res.status(400).json({ error: "No substring was provided" });
    
    q = q.toLowerCase();
    
    const matches = words.filter(obj => obj.word.includes(q)).map(obj => obj.word);

    res.status(200).json({ words: matches });

  });

  app.use("/word", r);

}