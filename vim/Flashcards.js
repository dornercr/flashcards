const CodeBlock = ({ code }) => {
  return (
    <pre className="bg-gray-800 text-gray-200 p-4 rounded-lg overflow-x-auto my-2">
      <code>{code}</code>
    </pre>
  );
};

const Flashcard = ({ question, answer, onFlip, isFlipped }) => {
  const formatContent = (content) => {
    const lines = content.split('\n');
    let isInCodeBlock = false;
    let currentCodeBlock = '';

    return lines.map((line, index) => {
      if (line.trim() === '```') {
        isInCodeBlock = !isInCodeBlock;
        if (!isInCodeBlock && currentCodeBlock) {
          const codeBlockElement = <CodeBlock key={`code-${index}`} code={currentCodeBlock.trim()} />;
          currentCodeBlock = '';
          return codeBlockElement;
        }
        return null;
      }

      if (isInCodeBlock) {
        currentCodeBlock += line + '\n';
        return null;
      }

      return <p key={index} className="mb-2">{line}</p>;
    }).filter(element => element !== null);
  };

  return (
    <div 
      className={`bg-white rounded-lg shadow-lg p-6 cursor-pointer transition-all duration-300 transform ${
        isFlipped ? 'rotate-y-180' : ''
      }`}
      onClick={onFlip}
    >
      <div className={`${isFlipped ? 'hidden' : ''}`}>
        <h2 className="text-xl font-bold mb-4">Question:</h2>
        {formatContent(question)}
      </div>
      <div className={`${isFlipped ? '' : 'hidden'}`}>
        <h2 className="text-xl font-bold mb-4">Answer:</h2>
        {formatContent(answer)}
      </div>
    </div>
  );
};

const Flashcards = () => {
  const [currentTopic, setCurrentTopic] = React.useState(Object.keys(topicTitles)[0]);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isFlipped, setIsFlipped] = React.useState(false);

  const flashcards = flashcardsData[currentTopic];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
    setIsFlipped(false);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + flashcards.length) % flashcards.length);
    setIsFlipped(false);
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleTopicChange = (e) => {
    setCurrentTopic(e.target.value);
    setCurrentIndex(0);
    setIsFlipped(false);
  };

  if (!flashcards || flashcards.length === 0) {
    return <div>No flashcards available for this topic.</div>;
  }

  const currentCard = flashcards[currentIndex];

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-extrabold text-gray-900 text-center mb-8">vim Flashcards</h1>
        <div className="mb-6">
          <select
            value={currentTopic}
            onChange={handleTopicChange}
            className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {Object.entries(topicTitles).map(([key, title]) => (
              <option key={key} value={key}>{title}</option>
            ))}
          </select>
        </div>
        <Flashcard
          question={currentCard.question}
          answer={currentCard.answer}
          onFlip={handleFlip}
          isFlipped={isFlipped}
        />
        <div className="mt-8 flex justify-between items-center">
          <button
            onClick={handlePrevious}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Previous
          </button>
          <span className="text-gray-600">
            {currentIndex + 1} / {flashcards.length}
          </span>
          <button
            onClick={handleNext}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};