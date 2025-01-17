const CodeBlock = ({ code }) => {
  return (
      <pre className="bg-gray-800 text-gray-200 p-4 rounded-lg overflow-x-auto my-2">
      <code>{code}</code>
    </pre>
  );
};

const Flashcard = ({ question, answer, onFlip, isFlipped, onRate }) => {
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
          <div className="mt-4">
            <p>Rate this card:</p>
            {[1, 2, 3, 4, 5].map((rating) => (
                <button
                    key={rating}
                    onClick={(e) => {
                      e.stopPropagation();
                      onRate(rating);
                    }}
                    className="mx-1 px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  {rating}
                </button>
            ))}
          </div>
        </div>
      </div>
  );
};

const Flashcards = () => {
  const [currentTopic, setCurrentTopic] = React.useState(Object.keys(topicTitles)[0]);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isFlipped, setIsFlipped] = React.useState(false);
  const [shuffledCards, setShuffledCards] = React.useState([]);
  const [progress, setProgress] = React.useState({});
  const [bookmarks, setBookmarks] = React.useState([]);
  const [timerActive, setTimerActive] = React.useState(false);
  const [timeRemaining, setTimeRemaining] = React.useState(300); // 5 minutes
  const [searchTerm, setSearchTerm] = React.useState('');
  const [cardRatings, setCardRatings] = React.useState({});

  React.useEffect(() => {
    setShuffledCards(flashcardsData[currentTopic]);
    setProgress(prev => ({...prev, [currentTopic]: prev[currentTopic] || 0}));
  }, [currentTopic]);

  React.useEffect(() => {
    let interval;
    if (timerActive && timeRemaining > 0) {
      interval = setInterval(() => {
        setTimeRemaining(time => time - 1);
      }, 1000);
    } else if (timeRemaining === 0) {
      setTimerActive(false);
    }
    return () => clearInterval(interval);
  }, [timerActive, timeRemaining]);

  const shuffleCards = () => {
    setShuffledCards([...shuffledCards].sort(() => Math.random() - 0.5));
    setCurrentIndex(0);
    setIsFlipped(false);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % shuffledCards.length);
    setIsFlipped(false);
    updateProgress();
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + shuffledCards.length) % shuffledCards.length);
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

  const updateProgress = () => {
    setProgress(prev => ({
      ...prev,
      [currentTopic]: Math.min(100, ((currentIndex + 1) / shuffledCards.length) * 100)
    }));
  };

  const toggleBookmark = () => {
    const currentCard = shuffledCards[currentIndex];
    if (bookmarks.includes(currentCard)) {
      setBookmarks(bookmarks.filter(card => card !== currentCard));
    } else {
      setBookmarks([...bookmarks, currentCard]);
    }
  };

  const toggleTimer = () => {
    setTimerActive(!timerActive);
  };

  const resetTimer = () => {
    setTimeRemaining(300);
    setTimerActive(false);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    const filtered = flashcardsData[currentTopic].filter(
        card => card.question.toLowerCase().includes(e.target.value.toLowerCase()) ||
            card.answer.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setShuffledCards(filtered);
    setCurrentIndex(0);
  };

  const handleRating = (rating) => {
    const currentCard = shuffledCards[currentIndex];
    setCardRatings(prev => ({
      ...prev,
      [currentCard.id]: rating
    }));
    // You could use this rating to adjust the frequency of the card in future reviews
  };

  const currentCard = shuffledCards[currentIndex];

  if (!currentCard) {
    return <div>No flashcards available for this topic.</div>;
  }

  return (
      <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto">
          <h1 className="text-3xl font-extrabold text-gray-900 text-center mb-8">Python Built In Functions Flashcards</h1>

          {/* Topic selector and search bar */}
          <div className="mb-6 space-y-4">
            <select
                value={currentTopic}
                onChange={handleTopicChange}
                className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {Object.entries(topicTitles).map(([key, title]) => (
                  <option key={key} value={key}>{title}</option>
              ))}
            </select>
            <input
                type="text"
                placeholder="Search cards..."
                value={searchTerm}
                onChange={handleSearch}
                className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Flashcard */}
          <Flashcard
              question={currentCard.question}
              answer={currentCard.answer}
              onFlip={handleFlip}
              isFlipped={isFlipped}
              onRate={handleRating}
          />

          {/* Features and navigation */}
          <div className="mt-8 space-y-4">
            <div className="flex justify-between">
              <button onClick={shuffleCards} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                Shuffle
              </button>
              <button onClick={toggleBookmark} className={`${bookmarks.includes(currentCard) ? 'bg-yellow-500' : 'bg-gray-300'} hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded`}>
                Bookmark
              </button>
              <button onClick={toggleTimer} className={`${timerActive ? 'bg-red-500' : 'bg-blue-500'} hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}>
                {timerActive ? 'Stop Timer' : 'Start Timer'}
              </button>
            </div>

            {timerActive && (
                <div className="text-center">
                  Time remaining: {Math.floor(timeRemaining / 60)}:{(timeRemaining % 60).toString().padStart(2, '0')}
                </div>
            )}

            <div className="bg-white rounded-lg p-2">
              Progress: {Math.round(progress[currentTopic] || 0)}%
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{width: `${progress[currentTopic] || 0}%`}}></div>
              </div>
            </div>

            {cardRatings[currentCard.id] && (
                <div className="text-center">
                  Your rating: {cardRatings[currentCard.id]} / 5
                </div>
            )}

            <div className="flex justify-between items-center">
              <button
                  onClick={handlePrevious}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Previous
              </button>
              <span className="text-gray-600">
              {currentIndex + 1} / {shuffledCards.length}
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
      </div>
  );
};