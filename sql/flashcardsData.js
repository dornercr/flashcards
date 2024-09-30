const topicTitles = {
  basic_sql: "Basic SQL",
  //systemManagementFHS: "1.0 System Management: Filesystem Hierarchy Standard(FHS)",
  //advancedSSH : "Advanced SSH",
  //Chapter1_BasicCommands: "Chapter 1 Commands:",
  //Chapter2_AdvancedCommands: "Advanced Commands",
  //Chapter3_SystemAdministration: "System Administration",
  //Chapter4_NetworkAdministration: "Network Administration",
  //systemManagement: "1.0 System Management"


};

const flashcardsData = {
  basic_sql: [
      {
          "question": "Basic Queries: Smart Whales Gather Healthy Oranges",
          "answer": "S - Select: Retrieve specific columns from a table\nW - Where: Filter rows based on a condition\nG - Group: Group rows sharing a common attribute\nH - Having: Filter groups based on aggregate conditions\nO - Order: Sort the result set by specific columns\n\n```\nSELECT name, age FROM users;\nSELECT * FROM users WHERE age > 30;\nSELECT department, COUNT(*) FROM employees GROUP BY department;\nSELECT department, COUNT(*) FROM employees GROUP BY department HAVING COUNT(*) > 5;\nSELECT name, salary FROM employees ORDER BY salary DESC;\n```"
      },
      {
          "question": "Data Modification: Unicorns In Deserted Spaces",
          "answer": "U - Update: Modify existing records\nI - Insert: Add new records to a table\nD - Delete: Remove records based on a condition\nS - Select for Insertion: Insert data from another query\n\n```\nUPDATE users SET age = age + 1 WHERE id = 5;\nINSERT INTO users (name, age) VALUES ('John', 25);\nDELETE FROM users WHERE id = 5;\nINSERT INTO employees (name, department) SELECT name, department FROM candidates WHERE status = 'hired';\n```"
      },
      {
          "question": "Views: Cats View Everything",
          "answer": "C - Create View: Create a virtual table based on a query\nV - View: Create an easy-to-use reference to complex queries\nE - Everything: Access data using a virtual table\n\n```\nCREATE VIEW active_users AS SELECT name, status FROM users WHERE status = 'active';\n```"
      },
      {
          "question": "JOINS: Lions In Rivers",
          "answer": "L - Left Outer Join: Include all rows from the left table, and matched rows from the right\nI - Inner Join: Return only matching rows from both tables\nR - Right Outer Join: Include all rows from the right table, and matched rows from the left\n\n```\nSELECT users.name, orders.order_date FROM users LEFT JOIN orders ON users.id = orders.user_id;\nSELECT employees.name, departments.dept_name FROM employees INNER JOIN departments ON employees.dept_id = departments.id;\nSELECT users.name, orders.order_date FROM users RIGHT JOIN orders ON users.id = orders.user_id;\n```"
      },
      {
          "question": "Indexes: Iguanas Index Quickly",
          "answer": "I - Index: Create a data structure to optimize query speed\nQ - Quickly: Indexes improve the performance of queries on large tables\n\n```\nCREATE INDEX idx_users_age ON users (age);\n```"
      },
      {
          "question": "Updates on Joined Queries: Update Joints Everywhere",
          "answer": "U - Update with Join: Modify records using conditions from a joined table\nJ - Join: Joins enable updating records based on related data in other tables\nE - Everywhere: Update multiple records across tables\n\n```\nUPDATE employees e SET e.salary = e.salary * 1.1 FROM employees e JOIN departments d ON e.department_id = d.id WHERE d.dept_name = 'HR';\n```"
      },
      {
          "question": "Semi Joins: Squirrels Jog Gracefully",
          "answer": "S - Semi Join: Filter rows based on values from another query\nJ - Join: Semi-joins allow data filtering using subqueries\nG - Gracefully: Efficiently match subsets of data without a full join\n\n```\nSELECT name FROM employees WHERE department_id IN (SELECT id FROM departments WHERE budget > 100000);\n```"
      },
      {
          "question": "Useful Utility Functions: Tigers Collect Current Information",
          "answer": "T - TO_DATE: Convert strings to date format\nC - COALESCE: Return the first non-NULL value\nC - CURRENT_TIMESTAMP: Get the current date and time\nI - Union: Combine results from two queries\n\n```\nSELECT TO_DATE('2023-01-01', 'YYYY-MM-DD');\nSELECT COALESCE(NULL, 'default', 'fallback');\nSELECT CURRENT_TIMESTAMP;\nSELECT name FROM users UNION SELECT name FROM employees;\n```"
      },
      {
          "question": "Reporting & Aggregation Functions: Count Sheep At Midnight",
          "answer": "C - COUNT: Count the number of rows\nS - SUM: Add up numeric values\nA - AVG: Calculate the average value\nM - MIN / MAX: Find the smallest or largest value\n\n```\nSELECT COUNT(*) FROM users;\nSELECT SUM(salary) FROM employees;\nSELECT AVG(salary) FROM employees;\nSELECT MIN(salary), MAX(salary) FROM employees;\n```"
      },
      {
          "question": "Subqueries: Seagulls Underneath Quiet Boats",
          "answer": "S - Subquery: A query nested inside another query\nU - Underneath: Subqueries are executed before the main query\nQ - Quiet: Subqueries don’t interfere with the main query's flow\nB - Boats: Subqueries provide data for the outer query\n\n```\nSELECT name FROM users WHERE age > (SELECT AVG(age) FROM users);\n```"
      },
      {
          "question": "CASE Statements: Cats Are Super Elegant",
          "answer": "C - CASE: A conditional expression that returns values based on conditions\nA - Are: Acts like an if-else structure in SQL\nS - Super: Simplifies multiple conditions\nE - Elegant: Allows clear logic flow in SQL queries\n\n```\nSELECT name, salary, CASE WHEN salary > 50000 THEN 'High' ELSE 'Low' END AS salary_range FROM employees;\n```"
      },
      {
          "question": "Window Functions: Windows Show Bright Views",
          "answer": "W - Window: Perform calculations across rows related to the current row\nS - Show: Useful for ranking, cumulative sums, and moving averages\nB - Bright: Brightens up data analytics with insightful calculations\nV - Views: Helps to view trends within partitioned data\n\n```\nSELECT name, salary, RANK() OVER (ORDER BY salary DESC) AS rank FROM employees;\n```"
      },
      {
          "question": "CTEs (Common Table Expressions): Cats Travel Everywhere",
          "answer": "C - CTE: Temporary result sets that simplify complex queries\nT - Travel: Data is traveled across different query sections\nE - Everywhere: CTEs can be referenced multiple times within the query\n\n```\nWITH AvgSalaries AS (SELECT department, AVG(salary) AS avg_salary FROM employees GROUP BY department) SELECT * FROM AvgSalaries;\n```"
      },
      {
          "question": "UNION and UNION ALL: Unicorns And Alligators Unite",
          "answer": "U - UNION: Combine results from two queries, removing duplicates\nA - ALL: UNION ALL keeps all duplicates in the result\nU - Unite: Combines multiple result sets into one\n\n```\nSELECT name FROM users UNION SELECT name FROM employees;\nSELECT name FROM users UNION ALL SELECT name FROM employees;\n```"
      },
      {
          "question": "Aggregate Functions: Apples Give Sum Total",
          "answer": "A - AVG: Calculate the average of a set of values\nG - GROUP: Aggregate functions often work with GROUP BY\nS - SUM: Add up numeric values\nT - Total: Use aggregation to calculate totals, averages, counts\n\n```\nSELECT department, AVG(salary), SUM(salary) FROM employees GROUP BY department;\n```"
      },
      {
          "question": "Distinct: Dolphins In Swift Tides",
          "answer": "D - DISTINCT: Remove duplicates from the result set\nS - Swift: Helps in getting unique records quickly\nT - Tides: Keeps only the unique tides of data\n\n```\nSELECT DISTINCT department FROM employees;\n```"
      },
      {
          "question": "Self Joins: Same Elephants Fly",
          "answer": "S - Self: A join where a table is joined with itself\nE - Elephants: Useful for hierarchical data like employees and managers\nF - Fly: Data points are linked from the same table\n\n```\nSELECT e1.name, e2.name AS manager FROM employees e1 JOIN employees e2 ON e1.manager_id = e2.id;\n```"
      },
      {
          "question": "COALESCE Function: Cats Organize Alternate Loops Efficiently",
          "answer": "C - COALESCE: Returns the first non-null value in the list of expressions\nO - Organize: Organizes potential null values\nA - Alternate: Provides alternate values in case of NULLs\nL - Loops: Helps in efficient NULL value handling\nE - Efficiently: Efficiently handles missing data\n\n```\nSELECT COALESCE(NULL, 'default', 'fallback');\n```"
      },
      {
          "question": "EXISTS and NOT EXISTS: Elephants Navigate Swiftly",
          "answer": "E - EXISTS: Returns true if the subquery returns any rows\nN - NOT EXISTS: Returns true if the subquery returns no rows\nS - Swiftly: Efficient for testing existence of rows\n\n```\nSELECT name FROM employees WHERE EXISTS (SELECT 1 FROM departments WHERE employees.dept_id = departments.id);\nSELECT name FROM employees WHERE NOT EXISTS (SELECT 1 FROM departments WHERE employees.dept_id = departments.id);\n```"
      }

  ],

  advancedSSH: [
    {
      question: "What are the main SSH authentication methods?",
      answer: "The main SSH authentication methods are:\n\n1. Password: Basic method using username and password.\n2. SSH Key Pair: Asymmetric encryption with private key (source) and public key (target).\n3. Certificates: Provide additional security and ease of management.\n4. MFA (Multi-Factor Authentication): Combining multiple forms of authentication for better security."
    },
    {
      question: "Explain SSH Key Pairs and provide commands for key management.",
      answer: "SSH Key Pairs consist of:\n\n- Private Key: Stays on the source machine.\n- Public Key: Distributed to target machines for authentication.\n- Login Process: The private key encrypts a secret, which the target verifies using the public key.\n\nKey management commands:\n```\n# Generate RSA key pair\nssh-keygen -t rsa\n\n# Copy public key to target machine\nssh-copy-id -i ~/.ssh/id_rsa.pub user@target-host\n\n# Login using private key\nssh -i ~/.ssh/id_rsa user@target-host\n```"
    },
    {
      question: "What is SSH Local Port Forwarding and how is it used?",
      answer: "SSH Local Port Forwarding (-L) redirects local port traffic to a remote server.\n\nCommand syntax:\n```\nssh -L local-port:target-host:target-port user@remote-host\n```\n\nExample:\n```\nssh -L 8080:10.0.2.15:8000 user@fedoravm\n```\nThis forwards traffic from local port 8080 to remote server on port 8000."
    },
    {
      question: "Explain SSH Reverse Port Forwarding and provide an example.",
      answer: "SSH Reverse Port Forwarding (-R) allows a remote server to access local resources.\n\nCommand syntax:\n```\nssh -R remote-port:local-host:local-port user@remote-host\n```\n\nExample:\n```\nssh -R 8080:10.0.2.15:8000 user@laptop\n```\nThis allows access to local resources from the remote host."
    },
    {
      question: "How do you set up a SOCKS5 proxy using SSH?",
      answer: "SOCKS5 proxy allows tunneling all traffic through the SSH server.\n\nCommand to create a SOCKS5 proxy:\n```\nssh -D local-port user@remote-host\n```\n\nExample:\n```\nssh -D 3128 user@fedoravm\n```\nThis creates a SOCKS5 proxy on local port 3128.\n\nTo browse through the proxy:\n```\ncurl --preproxy http://localhost:3128 http://target-site\n```"
    },
    {
      question: "What is X11 Tunneling in SSH and how is it used?",
      answer: "X11 Tunneling is used for forwarding graphical applications from a remote server to the local system.\n\nCommand:\n```\nssh -Y user@remote-host \"xclock\"\n```\n\nNote: Ensure you have an X11 server running (e.g., XQuartz on macOS or XMing on Windows)."
    },
    {
      question: "How do you use ssh-agent for key management?",
      answer: "ssh-agent holds private keys, enabling passwordless authentication.\n\nCommands:\n```\n# Start the agent\neval $(ssh-agent)\n\n# Add private key to the agent\nssh-add ~/.ssh/id_rsa\n```\n\nAfter this, SSH will use the key stored in the agent without asking for a password on each login."
    },
    {
      question: "How can you restrict SSH access to specific user groups?",
      answer: "To restrict SSH access to specific user groups (e.g., 'sshusers'):\n\n1. Edit sshd_config to allow only the 'sshusers' group.\n2. Add your user to the 'sshusers' group.\n3. Restart the SSH daemon and test that other users cannot log in.\n\nNote: Specific commands may vary depending on the system."
    },
    {
      question: "How can you use SSH as a proxy for Nmap port scanning?",
      answer: "You can use SSH as a proxy for Nmap port scanning using Proxychains and a SOCKS5 proxy.\n\nSteps:\n1. Open a SOCKS5 proxy using SSH:\n```\nssh -D 3128 user@remote-host\n```\n\n2. Configure proxychains to use SOCKS5:\n```\nsocks5 localhost 3128\n```\n\n3. Run an Nmap scan through the proxy:\n```\nproxychains nmap -Pn -p 8000 -sT target-IP\n```"
    },
    {
      question: "What are the components of an SSH key pair and where are they stored?",
      answer: "An SSH key pair consists of two components:\n\n1. Private Key: This is kept on the source machine (the machine you're logging in from). It should be kept secret and secure.\n\n2. Public Key: This is distributed to target machines where you want to log in. It's typically stored in the ~/.ssh/authorized_keys file on the target machine.\n\nOn the source machine, by default:\n- The private key is stored as ~/.ssh/id_rsa\n- The public key is stored as ~/.ssh/id_rsa.pub\n\nThe public key can be safely shared, while the private key should never be shared or transferred to other machines."
    }

  ],

  systemManagementFHS: [
    { 
      question: "What is /boot used for?", 
      answer: "Contains static files for booting, including:\n- Linux kernel\n- Initial RAM disk (initrd)\n- Bootloader config (e.g., GRUB)\n\nLinux+ key point: Critical for system boot process\n\nExample command:\n```\nls /boot\n```"
    },
    { 
      question: "What is /proc used for?", 
      answer: "Virtual filesystem providing process and kernel information as files. Contains:\n- Runtime system information\n- Process details\n\nLinux+ key point: Used for system monitoring and debugging\n\nExample commands:\n```\ncat /proc/cpuinfo\nps aux\n```"
    },
    { 
      question: "What is /sys used for?", 
      answer: "Virtual filesystem exposing kernel's view of hardware and system information.\n\nLinux+ key point: Useful for hardware information and management\n\nExample commands:\n```\nls /sys/block\ncat /sys/class/net/eth0/address\n```"
    },
    { 
      question: "What is /var used for?", 
      answer: "Contains variable data including:\n- Logs (/var/log)\n- Spool files (/var/spool)\n- Temporary files (/var/tmp)\n- Cache data (/var/cache)\n\nLinux+ key point: Important for system administration and troubleshooting\n\nExample commands:\n```\nls /var/log\ntail -f /var/log/syslog\n```"
    },
    { 
      question: "What is /usr used for?", 
      answer: "Secondary hierarchy for read-only user data. Contains:\n- User binaries (/usr/bin)\n- System binaries (/usr/sbin)\n- Libraries (/usr/lib)\n- Documentation (/usr/share/doc)\n\nLinux+ key point: Main location for installed software\n\nExample command:\n```\nls /usr/bin\n```"
    },
    { 
      question: "What is /lib used for?", 
      answer: "Contains shared libraries and kernel modules. May include:\n- /lib (32-bit libraries)\n- /lib64 (64-bit libraries)\n\nLinux+ key point: Critical for system and application functionality\n\nExample commands:\n```\nls /lib\nldd /bin/ls\n```"
    },
    { 
      question: "What is /dev used for?", 
      answer: "Contains device files for hardware access. Includes:\n- Block devices (e.g., /dev/sda)\n- Character devices (e.g., /dev/tty)\n\nLinux+ key point: Essential for hardware interaction\n\nExample commands:\n```\nls -l /dev\nfile /dev/sda\n```"
    },
    { 
      question: "What is /etc used for?", 
      answer: "Contains system-wide configuration files. Key files:\n- /etc/passwd (user accounts)\n- /etc/fstab (filesystem mounts)\n- /etc/ssh/sshd_config (SSH server config)\n\nLinux+ key point: Critical for system configuration\n\nExample command:\n```\nls /etc\n```"
    },
    { 
      question: "What is /opt used for?", 
      answer: "Contains optional software packages. Used for:\n- Third-party applications\n- Self-contained software packages\n\nLinux+ key point: Common location for manually installed software\n\nExample command:\n```\nls /opt\n```"
    },
    { 
      question: "What is /bin used for?", 
      answer: "Contains essential command binaries. Includes:\n- Basic system commands (ls, cp, mv)\n- Shell interpreters (bash, sh)\n\nLinux+ key point: Critical for basic system functionality\n\nExample command:\n```\nls /bin\n```"
    },
    { 
      question: "What is /sbin used for?", 
      answer: "Contains system binaries (administrative commands). Includes:\n- System management tools (fdisk, ifconfig)\n- System initialization scripts\n\nLinux+ key point: Used for system administration tasks\n\nExample command:\n```\nls /sbin\n```"
    },
    { 
      question: "What is /home used for?", 
      answer: "Contains user home directories. Stores:\n- User-specific files and configs\n- User data and documents\n\nLinux+ key point: Main location for user data\n\nExample commands:\n```\nls /home\necho $HOME\n```"
    },
    { 
      question: "What is /media used for?", 
      answer: "Contains mount points for removable media. Used for:\n- USB drives\n- CD/DVD drives\n\nLinux+ key point: Automatic mounting location for removable devices\n\nExample command:\n```\nls /media\n```"
    },
    { 
      question: "What is /mnt used for?", 
      answer: "Temporary mount points. Used for:\n- Manually mounted filesystems\n- Network shares\n\nLinux+ key point: Common location for manually mounted filesystems\n\nExample commands:\n```\nls /mnt\nmount /dev/sdb1 /mnt\n```"
    },
    { 
      question: "What is /root used for?", 
      answer: "Home directory for the root user. Contains:\n- Root user's personal files and configs\n\nLinux+ key point: Separate from /home for security reasons\n\nExample command:\n```\nls -la /root\n```"
    },
    { 
      question: "What is /tmp used for?", 
      answer: "Contains temporary files. Features:\n- Cleared on reboot\n- World-writable\n\nLinux+ key point: Used for temporary storage by applications and users\n\nExample commands:\n```\nls /tmp\nmktemp -d\n```"
    }
  ],

  advancedSSH: [
    {
      question: "What are the main SSH authentication methods?",
      answer: "The main SSH authentication methods are:\n\n1. Password: Basic method using username and password.\n2. SSH Key Pair: Asymmetric encryption with private key (source) and public key (target).\n3. Certificates: Provide additional security and ease of management.\n4. MFA (Multi-Factor Authentication): Combining multiple forms of authentication for better security."
    },
    {
      question: "Explain SSH Key Pairs and provide commands for key management.",
      answer: "SSH Key Pairs consist of:\n\n- Private Key: Stays on the source machine.\n- Public Key: Distributed to target machines for authentication.\n- Login Process: The private key encrypts a secret, which the target verifies using the public key.\n\nKey management commands:\n```\n# Generate RSA key pair\nssh-keygen -t rsa\n\n# Copy public key to target machine\nssh-copy-id -i ~/.ssh/id_rsa.pub user@target-host\n\n# Login using private key\nssh -i ~/.ssh/id_rsa user@target-host\n```"
    },
    {
      question: "What is SSH Local Port Forwarding and how is it used?",
      answer: "SSH Local Port Forwarding (-L) redirects local port traffic to a remote server.\n\nCommand syntax:\n```\nssh -L local-port:target-host:target-port user@remote-host\n```\n\nExample:\n```\nssh -L 8080:10.0.2.15:8000 user@fedoravm\n```\nThis forwards traffic from local port 8080 to remote server on port 8000."
    },
    {
      question: "Explain SSH Reverse Port Forwarding and provide an example.",
      answer: "SSH Reverse Port Forwarding (-R) allows a remote server to access local resources.\n\nCommand syntax:\n```\nssh -R remote-port:local-host:local-port user@remote-host\n```\n\nExample:\n```\nssh -R 8080:10.0.2.15:8000 user@laptop\n```\nThis allows access to local resources from the remote host."
    },
    {
      question: "How do you set up a SOCKS5 proxy using SSH?",
      answer: "SOCKS5 proxy allows tunneling all traffic through the SSH server.\n\nCommand to create a SOCKS5 proxy:\n```\nssh -D local-port user@remote-host\n```\n\nExample:\n```\nssh -D 3128 user@fedoravm\n```\nThis creates a SOCKS5 proxy on local port 3128.\n\nTo browse through the proxy:\n```\ncurl --preproxy http://localhost:3128 http://target-site\n```"
    },
    {
      question: "What is X11 Tunneling in SSH and how is it used?",
      answer: "X11 Tunneling is used for forwarding graphical applications from a remote server to the local system.\n\nCommand:\n```\nssh -Y user@remote-host \"xclock\"\n```\n\nNote: Ensure you have an X11 server running (e.g., XQuartz on macOS or XMing on Windows)."
    },
    {
      question: "How do you use ssh-agent for key management?",
      answer: "ssh-agent holds private keys, enabling passwordless authentication.\n\nCommands:\n```\n# Start the agent\neval $(ssh-agent)\n\n# Add private key to the agent\nssh-add ~/.ssh/id_rsa\n```\n\nAfter this, SSH will use the key stored in the agent without asking for a password on each login."
    },
    {
      question: "How can you restrict SSH access to specific user groups?",
      answer: "To restrict SSH access to specific user groups (e.g., 'sshusers'):\n\n1. Edit sshd_config to allow only the 'sshusers' group.\n2. Add your user to the 'sshusers' group.\n3. Restart the SSH daemon and test that other users cannot log in.\n\nNote: Specific commands may vary depending on the system."
    },
    {
      question: "How can you use SSH as a proxy for Nmap port scanning?",
      answer: "You can use SSH as a proxy for Nmap port scanning using Proxychains and a SOCKS5 proxy.\n\nSteps:\n1. Open a SOCKS5 proxy using SSH:\n```\nssh -D 3128 user@remote-host\n```\n\n2. Configure proxychains to use SOCKS5:\n```\nsocks5 localhost 3128\n```\n\n3. Run an Nmap scan through the proxy:\n```\nproxychains nmap -Pn -p 8000 -sT target-IP\n```"
    },
    {
      question: "What are the components of an SSH key pair and where are they stored?",
      answer: "An SSH key pair consists of two components:\n\n1. Private Key: This is kept on the source machine (the machine you're logging in from). It should be kept secret and secure.\n\n2. Public Key: This is distributed to target machines where you want to log in. It's typically stored in the ~/.ssh/authorized_keys file on the target machine.\n\nOn the source machine, by default:\n- The private key is stored as ~/.ssh/id_rsa\n- The public key is stored as ~/.ssh/id_rsa.pub\n\nThe public key can be safely shared, while the private key should never be shared or transferred to other machines."}
  ],
  Chapter1_BasicCommands: [
      { question: "Look Carefully, Paths Can Mislead.", answer: "ls - list directory contents\ncd - change directories\npwd - print working directory\ncp - copy files\nmv - move or rename files" },
      { question: "Remember, Making Room Takes Care.", answer: "rm - remove files\nmkdir - make directory\nrmdir - remove directory\ntouch - create/update file\ncat - concatenate and display content" },

      { question: "Everyone Finds Good Changes Critical.", answer: "echo - display text\nfind - search for files\ngrep - search within files\nchmod - change file permissions\nchown - change file ownership" },

      { question: "Disk Data Tracking Prevents Kills.", answer: "df - check available disk space\ndu - check directory space usage\ntop - monitor system processes\nps - list running processes\nkill - terminate processes" },

      { question: "Please Wait Carefully To Get.", answer: "ping - test connectivity\nwget - download files from the web\ncurl - transfer data between servers\ntar - archive files\ngzip - compress files" },

      { question: "Secure Servers Need All Manuals.", answer: "ssh - connect to a remote machine\nscp - securely copy files between hosts\nnano - edit files from the command line\napt-get - manage packages\nman - view command manuals" },

      { question: "Happy Times Let Me Smile.", answer: "head - display the beginning of a file\ntail - display the end of a file\nless - view file content in pages\nmore - similar to less, but simpler\nsort - sort file content" },

      { question: "Unique Data Will Take Care.", answer: "uniq - filter repeated lines\ndiff - compare files\nwc - count words/lines\ntee - duplicate output\ncut - remove sections from files" },

      { question: "Always Split Xtra Tasks Smartly.", answer: "awk - process text patterns\nsed - stream editor\nxargs - execute commands from input\ntr - translate/delete characters\nsplit - divide files into pieces" },

      { question: "Aliases Usually Help Clear Uptime.", answer: "alias - shortcut commands\nunalias - remove aliases\nhistory - show command history\nclear - clear the terminal\nuptime - display system uptime" },

      { question: "Disk Data Flows Very Importantly.", answer: "df - check disk space\ndu - check directory usage\nfree - check memory usage\nvmstat - check virtual memory stats\niostat - check CPU and I/O stats" },

      { question: "Look Network Settings Inside IP.", answer: "lsof - list open files\nnetstat - view network connections\nss - view socket statistics\nifconfig - configure/view network interfaces\nip - manage IP addresses" }
      ],
  Chapter2_AdvancedCommands: [
      { question: "Find Files Fast.", answer: "locate - quickly find files by name\nupdatedb - update the locate database\nwhich - locate a command\nwhereis - locate the binary, source, and manual page files for a command" },
      { question: "Users Use Useful Utilities.", answer: "useradd - create a new user\nusermod - modify a user account\nuserdel - delete a user account\npasswd - change user password\nsu - switch user" },

      { question: "Groups Gather Good Guys.", answer: "groupadd - create a new group\ngroupmod - modify a group\ngroupdel - delete a group\ngpasswd - administer the /etc/group file\nnewgrp - log in to a new group" },

      { question: "Processes Perform Proactively.", answer: "nice - run a program with modified scheduling priority\nrenice - alter priority of running processes\nnohup - run a command immune to hangups\ntimeout - run a command with a time limit\nwatch - execute a program periodically, showing output fullscreen" },

      { question: "Timely Tasks Triumph.", answer: "at - execute commands at a specified time\nbatch - execute commands when system load levels permit\ncrontab - schedule periodic background work\nsleep - delay for a specified amount of time\nwait - wait for a process to complete" },

      { question: "Shells Shape Sharply.", answer: "bash - GNU Bourne-Again SHell\nzsh - the Z shell\nfish - friendly interactive shell\ntcsh - TENEX C Shell\nksh - KornShell" },

      { question: "Networking Needs Neat Notions.", answer: "ifconfig - configure a network interface\nroute - show / manipulate the IP routing table\niptables - administration tool for IPv4 packet filtering and NAT\ndhclient - Dynamic Host Configuration Protocol Client\nhost - DNS lookup utility" },

      { question: "Securing Systems Saves Situations.", answer: "sudo - execute a command as another user\nsu - change user ID or become superuser\nchroot - run command or interactive shell with special root directory\nufw - program for managing a netfilter firewall\nfail2ban - ban hosts that cause multiple authentication errors" },

      { question: "Logs Let Learning Last.", answer: "journalctl - query the systemd journal\nlogrotate - rotates, compresses, and mails system logs\ntail -f - output appended data as the file grows\ndmesg - print or control the kernel ring buffer\nzcat - view compressed log files" },

      { question: "Backups Bring Better Behavior.", answer: "rsync - a fast, versatile, remote (and local) file-copying tool\ndd - convert and copy a file\ntar - an archiving utility\nzip - package and compress (archive) files\nunzip - list, test and extract compressed files in a ZIP archive" },

      { question: "Disks Demand Diligent Dealings.", answer: "fdisk - manipulate disk partition table\nmkfs - build a Linux filesystem\nmount - mount a filesystem\numount - unmount file systems\nfsck - check and repair a Linux filesystem" },

      { question: "Virtual Varieties Validate Ventures.", answer: "docker - manage Docker containers\nvagrant - manage lightweight, reproducible, and portable development environments\nvirtualbox - x86 virtualization\nqemu - generic machine emulator and virtualizer\nlxc - Linux Containers" }
      ],
  Chapter3_SystemAdministration: [
      { question: "Package Managers Provide Powerful Provisions.", answer: "apt - high-level package management command-line utility\ndpkg - package manager for Debian\nyum - Yellowdog Updater Modified (package manager)\nrpm - RPM Package Manager\nsnap - tool to interact with snappy, a package management system" },
      { question: "Services Start Systematically.", answer: "systemctl - control the systemd system and service manager\nservice - run a System V init script\nupdate-rc.d - install and remove System-V style init script links\nchkconfig - system services (runlevel)\ninit - process control initialization" },

      { question: "Hardware Handling Helps Harmony.", answer: "lshw - list hardware\nlspci - list all PCI devices\nlsusb - list USB devices\nlsblk - list block devices\nudevadm - udev management tool" },

      { question: "Memory Manages Many Mysteries.", answer: "free - display amount of free and used memory in the system\ntop - display Linux processes\nhtop - interactive process viewer\nsar - collect, report, or save system activity information\nvmstat - Report virtual memory statistics" },

      { question: "Scheduling Saves Significant Seconds.", answer: "cron - daemon to execute scheduled commands\nanacron - run commands periodically\nsystemd-timer - systemd timer unit configuration\nfcron - periodically run user scripts\nat - execute commands at a specified time" },

      { question: "Kernel Keeps Keen Knowledge.", answer: "uname - print system information\nmodprobe - add and remove modules from the Linux Kernel\nlsmod - show the status of modules in the Linux Kernel\ndmesg - print or control the kernel ring buffer\nsysctl - configure kernel parameters at runtime" },

      { question: "Auditing Assures Accurate Accounts.", answer: "auditd - Linux Audit daemon\nauditctl - utility to assist controlling the kernel's audit system\nauditreport - a tool that produces reports based on audit logs\naudit2allow - generate SELinux policy allow rules from logs of denied operations\naudit2why - translate SELinux audit messages into a description of why the access was denied" },

      { question: "Firewalls Fortify Fragile Frameworks.", answer: "iptables - administration tool for IPv4/IPv6 packet filtering and NAT\nufw - program for managing a netfilter firewall\nfirewalld - dynamically managed firewall with support for network/firewall zones\nnftables - the successor to iptables, a packet filtering framework\npf - OpenBSD's packet filter" },

      { question: "Monitoring Makes Meticulous Management.", answer: "nagios - host/service/network monitoring program\nzabbix - Enterprise-class Monitoring Solution for Everyone\nprometheus - monitoring system and time series database\ngrafana - analytics and interactive visualization web application\ncacti - complete network graphing solution" },

      { question: "Syslog Secures System Stories.", answer: "rsyslog - reliable and extended syslogd\nsyslog-ng - next-generation system logging daemon\njournalctl - Query the systemd journal\nlogwatch - log analyzer and reporter\nlogrotate - rotates, compresses, and mails system logs" },

      { question: "Time Ticks Tirelessly Through.", answer: "ntpd - Network Time Protocol (NTP) daemon\nchronyd - chrony NTP daemon\ntimedatectl - control the system time and date\ndate - print or set the system date and time\nhwclock - query or set the hardware clock (RTC)" },

      { question: "DNS Delivers Dependable Directions.", answer: "bind - Berkeley Internet Name Domain server\ndnsmasq - lightweight DHCP and caching DNS server\ndig - DNS lookup utility\nnslookup - query Internet name servers interactively\nhost - DNS lookup utility" }
      ],
  Chapter4_NetworkAdministration: [
      { question: "Protocols Provide Proper Pathways.", answer: "tcp - Transmission Control Protocol\nudp - User Datagram Protocol\nicmp - Internet Control Message Protocol\nhttp - Hypertext Transfer Protocol\nssl/tls - Secure Sockets Layer/Transport Layer Security" },
      { question: "Routing Requires Rigorous Reasoning.", answer: "ip route - show / manipulate routing, devices, policy routing and tunnels\nroute - show / manipulate the IP routing table\ntraceroute - print the route packets trace to network host\nmtr - a network diagnostic tool\nquagga - a routing software suite" },

      { question: "Switches Support Seamless Switching.", answer: "brctl - ethernet bridge administration\novs-vsctl - utility for querying and configuring ovs-vswitchd\nip link - network device configuration\nethtool - query or control network driver and hardware settings\nvlan - user mode program to create and delete VLAN interfaces" },

      { question: "VPNs Veil Virtual Venues.", answer: "openvpn - secure IP tunnel daemon\nwireguard - fast, modern, secure VPN tunnel\nipsec - IP Security Protocol\nl2tp - Layer 2 Tunneling Protocol\npptp - Point-to-Point Tunneling Protocol" },

      { question: "Sockets Secure Sensible Streams.", answer: "netcat (nc) - arbitrary TCP and UDP connections and listens\nsocat - multipurpose relay (SOcket CAT)\nss - another utility to investigate sockets\nnetstat - network statistics\nlsof -i - list open files (network connections)" },

      { question: "Proxies Provide Practical Protection.", answer: "squid - HTTP proxy server and web cache\nhaproxy - high availability load balancer\nnginx - HTTP and reverse proxy server\ntraefik - modern HTTP reverse proxy and load balancer\nenvoy - cloud-native high-performance edge/middle/service proxy" },

      { question: "Certificates Certify Correct Communications.", answer: "openssl - OpenSSL command line tool\ncertbot - automatically obtain and renew TLS certificates\nlet's encrypt - free, automated, and open Certificate Authority\nkeytool - key and certificate management tool\nxca - X Certificate and key management" },

      { question: "Load Balancers Level Laborious Loads.", answer: "nginx - HTTP and reverse proxy server, mail proxy server\nhaproxy - reliable, high performance TCP/HTTP load balancer\nkeepalived - load balancing and high-availability service\nlvs - Linux Virtual Server\ntraefik - modern HTTP reverse proxy and load balancer made to deploy microservices with ease" },

      { question: "Tunnels Transfer Through Treacherous Terrains.", answer: "ssh - OpenSSH remote login client\nssh-tunnel - create SSH tunnels\nstunnel - SSL tunneling proxy\nngrok - secure introspectable tunnels to localhost\nchisel - fast TCP/UDP tunnel over HTTP" },

      { question: "Bandwidth Balances Bountiful Bytes.", answer: "tc - show / manipulate traffic control settings\nwonderShaper - easy to use traffic shaping script\ntrickle - lightweight userspace bandwidth shaper\nnetlimiter - traffic shaping and monitoring tool\ncomgt - Option GlobeTrotter GPRS/EDGE/3G/HSDPA and Vodafone 3G/GPRS datacard control tool" },

      { question: "Subnets Subdivide Sensibly.", answer: "ipcalc - perform simple manipulation of IP addresses\nsipcalc - console based IP subnet calculator\nsubnetcalc - IPv4/IPv6 subnet calculator\nnetmask - helps determine network masks\ncidr - classless inter-domain routing calculator" },

      { question: "Packets Pass Purposefully.", answer: "tcpdump - dump traffic on a network\nwireshark - interactively dump and analyze network traffic\nngrep - network packet analyzer\nscapy - packet manipulation program\ntshark - dump and analyze network traffic" },

  ],

    systemManagement: [
    {
        "question": "Brave Dogs Eat Odd Leaves",
        "answer": "/boot: Boot files for system startup\n/dev: Device files for hardware\n/etc: Etcetera, system-wide configurations\n/opt: Optional software packages\n/lib: Libraries for system functionality\n\n[Rest of the content remains the same as in the original]"
    },
    {
        "question": "Lions Defend Every Outpost Bravely",
        "answer": "/lib: Libraries for shared system resources\n/dev: Device files for hardware access\n/etc: Etcetera, configuration files\n/opt: Optional software installations\n/bin: Binaries for essential commands\n\n[Rest of the content remains the same as in the original]"
    },
    {
        "question": "Silly Hippos Make Merry Robots",
        "answer": "/sbin: System binaries for administration\n/home: Home directories for users\n/media: Media mounts for removable devices\n/mnt: Mount point for temporary filesystems\n/root: Root user's home directory\n\n[Rest of the content remains the same as in the original]"
    },
    {
        "question": "Tigers Use Very Powerful Senses",
        "answer": "/tmp: Temporary file storage\n/usr: User system resources and applications\n/var: Variable data like logs and databases\n/proc: Process and hardware information\n/sys: System devices and hardware configuration\n\n[Rest of the content remains the same as in the original]"
    }
    ],
    linuxPlusModule1: [
    {
        "question": "Tigers Use Very Powerful Senses",
        "answer": "/tmp: Temporary file storage\n/usr: User system resources and applications\n/var: Variable data like logs and databases\n/proc: Process and hardware information\n/sys: System devices and hardware configuration\n\n[Rest of the content remains the same as in the original]"
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