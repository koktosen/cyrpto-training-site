// Store all station data for easier management
const stationData = [
    { name: 'Blockchain Foundation', icon: '🧱' },
    { name: 'Transactions & Smart Contracts', icon: '💸' },
    { name: 'Accounts & NFTs', icon: '👤' },
    { name: 'Viewing Transactions', icon: '🔍' },
    { name: 'Crypto Exchanges', icon: '🏪' },
    { name: 'Hot Wallets', icon: '📱' },
    { name: 'Crypto Taxes', icon: '💰' },
    { name: 'Cold Wallets', icon: '🧊' },
    { name: 'Wallet Transactions', icon: '🔄' }
];

// Track user progress for analytics
let userProgress = {
    visitedStations: new Set(),
    timeSpent: {},
    lastOpenedStation: null,
    startTime: Date.now()
};

// Track open stations
let openStations = new Set();

// Session storage to remember progress
function saveProgress() {
    const progress = {
        visitedStations: Array.from(userProgress.visitedStations),
        timeSpent: userProgress.timeSpent,
        lastOpenedStation: userProgress.lastOpenedStation
    };
    localStorage.setItem('crypto_progress', JSON.stringify(progress));
}

function loadProgress() {
    const savedProgress = localStorage.getItem('crypto_progress');
    if (savedProgress) {
        const progress = JSON.parse(savedProgress);
        userProgress.visitedStations = new Set(progress.visitedStations);
        userProgress.timeSpent = progress.timeSpent;
        userProgress.lastOpenedStation = progress.lastOpenedStation;
        
        // Visual indication of visited stations
        userProgress.visitedStations.forEach(index => {
            const stationNode = document.querySelector(`.station:nth-child(${parseInt(index) + 1}) .station-node`);
            if (stationNode) {
                stationNode.innerHTML += '<span class="visited-indicator">✓</span>';
            }
        });
        
        // Update progress message
        updateProgressMessage();
    }
}

function updateProgressMessage() {
    const visited = userProgress.visitedStations.size;
    const total = stationData.length;
    const percent = Math.round((visited / total) * 100);
    
    let message;
    if (visited === 0) {
        message = 'Welcome to the Crypto Subway! Click a station to begin 🚀';
    } else if (visited === total) {
        message = 'Congratulations! You\'ve explored all stations! 🎉';
    } else {
        message = `Progress: ${visited}/${total} stations visited (${percent}%) 🚂`;
    }
    
    updateProgressIndicator(message);
}

function openStation(index) {
    const panel = document.getElementById(`panel-${index}`);
    
    // Record start time for this station
    const startTime = Date.now();
    
    // Track analytics
    if (!userProgress.visitedStations.has(index)) {
        userProgress.visitedStations.add(index);
        
        // Visual indication this station was visited
        const stationNode = document.querySelector(`.station:nth-child(${parseInt(index) + 1}) .station-node`);
        if (stationNode) {
            const visitedIndicator = document.createElement('span');
            visitedIndicator.className = 'visited-indicator';
            visitedIndicator.textContent = '✓';
            stationNode.appendChild(visitedIndicator);
        }
    }
    
    // If we have a previously opened station, record time spent there
    if (userProgress.lastOpenedStation !== null) {
        const timeSpent = Date.now() - startTime;
        userProgress.timeSpent[userProgress.lastOpenedStation] = 
            (userProgress.timeSpent[userProgress.lastOpenedStation] || 0) + timeSpent;
    }
    
    userProgress.lastOpenedStation = index;
    
    // Close other panels first
    closeAllStations();
    
    // Open this panel
    panel.classList.add('active');
    openStations.add(index);
    
    // Update progress indicator
    updateProgressIndicator(`Now exploring: ${stationData[index].name} ${stationData[index].icon}`);
    
    // Scroll to show the panel with smooth animation
    setTimeout(() => {
        panel.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 100);
    
    // Save progress to localStorage
    saveProgress();
}

function closeStation(index) {
    const panel = document.getElementById(`panel-${index}`);
    panel.classList.remove('active');
    openStations.delete(index);
    
    // Record time spent on this station
    if (userProgress.lastOpenedStation === index) {
        const timeSpent = Date.now() - userProgress.startTime;
        userProgress.timeSpent[index] = (userProgress.timeSpent[index] || 0) + timeSpent;
        userProgress.lastOpenedStation = null;
    }
    
    updateProgressMessage();
    saveProgress();
}

function closeAllStations() {
    for (let i = 0; i < stationData.length; i++) {
        const panel = document.getElementById(`panel-${i}`);
        panel.classList.remove('active');
    }
    openStations.clear();
}

function openAllStations() {
    for (let i = 0; i < stationData.length; i++) {
        const panel = document.getElementById(`panel-${i}`);
        panel.classList.add('active');
        openStations.add(i);
        
        // Mark all as visited
        if (!userProgress.visitedStations.has(i)) {
            userProgress.visitedStations.add(i);
        }
    }
    updateProgressIndicator('All stations open - explore the entire crypto subway! 🌟');
    saveProgress();
}

function updateProgressIndicator(message) {
    const indicator = document.getElementById('progressIndicator');
    indicator.textContent = message;
}

// Keyboard navigation with accessibility improvements
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeAllStations();
    }
    if (e.key >= '1' && e.key <= '9') {
        const stationIndex = parseInt(e.key) - 1;
        openStation(stationIndex);
    }
});

