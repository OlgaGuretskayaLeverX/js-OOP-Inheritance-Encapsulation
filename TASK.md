# 📚 OOP Reading Tracker System

## 🧠 Project Story

You are building a reading tracker application for a digital library.

Users want to track books they read, monitor progress, save bookmarks, and even listen to audiobooks.

The system will grow step by step, and each part will add new OOP concepts.

---

# 🏗️ Project Goal

By the end of this project you will build:

- Book tracking system
- Reading progress system
- Bookmark system
- Reading history system
- Audiobook system
- Async reading simulation
- Encapsulated OOP architecture

---

# 📦 Class Structure

Book
↑
AudioBook

---

# 📖 Part 1 — Create a Book

## 🎯 Story

The library wants to store basic information about books.

Each book should have a title, author, and number of pages.

## ✅ Requirements

Create a class `Book` with:

### Properties:

- title (string)
- author (string)
- pages (number)

### Methods:

- showBookInfo()

## 🧾 Expected Output Example:

Harry Potter by J.K. Rowling has 500 pages

---

# 📊 Part 2 — Reading Progress

## 🎯 Story

Users want to track how many pages they have read in a book.

The app should store reading progress and update it when the user reads more pages.

## ✅ Requirements

Add to `Book`:

### Property:

- \_readPages (number, starts from 0)

### Method:

- read(pages)

## 🧾 Expected Output Example:

Current progress: 50/500

---

# 🚫 Part 3 — Data Validation

## 🎯 Story

Some users accidentally enter incorrect reading data.

The system must protect against invalid values.

## ✅ Rules

- Read pages cannot be less than 0
- Read pages cannot exceed total pages

## 🧾 Expected Behavior

If user tries to read too many pages:

Current progress: 500/500

---

# 📈 Part 4 — Reading Progress Percentage

## 🎯 Story

Users want to see how much of the book they have completed.

## ✅ Requirements

Create method:

- getProgress()

## 🧾 Output Example:

You finished 70% of the book

---

# 🔖 Part 5 — Bookmark System

## 🎯 Story

Readers want to save their current position in a book so they can return later.

## ✅ Requirements

Add private property:

- #bookmark

### Methods:

- addBookmark(page)
- showBookmark()

## 🚫 Rules

- Bookmark must be between 1 and total pages
- Invalid values must be rejected

## 🧾 Output Example:

Bookmark added on page 120

---

# 📝 Part 6 — Reading History

## 🎯 Story

The company wants to store a history of all reading sessions.

This helps users track how often and how much they read.

## ✅ Requirements

Add property:

- \_readingHistory (array)

### Store:

- pages read
- time of reading session

## 🧾 Example:

[
"Read 20 pages at 18:30",
"Read 15 pages at 20:10"
]

---

# 🔐 Part 7 — Encapsulation

## 🎯 Story

The system is growing and data safety is now important.

We must protect internal data from direct modification.

## ✅ Rules

### Private data:

- #bookmark (cannot be accessed outside class)

### Protected-style data:

- \_readPages
- \_readingHistory

## 🧠 Concept Explanation

- Private fields (#) → fully hidden
- Protected-style (\_) → should NOT be changed directly, but usable in child classes

## 🚫 Example of bad practice:

book.\_readPages = 9999

---

# 🎧 Part 8 — AudioBook (Inheritance)

## 🎯 Story

The library introduces audiobooks.

Users can now listen instead of reading.

## ✅ Requirements

Create class:

- AudioBook extends Book

### Additional properties:

- audioLength
- currentMinute

### Method:

- playAudio(minutes)

## 🧾 Output Example:

Listening progress: 40/300 minutes

---

# 🧬 Part 9 — Protected Data in Inheritance

## 🎯 Story

AudioBook needs access to reading progress from Book.

## ✅ Requirement

Use protected-style fields inside child class:

- this.\_readPages

### Create method:

- showAudioStats()

---

# ⏳ Part 10 — Async Reading Simulation

## 🎯 Story

Reading should feel like a real process, not instant.

We simulate reading time.

## ✅ Requirements

Make method:

- read(pages)

asynchronous using:

- async/await
- setTimeout

## 🧾 Output Example:

Reading 30 pages...
Finished reading session

---

# 🏁 Final Result

After completing all tasks, your system will support:

✔ Books  
✔ Audiobooks  
✔ Reading progress  
✔ Bookmarks  
✔ Reading history  
✔ Inheritance  
✔ Encapsulation  
✔ Async behavior

---
