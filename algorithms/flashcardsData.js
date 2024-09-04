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
  { question: "What is Big O Notation?", answer: "Measures algorithm efficiency by how time or space grows with input size." },
  { question: "What is an Array?", answer: "Linear structure storing elements of the same type in contiguous memory, accessed by index." },
  { question: "What is a Linked List?", answer: "A sequence of nodes, each containing data and a reference to the next." },
  { question: "What is a Stack?", answer: "LIFO structure where elements are added/removed from the top." },
  { question: "What is a Queue?", answer: "FIFO structure where elements are added at the rear and removed from the front." },
  { question: "What is a Binary Tree?", answer: "A hierarchical structure where each node has up to two children, used for search and sort." },
  { question: "What is a Binary Search Tree (BST)?", answer: "Binary tree with left < node < right, enabling efficient search, insert, delete." },
  { question: "What is a Heap?", answer: "A tree that maintains max/min property, often used in priority queues." },
  { question: "What is a Hash Table?", answer: "Maps keys to values using a hash function for fast lookups." },
  { question: "What is a Graph?", answer: "A set of vertices connected by edges, representing relationships or networks." },
  { question: "What is a Directed Acyclic Graph (DAG)?", answer: "A directed graph with no cycles, used in tasks like scheduling." },
  { question: "What is Dynamic Programming?", answer: "Breaks problems into subproblems and stores results to avoid recomputation." },
  { question: "What is Divide and Conquer?", answer: "Divides a problem, solves subproblems, and combines results." },
  { question: "What is a Sorting Algorithm?", answer: "Arranges elements in order, e.g., Quick Sort, Merge Sort." },
  { question: "What is a Searching Algorithm?", answer: "Finds specific data, e.g., Binary Search or Linear Search." },
  { question: "What is Recursion?", answer: "A function calling itself to solve smaller instances of the problem." },
  { question: "What is a Greedy Algorithm?", answer: "Solves problems by making the locally optimal choice at each step." },
  { question: "What is Backtracking?", answer: "Builds a solution incrementally, abandoning unfit solutions." },
  { question: "What is Depth-First Search (DFS)?", answer: "Explores as far as possible along each branch before backtracking." },
  { question: "What is Breadth-First Search (BFS)?", answer: "Explores nodes level by level, moving horizontally." },
  { question: "What is a Trie?", answer: "A tree structure for storing strings, enabling efficient prefix searches." },
  { question: "What is Memoization?", answer: "Stores function results to avoid redundant computations." },
  { question: "What is a Priority Queue?", answer: "Dequeues elements based on priority, often implemented with a heap." },
  { question: "What is Amortized Analysis?", answer: "Averages time over a sequence of operations to measure long-term efficiency." },
  { question: "What is an Array?", answer: "Linear structure storing elements of the same type in contiguous memory, accessed by index." },
  { question: "Array Code Example", answer: `
    // Create an array
    let arr = [1, 2, 3, 4, 5];
    
    // Access element at index 2
    console.log(arr[2]);  // Output: 3
    
    // Add element to the end of the array
    arr.push(6);
    
    // Output the updated array
    console.log(arr);  // Output: [1, 2, 3, 4, 5, 6]
  ` },

  { question: "What is a Linked List?", answer: "A sequence of nodes, each containing data and a reference to the next." },
  { question: "Linked List Code Example", answer: `
    class Node {
      constructor(data) {
        this.data = data;  // Store node data
        this.next = null;  // Pointer to the next node
      }
    }
    
    class LinkedList {
      constructor() {
        this.head = null;  // Initialize head as null
      }
      
      // Method to add a new node to the list
      add(data) {
        let newNode = new Node(data);  // Create a new node
        if (!this.head) {
          this.head = newNode;  // If list is empty, make new node the head
        } else {
          let current = this.head;
          while (current.next) {
            current = current.next;  // Traverse to the last node
          }
          current.next = newNode;  // Add new node at the end
        }
      }
    }

    // Example usage
    let list = new LinkedList();
    list.add(10);
    list.add(20);
    console.log(list.head.data);  // Output: 10
  ` },

  { question: "What is a Stack?", answer: "LIFO structure where elements are added/removed from the top." },
  { question: "Stack Code Example", answer: `
    class Stack {
      constructor() {
        this.stack = [];  // Initialize an empty stack
      }
      
      // Method to push an element onto the stack
      push(data) {
        this.stack.push(data);
      }
      
      // Method to pop an element from the stack
      pop() {
        return this.stack.pop();
      }
    }

    // Example usage
    let stack = new Stack();
    stack.push(10);
    stack.push(20);
    console.log(stack.pop());  // Output: 20
  ` },

  { question: "What is a Queue?", answer: "FIFO structure where elements are added at the rear and removed from the front." },
  { question: "Queue Code Example", answer: `
    class Queue {
      constructor() {
        this.queue = [];  // Initialize an empty queue
      }
      
      // Method to enqueue an element at the rear
      enqueue(data) {
        this.queue.push(data);
      }
      
      // Method to dequeue an element from the front
      dequeue() {
        return this.queue.shift();
      }
    }

    // Example usage
    let queue = new Queue();
    queue.enqueue(10);
    queue.enqueue(20);
    console.log(queue.dequeue());  // Output: 10
  ` },

  { question: "What is a Binary Tree?", answer: "A hierarchical structure where each node has up to two children, used for search and sort." },
  { question: "Binary Tree Code Example", answer: `
    class TreeNode {
      constructor(data) {
        this.data = data;  // Store node data
        this.left = null;  // Left child
        this.right = null;  // Right child
      }
    }
    
    class BinaryTree {
      constructor() {
        this.root = null;  // Initialize root as null
      }
      
      // Method to insert a new node in the binary tree
      insert(data) {
        let newNode = new TreeNode(data);  // Create a new node
        if (!this.root) {
          this.root = newNode;  // If tree is empty, set root
        } else {
          this.insertNode(this.root, newNode);
        }
      }
      
      // Helper method to insert a node
      insertNode(node, newNode) {
        if (newNode.data < node.data) {
          if (!node.left) {
            node.left = newNode;  // Insert as left child
          } else {
            this.insertNode(node.left, newNode);
          }
        } else {
          if (!node.right) {
            node.right = newNode;  // Insert as right child
          } else {
            this.insertNode(node.right, newNode);
          }
        }
      }
    }

    // Example usage
    let tree = new BinaryTree();
    tree.insert(10);
    tree.insert(5);
    tree.insert(20);
    console.log(tree.root.data);  // Output: 10
  ` },

  { question: "What is a Hash Table?", answer: "Maps keys to values using a hash function for fast lookups." },
  { question: "Hash Table Code Example", answer: `
    class HashTable {
      constructor(size) {
        this.table = new Array(size);  // Initialize table with given size
        this.size = size;  // Set table size
      }
      
      // Hash function to compute index
      hash(key) {
        return key % this.size;
      }
      
      // Method to insert a key-value pair
      set(key, value) {
        let index = this.hash(key);  // Compute index using hash function
        this.table[index] = value;  // Store value at computed index
      }
      
      // Method to retrieve a value by key
      get(key) {
        let index = this.hash(key);  // Compute index using hash function
        return this.table[index];  // Retrieve value from the table
      }
    }

    // Example usage
    let hashTable = new HashTable(10);
    hashTable.set(1, "Apple");
    hashTable.set(2, "Banana");
    console.log(hashTable.get(1));  // Output: Apple
  ` }
],


  whatAreAlgorithms : [
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


};