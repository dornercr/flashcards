const topicTitles = {
  vimCommands : "Basic VIM Commands",
  AdvancedVimCommands: "Advanced VIM commands"
  //advancedSSH : "Advanced SSH"
};

const flashcardsData = {
  vimCommands: [
    {
      question: "What is the 'vim' command used for?",
      answer: "Creates a new file or opens an existing file in Vim.\n\nKey Point: Essential command to start working with Vim.\n\nExample:\n```\nvim myfile.txt\n```"
    },
    {
      question: "How do you enter insertion mode in Vim?",
      answer: "Use 'i' to enter insertion mode at the cursor position.\n\nKey Point: Allows you to start typing and editing text.\n\nExample:\n```\ni[type your text here][ESC to exit insertion mode]\n```"
    },
    {
      question: "What does the 'a' command do in Vim?",
      answer: "Enters insertion mode after the current character.\n\nKey Point: Useful for appending text.\n\nExample:\n```\na[type your text here][ESC to exit insertion mode]\n```"
    },
    {
      question: "How do you delete characters in Vim?",
      answer: "Use 'x' to delete the character under the cursor.\n\nKey Point: Quick way to remove individual characters.\n\nExample:\n```\nx[deletes current character]\n3x[deletes 3 characters]\n```"
    },
    {
      question: "What is the purpose of the 'r' command in Vim?",
      answer: "Replaces the current character with the next character you type.\n\nKey Point: Efficient for single character replacements.\n\nExample:\n```\nra[replaces current character with 'a']\n```"
    },
    {
      question: "How do you undo actions in Vim?",
      answer: "Use 'u' to undo the last action.\n\nKey Point: Essential for correcting mistakes.\n\nExample:\n```\nu[undoes last action]\n3u[undoes last 3 actions]\n```"
    },
    {
      question: "What does the 'dd' command do in Vim?",
      answer: "Deletes the current line and copies it to the clipboard.\n\nKey Point: Useful for removing entire lines of text.\n\nExample:\n```\ndd[deletes current line]\n3dd[deletes 3 lines]\n```"
    },
    {
      question: "How do you search for text in Vim?",
      answer: "Use '/' followed by the search term.\n\nKey Point: Allows quick navigation to specific text.\n\nExample:\n```\n/searchterm[press Enter to find]\nn[find next occurrence]\nN[find previous occurrence]\n```"
    },
    {
      question: "What is the function of the 'J' command in Vim?",
      answer: "Joins the current line with the line below it.\n\nKey Point: Useful for combining lines of text.\n\nExample:\n```\nJ[joins current line with the one below]\n3J[joins current line with the 3 lines below]\n```"
    },
    {
      question: "How do you copy and paste in Vim?",
      answer: "Use 'yy' to copy (yank) a line and 'p' to paste.\n\nKey Point: Essential for duplicating and moving text.\n\nExample:\n```\nyy[copies current line]\n2yy[copies 2 lines]\np[pastes below current line]\nP[pastes above current line]\n```"
    },
    {
      question: "What are the basic navigation commands in Vim?",
      answer: "Use 'h' (left), 'j' (down), 'k' (up), 'l' (right) for navigation.\n\nKey Point: Allows movement without arrow keys.\n\nExample:\n```\nh[move left]\nj[move down]\nk[move up]\nl[move right]\n5j[move down 5 lines]\n```"
    },
    {
      question: "How do you navigate to specific positions on the screen in Vim?",
      answer: "Use 'H' for top, 'M' for middle, and 'L' for bottom of the screen.\n\nKey Point: Quick way to move to key screen positions.\n\nExample:\n```\nH[move to top of screen]\nM[move to middle of screen]\nL[move to bottom of screen]\n```"
    },
    {
      question: "How do you move to specific line numbers in Vim?",
      answer: "Use ':' followed by the line number, or 'G' for the last line.\n\nKey Point: Allows quick jumps to specific parts of the file.\n\nExample:\n```\n:1[go to first line]\n:50[go to line 50]\nG[go to last line]\n50G[go to line 50]\n```"
    },
    {
      question: "What commands are used for scrolling in Vim?",
      answer: "Use 'f' to scroll forward and 'b' to scroll backward.\n\nKey Point: Allows quick navigation through long files.\n\nExample:\n```\nf[scroll forward one screen]\nb[scroll backward one screen]\n```"
    },
    {
      question: "How do you move to the end of a line in Vim?",
      answer: "Use '$' to move to the end of the current line.\n\nKey Point: Quick way to navigate to line endings.\n\nExample:\n```\n$[move to end of current line]\n```"
    },
    {
      question: "What does the 'cw' command do in Vim?",
      answer: "Changes the word from the cursor position.\n\nKey Point: Efficient for replacing words.\n\nExample:\n```\ncw[delete from cursor to end of word and enter insert mode]\n```"
    },
    {
      question: "How do you find matching parentheses in Vim?",
      answer: "Use '%' when the cursor is on a parenthesis, bracket, or brace.\n\nKey Point: Useful for navigating complex code structures.\n\nExample:\n```\n%[jump to matching parenthesis, bracket, or brace]\n```"
    },
    {
      question: "What does the 'D' command do in Vim?",
      answer: "Deletes from the cursor position to the end of the line.\n\nKey Point: Quick way to remove part of a line.\n\nExample:\n```\nD[delete from cursor to end of line]\n```"
    },
    {
      question: "How do you save and quit in Vim?",
      answer: "Use ':w' to save, ':q' to quit, ':wq' or 'ZZ' to save and quit.\n\nKey Point: Essential for managing your work in Vim.\n\nExample:\n```\n:w[save changes]\n:q[quit if no changes]\n:q![quit without saving changes]\n:wq[save and quit]\nZZ[save and quit]\n```"
    },
    {
      question: "How do you save to a different file in Vim?",
      answer: "Use ':w filename' to save the current buffer to a new file.\n\nKey Point: Useful for creating copies or renaming files.\n\nExample:\n```\n:w newfile.txt[save current buffer to newfile.txt]\n```"
    }
  ],

  AdvancedVimCommands: [
    {
      "question": "How do you enter visual mode in Vim?",
      "answer": "Press 'v' to enter visual mode, which allows you to select text by moving the cursor.\n\nKey Point: Enables selection of blocks of text for manipulation.\n\nExample:\n```\nv[enter visual mode]\n[use arrow keys or hjkl to select text]\n```"
    },
    {
      "question": "What does the 'y' command do in Vim?",
      "answer": "Copies (yanks) the selected text or line in visual mode or normal mode.\n\nKey Point: Allows copying of text to a buffer for pasting later.\n\nExample:\n```\nyy[copies the current line]\nv[motion]y[copies selected text]\n```"
    },
    {
      "question": "How do you redo an undone action in Vim?",
      "answer": "Use 'Ctrl-R' to redo the last undone action.\n\nKey Point: Useful for restoring changes after undoing them.\n\nExample:\n```\nCtrl-R[restores the most recent undo]\n```"
    },
    {
      "question": "How do you jump to a specific line in Vim?",
      "answer": "Use ':number' to jump to a specific line number.\n\nKey Point: Allows you to quickly navigate to a particular line in the file.\n\nExample:\n```\n:42[jumps to line 42]\n```"
    },
    {
      "question": "How do you open multiple files in Vim?",
      "answer": "Use 'vim file1 file2' to open multiple files.\n\nKey Point: Allows for editing multiple files in one Vim session.\n\nExample:\n```\nvim file1.txt file2.txt\n```"
    },
    {
      "question": "What does ':%s/search/replace/g' do in Vim?",
      "answer": "This command globally searches and replaces all occurrences of 'search' with 'replace' in the file.\n\nKey Point: Essential for performing bulk text replacements.\n\nExample:\n```\n:%s/oldtext/newtext/g[replaces all occurrences of 'oldtext' with 'newtext']\n```"
    },
    {
      "question": "How do you split windows in Vim?",
      "answer": "Use ':split' or ':vsplit' to split the window horizontally or vertically, respectively.\n\nKey Point: Enables viewing and editing multiple files side by side.\n\nExample:\n```\n:split[split window horizontally]\n:vsplit[split window vertically]\n```"
    },
    {
      "question": "How do you close a split window in Vim?",
      "answer": "Use ':q' or 'Ctrl-W q' to close the current split window.\n\nKey Point: Allows for closing individual windows when working with multiple splits.\n\nExample:\n```\nCtrl-W q[closes the current split window]\n:q[also works to close the split window]\n```"
    },
    {
      "question": "How do you open a file in read-only mode in Vim?",
      "answer": "Use 'vim -R filename' to open a file in read-only mode.\n\nKey Point: Prevents unintended changes to the file.\n\nExample:\n```\nvim -R myfile.txt\n```"
    },
    {
      "question": "How do you perform case-insensitive search in Vim?",
      "answer": "Use ':set ignorecase' to make searches case-insensitive, or combine with ':set smartcase' for case-sensitive search when the query contains uppercase letters.\n\nKey Point: Useful for flexible searching in text.\n\nExample:\n```\n:set ignorecase[enables case-insensitive search]\n:set smartcase[case-sensitive if the query contains uppercase]\n```"
    },
    {
      "question": "How do you record and replay macros in Vim?",
      "answer": "Use 'q' followed by a letter to start recording a macro, then perform actions and press 'q' again to stop recording. Replay the macro with '@' followed by the letter used.\n\nKey Point: Macros automate repetitive tasks.\n\nExample:\n```\nqarecord some actionsq[records a macro to 'a']\n@a[replays the macro stored in 'a']\n```"
    },
    {
      "question": "How do you switch between open buffers in Vim?",
      "answer": "Use ':bnext' or ':bprev' to move to the next or previous buffer.\n\nKey Point: Allows quick switching between multiple open files.\n\nExample:\n```\n:bnext[moves to the next buffer]\n:bprev[moves to the previous buffer]\n```"
    },
    {
      "question": "How do you delete all lines matching a pattern in Vim?",
      "answer": "Use 'g/pattern/d' to delete all lines containing the specified pattern.\n\nKey Point: Efficient for removing specific lines in bulk.\n\nExample:\n```\ng/searchterm/d[deletes all lines containing 'searchterm']\n```"
    },
    {
      "question": "How do you indent and outdent lines in Vim?",
      "answer": "Use '>>' to indent and '<<' to outdent the current line or selected lines.\n\nKey Point: Useful for adjusting indentation levels in code.\n\nExample:\n```\n>>[indents the current line]\n<<[outdents the current line]\n```"
    },
    {
      "question": "How do you delete up to a specific character in Vim?",
      "answer": "Use 'd' followed by a character to delete from the cursor to the next occurrence of that character.\n\nKey Point: Useful for quickly deleting specific sections of text.\n\nExample:\n```\ndf[char][deletes from the cursor up to 'char']\n```"
    },
    {
      "question": "How do you delete everything inside a pair of brackets or quotes in Vim?",
      "answer": "Use 'di' followed by the type of bracket or quote to delete the content inside it.\n\nKey Point: Quickly removes the contents within paired symbols.\n\nExample:\n```\ndi[{}][deletes content inside curly braces]\ndi[''][deletes content inside quotes]\n```"
    },
    {
      "question": "How do you comment out multiple lines in Vim?",
      "answer": "In visual mode, select the lines and press ':' followed by 's/^/#/' to comment them out.\n\nKey Point: Useful for adding comments to blocks of code.\n\nExample:\n```\nv[select lines]:s/^/#/[adds '#' to the start of each line]\n```"
    },
    {
      "question": "How do you fold and unfold text in Vim?",
      "answer": "Use 'zf' followed by a motion to fold, and 'zo' to unfold the folded text.\n\nKey Point: Folding helps manage large files by hiding sections of text.\n\nExample:\n```\nzf5j[folds 5 lines]\nzo[unfolds the folded section]\n```"
    }
  ]



/*  whatAreAlgorithms : [
  { question: "What are algorithms?", answer: "A set of instructions to solve a problem or perform a task." },
  { question: "What are the four principles of algorithms?", answer: "Correctness, Efficiency, Clarity, Finiteness." },
  { question: "Why are algorithms important?", answer: "They optimize processes and make decisions, foundational in tech." },
  { question: "What are the types of algorithms?", answer: "Brute force, Divide and Conquer, Dynamic Programming, Greedy, Backtracking." },
  { question: "What is a simple algorithm example?", answer: "Finding the maximum value in an array by iterating through it." },
  { question: "How do algorithms relate to data structures?", answer: "Algorithms manipulate data; structure choice affects efficiency." },
  { question: "What is pseudocode?", answer: "A simplified way to outline an algorithm’s logic." },
  { question: "What’s the difference between an algorithm and a program?", answer: "An algorithm is a plan; a program is its implementation." },
  { question: "What is algorithm complexity?", answer: "Measures resource use (time/space) as input size grows." },
  { question: "What are iterative and recursive algorithms?", answer: "Iterative uses loops; recursive calls itself." },
  { question: "What’s an example of recursion?", answer: "Fibonacci sequence using base cases and recursion." },
  { question: "What is a brute force algorithm?", answer: "Tries all solutions; simple but often inefficient." },
  { question: "What is a heuristic algorithm?", answer: "Finds a good solution quickly when exact ones are impractical." },
  { question: "What’s the difference between deterministic and non-deterministic algorithms?", answer: "Deterministic gives the same result; non-deterministic may vary." },
  { question: "What is a probabilistic algorithm?", answer: "Uses randomization, leading to varying results." },
  { question: "What is an example of divide and conquer?", answer: "Merge Sort: divides data, sorts, then merges." },
  { question: "What is an optimization algorithm?", answer: "Finds the best solution, maximizing or minimizing a function." },
  { question: "What’s the purpose of sorting algorithms?", answer: "Organize data, improving the efficiency of operations." },
  { question: "What are common applications of algorithms?", answer: "Data analysis, search engines, encryption, AI, etc." },
  { question: "How do machine learning algorithms differ from traditional algorithms?", answer: "Machine learning learns and improves; traditional algorithms follow fixed steps." }
],
sortingAlgorithms : [
  {
    question: "What is Bubble Sort?",
    answer: "A simple comparison-based algorithm that repeatedly swaps adjacent elements if they're in the wrong order.\n\nComplexity: O(n²)\nBest for: Small or nearly sorted datasets."
  },
  {
    question: "Bubble Sort Pseudo-code\n\nMnemonic: FFISE\nPhrase: 'Friendly Frogs Inspire Swift Endings Everywhere'",
    answer: "for i from 0 to n-1 do\n    for j from 0 to n-i-2 do\n        if arr[j] > arr[j+1] then\n            swap arr[j] and arr[j+1]\n    end for\nend for"
  },
  {
    question: "What is Quick Sort?",
    answer: "Efficient divide-and-conquer algorithm that selects a pivot, partitions elements, and sorts sub-arrays.\n\nComplexity: Avg O(n log n), Worst O(n²)\nBest for: Large datasets."
  },
  {
    question: "Quick Sort Pseudo-code\n\nMnemonic: FIPQQE\nPhrase: 'Fast Iguanas Prefer Quick Quick Endings Everywhere'",
    answer: "function quicksort(arr, low, high)\n    if low < high then\n        pi = partition(arr, low, high)\n        quicksort(arr, low, pi-1)\n        quicksort(arr, pi+1, high)\nend function"
  },
  {
    question: "What is Merge Sort?",
    answer: "Efficient, stable, divide-and-conquer algorithm that splits arrays and merges sorted halves.\n\nComplexity: O(n log n)\nBest for: Large datasets or when stability is needed."
  },
  {
    question: "Merge Sort Pseudo-code\n\nMnemonic: FIMLRMMME\nPhrase: 'Friendly Iguanas Make Lovely Red Mangoes Merging Magnificently, Even Everywhere'",
    answer: "function mergesort(arr)\n    if length of arr > 1 then\n        mid = length of arr / 2\n        left = arr[0...mid-1]\n        right = arr[mid...end]\n        mergesort(left)\n        mergesort(right)\n        merge(arr, left, right)\nend function"
  },
  {
    question: "What is Selection Sort?",
    answer: "Simple algorithm that repeatedly selects the smallest element from the unsorted portion and moves it to the sorted portion.\n\nComplexity: O(n²)\nBest for: Small datasets or when memory writes are costly."
  },
  {
    question: "Selection Sort Pseudo-code\n\nMnemonic: FMFIMSE\nPhrase: 'Friendly Monsters Find Interesting Mangoes Everywhere, Sweet Everywhere'",
    answer: "for i from 0 to n-1 do\n    min_index = i\n    for j from i+1 to n do\n        if arr[j] < min_index then\n            min_index = j\n    swap arr[i] with arr[min_index]\nend for"
  },
  {
    question: "What is Insertion Sort?",
    answer: "Simple algorithm that builds the sorted array one item at a time.\n\nComplexity: O(n²)\nBest for: Small or nearly sorted datasets."
  },
  {
    question: "Insertion Sort Pseudo-code\n\nMnemonic: FKJWAJE\nPhrase: 'Friendly Koalas Jump With Amazing Joy Every Afternoon Everywhere'",
    answer: "for i from 1 to n-1 do\n    key = arr[i]\n    j = i - 1\n    while j >= 0 and arr[j] > key do\n        arr[j+1] = arr[j]\n        j = j - 1\n    arr[j+1] = key\nend for"
  },
  {
    question: "What is Heap Sort?",
    answer: "Comparison-based algorithm using a binary heap structure, consistently good performance.\n\nComplexity: O(n log n)\nBest for: Large datasets needing consistent performance."
  },
  {
    question: "Heap Sort Pseudo-code\n\nMnemonic: FBFSHE\nPhrase: 'Friendly Bees Fly Swiftly Home Every Evening'",
    answer: "function heapsort(arr)\n    buildMaxHeap(arr)\n    for i from n-1 to 1 do\n        swap arr[0] with arr[i]\n        heapify(arr, 0, i)\nend function"
  },
  {
    question: "What is Radix Sort?",
    answer: "Non-comparative algorithm that sorts integers by grouping digits.\n\nComplexity: O(nk) where k is digits in the largest number.\nBest for: Sorting integers or fixed-length strings."
  },
  {
    question: "Radix Sort Pseudo-code\n\nMnemonic: FFCE\nPhrase: 'Friendly Frogs Count Eggs Everywhere'",
    answer: "function radixsort(arr)\n    for each digit from least significant to most significant do\n        countingSortByDigit(arr, digit)\nend for"
  },
  {
    question: "What are the key principles of sorting algorithms?",
    answer: "Correctness, Efficiency, Stability, and Adaptability for specific input types."
  },
  {
    question: "What is the difference between stable and unstable sorting algorithms?",
    answer: "Stable keeps relative order of equal elements, unstable does not.\n\nStable: Merge, Insertion, Bubble, Counting\nUnstable: Quick, Heap, Selection."
  },
  {
    question: "How do you choose the right sorting algorithm?",
    answer: "Consider dataset size, memory, stability, worst vs average case performance, and implementation complexity."
  }
],
searchAlgorithms: [
  {
    question: "What is Linear Search?",
    answer: "Linear Search checks each element sequentially until the target is found or the list ends.\n\nComplexity: O(n)\nBest for: Small or unsorted datasets.\nPros: Simple and works on any dataset.\nCons: Inefficient for large datasets."
  },
  {
    question: "Linear Search Pseudo-code\n\nMnemonic: FFIFE\nPhrase: 'Friendly Foxes Inspect Forests Endlessly'",
    answer: "for i from 0 to n-1 do\n    if arr[i] == target then\n        return i\n    end if\nend for\nreturn -1"
  },
  {
    question: "When should you use Linear Search?",
    answer: "Use for small, unsorted datasets or when sorting is costly."
  },
  {
    question: "What is Binary Search?",
    answer: "Binary Search halves the search range in sorted datasets until the target is found.\n\nComplexity: O(log n)\nBest for: Large, sorted datasets.\nPros: Faster than Linear Search.\nCons: Requires sorted data."
  },
  {
    question: "Binary Search Pseudo-code\n\nMnemonic: FIMWEE\nPhrase: 'Friendly Iguanas Make Wise, Efficient Explorations'",
    answer: "function binarySearch(arr, target)\n    low = 0\n    high = n - 1\n    while low <= high do\n        mid = (low + high) / 2\n        if arr[mid] == target then\n            return mid\n        else if arr[mid] < target then\n            low = mid + 1\n        else\n            high = mid - 1\n        end if\n    end while\n    return -1"
  },
  {
    question: "When should you use Binary Search?",
    answer: "Use for large, sorted datasets."
  },
  {
    question: "What is Interpolation Search?",
    answer: "Interpolation Search estimates the position of the target using interpolation.\n\nComplexity: O(log log n) best, O(n) worst\nBest for: Uniformly distributed datasets."
  },
  {
    question: "Interpolation Search Pseudo-code\n\nMnemonic: FLIIEER\nPhrase: 'Friendly Lions Interpolate In Every Excellent Region'",
    answer: "function interpolationSearch(arr, target)\n    low = 0\n    high = n - 1\n    while low <= high and target >= arr[low] and target <= arr[high] do\n        pos = low + ((target - arr[low]) * (high - low)) / (arr[high] - arr[low])\n        if arr[pos] == target then\n            return pos\n        else if arr[pos] < target then\n            low = pos + 1\n        else\n            high = pos - 1\n        end if\n    end while\n    return -1"
  },
  {
    question: "When should you use Interpolation Search?",
    answer: "Use when data is uniformly distributed."
  },
  {
    question: "What is Jump Search?",
    answer: "Jump Search divides an array into blocks and jumps ahead to find the target's range, then performs a linear search within that block.\n\nComplexity: O(√n)\nBest for: Large, sorted datasets."
  },
  {
    question: "Jump Search Pseudo-code\n\nMnemonic: FWSJFI\nPhrase: 'Fast Wild Sharks Jump For Ingredients'",
    answer: "function jumpSearch(arr, target)\n    n = length of arr\n    step = √n\n    prev = 0\n    while arr[min(step, n)-1] < target do\n        prev = step\n        step += √n\n        if prev >= n then\n            return -1\n        end if\n    end while\n    for i from prev to min(step, n)-1 do\n        if arr[i] == target then\n            return i\n        end if\n    end for\n    return -1"
  },
  {
    question: "When should you use Jump Search?",
    answer: "Use for large, sorted datasets when binary search isn't practical."
  },
  {
    question: "What is Exponential Search?",
    answer: "Exponential Search first finds a range where the target may lie, then uses binary search within that range.\n\nComplexity: O(log n)\nBest for: Unbounded or unknown-sized datasets."
  },
  {
    question: "Exponential Search Pseudo-code\n\nMnemonic: FBEEFE\nPhrase: 'Friendly Bears Eat Every Fish Early'",
    answer: "function exponentialSearch(arr, target)\n    if arr[0] == target then\n        return 0\n    i = 1\n    while i < n and arr[i] <= target do\n        i = i * 2\n    end while\n    return binarySearch(arr, target, i/2, min(i, n-1))"
  },
  {
    question: "When should you use Exponential Search?",
    answer: "Use for large datasets with unknown size."
  },
  {
    question: "What is Ternary Search?",
    answer: "Ternary Search splits the dataset into three parts and recursively searches the relevant third.\n\nComplexity: O(log₃ n)\nBest for: Large, sorted datasets."
  },
  {
    question: "Ternary Search Pseudo-code\n\nMnemonic: FTTRE\nPhrase: 'Friendly Tigers Traverse Remote Environments'",
    answer: "function ternarySearch(arr, target)\n    low = 0\n    high = n - 1\n    while low <= high do\n        mid1 = low + (high - low) / 3\n        mid2 = high - (high - low) / 3\n        if arr[mid1] == target then\n            return mid1\n        if arr[mid2] == target then\n            return mid2\n        else if target < arr[mid1] then\n            high = mid1 - 1\n        else if target > arr[mid2] then\n            low = mid2 + 1\n        else\n            low = mid1 + 1\n            high = mid2 - 1\n        end if\n    end while\n    return -1"
  },
  {
    question: "When should you use Ternary Search?",
    answer: "Use for large, sorted datasets with high comparison cost."
  },
  {
    question: "What is Fibonacci Search?",
    answer: "Fibonacci Search divides the array using Fibonacci numbers and eliminates sections.\n\nComplexity: O(log n)\nBest for: Large, sorted datasets."
  },
  {
    question: "Fibonacci Search Pseudo-code\n\nMnemonic: FFILFE\nPhrase: 'Friendly Frogs Inspect Leaves For Eating'",
    answer: "function fibonacciSearch(arr, target)\n    fibMm2 = 0\n    fibMm1 = 1\n    fibM = fibMm1 + fibMm2\n    while fibM < n do\n        fibMm2 = fibMm1\n        fibMm1 = fibM\n        fibM = fibMm1 + fibMm2\n    end while\n    offset = -1\n    while fibM > 1 do\n        i = min(offset + fibMm2, n-1)\n        if arr[i] < target then\n            fibM = fibMm1\n            fibMm1 = fibMm2\n            fibMm2 = fibM - fibMm1\n            offset = i\n        else if arr[i] > target then\n            fibM = fibMm2\n            fibMm1 = fibMm1 - fibMm2\n            fibMm2 = fibM - fibMm1\n        else\n            return i\n    end while\n    if fibMm1 and arr[offset + 1] == target then\n        return offset + 1\n    return -1"
  },
  {
    question: "When should you use Fibonacci Search?",
    answer: "Use for large, sorted datasets with random access."
  },
  {
    question: "What is Hashing Search?",
    answer: "Hashing Search uses a hash function to map keys to values for fast lookups.\n\nComplexity: O(1) average case\nBest for: Datasets with unique keys."
  },
  {
    question: "Hashing Search Pseudo-code\n\nMnemonic: HKKVET\nPhrase: 'Happy Kangaroos Keep Vegetables Every Time'",
    answer: "function hashingSearch(arr, key)\n    index = hashFunction(key)\n    if table[index] == key then\n        return value associated with key\n    else\n        resolve collision (e.g., linear probing)\n        return value associated with key\n    return null"
  },
  {
    question: "When should you use Hashing Search?",
    answer: "Use for datasets with unique keys requiring fast lookups."
  }
],
computationalComplexity: [
  {
    question: "What is Time Complexity?",
    answer: "Time complexity describes how the time to run an algorithm scales with input size, measuring efficiency."
  },
  {
    question: "What is Space Complexity?",
    answer: "Space complexity measures the memory used by an algorithm, including input data and auxiliary space."
  },
  {
    question: "What does it take to develop a good algorithm?",
    answer: "A good algorithm balances time and space complexity, running quickly and using minimal memory."
  },
  {
    question: "How significant are Space and Time Complexity?",
    answer: "They determine algorithm efficiency, influencing performance as input size grows."
  },
  {
    question: "What are Asymptotic Notations?",
    answer: "Asymptotic notations (Big O, Omega, Theta) describe the growth of time or space complexity with input size."
  },
  {
    question: "What is Big-O (O) Notation?",
    answer: "Big-O represents the upper bound of time/space complexity, describing the worst-case scenario."
  },
  {
    question: "What is Big-Omega (Ω) Notation?",
    answer: "Big-Omega represents the lower bound of time/space complexity, describing the best-case scenario."
  },
  {
    question: "What is Big-Theta (Θ) Notation?",
    answer: "Big-Theta provides both an upper and lower bound, representing the average-case scenario."
  },
  {
    question: "What are Best, Worst, and Average Case in Asymptotic Analysis?",
    answer: "Best case is the minimum time/space needed, worst case is the maximum, and average case is typical behavior."
  },
  {
    question: "What is the significance of Space Complexity?",
    answer: "Space complexity measures the total memory used, important for systems with limited memory."
  },
  {
    question: "What is the method for calculating Time Complexity?",
    answer: "Time complexity is calculated by analyzing how many times each operation in the algorithm is executed."
  },
  {
    question: "What is the method for calculating Space Complexity?",
    answer: "Space complexity is calculated by determining the memory used by variables, inputs, and outputs."
  },
  {
    question: "What are the key differences between Time and Space Complexity?",
    answer: "Time complexity measures execution time, while space complexity measures memory usage."
  },
  {
    question: "What is Algorithm Analysis?",
    answer: "Algorithm analysis evaluates efficiency through time and space complexity, performed both theoretically and empirically."
  },
  {
    question: "What is Algorithm Complexity?",
    answer: "Algorithm complexity is the time and space required as a function of input size."
  },
  {
    question: "What factors affect the long-term usage of an algorithm?",
    answer: "Factors include efficiency, finiteness, and correctness, ensuring reliable performance over time."
  },
  {
    question: "Why are Time and Space Complexity important in Data Structures?",
    answer: "They ensure efficient operation of data structures when handling large datasets."
  }
],
greedyAlgorithms: [
  {
    question: "What is a Greedy Algorithm?",
    answer: "A greedy algorithm makes locally optimal choices at each step to find a globally optimal solution, focusing on immediate benefits without considering long-term effects."
  },
  {
    question: "Steps for Creating a Greedy Algorithm",
    answer: "1. Define the problem and objective.\n2. Identify the greedy choice at each step.\n3. Make the greedy choice.\n4. Repeat until a solution is found."
  },
  {
    question: "Greedy Algorithm Example: Fractional Knapsack",
    answer: "The fractional knapsack problem optimizes value by including fractions of items based on their value-to-weight ratio.\n\nComplexity: O(n log n) due to sorting."
  },
  {
    question: "Fractional Knapsack Code Example",
    answer: `
function fractionalKnapsack(items, capacity) {
    items.sort((a, b) => b.value / b.weight - a.value / a.weight);  // Sort by value-to-weight ratio
    let totalValue = 0;

    for (let item of items) {
        if (capacity - item.weight >= 0) {
            totalValue += item.value;
            capacity -= item.weight;
        } else {
            totalValue += item.value * (capacity / item.weight);  // Take fraction of the item
            break;
        }
    }
    return totalValue;
}

// Example usage:
let items = [{ weight: 10, value: 60 }, { weight: 20, value: 100 }, { weight: 30, value: 120 }];
console.log(fractionalKnapsack(items, 50));  // Output: 240
`
  },
  {
    question: "Greedy Algorithm Example: Dijkstra's Algorithm",
    answer: "Dijkstra's algorithm finds the shortest path from a source node to all other nodes in a weighted graph.\n\nComplexity: O(V^2) or O(E + V log V) with a priority queue."
  },
  {
    question: "Dijkstra's Algorithm Code Example",
    answer: `
function dijkstra(graph, start) {
    let distances = {};
    let visited = new Set();
    let pq = new PriorityQueue((a, b) => a.distance < b.distance);
    
    distances[start] = 0;
    pq.enqueue({ node: start, distance: 0 });
    
    while (!pq.isEmpty()) {
        let { node, distance } = pq.dequeue();
        if (visited.has(node)) continue;
        visited.add(node);
        
        for (let neighbor in graph[node]) {
            let newDist = distance + graph[node][neighbor];
            if (newDist < (distances[neighbor] || Infinity)) {
                distances[neighbor] = newDist;
                pq.enqueue({ node: neighbor, distance: newDist });
            }
        }
    }
    return distances;
}

// Example usage:
let graph = {
    A: { B: 1, C: 4 },
    B: { A: 1, C: 2, D: 5 },
    C: { A: 4, B: 2, D: 1 },
    D: { B: 5, C: 1 }
};
console.log(dijkstra(graph, 'A'));  // Output: { A: 0, B: 1, C: 3, D: 4 }
`
  },
  {
    question: "Greedy Algorithm Example: Kruskal's Algorithm",
    answer: "Kruskal's algorithm finds the minimum spanning tree of a graph by choosing edges with the smallest weights.\n\nComplexity: O(E log E), where E is the number of edges."
  },
  {
    question: "Kruskal's Algorithm Code Example",
    answer: `
function kruskal(graph) {
    let mst = [];
    let disjointSet = new DisjointSet(graph.vertices);
    
    graph.edges.sort((a, b) => a.weight - b.weight);  // Sort edges by weight
    
    for (let edge of graph.edges) {
        if (!disjointSet.connected(edge.u, edge.v)) {
            disjointSet.union(edge.u, edge.v);
            mst.push(edge);
        }
    }
    return mst;
}

// Example usage:
let graph = { vertices: 4, edges: [{ u: 0, v: 1, weight: 1 }, { u: 1, v: 2, weight: 2 }, { u: 0, v: 2, weight: 4 }, { u: 2, v: 3, weight: 3 }] };
console.log(kruskal(graph));  // Output: minimum spanning tree edges
`
  },
  {
    question: "Greedy Algorithm Example: Huffman Coding",
    answer: "Huffman coding compresses data by assigning shorter codes to more frequent symbols.\n\nComplexity: O(n log n)."
  },
  {
    question: "Huffman Coding Code Example",
    answer: `
function huffmanCoding(freq) {
    let pq = new PriorityQueue((a, b) => a.freq < b.freq);
    for (let char in freq) {
        pq.enqueue({ char, freq: freq[char] });
    }
    
    while (pq.size() > 1) {
        let left = pq.dequeue();
        let right = pq.dequeue();
        pq.enqueue({ char: left.char + right.char, freq: left.freq + right.freq, left, right });
    }
    
    return pq.dequeue();
}

// Example usage:
let freq = { a: 5, b: 9, c: 12, d: 13, e: 16, f: 45 };
console.log(huffmanCoding(freq));  // Output: Huffman tree
`
  },
  {
    question: "Applications of Greedy Algorithms",
    answer: "Used in task scheduling, knapsack problems, Huffman encoding, and resource allocation."
  },
  {
    question: "Disadvantages of Greedy Algorithms",
    answer: "Greedy algorithms may not find the optimal solution in all cases due to local optimization without considering the global solution."
  },
  {
    question: "Limitations of Greedy Algorithms",
    answer: "Greedy algorithms can fail when the optimal solution requires a combination of earlier choices that a greedy strategy may overlook."
  }
]
*/
};