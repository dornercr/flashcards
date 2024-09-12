const topicTitles = {
  dataStructuresAndAlgorithms: "Data Structures and Algorithms",
  sortingAlgorithms: "Sorting Algorithms",
  searchAlgorithms: "Search Algorithms",
  computationalComplexity: "Computational Complexity",
  whatAreAlgorithms: "What Are Algorithms?",
  greedyAlgorithms: "Greedy Algorithms"
};

const flashcardsData = {
    dataStructuresAndAlgorithms : [
    {
      question: "What is Big O Notation?",
      answer: "Measures algorithm efficiency by how time or space grows with input size.\n\nKey Point: Critical for evaluating and comparing algorithm performance\n\nExample:\n```\nO(1) - Constant time\nO(n) - Linear time\nO(n^2) - Quadratic time\n```"
    },
    {
      question: "What is an Array?",
      answer: "Linear structure storing elements of the same type in contiguous memory, accessed by index.\n\nKey Point: Basic structure in many algorithms\n\nCode Example:\n```\n// Create an array\nlet arr = [1, 2, 3, 4, 5];\n// Access element at index 2\nconsole.log(arr[2]);  // Output: 3\n```"
    },
    {
      question: "What is a Linked List?",
      answer: "A sequence of nodes, each containing data and a reference to the next.\n\nKey Point: Useful for dynamic data structures\n\nCode Example:\n```\nclass Node {\n  constructor(data) {\n    this.data = data;\n    this.next = null;\n  }\n}\n\nclass LinkedList {\n  constructor() {\n    this.head = null;\n  }\n  add(data) {\n    let newNode = new Node(data);\n    if (!this.head) {\n      this.head = newNode;\n    } else {\n      let current = this.head;\n      while (current.next) {\n        current = current.next;\n      }\n      current.next = newNode;\n    }\n  }\n}\n```"
    },
    {
      question: "What is a Stack?",
      answer: "LIFO structure where elements are added/removed from the top.\n\nKey Point: Used for backtracking algorithms\n\nCode Example:\n```\nclass Stack {\n  constructor() {\n    this.stack = [];\n  }\n  push(data) {\n    this.stack.push(data);\n  }\n  pop() {\n    return this.stack.pop();\n  }\n}\n```"
    },
    {
      question: "What is a Queue?",
      answer: "FIFO structure where elements are added at the rear and removed from the front.\n\nKey Point: Used in scheduling tasks\n\nCode Example:\n```\nclass Queue {\n  constructor() {\n    this.queue = [];\n  }\n  enqueue(data) {\n    this.queue.push(data);\n  }\n  dequeue() {\n    return this.queue.shift();\n  }\n}\n```"
    },
    {
      question: "What is a Binary Tree?",
      answer: "A hierarchical structure where each node has up to two children, used for search and sort.\n\nKey Point: Fundamental structure for search algorithms\n\nCode Example:\n```\nclass TreeNode {\n  constructor(data) {\n    this.data = data;\n    this.left = null;\n    this.right = null;\n  }\n}\n\nclass BinaryTree {\n  constructor() {\n    this.root = null;\n  }\n  insert(data) {\n    let newNode = new TreeNode(data);\n    if (!this.root) {\n      this.root = newNode;\n    } else {\n      this.insertNode(this.root, newNode);\n    }\n  }\n  insertNode(node, newNode) {\n    if (newNode.data < node.data) {\n      if (!node.left) {\n        node.left = newNode;\n      } else {\n        this.insertNode(node.left, newNode);\n      }\n    } else {\n      if (!node.right) {\n        node.right = newNode;\n      } else {\n        this.insertNode(node.right, newNode);\n      }\n    }\n  }\n}\n```"
    },
    {
      question: "What is a Binary Search Tree (BST)?",
      answer: "Binary tree with left < node < right, enabling efficient search, insert, delete.\n\nKey Point: Efficient for search operations\n\nCode Example:\n```\nclass BST {\n  constructor() {\n    this.root = null;\n  }\n  insert(data) {\n    let newNode = new TreeNode(data);\n    if (!this.root) {\n      this.root = newNode;\n    } else {\n      this.insertNode(this.root, newNode);\n    }\n  }\n  insertNode(node, newNode) {\n    if (newNode.data < node.data) {\n      if (!node.left) {\n        node.left = newNode;\n      } else {\n        this.insertNode(node.left, newNode);\n      }\n    } else {\n      if (!node.right) {\n        node.right = newNode;\n      } else {\n        this.insertNode(node.right, newNode);\n      }\n    }\n  }\n}\n```"
    },
    {
      question: "What is a Heap?",
      answer: "A tree that maintains max/min property, often used in priority queues.\n\nKey Point: Useful for priority queues and sorting algorithms\n\nExample:\n```\nMin-Heap: Parent nodes <= child nodes\nMax-Heap: Parent nodes >= child nodes\n```"
    },
    {
      question: "What is a Hash Table?",
      answer: "Maps keys to values using a hash function for fast lookups.\n\nKey Point: Provides efficient key-value storage\n\nCode Example:\n```\nclass HashTable {\n  constructor(size) {\n    this.table = new Array(size);\n    this.size = size;\n  }\n  hash(key) {\n    return key % this.size;\n  }\n  set(key, value) {\n    let index = this.hash(key);\n    this.table[index] = value;\n  }\n  get(key) {\n    let index = this.hash(key);\n    return this.table[index];\n  }\n}\n```"
    },
    {
      question: "What is a Graph?",
      answer: "A set of vertices connected by edges, representing relationships or networks.\n\nKey Point: Used to represent networks like social connections or routes\n\nExample:\n```\nGraph types: Directed, Undirected, Weighted, Unweighted\n```"
    },
    {
      question: "What is a Directed Acyclic Graph (DAG)?",
      answer: "A directed graph with no cycles, used in tasks like scheduling.\n\nKey Point: Critical in applications like task scheduling and version control\n\nExample:\n```\nApplications: Job scheduling, data processing pipelines\n```"
    },
    {
      question: "What is Dynamic Programming?",
      answer: "Breaks problems into subproblems and stores results to avoid recomputation.\n\nKey Point: Efficient for optimization problems\n\nExample:\n```\nUse Case: Solving Fibonacci sequence or Knapsack problem\n```"
    },
    {
      question: "What is Divide and Conquer?",
      answer: "Divides a problem, solves subproblems, and combines results.\n\nKey Point: Common in sorting algorithms\n\nExample:\n```\nAlgorithms: Merge Sort, Quick Sort\n```"
    },
    {
      question: "What is a Sorting Algorithm?",
      answer: "Arranges elements in order, e.g., Quick Sort, Merge Sort.\n\nKey Point: Sorting is fundamental in computer science\n\nExample:\n```\nSorting algorithms: Quick Sort, Merge Sort, Bubble Sort\n```"
    },
    {
      question: "What is a Searching Algorithm?",
      answer: "Finds specific data, e.g., Binary Search or Linear Search.\n\nKey Point: Searching is crucial for locating data efficiently\n\nExample:\n```\nAlgorithms: Binary Search, Linear Search\n```"
    },
    {
      question: "What is Recursion?",
      answer: "A function calling itself to solve smaller instances of the problem.\n\nKey Point: Recursion is useful for solving problems that can be divided into subproblems\n\nCode Example:\n```\nfunction factorial(n) {\n  if (n === 1) return 1;\n  return n * factorial(n - 1);\n}\n```"
    },
    {
      question: "What is a Greedy Algorithm?",
      answer: "Solves problems by making the locally optimal choice at each step.\n\nKey Point: Often faster but not always optimal\n\nExample:\n```\nUse Case: Coin change problem, Huffman coding\n```"
    },
    {
      question: "What is Backtracking?",
      answer: "Builds a solution incrementally, abandoning unfit solutions.\n\nKey Point: Useful for constraint satisfaction problems\n\nExample:\n```\nUse Case: Solving mazes, Sudoku\n```"
    },
    {
      question: "What is Depth-First Search (DFS)?",
      answer: "Explores as far as possible along each branch before backtracking.\n\nKey Point: Used for graph traversal\n\nCode Example:\n```\nfunction DFS(node) {\n  if (node === null) return;\n  console.log(node.data);\n  DFS(node.left);\n  DFS(node.right);\n}\n```"
    },
    {
      question: "What is Breadth-First Search (BFS)?",
      answer: "Explores nodes level by level, moving horizontally.\n\nKey Point: Used for graph traversal and shortest path\n\nCode Example:\n```\nfunction BFS(root) {\n  let queue = [];\n  queue.push(root);\n  while (queue.length > 0) {\n    let current = queue.shift();\n    console.log(current.data);\n    if (current.left) queue.push(current.left);\n    if (current.right) queue.push(current.right);\n  }\n}\n```"
    },
    {
      question: "What is a Trie?",
      answer: "A tree structure for storing strings, enabling efficient prefix searches.\n\nKey Point: Useful for auto-complete or spell check\n\nExample:\n```\nUsed in text prediction, auto-complete, dictionaries\n```"
    },
    {
      question: "What is Memoization?",
      answer: "Stores function results to avoid redundant computations.\n\nKey Point: Enhances efficiency in recursive algorithms\n\nExample:\n```\nUse Case: Solving Fibonacci sequence\n```"
    },
    {
      question: "What is a Priority Queue?",
      answer: "Dequeues elements based on priority, often implemented with a heap.\n\nKey Point: Useful for scheduling tasks\n\nCode Example:\n```\nclass PriorityQueue {\n  constructor() {\n    this.items = [];\n  }\n  enqueue(element, priority) {\n    this.items.push({ element, priority });\n    this.items.sort((a, b) => a.priority - b.priority);\n  }\n  dequeue() {\n    return this.items.shift();\n  }\n}\n```"
    },
    {
      question: "What is Amortized Analysis?",
      answer: "Averages time over a sequence of operations to measure long-term efficiency.\n\nKey Point: Important for analyzing algorithms with varying performance\n\nExample:\n```\nUse Case: Resizing arrays, Hash tables\n```"
    }
  ],


whatAreAlgorithms: [
  {
    question: "What are algorithms?",
    answer: "A set of instructions to solve a problem or perform a task.\n\nKey Point: Fundamental building blocks of computer science and programming."
  },
  {
    question: "What are the four principles of algorithms?",
    answer: "The four principles of algorithms are:\n\n1. Correctness\n2. Efficiency\n3. Clarity\n4. Finiteness\n\nKey Point: These principles ensure algorithms are reliable, performant, understandable, and terminable."
  },
  {
    question: "Why are algorithms important?",
    answer: "Algorithms are important because they:\n\n1. Optimize processes\n2. Make decisions\n3. Form the foundation of technology\n\nKey Point: Algorithms drive efficiency and functionality in computing and beyond."
  },
  {
    question: "What are the types of algorithms?",
    answer: "Common types of algorithms include:\n\n1. Brute force\n2. Divide and Conquer\n3. Dynamic Programming\n4. Greedy\n5. Backtracking\n\nKey Point: Each type has its own strengths and is suited for different problem domains."
  },
  {
    question: "What is a simple algorithm example?",
    answer: "A simple algorithm example is finding the maximum value in an array by iterating through it.\n\nPseudo-code example:\n```\nfunction findMax(array):\n    max = array[0]\n    for each element in array:\n        if element > max:\n            max = element\n    return max\n```\n\nKey Point: Even simple algorithms can solve common programming problems efficiently."
  },
  {
    question: "How do algorithms relate to data structures?",
    answer: "Algorithms and data structures are closely related:\n\n1. Algorithms manipulate data\n2. Choice of data structure affects algorithm efficiency\n\nKey Point: Selecting the right data structure can significantly impact an algorithm's performance."
  },
  {
    question: "What is pseudocode?",
    answer: "Pseudocode is a simplified way to outline an algorithm's logic.\n\nCharacteristics:\n1. Uses plain language\n2. Focuses on logic, not syntax\n3. Helps in planning before actual coding\n\nKey Point: Pseudocode bridges the gap between human thinking and formal programming languages."
  },
  {
    question: "What's the difference between an algorithm and a program?",
    answer: "The key differences are:\n\n1. An algorithm is a plan or logic\n2. A program is the implementation of an algorithm\n3. Algorithms are language-independent; programs are in specific languages\n\nKey Point: Algorithms are the blueprint, while programs are the constructed building."
  },
  {
    question: "What is algorithm complexity?",
    answer: "Algorithm complexity:\n\n1. Measures resource use (time/space) as input size grows\n2. Often expressed in Big O notation\n3. Helps compare efficiency of different algorithms\n\nKey Point: Understanding complexity is crucial for optimizing performance in large-scale applications."
  },
  {
    question: "What are iterative and recursive algorithms?",
    answer: "Iterative and recursive algorithms differ in approach:\n\n1. Iterative: Uses loops to repeat steps\n2. Recursive: Calls itself to solve smaller instances of the problem\n\nKey Point: Both can solve the same problems, but may differ in efficiency and readability."
  },
  {
    question: "What's an example of recursion?",
    answer: "An example of recursion is calculating the Fibonacci sequence:\n\n```\nfunction fibonacci(n):\n    if n <= 1:\n        return n\n    else:\n        return fibonacci(n-1) + fibonacci(n-2)\n```\n\nKey Point: Recursion often provides elegant solutions to problems that have a recursive nature."
  },
  {
    question: "What is a brute force algorithm?",
    answer: "A brute force algorithm:\n\n1. Tries all possible solutions\n2. Simple to implement\n3. Often inefficient for large inputs\n\nKey Point: While straightforward, brute force is typically a last resort due to its potential inefficiency."
  },
  {
    question: "What is a heuristic algorithm?",
    answer: "A heuristic algorithm:\n\n1. Finds a good solution quickly\n2. Used when exact solutions are impractical\n3. May not guarantee the best solution\n\nKey Point: Heuristics trade optimality for speed, useful in complex problem spaces."
  },
  {
    question: "What's the difference between deterministic and non-deterministic algorithms?",
    answer: "The key differences are:\n\n1. Deterministic: Always produces the same output for a given input\n2. Non-deterministic: May produce different outputs for the same input\n\nKey Point: Non-deterministic algorithms often involve elements of randomness or parallelism."
  },
  {
    question: "What is a probabilistic algorithm?",
    answer: "A probabilistic algorithm:\n\n1. Uses randomization in its logic\n2. May produce different results on different runs\n3. Often used for hard problems where deterministic solutions are inefficient\n\nKey Point: Probabilistic algorithms can offer efficient solutions to complex problems, trading certainty for speed."
  },
  {
    question: "What is an example of divide and conquer?",
    answer: "Merge Sort is a classic example of divide and conquer:\n\n1. Divides the data into smaller parts\n2. Sorts the smaller parts\n3. Merges the sorted parts\n\nKey Point: Divide and conquer often leads to efficient algorithms for large-scale problems."
  },
  {
    question: "What is an optimization algorithm?",
    answer: "An optimization algorithm:\n\n1. Finds the best solution from all feasible solutions\n2. Maximizes or minimizes a given function\n3. Used in fields like operations research and machine learning\n\nKey Point: Optimization algorithms are crucial in solving real-world problems with multiple constraints."
  },
  {
    question: "What's the purpose of sorting algorithms?",
    answer: "Sorting algorithms serve to:\n\n1. Organize data in a specific order (e.g., ascending, descending)\n2. Improve efficiency of subsequent operations (e.g., searching)\n3. Facilitate data analysis and presentation\n\nKey Point: Efficient sorting is fundamental to many computer science applications."
  },
  {
    question: "What are common applications of algorithms?",
    answer: "Algorithms are widely applied in:\n\n1. Data analysis\n2. Search engines\n3. Encryption\n4. Artificial Intelligence\n5. Optimization problems\n6. Computer graphics\n\nKey Point: Algorithms underpin most technological advancements and digital services."
  },
  {
    question: "How do machine learning algorithms differ from traditional algorithms?",
    answer: "Key differences:\n\n1. Traditional algorithms follow fixed steps\n2. Machine learning algorithms learn and improve from data\n3. ML algorithms can adapt to new inputs without being explicitly programmed\n\nKey Point: Machine learning algorithms introduce a level of adaptability and intelligence not present in traditional algorithms."
  }
],
sortingAlgorithms : [
  {
    question: "What is Bubble Sort?",
    answer: "A simple comparison-based algorithm that repeatedly swaps adjacent elements if they're in the wrong order.\n\nComplexity: O(n²)\nBest for: Small or nearly sorted datasets."
  },
  {
    question: "Bubble Sort Pseudo-code\n\nMnemonic: FFISE\nPhrase: 'Friendly Frogs Inspire Swift Endings Everywhere'",
    answer: "```\nfor i from 0 to n-1 do\n    for j from 0 to n-i-2 do\n        if arr[j] > arr[j+1] then\n            swap arr[j] and arr[j+1]\n    end for\nend for\n```"
  },
  {
    question: "What is Quick Sort?",
    answer: "Efficient divide-and-conquer algorithm that selects a pivot, partitions elements, and sorts sub-arrays.\n\nComplexity: Avg O(n log n), Worst O(n²)\nBest for: Large datasets."
  },
  {
    question: "Quick Sort Pseudo-code\n\nMnemonic: FIPQQE\nPhrase: 'Fast Iguanas Prefer Quick Quick Endings Everywhere'",
    answer: "```\nfunction quicksort(arr, low, high)\n    if low < high then\n        pi = partition(arr, low, high)\n        quicksort(arr, low, pi-1)\n        quicksort(arr, pi+1, high)\nend function\n```"
  },
  {
    question: "What is Merge Sort?",
    answer: "Efficient, stable, divide-and-conquer algorithm that splits arrays and merges sorted halves.\n\nComplexity: O(n log n)\nBest for: Large datasets or when stability is needed."
  },
  {
    question: "Merge Sort Pseudo-code\n\nMnemonic: FIMLRMMME\nPhrase: 'Friendly Iguanas Make Lovely Red Mangoes Merging Magnificently, Even Everywhere'",
    answer: "```\nfunction mergesort(arr)\n    if length of arr > 1 then\n        mid = length of arr / 2\n        left = arr[0...mid-1]\n        right = arr[mid...end]\n        mergesort(left)\n        mergesort(right)\n        merge(arr, left, right)\nend function\n```"
  },
  {
    question: "What is Selection Sort?",
    answer: "Simple algorithm that repeatedly selects the smallest element from the unsorted portion and moves it to the sorted portion.\n\nComplexity: O(n²)\nBest for: Small datasets or when memory writes are costly."
  },
  {
    question: "Selection Sort Pseudo-code\n\nMnemonic: FMFIMSE\nPhrase: 'Friendly Monsters Find Interesting Mangoes Everywhere, Sweet Everywhere'",
    answer: "```\nfor i from 0 to n-1 do\n    min_index = i\n    for j from i+1 to n do\n        if arr[j] < min_index then\n            min_index = j\n    swap arr[i] with arr[min_index]\nend for\n```"
  },
  {
    question: "What is Insertion Sort?",
    answer: "Simple algorithm that builds the sorted array one item at a time.\n\nComplexity: O(n²)\nBest for: Small or nearly sorted datasets."
  },
  {
    question: "Insertion Sort Pseudo-code\n\nMnemonic: FKJWAJE\nPhrase: 'Friendly Koalas Jump With Amazing Joy Every Afternoon Everywhere'",
    answer: "```\nfor i from 1 to n-1 do\n    key = arr[i]\n    j = i - 1\n    while j >= 0 and arr[j] > key do\n        arr[j+1] = arr[j]\n        j = j - 1\n    arr[j+1] = key\nend for\n```"
  },
  {
    question: "What is Heap Sort?",
    answer: "Comparison-based algorithm using a binary heap structure, consistently good performance.\n\nComplexity: O(n log n)\nBest for: Large datasets needing consistent performance."
  },
  {
    question: "Heap Sort Pseudo-code\n\nMnemonic: FBFSHE\nPhrase: 'Friendly Bees Fly Swiftly Home Every Evening'",
    answer: "```\nfunction heapsort(arr)\n    buildMaxHeap(arr)\n    for i from n-1 to 1 do\n        swap arr[0] with arr[i]\n        heapify(arr, 0, i)\nend function\n```"
  },
  {
    question: "What is Radix Sort?",
    answer: "Non-comparative algorithm that sorts integers by grouping digits.\n\nComplexity: O(nk) where k is digits in the largest number.\nBest for: Sorting integers or fixed-length strings."
  },
  {
    question: "Radix Sort Pseudo-code\n\nMnemonic: FFCE\nPhrase: 'Friendly Frogs Count Eggs Everywhere'",
    answer: "```\nfunction radixsort(arr)\n    for each digit from least significant to most significant do\n        countingSortByDigit(arr, digit)\nend for\n```"
  },
  {
    question: "What is Merge Sort?",
    answer: "Efficient, stable, divide-and-conquer algorithm that splits arrays and merges sorted halves.\n\nComplexity: O(n log n)\nBest for: Large datasets or when stability is needed."
  },
  {
      question: "Merge Sort Pseudo-code\n\nMnemonic: FIMLRMMME\nPhrase: 'Friendly Iguanas Make Lovely Red Mangoes Merging Magnificently, Even Everywhere'",
      answer: "```\nfunction mergesort(arr)\n    if length of arr > 1 then\n        mid = length of arr / 2\n        left = arr[0...mid-1]\n        right = arr[mid...end]\n        mergesort(left)\n        mergesort(right)\n        merge(arr, left, right)\nend function\n```"
  },
  {
      question: "What is Selection Sort?",
      answer: "Simple algorithm that repeatedly selects the smallest element from the unsorted portion and moves it to the sorted portion.\n\nComplexity: O(n²)\nBest for: Small datasets or when memory writes are costly."
  },
  {
      question: "Selection Sort Pseudo-code\n\nMnemonic: FMFIMSE\nPhrase: 'Friendly Monsters Find Interesting Mangoes Everywhere, Sweet Everywhere'",
      answer: "```\nfor i from 0 to n-1 do\n    min_index = i\n    for j from i+1 to n do\n        if arr[j] < min_index then\n            min_index = j\n    swap arr[i] with arr[min_index]\nend for\n```"
  },
  {
      question: "What is Insertion Sort?",
      answer: "Simple algorithm that builds the sorted array one item at a time.\n\nComplexity: O(n²)\nBest for: Small or nearly sorted datasets."
  },
  {
      question: "Insertion Sort Pseudo-code\n\nMnemonic: FKJWAJE\nPhrase: 'Friendly Koalas Jump With Amazing Joy Every Afternoon Everywhere'",
      answer: "```\nfor i from 1 to n-1 do\n    key = arr[i]\n    j = i - 1\n    while j >= 0 and arr[j] > key do\n        arr[j+1] = arr[j]\n        j = j - 1\n    arr[j+1] = key\nend for\n```"
  },
  {
      question: "What is Heap Sort?",
      answer: "Comparison-based algorithm using a binary heap structure, consistently good performance.\n\nComplexity: O(n log n)\nBest for: Large datasets needing consistent performance."
  },
  {
      question: "Heap Sort Pseudo-code\n\nMnemonic: FBFSHE\nPhrase: 'Friendly Bees Fly Swiftly Home Every Evening'",
      answer: "```\nfunction heapsort(arr)\n    buildMaxHeap(arr)\n    for i from n-1 to 1 do\n        swap arr[0] with arr[i]\n        heapify(arr, 0, i)\nend function\n```"
  },
  {
      question: "What is Radix Sort?",
      answer: "Non-comparative algorithm that sorts integers by grouping digits.\n\nComplexity: O(nk) where k is digits in the largest number.\nBest for: Sorting integers or fixed-length strings."
  },
  {
      question: "Radix Sort Pseudo-code\n\nMnemonic: FFCE\nPhrase: 'Friendly Frogs Count Eggs Everywhere'",
      answer: "```\nfunction radixsort(arr)\n    for each digit from least significant to most significant do\n        countingSortByDigit(arr, digit)\nend for\n```"
  }


],
searchAlgorithms: [
  {
    question: "What is Linear Search?",
    answer: "Linear Search checks each element sequentially until the target is found or the list ends.\n\nComplexity: O(n)\nBest for: Small or unsorted datasets.\nPros: Simple and works on any dataset.\nCons: Inefficient for large datasets."
  },
  {
    question: "Linear Search Pseudo-code\n\nMnemonic: FFIFE\nPhrase: 'Friendly Foxes Inspect Forests Endlessly'",
    answer: "```\nfor i from 0 to n-1 do\n    if arr[i] == target then\n        return i\n    end if\nend for\nreturn -1\n```"
  },
  {
    question: "What is Binary Search?",
    answer: "Binary Search halves the search range in sorted datasets until the target is found.\n\nComplexity: O(log n)\nBest for: Large, sorted datasets.\nPros: Faster than Linear Search.\nCons: Requires sorted data."
  },
  {
    question: "Binary Search Pseudo-code\n\nMnemonic: FIMWEE\nPhrase: 'Friendly Iguanas Make Wise, Efficient Explorations'",
    answer: "```\nfunction binarySearch(arr, target)\n    low = 0\n    high = n - 1\n    while low <= high do\n        mid = (low + high) / 2\n        if arr[mid] == target then\n            return mid\n        else if arr[mid] < target then\n            low = mid + 1\n        else\n            high = mid - 1\n        end if\n    end while\n    return -1\n```"
  },
  {
    question: "What is Interpolation Search?",
    answer: "Interpolation Search estimates the position of the target using interpolation.\n\nComplexity: O(log log n) best, O(n) worst\nBest for: Uniformly distributed datasets."
  },
  {
    question: "Interpolation Search Pseudo-code\n\nMnemonic: FLIIEER\nPhrase: 'Friendly Lions Interpolate In Every Excellent Region'",
    answer: "```\nfunction interpolationSearch(arr, target)\n    low = 0\n    high = n - 1\n    while low <= high and target >= arr[low] and target <= arr[high] do\n        pos = low + ((target - arr[low]) * (high - low)) / (arr[high] - arr[low])\n        if arr[pos] == target then\n            return pos\n        else if arr[pos] < target then\n                low = pos + 1\n        else\n            high = pos - 1\n        end if\n    end while\n    return -1\n```"
  },
  {
    question: "What is Binary Search?",
    answer: "Binary Search halves the search range in sorted datasets until the target is found.\n\nComplexity: O(log n)\nBest for: Large, sorted datasets.\nPros: Faster than Linear Search.\nCons: Requires sorted data."
  },
{
    question: "Binary Search Pseudo-code\n\nMnemonic: FIMWEE\nPhrase: 'Friendly Iguanas Make Wise, Efficient Explorations'",
    answer: "```\nfunction binarySearch(arr, target)\n    low = 0\n    high = n - 1\n    while low <= high do\n        mid = (low + high) / 2\n        if arr[mid] == target then\n            return mid\n        else if arr[mid] < target then\n            low = mid + 1\n        else\n            high = mid - 1\n        end if\n    end while\n    return -1\n```"
},
{
    question: "What is Jump Search?",
    answer: "Jump Search divides an array into blocks and jumps ahead to find the target's range, then performs a linear search within that block.\n\nComplexity: O(√n)\nBest for: Large, sorted datasets."
},
{
    question: "Jump Search Pseudo-code\n\nMnemonic: FWSJFI\nPhrase: 'Fast Wild Sharks Jump For Ingredients'",
    answer: "```\nfunction jumpSearch(arr, target)\n    n = length of arr\n    step = √n\n    prev = 0\n    while arr[min(step, n)-1] < target do\n        prev = step\n        step += √n\n        if prev >= n then\n            return -1\n        end if\n    end while\n    for i from prev to min(step, n)-1 do\n        if arr[i] == target then\n            return i\n        end if\n    end for\n    return -1\n```"
},
{
    question: "What is Exponential Search?",
    answer: "Exponential Search first finds a range where the target may lie, then uses binary search within that range.\n\nComplexity: O(log n)\nBest for: Unbounded or unknown-sized datasets."
},
{
    question: "Exponential Search Pseudo-code\n\nMnemonic: FBEEFE\nPhrase: 'Friendly Bears Eat Every Fish Early'",
    answer: "```\nfunction exponentialSearch(arr, target)\n    if arr[0] == target then\n        return 0\n    i = 1\n    while i < n and arr[i] <= target do\n        i = i * 2\n    end while\n    return binarySearch(arr, target, i/2, min(i, n-1))\n```"
},
{
    question: "What is Fibonacci Search?",
    answer: "Fibonacci Search divides the array using Fibonacci numbers and eliminates sections.\n\nComplexity: O(log n)\nBest for: Large, sorted datasets."
},
 {
    question: "What is Fibonacci Search?",
    answer: "Fibonacci Search divides the array using Fibonacci numbers and eliminates sections.\n\nComplexity: O(log n)\nBest for: Large, sorted datasets."
  },
  {
    question: "Fibonacci Search Pseudo-code\n\nMnemonic: FFILFE\nPhrase: 'Friendly Frogs Inspect Leaves For Eating'",
    answer: "```\nfunction fibonacciSearch(arr, target)\n    fibMm2 = 0\n    fibMm1 = 1\n    fibM = fibMm1 + fibMm2\n    while fibM < n do\n        fibMm2 = fibMm1\n        fibMm1 = fibM\n        fibM = fibMm1 + fibMm2\n    end while\n    offset = -1\n    while fibM > 1 do\n        i = min(offset + fibMm2, n-1)\n        if arr[i] < target then\n            fibM = fibMm1\n            fibMm1 = fibMm2\n            fibMm2 = fibM - fibMm1\n            offset = i\n        else if arr[i] > target then\n            fibM = fibMm2\n            fibMm1 = fibMm1 - fibMm2\n            fibMm2 = fibM - fibMm1\n        else\n            return i\n    end while\n    if fibMm1 and arr[offset + 1] == target then\n        return offset + 1\n    return -1\n```"
  },
  {
    question: "What is Ternary Search?",
    answer: "Ternary Search splits the dataset into three parts and recursively searches the relevant third.\n\nComplexity: O(log₃ n)\nBest for: Large, sorted datasets."
  },
  {
    question: "Ternary Search Pseudo-code\n\nMnemonic: FTTRE\nPhrase: 'Friendly Tigers Traverse Remote Environments'",
    answer: "```\nfunction ternarySearch(arr, target)\n    low = 0\n    high = n - 1\n    while low <= high do\n        mid1 = low + (high - low) / 3\n        mid2 = high - (high - low) / 3\n        if arr[mid1] == target then\n            return mid1\n        if arr[mid2] == target then\n            return mid2\n        else if target < arr[mid1] then\n            high = mid1 - 1\n        else if target > arr[mid2] then\n            low = mid2 + 1\n        else\n            low = mid1 + 1\n            high = mid2 - 1\n        end if\n    end while\n    return -1\n```"
  },
  {
    question: "What is Hashing Search?",
    answer: "Hashing Search uses a hash function to map keys to values for fast lookups.\n\nComplexity: O(1) average case\nBest for: Datasets with unique keys."
  },
  {
    question: "Hashing Search Pseudo-code\n\nMnemonic: HKKVET\nPhrase: 'Happy Kangaroos Keep Vegetables Every Time'",
    answer: "```\nfunction hashingSearch(arr, key)\n    index = hashFunction(key)\n    if table[index] == key then\n        return value associated with key\n    else\n        resolve collision (e.g., linear probing)\n        return value associated with key\n    return null\n```"
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
    answer: "```\nfunction fractionalKnapsack(items, capacity) {\n    items.sort((a, b) => b.value / b.weight - a.value / a.weight);  // Sort by value-to-weight ratio\n    let totalValue = 0;\n    for (let item of items) {\n        if (capacity - item.weight >= 0) {\n            totalValue += item.value;\n            capacity -= item.weight;\n        } else {\n            totalValue += item.value * (capacity / item.weight);  // Take fraction of the item\n            break;\n        }\n    }\n    return totalValue;\n}\n```"
  },
  {
    question: "Greedy Algorithm Example: Dijkstra's Algorithm",
    answer: "Dijkstra's algorithm finds the shortest path from a source node to all other nodes in a weighted graph.\n\nComplexity: O(V^2) or O(E + V log V) with a priority queue."
  },
  {
    question: "Dijkstra's Algorithm Code Example",
    answer: "```\nfunction dijkstra(graph, start) {\n    let distances = {};\n    let visited = new Set();\n    let pq = new PriorityQueue((a, b) => a.distance < b.distance);\n    distances[start] = 0;\n    pq.enqueue({ node: start, distance: 0 });\n    while (!pq.isEmpty()) {\n        let { node, distance } = pq.dequeue();\n        if (visited.has(node)) continue;\n        visited.add(node);\n        for (let neighbor in graph[node]) {\n            let newDist = distance + graph[node][neighbor];\n            if (newDist < (distances[neighbor] || Infinity)) {\n                distances[neighbor] = newDist;\n                pq.enqueue({ node: neighbor, distance: newDist });\n            }\n        }\n    }\n    return distances;\n}\n```"
  },
  {
    question: "Greedy Algorithm Example: Kruskal's Algorithm",
    answer: "Kruskal's algorithm finds the minimum spanning tree of a graph by choosing edges with the smallest weights.\n\nComplexity: O(E log E), where E is the number of edges."
  },
  {
    question: "Kruskal's Algorithm Code Example",
    answer: "```\nfunction kruskal(graph) {\n    let mst = [];\n    let disjointSet = new DisjointSet(graph.vertices);\n    graph.edges.sort((a, b) => a.weight - b.weight);  // Sort edges by weight\n    for (let edge of graph.edges) {\n        if (!disjointSet.connected(edge.u, edge.v)) {\n            disjointSet.union(edge.u, edge.v);\n            mst.push(edge);\n        }\n    }\n    return mst;\n}\n```"
  },
  {
    question: "Greedy Algorithm Example: Huffman Coding",
    answer: "Huffman coding compresses data by assigning shorter codes to more frequent symbols.\n\nComplexity: O(n log n)."
  },
  {
    question: "Huffman Coding Code Example",
    answer: "```\nfunction huffmanCoding(freq) {\n    let pq = new PriorityQueue((a, b) => a.freq < b.freq);\n    for (let char in freq) {\n        pq.enqueue({ char, freq: freq[char] });\n    }\n    while (pq.size() > 1) {\n        let left = pq.dequeue();\n        let right = pq.dequeue();\n        pq.enqueue({ char: left.char + right.char, freq: left.freq + right.freq, left, right });\n    }\n    return pq.dequeue();\n}\n```"
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


};
