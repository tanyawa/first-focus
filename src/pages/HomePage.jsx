import React from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';
import { ArrowRight, Shield, Users, BookOpen, Smartphone, Eye, MessageCircle, Heart } from 'lucide-react';

const HomePage = ({ onNavigate }) => {
  const { language } = useLanguage();
  const t = translations[language];

  const benefits = [
    {
      icon: Shield,
      title: t.home.earlyDetection,
      description: t.home.earlyDetectionDesc
    },
    {
      icon: Users,
      title: t.home.personalizedGuidance,
      description: t.home.personalizedGuidanceDesc
    },
    {
      icon: BookOpen,
      title: t.home.researchBacked,
      description: t.home.researchBackedDesc
    },
    {
      icon: Smartphone,
      title: t.home.convenientAccess,
      description: t.home.convenientAccessDesc
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                {t.home.heroTitle}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                {t.home.heroSubtitle}
              </p>
              <Button 
                size="lg" 
                onClick={() => onNavigate('assessment')}
                className="text-lg px-8 py-6 h-auto"
              >
                {t.home.startAssessment}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="relative">
              <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <Heart className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Virtual Autism Screening</h3>
                    <p className="text-muted-foreground">AI-Powered Assessment</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Smartphone className="h-5 w-5 text-primary" />
                    <span className="text-sm">Screen Time Behavior</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Eye className="h-5 w-5 text-secondary" />
                    <span className="text-sm">Social Responsiveness</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MessageCircle className="h-5 w-5 text-accent" />
                    <span className="text-sm">Communication Skills</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Heart className="h-5 w-5 text-primary" />
                    <span className="text-sm">Emotional Behavior</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is First Focus Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t.home.whatIsFirstFocus}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t.home.firstFocusDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t.home.keyBenefits}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm leading-relaxed">
                      {benefit.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 md:p-12 text-center text-primary-foreground">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {language === 'en' 
                ? "Ready to assess your child's development?"
                : "พร้อมประเมินพัฒนาการของบุตรหลานแล้วหรือยัง?"
              }
            </h2>
            <p className="text-lg mb-8 opacity-90">
              {language === 'en'
                ? "Take our free 5-minute assessment and get personalized recommendations."
                : "ทำแบบประเมินฟรี 5 นาทีและรับคำแนะนำเฉพาะบุคคล"
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary"
                onClick={() => onNavigate('assessment')}
                className="text-lg px-8 py-6 h-auto"
              >
                {t.home.startAssessment}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => onNavigate('about')}
                className="text-lg px-8 py-6 h-auto bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                {t.common.learnMore}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

