var express = require("express");
var router = express();
var Books = require("../src/model/bookdata");

router.post("/addbook", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");

  let bookData = req.body;
  let book = new Books(bookData);
  book.save((err, data) => {
    if (err) {
      return res.status(401).json({
        error: "Error saving to DB",
      });
    } else {
      res.json({
        success: "Data saved",
      });
    }
  });
});

router.get("/books", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
  Books.find().then((books) => {
    console.log(books);
    res.json(books);
  });
});

router.get("/getbook/:id", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
  const id = req.params.id;
  Books.findById(id).then((book) => {
    console.log(book);
    res.json(book);
  });
});

router.delete("/remove/:id", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
  const id = req.params.id;
  Books.findByIdAndDelete(id).then(() => {
    res.json("successfully deleted");
  });
});

router.put("/update", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");

    console.log(req.body)


    const id=req.body.id;
    const image = req.body.image;
    const bookName = req.body.bookName;
    const authorName = req.body.authorName;
    const description = req.body.description;

  Books.findByIdAndUpdate(
    {
      _id: id,
    },
    {
      $set: {
        image: image,
        bookName: bookName,
        authorName: authorName,
        description: description,
      },
    },

    (err,data) => {
      if (err) {
        res.json("update failed");
      }
      return res.json(data);
    }
  );
});

module.exports = router;
