import React, { useEffect, useState } from 'react';

export default function SubmitPassport() {
    const [name, setName] = useState('');
    const [currentScene, setCurrentScene] = useState('passport'); // 'passport', 'border', or 'options'
    const [dialogueIndex, setDialogueIndex] = useState(0);
    const [dialogueComplete, setDialogueComplete] = useState(false);

    const dialogue = [
        `Border Agent: Name?`,
        `You: ${name}`,
        `Border Agent: Purpose of visit`,
        `You: Tourism`,
        `Border Agent: I am sorry, your entry to America has been denied.`,
        `You: But why?`,
        `Border Agent: I do not need to explain. Welcome to Tijuana!`
    ];

    const characters = {
        guide1: {
            name: 'Carlos',
            description: 'A friendly local guide who knows the best spots in Tijuana.',
        },
        guide2: {
            name: 'Maria',
            description: 'An adventurous foodie who will take you on a culinary tour.',
        },
    };

    const [selectedCharacter, setSelectedCharacter] = useState(null);

    const handlePassportSubmit = () => {
        if (!name.trim()) {
            alert('Please enter your name!');
            return;
        }
        setCurrentScene('border');
        setDialogueIndex(0);
        setDialogueComplete(false);
    };

    const typeDialogue = () => {
        if (dialogueIndex < dialogue.length) {
            setTimeout(() => setDialogueIndex((prev) => prev + 1), 2000); // Typing delay
        } else {
            setDialogueComplete(true);
        }
    };

    const handleChooseOption = (option) => {
        setSelectedCharacter(characters[option]);
        setCurrentScene('character-intro');
    };

    const startJourney = () => {
        console.log(`Starting journey with: ${selectedCharacter.name}`);
        // Proceed to the next part of your app
    };

    // Automatically type dialogue when in the border scene
    React.useEffect(() => {
        if (currentScene === 'border' && dialogueIndex < dialogue.length) {
            typeDialogue();
        }
    }, [dialogueIndex, currentScene]);

    return (
        <div>
            {currentScene === 'passport' && (
                <div id="passport">
                    <h2>Passport Control</h2>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter your name"
                    />
                    <button onClick={handlePassportSubmit}>Submit Passport</button>
                </div>
            )}

            {currentScene === 'border' && (
                <div id="border-scene">
                    <h2>Border Scene</h2>
                    {dialogue.slice(0, dialogueIndex + 1).map((line, index) => (
                        <p key={index}>{line}</p>
                    ))}
                    {dialogueComplete && (
                        <button onClick={() => setCurrentScene('options')}>
                            Explore Tijuana
                        </button>
                    )}
                </div>
            )}

            {currentScene === 'options' && (
                <div id="options">
                    <h2>Choose Your Guide</h2>
                    {Object.keys(characters).map((key) => (
                        <button key={key} onClick={() => handleChooseOption(key)}>
                            {characters[key].name}
                        </button>
                    ))}
                </div>
            )}

            {currentScene === 'character-intro' && selectedCharacter && (
                <div id="character-intro">
                    <h3>Meet your guide: {selectedCharacter.name}</h3>
                    <p>
                        You have met {selectedCharacter.name}. {selectedCharacter.description}
                    </p>
                    <button onClick={startJourney}>Start your journey</button>
                </div>
            )}
        </div>
    );
}
