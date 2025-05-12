import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { HomePage } from './pages/HomePage';
import { QRCodePage } from './pages/QRCodePage';
import { Header } from './components/Header';
import { useEffect } from 'react';

function App() {
  // Load fonts
  useEffect(() => {
    // Add Google Fonts
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Montserrat:wght@400;500;600;700;800&display=swap';
    document.head.appendChild(link);
    
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <ThemeProvider>
      <div className="flex flex-col h-screen w-screen overflow-x-hidden bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 transition-colors duration-200 font-sans">
        <Router>
          <Header />
          <main className="flex-1 overflow-y-auto">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/qrcode" element={<QRCodePage />} />
            </Routes>
          </main>
          <footer className="py-6 border-t border-neutral-200 dark:border-neutral-800">
            <div className="container mx-auto px-4 text-center">
              <p className="text-neutral-600 dark:text-neutral-400">
                © {new Date().getFullYear()} Digital Café • All rights reserved
              </p>
              <div className="mt-4 flex justify-center space-x-4">
                <a href="#" className="text-neutral-500 hover:text-primary-500 transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="text-neutral-500 hover:text-primary-500 transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-neutral-500 hover:text-primary-500 transition-colors">
                  Contact Us
                </a>
              </div>
            </div>
          </footer>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
