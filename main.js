const studyGuides = [
    { id: 'algorithms', title: 'Algorithms', path: './algorithms/index.html' },
    { id: 'linux', title: 'Linux', path: './linux/index.html' },
    // Add more study guides here
];

const StudyGuideSelector = () => {
    const [selectedGuide, setSelectedGuide] = React.useState('');

    const handleSelection = (e) => {
        const selectedId = e.target.value;
        setSelectedGuide(selectedId);  // Update the state with the selected value
        const guide = studyGuides.find(guide => guide.id === selectedId);
        if (guide) {
            // Redirect the user to the correct folder's index.html
            window.location.href = guide.path;
        } else {
            console.error('Study guide not found!');
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-6">
                    <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">Study Guides</h1>
                    <select
                        value={selectedGuide}
                        onChange={handleSelection}
                        className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="">Select a Study Guide</option>
                        {studyGuides.map(guide => (
                            <option key={guide.id} value={guide.id}>{guide.title}</option>
                        ))}
                    </select>
                    <div id="study-guide-content" className="mt-6"></div>
                </div>
            </div>
        </div>
    );
};

ReactDOM.render(<StudyGuideSelector />, document.getElementById('root'));
