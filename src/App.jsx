import React, { useState } from 'react';
import './App.css';
import { LanguageProvider } from './contexts/LanguageContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Header from './components/Header';
import AuthenticatedHeader from './components/AuthenticatedHeader';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AssessmentPage from './pages/AssessmentPage';
import ImprovedAssessmentPage from './pages/ImprovedAssessmentPage';
import AuthPage from './pages/AuthPage';
import DashboardPage from './pages/DashboardPage';

// Placeholder components for other pages
const AboutPage = () => (
  <div className="min-h-screen py-16">
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold mb-8">About Virtual Autism</h1>
      <p className="text-lg text-muted-foreground">Coming soon...</p>
    </div>
  </div>
);

const HowItWorksPage = () => (
  <div className="min-h-screen py-16">
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold mb-8">How It Works</h1>
      <p className="text-lg text-muted-foreground">Coming soon...</p>
    </div>
  </div>
);

const ResourcesPage = () => (
  <div className="min-h-screen py-16">
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold mb-8">Resources</h1>
      <p className="text-lg text-muted-foreground">Coming soon...</p>
    </div>
  </div>
);

const FAQPage = () => (
  <div className="min-h-screen py-16">
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold mb-8">FAQ</h1>
      <p className="text-lg text-muted-foreground">Coming soon...</p>
    </div>
  </div>
);

const ContactPage = () => (
  <div className="min-h-screen py-16">
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
      <p className="text-lg text-muted-foreground">Coming soon...</p>
    </div>
  </div>
);

// Main App Content Component
const AppContent = () => {
  const { user } = useAuth();
  const [currentPage, setCurrentPage] = useState('home');

  const handleAuthSuccess = () => {
    setCurrentPage('dashboard');
  };

  const handleStartAssessment = () => {
    setCurrentPage('improvedAssessment');
  };

  const handleAssessmentComplete = () => {
    if (user) {
      setCurrentPage('dashboard');
    } else {
      setCurrentPage('home');
    }
  };

  const renderPage = () => {
    // If user is authenticated, show authenticated pages
    if (user) {
      switch (currentPage) {
        case 'dashboard':
          return <DashboardPage onStartAssessment={handleStartAssessment} />;
        case 'improvedAssessment':
          return <ImprovedAssessmentPage onComplete={handleAssessmentComplete} />;
        case 'about':
          return <AboutPage />;
        case 'howItWorks':
          return <HowItWorksPage />;
        case 'resources':
          return <ResourcesPage />;
        case 'faq':
          return <FAQPage />;
        case 'contact':
          return <ContactPage />;
        default:
          return <DashboardPage onStartAssessment={handleStartAssessment} />;
      }
    }

    // If user is not authenticated, show public pages
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} />;
      case 'about':
        return <AboutPage />;
      case 'howItWorks':
        return <HowItWorksPage />;
      case 'assessment':
        return <AssessmentPage onNavigate={setCurrentPage} />;
      case 'resources':
        return <ResourcesPage />;
      case 'faq':
        return <FAQPage />;
      case 'contact':
        return <ContactPage />;
      case 'auth':
        return <AuthPage onSuccess={handleAuthSuccess} />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {user ? (
        <AuthenticatedHeader currentPage={currentPage} onNavigate={setCurrentPage} />
      ) : (
        <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      )}
      <main>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

// Root App Component
function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <LanguageProvider>
          <AppContent />
        </LanguageProvider>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
