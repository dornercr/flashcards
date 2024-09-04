const Flashcards = () => {
  const [currentTopic, setCurrentTopic] = React.useState('dataStructuresAndAlgorithms');
  const [currentCard, setCurrentCard] = React.useState(0);
  const [showAnswer, setShowAnswer] = React.useState(false);
  const flashcards = flashcardsData[currentTopic];

  const nextCard = () => {
    setCurrentCard((prev) => (prev + 1) % flashcards.length);
    setShowAnswer(false);
  };

  const prevCard = () => {
    setCurrentCard((prev) => (prev - 1 + flashcards.length) % flashcards.length);
    setShowAnswer(false);
  };

  const toggleAnswer = () => {
    setShowAnswer((prev) => !prev);
  };

  const changeTopic = (topic) => {
    setCurrentTopic(topic);
    setCurrentCard(0);
    setShowAnswer(false);
  };

  return React.createElement('div', { className: "flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4" },
    React.createElement('div', { className: "w-full max-w-md" },
      React.createElement('div', { className: "mb-4" },
        React.createElement('select', {
          value: currentTopic,
          onChange: (e) => changeTopic(e.target.value),
          className: "w-full p-2 rounded-lg border border-gray-300"
        },
          React.createElement('option', { value: "dataStructuresAndAlgorithms" }, "Data Structures and Algorithms"),
          React.createElement('option', { value: "sortingAlgorithms" }, "Sorting Algorithms"),
          React.createElement('option', { value: "whatAreAlgorithms" }, "What Are Algorithms?"),
          React.createElement('option', { value: "searchAlgorithms" }, "Search Algorithms"),
          React.createElement('option', { value: "computationalComplexity" }, "Computational Complexity"),
          React.createElement('option', { value: "greedyAlgorithms" }, "greedyAlgorithms")
        )
      ),
      React.createElement('div', { className: "bg-white rounded-lg shadow-lg overflow-hidden" },
        React.createElement('div', { className: "p-6" },
          React.createElement('h2', { className: "text-xl font-bold mb-4 text-center" },
            `${topicTitles[currentTopic] || 'What Are Algorithms?'} Flashcards`
          ),
          React.createElement('div', { className: "bg-blue-100 rounded-lg p-4 min-h-[200px] flex items-start justify-start text-left" },
            React.createElement('div', { className: "text-lg w-full text-left" },
              showAnswer ? 
                React.createElement('pre', { className: "whitespace-pre-wrap" },
                  React.createElement('code', null, flashcards[currentCard].answer)
                ) :
                React.createElement('p', null, flashcards[currentCard].question)
            )
          ),
          React.createElement('button', {
            onClick: toggleAnswer,
            className: "mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          }, showAnswer ? "Show Question" : "Show Answer")
        ),
        React.createElement('div', { className: "flex justify-between p-4 bg-gray-50" },
          React.createElement('button', {
            onClick: prevCard,
            className: "flex items-center text-blue-500 hover:text-blue-600"
          }, "Previous"),
          React.createElement('button', {
            onClick: nextCard,
            className: "flex items-center text-blue-500 hover:text-blue-600"
          }, "Next")
        )
      ),
      React.createElement('p', { className: "text-center mt-4 text-gray-600" },
        `Card ${currentCard + 1} of ${flashcards.length}`
      )
    )
  );
};