// Auto-hide panels when clicking outside
document.addEventListener('click', function(e) {
    if (!e.target.closest('.content-panel') && !e.target.closest('.station')) {
        // Don't close if clicking navigation buttons
        if (!e.target.closest('.nav-buttons')) {
            closeAllStations();
        }
    }
});

// Add touch swipe support for mobile
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
}, false);

document.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
}, false);

function handleSwipe() {
    const currentIndex = userProgress.lastOpenedStation;
    if (currentIndex === null) return;
    
    // Swipe threshold
    const threshold = 100;
    
    // Left swipe (next station)
    if (touchEndX < touchStartX - threshold && currentIndex < stationData.length - 1) {
        openStation(currentIndex + 1);
    }
    
    // Right swipe (previous station)
    if (touchEndX > touchStartX + threshold && currentIndex > 0) {
        openStation(currentIndex - 1);
    }
}

// Quiz functionality
let quizQuestions = [
    {
        question: "What is blockchain?",
        options: [
            "A type of cryptocurrency", 
            "A chain of blocks containing transaction data", 
            "A software for mining Bitcoin", 
            "A digital wallet"
        ],
        correctAnswer: 1,
        explanation: "Blockchain is a digital ledger of transactions that is duplicated and distributed across a network of computer systems, forming a 'chain' of blocks containing data."
    },
    {
        question: "Which of these is NOT a characteristic of blockchain technology?",
        options: [
            "Decentralization", 
            "Transparency", 
            "Centralized control", 
            "Immutability"
        ],
        correctAnswer: 2,
        explanation: "Blockchain is specifically designed to avoid centralized control. Instead, it uses a distributed network where no single entity has control."
    },
    {
        question: "What is a cryptocurrency wallet?",
        options: [
            "A physical device to store cryptocurrency coins", 
            "A software that stores your private and public keys", 
            "A bank account for digital currencies", 
            "An exchange platform"
        ],
        correctAnswer: 1,
        explanation: "A cryptocurrency wallet is a software program that stores your private and public keys and interfaces with blockchain to enable users to send and receive digital currency."
    },
    {
        question: "What is a 'hot wallet' in cryptocurrency?",
        options: [
            "A wallet with a lot of funds", 
            "A wallet that is always online", 
            "A physical hardware wallet", 
            "A wallet that has been hacked"
        ],
        correctAnswer: 1,
        explanation: "A hot wallet is connected to the internet and therefore accessible online. This makes it convenient for transactions but potentially more vulnerable to hacking."
    },
    {
        question: "What is a 'smart contract'?",
        options: [
            "A legally binding agreement for cryptocurrency exchanges", 
            "A digital contract that requires lawyer verification", 
            "Self-executing code stored on blockchain that runs when conditions are met", 
            "An agreement between miners"
        ],
        correctAnswer: 2,
        explanation: "A smart contract is a self-executing contract with the terms directly written into code. The code and the agreements exist on the blockchain network, and execute automatically when predefined conditions are met."
    },
    {
        question: "What is a 'block explorer'?",
        options: [
            "A tool to mine new blocks", 
            "Software to create new blockchains", 
            "A search engine for finding blockchains", 
            "A browser tool for viewing blockchain transactions"
        ],
        correctAnswer: 3,
        explanation: "A block explorer is a browser for the blockchain that allows users to search and navigate the blockchain for transactions, addresses, and other information."
    },
    {
        question: "What is 'cold storage' in cryptocurrency?",
        options: [
            "Storing crypto in a cold environment for security", 
            "Keeping cryptocurrency offline", 
            "Freezing accounts temporarily", 
            "Storing inactive cryptocurrencies"
        ],
        correctAnswer: 1,
        explanation: "Cold storage refers to keeping a cryptocurrency wallet offline to reduce the risk of hacking. This can be done through hardware wallets, paper wallets, or other methods."
    },
    {
        question: "When does a cryptocurrency transaction become irreversible?",
        options: [
            "Immediately after sending", 
            "After one confirmation", 
            "After multiple confirmations on the blockchain", 
            "After 24 hours"
        ],
        correctAnswer: 2,
        explanation: "Cryptocurrency transactions generally become more irreversible with each confirmation (block added to the blockchain). The number of confirmations needed varies by cryptocurrency, but multiple confirmations are standard for full security."
    },
    {
        question: "What is 'DeFi'?",
        options: [
            "Digital Finance", 
            "Decentralized Finance", 
            "Distributed Financial instruments", 
            "Digital Fiat currency"
        ],
        correctAnswer: 1,
        explanation: "DeFi stands for Decentralized Finance, which refers to financial applications built on blockchain technologies, typically using smart contracts on blockchains like Ethereum."
    },
    {
        question: "What is an NFT?",
        options: [
            "New Financial Token", 
            "National Funds Transfer", 
            "Non-Fungible Token", 
            "Network Function Technology"
        ],
        correctAnswer: 2,
        explanation: "NFT stands for Non-Fungible Token. Unlike cryptocurrencies where each token is identical (fungible), NFTs are unique digital assets with distinct values and characteristics, often used for digital art and collectibles."
    }
];

