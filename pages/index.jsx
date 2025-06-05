import { useEffect, useState } from 'react';

export default function Home() {
  const [showYahn, setShowYahn] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [showOptions, setShowOptions] = useState(false);

  useEffect(() => {
    // Trigger fade-ins
    const timer1 = setTimeout(() => setShowYahn(true), 1000);
    const timer2 = setTimeout(() => setShowMessage(true), 2000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const handleYahnClick = () => {
    setShowOptions(true);
  };

  return (
    <div style={styles.container}>
      <div
        onClick={handleYahnClick}
        style={{
          ...styles.yahn,
          opacity: showYahn ? 1 : 0,
          transition: 'opacity 1s ease',
        }}
      >
        YAHN
      </div>

      <div
        style={{
          ...styles.message,
          opacity: showMessage ? 1 : 0,
          transition: 'opacity 1s ease',
        }}
      >
        You made it. I'm happy you're here. Welcome.
      </div>

      {showOptions && (
        <div style={{ ...styles.optionsContainer, opacity: showOptions ? 1 : 0, transition: 'opacity 1s ease' }}>
          <div style={styles.option}>👤 Personal</div>
          <div style={styles.option}>💬 Group</div>
          <div style={styles.option}>ℹ️ About</div>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    height: '100vh',
    background: 'linear-gradient(135deg, #d1e0e0, #f0f0f0)', // soft pastel cloud-like gradient
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    fontFamily: 'Arial, sans-serif',
  },
  yahn: {
    fontSize: '3em',
    fontWeight: 'bold',
    color: '#6a6a6a',
    cursor: 'pointer',
  },
  message: {
    marginTop: '20px',
    fontSize: '1.2em',
    color: '#6a6a6a',
    textAlign: 'center',
  },
  optionsContainer: {
    marginTop: '40px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  option: {
    margin: '10px',
    fontSize: '1.5em',
    color: '#6a6a6a',
    cursor: 'pointer',
  },
};
