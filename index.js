const Book = require("./Book.js");
const AudioBook = require("./audioBook.js");

async function main() {
  const book = new Book("Harry Potter", "J.K. Rowling", 500);

  await book.read(100);
  await book.read(200);

  book.getProgress();
  book.addBookmark(150);
  book.showBookmark();
  book.showHistory();

  console.log("------");

  const audio = new AudioBook("Atomic Habits", "James Clear", 320, 300);

  await audio.playAudio(50);
  audio.showAudioStats();
}

main();
