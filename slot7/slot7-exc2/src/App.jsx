import React from 'react';
import { Button } from 'react-bootstrap';
import { ChatDotsFill } from 'react-bootstrap-icons';
import { ThemeProvider } from './contexts/ThemeContext';
import { Header } from './components/layout/Header';
import { AppRouter } from './routes/AppRouter';

function App() {
  return (
    <ThemeProvider>
      <div className="min-vh-100 d-flex flex-column transition-all">
        <Header />
        
        <main className="flex-grow-1">
          <AppRouter />
        </main>
        
        {/* Nút Floating AI Button */}
        <Button 
          variant="success" 
          className="position-fixed bottom-0 end-0 m-4 rounded-circle shadow-lg d-flex align-items-center justify-content-center z-3"
          style={{ width: '60px', height: '60px' }}
        >
          <ChatDotsFill size={24} />
        </Button>
      </div>
    </ThemeProvider>
  );
}

export default App;