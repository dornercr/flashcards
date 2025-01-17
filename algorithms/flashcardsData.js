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
        answer: "Measures time/space efficiency as input size grows.\n\nExample:\n```\nO(1)\nO(n)\nO(n^2)\n```"
    },
    {
        question: "What is an Array?",
        answer: "Linear structure, stores elements in contiguous memory, accessed by index.\n\nCode:\n```\nlet arr = [1, 2, 3]\narr[2]  // 3\n```"
    },
    {
        question: "What is a Linked List?",
        answer: "Nodes with data and next reference.\n\nCode:\n```\nclass Node {\n  constructor(data) {\n    this.data = data\n    this.next = null\n  }\n}\n```"
    },
    {
        question: "What is a Stack?",
        answer: "LIFO structure, add/remove from top.\n\nCode:\n```\nstack.push(data)\nstack.pop()\n```"
    },
    {
        question: "What is a Queue?",
        answer: "FIFO structure, add at rear, remove from front.\n\nCode:\n```\nqueue.push(data)\nqueue.shift()\n```"
    },
    {
        question: "What is a Binary Tree?",
        answer: "Hierarchical structure, each node has up to two children.\n\nCode:\n```\nclass TreeNode {\n  constructor(data) {\n    this.data = data\n    this.left = null\n    this.right = null\n  }\n}\n```"
    },
    {
        question: "What is a Binary Search Tree (BST)?",
        answer: "Binary tree with left < node < right.\n\nCode:\n```\nBST.insert(data)\nBST.search(data)\n```"
    },
    {
        question: "What is a Heap?",
        answer: "Tree structure maintaining max/min property.\n\nExample:\n```\nMin-Heap: Parent <= children\nMax-Heap: Parent >= children\n```"
    },
    {
        question: "What is a Hash Table?",
        answer: "Maps keys to values using a hash function.\n\nCode:\n```\nthis.table[index] = value\nthis.table[hash(key)]\n```"
    },
    {
        question: "What is a Graph?",
        answer: "Vertices connected by edges, representing networks.\n\nExample:\n```\nGraph types: Directed\nUndirected\nWeighted\n```"
    },
    {
        question: "What is a Directed Acyclic Graph (DAG)?",
        answer: "Directed graph with no cycles.\n\nExample:\n```\nApplications: Job scheduling\nData pipelines\n```"
    },
    {
        question: "What is Dynamic Programming?",
        answer: "Solves problems by storing subproblem results.\n\nExample:\n```\nFibonacci sequence\nKnapsack problem\n```"
    },
    {
        question: "What is Divide and Conquer?",
        answer: "Divides problems, solves subproblems, combines results.\n\nExample:\n```\nMerge Sort\nQuick Sort\n```"
    },
    {
        question: "What is a Sorting Algorithm?",
        answer: "Arranges elements in order.\n\nExample:\n```\nQuick Sort\nMerge Sort\nBubble Sort\n```"
    },
    {
        question: "What is a Searching Algorithm?",
        answer: "Finds specific data.\n\nExample:\n```\nBinary Search\nLinear Search\n```"
    },
    {
        question: "What is Recursion?",
        answer: "Function calls itself to solve subproblems.\n\nCode:\n```\nfunction factorial(n) {\n  return n === 1 ? 1 : n * factorial(n - 1)\n}\n```"
    },
    {
        question: "What is a Greedy Algorithm?",
        answer: "Makes locally optimal choices.\n\nExample:\n```\nCoin change\nHuffman coding\n```"
    },
    {
        question: "What is Backtracking?",
        answer: "Builds solution incrementally, abandoning bad solutions.\n\nExample:\n```\nSolving mazes\nSudoku\n```"
    },
    {
        question: "What is Depth-First Search (DFS)?",
        answer: "Explores as far as possible along branches.\n\nCode:\n```\nDFS(node.left)\nDFS(node.right)\n```"
    },
    {
        question: "What is Breadth-First Search (BFS)?",
        answer: "Explores nodes level by level.\n\nCode:\n```\nqueue.push(root)\nqueue.shift()\n```"
    },
    {
        question: "What is a Trie?",
        answer: "Tree structure for efficient prefix searches.\n\nExample:\n```\nUsed in autocomplete\nDictionaries\n```"
    },
    {
        question: "What is Memoization?",
        answer: "Stores function results to avoid recomputation.\n\nExample:\n```\nFibonacci sequence\n```"
    },
    {
        question: "What is a Priority Queue?",
        answer: "Dequeues based on priority, often with a heap.\n\nCode:\n```\nitems.sort((a, b) => a.priority - b.priority)\n```"
    },
    {
        question: "What is Amortized Analysis?",
        answer: "Averages time over many operations.\n\nExample:\n```\nResizing arrays\nHash tables\n```"
    }

  ],


