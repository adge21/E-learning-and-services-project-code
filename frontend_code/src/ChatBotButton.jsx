import React, { useState } from 'react';

const ChatBotButton = () => {
  const [showChat, setShowChat] = useState(false);
  const [chatLog, setChatLog] = useState([]);

  const toggleChat = () => setShowChat(!showChat);

  const handleChatSubmit = (e) => {
    e.preventDefault();
    const message = e.target.elements.message.value.trim();
    if (message !== '') {
      setChatLog((prevLog) => [...prevLog, { sender: 'user', message }]);
      e.target.elements.message.value = '';
      handleBotResponse(message);
    }
  };

  const handleBotResponse = (message) => {
    const lowercaseMessage = message.toLowerCase();
    if (lowercaseMessage === 'hi' || lowercaseMessage === 'Hi' || lowercaseMessage === 'HI') {
      setChatLog((prevLog) => [
        ...prevLog,
        {
          sender: 'bot',
          message: 'Hi. Welcome to eshiksha. Please checkout our courses and services',
        },
      ]);
    }
    else if (lowercaseMessage === 'courses' || lowercaseMessage === 'show courses' || lowercaseMessage === 'Courses' || lowercaseMessage === 'Show courses' || lowercaseMessage === 'courselist' || lowercaseMessage === 'course') {
      setChatLog((prevLog) => [
        ...prevLog,
        {
          sender: 'bot',
          message: 'We have three courses as of right now Web Development, Digital marketing, Finance',
        },
      ]);
    }
    else if (lowercaseMessage === 'web development' || lowercaseMessage === 'web' || lowercaseMessage === 'development') {
      setChatLog((prevLog) => [
        ...prevLog,
        {
          sender: 'bot',
          message: 'You may want to check out our Web Development course.',
        },
      ]);
    } else if (lowercaseMessage === 'digital marketing' || lowercaseMessage === 'digital' || lowercaseMessage === 'marketing' || lowercaseMessage === 'Digital Marketing') {
      setChatLog((prevLog) => [
        ...prevLog,
        {
          sender: 'bot',
          message: 'You may want to check out our Digital Marketing course.',
        },
      ]);
    } else if (lowercaseMessage === 'finance' || lowercaseMessage === 'Finance' || lowercaseMessage === 'money' || lowercaseMessage === 'Money') {
      setChatLog((prevLog) => [
        ...prevLog,
        {
          sender: 'bot',
          message: 'You may want to check out our Finance course.',
        },
      ]);
    } else {
      setChatLog((prevLog) => [
        ...prevLog,
        {
          sender: 'bot',
          message: "I'm sorry, I don't understand. Please choose from the following options: Web Development, Digital Marketing, or Finance.",
        },
      ]);
    }
  };

  return (
    <>
      <button onClick={toggleChat} style={{ position: 'fixed', bottom: '0', right: '0' }}>Chat with us</button>
      {showChat && (
        <div style={{ position: 'fixed', bottom: '0', right: '0' }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              height: '400px',
              width: '300px',
              backgroundColor: '#fff',
              borderRadius: '10px',
              boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                height: '100%',
                padding: '10px',
                overflowY: 'scroll',
              }}
            >
              {chatLog.map((log, index) => (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    flexDirection:
                      log.sender === 'bot' ? 'row-reverse' : 'row',
                    alignItems: 'center',
                    marginBottom: '10px',
                  }}
                >
                  {log.sender === 'bot' && (
                    <img
                      src="https://via.placeholder.com/30x30.png?text=Bot"
                      alt="Bot"
                      style={{ marginRight: '10px' }}
                    />
                  )}
                  <div
                    style={{
                      backgroundColor:
                        log.sender === 'bot' ? '#f1f0f0' : '#e3f2fd',
                      padding: '10px',
                      borderRadius: '10px',
                      maxWidth: '70%',
                    }}
                  >
                    <p
                      style={{
                        margin: '0',
                        wordWrap: 'break-word',
                        whiteSpace: 'pre-wrap',
                      }}
                    >
                      {log.message}
                    </p>
                  </div>
                  {log.sender === 'user' && (
                    <img
                      src="https://via.placeholder.com/30x30.png?text=User"
                      alt="User"
                      style={{ marginLeft: '10px' }}
                    />
                  )}
                </div>
              ))}
            </div>
            <form onSubmit={handleChatSubmit} style={{ padding: '10px' }}>
              <input
                type="text"
                name="message"
                placeholder="Type a message"
                style={{ width: '100%', borderRadius: '20px', padding: '10px' }}
              />
            </form>
          </div>
        </div>
      )}
    </>
);
};

export default ChatBotButton;    