const topicTitles = {
  pythonBasicSyntax : "Basic Syntax and Variables",
  pythonDataStructures: "Python Data Structures: Lists, tuples, sets, dictionaries",
  pythonControlFlow : "Control Flow: If statements, loops, break, continue, pass",
  pythonFunctions: "Python Functions",
  pythonModules: "Python Modules",
  Chapter1_PythonBasicsMnemonics: "Python Basics Mnemonics",


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
    { question: "Smart Monkeys Can Fly Planes", answer: "S - Single-line Comment: # This is a comment\nM - Multi-line Comment/Docstring: '''This is a multi-line comment.'''\nC - Concatenation: greeting = 'Hello' + ' ' + 'World'\nF - F-String Formatting: f'{name} is {age} years old.'\nP - Print: print('Hello, World!')" },

    { question: "I Find Snakes By Ponds", answer: "I - Integer: x = 5\nF - Float: pi = 3.14\nS - String: name = 'Charles'\nB - Boolean: is_sunny = True\nP - Print: print('Displaying data.')" },

    { question: "Variables Are Really Necessary Tools", answer: "V - Variable Assignment: x = 10\nA - Assign Variables: x = 'Hello'\nR - Reassigning: x = 10; x = 'Ten'\nN - Naming Convention: student_name = 'Alice'\nT - Type-Sensitive: age = 25; Age = 30 (different variables)" },

    { question: "I Find Smooth Prints", answer: "I - Integer Conversion: age = int('25')\nF - Float Conversion: height_float = float(170)\nS - String Conversion: year_str = str(2024)\nP - Print: print('The value is', year_str)" },

    { question: "Data Prints To Variables", answer: "D - Data Types: int, float, str, bool\nP - Print: print(name, age, pi)\nT - Type Conversion: num_int = int('25')\nV - Variables: student_name = 'Charles'" },

    { question: "Lists Allow Managing Simple Lists", answer: "L - List Creation: numbers = [1, 2, 3]\nA - Access Elements: fruits = ['apple', 'banana', 'cherry']; print(fruits[0])\nM - Modifying Lists: fruits[1] = 'blueberry'; fruits.append('orange')\nS - Slicing Lists: print(numbers[0:3])\nL - List Comprehensions: squares = [x**2 for x in range(1, 6)]" },

    { question: "Tuples Can Always Unpack Anywhere", answer: "T - Tuple Creation: point = (3, 4)\nC - Cannot Modify: Tuples are immutable\nA - Accessing Elements: print(point[0])\nU - Unpacking Tuples: x, y = point\nA - Advantages of Tuples: Faster and more secure due to immutability" },

    { question: "Sets Allow Removing Or Sets", answer: "S - Set Creation: fruits = {'apple', 'banana', 'cherry'}\nA - Adding Elements: fruits.add('orange')\nR - Removing Elements: fruits.remove('banana')\nO - Operations on Sets: union (|), intersection (&), difference (-)\nS - Set Unique Elements: Automatically removes duplicates" },

    { question: "Dictionaries Are Mapping Unique Keys", answer: "D - Dictionary Creation: person = {'name': 'John', 'age': 30}\nA - Accessing Values: print(person['name'])\nM - Modifying Dictionaries: person['job'] = 'Engineer'\nU - Using del and pop(): del person['age']; job = person.pop('job')\nK - Key Methods: keys(), values(), items()" },

    { question: "If Implements Fancy Execution", answer: "I - If Statement: if x > 5: print('x is greater than 5')\nE - Else Statement: else: print('x is not greater than 5')\nF - Elif Statement: elif x > 5: print('x is greater than 5 but less than or equal to 10')\nE - Execution: Determines which block of code to execute based on conditions" },

    { question: "For Loops Facilitate Iteration", answer: "F - For Loop Syntax: for item in sequence: # Code to execute\nL - Looping with range(): for i in range(5): print(i)\nF - For Loops on Strings: for letter in 'Python': print(letter)\nI - Iteration: Repeats a block of code for each item in a sequence" },

    { question: "While Waits Warily", answer: "W - While Loop Syntax: while condition: # Code to execute\nW - Watch for Infinite Loops: Ensure the condition can become False\nW - While with Else: Executes code when loop condition becomes False\nW - Warily: Be cautious of unintended infinite loops" },

    { question: "Break Continues Passing Control", answer: "B - Break: Exits the loop prematurely\nC - Continue: Skips the rest of the current iteration\nP - Pass: Does nothing, used as a placeholder\nC - Control: Manages the flow within loops" },

    { question: "Nesting Navigates Numerous Loops", answer: "N - Nested Loops: Loops within loops\nN - Navigating Break: Only exits the innermost loop\nN - Numerous Iterations: Can create complex patterns of execution\nL - Loops: Can be combined for more complex control flow" },

    { question: "Else Executes Eventually", answer: "E - Else in Loops: Executes when loop terminates naturally\nE - Example (For): for i in range(5): print(i)\nelse: print('Loop finished')\nE - Example (While): while x < 3: print(x); x += 1\nelse: print('Loop completed')\nE - Eventually: Confirms loop ran through all iterations without breaking" }



  ],
  




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