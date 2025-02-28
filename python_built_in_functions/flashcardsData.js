const topicTitles = {
    strings : "Built in String Functions",
    dictionary: "Built in Dictionary Functions",
    float : "Built in Float Functions",
    integer: "Built in Integer Functions",
    tuples_and_lists: "Tuples and lists",
    Chapter1_PythonBasicsMnemonics: "Python Basics Mnemonics",
    pythonBuiltinFunctions: "Python BuiltinFunctions",
    pandasOperations: "Pandas Operations",
    numpyOperations: "Numpy Operations",



};

const flashcardsData = {
    strings: [
        {
            "question": "Cats Can Catch Cute Eggs",
            "answer": "C - capitalize(): Convert first character to uppercase, rest to lowercase\nC - casefold(): Aggressive lowercase conversion for caseless comparisons\nC - center(): Center string within specified width\nC - count(): Count occurrences of substring\nE - encode(): Convert string to bytes object\n\nExamples:\n```\n# capitalize()\ntext = 'hello world'\nprint(text.capitalize())  # Output: Hello world\n\n# casefold()\ntext = 'Straße'\nprint(text.casefold())  # Output: strasse\n\n# center()\ntext = 'Hello'\nprint(text.center(11, '-'))  # Output: ---Hello---\n\n# count()\ntext = 'banana'\nprint(text.count('a'))  # Output: 3\n\n# encode()\ntext = 'Hello World'\nprint(text.encode('utf-8'))  # Output: b'Hello World'\n```"
        },
        {
            "question": "Eagles Enjoy Finding Format Maps",
            "answer": "E - endswith(): Test if string ends with specified suffix\nE - expandtabs(): Convert tabs to spaces\nF - find(): Find first occurrence of substring\nF - format(): Format string with specified values\nM - format_map(): Format string using dictionary\n\nExamples:\n```\n# endswith()\ntext = 'document.pdf'\nprint(text.endswith('.pdf'))  # Output: True\n\n# expandtabs()\ntext = 'Hello\\tWorld'\nprint(text.expandtabs(4))  # Output: Hello   World\n\n# find()\ntext = 'hello world'\nprint(text.find('world'))  # Output: 6\n\n# format()\nname, age = 'Alice', 30\nprint('Name: {}, Age: {}'.format(name, age))  # Output: Name: Alice, Age: 30\n\n# format_map()\ndata = {'name': 'Bob', 'age': 25}\nprint('Name: {name}, Age: {age}'.format_map(data))  # Output: Name: Bob, Age: 25\n```"
        },
        {
            "question": "Important Identity Indices Are Inside",
            "answer": "I - index(): Find substring (raises ValueError if not found)\nI - isidentifier(): Check if string is valid Python identifier\nI - isalnum(): Check if all characters are alphanumeric\nI - isalpha(): Check if all characters are alphabetic\nI - isascii(): Check if string contains only ASCII characters\n\nExamples:\n```\n# index()\ntext = 'hello world'\nprint(text.index('world'))  # Output: 6\n\n# isidentifier()\ntext = 'variable_1'\nprint(text.isidentifier())  # Output: True\n\n# isalnum()\ntext = 'abc123'\nprint(text.isalnum())  # Output: True\n\n# isalpha()\ntext = 'HelloWorld'\nprint(text.isalpha())  # Output: True\n\n# isascii()\ntext = 'Hello123'\nprint(text.isascii())  # Output: True\n```"
        },
        {
            "question": "Decimal Digits Lower Print Space",
            "answer": "D - isdecimal(): Check if all characters are decimal\nD - isdigit(): Check if all characters are digits\nL - islower(): Check if all characters are lowercase\nP - isprintable(): Check if all characters are printable\nS - isspace(): Check if all characters are whitespace\n\nExamples:\n```\n# isdecimal()\ntext = '12345'\nprint(text.isdecimal())  # Output: True\n\n# isdigit()\ntext = '12345'\nprint(text.isdigit())  # Output: True\n\n# islower()\ntext = 'hello world'\nprint(text.islower())  # Output: True\n\n# isprintable()\ntext = 'Hello World!'\nprint(text.isprintable())  # Output: True\n\n# isspace()\ntext = '   '\nprint(text.isspace())  # Output: True\n```"
        },
        {
            "question": "Title Upper Simple Join Lines",
            "answer": "T - istitle(): Check if string is titlecased\nU - isupper(): Check if all characters are uppercase\nS - split(): Split string at separator into list\nJ - join(): Concatenate strings using separator\nL - ljust(): Left-align string within specified width\n\nExamples:\n```\n# istitle()\ntext = 'Hello World'\nprint(text.istitle())  # Output: True\n\n# isupper()\ntext = 'HELLO WORLD'\nprint(text.isupper())  # Output: True\n\n# split()\ntext = 'one,two,three'\nprint(text.split(','))  # Output: ['one', 'two', 'three']\n\n# join()\nwords = ['Hello', 'World', 'Python']\nprint(' '.join(words))  # Output: Hello World Python\n\n# ljust()\ntext = 'Hello'\nprint(text.ljust(10, '-'))  # Output: Hello-----\n```"
        },
        {
            "question": "Left Right Partition Strip Trim",
            "answer": "L - lstrip(): Remove leading whitespace\nR - rpartition(): Split string at last occurrence of separator\nP - partition(): Split string at first occurrence of separator\nS - strip(): Remove leading and trailing whitespace\nT - translate(): Map characters using translation table\n\nExamples:\n```\n# lstrip()\ntext = '   Hello World'\nprint(text.lstrip())  # Output: 'Hello World'\n\n# rpartition()\ntext = 'a=b=c'\nprint(text.rpartition('='))  # Output: ('a=b', '=', 'c')\n\n# partition()\ntext = 'key=value'\nprint(text.partition('='))  # Output: ('key', '=', 'value')\n\n# strip()\ntext = '   Hello World   '\nprint(text.strip())  # Output: 'Hello World'\n\n# translate()\ntrans_table = str.maketrans('aeiou', '12345')\ntext = 'hello'\nprint(text.translate(trans_table))  # Output: 'h2ll4'\n```"
        },
        {
            "question": "Replace Split Right Space Finds",
            "answer": "R - replace(): Replace occurrences of substring\nS - rsplit(): Split string from right at separator\nR - rjust(): Right-align string within specified width\nS - rstrip(): Remove trailing whitespace\nF - rfind(): Find last occurrence of substring\n\nExamples:\n```\n# replace()\ntext = 'Hello World'\nprint(text.replace('World', 'Python'))  # Output: Hello Python\n\n# rsplit()\ntext = 'one:two:three'\nprint(text.rsplit(':', 1))  # Output: ['one:two', 'three']\n\n# rjust()\ntext = 'Hello'\nprint(text.rjust(10, '-'))  # Output: -----Hello\n\n# rstrip()\ntext = 'Hello World   '\nprint(text.rstrip())  # Output: 'Hello World'\n\n# rfind()\ntext = 'hello world hello'\nprint(text.rfind('hello'))  # Output: 12\n```"
        },
        {
            "question": "Title Upper Swapcase Lines Zero",
            "answer": "T - title(): Convert string to title case\nU - upper(): Convert string to uppercase\nS - swapcase(): Swap case of all characters\nL - splitlines(): Split string at line boundaries\nZ - zfill(): Pad string on left with zeros\n\nExamples:\n```\n# title()\ntext = 'hello world'\nprint(text.title())  # Output: Hello World\n\n# upper()\ntext = 'hello world'\nprint(text.upper())  # Output: HELLO WORLD\n\n# swapcase()\ntext = 'Hello World'\nprint(text.swapcase())  # Output: hELLO wORLD\n\n# splitlines()\ntext = 'Line1\\nLine2\\nLine3'\nprint(text.splitlines())  # Output: ['Line1', 'Line2', 'Line3']\n\n# zfill()\nnumber = '42'\nprint(number.zfill(5))  # Output: 00042\n```"
        },
        {
            "question": "Making Reminder Index Notes",
            "answer": "Common usage patterns to remember:\n\n1. Case Conversion Methods:\n   - capitalize(), upper(), lower(), title(), swapcase()\n   - casefold() for special case-insensitive comparisons\n\n2. Search Methods:\n   - find(), rfind() return -1 if not found\n   - index(), rindex() raise ValueError if not found\n   - count() for counting occurrences\n\n3. Validation Methods:\n   - isalnum(), isalpha(), isdigit(), isdecimal(), isnumeric()\n   - islower(), isupper(), istitle()\n   - isspace(), isprintable(), isidentifier()\n\n4. Alignment Methods:\n   - ljust(), rjust(), center() for padding\n   - zfill() for zero-padding numbers\n\n5. Splitting/Joining Methods:\n   - split(), rsplit(), splitlines() for breaking strings\n   - partition(), rpartition() for single-split with separator\n   - join() for combining strings\n\n6. Cleaning Methods:\n   - strip(), lstrip(), rstrip() for removing whitespace\n   - replace() for substituting substrings\n\n7. Formatting Methods:\n   - format(), format_map() for template strings\n   - expandtabs() for handling tab characters\n\nNote: Most string methods return a new string rather than modifying the original, as strings are immutable in Python."
        }
    ],

    dictionary: [
        {
            "question": "Cats Can Catch Cute Eggs",
            "answer": "C - capitalize(): Convert first character to uppercase, rest to lowercase\nC - casefold(): Aggressive lowercase conversion for caseless comparisons\nC - center(): Center string within specified width\nC - count(): Count occurrences of substring\nE - encode(): Convert string to bytes object\n\nExamples:\n```\n# capitalize()\ntext = 'hello world'\nprint(text.capitalize())  # Output: Hello world\n\n# casefold()\ntext = 'Straße'\nprint(text.casefold())  # Output: strasse\n\n# center()\ntext = 'Hello'\nprint(text.center(11, '-'))  # Output: ---Hello---\n\n# count()\ntext = 'banana'\nprint(text.count('a'))  # Output: 3\n\n# encode()\ntext = 'Hello World'\nprint(text.encode('utf-8'))  # Output: b'Hello World'\n```"
        },
        {
            "question": "Eagles Enjoy Finding Format Maps",
            "answer": "E - endswith(): Test if string ends with specified suffix\nE - expandtabs(): Convert tabs to spaces\nF - find(): Find first occurrence of substring\nF - format(): Format string with specified values\nM - format_map(): Format string using dictionary\n\nExamples:\n```\n# endswith()\ntext = 'document.pdf'\nprint(text.endswith('.pdf'))  # Output: True\n\n# expandtabs()\ntext = 'Hello\\tWorld'\nprint(text.expandtabs(4))  # Output: Hello   World\n\n# find()\ntext = 'hello world'\nprint(text.find('world'))  # Output: 6\n\n# format()\nname, age = 'Alice', 30\nprint('Name: {}, Age: {}'.format(name, age))  # Output: Name: Alice, Age: 30\n\n# format_map()\ndata = {'name': 'Bob', 'age': 25}\nprint('Name: {name}, Age: {age}'.format_map(data))  # Output: Name: Bob, Age: 25\n```"
        },
        {
            "question": "Important Identity Indices Are Inside",
            "answer": "I - index(): Find substring (raises ValueError if not found)\nI - isidentifier(): Check if string is valid Python identifier\nI - isalnum(): Check if all characters are alphanumeric\nI - isalpha(): Check if all characters are alphabetic\nI - isascii(): Check if string contains only ASCII characters\n\nExamples:\n```\n# index()\ntext = 'hello world'\nprint(text.index('world'))  # Output: 6\n\n# isidentifier()\ntext = 'variable_1'\nprint(text.isidentifier())  # Output: True\n\n# isalnum()\ntext = 'abc123'\nprint(text.isalnum())  # Output: True\n\n# isalpha()\ntext = 'HelloWorld'\nprint(text.isalpha())  # Output: True\n\n# isascii()\ntext = 'Hello123'\nprint(text.isascii())  # Output: True\n```"
        },
        {
            "question": "Decimal Digits Lower Print Space",
            "answer": "D - isdecimal(): Check if all characters are decimal\nD - isdigit(): Check if all characters are digits\nL - islower(): Check if all characters are lowercase\nP - isprintable(): Check if all characters are printable\nS - isspace(): Check if all characters are whitespace\n\nExamples:\n```\n# isdecimal()\ntext = '12345'\nprint(text.isdecimal())  # Output: True\n\n# isdigit()\ntext = '12345'\nprint(text.isdigit())  # Output: True\n\n# islower()\ntext = 'hello world'\nprint(text.islower())  # Output: True\n\n# isprintable()\ntext = 'Hello World!'\nprint(text.isprintable())  # Output: True\n\n# isspace()\ntext = '   '\nprint(text.isspace())  # Output: True\n```"
        },
        {
            "question": "Title Upper Simple Join Lines",
            "answer": "T - istitle(): Check if string is titlecased\nU - isupper(): Check if all characters are uppercase\nS - split(): Split string at separator into list\nJ - join(): Concatenate strings using separator\nL - ljust(): Left-align string within specified width\n\nExamples:\n```\n# istitle()\ntext = 'Hello World'\nprint(text.istitle())  # Output: True\n\n# isupper()\ntext = 'HELLO WORLD'\nprint(text.isupper())  # Output: True\n\n# split()\ntext = 'one,two,three'\nprint(text.split(','))  # Output: ['one', 'two', 'three']\n\n# join()\nwords = ['Hello', 'World', 'Python']\nprint(' '.join(words))  # Output: Hello World Python\n\n# ljust()\ntext = 'Hello'\nprint(text.ljust(10, '-'))  # Output: Hello-----\n```"
        },
        {
            "question": "Left Right Partition Strip Trim",
            "answer": "L - lstrip(): Remove leading whitespace\nR - rpartition(): Split string at last occurrence of separator\nP - partition(): Split string at first occurrence of separator\nS - strip(): Remove leading and trailing whitespace\nT - translate(): Map characters using translation table\n\nExamples:\n```\n# lstrip()\ntext = '   Hello World'\nprint(text.lstrip())  # Output: 'Hello World'\n\n# rpartition()\ntext = 'a=b=c'\nprint(text.rpartition('='))  # Output: ('a=b', '=', 'c')\n\n# partition()\ntext = 'key=value'\nprint(text.partition('='))  # Output: ('key', '=', 'value')\n\n# strip()\ntext = '   Hello World   '\nprint(text.strip())  # Output: 'Hello World'\n\n# translate()\ntrans_table = str.maketrans('aeiou', '12345')\ntext = 'hello'\nprint(text.translate(trans_table))  # Output: 'h2ll4'\n```"
        },
        {
            "question": "Replace Split Right Space Finds",
            "answer": "R - replace(): Replace occurrences of substring\nS - rsplit(): Split string from right at separator\nR - rjust(): Right-align string within specified width\nS - rstrip(): Remove trailing whitespace\nF - rfind(): Find last occurrence of substring\n\nExamples:\n```\n# replace()\ntext = 'Hello World'\nprint(text.replace('World', 'Python'))  # Output: Hello Python\n\n# rsplit()\ntext = 'one:two:three'\nprint(text.rsplit(':', 1))  # Output: ['one:two', 'three']\n\n# rjust()\ntext = 'Hello'\nprint(text.rjust(10, '-'))  # Output: -----Hello\n\n# rstrip()\ntext = 'Hello World   '\nprint(text.rstrip())  # Output: 'Hello World'\n\n# rfind()\ntext = 'hello world hello'\nprint(text.rfind('hello'))  # Output: 12\n```"
        },
        {
            "question": "Title Upper Swapcase Lines Zero",
            "answer": "T - title(): Convert string to title case\nU - upper(): Convert string to uppercase\nS - swapcase(): Swap case of all characters\nL - splitlines(): Split string at line boundaries\nZ - zfill(): Pad string on left with zeros\n\nExamples:\n```\n# title()\ntext = 'hello world'\nprint(text.title())  # Output: Hello World\n\n# upper()\ntext = 'hello world'\nprint(text.upper())  # Output: HELLO WORLD\n\n# swapcase()\ntext = 'Hello World'\nprint(text.swapcase())  # Output: hELLO wORLD\n\n# splitlines()\ntext = 'Line1\\nLine2\\nLine3'\nprint(text.splitlines())  # Output: ['Line1', 'Line2', 'Line3']\n\n# zfill()\nnumber = '42'\nprint(number.zfill(5))  # Output: 00042\n```"
        },
        {
            "question": "Making Reminder Index Notes",
            "answer": "Common usage patterns to remember:\n\n1. Case Conversion Methods:\n   - capitalize(), upper(), lower(), title(), swapcase()\n   - casefold() for special case-insensitive comparisons\n\n2. Search Methods:\n   - find(), rfind() return -1 if not found\n   - index(), rindex() raise ValueError if not found\n   - count() for counting occurrences\n\n3. Validation Methods:\n   - isalnum(), isalpha(), isdigit(), isdecimal(), isnumeric()\n   - islower(), isupper(), istitle()\n   - isspace(), isprintable(), isidentifier()\n\n4. Alignment Methods:\n   - ljust(), rjust(), center() for padding\n   - zfill() for zero-padding numbers\n\n5. Splitting/Joining Methods:\n   - split(), rsplit(), splitlines() for breaking strings\n   - partition(), rpartition() for single-split with separator\n   - join() for combining strings\n\n6. Cleaning Methods:\n   - strip(), lstrip(), rstrip() for removing whitespace\n   - replace() for substituting substrings\n\n7. Formatting Methods:\n   - format(), format_map() for template strings\n   - expandtabs() for handling tab characters\n\nNote: Most string methods return a new string rather than modifying the original, as strings are immutable in Python."
        }
    ],

    float: [
        {
            "question": "FABRP - Floating Around Bright Rivers Peacefully",
            "answer": "F - float(x): Converts a number or a string to a floating-point number\nA - abs(x): Returns the absolute (non-negative) value of a number\nB - round(number, ndigits=None): Rounds a floating-point number to the nearest integer or to a specified number of decimal places\nR - pow(x, y, z=None): Returns x raised to the power of y. If z is provided, returns x raised to y modulo z\nP - divmod(a, b): Takes two numbers and returns their quotient and remainder as a pair\n\nExamples:\npython\n# float()\nvalue = \"3.14\"\nnumber = float(value)\nprint(number)\n\n# Output: 3.14\n\n# abs()\nnumber = -10.5\nabsolute = abs(number)\nprint(absolute)\n\n# Output: 10.5\n\n# round()\nnumber = 3.14159\nrounded = round(number, 2) \nprint(rounded)\n\n# Output: 3.14\n\n# pow()\nbase = 2.0\nexponent = 3.0\nresult = pow(base, exponent)\nprint(result)\n\n# With modulo\nresult_mod = pow(2.0, 3.0, 3)\nprint(result_mod)\n\n# Output:\n# 8.0\n# 2.0\n\n# divmod() \na = 17.0\nb = 5.0\nquotient, remainder = divmod(a, b)\nprint(f\"Quotient: {quotient}, Remainder: {remainder}\")\n\n# Output: Quotient: 3.0, Remainder: 2.0"
        },
        {
            "question": "MMSII - Majestic Mountains Shine In Infinity",
            "answer": "M - min(iterable, *[, key, default]): Returns the smallest item in an iterable or the smallest of two or more arguments\nM - max(iterable, *[, key, default]): Returns the largest item in an iterable or the largest of two or more arguments\nS - sum(iterable, start=0): Sums the items of an iterable from left to right and returns the total\nI - float.as_integer_ratio(): Returns a pair of integers whose ratio is exactly equal to the float and with a positive denominator\nI - float.is_integer(): Returns True if the float is an integer, otherwise False\n\nExamples:\npython\n# min()\nnumbers = [3.14, 2.71, 1.41, 1.73] \nminimum = min(numbers)\nprint(minimum)\n\n# Output: 1.41\n\n# max()\nmaximum = max(numbers)\nprint(maximum)\n\n# Output: 3.14\n\n# sum()\nnumbers = [1.5, 2.5, 3.0]\ntotal = sum(numbers) \nprint(total)\n\n# Output: 7.0\n\n# as_integer_ratio()\nnumber = 3.75\nratio = number.as_integer_ratio() \nprint(ratio)\n\n# Output: (15, 4)\n\n# is_integer()\nnumber = 5.0\nprint(number.is_integer())\n\nnumber = 5.5\nprint(number.is_integer())\n\n# Output:\n# True\n# False"
        },
        {
            "question": "HFICF - High Flyers Inspire Courage and Fortitude",
            "answer": "H - float.hex(): Returns a hexadecimal representation of the float\nF - float.fromhex(s): Converts a hexadecimal string to a float\nI - math.floor(x): Returns the largest integer less than or equal to x\nC - math.ceil(x): Returns the smallest integer greater than or equal to x\nF - math.isfinite(x): Returns True if x is neither an infinity nor a NaN, otherwise False\n\nExamples:\npython\n# float.hex()\nnumber = 3.14\nhex_representation = number.hex() \nprint(hex_representation)\n\n# Output: 0x1.91eb851eb851fp+1\n\n# float.fromhex()\nhex_string = '0x1.91eb851eb851fp+1'\nnumber = float.fromhex(hex_string)\nprint(number)\n\n# Output: 3.14\n\n# math.floor()\nimport math \nnumber = 3.7\nfloored = math.floor(number) \nprint(floored)\n\n# Output: 3\n\n# math.ceil()\nnumber = 3.2\nceiled = math.ceil(number)\nprint(ceiled)\n\n# Output: 4\n\n# math.isfinite()\nnumber = 3.14\nprint(math.isfinite(number))\n\nnumber = float('inf') \nprint(math.isfinite(number))\n\n# Output:\n# True \n# False"
        },
        {
            "question": "IMTMF - Innovative Minds Thrive Through Mental Fortitude",
            "answer": "I - math.isinf(x): Returns True if x is a positive or negative infinity, otherwise False\nM - math.isnan(x): Returns True if x is NaN (Not a Number), otherwise False\nT - math.trunc(x): Truncates the decimal part of x, returning the integer part as a float\nM - math.modf(x): Splits x into its fractional and integer parts, both returned as floats\nF - math.fabs(x): Returns the absolute value of x as a float\n\nExamples:\npython\n# math.isinf()\nimport math\nnumber = float('inf')\nprint(math.isinf(number))\n\nnumber = 3.14\nprint(math.isinf(number))\n\n# Output:\n# True\n# False\n\n# math.isnan()\nnumber = float('nan')\nprint(math.isnan(number))\n\nnumber = 3.14\nprint(math.isnan(number)) \n\n# Output:\n# True\n# False\n\n# math.trunc()\nnumber = 3.99\ntruncated = math.trunc(number)\nprint(truncated)\n\n# Output: 3\n\n# math.modf()\nnumber = 3.14\nfraction, integer = math.modf(number)\nprint(f\"Fractional part: {fraction}, Integer part: {integer}\")\n\n# Output: Fractional part: 0.14000000000000012, Integer part: 3.0\n\n# math.fabs()\nnumber = -7.5\nabsolute = math.fabs(number) \nprint(absolute)\n\n# Output: 7.5"
        },
        {
            "question": "SELLL - Smart Engineers Love Logical Learning",
            "answer": "S - math.sqrt(x): Returns the square root of x\nE - math.exp(x): Returns e raised to the power of x, where e is the base of natural logarithms\nL - math.log(x, base=None): Returns the logarithm of x to the given base. If the base isn't specified, returns the natural logarithm of x\nL - math.log10(x): Returns the base-10 logarithm of x\nL - math.log2(x): Returns the base-2 logarithm of x\n\nExamples:\npython\n# math.sqrt()\nimport math\nnumber = 16.0\nsqrt = math.sqrt(number) \nprint(sqrt)\n\n# Output: 4.0\n\n# math.exp()\nnumber = 1.0\nexponential = math.exp(number)\nprint(exponential)\n\n# Output: 2.718281828459045\n\n# math.log()\nnumber = 8.0\nlog_natural = math.log(number)\nlog_base2 = math.log(number, 2)\nprint(log_natural)\nprint(log_base2)\n\n# Output:\n# 2.0794415416798357\n# 3.0\n\n# math.log10()\nnumber = 1000.0\nlog10 = math.log10(number) \nprint(log10)\n\n# Output: 3.0\n\n# math.log2()\nnumber = 8.0\nlog2 = math.log2(number)\nprint(log2)\n\n# Output: 3.0"
        }
    ],

    integer: [
        {
            "question": "Intelligent Animals Play Daily Routines (IAPDR)",
            "answer": "I - int(): Convert value to integer\nA - abs(): Get absolute value\nP - pow(): Raise number to power\nD - divmod(): Get quotient and remainder\nR - round(): Round number to nearest integer\n\nExamples:\n```python\n# int()\nvalue = \"42\"\nnumber = int(value)\nprint(number)  # Output: 42\n\n# abs()\nnumber = -10\nabsolute = abs(number)\nprint(absolute)  # Output: 10\n\n# pow()\nbase = 2\nexponent = 3\nresult = pow(base, exponent)\nprint(result)  # Output: 8\nresult_mod = pow(2, 3, 3)  # With modulo\nprint(result_mod)  # Output: 2\n\n# divmod()\na = 17\nb = 5\nquotient, remainder = divmod(a, b)\nprint(f\"Quotient: {quotient}, Remainder: {remainder}\")  # Output: Quotient: 3, Remainder: 2\n\n# round()\nnumber = 3.14159\nrounded = round(number)\nprint(rounded)  # Output: 3\nrounded_dec = round(number, 2)\nprint(rounded_dec)  # Output: 3.14\n```"
        },
        {
            "question": "Brilliant Heroes Often Conquer Obstacles (BHOCO)",
            "answer": "B - bin(): Convert integer to binary string\nH - hex(): Convert integer to hexadecimal string\nO - oct(): Convert integer to octal string\nC - chr(): Convert integer to Unicode character\nO - ord(): Convert character to Unicode code point\n\nExamples:\n```python\n# bin()\nnumber = 10\nbinary = bin(number)\nprint(binary)  # Output: 0b1010\n\n# hex()\nnumber = 255\nhexadecimal = hex(number)\nprint(hexadecimal)  # Output: 0xff\n\n# oct()\nnumber = 8\noctal = oct(number)\nprint(octal)  # Output: 0o10\n\n# chr()\ncode_point = 65\ncharacter = chr(code_point)\nprint(character)  # Output: A\n\n# ord()\ncharacter = 'A'\ncode_point = ord(character)\nprint(code_point)  # Output: 65\n```"
        },
        {
            "question": "Smart Rabbits Make Memorable Escapes (SRMME)",
            "answer": "S - sum(): Sum items in an iterable\nR - range(): Generate sequence of numbers\nM - max(): Get largest item\nM - min(): Get smallest item\nE - enumerate(): Add counter to iterable\n\nExamples:\n```python\n# sum()\nnumbers = [1, 2, 3, 4, 5]\ntotal = sum(numbers)\nprint(total)  # Output: 15\n\n# range()\nfor i in range(5):\n    print(i)  # Output: 0, 1, 2, 3, 4\n\n# max()\nnumbers = [10, 20, 30, 40, 50]\nmaximum = max(numbers)\nprint(maximum)  # Output: 50\n\n# min()\nnumbers = [10, 20, 30, 40, 50]\nminimum = min(numbers)\nprint(minimum)  # Output: 10\n\n# enumerate()\nfruits = ['apple', 'banana', 'cherry']\nfor index, fruit in enumerate(fruits):\n    print(index, fruit)  # Output: 0 apple, 1 banana, 2 cherry\n```"
        },
        {
            "question": "Powerful Dragons Roam Beyond Horizons (PDRBH)",
            "answer": "P - pow(): Raise number to power\nD - divmod(): Get quotient and remainder\nR - round(): Round number\nB - bin(): Convert to binary\nH - hex(): Convert to hexadecimal\n\nExamples:\n```python\n# pow()\nbase = 3\nexponent = 4\nresult = pow(base, exponent)\nprint(result)  # Output: 81\n\n# divmod()\na = 20\nb = 6\nquotient, remainder = divmod(a, b)\nprint(f\"Quotient: {quotient}, Remainder: {remainder}\")  # Output: Quotient: 3, Remainder: 2\n\n# round()\nnumber = 7.856\nrounded = round(number, 1)\nprint(rounded)  # Output: 7.9\n\n# bin()\nnumber = 5\nbinary = bin(number)\nprint(binary)  # Output: 0b101\n\n# hex()\nnumber = 255\nhexadecimal = hex(number)\nprint(hexadecimal)  # Output: 0xff\n```"
        },
        {
            "question": "Outstanding Champions Have Superior Routines (OCHSR)",
            "answer": "O - oct(): Convert to octal\nC - chr(): Convert to character\nH - ord(): Get character code point\nS - sum(): Sum items\nR - range(): Generate sequence\n\nExamples:\n```python\n# oct()\nnumber = 64\noctal = oct(number)\nprint(octal)  # Output: 0o100\n\n# chr()\ncode_point = 97\ncharacter = chr(code_point)\nprint(character)  # Output: a\n\n# ord()\ncharacter = 'a'\ncode_point = ord(character)\nprint(code_point)  # Output: 97\n\n# sum()\nnumbers = [4, 5, 6]\ntotal = sum(numbers)\nprint(total)  # Output: 15\n\n# range()\nfor i in range(3):\n    print(i)  # Output: 0, 1, 2\n```"
        },
        {
            "question": "Majestic Mountains Elevate Peak Dreams (MMEPD)",
            "answer": "M - max(): Get largest item\nM - min(): Get smallest item\nE - enumerate(): Add counter to iterable\nP - pow(): Raise to power\nD - divmod(): Get quotient and remainder\n\nExamples:\n```python\n# max()\nnumbers = [3, 6, 2, 9, 5]\nmaximum = max(numbers)\nprint(maximum)  # Output: 9\n\n# min()\nnumbers = [3, 6, 2, 9, 5]\nminimum = min(numbers)\nprint(minimum)  # Output: 2\n\n# enumerate()\nfruits = ['apple', 'banana', 'cherry']\nfor index, fruit in enumerate(fruits):\n    print(index, fruit)  # Output: 0 apple, 1 banana, 2 cherry\n\n# pow()\nbase = 4\nexponent = 3\nresult = pow(base, exponent)\nprint(result)  # Output: 64\n\n# divmod()\na = 25\nb = 4\nquotient, remainder = divmod(a, b)\nprint(f\"Quotient: {quotient}, Remainder: {remainder}\")  # Output: Quotient: 6, Remainder: 1\n```"
        }
    ],
    tuples_and_lists: [
        {
            "question": "AEIRP - Artists Enjoy Inspiring Radiant Paintings",
            "answer": "A - append(element): Adds a single element to the end of the list\nE - extend(iterable): Extends the list by appending elements from the iterable\nI - insert(index, element): Inserts an element at the specified position in the list\nR - remove(element): Removes the first occurrence of the specified element from the list\nP - pop(index=-1): Removes and returns the element at the specified index. If no index is specified, removes and returns the last item\n\nExamples:\npython\n# append()\nfruits = ['apple', 'banana', 'cherry']\nfruits.append('date')\nprint(fruits)\n\n# Output: ['apple', 'banana', 'cherry', 'date']\n\n# extend()\nfruits = ['apple', 'banana']\nmore_fruits = ['cherry', 'date']\nfruits.extend(more_fruits)\nprint(fruits)\n\n# Output: ['apple', 'banana', 'cherry', 'date']\n\n# insert()\nfruits = ['apple', 'cherry']\nfruits.insert(1, 'banana')\nprint(fruits)\n\n# Output: ['apple', 'banana', 'cherry']\n\n# remove()\nfruits = ['apple', 'banana', 'cherry', 'banana']\nfruits.remove('banana')\nprint(fruits)\n\n# Output: ['apple', 'cherry', 'banana']\n\n# pop()\nfruits = ['apple', 'banana', 'cherry']\nlast_fruit = fruits.pop()\nprint(last_fruit)\nprint(fruits)\n\n# Output:\n# cherry\n# ['apple', 'banana']"
        },
        {
            "question": "CICSR - Creative Individuals Create Stunning Realities",
            "answer": "C - clear(): Removes all items from the list, leaving it empty\nI - index(element, start=0, end=len(list)): Returns the index of the first occurrence of the specified element. Raises a ValueError if the element is not found\nC - count(element): Returns the number of times the specified element appears in the list\nS - sort(key=None, reverse=False): Sorts the list in ascending order by default. Can be customized with key and reverse parameters\nR - reverse(): Reverses the elements of the list in place\n\nExamples:\npython\n# clear()\nfruits = ['apple', 'banana', 'cherry']\nfruits.clear()\nprint(fruits)\n\n# Output: []\n\n# index()\nfruits = ['apple', 'banana', 'cherry', 'banana']\nindex = fruits.index('banana')\nprint(index)\n\n# Output: 1\n\n# count()\nfruits = ['apple', 'banana', 'cherry', 'banana']\ncount_banana = fruits.count('banana')\nprint(count_banana)\n\n# Output: 2\n\n# sort()\nnumbers = [4, 2, 5, 1, 3]\nnumbers.sort()\nprint(numbers)\n\n# Output: [1, 2, 3, 4, 5]\n\n# sort() with reverse\nnumbers.sort(reverse=True)\nprint(numbers)\n\n# Output: [5, 4, 3, 2, 1]\n\n# reverse()\nfruits = ['apple', 'banana', 'cherry']\nfruits.reverse()\nprint(fruits)\n\n# Output: ['cherry', 'banana', 'apple']"
        },
        {
            "question": "C - Copy Copies Completely",
            "answer": "C - copy(): Returns a shallow copy of the list. Modifications to the new list do not affect the original list\n\nExample:\npython\noriginal = [1, 2, 3]\ncopied = original.copy()\ncopied.append(4)\nprint(\"Copied List:\", copied)\nprint(\"Original List:\", original)\n\n# Output:\n# Copied List: [1, 2, 3, 4]\n# Original List: [1, 2, 3]"
        },
        {
            "question": "CI - Count Instances",
            "answer": "C - count(element): Returns the number of times the specified element appears in the tuple\nI - index(element, start=0, end=len(tuple)): Returns the first index of the specified element. Raises a ValueError if the element is not found\n\nExamples:\npython\n# count()\nfruits = ('apple', 'banana', 'cherry', 'banana')\ncount_banana = fruits.count('banana')\nprint(count_banana)\n\n# Output: 2\n\n# index()\nfruits = ('apple', 'banana', 'cherry', 'banana')\nindex_banana = fruits.index('banana')\nprint(index_banana)\n  \n# Output: 1"
        },
        {
            "question": "IMMUT - Immutable Mappings Maintain Uniform Traits",
            "answer": "I - Immutability: Once a tuple is created, its elements cannot be changed, added, or removed\nM - Concatenation: Tuples can be concatenated using the + operator to form a new tuple\nM - Repetition: Tuples can be repeated using the * operator to form a new tuple with repeated elements\nU - Slicing: Extracts a subset of the tuple using slicing syntax\nT - Membership Testing: Uses the in and not in operators to check for the presence of elements\n\nExamples:\npython\n# Immutability\nfruits = ('apple', 'banana', 'cherry')\ntry:\n    fruits[1] = 'blueberry'\nexcept TypeError as e:\n    print(e)\n\n# Output: 'tuple' object does not support item assignment\n\n# Concatenation  \ntuple1 = (1, 2, 3)\ntuple2 = (4, 5, 6)\ncombined = tuple1 + tuple2\nprint(combined)\n\n# Output: (1, 2, 3, 4, 5, 6)\n\n# Repetition\nfruits = ('apple', 'banana')\nrepeated = fruits * 3\nprint(repeated) \n\n# Output: ('apple', 'banana', 'apple', 'banana', 'apple', 'banana')\n\n# Slicing\nnumbers = (0, 1, 2, 3, 4, 5)\nsubset = numbers[2:5]\nprint(subset)\n\n# Output: (2, 3, 4)\n\n# Membership Testing\nfruits = ('apple', 'banana', 'cherry')\nprint('banana' in fruits)  \nprint('date' not in fruits)\n\n# Output:\n# True  \n# True"
        },
        {
            "question": "ATU - Advanced Tuple Utilities",
            "answer": "A - Tuple Unpacking: Assigns tuple elements to multiple variables in a single statement\nT - Nested Tuples: Tuples can contain other tuples, allowing for complex data structures\nU - Using Tuples as Dictionary Keys: Because tuples are immutable, they can be used as keys in dictionaries\n\nExamples:\npython\n# Tuple Unpacking\ncoordinates = (10, 20, 30)\nx, y, z = coordinates\nprint(x, y, z)\n\n# Output: 10 20 30\n\n# Nested Tuples\nnested = (1, (2, 3), (4, (5, 6)))\nprint(nested)\n\n# Output: (1, (2, 3), (4, (5, 6)))\n\n# Using Tuples as Dictionary Keys\nlocations = { (0, 0): \"Origin\", (1, 2): \"Point A\" }\nprint(locations[(1, 2)])\n\n# Output: Point A"
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
            "question": "Little Antelopes Make Silly Leaps",
            "answer": "L - List Creation: Make ordered, changeable collections\nA - Access Elements: Get items by their position\nM - Modify Lists: Add, change, or remove items\nS - Slice Lists: Take parts of lists\nL - List Comprehension: Create lists in a smart way\n\n```\nanimals = ['cat', 'dog', 'fish']\nprint(animals[0])  # Access\nanimals.append('bird')  # Modify\nprint(animals[1:3])  # Slice\nsquares = [x**2 for x in range(5)]  # List Comprehension\n```"
        },
        {
            "question": "Turtles Can Always Unpack Apples",
            "answer": "T - Tuple Creation: Make ordered, unchangeable collections\nC - Cannot Change: Tuples stay the same after creation\nA - Access Elements: Get items by their position\nU - Unpack: Give tuple items to different variables\nA - Always Safe: Good for data that shouldn't change\n\n```\nfruit = ('apple', 'banana', 'cherry')\nprint(fruit[0])  # Access\na, b, c = fruit  # Unpack\nnew_fruit = (*fruit, 'date')  # Create new tuple\n```"
        },
        {
            "question": "Sam Always Removes Or Sorts",
            "answer": "S - Set Creation: Make collections with no repeats\nA - Add Elements: Put new things in the set\nR - Remove: Take items out of the set\nO - Operations: Do things like union or intersection\nS - Sort: Arrange items (though sets themselves are unordered)\n\n```\nzoo = {'lion', 'tiger', 'bear'}\nzoo.add('elephant')  # Add\nzoo.remove('tiger')  # Remove\nprint(zoo | {'giraffe', 'lion'})  # Union operation\nsorted_zoo = sorted(zoo)  # Sort (returns a list)\n```"
        },
        {
            "question": "Dogs Always Make Unique Keys",
            "answer": "D - Dictionary Creation: Make collections of paired items\nA - Access Values: Get information using keys\nM - Modify Pairs: Add, change, or remove paired items\nU - Update: Change many items at once\nK - Keys: Use special labels to find values\n\n```\ndog = {'name': 'Buddy', 'age': 5}\nprint(dog['name'])  # Access\ndog['breed'] = 'Labrador'  # Modify\ndog.update({'color': 'brown', 'age': 6})  # Update\nprint(dog.keys())  # Keys\n```"
        },
        {
            "question": "If Elephants Like Fancy Events",
            "answer": "I - If: Check if something is true\nE - Else: What to do if the condition is false\nL - Logic: Use conditions to make decisions\nF - Flow: Choose which code to run\nE - Elif: Add more conditions to check\n\n```\nage = 10\nif age > 12:\n    print('You are a teenager')\nelif age > 3:\n    print('You are a child')\nelse:\n    print('You are a toddler')\n```"
        },
        {
            "question": "Friendly Lions Follow Interesting Trails",
            "answer": "F - For Loop: Do something for each item\nL - Loop Variable: The current item in each round\nF - Flexible: Can work with different types of collections\nI - Iterate: Go through items one by one\nT - Through: Move through the entire collection\n\n```\nanimals = ['lion', 'tiger', 'bear']\nfor animal in animals:\n    print(f'{animal} is on the trail')\nfor i in range(3):\n    print(f'Step {i+1}')\n```"
        },
        {
            "question": "Wise Whales Watch While Waiting",
            "answer": "W - While Loop: Keep doing something while true\nW - Watch: Keep an eye on when to stop\nW - While Condition: Check before each repeat\nW - Waiting: Continue until the condition is false\n\n```\nfish = 5\nwhile fish > 0:\n    print(f'{fish} fish left')\n    fish -= 1\nprint('All fish are gone')\n```"
        },
        {
            "question": "Bees Can Pause Control Precisely",
            "answer": "B - Break: Stop the loop right away\nC - Continue: Skip to the next round\nP - Pass: Do nothing and move on\nC - Control: Manage how the loop works\nP - Precisely: Fine-tune the loop's behavior\n\n```\nfor flower in range(10):\n    if flower == 7:\n        break  # Stop the loop\n    if flower % 2 == 0:\n        continue  # Skip even numbers\n    if flower == 5:\n        pass  # Do nothing special\n    print(f'Bee visited flower {flower}')\n```"
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
            "question": "Abe's Ants Always Ask Anything",
            "answer": "abs(): Returns the absolute value of a number\naiter(): Returns an asynchronous iterator\nall(): Returns True if all elements in an iterable are true\nanext(): Retrieves the next item from an asynchronous iterator\nany(): Returns True if any element in an iterable is true\n\n```\nprint(abs(-5))  # Output: 5\n\nasync def async_gen():\n    yield 1\n    yield 2\n\nasync def main():\n    ait = aiter(async_gen())\n    print(await anext(ait))  # Output: 1\n\nimport asyncio\nasyncio.run(main())\n\nprint(all([True, True, False]))  # Output: False\nprint(any([False, True, False]))  # Output: True\n```"
        },
        {
            "question": "Astronauts Bake Bright Blue Biscuits",
            "answer": "ascii(): Returns a string with non-ASCII characters escaped\nbin(): Converts an integer to a binary string\nbool(): Converts a value to Boolean\nbreakpoint(): Enters the debugger at the call site\nbytearray(): Returns a mutable sequence of bytes\n\n```\nprint(ascii('Python©'))  # Output: 'Python\\xa9'\nprint(bin(10))  # Output: '0b1010'\nprint(bool(0))  # Output: False\n# breakpoint()  # Enters debugger when uncommented\nprint(bytearray('hello', 'utf-8'))  # Output: bytearray(b'hello')\n```"
        },
        {
            "question": "Busy Cats Can Catch Colorful Comets",
            "answer": "bytes(): Returns an immutable sequence of bytes\ncallable(): Checks if an object appears to be callable\nchr(): Returns a character from an integer code point\nclassmethod(): Transforms a method into a class method\ncompile(): Compiles source into a code or AST object\n\n```\nprint(bytes('hello', 'utf-8'))  # Output: b'hello'\nprint(callable(print))  # Output: True\nprint(chr(97))  # Output: 'a'\n\nclass MyClass:\n    @classmethod\n    def class_method(cls):\n        return \"I'm a class method\"\n\nprint(MyClass.class_method())  # Output: I'm a class method\n\ncode = compile('a = 5', '<string>', 'exec')\nexec(code)\nprint(a)  # Output: 5\n```"
        },
        {
            "question": "Clever Dogs Dig Deep Dirt Ditches",
            "answer": "complex(): Creates a complex number\ndelattr(): Deletes an attribute from an object\ndict(): Creates a dictionary\ndir(): Returns a list of valid attributes of an object\ndivmod(): Returns quotient and remainder of division\n\n```\nprint(complex(3, 4))  # Output: (3+4j)\n\nclass MyClass:\n    attr = 'value'\ndelattr(MyClass, 'attr')\nprint(hasattr(MyClass, 'attr'))  # Output: False\n\nprint(dict(a=1, b=2))  # Output: {'a': 1, 'b': 2}\nprint(dir([]))  # Output: ['__add__', '__class__', ...]\nprint(divmod(10, 3))  # Output: (3, 1)\n```"
        },
        {
            "question": "Eager Elephants Eat Every Fruity Fig",
            "answer": "enumerate(): Returns an enumerate object\neval(): Evaluates a Python expression\nexec(): Executes Python code dynamically\nfilter(): Constructs an iterator from elements that are true\nfloat(): Returns a floating point number\n\n```\nprint(list(enumerate(['a', 'b', 'c'])))  # Output: [(0, 'a'), (1, 'b'), (2, 'c')]\nprint(eval('2 + 2'))  # Output: 4\nexec('x = 10')\nprint(x)  # Output: 10\nprint(list(filter(lambda x: x > 5, [2, 4, 6, 8, 10])))  # Output: [6, 8, 10]\nprint(float('3.14'))  # Output: 3.14\n```"
        },
        {
            "question": "Funny Foxes Find Fresh Green Herbs",
            "answer": "format(): Formats a specified value\nfrozenset(): Returns an immutable set\ngetattr(): Returns the value of a named attribute of an object\nglobals(): Returns the current global symbol table as a dictionary\nhasattr(): Returns whether the object has an attribute with the given name\n\n```\nprint(format(0.5, '%'))  # Output: 50.000000%\nprint(frozenset([1, 2, 3, 1]))  # Output: frozenset({1, 2, 3})\n\nclass MyClass:\n    attr = 'value'\n\nprint(getattr(MyClass, 'attr'))  # Output: value\nprint(globals())  # Output: {...}\nprint(hasattr(MyClass, 'attr'))  # Output: True\n```"
        },
        {
            "question": "Happy Hippos Help Hungry Hyenas Instantly",
            "answer": "hash(): Returns the hash value of an object\nhelp(): Invokes the built-in help system\nhex(): Converts an integer to a hexadecimal string\nid(): Returns the identity of an object\ninput(): Reads a line from input, converts it to a string and returns it\n\n```\nprint(hash('python'))  # Output: 2230730083538390373 (may vary)\n# help(print)  # Displays help for print function\nprint(hex(255))  # Output: 0xff\nprint(id([]))  # Output: 140715651199752 (may vary)\n# name = input(\"Enter your name: \")\n# print(f\"Hello, {name}\")\n```"
        },
        {
            "question": "Intelligent Iguanas Invent Interesting Itchy Lotion",
            "answer": "int(): Returns an integer object constructed from a number or string\nisinstance(): Returns whether an object is an instance of a class or subclass thereof\nissubclass(): Returns whether a class is a subclass of another class\niter(): Returns an iterator object\nlen(): Returns the length (number of items) of an object\n\n```\nprint(int('100', 2))  # Output: 4\nprint(isinstance(5, int))  # Output: True\nprint(issubclass(bool, int))  # Output: True\nit = iter([1, 2, 3])\nprint(next(it))  # Output: 1\nprint(len([1, 2, 3]))  # Output: 3\n```"
        },
        {
            "question": "Little Lions Like Loud Monkey Music",
            "answer": "list(): Creates a list object\nlocals(): Returns a dictionary representing the current local symbol table\nmap(): Applies a function to all the items in an input list\nmax(): Returns the largest item in an iterable or the largest of two or more arguments\nmemoryview(): Returns a memory view object from a specified object\n\n```\nprint(list('python'))  # Output: ['p', 'y', 't', 'h', 'o', 'n']\nprint(locals())  # Output: {...}\nprint(list(map(lambda x: x**2, [1, 2, 3])))  # Output: [1, 4, 9]\nprint(max([1, 5, 3, 2]))  # Output: 5\nmv = memoryview(b'abc')\nprint(mv[0])  # Output: 97\n```"
        },
        {
            "question": "Merry Mice Never Open Old Ovens",
            "answer": "min(): Returns the smallest item in an iterable or the smallest of two or more arguments\nnext(): Retrieves the next item from the iterator\nobject(): Returns a new featureless object\noct(): Converts an integer to an octal string\nopen(): Opens a file and returns a file object\n\n```\nprint(min([1, 5, 3, 2]))  # Output: 1\nit = iter([1, 2, 3])\nprint(next(it))  # Output: 1\nprint(object())  # Output: <object object at 0x...>\nprint(oct(8))  # Output: 0o10\n# with open('file.txt', 'w') as f:\n#     f.write('Hello, World!')\n```"
        },
        {
            "question": "Odd Octopuses Often Paint Purple Rugs",
            "answer": "ord(): Returns an integer representing the Unicode code point of a character\npow(): Returns base to the power of exp; if mod is present, returns base to the power of exp, modulo mod\nprint(): Prints objects to the text stream file\nproperty(): Returns a property attribute\nrange(): Returns an immutable sequence type\n\n```\nprint(ord('A'))  # Output: 65\nprint(pow(2, 3))  # Output: 8\nprint(pow(2, 3, 5))  # Output: 3\nprint('Hello, World!')  # Output: Hello, World!\n\nclass Circle:\n    def __init__(self, radius):\n        self._radius = radius\n    \n    @property\n    def diameter(self):\n        return self._radius * 2\n\nc = Circle(5)\nprint(c.diameter)  # Output: 10\n\nprint(list(range(5)))  # Output: [0, 1, 2, 3, 4]\n```"
        },
        {
            "question": "Red Rabbits Rarely Ride Speedy Sleds",
            "answer": "repr(): Returns a string containing a printable representation of an object\nreversed(): Returns a reverse iterator\nround(): Returns a number rounded to ndigits precision after the decimal point\nset(): Returns a new set object\nsetattr(): Sets the value of the named attribute of an object\n\n```\nprint(repr('Hello'))  # Output: \"'Hello'\"\nprint(list(reversed([1, 2, 3])))  # Output: [3, 2, 1]\nprint(round(3.14159, 2))  # Output: 3.14\nprint(set([1, 2, 2, 3]))  # Output: {1, 2, 3}\n\nclass MyClass:\n    pass\n\nobj = MyClass()\nsetattr(obj, 'x', 5)\nprint(obj.x)  # Output: 5\n```"
        },
        {
            "question": "Silly Snakes Slide Straight South Sometimes",
            "answer": "slice(): Returns a slice object\nsorted(): Returns a new sorted list from the items in iterable\nstaticmethod(): Transforms a method into a static method\nstr(): Returns a string version of an object\nsum(): Sums start and the items of an iterable from left to right and returns the total\n\n```\ns = slice(1, 5, 2)\nprint([1, 2, 3, 4, 5][s])  # Output: [2, 4]\nprint(sorted([3, 1, 4, 1, 5, 9, 2]))  # Output: [1, 1, 2, 3, 4, 5, 9]\n\nclass MyClass:\n    @staticmethod\n    def static_method():\n        return \"I'm a static method\"\n\nprint(MyClass.static_method())  # Output: I'm a static method\n\nprint(str(123))  # Output: '123'\nprint(sum([1, 2, 3, 4, 5]))  # Output: 15\n```"
        },
        {
            "question": "Smart Turtles Try Various Zippy Zones",
            "answer": "super(): Returns a proxy object that delegates method calls to a parent or sibling class\ntuple(): Creates a tuple\ntype(): Returns the type of an object or creates a new type object\nvars(): Returns the __dict__ attribute for a module, class, instance, or any other object with a __dict__ attribute\nzip(): Creates an iterator of tuples where the i-th tuple contains the i-th element from each of the input iterables\n\n```\nclass Parent:\n    def greet(self):\n        return \"I'm the parent\"\n\nclass Child(Parent):\n    def greet(self):\n        return super().greet() + \" and I'm the child\"\n\nprint(Child().greet())  # Output: I'm the parent and I'm the child\n\nprint(tuple([1, 2, 3]))  # Output: (1, 2, 3)\nprint(type(5))  # Output: <class 'int'>\nprint(vars())  # Output: {...}\nprint(list(zip([1, 2, 3], ['a', 'b', 'c'])))  # Output: [(1, 'a'), (2, 'b'), (3, 'c')]\n```"
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
        {
            "question": "Cats, Horses, and Dogs Stack Splits Like Blocks Horizontally and Vertically",
            "answer": "C - np.concatenate(): Concatenates two or more arrays along an axis\nH - np.hstack(): Stacks arrays horizontally (column-wise)\nV - np.vstack(): Stacks arrays vertically (row-wise)\nD - np.dstack(): Stacks arrays along the depth (third dimension)\nS - np.split(): Splits an array into multiple sub-arrays\n\nExamples:\n```\nimport numpy as np\n\n# concatenate\narr1 = np.array([[1, 2], [3, 4]])\narr2 = np.array([[5, 6]])\nresult = np.concatenate((arr1, arr2), axis=0)\nprint(result)\n# Output:\n# [[1 2]\n#  [3 4]\n#  [5 6]]\n\n# hstack\narr1 = np.array([1, 2, 3])\narr2 = np.array([4, 5, 6])\nresult = np.hstack((arr1, arr2))\nprint(result)\n# Output: [1 2 3 4 5 6]\n\n# vstack\nresult = np.vstack((arr1, arr2))\nprint(result)\n# Output:\n# [[1 2 3]\n#  [4 5 6]]\n\n# dstack\narr1 = np.array([[1, 2], [3, 4]])\narr2 = np.array([[5, 6], [7, 8]])\nresult = np.dstack((arr1, arr2))\nprint(result)\n# Output:\n# [[[1 5]\n#   [2 6]]\n#  [[3 7]\n#   [4 8]]]\n\n# split\narr = np.array([1, 2, 3, 4, 5, 6])\nresult = np.split(arr, 3)\nprint(result)\n# Output: [array([1, 2]), array([3, 4]), array([5, 6])]\n```"
        },
        {
            "question": "Splitting Arrays Brings Horizontal and Vertical Joy",
            "answer": "S - np.array_split(): Splits an array into multiple sub-arrays, even if they don't divide evenly\nB - np.block(): Assembles arrays from blocks\nH - np.hsplit(): Splits an array horizontally\nV - np.vsplit(): Splits an array vertically\n\nExamples:\n```\n# array_split\narr = np.array([1, 2, 3, 4, 5, 6])\nresult = np.array_split(arr, 4)\nprint(result)\n# Output: [array([1, 2]), array([3, 4]), array([5]), array([6])]\n\n# block\narr = np.block([[np.eye(2), np.ones((2, 2))], [np.zeros((2, 2)), np.eye(2)]])\nprint(arr)\n# Output:\n# [[1. 0. 1. 1.]\n#  [0. 1. 1. 1.]\n#  [0. 0. 1. 0.]\n#  [0. 0. 0. 1.]]\n\n# hsplit\narr = np.array([[1, 2, 3], [4, 5, 6]])\nresult = np.hsplit(arr, 3)\nprint(result)\n# Output: [array([[1], [4]]), array([[2], [5]]), array([[3], [6]])]\n\n# vsplit\nresult = np.vsplit(arr, 2)\nprint(result)\n# Output: [array([[1, 2, 3]]), array([[4, 5, 6]])]\n```"
        },
        {
            "question": "Masked Arrays Hide Filled Masks",
            "answer": "M - np.ma.masked_array(): Creates a masked array, where some elements are 'masked' (ignored) in computations\nM - np.ma.masked_where(): Masks elements where a condition is met\nF - np.ma.filled(): Fills the masked elements of an array with a specified value\n\nExamples:\n```\n# masked_array\narr = np.ma.masked_array([1, 2, 3], mask=[0, 1, 0])\nprint(arr)\n# Output: [1 -- 3]\n\n# masked_where\narr = np.ma.masked_where([1, 2, 3] > 2, [1, 2, 3])\nprint(arr)\n# Output: [1 2 --]\n\n# filled\narr = np.ma.masked_array([1, 2, 3], mask=[0, 1, 0])\nfilled_arr = np.ma.filled(arr, 0)\nprint(filled_arr)\n# Output: [1 0 3]\n```"
        },
        {
            "question": "Matrix Blocks Stack Norms Conditionally",
            "answer": "M - np.matrix(): Creates a matrix (specifically for linear algebra operations)\nB - np.bmat(): Builds a matrix from blocks\nN - np.linalg.norm(): Computes the matrix or vector norm\nC - np.linalg.cond(): Computes the condition number of a matrix\n\nExamples:\n```\n# matrix\nmat = np.matrix([[1, 2], [3, 4]])\nprint(mat)\n# Output:\n# [[1 2]\n#  [3 4]]\n\n# bmat\nmat = np.bmat([[np.eye(2), np.ones((2, 2))], [np.zeros((2, 2)), np.eye(2)]])\nprint(mat)\n# Output:\n# [[1. 0. 1. 1.]\n#  [0. 1. 1. 1.]\n#  [0. 0. 1. 0.]\n#  [0. 0. 0. 1.]]\n\n# linalg.norm\nvec = np.array([1, 2, 3])\nnorm = np.linalg.norm(vec)\nprint(norm)\n# Output: 3.7416573867739413\n\n# linalg.cond\nmat = np.array([[1, 2], [3, 4]])\ncond = np.linalg.cond(mat)\nprint(cond)\n# Output: 14.933034373659268\n```"
        },
        {
            "question": "Exponential Bins Produce Gamma",
            "answer": "E - np.random.exponential(): Generates samples from an exponential distribution\nB - np.random.binomial(): Generates samples from a binomial distribution\nP - np.random.poisson(): Generates samples from a Poisson distribution\nG - np.random.gamma(): Generates samples from a Gamma distribution\n\nExamples:\n```\n# exponential\nresult = np.random.exponential(scale=1.0, size=5)\nprint(result)\n# Output (may vary): [0.46926809 0.18079793 0.01348917 1.15150672 0.63921859]\n\n# binomial\nresult = np.random.binomial(n=10, p=0.5, size=5)\nprint(result)\n# Output (may vary): [5 6 7 4 5]\n\n# poisson\nresult = np.random.poisson(lam=3.0, size=5)\nprint(result)\n# Output (may vary): [2 3 4 2 1]\n\n# gamma\nresult = np.random.gamma(shape=2.0, scale=1.0, size=5)\nprint(result)\n# Output (may vary): [3.15185544 1.91291971 1.00879354 1.72083958 3.25185009]\n```"
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