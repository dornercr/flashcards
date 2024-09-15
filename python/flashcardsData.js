const topicTitles = {
  pythonBasicSyntax : "Basic Syntax and Variables",
  pythonDataStructures: "Python Data Structures: Lists, tuples, sets, dictionaries",
  pythonControlFlow : "Control Flow: If statements, loops, break, continue, pass",
  pythonFunctions: "Python Functions",
  pythonModules: "Python Modules",
  Chapter1_PythonBasicsMnemonics: "Python Basics Mnemonics",
  pythonBuiltinFunctions: "Python BuiltinFunctions",
  pandasOperations: "Pandas Operations",
  numpyOperations: "Numpy Operations",



};

const flashcardsData = {
  pythonBasicSyntax: [
    {
      "question": "What is the purpose of comments in Python?",
      "answer": "Comments are used to explain code, make notes, or temporarily disable lines of code. They are ignored by the interpreter.\n\nKey Point: Use comments to improve code readability.\n\nExample:\n```\n# This is a comment\n```"
    },
    {
      "question": "How do you write a single-line comment in Python?",
      "answer": "Single-line comments in Python are written by placing the # symbol at the start of the comment.\n\nKey Point: The # symbol tells the interpreter to ignore the rest of the line.\n\nExample:\n```\n# This is a single-line comment\n```"
    },
    {
      "question": "How do you print a message in Python?",
      "answer": "You use the print() function to display a message.\n\nKey Point: The print function outputs text to the console.\n\nExample:\n```\nprint('Hello, World!')\n```"
    },
    {
      "question": "What are the basic data types in Python?",
      "answer": "The basic data types in Python are:\n- `int` for integers\n- `float` for floating-point numbers\n- `str` for strings (text)\n- `bool` for Boolean values (True or False).\n\nKey Point: Python supports a variety of data types to handle different kinds of information."
    },
    {
      "question": "How do you create a variable in Python?",
      "answer": "Variables in Python are created by assigning a value to a name. The syntax is `variable_name = value`.\n\nKey Point: Variable names must start with a letter or an underscore.\n\nExample:\n```\nage = 25\n```"
    },
    {
      "question": "What is an integer data type?",
      "answer": "The integer (int) data type represents whole numbers, both positive and negative, without a decimal point.\n\nKey Point: Integers are used for counting and indexing.\n\nExample:\n```\nx = 42\n```"
    },
    {
      "question": "What is the difference between an int and a float?",
      "answer": "An int represents whole numbers (e.g., 5), while a float represents numbers with a decimal point (e.g., 5.5).\n\nKey Point: Use floats when you need precision for decimal values."
    },
    {
      "question": "How do you check the data type of a variable in Python?",
      "answer": "You can use the `type()` function to check the data type of a variable.\n\nKey Point: `type()` reveals the data type of any object in Python.\n\nExample:\n```\nx = 10\nprint(type(x))  # Output: <class 'int'>\n```"
    },
    {
      "question": "What is a string in Python?",
      "answer": "A string (str) is a sequence of characters enclosed in either single (') or double (\") quotes.\n\nKey Point: Strings can store text-based information.\n\nExample:\n```\nname = \"Alice\"\n```"
    },
    {
      "question": "How do you declare a Boolean variable in Python?",
      "answer": "A Boolean variable stores one of two values: True or False.\n\nKey Point: Booleans are used to represent truth values in logic.\n\nExample:\n```\nis_student = True\n```"
    },
    {
      "question": "Can variables in Python change their type after being assigned?",
      "answer": "Yes, Python is dynamically typed, meaning variables can change their type after being assigned.\n\nKey Point: Python allows reassignment of variables to different types.\n\nExample:\n```\nx = 5  # int\nx = 'Hello'  # str\n```"
    },
    {
      "question": "What does the print() function do?",
      "answer": "The print() function outputs text or variable values to the console.\n\nKey Point: Use `print()` to display information during code execution.\n\nExample:\n```\nname = \"Alice\"\nprint(name)  # Output: Alice\n```"
    },
    {
      "question": "How do you assign multiple variables in a single line in Python?",
      "answer": "You can assign multiple variables in a single line by separating them with commas.\n\nKey Point: Multiple assignment saves space and simplifies code.\n\nExample:\n```\nx, y, z = 1, 2, 3\n```"
    },
    {
      "question": "What is the difference between single and double quotes for strings in Python?",
      "answer": "There is no difference between using single (') and double (\") quotes for strings in Python. Either can be used, but they must match at the beginning and end.\n\nKey Point: Use matching quotes consistently."
    },
    {
      "question": "How do you create a multi-line string in Python?",
      "answer": "Multi-line strings are created using triple quotes (''' or \"\"\").\n\nKey Point: Triple quotes allow text to span multiple lines.\n\nExample:\n```\nmulti_line_string = \"\"\"This is\na multi-line\nstring.\"\"\"\n```"
    },
    {
      "question": "What will happen if you try to assign a variable name starting with a number?",
      "answer": "Python will raise a `SyntaxError` because variable names cannot begin with numbers.\n\nKey Point: Variable names must start with a letter or underscore.\n\nExample:\n```\n1st_var = 5  # This will cause an error\n```"
    },
    {
      "question": "How do you include quotes inside a string in Python?",
      "answer": "You can include quotes inside a string by using the opposite type of quote or escaping the quote with a backslash (\\).\n\nKey Point: Escaping or using opposite quotes prevents syntax errors.\n\nExample:\n```\nquote = \"She said, 'Hello!'\"\nescaped_quote = 'She said, \"Hello!\"'\n```"
    },
    {
      "question": "What is the difference between = and == in Python?",
      "answer": "`=` is the assignment operator, used to assign values to variables. `==` is the equality operator, used to check if two values are equal.\n\nKey Point: `=` assigns, `==` compares.\n\nExample:\n```\nx = 5  # assignment\nx == 5  # equality check\n```"
    },
    {
      "question": "Can a variable name contain spaces in Python?",
      "answer": "No, variable names cannot contain spaces. You should use underscores (_) to separate words.\n\nKey Point: Use underscores for readability in variable names.\n\nExample:\n```\nmy_variable = 10\n```"
    },
    {
      "question": "What happens if you try to print a variable that hasn’t been defined?",
      "answer": "Python will raise a `NameError`, indicating that the variable is not defined.\n\nKey Point: Ensure variables are defined before using them.\n\nExample:\n```\nprint(undeclared_variable)  # This will raise a NameError\n```"
    }
  ],

  pythonDataStructures: [
    {
      "question": "What is a list in Python?",
      "answer": "A list is an ordered, mutable collection of items that can hold different types of elements. Lists are defined using square brackets `[]`.\n\nKey Point: Lists can contain any type of data and can be modified.\n\nExample:\n```\nmy_list = [1, 2, 3, 'apple']\n```"
    },
    {
      "question": "How do you create an empty list?",
      "answer": "You can create an empty list using empty square brackets `[]` or by calling the `list()` function.\n\nKey Point: Both methods create an empty list, but the syntax is different.\n\nExample:\n```\nempty_list = []\n# or\nempty_list = list()\n```"
    },
    {
      "question": "How do you access elements in a list?",
      "answer": "You can access elements in a list using their index, starting from 0 for the first element.\n\nKey Point: List indices start at 0 in Python.\n\nExample:\n```\nmy_list = [10, 20, 30]\nprint(my_list[0])  # Output: 10\n```"
    },
    {
      "question": "What is a tuple in Python?",
      "answer": "A tuple is an ordered, immutable collection of items. Tuples are defined using parentheses `()`.\n\nKey Point: Tuples cannot be changed once created.\n\nExample:\n```\nmy_tuple = (1, 2, 3, 'banana')\n```"
    },
    {
      "question": "How are lists different from tuples?",
      "answer": "The main difference is that lists are mutable (they can be changed after creation), while tuples are immutable (they cannot be changed after creation)."
    },
    {
      "question": "How do you create an empty tuple?",
      "answer": "You can create an empty tuple using empty parentheses `()` or by calling the `tuple()` function.\n\nKey Point: Both methods create an empty tuple, with different syntax.\n\nExample:\n```\nempty_tuple = ()\n# or\nempty_tuple = tuple()\n```"
    },
    {
      "question": "How do you change a value in a list?",
      "answer": "You can change a value in a list by accessing the element via its index and assigning a new value to it.\n\nKey Point: Lists allow changes to elements after creation.\n\nExample:\n```\nmy_list = [1, 2, 3]\nmy_list[1] = 10\nprint(my_list)  # Output: [1, 10, 3]\n```"
    },
    {
      "question": "Can you change the value of a tuple after it is created?",
      "answer": "No, tuples are immutable, so their values cannot be changed after they are created."
    },
    {
      "question": "What is a set in Python?",
      "answer": "A set is an unordered collection of unique items. Sets are defined using curly braces `{}` or by calling the `set()` function.\n\nKey Point: Sets automatically remove duplicates.\n\nExample:\n```\nmy_set = {1, 2, 3, 3, 4}  # Output: {1, 2, 3, 4}\n```"
    },
    {
      "question": "How do sets handle duplicate elements?",
      "answer": "Sets automatically remove duplicate elements, so each item in a set is unique.\n\nKey Point: No duplicates are allowed in sets.\n\nExample:\n```\nmy_set = {1, 2, 2, 3}\nprint(my_set)  # Output: {1, 2, 3}\n```"
    },
    {
      "question": "How do you create an empty set?",
      "answer": "You must use the `set()` function to create an empty set, as using `{}` creates an empty dictionary.\n\nKey Point: `{}` creates a dictionary, not a set.\n\nExample:\n```\nempty_set = set()\n```"
    },
    {
      "question": "What is a dictionary in Python?",
      "answer": "A dictionary is an unordered collection of key-value pairs. Keys are unique, and values can be of any type. Dictionaries are defined using curly braces `{}` with keys and values separated by a colon `:`.\n\nKey Point: Dictionaries use key-value pairs for mapping.\n\nExample:\n```\nmy_dict = {'name': 'Alice', 'age': 25}\n```"
    },
    {
      "question": "How do you access values in a dictionary?",
      "answer": "You can access values in a dictionary using their keys.\n\nKey Point: Dictionary values are accessed by their unique keys.\n\nExample:\n```\nmy_dict = {'name': 'Alice', 'age': 25}\nprint(my_dict['name'])  # Output: Alice\n```"
    },
    {
      "question": "Can dictionary keys be mutable types like lists?",
      "answer": "No, dictionary keys must be immutable, such as strings, numbers, or tuples. Lists and other mutable types cannot be used as keys."
    },
    {
      "question": "How do you add an element to a dictionary?",
      "answer": "You can add elements to a dictionary by assigning a new key-value pair.\n\nKey Point: Use assignment to add a key-value pair to a dictionary.\n\nExample:\n```\nmy_dict = {'name': 'Alice'}\nmy_dict['age'] = 25\nprint(my_dict)  # Output: {'name': 'Alice', 'age': 25}\n```"
    },
    {
      "question": "How do you remove a key-value pair from a dictionary?",
      "answer": "You can remove a key-value pair using the `del` statement or the `pop()` method.\n\nKey Point: Removing keys requires either `del` or `pop()`.\n\nExample:\n```\nmy_dict = {'name': 'Alice', 'age': 25}\ndel my_dict['age']\nprint(my_dict)  # Output: {'name': 'Alice'}\n```"
    },
    {
      "question": "What is the difference between a list and a set?",
      "answer": "The main differences are:\n- Lists are ordered and can contain duplicate elements.\n- Sets are unordered and cannot contain duplicates."
    },
    {
      "question": "Can you convert a list to a set?",
      "answer": "Yes, you can convert a list to a set using the `set()` function, which will remove any duplicate values from the list.\n\nKey Point: Converting to a set removes duplicates.\n\nExample:\n```\nmy_list = [1, 2, 2, 3]\nmy_set = set(my_list)\nprint(my_set)  # Output: {1, 2, 3}\n```"
    },
    {
      "question": "How do you check if a key exists in a dictionary?",
      "answer": "You can use the `in` keyword to check if a key exists in a dictionary.\n\nKey Point: Use `in` to check for key presence in a dictionary.\n\nExample:\n```\nmy_dict = {'name': 'Alice', 'age': 25}\nprint('name' in my_dict)  # Output: True\n```"
    },
    {
      "question": "Can you change the value associated with a key in a dictionary?",
      "answer": "Yes, you can change the value by reassigning a new value to the key.\n\nKey Point: Dictionary values can be updated by reassigning.\n\nExample:\n```\nmy_dict = {'name': 'Alice', 'age': 25}\nmy_dict['age'] = 26\nprint(my_dict)  # Output: {'name': 'Alice', 'age': 26}\n```"
    },
    {
      "question": "How do you remove duplicates from a list?",
      "answer": "You can remove duplicates by converting the list to a set and then back to a list.\n\nKey Point: Sets automatically remove duplicates.\n\nExample:\n```\nmy_list = [1, 2, 2, 3]\nmy_list = list(set(my_list))\nprint(my_list)  # Output: [1, 2, 3]\n```"
    },
    {
      "question": "How do you merge two dictionaries?",
      "answer": "You can merge two dictionaries using the `update()` method or by using the `|` operator (Python 3.9+).\n\nKey Point: `update()` or `|` can merge dictionaries.\n\nExample:\n```\ndict1 = {'a': 1, 'b': 2}\ndict2 = {'b': 3, 'c': 4}\ndict1.update(dict2)\nprint(dict1)  # Output: {'a': 1, 'b': 3, 'c': 4}\n```"
    },
    {
      "question": "Can you change an element in a set?",
      "answer": "No, sets are unordered and do not allow indexing, so you cannot directly change an element. However, you can remove an element and add a new one."
    },
    {
      "question": "What happens if you try to access a key that doesn’t exist in a dictionary?",
      "answer": "Python will raise a `KeyError` if you try to access a key that doesn't exist in a dictionary."
    },
    {
      "question": "How do you add multiple elements to a list at once?",
      "answer": "You can add multiple elements to a list using the `extend()` method or by concatenating the list with another list using `+`.\n\nKey Point: `extend()` adds multiple items to a list at once.\n\nExample:\n```\nmy_list = [1, 2, 3]\nmy_list.extend([4, 5])\nprint(my_list)  # Output: [1, 2, 3, 4, 5]\n```"
    }
  ],

  pythonControlFlow: [
    {
      "question": "What is an if statement used for in Python?",
      "answer": "An if statement is used to execute a block of code only if a specified condition is true.\n\nKey Point: Use `if` to control code execution based on conditions.\n\nExample:\n```\nif x > 10:\n    print('x is greater than 10')\n```"
    },
    {
      "question": "What is the syntax for an if-else statement in Python?",
      "answer": "The if-else statement provides an alternative block of code to execute if the if condition is false.\n\nKey Point: `else` executes when the `if` condition is false.\n\nExample:\n```\nif x > 10:\n    print('x is greater than 10')\nelse:\n    print('x is less than or equal to 10')\n```"
    },
    {
      "question": "What is an elif statement?",
      "answer": "The `elif` (short for 'else if') statement allows you to check multiple conditions after an initial if condition.\n\nKey Point: `elif` can be used to handle multiple conditions.\n\nExample:\n```\nif x > 10:\n    print('x is greater than 10')\nelif x == 10:\n    print('x is equal to 10')\nelse:\n    print('x is less than 10')\n```"
    },
    {
      "question": "What is a for loop in Python?",
      "answer": "A for loop is used to iterate over a sequence (like a list, tuple, or range) and execute a block of code for each item in the sequence.\n\nKey Point: `for` loops iterate through sequences.\n\nExample:\n```\nfor item in [1, 2, 3]:\n    print(item)\n```"
    },
    {
      "question": "How does a while loop work in Python?",
      "answer": "A while loop repeatedly executes a block of code as long as the given condition is true.\n\nKey Point: `while` loops repeat until the condition is false.\n\nExample:\n```\ncount = 0\nwhile count < 5:\n    print(count)\n    count += 1\n```"
    },
    {
      "question": "What is the purpose of the break statement?",
      "answer": "The break statement is used to exit a loop prematurely, even if the loop’s condition is still true or there are remaining items to iterate over.\n\nKey Point: `break` exits loops early.\n\nExample:\n```\nfor num in range(10):\n    if num == 5:\n        break\n    print(num)\n```"
    },
    {
      "question": "What is the continue statement used for?",
      "answer": "The continue statement skips the current iteration of the loop and moves on to the next iteration.\n\nKey Point: `continue` skips the rest of the current loop iteration.\n\nExample:\n```\nfor num in range(5):\n    if num == 3:\n        continue\n    print(num)\n```"
    },
    {
      "question": "How do you use the pass statement in Python?",
      "answer": "The pass statement is a placeholder used when a statement is required syntactically, but no code needs to be executed.\n\nKey Point: `pass` is a no-operation statement.\n\nExample:\n```\nfor num in range(5):\n    if num == 3:\n        pass  # Do nothing for now\n    else:\n        print(num)\n```"
    },
    {
      "question": "Can an if statement be used without an else clause?",
      "answer": "Yes, an if statement can be used without an else clause. The code inside the if block is executed if the condition is true, and the rest of the program continues if it's false."
    },
    {
      "question": "How do you create an infinite loop using a while loop?",
      "answer": "You can create an infinite loop by setting a while loop condition that is always true.\n\nKey Point: Infinite loops have a condition that is always true.\n\nExample:\n```\nwhile True:\n    print('This loop will run forever')\n```"
    },
    {
      "question": "How do you exit an infinite loop?",
      "answer": "You can exit an infinite loop by using the break statement or by stopping the program manually (e.g., with Ctrl + C in a terminal).\n\nKey Point: `break` can terminate infinite loops.\n\nExample:\n```\nwhile True:\n    print('This runs indefinitely')\n    break\n```"
    },
    {
      "question": "What is the difference between break and continue in loops?",
      "answer": "`break` exits the loop entirely, while `continue` skips the current iteration and continues with the next iteration of the loop."
    },
    {
      "question": "How do you use a for loop to iterate over a range of numbers?",
      "answer": "You can use the `range()` function to generate a sequence of numbers to iterate over in a for loop.\n\nKey Point: `range()` generates a sequence of numbers.\n\nExample:\n```\nfor i in range(5):\n    print(i)\n```"
    },
    {
      "question": "Can you nest if statements in Python?",
      "answer": "Yes, you can nest if statements to check multiple conditions.\n\nKey Point: Nested `if` statements allow for more specific conditions.\n\nExample:\n```\nx = 5\nif x > 0:\n    if x < 10:\n        print('x is between 0 and 10')\n```"
    },
    {
      "question": "What happens if a while loop condition never becomes False?",
      "answer": "If a while loop condition never becomes False, the loop will continue to run indefinitely, creating an infinite loop."
    },
    {
      "question": "Can a for loop iterate over a string?",
      "answer": "Yes, a for loop can iterate over the characters in a string.\n\nKey Point: Strings are iterable in Python.\n\nExample:\n```\nfor char in 'hello':\n    print(char)\n```"
    },
    {
      "question": "How do you use the else statement with loops in Python?",
      "answer": "The else statement in a loop runs when the loop finishes without encountering a break statement.\n\nKey Point: `else` after a loop executes if no `break` occurs.\n\nExample:\n```\nfor i in range(3):\n    print(i)\nelse:\n    print('Loop finished')\n```"
    },
    {
      "question": "What happens when a break statement is used inside a while loop?",
      "answer": "When a break statement is encountered inside a while loop, it immediately exits the loop, regardless of the loop’s condition.\n\nKey Point: `break` exits the loop, bypassing the loop condition.\n\nExample:\n```\nwhile True:\n    print('In loop')\n    break\n```"
    },
    {
      "question": "Can you use the continue statement in a while loop?",
      "answer": "Yes, the continue statement can be used in a while loop to skip the rest of the code in the current iteration and proceed to the next one.\n\nKey Point: `continue` skips to the next iteration.\n\nExample:\n```\ncount = 0\nwhile count < 5:\n    count += 1\n    if count == 3:\n        continue\n    print(count)\n```"
    },
    {
      "question": "How do you iterate over both the index and the value of a list in a for loop?",
      "answer": "You can use the `enumerate()` function to get both the index and the value of a list.\n\nKey Point: `enumerate()` provides both index and value.\n\nExample:\n```\nmy_list = ['a', 'b', 'c']\nfor index, value in enumerate(my_list):\n    print(index, value)\n```"
    },
    {
      "question": "What happens if you place a pass statement in a loop?",
      "answer": "When the pass statement is encountered, nothing happens, and the loop moves to the next iteration. It’s used as a placeholder.\n\nKey Point: `pass` skips execution, doing nothing.\n\nExample:\n```\nfor i in range(3):\n    pass  # Placeholder for future code\nprint('Loop finished')\n```"
    },
    {
      "question": "Can you combine if, elif, and else statements inside a loop?",
      "answer": "Yes, you can combine if, elif, and else statements inside a loop to execute different blocks of code based on conditions during iteration.\n\nKey Point: Combined conditionals allow complex decision-making within loops.\n\nExample:\n```\nfor num in range(5):\n    if num == 2:\n        print('Found 2')\n    elif num == 4:\n        print('Found 4')\n    else:\n        print('Other number')\n```"
    },
    {
      "question": "How do you manually increment a counter in a while loop?",
      "answer": "You manually increment a counter by using an assignment operation inside the loop.\n\nKey Point: Counters must be manually updated in `while` loops.\n\nExample:\n```\ncount = 0\nwhile count < 5:\n    print(count)\n    count += 1\n```"
    }
  ],

  pythonFunctions: [
    {
      "question": "How do you define a function in Python?",
      "answer": "You define a function in Python using the `def` keyword, followed by the function name and parentheses `()`. The function body is indented.\n\nKey Point: Functions allow code reuse.\n\nExample:\n```\ndef my_function():\n    print('Hello, World!')\n```"
    },
    {
      "question": "What does the return statement do in a function?",
      "answer": "The return statement is used to exit a function and send a value back to the caller.\n\nKey Point: `return` sends data back from a function.\n\nExample:\n```\ndef add(a, b):\n    return a + b\n```"
    },
    {
      "question": "Can a function return multiple values in Python?",
      "answer": "Yes, a function can return multiple values by returning them as a tuple.\n\nKey Point: Multiple values are returned as a tuple.\n\nExample:\n```\ndef get_coordinates():\n    return (10, 20)\n```"
    },
    {
      "question": "What is the difference between return and print in a function?",
      "answer": "`return` sends a value back to the caller and terminates the function, while `print` simply outputs a value to the console without affecting the function's flow or return value."
    },
    {
      "question": "What is a function argument in Python?",
      "answer": "A function argument is a value passed to a function when it is called. Arguments are placed inside the parentheses of the function call.\n\nKey Point: Arguments are inputs to functions.\n\nExample:\n```\ndef greet(name):\n    print(f'Hello, {name}')\n```"
    },
    {
      "question": "What is a default argument in Python?",
      "answer": "A default argument is a parameter that assumes a default value if no argument is passed for it when the function is called.\n\nKey Point: Default arguments allow function flexibility.\n\nExample:\n```\ndef greet(name='John'):\n    print(f'Hello, {name}')\n```"
    },
    {
      "question": "What are keyword arguments in Python functions?",
      "answer": "Keyword arguments are arguments that are passed to a function using the parameter names explicitly.\n\nKey Point: Keyword arguments make function calls clearer.\n\nExample:\n```\ndef greet(name, message):\n    print(f'{message}, {name}')\ngreet(name='Alice', message='Good morning')\n```"
    },
    {
      "question": "What is the difference between positional arguments and keyword arguments?",
      "answer": "Positional arguments are passed to a function in the order they are defined, while keyword arguments are passed by explicitly naming the parameters."
    },
    {
      "question": "What are *args in a function definition?",
      "answer": "`*args` allows a function to accept a variable number of positional arguments. The arguments are passed as a tuple.\n\nKey Point: `*args` makes functions flexible.\n\nExample:\n```\ndef sum_numbers(*args):\n    return sum(args)\n```"
    },
    {
      "question": "What are **kwargs in a function definition?",
      "answer": "`**kwargs` allows a function to accept a variable number of keyword arguments. The arguments are passed as a dictionary.\n\nKey Point: `**kwargs` allows dynamic keyword arguments.\n\nExample:\n```\ndef print_info(**kwargs):\n    for key, value in kwargs.items():\n        print(f'{key}: {value}')\n```"
    },
    {
      "question": "Can you use *args and **kwargs in the same function?",
      "answer": "Yes, you can use both `*args` and `**kwargs` in the same function. `*args` must come before `**kwargs` in the function definition.\n\nKey Point: Use both for ultimate flexibility.\n\nExample:\n```\ndef display_info(*args, **kwargs):\n    print(args)\n    print(kwargs)\n```"
    },
    {
      "question": "What is the benefit of using *args in a function?",
      "answer": "The benefit of using `*args` is that it allows the function to accept any number of positional arguments, making the function more flexible."
    },
    {
      "question": "What is the benefit of using **kwargs in a function?",
      "answer": "`**kwargs` allows the function to handle a variable number of keyword arguments, providing flexibility when you don’t know the exact arguments in advance."
    },
    {
      "question": "How do you specify a return type for a function in Python?",
      "answer": "You can specify the return type of a function using type hints. However, this does not enforce the return type.\n\nKey Point: Type hints improve code readability.\n\nExample:\n```\ndef add(a: int, b: int) -> int:\n    return a + b\n```"
    },
    {
      "question": "What happens if a function does not have a return statement?",
      "answer": "If a function does not have a return statement, it returns `None` by default."
    },
    {
      "question": "How do you call a function with arguments in Python?",
      "answer": "You call a function with arguments by passing the values in parentheses after the function name.\n\nKey Point: Call functions by specifying arguments.\n\nExample:\n```\ndef greet(name):\n    print(f'Hello, {name}')\ngreet('Alice')\n```"
    },
    {
      "question": "What is function recursion in Python?",
      "answer": "Function recursion occurs when a function calls itself to solve a smaller instance of the same problem.\n\nKey Point: Recursion is useful for divide-and-conquer problems.\n\nExample:\n```\ndef factorial(n):\n    if n == 1:\n        return 1\n    else:\n        return n * factorial(n - 1)\n```"
    },
    {
      "question": "Can you modify a global variable inside a function?",
      "answer": "Yes, you can modify a global variable inside a function using the `global` keyword.\n\nKey Point: The `global` keyword allows global variable modification.\n\nExample:\n```\nx = 10\ndef modify_global():\n    global x\n    x = 20\n```"
    },
    {
      "question": "How do you create an anonymous function in Python?",
      "answer": "You can create an anonymous function using the `lambda` keyword. Lambda functions are used for simple, single-expression functions.\n\nKey Point: `lambda` creates concise anonymous functions.\n\nExample:\n```\nadd = lambda a, b: a + b\n```"
    },
    {
      "question": "Can a function return another function?",
      "answer": "Yes, a function can return another function in Python.\n\nKey Point: Functions can return other functions.\n\nExample:\n```\ndef outer_function():\n    def inner_function():\n        return 'Hello from inner'\n    return inner_function\n```"
    },
    {
      "question": "What happens if you pass too many arguments to a function?",
      "answer": "If a function is called with more arguments than it is defined to accept, Python raises a `TypeError`."
    },
    {
      "question": "Can you have a function with no parameters in Python?",
      "answer": "Yes, you can define a function with no parameters in Python.\n\nKey Point: Functions don't always need parameters.\n\nExample:\n```\ndef greet():\n    print('Hello, World!')\n```"
    },
    {
      "question": "What is the purpose of function docstrings in Python?",
      "answer": "Docstrings are used to provide documentation about a function. They are placed immediately after the function definition and can be accessed using the `__doc__` attribute.\n\nKey Point: Use docstrings to document your code.\n\nExample:\n```\ndef greet():\n    '''This function greets the user.'''\n    print('Hello!')\n```"
    },
    {
      "question": "What is function overloading in Python?",
      "answer": "Python does not support traditional function overloading (having multiple functions with the same name but different parameters). However, you can achieve similar behavior using default arguments or `*args` and `**kwargs`."
    },
    {
      "question": "Can you assign a function to a variable in Python?",
      "answer": "Yes, you can assign a function to a variable and call it using that variable.\n\nKey Point: Functions can be treated as variables.\n\nExample:\n```\ndef greet():\n    print('Hello')\nsay_hello = greet\nsay_hello()\n```"
    },
    {
      "question": "How do you return multiple values from a function?",
      "answer": "You can return multiple values by separating them with commas, and they will be returned as a tuple.\n\nKey Point: Functions can return multiple values as a tuple.\n\nExample:\n```\ndef get_coordinates():\n    return 10, 20\nx, y = get_coordinates()\n```"
    },
    {
      "question": "What is a higher-order function?",
      "answer": "A higher-order function is a function that takes another function as an argument or returns a function as its result.\n\nKey Point: Higher-order functions manipulate other functions.\n\nExample:\n```\ndef apply_function(func, value):\n    return func(value)\n```"
    },
    {
      "question": "Can you use a function as an argument in Python?",
      "answer": "Yes, you can pass a function as an argument to another function in Python.\n\nKey Point: Functions can be passed as arguments.\n\nExample:\n```\ndef greet(name):\n    return f'Hello, {name}'\ndef call_function(func, value):\n    return func(value)\nprint(call_function(greet, 'Alice'))\n```"
    },
    {
      "question": "How do you define a function with keyword-only arguments?",
      "answer": "You can enforce keyword-only arguments by placing a `*` in the function definition.\n\nKey Point: Keyword-only arguments increase clarity.\n\nExample:\n```\ndef func(a, *, b):\n    return a + b\n```"
    },
    {
      "question": "What happens if you use return without a value in a function?",
      "answer": "If you use return without a value, the function returns `None`.\n\nKey Point: `return` without a value returns `None`.\n\nExample:\n```\ndef do_nothing():\n    return\nprint(do_nothing())  # Output: None\n```"
    }
  ],
  pythonModules: [
    {
      "question": "What is a module in Python?",
      "answer": "A module is a file that contains Python code (functions, classes, or variables) that can be imported and used in other Python programs. Modules are usually saved with a .py extension.\n\nKey Point: Modules allow code reuse.\n\nExample:\n```\n# my_module.py\nimport my_module\n```"
    },
    {
      "question": "How do you import a module in Python?",
      "answer": "You use the `import` statement followed by the module name to import a module.\n\nKey Point: `import` allows access to the module’s code.\n\nExample:\n```\nimport math\nprint(math.sqrt(16))  # Output: 4.0\n```"
    },
    {
      "question": "How do you import only specific parts of a module?",
      "answer": "You can use the `from` keyword to import specific functions or variables from a module.\n\nKey Point: Importing only what you need makes your code cleaner.\n\nExample:\n```\nfrom math import sqrt\nprint(sqrt(16))  # Output: 4.0\n```"
    },
    {
      "question": "How do you rename a module upon import?",
      "answer": "You can use the `as` keyword to give a module a different name when importing it.\n\nKey Point: Aliasing simplifies module usage in code.\n\nExample:\n```\nimport math as m\nprint(m.sqrt(16))  # Output: 4.0\n```"
    },
    {
      "question": "How do you create your own module in Python?",
      "answer": "To create a module, you write Python code in a .py file and then import that file into another script.\n\nKey Point: Any Python file can be treated as a module.\n\nExample:\n```\n# my_module.py\ndef greet(name):\n    return f'Hello, {name}'\n```"
    },
    {
      "question": "What is the difference between a module and a package?",
      "answer": "A module is a single file containing Python code, while a package is a directory that contains multiple modules and an `__init__.py` file, allowing the directory to be treated as a module. A package organizes related modules."
    },
    {
      "question": "What is the __init__.py file used for?",
      "answer": "The `__init__.py` file is used to indicate that a directory is a Python package. It can be empty or contain initialization code for the package."
    },
    {
      "question": "How do you import a module from a package?",
      "answer": "You can use the `import` statement with the package name followed by the module name.\n\nKey Point: Import from packages by specifying the full path.\n\nExample:\n```\nimport my_package.my_module\n```"
    },
    {
      "question": "How do you list all the functions and variables available in a module?",
      "answer": "You can use the `dir()` function to list all the functions, variables, and classes available in a module.\n\nKey Point: `dir()` lists all attributes of a module.\n\nExample:\n```\nimport math\nprint(dir(math))\n```"
    },
    {
      "question": "What is pip in Python?",
      "answer": "`pip` is the package installer for Python. It is used to install, update, and manage Python packages from the Python Package Index (PyPI).\n\nKey Point: `pip` is essential for managing external libraries.\n\nExample:\n```\npip install requests\n```"
    },
    {
      "question": "How do you install a package using pip?",
      "answer": "You use the `pip install` command followed by the package name to install a package.\n\nKey Point: Installing packages simplifies project setup.\n\nExample:\n```\npip install numpy\n```"
    },
    {
      "question": "How do you uninstall a package using pip?",
      "answer": "You use the `pip uninstall` command followed by the package name to uninstall a package.\n\nKey Point: Uninstalling packages frees up dependencies.\n\nExample:\n```\npip uninstall numpy\n```"
    },
    {
      "question": "How do you list all installed packages using pip?",
      "answer": "You can list all installed packages by using the `pip list` command.\n\nKey Point: `pip list` helps track installed packages.\n\nExample:\n```\npip list\n```"
    },
    {
      "question": "How do you upgrade an existing package using pip?",
      "answer": "You use the `pip install --upgrade` command followed by the package name to upgrade an existing package.\n\nKey Point: Keep packages updated with `--upgrade`.\n\nExample:\n```\npip install --upgrade numpy\n```"
    },
    {
      "question": "What is a virtual environment in Python?",
      "answer": "A virtual environment is an isolated environment that allows you to manage dependencies for different Python projects without conflicts. Each virtual environment has its own installation of Python and its own packages."
    },
    {
      "question": "How do you create a virtual environment in Python?",
      "answer": "You can create a virtual environment using the `venv` module or the `virtualenv` tool.\n\nKey Point: Virtual environments isolate project dependencies.\n\nExample:\n```\npython -m venv myenv\n```"
    },
    {
      "question": "How do you activate a virtual environment?",
      "answer": "The method to activate a virtual environment depends on your operating system.\nFor Windows:\n```\nmyenv\\Scripts\\activate\n```\nFor macOS/Linux:\n```\nsource myenv/bin/activate\n```"
    },
    {
      "question": "How do you deactivate a virtual environment?",
      "answer": "You can deactivate a virtual environment by simply running the `deactivate` command.\n\nKey Point: `deactivate` exits the virtual environment.\n\nExample:\n```\ndeactivate\n```"
    },
    {
      "question": "Why would you use a virtual environment?",
      "answer": "Virtual environments allow you to isolate dependencies for different projects, preventing package conflicts, and ensuring that each project has its own specific versions of libraries and packages."
    },
    {
      "question": "How do you install packages inside a virtual environment?",
      "answer": "Once a virtual environment is activated, you can install packages using `pip` as usual, and they will be installed only within the virtual environment.\n\nKey Point: `pip` installs within the activated virtual environment.\n\nExample:\n```\npip install requests\n```"
    },
    {
      "question": "How do you check the Python version used in a virtual environment?",
      "answer": "You can check the Python version by running the `python --version` command inside the activated virtual environment.\n\nKey Point: Ensure correct Python version with `--version`.\n\nExample:\n```\npython --version\n```"
    },
    {
      "question": "How do you save a list of installed packages in a virtual environment to a requirements file?",
      "answer": "You can use the `pip freeze` command to generate a list of installed packages and save it to a requirements.txt file.\n\nKey Point: Save package lists for replication.\n\nExample:\n```\npip freeze > requirements.txt\n```"
    },
    {
      "question": "How do you install packages from a requirements.txt file?",
      "answer": "You can install all the packages listed in a requirements.txt file using the `pip install -r` command.\n\nKey Point: Install project dependencies via `requirements.txt`.\n\nExample:\n```\npip install -r requirements.txt\n```"
    },
    {
      "question": "What is the purpose of the sys module in Python?",
      "answer": "The `sys` module provides access to some system-specific parameters and functions, such as reading command-line arguments or exiting a program."
    },
    {
      "question": "How do you import a specific function or variable from a module?",
      "answer": "You use the `from` keyword followed by the module name and the specific function or variable you want to import.\n\nKey Point: Selectively import items with `from`.\n\nExample:\n```\nfrom math import pi\nprint(pi)\n```"
    },
    {
      "question": "Can you import a module from a different directory?",
      "answer": "Yes, you can import a module from a different directory by modifying the `sys.path` or by creating a package structure with the appropriate `__init__.py` files."
    },
    {
      "question": "How do you check if a module is already installed?",
      "answer": "You can check if a module is installed by using `pip show` followed by the module name.\n\nKey Point: `pip show` provides installation details.\n\nExample:\n```\npip show numpy\n```"
    },
    {
      "question": "What happens if you try to import a module that doesn’t exist?",
      "answer": "Python raises a `ModuleNotFoundError` if you try to import a module that is not installed or cannot be found."
    },
    {
      "question": "Can a package contain sub-packages?",
      "answer": "Yes, a package can contain sub-packages, which are directories inside the main package that also contain `__init__.py` files, organizing larger projects into hierarchies."
    },
    {
      "question": "What is the difference between import module and from module import *?",
      "answer": "`import module` imports the entire module, and you must reference items in the module with `module.item`. `from module import *` imports all items from the module directly into the current namespace, so you can use `item` without referencing the module name. However, `import *` is generally discouraged as it can lead to unclear code."
    }
  ],
  Chapter1_PythonBasicsMnemonics: [
    {
      "question": "Smart Monkeys Can Fly Planes",
      "answer": "S - Single-line Comment: Text after # for inline explanations\nM - Multi-line Comment/Docstring: Text in ''' ''' for longer explanations\nC - Concatenation: Joining strings with +\nF - F-String: Formatted string literals for easy variable insertion\nP - Print: Function to output text to console\n\n```\n# Comment\n'''Docstring'''\nfull_name = 'John' + ' Doe'\nage = 30\nprint(f'{full_name} is {age}')\n```"
    },
    {
      "question": "I Find Snakes By Ponds",
      "answer": "I - Integer: Whole number (e.g., 5)\nF - Float: Decimal number (e.g., 3.14)\nS - String: Text in quotes (e.g., 'hello')\nB - Boolean: True or False value\nP - Print: Display output function\n\n```\nx = 5\npi = 3.14\nname = 'Python'\nis_cool = True\nprint(x, pi, name, is_cool)\n```"
    },
    {
      "question": "Variables Are Really Necessary Tools",
      "answer": "V - Variable Assignment: Binding names to values\nA - Assign Variables: Creating or updating variables\nR - Reassigning: Changing a variable's value\nN - Naming Convention: Rules for clear variable names\nT - Type-Sensitive: Case matters in variable names\n\n```\nx = 10\nx = 'hello'  # Reassignment\nuser_name = 'Alice'\nPRICE = 19.99  # Constants often use uppercase\n```"
    },
    {
      "question": "I Find Smooth Prints",
      "answer": "I - Integer Conversion: Convert to whole number\nF - Float Conversion: Convert to decimal number\nS - String Conversion: Convert to text\nP - Print: Output to console\n\n```\nage = int('25')\nheight = float('1.75')\nyear = str(2023)\nprint(f'Age: {age}, Height: {height}m, Year: {year}')\n```"
    },
    {
      "question": "Lists Allow Managing Simple Lists",
      "answer": "L - List Creation: Ordered, mutable collections\nA - Access Elements: Retrieve items by index\nM - Modifying Lists: Change, add, or remove items\nS - Slicing Lists: Extract portions of lists\nL - List Comprehensions: Concise list creation\n\n```\nnumbers = [1, 2, 3, 4, 5]\nprint(numbers[0])  # Access\nnumbers.append(6)  # Modify\nprint(numbers[1:4])  # Slice\nsquares = [x**2 for x in range(5)]  # Comprehension\n```"
    },
    {
      "question": "Tuples Can Always Unpack Anywhere",
      "answer": "T - Tuple Creation: Ordered, immutable collections\nC - Cannot Modify: Unchangeable after creation\nA - Accessing Elements: Retrieve items by index\nU - Unpacking: Assign tuple elements to variables\nA - Advantages: Efficient for fixed data\n\n```\npoint = (3, 4)\nprint(point[0])  # Access\nx, y = point  # Unpack\ncoordinates = (*point, 5)  # Create new tuple\n```"
    },
    {
      "question": "Sets Allow Removing Or Sets",
      "answer": "S - Set Creation: Unordered collections of unique elements\nA - Adding Elements: Insert new unique items\nR - Removing Elements: Delete items from the set\nO - Operations: Perform union, intersection, difference\nS - Set Unique Elements: Automatically eliminate duplicates\n\n```\nfruits = {'apple', 'banana', 'cherry'}\nfruits.add('date')\nfruits.remove('banana')\nprint(fruits | {'grape', 'apple'})  # Union\n```"
    },
    {
      "question": "Dictionaries Are Mapping Unique Keys",
      "answer": "D - Dictionary Creation: Key-value pair collections\nA - Accessing Values: Retrieve values by keys\nM - Modifying Dictionaries: Add, change, or remove pairs\nU - Using del and pop(): Remove key-value pairs\nK - Key Methods: Access keys, values, and items\n\n```\nperson = {'name': 'John', 'age': 30}\nprint(person['name'])\nperson['job'] = 'Engineer'\ndel person['age']\nprint(person.keys())\n```"
    },
    {
      "question": "If Implements Fancy Execution",
      "answer": "I - If Statement: Execute code conditionally\nE - Else Statement: Alternative execution path\nF - Elif Statement: Additional conditions\nE - Execution: Control flow based on conditions\n\n```\nx = 10\nif x > 5:\n    print('Greater than 5')\nelif x < 5:\n    print('Less than 5')\nelse:\n    print('Equal to 5')\n```"
    },
    {
      "question": "For Loops Facilitate Iteration",
      "answer": "F - For Loop Syntax: Iterate over sequences\nL - Looping with range(): Generate number sequences\nF - For Loops on Strings: Iterate over characters\nI - Iteration: Repeat code for each item\n\n```\nfor i in range(5):\n    print(i)\nfor char in 'Python':\n    print(char)\n```"
    },
    {
      "question": "While Waits Warily",
      "answer": "W - While Loop Syntax: Execute while condition is true\nW - Watch for Infinite Loops: Ensure termination\nW - While with Else: Execute when loop condition is false\nW - Warily: Use caution to avoid unintended behavior\n\n```\ncount = 0\nwhile count < 5:\n    print(count)\n    count += 1\nelse:\n    print('Loop completed')\n```"
    },
    {
      "question": "Break Continues Passing Control",
      "answer": "B - Break: Exit the loop immediately\nC - Continue: Skip to the next iteration\nP - Pass: Do nothing, placeholder statement\nC - Control: Manage loop execution flow\n\n```\nfor i in range(10):\n    if i == 5:\n        break\n    if i % 2 == 0:\n        continue\n    print(i)\n```"
    },
    {
      "question": "Cool Owls Sit Flapping Merrily",
      "answer": "C - Class: Blueprint for creating objects\nO - Objects: Instances of a class\nS - State: Attributes that store object data\nF - Functions: Methods that define object behavior\nM - Messages: Objects interact through method calls\n\n```\nclass Bird:\n    def __init__(self, species):\n        self.species = species\n    def fly(self):\n        return f'{self.species} is flying'\n\nowl = Bird('Owl')\nprint(owl.fly())\n```"
    },
    {
      "question": "Eggshells Protect Inner Contents",
      "answer": "E - Encapsulation: Bundling data and methods\nP - Private: Restrict access to internal details\nI - Internal details: Hide implementation specifics\nC - Control: Manage access through methods\n\n```\nclass Egg:\n    def __init__(self):\n        self.__content = 'yolk'\n    def crack(self):\n        return self.__content\n\negg = Egg()\nprint(egg.crack())\n```"
    },
    {
      "question": "Iggy Picks Apples from Trees",
      "answer": "I - Inheritance: Derive attributes and methods from another class\nP - Parent: Base class that shares properties\nA - Access: Child classes use parent's attributes and methods\nT - Tree: Hierarchy of classes\n\n```\nclass Fruit:\n    def __init__(self, name):\n        self.name = name\n\nclass Apple(Fruit):\n    def taste(self):\n        return f'{self.name} is sweet'\n\nfuji = Apple('Fuji')\nprint(fuji.taste())\n```"
    },
    {
      "question": "Parrots Mimic Funny Words",
      "answer": "P - Polymorphism: Same interface, different implementations\nM - Mimic: Objects of different types respond to same method\nF - Forms: Various classes implement same method differently\nW - Words: Method names shared across classes\n\n```\nclass Dog:\n    def speak(self):\n        return 'Woof!'\n\nclass Cat:\n    def speak(self):\n        return 'Meow!'\n\nanimals = [Dog(), Cat()]\nfor animal in animals:\n    print(animal.speak())\n```"
    },
    {
      "question": "Aliens Cover Dark Secrets",
      "answer": "A - Abstraction: Simplify complex systems\nC - Cover: Hide unnecessary details\nD - Details: Focus on essential features\nS - Secrets: Encapsulate implementation details\n\n```\nfrom abc import ABC, abstractmethod\n\nclass Shape(ABC):\n    @abstractmethod\n    def area(self):\n        pass\n\nclass Circle(Shape):\n    def __init__(self, radius):\n        self.radius = radius\n    def area(self):\n        return 3.14 * self.radius ** 2\n\ncircle = Circle(5)\nprint(circle.area())\n```"
    },
    {
      "question": "Apples Shine More During Pleasant Sunsets",
      "answer": "A: Addition (+) - Combine two numbers\nS: Subtraction (-) - Find the difference\nM: Multiplication (*) - Repeat addition\nD: Division (/) - Split into equal parts\nP: Parentheses () - Group operations\nS: Solve expressions - Calculate final result\n\n```\nresult = (10 + 5) * 2 / 3 - 1\nprint(result)  # Output: 9.0\n```"
    },
    {
      "question": "Friendly Dogs Resolve Conflicts Quickly",
      "answer": "F: Floor Division (//) - Divide and round down\nD: Divide - Standard division\nR: Remainder (%) - Get leftover after division\nC: Calculate - Perform the operation\nQ: Quotient - Result of division\n\n```\nprint(17 // 5)  # Floor division: 3\nprint(17 / 5)   # Standard division: 3.4\nprint(17 % 5)   # Remainder: 2\n```"
    },
    {
      "question": "Energetic Rabbits Race Nobly Skyward",
      "answer": "E: Exponent (**) - Raise to a power\nR: Result - Outcome of exponentiation\nN: Number - Base in exponentiation\nS: Square - Special case of exponent 2\n\n```\nprint(2 ** 3)  # 2 to the power of 3: 8\nprint(5 ** 2)  # 5 squared: 25\n```"
    },
    {
      "question": "Unique Scorecards Let Results Shine",
      "answer": "U: Underscore (_) - Stores last expression result\nS: Special variable - Used in interactive mode\nL: Last result - Access previous calculation\nR: Reuse - Utilize previous output\nS: Simplify - Make complex calculations easier\n\n```\n# In Python interactive mode:\n2 + 3\n# Output: 5\nprint(_)  # Prints 5\n```"
    },
    {
      "question": "Clever Navigators Journey Into Mathematics",
      "answer": "C: Complex numbers - Numbers with real and imaginary parts\nN: Notation - Use 'j' for imaginary unit\nJ: Join - Combine real and imaginary parts\nI: Imaginary - Non-real component\nM: Manipulate - Perform operations on complex numbers\n\n```\nz = 3 + 4j\nprint(z.real)  # Real part: 3.0\nprint(z.imag)  # Imaginary part: 4.0\n```"
    },
    {
      "question": "Strings Cleverly Weave Narratives Effortlessly",
      "answer": "S: String - Sequence of characters\nC: Concatenate - Join strings\nW: Wrapping - Enclose in quotes\nN: Newline - Line break in strings\nE: Escape characters - Special string characters\n\n```\ntext = 'Hello' + ' World'\nmulti_line = '''This is a\nmulti-line string'''\npath = r'C:\\Users\\Name'  # Raw string\n```"
    },
    {
      "question": "Remarkable Creatures Navigate Swiftly",
      "answer": "R: Range - Generate sequence of numbers\nC: Create - Produce a series of values\nN: Numbers - Integers in sequence\nS: Start, Stop, Step - Parameters for range\n\n```\nfor i in range(0, 10, 2):\n    print(i)  # Prints even numbers 0 to 8\n```"
    },
    {
      "question": "Peaceful Tigers Wait Awkwardly",
      "answer": "P: Pass - No-operation placeholder\nT: Temporary - Used for future code\nW: Wait - Do nothing and continue\nA: Avoid errors - Prevent syntax errors in empty blocks\n\n```\ndef function_to_be_implemented():\n    pass\n\nwhile False:\n    pass  # Infinite loop that does nothing\n```"
    },
    {
      "question": "Mischievous Cats Take Swiftly",
      "answer": "M: Match - Pattern matching statement\nC: Cases - Different patterns to match\nT: Test - Check value against patterns\nS: Switch - Similar to switch in other languages\n\n```\ndef describe_type(item):\n    match item:\n        case int():\n            return \"It's an integer\"\n        case str():\n            return \"It's a string\"\n        case _:\n            return \"It's something else\"\n\nprint(describe_type(5))  # Output: It's an integer\n```"
    },
    {
      "question": "Diligent Foxes Train Resourcefully",
      "answer": "D: Define - Create a function\nF: Function - Reusable block of code\nT: Take parameters - Accept inputs\nR: Return - Provide output\n\n```\ndef greet(name):\n    return f'Hello, {name}!'\n\nprint(greet('Alice'))  # Output: Hello, Alice!\n```"
    },
    {
      "question": "Agile Kittens Adapt Uniquely",
      "answer": "A: Arguments - Inputs to functions\nK: Keyword arguments - Named parameters\nA: Arbitrary arguments (*args) - Variable number of arguments\nU: Unpacking - Distribute iterable into arguments\n\n```\ndef func(a, b, *args, **kwargs):\n    print(a, b, args, kwargs)\n\nfunc(1, 2, 3, 4, x=5, y=6)\n# Output: 1 2 (3, 4) {'x': 5, 'y': 6}\n```"
    },
    {
      "question": "Stylish Elephants Look Really Classy",
      "answer": "S: Style - Coding conventions\nE: Elegant - Clean and readable code\nL: Length - Appropriate line length\nR: Readable - Easy to understand\nC: Consistent - Uniform formatting\n\n```\n# Following PEP 8 guidelines\ndef calculate_area(length, width):\n    \"\"\"Calculate the area of a rectangle.\"\"\"\n    return length * width\n\narea = calculate_area(5, 3)\nprint(f'The area is {area}')\n```"
    }

  ],

  "pythonBuiltinFunctions": [
    {
      "question": "What are the functions related to 'Abe Asks All Anxious Ants'?",
      "answer": "The functions are abs(), aiter(), all(), anext(), and any().\n\nKey Points:\n- abs() returns the absolute value of a number\n- aiter() returns an asynchronous iterator\n- all() checks if all elements in an iterable are true\n- anext() retrieves the next item from an asynchronous iterator\n- any() checks if any element in an iterable is true\n\nExamples:\n```python\nprint(abs(-5))  # Output: 5\nasync def async_gen():\n    yield 1\n    yield 2\nasync def main():\n    aiter_obj = aiter(async_gen())\n    print(await anext(aiter_obj))  # Output: 1\nimport asyncio\nasyncio.run(main())\nprint(all([True, True, False]))  # Output: False\nprint(any([False, True, False]))  # Output: True\n```"
    },
    {
      "question": "What are the functions related to 'Astronauts Build Bright Bytearrays'?",
      "answer": "The functions are ascii(), bin(), bool(), breakpoint(), and bytearray().\n\nKey Points:\n- ascii() returns a string with escaped non-ASCII characters\n- bin() converts an integer to a binary string\n- bool() returns a Boolean value\n- breakpoint() drops into the debugger\n- bytearray() returns a new array of bytes\n\nExamples:\n```python\nprint(ascii('Python©'))  # Output: 'Python\\u00a9'\nprint(bin(10))  # Output: '0b1010'\nprint(bool(0))  # Output: False\nbreakpoint()  # Enters the debugger (in interactive environments)\nprint(bytearray('hello', 'utf-8'))  # Output: bytearray(b'hello')\n```"
    },
    {
      "question": "What are the functions related to 'Brilliant Coders Catch Class Compilations'?",
      "answer": "The functions are bytes(), callable(), chr(), classmethod(), and compile().\n\nKey Points:\n- bytes() returns a new 'bytes' object\n- callable() checks if an object appears callable\n- chr() returns a character from a Unicode code point\n- classmethod() converts a method into a class method\n- compile() compiles source into a code or AST object\n\nExamples:\n```python\nprint(bytes('hello', 'utf-8'))  # Output: b'hello'\nprint(callable(print))  # Output: True\nprint(chr(97))  # Output: 'a'\n\nclass MyClass:\n    @classmethod\n    def my_class_method(cls):\n        return 'class method'\nprint(MyClass.my_class_method())  # Output: 'class method'\n\ncode_obj = compile('a = 5', '<string>', 'exec')\nexec(code_obj)\nprint(a)  # Output: 5\n```"
    },
    {
      "question": "What are the functions related to 'Complex Dragons Destroy Diverse Dictionaries'?",
      "answer": "The functions are complex(), delattr(), dict(), dir(), and divmod().\n\nKey Points:\n- complex() returns a complex number\n- delattr() deletes a named attribute from an object\n- dict() creates a new dictionary\n- dir() returns a list of valid attributes for an object\n- divmod() returns quotient and remainder of division\n\nExamples:\n```python\nprint(complex(1, 2))  # Output: (1+2j)\nclass MyClass:\n    def __init__(self):\n        self.x = 10\nmy_obj = MyClass()\ndelattr(my_obj, 'x')\nprint(hasattr(my_obj, 'x'))  # Output: False\nprint(dict(a=1, b=2))  # Output: {'a': 1, 'b': 2}\nprint(dir([]))  # Output: ['append', 'clear', ...]\nprint(divmod(7, 2))  # Output: (3, 1)\n```"
    },
    {
      "question": "What are the functions related to 'Each Elephant Enjoys Filtering Floats'?",
      "answer": "The functions are enumerate(), eval(), exec(), filter(), and float().\n\nKey Points:\n- enumerate() returns an enumerate object\n- eval() evaluates a Python expression\n- exec() executes a string or code object\n- filter() filters elements in an iterable\n- float() converts to a floating-point number\n\nExamples:\n```python\nprint(list(enumerate(['a', 'b', 'c'])))  # Output: [(0, 'a'), (1, 'b'), (2, 'c')]\nprint(eval('2 + 2'))  # Output: 4\nexec('a = 5')\nprint(a)  # Output: 5\nprint(list(filter(lambda x: x > 2, [1, 2, 3, 4])))  # Output: [3, 4]\nprint(float('3.14'))  # Output: 3.14\n```"
    },
    {
      "question": "What are the functions related to 'Foxes Frequently Get Global Hats'?",
      "answer": "The functions are format(), frozenset(), getattr(), globals(), and hasattr().\n\nKey Points:\n- format() returns a formatted representation of a value\n- frozenset() returns a new frozenset object\n- getattr() returns the value of a named attribute\n- globals() returns the current global symbol table\n- hasattr() checks if an object has a specific attribute\n\nExamples:\n```python\nprint(format(1234, ','))  # Output: '1,234'\nprint(frozenset([1, 2, 3]))  # Output: frozenset({1, 2, 3})\nprint(getattr([], 'append'))  # Output: <built-in method append of list object at ...>\nprint(globals())  # Output: {...}\nprint(hasattr([], 'append'))  # Output: True\n```"
    },
    {
      "question": "What are the functions related to 'Harry Helps Heroes Identify Input'?",
      "answer": "The functions are hash(), help(), hex(), id(), and input().\n\nKey Points:\n- hash() returns the hash value of an object\n- help() invokes the built-in help system\n- hex() converts an integer to a hexadecimal string\n- id() returns the identity of an object\n- input() reads a string from user input\n\nExamples:\n```python\nprint(hash('apple'))  # Output: 8603030478340088834 (may vary)\nhelp(print)  # Displays documentation for print()\nprint(hex(255))  # Output: '0xff'\nprint(id({}))  # Output: 140737488355328 (may vary)\nname = input('Enter your name: ')\nprint('Hello, ' + name)\n```"
    },
    {
      "question": "What are the functions related to 'Interesting Iguanas Inspect Iterated Length'?",
      "answer": "The functions are int(), isinstance(), issubclass(), iter(), and len().\n\nKey Points:\n- int() converts a number or string to an integer\n- isinstance() checks if an object is an instance of a class\n- issubclass() checks if a class is a subclass of another class\n- iter() returns an iterator object\n- len() returns the length of an object\n\nExamples:\n```python\nprint(int('10'))  # Output: 10\nprint(isinstance(5, int))  # Output: True\nprint(issubclass(bool, int))  # Output: True\nprint(iter([1, 2, 3]))  # Output: <list_iterator object at ...>\nprint(len([1, 2, 3]))  # Output: 3\n```"
    },
    {
      "question": "What are the functions related to 'Lists Lend Mighty Max Memory'?",
      "answer": "The functions are list(), locals(), map(), max(), and memoryview().\n\nKey Points:\n- list() creates a list from an iterable\n- locals() returns a dictionary of the current local symbol table\n- map() applies a function to every item of an iterable\n- max() returns the largest item in an iterable\n- memoryview() returns a memory view object\n\nExamples:\n```python\nprint(list('abc'))  # Output: ['a', 'b', 'c']\nprint(locals())  # Output: {...}\nprint(list(map(str.upper, ['a', 'b', 'c'])))  # Output: ['A', 'B', 'C']\nprint(max([1, 2, 3]))  # Output: 3\nprint(memoryview(b'abc'))  # Output: <memory at ...>\n```"
    },
    {
      "question": "What are the functions related to 'Mighty Knights Observe Obscure Octopi'?",
      "answer": "The functions are min(), next(), object(), oct(), and open().\n\nKey Points:\n- min() returns the smallest item in an iterable\n- next() retrieves the next item from an iterator\n- object() returns a new featureless object\n- oct() converts an integer to an octal string\n- open() opens a file and returns a file object\n\nExamples:\n```python\nprint(min([1, 2, 3]))  # Output: 1\nprint(next(iter([1, 2, 3])))  # Output: 1\nprint(object())  # Output: <object object at ...>\nprint(oct(8))  # Output: '0o10'\nwith open('file.txt', 'r') as f:\n    print(f.read())  # Reads and prints file content\n```"
    },
    {
      "question": "What are the functions related to 'Octopuses Powerfully Print Precious Ranges'?",
      "answer": "The functions are ord(), pow(), print(), property(), and range().\n\nKey Points:\n- ord() returns the Unicode code point for a character\n- pow() returns base raised to the power of exp\n- print() outputs to the console\n- property() returns a property attribute\n- range() returns an immutable sequence of numbers\n\nExamples:\n```python\nprint(ord('a'))  # Output: 97\nprint(pow(2, 3))  # Output: 8\nprint('Hello, World!')  # Output: Hello, World!\n\nclass C:\n    @property\n    def x(self):\n        return 'property value'\nprint(C().x)  # Output: 'property value'\nprint(list(range(5)))  # Output: [0, 1, 2, 3, 4]\n```"
    },
    {
      "question": "What are the functions related to 'Rabbits Rarely Round Silent Steps'?",
      "answer": "The functions are repr(), reversed(), round(), set(), and setattr().\n\nKey Points:\n- repr() returns a printable representation of an object\n- reversed() returns a reverse iterator\n- round() rounds a number to a given precision\n- set() creates a set object\n- setattr() sets the value of an object's attribute\n\nExamples:\n```python\nprint(repr('Hello'))  # Output: \"'Hello'\"\nprint(list(reversed([1, 2, 3])))  # Output: [3, 2, 1]\nprint(round(3.14159, 2))  # Output: 3.14\nprint(set([1, 2, 2, 3]))  # Output: {1, 2, 3}\nclass MyClass:\n    pass\nobj = MyClass()\nsetattr(obj, 'x', 5)\nprint(obj.x)  # Output: 5\n```"
    },
    {
      "question": "What are the functions related to 'Slice Some Sticky Stringy Sushi'?",
      "answer": "The functions are slice(), sorted(), staticmethod(), str(), and sum().\n\nKey Points:\n- slice() returns a slice object\n- sorted() returns a new sorted list\n- staticmethod() transforms a method into a static method\n- str() returns a string version of an object\n- sum() sums the items of an iterable\n\nExamples:\n```python\nprint(slice(5))  # Output: slice(None, 5, None)\nprint(sorted([3, 1, 2]))  # Output: [1, 2, 3]\n\nclass C:\n    @staticmethod\n    def f():\n        return 'static method'\nprint(C.f())  # Output: 'static method'\nprint(str(123))  # Output: '123'\nprint(sum([1, 2, 3]))  # Output: 6\n```"
    },
    {
      "question": "What are the functions related to 'Superheroes Travel To Very Zany Zones'?",
      "answer": "The functions are super(), tuple(), type(), vars(), and zip().\n\nKey Points:\n- super() returns a proxy object for delegation to a parent/sibling class\n- tuple() creates a tuple\n- type() returns the type of an object or creates a new type\n- vars() returns the __dict__ attribute of an object\n- zip() creates an iterator of tuples\n\nExamples:\n```python\nclass B:\n    def f(self): print('B')\nclass C(B):\n    def f(self):\n        super().f()\n        print('C')\nC().f()  # Output: B, then C\nprint(tuple([1, 2, 3]))  # Output: (1, 2, 3)\nprint(type(5))  # Output: <class 'int'>\nprint(vars())  # Output: {...}\nprint(list(zip([1, 2], ['a', 'b'])))  # Output: [(1, 'a'), (2, 'b')]\n```"
    }
  ],

  pandasOperations: [
    {
      "question": "Daring Lions Melt Cheese Sandwiches",
      "answer": "D - DataFrame from Dictionary: Create a dataframe from a dictionary of lists\nL - Lists to DataFrame: Create a dataframe from lists of values\nM - Melt: Transform columns into rows\nC - Concatenate DataFrames: Combine dataframes by rows or columns\nS - Sort Values: Sort rows by values in a column\n\nExamples:\n```\n# DataFrame from Dictionary\ndf = pd.DataFrame({\"a\": [4, 5, 6], \"b\": [7, 8, 9], \"c\": [10, 11, 12]}, index=[1, 2, 3])\nprint(df)\n   a  b   c\n1  4  7  10\n2  5  8  11\n3  6  9  12\n\n# Lists to DataFrame\ndf = pd.DataFrame([[4, 7, 10], [5, 8, 11], [6, 9, 12]], index=[1, 2, 3], columns=['a', 'b', 'c'])\nprint(df)\n   a  b   c\n1  4  7  10\n2  5  8  11\n3  6  9  12\n\n# Melt\nmelted_df = pd.melt(df)\nprint(melted_df)\n  variable  value\n0        a      4\n1        a      5\n2        a      6\n3        b      7\n4        b      8\n5        b      9\n6        c     10\n7        c     11\n8        c     12\n\n# Concatenate DataFrames\ndf1 = pd.DataFrame({'A': ['A0', 'A1'], 'B': ['B0', 'B1']})\ndf2 = pd.DataFrame({'A': ['A2', 'A3'], 'B': ['B2', 'B3']})\nresult = pd.concat([df1, df2])\nprint(result)\n    A   B\n0  A0  B0\n1  A1  B1\n0  A2  B2\n1  A3  B3\n\n# Sort Values\ndf = pd.DataFrame({'col1': [2, 1, 3], 'col2': ['b', 'c', 'a']})\nsorted_df = df.sort_values('col1')\nprint(sorted_df)\n   col1 col2\n1     1    c\n0     2    b\n2     3    a\n```"
    },
    {
      "question": "Silly Rabbits Flip Dimes Fast",
      "answer": "S - Select Columns: Choose specific columns from the dataframe\nR - Rows by Index: Select rows based on index positions\nF - Filter Rows: Filter rows based on a condition\nD - Drop NA: Remove rows with missing data\nF - Fill NA: Fill missing values with a specified value\n\nExamples:\n```\n# Create a sample DataFrame\ndf = pd.DataFrame({'A': [1, 2, 3], 'B': [4, 5, 6], 'C': [7, 8, 9]})\n\n# Select Columns\nprint(df[['A', 'B']])\n   A  B\n0  1  4\n1  2  5\n2  3  6\n\n# Rows by Index\nprint(df.iloc[1:3])\n   A  B  C\n1  2  5  8\n2  3  6  9\n\n# Filter Rows\nprint(df[df['A'] > 1])\n   A  B  C\n1  2  5  8\n2  3  6  9\n\n# Drop NA\ndf_with_na = pd.DataFrame({'A': [1, 2, np.nan], 'B': [4, np.nan, 6], 'C': [7, 8, 9]})\nprint(df_with_na.dropna())\n     A    B  C\n0  1.0  4.0  7\n\n# Fill NA\nprint(df_with_na.fillna(0))\n     A    B  C\n0  1.0  4.0  7\n1  2.0  0.0  8\n2  0.0  6.0  9\n```"
    },
    {
      "question": "Descriptive Sums Mean, Reading Works",
      "answer": "D - Descriptive Statistics: Provide summary statistics for each column\nS - Sum: Calculate the sum of values in a column or dataframe\nM - Mean: Calculate the average of a column's values\nR - Read CSV: Read data from a CSV file\nW - Write CSV: Write dataframe data to a CSV file\n\nExamples:\n```\n# Create a sample DataFrame\ndf = pd.DataFrame({'A': [1, 2, 3, 4], 'B': [5, 6, 7, 8], 'C': [9, 10, 11, 12]})\n\n# Descriptive Statistics\nprint(df.describe())\n              A         B          C\ncount  4.000000  4.000000   4.000000\nmean   2.500000  6.500000  10.500000\nstd    1.290994  1.290994   1.290994\nmin    1.000000  5.000000   9.000000\n25%    1.750000  5.750000   9.750000\n50%    2.500000  6.500000  10.500000\n75%    3.250000  7.250000  11.250000\nmax    4.000000  8.000000  12.000000\n\n# Sum\nprint(df.sum())\nA    10\nB    26\nC    42\ndtype: int64\n\n# Mean\nprint(df.mean())\nA     2.5\nB     6.5\nC    10.5\ndtype: float64\n\n# Read CSV (assuming 'data.csv' exists)\n# data.csv content:\n# A,B,C\n# 1,5,9\n# 2,6,10\n# 3,7,11\n# 4,8,12\ndf = pd.read_csv('data.csv')\nprint(df)\n   A  B   C\n0  1  5   9\n1  2  6  10\n2  3  7  11\n3  4  8  12\n\n# Write CSV\ndf.to_csv('output.csv', index=False)\n# This will create a new file 'output.csv' with the same content as above\n```"
    },
    {
      "question": "Many Bears Reset Slice Magic",
      "answer": "M - MultiIndex: Set multiple columns as the index\nR - Reset Index: Reset the index of the dataframe\nS - Slicing MultiIndex: Slice data based on multi-level index\nM - Merge DataFrames: Merge dataframes based on a key\nS - Set-Like Operations: Merge dataframes using union or intersection\n\nExamples:\n```\n# Create a sample DataFrame\ndf = pd.DataFrame({'A': [1, 2, 3, 4], 'B': [5, 6, 7, 8], 'C': [9, 10, 11, 12], 'D': ['a', 'b', 'a', 'b']})\n\n# MultiIndex\ndf_multi = df.set_index(['A', 'D'])\nprint(df_multi)\n       B   C\nA D        \n1 a   5   9\n2 b   6  10\n3 a   7  11\n4 b   8  12\n\n# Reset Index\ndf_reset = df_multi.reset_index()\nprint(df_reset)\n   A  D  B   C\n0  1  a  5   9\n1  2  b  6  10\n2  3  a  7  11\n3  4  b  8  12\n\n# Slicing MultiIndex\nprint(df_multi.loc[(2, 'b')])\nB     6\nC    10\nName: (2, b), dtype: int64\n\n# Merge DataFrames\ndf1 = pd.DataFrame({'key': ['K0', 'K1', 'K2'], 'A': ['A0', 'A1', 'A2']})\ndf2 = pd.DataFrame({'key': ['K0', 'K1', 'K2'], 'B': ['B0', 'B1', 'B2']})\nmerged = pd.merge(df1, df2, on='key')\nprint(merged)\n  key   A   B\n0  K0  A0  B0\n1  K1  A1  B1\n2  K2  A2  B2\n\n# Set-Like Operations\ndf1 = pd.DataFrame({'A': [1, 2], 'B': [3, 4]})\ndf2 = pd.DataFrame({'A': [1, 3], 'B': [3, 5]})\nunion = pd.merge(df1, df2, how='outer')\nprint(union)\n   A    B\n0  1  3.0\n1  2  4.0\n2  3  5.0\n```"
    },
    {
      "question": "Groups Are Rolling Everywhere Sometimes",
      "answer": "G - Group By Column: Group the data by a specific column\nA - Aggregate Functions: Perform aggregation operations like sum or mean on groups\nR - Rolling Window: Apply rolling window calculations like mean\nE - Expanding Window: Apply cumulative calculations like sum over expanding windows\nS - Resample Data: Resample time series data over a specified period\n\nExamples:\n```\n# Create a sample DataFrame\ndf = pd.DataFrame({'A': ['foo', 'bar', 'foo', 'bar', 'foo', 'bar'],\n                   'B': [1, 2, 3, 4, 5, 6],\n                   'C': [2.0, 5., 8., 1., 2., 9.]})\n\n# Group By Column\ngroup = df.groupby('A')\nprint(group.sum())\n     B     C\nA            \nbar  12  15.0\nfoo   9  12.0\n\n# Aggregate Functions\nprint(group.agg({'B': 'sum', 'C': 'mean'}))\n      B    C\nA            \nbar  12  5.0\nfoo   9  4.0\n\n# Create a time series DataFrame\ndf_ts = pd.DataFrame({'A': range(10)}, \n                     index=pd.date_range('2023-01-01', periods=10, freq='D'))\n\n# Rolling Window\nprint(df_ts.rolling(window=3).mean())\n              A\n2023-01-01  NaN\n2023-01-02  NaN\n2023-01-03  1.0\n2023-01-04  2.0\n2023-01-05  3.0\n2023-01-06  4.0\n2023-01-07  5.0\n2023-01-08  6.0\n2023-01-09  7.0\n2023-01-10  8.0\n\n# Expanding Window\nprint(df_ts.expanding().sum())\n               A\n2023-01-01   0.0\n2023-01-02   1.0\n2023-01-03   3.0\n2023-01-04   6.0\n2023-01-05  10.0\n2023-01-06  15.0\n2023-01-07  21.0\n2023-01-08  28.0\n2023-01-09  36.0\n2023-01-10  45.0\n\n# Resample Data\nprint(df_ts.resample('3D').mean())\n              A\n2023-01-01  1.0\n2023-01-04  4.0\n2023-01-07  7.0\n2023-01-10  9.0\n```"
    },
    {
      "question": "Strings Combine With Strong Dataframes",
      "answer": "S - String Methods: Apply string operations to dataframe columns\nC - Convert to Categorical: Convert a column to categorical data type\nW - Binning: Bin continuous data into intervals\nS - Scatter Plot: Create a scatter plot of two columns\nD - Plot Histogram: Create a histogram for dataframe columns\n\nExamples:\n```\n# Create a sample DataFrame\ndf = pd.DataFrame({'text': ['hello', 'world', 'python'],\n                   'value': [10, 20, 30]})\n\n# String Methods\nprint(df['text'].str.upper())\n0    HELLO\n1    WORLD\n2    PYTHON\nName: text, dtype: object\n\n# Convert to Categorical\ndf['text'] = df['text'].astype('category')\nprint(df['text'].dtype)\ncategory\n\n# Binning\ndf['bins'] = pd.cut(df['value'], bins=3)\nprint(df)\n     text  value      bins\n0  hello     10  (9.9, 20.0]\n1  world     20  (19.9, 30.0]\n2  python    30  (19.9, 30.0]\n\n# Scatter Plot (this would generate a plot)\ndf.plot.scatter(x='value', y='value')\n\n# Histogram (this would generate a plot)\ndf['value'].plot.hist()\n```"
    },
    {
      "question": "Optimize Pandas Columns, Evaluate Quickly",
      "answer": "O - Optimize Memory: Optimize memory usage by changing data types\nP - Pandas Eval: Perform fast operations with eval\nC - Apply Aggregations: Apply multiple aggregation functions to groups\nE - Apply Transformations: Apply transformations to group data\nQ - Detect Duplicates: Find and remove duplicate rows\n\nExamples:\n```\n# Create a sample DataFrame\ndf = pd.DataFrame({'A': [1, 2, 3, 3],\n                   'B': [4.0, 5.0, 6.0, 6.0],\n                   'C': ['a', 'b', 'c', 'c']})\n\n# Optimize Memory\ndf['A'] = df['A'].astype('int8')\nprint(df.dtypes)\nA      int8\nB    float64\nC     object\ndtype: object\n\n# Pandas Eval\ndf.eval('D = A + B')\nprint(df)\n   A    B  C     D\n0  1  4.0  a   5.0\n1  2  5.0  b   7.0\n2  3  6.0  c   9.0\n3  3  6.0  c   9.0\n\n# Apply Aggregations\nprint(df.groupby('C').agg({'A': 'sum', 'B': 'mean'}))\n   A    B\nC          \na  1  4.0\nb  2  5.0\nc  6  6.0\n\n# Apply Transformations\ndf['A_mean'] = df.groupby('C')['A'].transform('mean')\nprint(df)\n   A    B  C     D  A_mean\n0  1  4.0  a   5.0     1.0\n1  2  5.0  b   7.0     2.0\n2  3  6.0  c   9.0     3.0\n3  3  6.0  c   9.0     3.0\n\n# Detect Duplicates\nprint(df.drop_duplicates())\n   A    B  C     D  A_mean\n0  1  4.0  a   5.0     1.0\n1  2  5.0  b   7.0     2.0\n2  3  6.0  c   9.0     3.0\n```"
    },
    {
      "question": "Pivot Time Cares Sparsely and Merges More",
      "answer": "P - Pivot Tables: Reshape data using pivot tables\nT - Time Series Analysis: Analyze and manipulate time series data\nC - Categorical Data Optimization: Convert to categorical type for memory efficiency\nS - Sparse Data Handling: Use sparse structures for large datasets\nM - Advanced Joins and Merges: Perform complex joins with multiple keys\n\nExamples:\n```\n# Create sample DataFrames\ndf = pd.DataFrame({'A': ['foo', 'foo', 'bar', 'bar'],\n                   'B': ['one', 'two', 'one', 'two'],\n                   'C': [1, 2, 3, 4],\n                   'D': pd.date_range('20230101', periods=4)})\ndf2 = pd.DataFrame({'key1': ['foo', 'bar'], 'key2': [1, 2], 'value': [5, 6]})\n\n# Pivot Tables\nprint(df.pivot_table(values='C', index='A', columns='B', aggfunc='sum'))\nB    one  two\nA            \nbar    3    4\nfoo    1    2\n\n# Time Series Analysis\ndf.set_index('D', inplace=True)\nprint(df.resample('2D').sum())\n            C\nD            \n2023-01-01  3\n2023-01-03  7\n\n# Categorical Data Optimization\ndf['A'] = df['A'].astype('category')\nprint(df['A'].dtype)\ncategory\n\n# Sparse Data Handling\nsparse_df = pd.DataFrame(pd.arrays.SparseArray([0, 0, 1, 1]))\nprint(sparse_df.dtypes)\n0    Sparse[int64, use_na=False]\ndtype: object\n\n# Advanced Joins and Merges\nresult = pd.merge(df.reset_index(), df2, left_on=['A', 'C'], right_on=['key1', 'key2'])\nprint(result)\n           D    A    B  C key1  key2  value\n0 2023-01-01  foo  one  1  foo     1      5\n1 2023-01-03  bar  one  3  bar     2      6\n```"
    },
    {
      "question": "Custom Windows Slice Many Dataframes",
      "answer": "C - Custom Aggregations: Apply custom functions during group operations\nW - Window Functions: Use rolling and expanding functions for time-based calculations\nS - Multi-level Indexing and Slicing: Use hierarchical indexing for complex manipulation\nM - Explode List-Like Columns: Transform list columns into separate rows\nA - Apply Functions: Apply functions across columns or rows\n\nExamples:\n```\n# Create a sample DataFrame\ndf = pd.DataFrame({'A': [1, 2, 3, 4, 5],\n                   'B': [10, 20, 30, 40, 50],\n                   'C': pd.date_range('20230101', periods=5),\n                   'D': [['a', 'b'], ['c'], ['d', 'e', 'f'], ['g'], ['h', 'i']]})\ndf.set_index('C', inplace=True)\n\n# Custom Aggregations\ndef custom_agg(x):\n    return x.max() - x.min()\n\nprint(df.groupby(df.index.day).agg(custom_agg))\n     A   B\nC          \n1   0   0\n2   1  10\n3   2  20\n4   3  30\n5   4  40\n\n# Window Functions\nprint(df['A'].rolling(window=3).mean())\nC\n2023-01-01         NaN\n2023-01-02         NaN\n2023-01-03    2.000000\n2023-01-04    3.000000\n2023-01-05    4.000000\nFreq: D, Name: A, dtype: float64\n\n# Multi-level Indexing and Slicing\ndf2 = df.copy()\ndf2['E'] = ['x', 'y', 'z', 'x', 'y']\ndf2.set_index(['E', df2.index], inplace=True)\nprint(df2.loc['x'])\n                A   B           D\nC                              \n2023-01-01    1  10     [a, b]\n2023-01-04    4  40        [g]\n\n# Explode List-Like Columns\nprint(df.explode('D'))\n             A   B           D\nC                            \n2023-01-01   1  10          a\n2023-01-01   1  10          b\n2023-01-02   2  20          c\n2023-01-03   3  30          d\n2023-01-03   3  30          e\n2023-01-03   3  30          f\n2023-01-04   4  40          g\n2023-01-05   5  50          h\n2023-01-05   5  50          i\n\n# Apply Functions\nprint(df.apply(lambda x: x.max() - x.min()))\nA      4\nB     40\nD    NaN\ndtype: float64\n```"
    },
    {
      "question": "Map Queries Pivot Categorical Samples",
      "answer": "M - Mapping and Replacing Values: Replace or map values using dictionaries\nQ - Query: Use query language to filter data\nP - Pivot: Reshape data with columns becoming index\nC - Categorical Data: Efficiently store and manipulate categorical data\nS - Sampling Data: Randomly sample rows from the dataframe\n\nExamples:\n```\n# Create a sample DataFrame\ndf = pd.DataFrame({'A': ['foo', 'bar', 'baz', 'foo', 'bar'],\n                   'B': [1, 2, 3, 4, 5],\n                   'C': [10, 20, 30, 40, 50]})\n\n# Mapping and Replacing Values\nmap_dict = {'foo': 'FOO', 'bar': 'BAR', 'baz': 'BAZ'}\nprint(df['A'].map(map_dict))\n0    FOO\n1    BAR\n2    BAZ\n3    FOO\n4    BAR\nName: A, dtype: object\n\n# Query\nprint(df.query('B > 2 and C < 50'))\n     A  B   C\n2  baz  3  30\n3  foo  4  40\n\n# Pivot\npivoted = df.pivot(index='A', columns='B', values='C')\nprint(pivoted)\nB    1     2     3     4     5\nA                              \nbar  NaN  20.0   NaN   NaN  50.0\nbaz  NaN   NaN  30.0   NaN   NaN\nfoo  10.0   NaN   NaN  40.0   NaN\n\n# Categorical Data\ndf['A'] = df['A'].astype('category')\nprint(df['A'].dtype)\ncategory\n\n# Sampling Data\nprint(df.sample(n=3, random_state=1))\n     A  B   C\n1  bar  2  20\n4  bar  5  50\n2  baz  3  30\n```"
    },
    {
      "question": "Chain Datetimes Rank Groups Effectively",
      "answer": "C - Chaining Operations: Perform multiple operations in a single chain\nD - Datetime Operations: Work with datetime data efficiently\nR - Rank: Assign ranks to entries based on values\nG - Groupby with Multiple Aggregations: Apply multiple functions to grouped data\nE - Efficient Use of Datatypes: Optimize data types to reduce memory usage\n\nExamples:\n```\n# Create a sample DataFrame\ndf = pd.DataFrame({'A': ['foo', 'bar', 'foo', 'bar', 'foo', 'bar'],\n                   'B': [1, 2, 3, 4, 5, 6],\n                   'C': pd.date_range('20230101', periods=6)})\n\n# Chaining Operations\nresult = (df.groupby('A')\n            .agg({'B': 'sum'})\n            .sort_values('B', ascending=False)\n            .reset_index())\nprint(result)\n     A   B\n0  bar  12\n1  foo   9\n\n# Datetime Operations\ndf['year'] = df['C'].dt.year\ndf['month'] = df['C'].dt.month\ndf['day'] = df['C'].dt.day\nprint(df)\n     A  B          C  year  month  day\n0  foo  1  2023-01-01  2023      1    1\n1  bar  2  2023-01-02  2023      1    2\n2  foo  3  2023-01-03  2023      1    3\n3  bar  4  2023-01-04  2023      1    4\n4  foo  5  2023-01-05  2023      1    5\n5  bar  6  2023-01-06  2023      1    6\n\n# Rank\ndf['rank'] = df['B'].rank(method='dense')\nprint(df['rank'])\n0    1.0\n1    2.0\n2    3.0\n3    4.0\n4    5.0\n5    6.0\nName: rank, dtype: float64\n\n# Groupby with Multiple Aggregations\nprint(df.groupby('A').agg({'B': ['sum', 'mean'], 'C': 'max'}))\n     B                    C\n   sum      mean        max\nA                          \nbar  12  4.000000 2023-01-06\nfoo   9  3.000000 2023-01-05\n\n# Efficient Use of Datatypes\ndf['B'] = df['B'].astype('int8')\nprint(df.dtypes)\nA             object\nB               int8\nC     datetime64[ns]\nyear            int64\nmonth           int64\nday             int64\nrank          float64\ndtype: object\n```"
    },
    {
      "question": "Crosses Stack Apps Explode Interpolated Zones",
      "answer": "C - Cross Tabulation: Create cross-tabulation of two or more factors\nS - Pivoting with Stacking and Unstacking: Pivot indices to columns and vice versa\nA - Applymap: Apply a function element-wise to a dataframe\nE - Explode List-Like Columns: Transform list columns into separate rows\nI - Interpolation: Fill missing values using interpolation methods\n\nExamples:\n```\n# Create a sample DataFrame\ndf = pd.DataFrame({'A': ['foo', 'foo', 'bar', 'bar', 'foo', 'bar'],\n                   'B': ['one', 'one', 'one', 'two', 'two', 'two'],\n                   'C': [1, 2, 3, 4, 5, 6],\n                   'D': [['a', 'b'], ['c'], ['d', 'e'], ['f'], ['g', 'h'], ['i', 'j']]})\n\n# Cross Tabulation\nprint(pd.crosstab(df.A, df.B))\nB    one  two\nA            \nbar    1    2\nfoo    2    1\n\n# Pivoting with Stacking and Unstacking\ndf_pivot = df.pivot(index='A', columns='B', values='C')\nprint(df_pivot)\nB    one  two\nA            \nbar  3.0  5.0\nfoo  1.5  5.0\n\nprint(df_pivot.stack())\nA    B  \nbar  one    3.0\n     two    5.0\nfoo  one    1.5\n     two    5.0\ndtype: float64\n\n# Applymap\nprint(df_pivot.applymap(lambda x: f'{x:.1f}' if pd.notnull(x) else 'N/A'))\nB   one two\nA           \nbar 3.0 5.0\nfoo 1.5 5.0\n\n# Explode List-Like Columns\nprint(df.explode('D'))\n     A    B  C  D\n0  foo  one  1  a\n0  foo  one  1  b\n1  foo  one  2  c\n2  bar  one  3  d\n2  bar  one  3  e\n3  bar  two  4  f\n4  foo  two  5  g\n4  foo  two  5  h\n5  bar  two  6  i\n5  bar  two  6  j\n\n# Interpolation\ndf_interp = pd.DataFrame({'A': [1, 2, np.nan, 4, 5, np.nan, 7]})\nprint(df_interp.interpolate())\n     A\n0  1.0\n1  2.0\n2  3.0\n3  4.0\n4  5.0\n5  6.0\n6  7.0\n```"
    },
    {
      "question": "Pipes Sparse Index Access Parallel Profiles",
      "answer": "P - Method Chaining with pipe(): Apply custom functions in method chains\nS - Sparse Matrices: Handle sparse matrices efficiently\nI - Custom Indexing with pd.IndexSlice: Make complex selections in multi-level index\nA - Efficient .at and .iat Accessors: Use for faster scalar access\nP - Multi-threading with swifter: Parallelize apply functions for performance\n\nExamples:\n```\n# Create a sample DataFrame\ndf = pd.DataFrame({'A': range(5), 'B': range(5, 10)})\n\n# Method Chaining with pipe()\ndef add_one(dataframe):\n    return dataframe + 1\n\nresult = (df.pipe(add_one)\n            .pipe(lambda x: x ** 2)\n            .sum())\nprint(result)\nA     55\nB    255\ndtype: int64\n\n# Sparse Matrices\nsparse_df = pd.DataFrame(pd.arrays.SparseArray([0, 0, 1, 1, 0, 0, 2, 2]))\nprint(sparse_df.dtypes)\n0    Sparse[int64, use_na=False]\ndtype: object\n\n# Custom Indexing with pd.IndexSlice\ndf = pd.DataFrame(np.random.randn(4, 5),\n                  index=[['A', 'A', 'B', 'B'], [1, 2, 1, 2]],\n                  columns=['a', 'b', 'c', 'd', 'e'])\nidx = pd.IndexSlice\nprint(df.loc[idx[:, 2], ['a', 'c', 'e']])\n            a         c         e\nA 2 -0.503740 -0.766409  0.088608\nB 2  0.306065  0.392768  0.644275\n\n# Efficient .at and .iat Accessors\nprint(df.iat[0, 0])  # Fast integer-location based access\n-0.3526121499210274\n\n# Multi-threading with swifter\n# Note: This requires the swifter library to be installed\n# import swifter\n# df['new_col'] = df['A'].swifter.apply(lambda x: x ** 2)\n# print(df['new_col'])\n```"
    },
    {
      "question": "Assign Dask Chunks Profile Sparse",
      "answer": "A - Chaining Methods with assign(): Add or modify columns without breaking chain\nD - Handling Large Datasets with Dask: Work with larger-than-memory datasets\nC - Chunk Processing for Large Files: Read large CSV files in chunks\nP - Memory Profiling with pandas_profiling: Generate detailed data profiling reports\nS - Sparse Data Handling: Handle sparse matrices for memory-efficient storage\n\nExamples:\n```python\ndf.assign(new_col=df['col1'] + df['col2'], another_col=df['col3'] / 2)\ndf = dd.read_csv('large_file.csv')\nfor chunk in pd.read_csv('large_file.csv', chunksize=1000000):\n    process(chunk)\nprofile = ProfileReport(df)\ndf.sparse.to_dense()\n```"
    }
  ],

  numpyOperations: [
    {
      "question": "Awesome Zebras Only Find Elephants",
      "answer": "A - np.array(): Creates a NumPy array from a list or iterable\nZ - np.zeros(): Creates an array filled with zeros\nO - np.ones(): Creates an array filled with ones\nF - np.full(): Creates an array filled with a specified value\nE - np.empty(): Creates an uninitialized array (contents may vary)\n\nExamples:\n```\nimport numpy as np\n\narr = np.array([1, 2, 3])\nprint(arr)\n# Output: [1 2 3]\n\narr = np.zeros((2, 3))\nprint(arr)\n# Output:\n# [[0. 0. 0.]\n#  [0. 0. 0.]]\n\narr = np.ones((2, 3))\nprint(arr)\n# Output:\n# [[1. 1. 1.]\n#  [1. 1. 1.]]\n\narr = np.full((2, 3), 7)\nprint(arr)\n# Output:\n# [[7 7 7]\n#  [7 7 7]]\n\narr = np.empty((2, 3))\nprint(arr)\n# Output (may vary):\n# [[1.64919197e-316 0.00000000e+000 6.93987449e-310]\n#  [6.93987449e-310 6.93987449e-310 0.00000000e+000]]\n```"
    },
    {
      "question": "Elephants Always Love Random Ranges",
      "answer": "E - np.eye(): Creates a 2D identity matrix with ones on the diagonal\nA - np.arange(): Returns evenly spaced values within a given interval\nL - np.linspace(): Returns evenly spaced numbers over a specified range\nR - np.random.rand(): Generates random numbers uniformly distributed between 0 and 1\nR - np.random.randn(): Generates random numbers from a standard normal distribution\n\nExamples:\n```\narr = np.eye(3)\nprint(arr)\n# Output:\n# [[1. 0. 0.]\n#  [0. 1. 0.]\n#  [0. 0. 1.]]\n\narr = np.arange(0, 10, 2)\nprint(arr)\n# Output: [0 2 4 6 8]\n\narr = np.linspace(0, 1, 5)\nprint(arr)\n# Output: [0.   0.25 0.5  0.75 1.  ]\n\narr = np.random.rand(3)\nprint(arr)\n# Output (may vary): [0.123456 0.987654 0.555555]\n\narr = np.random.randn(3)\nprint(arr)\n# Output (may vary): [-0.123  1.987 -0.345]\n```"
    },
    {
      "question": "Rand Shapes Need Data Sizes",
      "answer": "R - np.random.randint(): Generates random integers from a specified range\nS - .shape: Returns the shape of an array (dimensions)\nN - .ndim: Returns the number of dimensions of the array\nD - .dtype: Returns the data type of the array elements\nS - .size: Returns the number of elements in the array\n\nExamples:\n```\narr = np.random.randint(0, 10, size=5)\nprint(arr)\n# Output (may vary): [3 7 3 2 9]\n\narr = np.array([[1, 2, 3], [4, 5, 6]])\nprint(arr.shape)\n# Output: (2, 3)\n\nprint(arr.ndim)\n# Output: 2\n\nprint(arr.dtype)\n# Output: int64\n\nprint(arr.size)\n# Output: 6\n```"
    },
    {
      "question": "Items Need Bytes Fast Slices",
      "answer": "I - .itemsize: Returns the size of each element in bytes\nN - .nbytes: Returns the total number of bytes consumed by the array\nB - Single element indexing: Access a single element by its index\nF - Slicing (start:stop): Slice an array using start, stop, and step values\nS - Boolean masking: Filter elements of an array using a boolean condition\n\nExamples:\n```\narr = np.array([[1, 2, 3], [4, 5, 6]])\n\nprint(arr.itemsize)\n# Output: 8\n\nprint(arr.nbytes)\n# Output: 48\n\nprint(arr[0, 1])\n# Output: 2\n\nprint(arr[:, 1:3])\n# Output:\n# [[2 3]\n#  [5 6]]\n\nprint(arr[arr > 3])\n# Output: [4 5 6]\n```"
    },
    {
      "question": "Fancy Reshapes Flatten Expands Transposes",
      "answer": "F - Fancy indexing: Use arrays of indices to access elements in an array\nR - np.reshape(): Reshape an array to a new shape\nF - np.ravel() and np.flatten(): Flatten an array into a 1D array\nE - np.expand_dims(): Expand the dimensions of an array\nT - np.transpose(): Transpose the dimensions of an array\n\nExamples:\n```\nindices = [0, 2]\narr = np.array([10, 20, 30, 40])\nprint(arr[indices])\n# Output: [10 30]\n\narr = np.array([1, 2, 3, 4, 5, 6])\nreshaped = np.reshape(arr, (2, 3))\nprint(reshaped)\n# Output:\n# [[1 2 3]\n#  [4 5 6]]\n\nprint(reshaped.ravel())\n# Output: [1 2 3 4 5 6]\n\nprint(reshaped.flatten())\n# Output: [1 2 3 4 5 6]\n\nexpanded = np.expand_dims(arr, axis=0)\nprint(expanded)\n# Output: [[1 2 3 4 5 6]]\n\narr = np.array([[1, 2, 3], [4, 5, 6]])\ntransposed = np.transpose(arr)\nprint(transposed)\n# Output:\n# [[1 4]\n#  [2 5]\n#  [3 6]]\n```"
    },
    {
      "question": "Squeeze Swap Adds Multiplies Broadcasts",
      "answer": "S - np.squeeze(): Remove single-dimensional entries from an array\nS - np.swapaxes(): Swap two axes of an array\nA - Arithmetic operations (+, -): Perform element-wise addition and subtraction\nM - Arithmetic operations (*, /): Perform element-wise multiplication and division\nB - Broadcasting: Allows operations on arrays of different shapes\n\nExamples:\n```\narr = np.array([[[1, 2, 3]]])\nsqueezed = np.squeeze(arr)\nprint(squeezed)\n# Output: [1 2 3]\n\narr = np.array([[1, 2, 3], [4, 5, 6]])\nswapped = np.swapaxes(arr, 0, 1)\nprint(swapped)\n# Output:\n# [[1 4]\n#  [2 5]\n#  [3 6]]\n\narr1 = np.array([1, 2, 3])\narr2 = np.array([4, 5, 6])\nprint(arr1 + arr2)\n# Output: [5 7 9]\nprint(arr1 * arr2)\n# Output: [4 10 18]\n\narr1 = np.array([1, 2, 3])\narr2 = np.array([[1], [2], [3]])\nprint(arr1 + arr2)\n# Output:\n# [[2 3 4]\n#  [3 4 5]\n#  [4 5 6]]\n```"
    },
    
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