let currentQuestion = 0;
let selectedOption = null;
let quizActive = false;

function toggleQuizMode() {
    const quizOverlay = document.getElementById('quiz-overlay');
    
    if (quizActive) {
        quizOverlay.style.display = 'none';
        quizActive = false;
    } else {
        quizOverlay.style.display = 'flex';
        quizActive = true;
        currentQuestion = 0;
        loadQuestion();
    }
}

function loadQuestion() {
    const questionData = quizQuestions[currentQuestion];
    const questionElement = document.getElementById('quiz-question');
    const optionsElement = document.getElementById('quiz-options');
    const feedbackElement = document.getElementById('quiz-feedback');
    const progressElement = document.getElementById('quiz-progress');
    
    // Reset UI
    questionElement.textContent = questionData.question;
    optionsElement.innerHTML = '';
    feedbackElement.style.display = 'none';
    feedbackElement.innerHTML = '';
    document.getElementById('next-question-btn').disabled = true;
    selectedOption = null;
    
    // Create options
    questionData.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'quiz-option';
        optionElement.textContent = option;
        optionElement.dataset.index = index;
        
        optionElement.addEventListener('click', function() {
            // Remove selected class from all options
            document.querySelectorAll('.quiz-option').forEach(opt => {
                opt.classList.remove('selected');
            });
            
            // Add selected class to this option
            this.classList.add('selected');
            selectedOption = index;
        });
        
        optionsElement.appendChild(optionElement);
    });
    
    // Update progress
    progressElement.textContent = `Question ${currentQuestion + 1}/${quizQuestions.length}`;
}

function checkAnswer() {
    if (selectedOption === null) {
        alert('Please select an answer');
        return;
    }
    
    const questionData = quizQuestions[currentQuestion];
    const options = document.querySelectorAll('.quiz-option');
    const feedbackElement = document.getElementById('quiz-feedback');
    
    // Mark correct and incorrect
    options.forEach((option, index) => {
        if (index === questionData.correctAnswer) {
            option.classList.add('correct');
        } else if (index === selectedOption) {
            option.classList.add('incorrect');
        }
    });
    
    // Show feedback
    feedbackElement.style.display = 'block';
    feedbackElement.style.backgroundColor = selectedOption === questionData.correctAnswer ? '#c6f6d5' : '#fed7d7';
    feedbackElement.innerHTML = `
        <strong>${selectedOption === questionData.correctAnswer ? 'Correct!' : 'Incorrect!'}</strong>
        <p>${questionData.explanation}</p>
    `;
    
    // Enable next button
    document.getElementById('next-question-btn').disabled = false;
}

