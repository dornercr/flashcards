const topicTitles = {
  Chapter_1_Babbage_and_Aiken: "Chapter_1_Babbage_and_Aiken",
  Chapter_1_1_History_of_Computing_Hardware_Since_1960: "Chapter1_1_History_of_Computing_Hardware_Since_1960",
  Chapter_1_Review: "Chapter1_1_Review"
};

const flashcardsData = {
    
    /*

    Please convert the following text into a JSON structure named "Chapter_1_Babbage_and_Aiken". 
    Inside that structure, use an array of objects.
    This is for memorizing do not waste words, but be enough to memorize and do well on the test as it is testable 
    Each object should have three keys: 
      - "id" (an incremental integer), 
      - "question" (a concise question), 
      - "answer" (a concise explanation). 

    Ensure the JSON is valid and do not include any additional commentary—only the JSON code. 

    Below is the exact format:

    */

    "Chapter_1_Babbage_and_Aiken": [
    {
      "id": 1,
      "question": "Who was Charles Babbage, and why is he the Father of the Computer?",
      "answer": "He pioneered programmable machine concepts (1791–1871), laying groundwork for modern computing."
    },
    {
      "id": 2,
      "question": "What was the Difference Engine, and what happened to it?",
      "answer": "A machine for computing tables. Babbage built part of Difference Engine I; never finished it. His son Henry made demo pieces sent to universities. In 1991, Difference Engine II was built to prove Babbage’s design."
    },
    {
      "id": 3,
      "question": "Why are the Difference Engine demo pieces important?",
      "answer": "They showcased its capabilities, one ended up at Harvard, inspiring Aiken. Often mistaken for Analytical Engine parts but actually from Difference Engine I."
    },
    {
      "id": 4,
      "question": "What was the Analytical Engine, and how did it differ?",
      "answer": "First general-purpose mechanical computer concept, including a 'mill' (CPU) and 'store' (memory) with punch-card programming. Never fully built."
    },
    {
      "id": 5,
      "question": "Who was Howard Aiken, and what is the IBM ASCC (Harvard Mark I)?",
      "answer": "Aiken (1900–1973) was an American computing pioneer. He led the IBM ASCC/Harvard Mark I project, a large-scale relay-based machine bridging mechanical and electronic computing."
    },
    {
      "id": 6,
      "question": "How did Aiken’s discovery of Babbage’s work influence him?",
      "answer": "In 1936, he found a Difference Engine demo piece at Harvard, studied Babbage’s documents, and built the Mark I as a continuation of Babbage’s vision."
    },
    {
      "id": 7,
      "question": "Who joined Aiken’s team, and why is she significant?",
      "answer": "Grace Hopper joined, becoming a pioneer in compilers and high-level programming languages."
    },
    {
      "id": 8,
      "question": "What was the legacy of the Harvard Mark I, and why was it overshadowed?",
      "answer": "It showed large-scale computation viability but was soon overtaken by fully electronic, stored-program machines. Aiken was less enthusiastic about purely electronic designs."
    },
    {
      "id": 9,
      "question": "How did Babbage’s work influence Aiken’s approach?",
      "answer": "Aiken saw his Mark I as a direct extension of Babbage’s mechanical computing, echoing Babbage’s structural concepts (e.g., drive shafts)."
    },
    {
      "id": 10,
      "question": "Why are Babbage demo pieces often misunderstood, and what did they prompt Aiken to do?",
      "answer": "They’re confused for Analytical Engine parts but are from Difference Engine I. Aiken’s discovery led him to delve deeper into Babbage’s broader, unpublished designs."
    },
    {
      "id": 11,
      "question": "What was Grace Hopper’s initial role, and later contribution?",
      "answer": "She wrote the Mark I manual appendices, then became key in developing compilers and programming languages."
    },
    {
      "id": 12,
      "question": "How did Aiken, Hopper, and others view Babbage?",
      "answer": "They saw themselves as caretakers of his legacy, continuing his quest for automated calculation."
    },
    {
      "id": 13,
      "question": "Why were the 1946 Moore School Lectures significant for Aiken?",
      "answer": "He was criticized for not fully embracing electronic, stored-program computers, while Hartree and others were more forward-looking."
    },
    {
      "id": 14,
      "question": "What key facts should be memorized about Babbage, Aiken, and Hopper?",
      "answer": "• Babbage: Difference & Analytical Engines (mechanical, programmable).\n• Aiken: Harvard Mark I (inspired by Babbage).\n• Demo Piece: From Difference Engine I, found by Aiken in 1936.\n• Hopper: Pioneer of compilers, high-level languages.\n• Babbage’s “mill” & “store” foreshadowed CPU & memory."
    },
    {
      "id": 15,
      "question": "List four elements of each set.",
      "answer": "1) {k in P | k-1 multiple of 7} → 1, 8, 15, 22,...\n2) {x | x is a fruit and its skin is eaten} → apple, pear, grape, plum,...\n3) {x in Q | 1/x in Z} → ±1, ±1/2, ±1/3,...\n4) {2^n | n in Z, n<0} → 1/2, 1/4, 1/8, 1/16,...\n5) {s | s=1+2+...+n for n in P} (triangular) → 1, 3, 6, 10,..."
    },
    {
      "id": 16,
      "question": "List all elements of the following sets.",
      "answer": "1) {1/n | n in {3,4,5,6}} → {1/3, 1/4, 1/5, 1/6}\n2) {α in the alphabet | α precedes F} → {A, B, C, D, E}\n3) {x in Z | x = x+1} → ∅\n4) {n^2 | n = -2,...,2} → {0, 1, 4}\n5) {n in P | n is a factor of 24} → {1, 2, 3, 4, 6, 8, 12, 24}"
    },
    {
      "id": 17,
      "question": "Describe the following sets using set-builder notation.",
      "answer": "1) {5,7,9,…,77,79} → {2k+1 | k = 2,…,39}\n2) Rational numbers strictly between -1 and 1 → {x in Q | -1 < x < 1}\n3) Even integers → {2k | k in Z}\n4) {−18, −9, 0, 9, 18, 27,…} → multiples of 9 starting at -18, e.g. {9k | k >= -2}"
    },
    {
      "id": 18,
      "question": "Use set-builder notation to describe the following sets.",
      "answer": "1) {1,2,3,4,5,6,7} → {n in P | 1 ≤ n ≤ 7}\n2) {1,10,100,1000,10000} → {10^k | k in {0,1,2,3,4}}\n3) {1,1/2,1/3,1/4,1/5} → {1/n | n in {1,2,3,4,5}}\n4) {0} → {n in Z | n = 0}"
    },
    {
      "id": 19,
      "question": "Let A={0,2,3}, B={2,3}, C={1,5,9}. Determine the truth of each statement.",
      "answer": "3 ∈ A → True\n{3} ∈ A → False\n{3} ⊆ A → True\nB ⊆ A → True\nA ⊆ B → False\n∅ ⊆ C → True\n∅ ∈ A → False\nA ⊆ A → True"
    },
    {
      "id": 20,
      "question": "What is Russell’s Paradox?",
      "answer": "It considers R={x | x ∉ x}. The question “Does R ∈ R?” leads to a contradiction, illustrating the problem with unrestricted set definitions."
    }
],

    //Text to convert

    "Chapter_1_1_History_of_Computing_Hardware_Since_1960": [
    {
      "id": 1,
      "question": "What major hardware shift began around 1960?",
      "answer": "Transition from vacuum tubes to transistors and integrated circuits, reducing cost, size, and power use."
    },
    {
      "id": 2,
      "question": "What defines 'Third Generation' computers?",
      "answer": "They used integrated circuits (ICs), invented by Jack Kilby, making systems smaller and faster."
    },
    {
      "id": 3,
      "question": "Name early IC-based systems and their significance.",
      "answer": "Apollo Guidance Computer and LGM-30 Minuteman used ICs, proving reliability in aerospace and military."
    },
    {
      "id": 4,
      "question": "When did IBM first use ICs in its computers?",
      "answer": "In the System/360 Model 85 (1969), then extensively in the System/370 (1971)."
    },
    {
      "id": 5,
      "question": "Why were minicomputers crucial in the 1960s–70s?",
      "answer": "They were cheaper, smaller than mainframes, and expanded computing to more users (e.g., DEC PDP/VAX)."
    },
    {
      "id": 6,
      "question": "What was notable about the HP 2116A?",
      "answer": "One of the first commercial 16-bit minicomputers (1966), using CTµL ICs from Fairchild."
    },
    {
      "id": 7,
      "question": "What made the 1969 Data General Nova important?",
      "answer": "It was a popular, affordable 16-bit minicomputer with a CPU on one 15-inch board."
    },
    {
      "id": 8,
      "question": "How did ICs change large mainframes?",
      "answer": "ICs boosted performance and capacity. IBM’s System/360 used hybrid circuits; System/370 used full IC logic."
    },
    {
      "id": 9,
      "question": "What was the Illiac IV supercomputer (1971)?",
      "answer": "Fastest of its time, using ~250,000 small-scale ECL ICs to power 64 parallel processors."
    },
    {
      "id": 10,
      "question": "How long did third-generation computers last?",
      "answer": "They persisted into the 1990s, e.g., IBM ES9000 (1994) and DEC VAX 9000 (1989)."
    },
    {
      "id": 11,
      "question": "What defines the Fourth Generation?",
      "answer": "The microprocessor (CPU on a single chip), starting with Intel’s work (early 1970s)."
    },
    {
      "id": 12,
      "question": "How did microprocessor-based computers differ from minicomputers?",
      "answer": "They were smaller, cheaper, targeted new markets, and weren’t just scaled-down mainframes."
    },
    {
      "id": 13,
      "question": "Which microprocessor did Intel release in 1971?",
      "answer": "The Intel 4004, the first commercial microprocessor, enabling single-chip CPU designs."
    },
    {
      "id": 14,
      "question": "How did the 4004 and successors impact computing?",
      "answer": "They vastly increased performance and enabled smaller, faster personal computers (e.g., 8080, 8086)."
    },
    {
      "id": 15,
      "question": "What made the Cray-1 (1976) a supercomputing milestone?",
      "answer": "It introduced practical vector processing, reached 150 MFLOPS, and used ECL ICs."
    },
    {
      "id": 16,
      "question": "How were computers used before microprocessors?",
      "answer": "Large mainframes required batch processing with punch cards or time-sharing terminals."
    },
    {
      "id": 17,
      "question": "How did minicomputers reshape computing culture?",
      "answer": "They were more affordable, interactive, and allowed smaller labs to bypass mainframe bureaucracy."
    },
    {
      "id": 18,
      "question": "How did ICs lower costs and increase accessibility?",
      "answer": "ICs condensed many transistors into one chip, shrinking size, cutting power, and slashing costs."
    },
    {
      "id": 19,
      "question": "Why is the Micral N (1975) significant?",
      "answer": "A French Intel 8008-based microcomputer, cheaper than PDP-8, showing early microprocessor potential."
    },
    {
      "id": 20,
      "question": "What was the MITS Altair 8800?",
      "answer": "A microprocessor kit (Intel 8080) launched in 1975, sparking the hobbyist and PC industry."
    },
    {
      "id": 21,
      "question": "Who created Altair BASIC and why is that notable?",
      "answer": "Paul Allen and Bill Gates; it launched Microsoft’s first commercial success."
    },
    {
      "id": 22,
      "question": "What was the Homebrew Computer Club?",
      "answer": "A Silicon Valley gathering where enthusiasts shared designs/software, influencing companies like Apple."
    },
    {
      "id": 23,
      "question": "How did late-1970s microcomputers differ from earlier kits?",
      "answer": "They came pre-assembled with keyboards, displays, built-in BASIC, and were user-friendly."
    },
    {
      "id": 24,
      "question": "What were the '1977 Trinity' computers?",
      "answer": "Apple II, Commodore PET, TRS-80—mass-market home computers with built-in BASIC and broad appeal."
    },
    {
      "id": 25,
      "question": "How did IBM's 1981 PC change the market?",
      "answer": "It became a business standard; open architecture enabled clones, creating a huge software ecosystem."
    },
    {
      "id": 26,
      "question": "List key hardware milestones from 1959 to 2015.",
      "answer": "• Vacuum tubes→transistors→ICs→microprocessors\n• 1970s microcomputers (Altair)\n• 1977 Trinity\n• IBM PC (1981)\n• Multi-core and mobile advancements."
    },
    {
      "id": 27,
      "question": "How did supercomputers evolve alongside microcomputers?",
      "answer": "They used advanced ICs (e.g., Cray-1’s vector processing) for extreme performance at high cost."
    },
    {
      "id": 28,
      "question": "What usage models existed before personal computing?",
      "answer": "Batch processing on mainframes or time-sharing terminals, often requiring punch cards and waits."
    },
    {
      "id": 29,
      "question": "How did microprocessors outcompete minicomputers?",
      "answer": "They were cheaper, smaller, and eventually powerful enough for serious tasks, eroding minicomputer appeal."
    },
    {
      "id": 30,
      "question": "Why are Apple II, PET, and TRS-80 pivotal?",
      "answer": "They made personal computing accessible to non-experts, jumpstarting the home computer market."
    },
    {
      "id": 31,
      "question": "What does the microprocessor timeline (1971–2010s) show?",
      "answer": "Rapid increases in speed, transistor counts, and architectural complexity, fueling exponential growth in computing."
    }
],

};