whatAreAlgorithms: [
    {
        question: "What are algorithms?",
        answer: "A set of instructions to solve a problem.\n\nKey Point: Fundamental to computer science."
    },
    {
        question: "What are the four principles of algorithms?",
        answer: "Correctness, Efficiency, Clarity, Finiteness.\n\nKey Point: Ensure reliability and performance."
    },
    {
        question: "Why are algorithms important?",
        answer: "They optimize processes, make decisions, and drive technology.\n\nKey Point: Critical for efficiency in computing."
    },
    {
        question: "What are the types of algorithms?",
        answer: "Brute force, Divide and Conquer, Dynamic Programming, Greedy, Backtracking.\n\nKey Point: Different types suit different problems."
    },
    {
        question: "What is a simple algorithm example?",
        answer: "Find maximum in an array:\n```\nfunction findMax(array):\n    max = array[0]\n    for each element in array:\n        if element > max:\n            max = element\n    return max\n```"
    },
    {
        question: "How do algorithms relate to data structures?",
        answer: "Algorithms manipulate data, and the choice of data structure affects efficiency.\n\nKey Point: The right structure improves performance."
    },
    {
        question: "What is pseudocode?",
        answer: "Plain language to outline logic.\n\nKey Point: Bridges human thinking and programming."
    },
    {
        question: "What's the difference between an algorithm and a program?",
        answer: "An algorithm is a plan; a program implements it.\n\nKey Point: Algorithms are language-independent."
    },
    {
        question: "What is algorithm complexity?",
        answer: "Measures time/space as input grows, expressed in Big O notation.\n\nKey Point: Crucial for optimizing large applications."
    },
    {
        question: "What are iterative and recursive algorithms?",
        answer: "Iterative uses loops; recursive calls itself.\n\nKey Point: Different methods for the same problems."
    },
    {
        question: "What's an example of recursion?",
        answer: "Fibonacci sequence:\n```\nfunction fibonacci(n):\n    if n <= 1:\n        return n\n    else:\n        return fibonacci(n-1) + fibonacci(n-2)\n```"
    },
    {
        question: "What is a brute force algorithm?",
        answer: "Tries all solutions, simple but inefficient.\n\nKey Point: Last resort due to inefficiency."
    },
    {
        question: "What is a heuristic algorithm?",
        answer: "Finds a good solution quickly, not guaranteed to be optimal.\n\nKey Point: Trades optimality for speed."
    },
    {
        question: "What's the difference between deterministic and non-deterministic algorithms?",
        answer: "Deterministic produces the same result; non-deterministic may vary.\n\nKey Point: Non-deterministic often uses randomness."
    },
    {
        question: "What is a probabilistic algorithm?",
        answer: "Uses randomization, can vary results, useful for complex problems.\n\nKey Point: Trades certainty for efficiency."
    },
    {
        question: "What is an example of divide and conquer?",
        answer: "Merge Sort divides data, sorts parts, and merges them.\n\nKey Point: Efficient for large-scale problems."
    },
    {
        question: "What is an optimization algorithm?",
        answer: "Finds the best solution among feasible options, maximizes or minimizes a function.\n\nKey Point: Crucial for solving real-world problems."
    },
    {
        question: "What's the purpose of sorting algorithms?",
        answer: "Organize data, improve search efficiency, aid analysis.\n\nKey Point: Sorting is essential in computer science."
    },
    {
        question: "What are common applications of algorithms?",
        answer: "Used in data analysis, search engines, encryption, AI, and more.\n\nKey Point: Algorithms drive technology."
    },
    {
        question: "How do machine learning algorithms differ from traditional algorithms?",
        answer: "ML algorithms learn from data; traditional follow fixed steps.\n\nKey Point: ML adapts and improves without explicit programming."
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
        answer: "Checks each element sequentially until the target is found or the list ends.\n\nComplexity: O(n)\nBest for: Small/unsorted datasets."
    },
    {
        question: "Linear Search Pseudo-code\n\nMnemonic: FFIFE\nPhrase: 'Friendly Foxes Inspect Forests Endlessly'",
        answer: "```\nfor i from 0 to n-1 do\n    if arr[i] == target then\n        return i\n    end if\nend for\nreturn -1\n```"
    },
    {
        question: "What is Binary Search?",
        answer: "Halves the search range in sorted datasets until the target is found.\n\nComplexity: O(log n)\nBest for: Large, sorted datasets."
    },
    {
        question: "Binary Search Pseudo-code\n\nMnemonic: FIMWEE\nPhrase: 'Friendly Iguanas Make Wise, Efficient Explorations'",
        answer: "```\nfunction binarySearch(arr, target)\n    low = 0\n    high = n - 1\n    while low <= high do\n        mid = (low + high) / 2\n        if arr[mid] == target then\n            return mid\n        else if arr[mid] < target then\n            low = mid + 1\n        else\n            high = mid - 1\n        end if\n    end while\n    return -1\n```"
    },
    {
        question: "What is Interpolation Search?",
        answer: "Estimates the position of the target using interpolation.\n\nComplexity: O(log log n) best, O(n) worst\nBest for: Uniformly distributed datasets."
    },
    {
        question: "Interpolation Search Pseudo-code\n\nMnemonic: FLIIEER\nPhrase: 'Friendly Lions Interpolate In Every Excellent Region'",
        answer: "```\nfunction interpolationSearch(arr, target)\n    low = 0\n    high = n - 1\n    while low <= high and target >= arr[low] and target <= arr[high] do\n        pos = low + ((target - arr[low]) * (high - low)) / (arr[high] - arr[low])\n        if arr[pos] == target then\n            return pos\n        else if arr[pos] < target then\n            low = pos + 1\n        else\n            high = pos - 1\n        end if\n    end while\n    return -1\n```"
    },
    {
        question: "What is Jump Search?",
        answer: "Divides array into blocks and jumps to find the target’s range.\n\nComplexity: O(√n)\nBest for: Large, sorted datasets."
    },
    {
        question: "Jump Search Pseudo-code\n\nMnemonic: FWSJFI\nPhrase: 'Fast Wild Sharks Jump For Ingredients'",
        answer: "```\nfunction jumpSearch(arr, target)\n    n = length of arr\n    step = √n\n    prev = 0\n    while arr[min(step, n)-1] < target do\n        prev = step\n        step += √n\n        if prev >= n then\n            return -1\n        end if\n    end while\n    for i from prev to min(step, n)-1 do\n        if arr[i] == target then\n            return i\n        end if\n    end for\n    return -1\n```"
    },
    {
        question: "What is Exponential Search?",
        answer: "Finds a range where the target may lie, then uses binary search.\n\nComplexity: O(log n)\nBest for: Unbounded/unknown-sized datasets."
    },
    {
        question: "Exponential Search Pseudo-code\n\nMnemonic: FBEEFE\nPhrase: 'Friendly Bears Eat Every Fish Early'",
        answer: "```\nfunction exponentialSearch(arr, target)\n    if arr[0] == target then\n        return 0\n    i = 1\n    while i < n and arr[i] <= target do\n        i = i * 2\n    end while\n    return binarySearch(arr, target, i/2, min(i, n-1))\n```"
    },
    {
        question: "What is Fibonacci Search?",
        answer: "Divides array using Fibonacci numbers and eliminates sections.\n\nComplexity: O(log n)\nBest for: Large, sorted datasets."
    },
    {
        question: "Fibonacci Search Pseudo-code\n\nMnemonic: FFILFE\nPhrase: 'Friendly Frogs Inspect Leaves For Eating'",
        answer: "```\nfunction fibonacciSearch(arr, target)\n    fibMm2 = 0\n    fibMm1 = 1\n    fibM = fibMm1 + fibMm2\n    while fibM < n do\n        fibMm2 = fibMm1\n        fibMm1 = fibM\n        fibM = fibMm1 + fibMm2\n    end while\n    offset = -1\n    while fibM > 1 do\n        i = min(offset + fibMm2, n-1)\n        if arr[i] < target then\n            fibM = fibMm1\n            fibMm1 = fibMm2\n            fibMm2 = fibM - fibMm1\n            offset = i\n        else if arr[i] > target then\n            fibM = fibMm2\n            fibMm1 = fibMm1 - fibMm2\n            fibMm2 = fibM - fibMm1\n        else\n            return i\n    end while\n    if fibMm1 and arr[offset + 1] == target then\n        return offset + 1\n    return -1\n```"
    },
    {
        question: "What is Ternary Search?",
        answer: "Splits dataset into three parts and recursively searches the relevant third.\n\nComplexity: O(log₃ n)\nBest for: Large, sorted datasets."
    },
    {
        question: "Ternary Search Pseudo-code\n\nMnemonic: FTTRE\nPhrase: 'Friendly Tigers Traverse Remote Environments'",
        answer: "```\nfunction ternarySearch(arr, target)\n    low = 0\n    high = n - 1\n    while low <= high do\n        mid1 = low + (high - low) / 3\n        mid2 = high - (high - low) / 3\n        if arr[mid1] == target then\n            return mid1\n        if arr[mid2] == target then\n            return mid2\n        else if target < arr[mid1] then\n            high = mid1 - 1\n        else if target > arr[mid2] then\n            low = mid2 + 1\n        else\n            low = mid1 + 1\n            high = mid2 - 1\n        end if\n    end while\n    return -1\n```"
    },
    {
        question: "What is Hashing Search?",
        answer: "Uses a hash function to map keys to values for fast lookups.\n\nComplexity: O(1) average case.\nBest for: Unique keys."
    },
    {
        question: "Hashing Search Pseudo-code\n\nMnemonic: HKKVET\nPhrase: 'Happy Kangaroos Keep Vegetables Every Time'",
        answer: "```\nfunction hashingSearch(arr, key)\n    index = hashFunction(key)\n    if table[index] == key then\n        return value\n    else\n        resolve collision\n        return value\n    return null\n```"
    }
],
computationalComplexity: [
    {
        question: "What is Time Complexity?",
        answer: "Describes how algorithm runtime scales with input size, measuring efficiency."
    },
    {
        question: "What is Space Complexity?",
        answer: "Measures memory used by an algorithm, including input and auxiliary space."
    },
    {
        question: "What does it take to develop a good algorithm?",
        answer: "A good algorithm balances time and space complexity, running efficiently."
    },
    {
        question: "How significant are Space and Time Complexity?",
        answer: "They determine efficiency, impacting performance as input size grows."
    },
    {
        question: "What are Asymptotic Notations?",
        answer: "Big O, Omega, and Theta describe time/space complexity growth with input size."
    },
    {
        question: "What is Big-O (O) Notation?",
        answer: "Represents the upper bound of complexity, describing the worst-case scenario."
    },
    {
        question: "What is Big-Omega (Ω) Notation?",
        answer: "Represents the lower bound of complexity, describing the best-case scenario."
    },
    {
        question: "What is Big-Theta (Θ) Notation?",
        answer: "Provides both upper and lower bounds, describing the average case."
    },
    {
        question: "What are Best, Worst, and Average Case in Asymptotic Analysis?",
        answer: "Best case is the minimum time/space, worst case is the maximum, and average case is typical behavior."
    },
    {
        question: "What is the significance of Space Complexity?",
        answer: "Measures memory usage, crucial for systems with limited memory."
    },
    {
        question: "What is the method for calculating Time Complexity?",
        answer: "By analyzing how many times each operation is executed in the algorithm."
    },
    {
        question: "What is the method for calculating Space Complexity?",
        answer: "By determining the memory used by variables, inputs, and outputs."
    },
    {
        question: "What are the key differences between Time and Space Complexity?",
        answer: "Time complexity measures execution time; space complexity measures memory usage."
    },
    {
        question: "What is Algorithm Analysis?",
        answer: "Evaluates algorithm efficiency via time and space complexity, both theoretically and empirically."
    },
    {
        question: "What is Algorithm Complexity?",
        answer: "Time and space required by an algorithm as input size increases."
    },
    {
        question: "What factors affect the long-term usage of an algorithm?",
        answer: "Efficiency, finiteness, and correctness ensure reliable performance over time."
    },
    {
        question: "Why are Time and Space Complexity important in Data Structures?",
        answer: "They ensure efficiency when handling large datasets in data structures."
    }
],
greedyAlgorithms: [
    {
        question: "What is a Greedy Algorithm?",
        answer: "Makes locally optimal choices to find a global solution, focusing on immediate benefits."
    },
    {
        question: "Steps for Creating a Greedy Algorithm",
        answer: "1. Define the problem.\n2. Identify the greedy choice.\n3. Make the choice.\n4. Repeat until a solution is found."
    },
    {
        question: "Greedy Algorithm Example: Fractional Knapsack",
        answer: "Optimizes value by including item fractions based on value-to-weight ratio.\n\nComplexity: O(n log n)."
    },
    {
        question: "Fractional Knapsack Code Example",
        answer: "```\nfunction fractionalKnapsack(items, capacity) {\n    items.sort((a, b) => b.value / b.weight - a.value / a.weight);\n    let totalValue = 0;\n    for (let item of items) {\n        if (capacity - item.weight >= 0) {\n            totalValue += item.value;\n            capacity -= item.weight;\n        } else {\n            totalValue += item.value * (capacity / item.weight);\n            break;\n        }\n    }\n    return totalValue;\n}\n```"
    },
    {
        question: "Greedy Algorithm Example: Dijkstra's Algorithm",
        answer: "Finds the shortest path in a weighted graph.\n\nComplexity: O(V^2) or O(E + V log V) with priority queue."
    },
    {
        question: "Dijkstra's Algorithm Code Example",
        answer: "```\nfunction dijkstra(graph, start) {\n    let distances = {};\n    let visited = new Set();\n    let pq = new PriorityQueue((a, b) => a.distance < b.distance);\n    distances[start] = 0;\n    pq.enqueue({ node: start, distance: 0 });\n    while (!pq.isEmpty()) {\n        let { node, distance } = pq.dequeue();\n        if (visited.has(node)) continue;\n        visited.add(node);\n        for (let neighbor in graph[node]) {\n            let newDist = distance + graph[node][neighbor];\n            if (newDist < (distances[neighbor] || Infinity)) {\n                distances[neighbor] = newDist;\n                pq.enqueue({ node: neighbor, distance: newDist });\n            }\n        }\n    }\n    return distances;\n}\n```"
    },
    {
        question: "Greedy Algorithm Example: Kruskal's Algorithm",
        answer: "Finds the minimum spanning tree by choosing the smallest edges.\n\nComplexity: O(E log E)."
    },
    {
        question: "Kruskal's Algorithm Code Example",
        answer: "```\nfunction kruskal(graph) {\n    let mst = [];\n    let disjointSet = new DisjointSet(graph.vertices);\n    graph.edges.sort((a, b) => a.weight - b.weight);\n    for (let edge of graph.edges) {\n        if (!disjointSet.connected(edge.u, edge.v)) {\n            disjointSet.union(edge.u, edge.v);\n            mst.push(edge);\n        }\n    }\n    return mst;\n}\n```"
    },
    {
        question: "Greedy Algorithm Example: Huffman Coding",
        answer: "Compresses data by assigning shorter codes to frequent symbols.\n\nComplexity: O(n log n)."
    },
    {
        question: "Huffman Coding Code Example",
        answer: "```\nfunction huffmanCoding(freq) {\n    let pq = new PriorityQueue((a, b) => a.freq < b.freq);\n    for (let char in freq) {\n        pq.enqueue({ char, freq: freq[char] });\n    }\n    while (pq.size() > 1) {\n        let left = pq.dequeue();\n        let right = pq.dequeue();\n        pq.enqueue({ char: left.char + right.char, freq: left.freq + right.freq, left, right });\n    }\n    return pq.dequeue();\n}\n```"
    },
    {
        question: "Applications of Greedy Algorithms",
        answer: "Used in task scheduling, knapsack problems, Huffman encoding, resource allocation."
    },
    {
        question: "Disadvantages of Greedy Algorithms",
        answer: "May not find the optimal solution due to local optimization."
    },
    {
        question: "Limitations of Greedy Algorithms",
        answer: "Greedy algorithms can fail when the best solution requires a combination of earlier choices."
    }
]


};