function nextQuestion() {
    currentQuestion++;
    
    if (currentQuestion >= quizQuestions.length) {
        // End of quiz
        const quizOptions = document.getElementById('quiz-options');
        const quizQuestion = document.getElementById('quiz-question');
        const feedbackElement = document.getElementById('quiz-feedback');
        const progressElement = document.getElementById('quiz-progress');
        
        quizOptions.innerHTML = '';
        quizQuestion.textContent = 'Quiz Complete!';
        feedbackElement.style.display = 'block';
        feedbackElement.style.backgroundColor = '#c6f6d5';
        feedbackElement.innerHTML = `
            <strong>Congratulations!</strong>
            <p>You've completed the Crypto 101 quiz. Keep exploring the subway map to learn more!</p>
        `;
        
        progressElement.textContent = `Completed ${quizQuestions.length}/${quizQuestions.length}`;
        
        document.getElementById('next-question-btn').disabled = true;
        document.getElementById('check-answer-btn').disabled = true;
    } else {
        // Load next question
        loadQuestion();
    }
}

// Notes functionality
let userNotes = [];

function toggleNotes() {
    const notesContainer = document.getElementById('notes-container');
    notesContainer.style.display = notesContainer.style.display === 'block' ? 'none' : 'block';
    
    if (notesContainer.style.display === 'block') {
        displayNotes();
    }
}

function addNote() {
    const noteText = document.getElementById('note-text').value.trim();
    
    if (noteText) {
        const newNote = {
            text: noteText,
            date: new Date(),
            stationId: userProgress.lastOpenedStation
        };
        
        userNotes.push(newNote);
        saveNotes();
        displayNotes();
        
        // Clear input
        document.getElementById('note-text').value = '';
    }
}

function displayNotes() {
    const notesList = document.getElementById('notes-list');
    notesList.innerHTML = '';
    
    if (userNotes.length === 0) {
        notesList.innerHTML = '<p style="color:#718096;text-align:center;">No notes yet. Start adding notes as you learn!</p>';
        return;
    }
    
    // Sort notes by date (newest first)
    userNotes.sort((a, b) => b.date - a.date);
    
    userNotes.forEach((note, index) => {
        const noteElement = document.createElement('div');
        noteElement.className = 'note-item';
        
        let stationName = 'General';
        if (note.stationId !== null && stationData[note.stationId]) {
            stationName = stationData[note.stationId].name;
        }
        
        const dateString = new Date(note.date).toLocaleString();
        
        noteElement.innerHTML = `
            <div>${note.text}</div>
            <div class="note-date">
                <strong>${stationName}</strong> - ${dateString}
                <button onclick="deleteNote(${index})" style="background:none;border:none;color:#e53e3e;cursor:pointer;font-size:0.9em;margin-left:5px;">🗑️</button>
            </div>
        `;
        
        notesList.appendChild(noteElement);
    });
}

function deleteNote(index) {
    if (confirm('Delete this note?')) {
        userNotes.splice(index, 1);
        saveNotes();
        displayNotes();
    }
}

function saveNotes() {
    localStorage.setItem('crypto_notes', JSON.stringify(userNotes));
}

function loadNotes() {
    const savedNotes = localStorage.getItem('crypto_notes');
    if (savedNotes) {
        userNotes = JSON.parse(savedNotes);
        // Convert date strings back to Date objects
        userNotes.forEach(note => {
            note.date = new Date(note.date);
        });
    }
}

function exportNotes() {
    if (userNotes.length === 0) {
        alert('You have no notes to export yet.');
        return;
    }
    
    let exportText = "# My Crypto Learning Notes\n\n";
    
    userNotes.forEach(note => {
        let stationName = 'General';
        if (note.stationId !== null && stationData[note.stationId]) {
            stationName = stationData[note.stationId].name;
        }
        
        const dateString = new Date(note.date).toLocaleString();
        
        exportText += `## ${stationName}\n`;
        exportText += `${note.text}\n`;
        exportText += `_${dateString}_\n\n`;
    });
    
    // Create a download link
    const blob = new Blob([exportText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'My_Crypto_Learning_Notes.txt';
    a.click();
    
    // Clean up
    URL.revokeObjectURL(url);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    // Load saved progress and notes
    loadProgress();
    loadNotes();
    
    // Initial welcome message
    setTimeout(() => {
        updateProgressMessage();
    }, 1000);
    
    // Add ARIA labels for accessibility
    document.querySelectorAll('.station').forEach((station, index) => {
        station.setAttribute('aria-label', `Station ${index + 1}: ${stationData[index].name}`);
        station.setAttribute('role', 'button');
        station.setAttribute('tabindex', '0');
        
        // Make it keyboard accessible
        station.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                openStation(index);
            }
        });
    });
    
    // Randomly shuffle quiz questions for variety
    quizQuestions = quizQuestions.sort(() => Math.random() - 0.5);
}); 