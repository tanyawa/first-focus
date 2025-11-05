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
import C1 from './assets/C1.jpg';
import C2 from './assets/C2.jpg';
import C3 from './assets/C3.jpg';
import C4 from './assets/C4.jpg';

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
      <p className="text-lg text-muted-foreground">
        <ul class="list-disc list-inside">
          <li>Detroja, P., & Bhatia, R. (2024). Virtual autism: A rising concern in the digital age. Journal of Pediatric 
              lopment, 15(3), 234–248.</li>
          <li>Garg, S., Kumar, A., & Sharma, P. (2024). Screen time and social responsiveness in early childhood: 
              itudinal study. Child Development Research, 28(4), 412–427.</li>
          <li> Heffler, K. F., Sienko, D. M., Subedi, K., McCann, K. A., & Bennett, D. S. (2022). Association of early
              life social and digital media experiences with development of autism spectrum disorder-like 
              symptoms. JAMA Pediatrics, 176(7), 690–696. https://doi.org/10.1001/jamapediatrics.2022.1234</li>
          <li>Kushima, M., Kojima, R., Shinohara, R., Horiuchi, S., Otawa, S., Ooka, T., … & Yamazaki, S. (2022). 
              Association between screen time exposure in children at 1 year of age and autism spectrum 
              disorder at 3 years of age: The Japan Environment and Children’s Study. JAMA Pediatrics, 176(4), 
              384–391. https://doi.org/10.1001/jamapediatrics.2021.5778 </li>
          <li>Marcelli, D. (2019). Virtual autism: A new developmental disorder associated with excessive screen 
              exposure in young children. European Journal of Pediatrics, 178(8), 1145–1152. 
              https://doi.org/10.1007/s00431-019-03369-7</li>
          <li>Sarfraz, M., Khan, A., & Ibrahim, M. (2023). Digital media exposure and behavioral patterns in 
              preschool children: Implications for virtual autism. International Journal of Environmental 
              Research and Public Health, 20(12), 5847. https://doi.org/10.3390/ijerph201258477</li>
          <li>World Health Organization. (2019). Guidelines on physical activity, sedentary behaviour and sleep 
              for children under 5 years of age. Geneva: WHO. 
              American Academy of Pediatrics. (2016). Media and young minds. Pediatrics, 138(5), e20162591. 
              https://doi.org/10.1542/peds.2016-2591</li>
        </ul>
        {/* <img src="C1" alt="C1" />
        <img src="C2" alt="C2" />
        <img src="C3" alt="C3" />
        <img src="C4" alt="C4" /> */}
      </p>
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
