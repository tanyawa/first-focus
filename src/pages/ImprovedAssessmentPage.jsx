import React, { useState, useEffect } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Progress } from '../components/ui/progress';
import { Badge } from '../components/ui/badge';
import { RadioGroup, RadioGroupItem } from '../components/ui/radio-group';
import { Label } from '../components/ui/label';
import { useLanguage } from '../contexts/LanguageContext';
import { useAuth } from '../contexts/AuthContext';
import { translations } from '../data/translations';
import { questions } from '../data/questions';
import { recommendations } from '../data/recommendations';
import { ChevronLeft, ChevronRight, CheckCircle, AlertCircle, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ImprovedAssessmentPage = ({ onComplete }) => {
  const { language } = useLanguage();
  const { addAssessment } = useAuth();
  const t = translations[language];
  
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState(null);

  const totalQuestions = questions.length;
  const progress = ((currentQuestion + 1) / totalQuestions) * 100;
  const currentQ = questions[currentQuestion];

  // Auto-save answers
  useEffect(() => {
    const savedAnswers = localStorage.getItem('assessmentAnswers');
    if (savedAnswers) {
      try {
        const parsed = JSON.parse(savedAnswers);
        setAnswers(parsed);
        
        // Set selected answer for current question if it exists
        if (parsed[currentQuestion] !== undefined) {
          setSelectedAnswer(parsed[currentQuestion].toString());
        }
      } catch (error) {
        console.error('Error loading saved answers:', error);
      }
    }
  }, [currentQuestion]);

  // Save answers to localStorage
  useEffect(() => {
    localStorage.setItem('assessmentAnswers', JSON.stringify(answers));
  }, [answers]);

  const handleAnswerSelect = (value) => {
    setSelectedAnswer(value);
    const updatedAnswers = {
      ...answers,
      [currentQuestion]: parseInt(value)
    };
    setAnswers(updatedAnswers);
  };

  const handleNext = () => {
    if (!selectedAnswer) return;

    setIsTransitioning(true);
    
    setTimeout(() => {
      if (currentQuestion < totalQuestions - 1) {
        setCurrentQuestion(prev => prev + 1);
        // Set selected answer for next question if it exists
        const nextAnswer = answers[currentQuestion + 1];
        setSelectedAnswer(nextAnswer !== undefined ? nextAnswer.toString() : '');
      } else {
        // Calculate results
        calculateResults();
      }
      setIsTransitioning(false);
    }, 300);
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setIsTransitioning(true);
      
      setTimeout(() => {
        setCurrentQuestion(prev => prev - 1);
        // Set selected answer for previous question
        const prevAnswer = answers[currentQuestion - 1];
        setSelectedAnswer(prevAnswer !== undefined ? prevAnswer.toString() : '');
        setIsTransitioning(false);
      }, 300);
    }
  };

  const calculateResults = () => {
    const categoryScores = {
      screenTime: 0,
      social: 0,
      communication: 0,
      emotional: 0
    };

    // Calculate scores for each category
    questions.forEach((question, index) => {
      const answer = answers[index] || 0;
      categoryScores[question.category] += answer;
    });

    // Calculate total score and risk level
    const totalScore = Object.values(categoryScores).reduce((sum, score) => sum + score, 0);
    const maxPossibleScore = questions.length * 3; // Assuming max score per question is 3
    const riskPercentage = (totalScore / maxPossibleScore) * 100;

    let riskLevel;
    if (riskPercentage < 30) {
      riskLevel = 'low';
    } else if (riskPercentage < 60) {
      riskLevel = 'medium';
    } else {
      riskLevel = 'high';
    }

    // Get recommendations based on highest risk category
    const highestRiskCategory = Object.entries(categoryScores)
      .reduce((a, b) => categoryScores[a[0]] > categoryScores[b[0]] ? a : b)[0];

    const categoryRecommendations = recommendations[language][highestRiskCategory] || [];

    const assessmentResults = {
      totalScore,
      categoryScores,
      riskLevel,
      riskPercentage: Math.round(riskPercentage),
      recommendations: categoryRecommendations,
      completedAt: new Date().toISOString()
    };

    setResults(assessmentResults);
    setShowResults(true);
    
    // Save to user's assessment history
    addAssessment(assessmentResults);
    
    // Clear saved answers
    localStorage.removeItem('assessmentAnswers');
  };

  const getCategoryColor = (category) => {
    const colors = {
      screenTime: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
      social: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
      communication: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
      emotional: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200'
    };
    return colors[category] || 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
  };

  const getCategoryName = (category) => {
    const names = {
      screenTime: language === 'en' ? 'Screen Time' : 'เวลาหน้าจอ',
      social: language === 'en' ? 'Social' : 'สังคม',
      communication: language === 'en' ? 'Communication' : 'การสื่อสาร',
      emotional: language === 'en' ? 'Emotional' : 'อารมณ์'
    };
    return names[category] || category;
  };

  const getRiskLevelColor = (level) => {
    switch (level) {
      case 'low': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'high': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  if (showResults && results) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="mb-8">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-primary-foreground" />
              </div>
              <CardTitle className="text-2xl">
                {language === 'en' ? 'Assessment Complete!' : 'การประเมินเสร็จสิ้น!'}
              </CardTitle>
              <CardDescription>
                {language === 'en' 
                  ? 'Here are your personalized results and recommendations'
                  : 'นี่คือผลการประเมินและคำแนะนำเฉพาะบุคคลของคุณ'
                }
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Risk Level */}
              <div className="text-center">
                <h3 className="text-lg font-semibold mb-2">
                  {language === 'en' ? 'Risk Level' : 'ระดับความเสี่ยง'}
                </h3>
                <Badge className={`${getRiskLevelColor(results.riskLevel)} text-lg px-4 py-2`}>
                  {language === 'en' 
                    ? results.riskLevel.charAt(0).toUpperCase() + results.riskLevel.slice(1)
                    : results.riskLevel === 'low' ? 'ต่ำ' : 
                      results.riskLevel === 'medium' ? 'ปานกลาง' : 'สูง'
                  }
                </Badge>
                <p className="text-sm text-muted-foreground mt-2">
                  {language === 'en' 
                    ? `Score: ${results.totalScore} (${results.riskPercentage}%)`
                    : `คะแนน: ${results.totalScore} (${results.riskPercentage}%)`
                  }
                </p>
              </div>

              {/* Category Scores */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">
                  {language === 'en' ? 'Category Breakdown' : 'คะแนนแยกตามหมวดหมู่'}
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(results.categoryScores).map(([category, score]) => (
                    <div key={category} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center gap-2">
                        <Badge className={getCategoryColor(category)}>
                          {getCategoryName(category)}
                        </Badge>
                      </div>
                      <span className="font-semibold">{score}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recommendations */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">
                  {language === 'en' ? 'Personalized Recommendations' : 'คำแนะนำเฉพาะบุคคล'}
                </h3>
                <div className="space-y-3">
                  {results.recommendations.map((rec, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg">
                      <Info className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium">{rec.title}</h4>
                        <p className="text-sm text-muted-foreground">{rec.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Button onClick={onComplete} className="flex-1">
                  {language === 'en' ? 'Go to Dashboard' : 'ไปที่แดชบอร์ด'}
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setShowResults(false);
                    setCurrentQuestion(0);
                    setAnswers({});
                    setSelectedAnswer('');
                  }}
                  className="flex-1"
                >
                  {language === 'en' ? 'Take Again' : 'ทำใหม่อีกครั้ง'}
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      {/* Progress Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold">
            {language === 'en' ? 'Virtual Autism Screening' : 'การคัดกรองออทิสติกเสมือน'}
          </h1>
          <Badge className={getCategoryColor(currentQ.category)}>
            {getCategoryName(currentQ.category)}
          </Badge>
        </div>
        
        <div className="space-y-2">
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>
              {language === 'en' 
                ? `Question ${currentQuestion + 1} of ${totalQuestions}`
                : `คำถามข้อที่ ${currentQuestion + 1} จาก ${totalQuestions}`
              }
            </span>
            <span>{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} className="w-full" />
        </div>
      </div>

      {/* Question Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestion}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-lg leading-relaxed">
                {currentQ.question[language]}
              </CardTitle>
              {currentQ.description && (
                <CardDescription>
                  {currentQ.description[language]}
                </CardDescription>
              )}
            </CardHeader>
            
            <CardContent>
              <RadioGroup
                value={selectedAnswer}
                onValueChange={handleAnswerSelect}
                className="space-y-4"
              >
                {currentQ.options.map((option, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-3 p-4 border rounded-lg hover:bg-muted/30 transition-colors cursor-pointer"
                    onClick={() => handleAnswerSelect(index.toString())}
                  >
                    <RadioGroupItem value={index.toString()} id={`option-${index}`} className="mt-1" />
                    <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer leading-relaxed">
                      {option[language]}
                    </Label>
                  </motion.div>
                ))}
              </RadioGroup>
            </CardContent>
          </Card>
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      <div className="flex justify-between items-center">
        <Button
          variant="outline"
          onClick={handlePrevious}
          disabled={currentQuestion === 0 || isTransitioning}
          className="flex items-center gap-2"
        >
          <ChevronLeft className="h-4 w-4" />
          {language === 'en' ? 'Previous' : 'ก่อนหน้า'}
        </Button>

        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          {Object.keys(answers).length} / {totalQuestions}
          <span>{language === 'en' ? 'answered' : 'ตอบแล้ว'}</span>
        </div>

        <Button
          onClick={handleNext}
          disabled={!selectedAnswer || isTransitioning}
          className="flex items-center gap-2"
        >
          {currentQuestion === totalQuestions - 1 
            ? (language === 'en' ? 'Complete' : 'เสร็จสิ้น')
            : (language === 'en' ? 'Next' : 'ถัดไป')
          }
          {currentQuestion === totalQuestions - 1 ? (
            <CheckCircle className="h-4 w-4" />
          ) : (
            <ChevronRight className="h-4 w-4" />
          )}
        </Button>
      </div>

      {/* Question Navigation Dots */}
      <div className="flex justify-center mt-8 space-x-2">
        {questions.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentQuestion(index);
              const answer = answers[index];
              setSelectedAnswer(answer !== undefined ? answer.toString() : '');
            }}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentQuestion 
                ? 'bg-primary' 
                : answers[index] !== undefined 
                  ? 'bg-primary/60' 
                  : 'bg-muted'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImprovedAssessmentPage;

