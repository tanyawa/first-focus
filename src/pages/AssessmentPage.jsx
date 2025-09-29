import React, { useState, useEffect } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Progress } from '../components/ui/progress';
import { RadioGroup, RadioGroupItem } from '../components/ui/radio-group';
import { Label } from '../components/ui/label';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';
import { questionCategories, getAllQuestions, calculateTotalScore, getRiskLevel, getHighestRiskCategory, calculateCategoryScore } from '../data/questions';
import { getRecommendations } from '../data/recommendations';
import { AlertTriangle, CheckCircle, Clock, Shield, ArrowLeft, ArrowRight, Download } from 'lucide-react';

const AssessmentPage = ({ onNavigate }) => {
  const { language } = useLanguage();
  const t = translations[language];
  
  const [currentStep, setCurrentStep] = useState('intro'); // 'intro', 'questions', 'results'
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [results, setResults] = useState(null);
  
  const allQuestions = getAllQuestions();
  const totalQuestions = allQuestions.length;
  const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100;

  const handleAnswer = (questionId, answerIndex) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: answerIndex
    }));
  };

  const handleNext = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      // Calculate results
      const totalScore = calculateTotalScore(answers);
      const riskLevel = getRiskLevel(totalScore);
      const highestRiskCategory = getHighestRiskCategory(answers);
      const recommendations = getRecommendations(riskLevel, highestRiskCategory, language);
      
      const categoryScores = questionCategories.map(category => ({
        id: category.id,
        name: t.assessment.categories[category.id],
        score: calculateCategoryScore(category.id, answers),
        maxScore: category.questions.reduce((sum, q) => sum + Math.max(...q.riskWeights), 0)
      }));

      setResults({
        totalScore,
        maxTotalScore: allQuestions.reduce((sum, q) => sum + Math.max(...q.riskWeights), 0),
        riskLevel,
        highestRiskCategory,
        categoryScores,
        recommendations
      });
      
      setCurrentStep('results');
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  const handleStartAssessment = () => {
    setCurrentStep('questions');
    setCurrentQuestionIndex(0);
    setAnswers({});
  };

  const handleRetakeAssessment = () => {
    setCurrentStep('intro');
    setCurrentQuestionIndex(0);
    setAnswers({});
    setResults(null);
  };

  const currentQuestion = allQuestions[currentQuestionIndex];
  const currentAnswer = answers[currentQuestion?.id];

  if (currentStep === 'intro') {
    return (
      <div className="min-h-screen py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {t.assessment.title}
              </h1>
            </div>

            <Card className="mb-8">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <AlertTriangle className="h-6 w-6 text-orange-500" />
                  <CardTitle className="text-lg">
                    {language === 'en' ? 'Important Disclaimer' : 'ข้อสำคัญ'}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {t.assessment.disclaimer}
                </p>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card>
                <CardHeader className="text-center">
                  <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
                  <CardTitle className="text-lg">
                    {language === 'en' ? 'Quick Assessment' : 'ประเมินรวดเร็ว'}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">{t.assessment.timeEstimate}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <Shield className="h-8 w-8 text-primary mx-auto mb-2" />
                  <CardTitle className="text-lg">
                    {language === 'en' ? 'Privacy Protected' : 'ปกป้องความเป็นส่วนตัว'}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">{t.assessment.privacyNote}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <CheckCircle className="h-8 w-8 text-primary mx-auto mb-2" />
                  <CardTitle className="text-lg">
                    {language === 'en' ? 'Research-Based' : 'อิงจากงานวิจัย'}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">
                    {language === 'en' 
                      ? '20 questions covering 4 key behavioral areas'
                      : '20 คำถามครอบคลุม 4 ด้านพฤติกรรมหลัก'
                    }
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <Button 
                size="lg" 
                onClick={handleStartAssessment}
                className="text-lg px-8 py-6 h-auto"
              >
                {t.assessment.startButton}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (currentStep === 'questions') {
    return (
      <div className="min-h-screen py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Progress */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-muted-foreground">
                  {t.assessment.progress.replace('{{current}}', currentQuestionIndex + 1).replace('{{total}}', totalQuestions)}
                </span>
                <span className="text-sm text-muted-foreground">
                  {Math.round(progress)}%
                </span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>

            {/* Question */}
            <Card>
              <CardHeader>
                <div className="mb-4">
                  <span className="text-sm text-primary font-medium">
                    {t.assessment.categories[currentQuestion.category]}
                  </span>
                </div>
                <CardTitle className="text-xl leading-relaxed">
                  {t.assessment.questions[currentQuestion.id].question}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <RadioGroup 
                  value={currentAnswer?.toString()} 
                  onValueChange={(value) => handleAnswer(currentQuestion.id, parseInt(value))}
                >
                  {t.assessment.questions[currentQuestion.id].options.map((option, index) => (
                    <div key={index} className="flex items-center space-x-2 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                      <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                      <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer">
                        {option}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </CardContent>
            </Card>

            {/* Navigation */}
            <div className="flex justify-between mt-8">
              <Button 
                variant="outline" 
                onClick={handlePrevious}
                disabled={currentQuestionIndex === 0}
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                {t.assessment.previousButton}
              </Button>
              
              <Button 
                onClick={handleNext}
                disabled={currentAnswer === undefined}
              >
                {currentQuestionIndex === totalQuestions - 1 ? t.assessment.submitButton : t.assessment.nextButton}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (currentStep === 'results' && results) {
    const getRiskLevelColor = (level) => {
      switch (level) {
        case 'low': return 'text-green-600';
        case 'medium': return 'text-yellow-600';
        case 'high': return 'text-red-600';
        default: return 'text-muted-foreground';
      }
    };

    const getRiskLevelBg = (level) => {
      switch (level) {
        case 'low': return 'bg-green-100 border-green-200';
        case 'medium': return 'bg-yellow-100 border-yellow-200';
        case 'high': return 'bg-red-100 border-red-200';
        default: return 'bg-muted';
      }
    };

    return (
      <div className="min-h-screen py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {t.assessment.results.title}
              </h1>
            </div>

            {/* Risk Level */}
            <Card className={`mb-8 ${getRiskLevelBg(results.riskLevel)}`}>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl mb-2">
                  {t.assessment.results.riskLevel}
                </CardTitle>
                <div className={`text-3xl font-bold ${getRiskLevelColor(results.riskLevel)}`}>
                  {t.assessment.results[`${results.riskLevel}Risk`]}
                </div>
                <CardDescription className="text-lg mt-4">
                  {t.assessment.results[`${results.riskLevel}RiskDesc`]}
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-lg font-medium">
                  {t.assessment.results.totalScore.replace('{{score}}', results.totalScore).replace('{{total}}', results.maxTotalScore)}
                </p>
              </CardContent>
            </Card>

            {/* Category Breakdown */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>{t.assessment.results.categoryBreakdown}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {results.categoryScores.map((category) => (
                    <div key={category.id}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">{category.name}</span>
                        <span className="text-sm text-muted-foreground">
                          {category.score}/{category.maxScore}
                        </span>
                      </div>
                      <Progress 
                        value={(category.score / category.maxScore) * 100} 
                        className="h-2"
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recommendations */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>{t.assessment.results.recommendations}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-3">{results.recommendations.primary.title}</h3>
                    <ul className="space-y-2">
                      {results.recommendations.primary.strategies.map((strategy, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{strategy}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {results.recommendations.secondary && (
                    <div>
                      <h3 className="font-semibold text-lg mb-3">{results.recommendations.secondary.title}</h3>
                      <ul className="space-y-2">
                        {results.recommendations.secondary.strategies.map((strategy, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{strategy}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={handleRetakeAssessment}
                variant="outline"
              >
                {t.assessment.results.retakeAssessment}
              </Button>
              <Button 
                size="lg" 
                onClick={() => onNavigate('resources')}
              >
                {language === 'en' ? 'View Resources' : 'ดูแหล่งข้อมูล'}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default AssessmentPage;

