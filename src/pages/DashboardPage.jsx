import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Progress } from '../components/ui/progress';
import { Checkbox } from '../components/ui/checkbox';
import { Badge } from '../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { useAuth } from '../contexts/AuthContext';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';
import { 
  CheckCircle2, 
  Circle, 
  TrendingUp, 
  Calendar, 
  User, 
  Baby,
  AlertTriangle,
  Target,
  BookOpen,
  Clock,
  Award
} from 'lucide-react';

const DashboardPage = ({ onStartAssessment }) => {
  const { user, updateTask, addTasks } = useAuth();
  const { language } = useLanguage();
  const t = translations[language];

  const [tasks, setTasks] = useState([]);
  const [completedThisWeek, setCompletedThisWeek] = useState(0);

  // Generate personalized tasks based on user's latest assessment
  useEffect(() => {
    if (user && user.assessments && user.assessments.length > 0) {
      const latestAssessment = user.assessments[user.assessments.length - 1];
      const generatedTasks = generateTasksFromAssessment(latestAssessment);
      
      // Merge with existing tasks
      const existingTaskIds = (user.tasks || []).map(t => t.id);
      const newTasks = generatedTasks.filter(task => !existingTaskIds.includes(task.id));
      
      if (newTasks.length > 0) {
        addTasks(newTasks);
      }
      
      setTasks(user.tasks || []);
    } else {
      // Default tasks for new users
      const defaultTasks = generateDefaultTasks();
      setTasks(defaultTasks);
    }

    // Calculate completed tasks this week
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
    
    const completedCount = (user.tasks || []).filter(task => 
      task.completed && new Date(task.completedAt) > oneWeekAgo
    ).length;
    
    setCompletedThisWeek(completedCount);
  }, [user]);

  const generateTasksFromAssessment = (assessment) => {
    const tasks = [];
    const { categoryScores, riskLevel } = assessment;

    // Screen Time tasks
    if (categoryScores.screenTime > 2) {
      tasks.push({
        id: 'screen-time-1',
        title: language === 'en' ? 'Reduce screen time by 30 minutes daily' : 'ลดเวลาหน้าจอ 30 นาทีต่อวัน',
        description: language === 'en' ? 'Gradually reduce your child\'s daily screen time' : 'ค่อยๆ ลดเวลาหน้าจอของบุตรหลานทีละน้อย',
        category: 'screenTime',
        priority: 'high',
        completed: false,
        dueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString()
      });
    }

    // Social tasks
    if (categoryScores.social > 2) {
      tasks.push({
        id: 'social-1',
        title: language === 'en' ? 'Schedule daily face-to-face playtime' : 'จัดเวลาเล่นแบบเผชิญหน้าทุกวัน',
        description: language === 'en' ? 'Spend 30 minutes daily in direct interaction without screens' : 'ใช้เวลา 30 นาทีต่อวันในการมีปฏิสัมพันธ์โดยตรงโดยไม่มีหน้าจอ',
        category: 'social',
        priority: 'high',
        completed: false,
        dueDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString()
      });
    }

    // Communication tasks
    if (categoryScores.communication > 2) {
      tasks.push({
        id: 'communication-1',
        title: language === 'en' ? 'Read together for 15 minutes daily' : 'อ่านหนังสือร่วมกัน 15 นาทีต่อวัน',
        description: language === 'en' ? 'Engage in interactive reading to boost language skills' : 'มีส่วนร่วมในการอ่านแบบโต้ตอบเพื่อเสริมทักษะภาษา',
        category: 'communication',
        priority: 'medium',
        completed: false,
        dueDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString()
      });
    }

    // Emotional tasks
    if (categoryScores.emotional > 2) {
      tasks.push({
        id: 'emotional-1',
        title: language === 'en' ? 'Practice emotion recognition activities' : 'ฝึกกิจกรรมการรู้จักอารมณ์',
        description: language === 'en' ? 'Use emotion cards or games to help identify feelings' : 'ใช้การ์ดอารมณ์หรือเกมเพื่อช่วยในการระบุความรู้สึก',
        category: 'emotional',
        priority: 'medium',
        completed: false,
        dueDate: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000).toISOString()
      });
    }

    return tasks;
  };

  const generateDefaultTasks = () => {
    return [
      {
        id: 'default-1',
        title: language === 'en' ? 'Complete your first assessment' : 'ทำการประเมินครั้งแรก',
        description: language === 'en' ? 'Take the screening assessment to get personalized recommendations' : 'ทำแบบประเมินเพื่อรับคำแนะนำเฉพาะบุคคล',
        category: 'assessment',
        priority: 'high',
        completed: false,
        dueDate: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000).toISOString()
      }
    ];
  };

  const handleTaskToggle = (taskId, completed) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === taskId) {
        const updatedTask = {
          ...task,
          completed,
          completedAt: completed ? new Date().toISOString() : null
        };
        updateTask(taskId, updatedTask);
        return updatedTask;
      }
      return task;
    });
    
    setTasks(updatedTasks);
    
    if (completed) {
      setCompletedThisWeek(prev => prev + 1);
    }
  };

  const getLatestAssessment = () => {
    if (!user.assessments || user.assessments.length === 0) return null;
    return user.assessments[user.assessments.length - 1];
  };

  const getRiskLevelColor = (level) => {
    switch (level) {
      case 'low': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'high': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'low': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'screenTime': return <Clock className="h-4 w-4" />;
      case 'social': return <User className="h-4 w-4" />;
      case 'communication': return <BookOpen className="h-4 w-4" />;
      case 'emotional': return <Target className="h-4 w-4" />;
      default: return <Circle className="h-4 w-4" />;
    }
  };

  const latestAssessment = getLatestAssessment();
  const activeTasks = tasks.filter(task => !task.completed);
  const completedTasks = tasks.filter(task => task.completed);
  const completionRate = tasks.length > 0 ? Math.round((completedTasks.length / tasks.length) * 100) : 0;

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      {/* Welcome Header */}
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold">
          {language === 'en' ? `Welcome back!` : 'ยินดีต้อนรับกลับ!'}
        </h1>
        <p className="text-muted-foreground">
          {language === 'en' 
            ? `Here's your child's development progress and personalized recommendations.`
            : 'นี่คือความก้าวหน้าในการพัฒนาของบุตรหลานและคำแนะนำเฉพาะบุคคล'
          }
        </p>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {language === 'en' ? 'Current Risk Level' : 'ระดับความเสี่ยงปัจจุบัน'}
            </CardTitle>
            <AlertTriangle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {latestAssessment ? (
                <Badge className={getRiskLevelColor(latestAssessment.riskLevel)}>
                  {language === 'en' 
                    ? latestAssessment.riskLevel.charAt(0).toUpperCase() + latestAssessment.riskLevel.slice(1)
                    : latestAssessment.riskLevel === 'low' ? 'ต่ำ' : 
                      latestAssessment.riskLevel === 'medium' ? 'ปานกลาง' : 'สูง'
                  }
                </Badge>
              ) : (
                <span className="text-muted-foreground">
                  {language === 'en' ? 'No assessment yet' : 'ยังไม่มีการประเมิน'}
                </span>
              )}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {language === 'en' ? 'Tasks Completed' : 'งานที่เสร็จแล้ว'}
            </CardTitle>
            <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{completedTasks.length}</div>
            <p className="text-xs text-muted-foreground">
              {language === 'en' ? `${completionRate}% completion rate` : `อัตราความสำเร็จ ${completionRate}%`}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {language === 'en' ? 'This Week' : 'สัปดาห์นี้'}
            </CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{completedThisWeek}</div>
            <p className="text-xs text-muted-foreground">
              {language === 'en' ? 'tasks completed' : 'งานที่เสร็จแล้ว'}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {language === 'en' ? 'Next Assessment' : 'การประเมินครั้งต่อไป'}
            </CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {latestAssessment ? '30d' : 'Now'}
            </div>
            <p className="text-xs text-muted-foreground">
              {latestAssessment 
                ? (language === 'en' ? 'recommended' : 'แนะนำ')
                : (language === 'en' ? 'take first assessment' : 'ทำการประเมินครั้งแรก')
              }
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <Tabs defaultValue="tasks" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="tasks">
            {language === 'en' ? 'My Tasks' : 'งานของฉัน'}
          </TabsTrigger>
          <TabsTrigger value="progress">
            {language === 'en' ? 'Progress' : 'ความก้าวหน้า'}
          </TabsTrigger>
          <TabsTrigger value="history">
            {language === 'en' ? 'History' : 'ประวัติ'}
          </TabsTrigger>
        </TabsList>

        {/* Tasks Tab */}
        <TabsContent value="tasks" className="space-y-6">
          {/* Progress Overview */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5" />
                {language === 'en' ? 'Task Progress' : 'ความก้าวหน้าของงาน'}
              </CardTitle>
              <CardDescription>
                {language === 'en' 
                  ? `You've completed ${completedTasks.length} out of ${tasks.length} tasks`
                  : `คุณทำงานเสร็จแล้ว ${completedTasks.length} จาก ${tasks.length} งาน`
                }
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Progress value={completionRate} className="w-full" />
            </CardContent>
          </Card>

          {/* Active Tasks */}
          <Card>
            <CardHeader>
              <CardTitle>
                {language === 'en' ? 'Active Tasks' : 'งานที่ยังไม่เสร็จ'}
              </CardTitle>
              <CardDescription>
                {language === 'en' 
                  ? 'Complete these personalized recommendations to support your child\'s development'
                  : 'ทำตามคำแนะนำเฉพาะบุคคลเหล่านี้เพื่อสนับสนุนการพัฒนาของบุตรหลาน'
                }
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {activeTasks.length === 0 ? (
                <div className="text-center py-8">
                  <Award className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">
                    {language === 'en' ? 'Great job! All tasks completed.' : 'เยี่ยมมาก! งานทั้งหมดเสร็จแล้ว'}
                  </p>
                  <Button onClick={onStartAssessment} className="mt-4">
                    {language === 'en' ? 'Take New Assessment' : 'ทำการประเมินใหม่'}
                  </Button>
                </div>
              ) : (
                activeTasks.map((task) => (
                  <div key={task.id} className="flex items-start space-x-3 p-4 border rounded-lg">
                    <Checkbox
                      checked={task.completed}
                      onCheckedChange={(checked) => handleTaskToggle(task.id, checked)}
                      className="mt-1"
                    />
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium">{task.title}</h4>
                        <div className="flex items-center gap-2">
                          <Badge className={getPriorityColor(task.priority)}>
                            {language === 'en' 
                              ? task.priority.charAt(0).toUpperCase() + task.priority.slice(1)
                              : task.priority === 'high' ? 'สูง' : 
                                task.priority === 'medium' ? 'ปานกลาง' : 'ต่ำ'
                            }
                          </Badge>
                          <div className="flex items-center gap-1 text-muted-foreground">
                            {getCategoryIcon(task.category)}
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">{task.description}</p>
                      {task.dueDate && (
                        <p className="text-xs text-muted-foreground">
                          {language === 'en' ? 'Due: ' : 'กำหนด: '}
                          {new Date(task.dueDate).toLocaleDateString(language === 'en' ? 'en-US' : 'th-TH')}
                        </p>
                      )}
                    </div>
                  </div>
                ))
              )}
            </CardContent>
          </Card>

          {/* Completed Tasks */}
          {completedTasks.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle>
                  {language === 'en' ? 'Completed Tasks' : 'งานที่เสร็จแล้ว'}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {completedTasks.map((task) => (
                  <div key={task.id} className="flex items-start space-x-3 p-4 border rounded-lg opacity-60">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-1" />
                    <div className="flex-1">
                      <h4 className="font-medium line-through">{task.title}</h4>
                      <p className="text-sm text-muted-foreground">{task.description}</p>
                      {task.completedAt && (
                        <p className="text-xs text-muted-foreground">
                          {language === 'en' ? 'Completed: ' : 'เสร็จเมื่อ: '}
                          {new Date(task.completedAt).toLocaleDateString(language === 'en' ? 'en-US' : 'th-TH')}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          )}
        </TabsContent>

        {/* Progress Tab */}
        <TabsContent value="progress" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>
                {language === 'en' ? 'Development Progress' : 'ความก้าวหน้าในการพัฒนา'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <TrendingUp className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">
                  {language === 'en' 
                    ? 'Progress tracking will be available after multiple assessments'
                    : 'การติดตามความก้าวหน้าจะพร้อมใช้งานหลังจากการประเมินหลายครั้ง'
                  }
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* History Tab */}
        <TabsContent value="history" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>
                {language === 'en' ? 'Assessment History' : 'ประวัติการประเมิน'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {user.assessments && user.assessments.length > 0 ? (
                <div className="space-y-4">
                  {user.assessments.map((assessment, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <p className="font-medium">
                          {language === 'en' ? `Assessment ${index + 1}` : `การประเมินครั้งที่ ${index + 1}`}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {new Date(assessment.completedAt).toLocaleDateString(language === 'en' ? 'en-US' : 'th-TH')}
                        </p>
                      </div>
                      <Badge className={getRiskLevelColor(assessment.riskLevel)}>
                        {language === 'en' 
                          ? assessment.riskLevel.charAt(0).toUpperCase() + assessment.riskLevel.slice(1)
                          : assessment.riskLevel === 'low' ? 'ต่ำ' : 
                            assessment.riskLevel === 'medium' ? 'ปานกลาง' : 'สูง'
                        }
                      </Badge>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <Calendar className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">
                    {language === 'en' ? 'No assessments completed yet' : 'ยังไม่มีการประเมินที่เสร็จสิ้น'}
                  </p>
                  <Button onClick={onStartAssessment} className="mt-4">
                    {language === 'en' ? 'Take Your First Assessment' : 'ทำการประเมินครั้งแรก'}
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DashboardPage;

