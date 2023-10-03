//  В этой задаче нужно будет написать алгоритм поиска, который скажет, можно ли найти входное слово в головоломке поиска слов, которая тоже подается функции на вход.
// Данная задача имеет два уровня сложности :
// - Первый уровень включает в себя исключительно поиск по вертикали и по горизонтали
// - Второй уровень дополнительно включает в себя поиск по диагонали
// - Слова могут быть записаны слева направо и наоборот.

function searchSubString(puzzle, word) {
  let puzzleRows = puzzle.length
  if (checkVertical(puzzle, word) || checkDiagonal(puzzle, word)) return true
  for (let i = 0; i < puzzleRows; i++) {
    if (checkHorizontal(puzzle[i], word)) {
      return true
    } 
  }
  return false
}

function checkHorizontal(arr, word) {
  let index = 0;
  for (let i = 0; i < word.length; i++) {
    index = arr.indexOf(word[0], index)
    if(index !== -1) {
      let sliceArrWord = arr.slice(index, index + word.length).join('')
      let reversArrWord = arr.slice(index - (word.length - 1), index + 1).reverse().join('')
      if(sliceArrWord === word || reversArrWord === word) {
        return true 
      }
    }
  }
  return false 
}

function checkVertical(puzzle, word) {
  let puzzleRows = puzzle.length
  let index = 0;
  for (let i = 0; i < puzzleRows; i++) {
    index = puzzle[i].indexOf(word[0], index)
    if(index !== -1) {
      if(i + word.length <= puzzleRows) {
        if(checkDown(puzzle, i, index, word)) return true
        if(puzzle[i].indexOf(word[0], index + 1) !== -1) {
          i -= 1;
          index += 1;
        } else {
          index = 0
        }
      } else if(i - word.length + 1 >= 0) {
        if(checkUp(puzzle, i, index, word)) return true
        if(puzzle[i].indexOf(word[0], index + 1) !== -1) {
          i -= 1;
          index += 1;
        } else {
          index = 0
        }
      } else {
        continue;
      }
    } else {
      index = 0;
    }
  }
  return false
}

function checkUp(puzzle, i, index, word) {
  let arrWord = '';
  for (let j = i; j > i - word.length; j--) {
    arrWord += puzzle[j][index]
    if(arrWord === word) return true
  }
}

function checkDown(puzzle, i, index, word) {
  let arrWord = '';
  for (let j = i; j < i + word.length; j++) {
    arrWord += puzzle[j][index]
    if(arrWord === word) return true
  }
}

const validRight =  (index, word, puzzleCols) => index + word.length <= puzzleCols
const validLeft = (index, word) => index - word.length + 1 >= 0
const validUp = (i, word) => i - word.length + 1 > 0
const validDown = (i, word, puzzleRows) => i + word.length <= puzzleRows

function searchDown(puzzle, i, index, word) {
  if(!validDown(i, word, puzzle.length) && !(validLeft(index, word) || validRight(index, word, puzzle[0].length))) return false 
  let rWord = puzzle[i][index];
  let lWord = puzzle[i][index];
  let rIndex = index + 1;
  let lIndex = index - 1;
  for (let j = i + 1; j < word.length; j++) {
    rWord += puzzle[j][rIndex++]
    let reversRWord = rWord.split('').reverse().join("")
    lWord += puzzle[j][lIndex--]
    let reversLWord = lWord.split('').reverse().join("")
    if(rWord === word || reversRWord === word || lWord === word || reversLWord === word) return true
  }
}

function searchUp(puzzle, i, index, word) {
  if (!validUp(i, word, puzzle.length) && !(validLeft(index, word) || validRight(index, word, puzzle[0].length))) return false
  let rWord = puzzle[i][index];
  let lWord = puzzle[i][index];
  let rIndex = index + 1;
  let lIndex = index - 1;
  for (let j = i - 1 ; j >= i - word.length; j--) {

    rWord += j < 0 ? '' : puzzle[j][rIndex++]
    let reversRWord = rWord.split('').reverse().join("")
    lWord += j < 0 ? '' : puzzle[j][lIndex--]
    let reversLWord = lWord.split('').reverse().join("")
    if(rWord === word || reversRWord === word || lWord === word || reversLWord === word) return true
  }
}

function checkDiagonal(puzzle, word) {
  let puzzleRows = puzzle.length
  let index = 0;
  for (let i = 0; i < puzzleRows; i++) {
      index = puzzle[i].indexOf(word[0], index)
      if(index !== -1) {
        if(searchDown(puzzle, i, index, word)) return true
        if(searchUp(puzzle, i, index, word)) return true
        if(puzzle[i].indexOf(word[0], index + 1) !== -1) {
          i -= 1;
          index += 1;
        } else {
          index = 0
        }
      } else {
        index = 0
      }
  }
}

const exam = [
  ["b", "c", "g", "o", "l", "n", "s"],
  ["x", "k", "a", "w", "i", "e", "p"],
  ["a", "n", "w", "k", "k", "e", "n"],
  ["c", "e", "e", "e", "e", "u", "l"],
  ["q", "a", "k", "a", "y", "q", "a"],
  ["h", "u", "k", "a", "e", "a", "u"],
  ["k", "q", "j", "e", "c", "m", "r"],
];

const examplePuzzle = [
  ["b", "l", "g", "o", "l", "d", "s"],
  ["x", "k", "q", "w", "i", "j", "p"],
  ["a", "n", "w", "k", "k", "p", "n"],
  ["h", "e", "e", "e", "k", "i", "l"],
  ["q", "e", "k", "a", "y", "q", "a"],
  ["h", "u", "h", "a", "e", "a", "u"],
  ["k", "q", "j", "c", "c", "m", "r"],
];

// // Level 1
console.log(searchSubString(examplePuzzle, "like")) // true
console.log(searchSubString(examplePuzzle, "gold")) // true
console.log(searchSubString(examplePuzzle, "queen")) // true

// Level 2
console.log(searchSubString(examplePuzzle, "cake")); // true
console.log(searchSubString(examplePuzzle, "socks"))
