const topicTitles = {
  Chapter1_Set_Notation_and_Relations: "Chapter 1 Set Notation and Relations",
  setNotation: "Chapter 1.1 Set Notation"
};

const flashcardsData = {
    "Chapter1_Set_Notation_and_Relations": [
    {
      "id": 1,
      "question": "What is the intuitive definition of a set?",
      "answer": "A set is a collection of distinct objects (elements)."
    },
    {
      "id": 2,
      "question": "How do we denote membership and non-membership for an element x in a set A?",
      "answer": "Write x ∈ A if x is in A.\nWrite x ∉ A if x is not (sometimes shown as x ∈/ A)."
    },
    {
      "id": 3,
      "question": "How can we enumerate sets using braces (give examples)?",
      "answer": "List elements inside braces.\nExample: B = {0, 1}, D = {0, 1, 2, 3, 4, 5, 6, 7, 8, 9}."
    },
    {
      "id": 4,
      "question": "The text repeats the examples for enumerating sets with braces; what are those repeated examples?",
      "answer": "They appear twice:\nB = {0, 1}\nD = {0, 1, 2, 3, 4, 5, 6, 7, 8, 9}."
    },
    {
      "id": 5,
      "question": "How can we enumerate sets using ellipses (…)?",
      "answer": "Use ellipses when the pattern is clear but not fully listed.\nExamples: A = {a, b, c, …, x, y, z}, G = {1, 2, …, 99, 100}, {1, 2, 3, …}."
    },
    {
      "id": 6,
      "question": "Which sets are considered common, and how are they denoted?",
      "answer": "N = {0, 1, 2, …} (natural numbers including 0)\nExample: 0, 1, 10 ∈ N\nZ = {…, −2, −1, 0, 1, 2, …} (integers)\nExample: −5, 0, 7 ∈ Z\nQ (rationals)\nExample: 1/2, −3/7, 4 ∈ Q\nR (reals)\nExample: √2, π, −1.23 ∈ R\nC (complex numbers)\nExample: i, 3 + 2i, −1.2 ∈ C\nP = {1, 2, 3, …} (positive integers)\nExample: 1, 5, 100 ∈ P."
    },
    {
      "id": 7,
      "question": "What is set-builder notation, and how is it generally used?",
      "answer": "It specifies a form for the elements plus a condition.\nExample: Q = {a/b | a,b ∈ Z, b ≠ 0}."
    },
    {
      "id": 8,
      "question": "Explain the meaning of the symbol '∣' (vertical bar) in set-builder notation.",
      "answer": "It is read as “such that.”\nSometimes a colon (:) is used."
    },
    {
      "id": 9,
      "question": "How do we usually interpret commas in set-builder notation statements like 'a, b ∈ Z'?",
      "answer": "Commas mean “and.”\nSo 'a, b ∈ Z' means 'a and b are integers.'"
    },
    {
      "id": 10,
      "question": "What is the definition of a finite set?",
      "answer": "A set is finite if it has a specific number of elements.\nOtherwise, it is infinite."
    },
    {
      "id": 11,
      "question": "What does the term 'cardinality' refer to for a set A?",
      "answer": "For a finite set A, |A| is the number of its elements."
    },
    {
      "id": 12,
      "question": "What is a subset, and how is the notation A ⊆ B interpreted?",
      "answer": "A ⊆ B means every element of A is in B.\nWe say “A is a subset of B.”"
    },
    {
      "id": 13,
      "question": "Give an example of a subset relationship using A = {3, 5, 8} and B = {3, 5, 8, 2, 6}.",
      "answer": "All elements of A are in B,\nso A ⊆ B."
    },
    {
      "id": 14,
      "question": "What is the chain of subsets represented by N ⊆ Z ⊆ Q ⊆ R ⊆ C?",
      "answer": "N (naturals) ⊆ Z (integers) ⊆ Q (rationals) ⊆ R (reals) ⊆ C (complexes)."
    },
    {
      "id": 15,
      "question": "What does it mean for two sets A and B to be equal?",
      "answer": "A = B if A ⊆ B and B ⊆ A,\nmeaning they have the same elements."
    },
    {
      "id": 16,
      "question": "Give examples showing that order and repetition in set notation do not matter.",
      "answer": "{3, 5, 8} = {5, 3, 8} (order doesn’t matter)\n{1, 5, 3, 5} = {1, 5, 3} (repetition doesn’t matter)."
    },
    {
      "id": 17,
      "question": "What is the empty set, and why is it unique?",
      "answer": "The empty set (∅) has no elements.\nIt is a subset of every set, making it unique."
    },
    {
      "id": 18,
      "question": "What is the difference between a proper subset and an improper subset?",
      "answer": "A proper subset of A is any subset not equal to A.\nThe improper subset is A itself."
    },
    {
      "id": 19,
      "question": "How does ∅ (the empty set) fit into the idea of proper subsets?",
      "answer": "∅ is a proper subset of any nonempty set.\nSome texts differ on whether to always call it proper."
    },
    {
      "id": 20,
      "question": "Why do some texts differ on whether ∅ is considered a proper subset?",
      "answer": "They use different definitions.\nSome exclude ∅ from “proper subsets,” others include it."
    }

],

  setNotation: [
    {
      "id": 1,
      "question": "x ∈ A",
      "answer": "Definition: x in set A\nExample: A={1,2,3}, 2 ∈ A\nRemember: '∈' = 'in'"
    },
    {
      "id": 2,
      "question": "x ∉ A",
      "answer": "Definition: x not in A\nExample: A={1,2,3}, 4 ∉ A\nRemember: '∉' = 'not in'"
    },
    {
      "id": 3,
      "question": "|A|",
      "answer": "Definition: count of elements in A\nExample: A={4,5,6} => |A|=3\nRemember: '|A|' = size"
    },
    {
      "id": 4,
      "question": "A ⊆ B",
      "answer": "Definition: A subset of B\nExample: A={1,2}, B={1,2,3}\nRemember: '⊆' means contained"
    },
    {
      "id": 5,
      "question": "∅",
      "answer": "Definition: empty set\nExample: no elements\nRemember: '∅' = blank"
    },
    {
      "id": 6,
      "question": "A ∩ B",
      "answer": "Definition: intersection\nExample: A={1,2}, B={2,3} => {2}\nRemember: '∩' = 'AND'"
    },
    {
      "id": 7,
      "question": "A ∪ B",
      "answer": "Definition: union\nExample: A={1,2}, B={2,3} => {1,2,3}\nRemember: '∪' = 'OR'"
    },
    {
      "id": 8,
      "question": "B − A",
      "answer": "Definition: difference (elements in B not in A)\nExample: A={1,2}, B={1,2,3} => {3}\nRemember: B minus A"
    },
    {
      "id": 9,
      "question": "Aᶜ",
      "answer": "Definition: complement of A\nExample: U={1,2,3,4}, A={1,2} => Aᶜ={3,4}\nRemember: outside A"
    },
    {
      "id": 10,
      "question": "A ⊕ B",
      "answer": "Definition: symmetric difference\nExample: A={1,2},B={2,3} => {1,3}\nRemember: '⊕' = XOR"
    },
    {
      "id": 11,
      "question": "A × B",
      "answer": "Definition: cartesian product\nExample: A={1,2},B={3,4}\nRemember: all (a,b)"
    },
    {
      "id": 12,
      "question": "℘(A)",
      "answer": "Definition: power set of A\nExample: A={1,2} => ℘(A)={∅,{1},{2},{1,2}}\nRemember: set of subsets"
    },
    {
      "id": 13,
      "question": "n!",
      "answer": "Definition: factorial\nExample: 4! = 24\nRemember: product 1..n"
    },
    {
      "id": 14,
      "question": "(n k)",
      "answer": "Definition: 'n choose k'\nExample: (4 2)=6\nRemember: combos from n"
    },
    {
      "id": 15,
      "question": "p ∧ q",
      "answer": "Definition: AND\nExample: true if both are true\nRemember: '∧' = 'and'"
    },
    {
      "id": 16,
      "question": "p ∨ q",
      "answer": "Definition: OR\nExample: true if p or q\nRemember: '∨' = 'or'"
    },
    {
      "id": 17,
      "question": "¬p",
      "answer": "Definition: NOT p\nExample: flips truth\nRemember: '¬' = 'not'"
    },
    {
      "id": 18,
      "question": "p → q",
      "answer": "Definition: if p then q\nExample: false if p=1,q=0\nRemember: '→' implies"
    },
    {
      "id": 19,
      "question": "p ↔ q",
      "answer": "Definition: iff (biconditional)\nExample: true if same truth\nRemember: '↔' = 'iff'"
    },
    {
      "id": 20,
      "question": "1",
      "answer": "Definition: tautology\nExample: always true\nRemember: '1' = always"
    },
    {
      "id": 21,
      "question": "0",
      "answer": "Definition: contradiction\nExample: always false\nRemember: '0' = never"
    },
    {
      "id": 22,
      "question": "r ⇐⇒ s",
      "answer": "Definition: logical equivalence\nExample: p→q ≡ ¬p∨q\nRemember: same truth"
    },
    {
      "id": 23,
      "question": "r ⇒ s",
      "answer": "Definition: r implies s\nExample: if r=2 => s=4\nRemember: '⇒' means if r then s"
    },
    {
      "id": 24,
      "question": "p | q",
      "answer": "Definition: NAND\nExample: false if both true\nRemember: 'not and'"
    },
    {
      "id": 25,
      "question": "Tp",
      "answer": "Definition: truth set of p\nExample: p(n)=n>2 => {3,4,...}\nRemember: solutions"
    },
    {
      "id": 26,
      "question": "(∃n) ∪(p(n))",
      "answer": "Definition: there exists n\nExample: n²=4 => n=±2\nRemember: '∃' = some"
    },
    {
      "id": 27,
      "question": "(∀n) ∪(p(n))",
      "answer": "Definition: for all n\nExample: n<n+1 always\nRemember: '∀' = all"
    },
    {
      "id": 28,
      "question": "0(m × n)",
      "answer": "Definition: zero matrix\nExample: all entries=0\nRemember: matrix of 0"
    },
    {
      "id": 29,
      "question": "In",
      "answer": "Definition: identity matrix\nExample: I2 => [1 0 / 0 1]\nRemember: diag=1"
    },
    {
      "id": 30,
      "question": "A−1",
      "answer": "Definition: inverse matrix\nExample: A×A−1=I\nRemember: 'undo' matrix"
    },
    {
      "id": 31,
      "question": "det(A)",
      "answer": "Definition: for 2×2 => ad−bc\nExample: [1 2 / 3 4] => -2\nRemember: scale factor"
    },
    {
      "id": 32,
      "question": "a | b",
      "answer": "Definition: a divides b\nExample: 3|9 => 9=3×3\nRemember: '|' => divides"
    },
    {
      "id": 33,
      "question": "x s y",
      "answer": "Definition: x related to y\nExample: if s='parent', x s y => parent\nRemember: relation"
    },
    {
      "id": 34,
      "question": "r s",
      "answer": "Definition: compose relations\nExample: child then child => grandchild\nRemember: '◦'"
    },
    {
      "id": 35,
      "question": "a ≡n b",
      "answer": "Definition: congruence mod n\nExample: 7 ≡4 3 => 7−3=4\nRemember: same remainder"
    },
    {
      "id": 36,
      "question": "a ≡ b (mod n)",
      "answer": "Definition: same notation\nExample: 17 ≡5(6) => 12 multiple of 6\nRemember: mod eq"
    },
    {
      "id": 37,
      "question": "c(a)",
      "answer": "Definition: equivalence class\nExample: ≡3 => c(2)={2,5,8,...}\nRemember: set eq to a"
    },
    {
      "id": 38,
      "question": "r+",
      "answer": "Definition: transitive closure\nExample: r={(1,2),(2,3)}, add (1,3)\nRemember: fill transitivity"
    },
    {
      "id": 39,
      "question": "f : A → B",
      "answer": "Definition: function mapping\nExample: f(x)=x+1\nRemember: A→B"
    },
    {
      "id": 40,
      "question": "BA",
      "answer": "Definition: all functions A→B\nExample: A={1,2},B={a,b}\nRemember: set of maps"
    },
    {
      "id": 41,
      "question": "f(a)",
      "answer": "Definition: image of a\nExample: f(x)=x+5 => f(2)=7\nRemember: result"
    },
    {
      "id": 42,
      "question": "f(X)",
      "answer": "Definition: images of X\nExample: X={1,2}, f(x)=x+1 => {2,3}\nRemember: range"
    },
    {
      "id": 43,
      "question": "|A|=n",
      "answer": "Definition: A has n elements\nExample: A={4,5,6} => 3\nRemember: cardinality"
    },
    {
      "id": 44,
      "question": "(g ◦ f)(x)",
      "answer": "Definition: compose g,f\nExample: f(x)=x+1,g(x)=2x\nRemember: do f then g"
    },
    {
      "id": 45,
      "question": "f ◦ f = f2",
      "answer": "Definition: function square\nExample: f(x)=x+1 => f2(x)=x+2\nRemember: apply f again"
    },
    {
      "id": 46,
      "question": "i or iA",
      "answer": "Definition: identity function\nExample: iA(x)=x\nRemember: returns x"
    },
    {
      "id": 47,
      "question": "f−1",
      "answer": "Definition: inverse function\nExample: f(x)=x+3 => x−3\nRemember: 'undo' f"
    },
    {
      "id": 48,
      "question": "logb(a)",
      "answer": "Definition: log base b\nExample: log2(8)=3\nRemember: exponent"
    },
    {
      "id": 49,
      "question": "S ↑",
      "answer": "Definition: pop stack\nExample: remove top\nRemember: '↑'=pop"
    },
    {
      "id": 50,
      "question": "S ↓",
      "answer": "Definition: push stack\nExample: add top\nRemember: '↓'=push"
    },
    {
      "id": 51,
      "question": "S ∗ T",
      "answer": "Definition: convolution\nExample: (S∗T)[n] = Σ S[k]×T[n−k]\nRemember: combine sums"
    },
    {
      "id": 52,
      "question": "S ↑ p",
      "answer": "Definition: pop p times\nExample: S=[3,2,1], ↑2 => remove 3,2\nRemember: repeated pop"
    },
    {
      "id": 53,
      "question": "S ↓ p",
      "answer": "Definition: push p times\nExample: push '7,8'\nRemember: repeated push"
    },
    {
      "id": 54,
      "question": "Kn",
      "answer": "Definition: complete graph\nExample: K3 => triangle\nRemember: all edges"
    },
    {
      "id": 55,
      "question": "deg(v), indeg(v), outdeg(v)",
      "answer": "Definition: vertex degrees\nExample: 2 in,3 out\nRemember: edge counts"
    },
    {
      "id": 56,
      "question": "e(v)",
      "answer": "Definition: eccentricity\nExample: max dist from v\nRemember: farthest node"
    },
    {
      "id": 57,
      "question": "d(G)",
      "answer": "Definition: diameter\nExample: max e(v)\nRemember: largest min path"
    },
    {
      "id": 58,
      "question": "r(G)",
      "answer": "Definition: radius\nExample: min e(v)\nRemember: smallest max dist"
    },
    {
      "id": 59,
      "question": "C(G)",
      "answer": "Definition: center of G\nExample: those v with e(v)=r(G)\nRemember: middle nodes"
    },
    {
      "id": 60,
      "question": "Qn",
      "answer": "Definition: n-cube\nExample: Q3 => 3D cube\nRemember: hypercube"
    },
    {
      "id": 61,
      "question": "V(f)",
      "answer": "Definition: value of flow\nExample: net from source\nRemember: flow total"
    },
    {
      "id": 62,
      "question": "Pn",
      "answer": "Definition: path graph\nExample: chain of n+1\nRemember: linear"
    },
    {
      "id": 63,
      "question": "χ(G)",
      "answer": "Definition: chromatic number\nExample: χ(K3)=3\nRemember: min colors"
    },
    {
      "id": 64,
      "question": "Cn",
      "answer": "Definition: cycle graph\nExample: C4 => square\nRemember: ring of n"
    },
    {
      "id": 65,
      "question": "∗",
      "answer": "Definition: generic operation\nExample: e.g. add mod n\nRemember: any binop"
    },
    {
      "id": 66,
      "question": "string1 + string2",
      "answer": "Definition: string concat\nExample: 'ab'+'cd'='abcd'\nRemember: join"
    },
    {
      "id": 67,
      "question": "[G; ∗]",
      "answer": "Definition: group (G,op)\nExample: (ℤ, +)\nRemember: closure etc."
    },
    {
      "id": 68,
      "question": "gcd(a,b)",
      "answer": "Definition: greatest common divisor\nExample: gcd(8,12)=4\nRemember: largest factor"
    },
    {
      "id": 69,
      "question": "a +n b",
      "answer": "Definition: mod n sum\nExample: 7+₅3=10 mod 5=0\nRemember: +n"
    },
    {
      "id": 70,
      "question": "a ×n b",
      "answer": "Definition: mod n product\nExample: 4×₆5=20 mod 6=2\nRemember: ×n"
    },
    {
      "id": 71,
      "question": "ℤn",
      "answer": "Definition: ints mod n (add)\nExample: ℤ5={0..4}\nRemember: add mod n"
    },
    {
      "id": 72,
      "question": "Un",
      "answer": "Definition: units mod n\nExample: U5={1,2,3,4}\nRemember: invertible"
    },
    {
      "id": 73,
      "question": "W ≤ V",
      "answer": "Definition: subspace\nExample: W inside V\nRemember: smaller structure"
    },
    {
      "id": 74,
      "question": "⟨a⟩",
      "answer": "Definition: cyclic subgroup\nExample: repeats of a\nRemember: powers of a"
    },
    {
      "id": 75,
      "question": "ord(a)",
      "answer": "Definition: order of a\nExample: 2 in ℤ8 => 4\nRemember: times to e"
    },
    {
      "id": 76,
      "question": "V1×V2×…×Vn",
      "answer": "Definition: direct product\nExample: ℤ2×ℤ2\nRemember: cartesian"
    },
    {
      "id": 77,
      "question": "G1 ≅ G2",
      "answer": "Definition: isomorphic\nExample: ℤ2×ℤ2 ~ Klein-4\nRemember: same structure"
    },
    {
      "id": 78,
      "question": "dim(V)",
      "answer": "Definition: dimension of V\nExample: ℝ³ => dim=3\nRemember: basis size"
    },
    {
      "id": 79,
      "question": "0",
      "answer": "Definition: least element poset\nExample: {0,1} => 0<1\nRemember: bottom"
    },
    {
      "id": 80,
      "question": "1",
      "answer": "Definition: greatest element poset\nExample: {0,1}, top=1\nRemember: top"
    },
    {
      "id": 81,
      "question": "Dn",
      "answer": "Definition: divisors of n (or dihedral)\nExample: D6={1,2,3,6}\nRemember: factors"
    },
    {
      "id": 82,
      "question": "a ∨ b",
      "answer": "Definition: join in lattice\nExample: 3∨4=12\nRemember: least upper"
    },
    {
      "id": 83,
      "question": "a ∧ b",
      "answer": "Definition: meet in lattice\nExample: 3∧4=1\nRemember: greatest lower"
    },
    {
      "id": 84,
      "question": "[L; ∨, ∧]",
      "answer": "Definition: lattice structure\nExample: power set w/ ∪,∩\nRemember: meet & join"
    },
    {
      "id": 85,
      "question": "ā",
      "answer": "Definition: complement (Boolean)\nExample: 0̄=1,1̄=0\nRemember: flip"
    },
    {
      "id": 86,
      "question": "[B; ∨, ∧, ¯]",
      "answer": "Definition: boolean algebra\nExample: {0,1} w/AND,OR,NOT\nRemember: logic ops"
    },
    {
      "id": 87,
      "question": "Mδ1...δk",
      "answer": "Definition: minterm\nExample: M(1,0)=>x1∧x2̄\nRemember: AND pattern"
    },
    {
      "id": 88,
      "question": "A∗",
      "answer": "Definition: all strings over A\nExample: '' 'a' 'b' 'aa'...\nRemember: infinite combos"
    },
    {
      "id": 89,
      "question": "Aⁿ",
      "answer": "Definition: strings length n\nExample: n=2 => {aa,ab,ba,bb}\nRemember: fixed length"
    },
    {
      "id": 90,
      "question": "λ",
      "answer": "Definition: empty string\nExample: length 0\nRemember: 'nothing'"
    },
    {
      "id": 91,
      "question": "s1 + s2",
      "answer": "Definition: string concat\nExample: 'ab'+'cd'='abcd'\nRemember: join"
    },
    {
      "id": 92,
      "question": "L(G)",
      "answer": "Definition: language of grammar\nExample: balanced parentheses\nRemember: all derivations"
    },
    {
      "id": 93,
      "question": "(S,X,Z,w,t)",
      "answer": "Definition: finite-state machine\nExample: states, input, output\nRemember: FSM"
    },
    {
      "id": 94,
      "question": "m(M)",
      "answer": "Definition: machine of monoid\nExample: build from M\nRemember: monoid=>automaton"
    },
    {
      "id": 95,
      "question": "a ∗ H, H ∗ a",
      "answer": "Definition: left/right coset\nExample: ℤ4,H={0,2},1+H={1,3}\nRemember: shift subgroup"
    },
    {
      "id": 96,
      "question": "G/H",
      "answer": "Definition: factor group\nExample: cosets of H\nRemember: quotient"
    },
    {
      "id": 97,
      "question": "SA",
      "answer": "Definition: perms of set A\nExample: A={1,2,3}, S3=6 perms\nRemember: reorder elements"
    },
    {
      "id": 98,
      "question": "Sn",
      "answer": "Definition: perm group on n\nExample: S3 => 6 perms\nRemember: n! reorder"
    },
    {
      "id": 99,
      "question": "An",
      "answer": "Definition: alternating group\nExample: even perms\nRemember: subset of Sn"
    },
    {
      "id": 100,
      "question": "Dn",
      "answer": "Definition: dihedral group\nExample: sym of n-gon\nRemember: rotate & flip"
    },
    {
      "id": 101,
      "question": "H ◁ G",
      "answer": "Definition: normal subgroup\nExample: nℤ◁ℤ\nRemember: conj stable"
    },
    {
      "id": 102,
      "question": "kerθ",
      "answer": "Definition: kernel of θ\nExample: all mapped to 0\nRemember: goes to identity"
    },
    {
      "id": 103,
      "question": "[R; +, ·]",
      "answer": "Definition: ring structure\nExample: (ℤ,+,×)\nRemember: add & mult"
    },
    {
      "id": 104,
      "question": "U(R)",
      "answer": "Definition: units of ring\nExample: ℤ7 => 1..6 invert\nRemember: has inverse"
    },
    {
      "id": 105,
      "question": "D",
      "answer": "Definition: integral domain\nExample: ℤ\nRemember: no zero divisor"
    },
    {
      "id": 106,
      "question": "deg f(x)",
      "answer": "Definition: highest exponent\nExample: 5x³+2x−1 =>3\nRemember: polynomial degree"
    },
    {
      "id": 107,
      "question": "R[x]",
      "answer": "Definition: polynomials in x\nExample: ℤ[x]\nRemember: all poly w/ coeff R"
    },
    {
      "id": 108,
      "question": "R[[x]]",
      "answer": "Definition: power series\nExample: infinite expansions\nRemember: formal series"
    },
    {
      "id": 109,
      "question": "x̀, x́",
      "answer": "Definition: pre/post value\nExample: x=5 =>inc => x̀=5,x́=6\nRemember: old/new"
    },
    {
      "id": 110,
      "question": "M(A)i,j",
      "answer": "Definition: minor of A\nExample: remove row i,col j =>det\nRemember: subdet"
    },
    {
      "id": 111,
      "question": "C(A)i,j",
      "answer": "Definition: cofactor\nExample: (−1)^(i+j)*minor\nRemember: signed minor"
    },
    {
      "id": 112,
      "question": "det(A)",
      "answer": "Definition: general or ad−bc\nExample: [1 2/3 4] => -2\nRemember: determinant"
    }

  ]
};