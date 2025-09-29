import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { useAuth } from '../contexts/AuthContext';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';
import { Heart, Mail, Lock, User, Baby } from 'lucide-react';

const AuthPage = ({ onSuccess }) => {
  const { language } = useLanguage();
  const t = translations[language];
  const { signUp, signIn } = useAuth();
  
  const [mode, setMode] = useState('signin'); // 'signin' or 'signup'
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    relationship: '',
    childName: '',
    childAge: '',
    childGender: ''
  });

  const relationships = [
    { value: 'parent', label: language === 'en' ? 'Parent' : 'ผู้ปกครอง' },
    { value: 'guardian', label: language === 'en' ? 'Guardian' : 'ผู้อุปการะ' },
    { value: 'caretaker', label: language === 'en' ? 'Caretaker' : 'ผู้ดูแล' },
    { value: 'maid', label: language === 'en' ? 'Maid' : 'แม่บ้าน' },
    { value: 'teacher', label: language === 'en' ? 'Kindergarten Teacher' : 'ครูอนุบาล' },
    { value: 'health_personnel', label: language === 'en' ? 'Health Personnel' : 'บุคลากรทางการแพทย์' }
  ];

  const genders = [
    { value: 'male', label: language === 'en' ? 'Male' : 'ชาย' },
    { value: 'female', label: language === 'en' ? 'Female' : 'หญิง' },
    { value: 'other', label: language === 'en' ? 'Other' : 'อื่นๆ' }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Get current form values directly from DOM as fallback
    const form = e.target;
    const formDataFromDOM = {
      email: form.email?.value || formData.email,
      password: form.password?.value || formData.password,
      confirmPassword: form.confirmPassword?.value || formData.confirmPassword,
      relationship: form.relationship?.value || formData.relationship,
      childName: form.childName?.value || formData.childName,
      childAge: form.childAge?.value || formData.childAge,
      childGender: form.childGender?.value || formData.childGender
    };

    console.log('Form data from DOM:', formDataFromDOM);

    try {
      if (mode === 'signup') {
        if (formDataFromDOM.password !== formDataFromDOM.confirmPassword) {
          setError(language === 'en' ? 'Passwords do not match' : 'รหัสผ่านไม่ตรงกัน');
          setLoading(false);
          return;
        }

        if (!formDataFromDOM.relationship || !formDataFromDOM.childName || !formDataFromDOM.childAge || !formDataFromDOM.childGender) {
          console.log('Missing fields:', {
            relationship: formDataFromDOM.relationship,
            childName: formDataFromDOM.childName,
            childAge: formDataFromDOM.childAge,
            childGender: formDataFromDOM.childGender
          });
          setError(language === 'en' ? 'Please fill in all required fields' : 'กรุณากรอกข้อมูลให้ครบถ้วน');
          setLoading(false);
          return;
        }

        const result = await signUp({
          email: formDataFromDOM.email,
          password: formDataFromDOM.password,
          relationship: formDataFromDOM.relationship,
          childInfo: {
            name: formDataFromDOM.childName,
            age: parseInt(formDataFromDOM.childAge),
            gender: formDataFromDOM.childGender
          }
        });

        if (result.success) {
          onSuccess();
        } else {
          setError(result.error);
        }
      } else {
        const result = await signIn(formDataFromDOM.email, formDataFromDOM.password);
        if (result.success) {
          onSuccess();
        } else {
          setError(result.error);
        }
      }
    } catch (error) {
      setError(language === 'en' ? 'An error occurred. Please try again.' : 'เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง');
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
            <Heart className="h-8 w-8 text-primary-foreground" />
          </div>
          <h1 className="text-2xl font-bold text-primary">First Focus</h1>
          <p className="text-muted-foreground">
            {language === 'en' ? 'Virtual Autism Screening' : 'คัดกรองออทิสติกเสมือน'}
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>
              {mode === 'signin' 
                ? (language === 'en' ? 'Sign In' : 'เข้าสู่ระบบ')
                : (language === 'en' ? 'Create Account' : 'สร้างบัญชี')
              }
            </CardTitle>
            <CardDescription>
              {mode === 'signin'
                ? (language === 'en' ? 'Welcome back! Please sign in to continue.' : 'ยินดีต้อนรับกลับ กรุณาเข้าสู่ระบบเพื่อดำเนินการต่อ')
                : (language === 'en' ? 'Create your account to start assessing your child.' : 'สร้างบัญชีของคุณเพื่อเริ่มประเมินบุตรหลาน')
              }
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email">
                  {language === 'en' ? 'Email Address' : 'อีเมล'}
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder={language === 'en' ? 'Enter your email' : 'กรอกอีเมลของคุณ'}
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              {/* Password */}
              <div className="space-y-2">
                <Label htmlFor="password">
                  {language === 'en' ? 'Password' : 'รหัสผ่าน'}
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="password"
                    type="password"
                    placeholder={language === 'en' ? 'Enter your password' : 'กรอกรหัสผ่านของคุณ'}
                    value={formData.password}
                    onChange={(e) => handleInputChange('password', e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              {/* Sign Up Fields */}
              {mode === 'signup' && (
                <>
                  {/* Confirm Password */}
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">
                      {language === 'en' ? 'Confirm Password' : 'ยืนยันรหัสผ่าน'}
                    </Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="confirmPassword"
                        type="password"
                        placeholder={language === 'en' ? 'Confirm your password' : 'ยืนยันรหัสผ่านของคุณ'}
                        value={formData.confirmPassword}
                        onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  {/* Relationship */}
                  <div className="space-y-2">
                    <Label htmlFor="relationship">
                      {language === 'en' ? 'Your Relationship to the Child' : 'ความสัมพันธ์ของคุณกับเด็ก'}
                    </Label>
                    <select
                      id="relationship"
                      value={formData.relationship}
                      onChange={(e) => handleInputChange('relationship', e.target.value)}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      required
                    >
                      <option value="">{language === 'en' ? 'Select relationship' : 'เลือกความสัมพันธ์'}</option>
                      {relationships.map((rel) => (
                        <option key={rel.value} value={rel.value}>
                          {rel.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Child Information */}
                  <div className="space-y-4 p-4 bg-muted/30 rounded-lg">
                    <div className="flex items-center gap-2 text-sm font-medium">
                      <Baby className="h-4 w-4" />
                      {language === 'en' ? 'Child Information' : 'ข้อมูลเด็ก'}
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="childName">
                        {language === 'en' ? "Child's Name" : 'ชื่อเด็ก'}
                      </Label>
                      <Input
                        id="childName"
                        type="text"
                        placeholder={language === 'en' ? "Enter child's name" : 'กรอกชื่อเด็ก'}
                        value={formData.childName}
                        onChange={(e) => handleInputChange('childName', e.target.value)}
                        required
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="childAge">
                          {language === 'en' ? 'Age (years)' : 'อายุ (ปี)'}
                        </Label>
                        <Input
                          id="childAge"
                          type="number"
                          min="0"
                          max="10"
                          placeholder="0-5"
                          value={formData.childAge}
                          onChange={(e) => handleInputChange('childAge', e.target.value)}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="childGender">
                          {language === 'en' ? 'Gender' : 'เพศ'}
                        </Label>
                        <select
                          id="childGender"
                          value={formData.childGender}
                          onChange={(e) => handleInputChange('childGender', e.target.value)}
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          required
                        >
                          <option value="">{language === 'en' ? 'Select' : 'เลือก'}</option>
                          {genders.map((gender) => (
                            <option key={gender.value} value={gender.value}>
                              {gender.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {/* Error Message */}
              {error && (
                <div className="text-sm text-destructive bg-destructive/10 p-3 rounded-md">
                  {error}
                </div>
              )}

              {/* Submit Button */}
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? (
                  <div className="flex items-center gap-2">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary-foreground"></div>
                    {language === 'en' ? 'Please wait...' : 'กรุณารอสักครู่...'}
                  </div>
                ) : (
                  mode === 'signin' 
                    ? (language === 'en' ? 'Sign In' : 'เข้าสู่ระบบ')
                    : (language === 'en' ? 'Create Account' : 'สร้างบัญชี')
                )}
              </Button>

              {/* Mode Toggle */}
              <div className="text-center text-sm">
                {mode === 'signin' ? (
                  <span>
                    {language === 'en' ? "Don't have an account? " : 'ยังไม่มีบัญชี? '}
                    <button
                      type="button"
                      onClick={() => setMode('signup')}
                      className="text-primary hover:underline"
                    >
                      {language === 'en' ? 'Sign up' : 'สมัครสมาชิก'}
                    </button>
                  </span>
                ) : (
                  <span>
                    {language === 'en' ? 'Already have an account? ' : 'มีบัญชีแล้ว? '}
                    <button
                      type="button"
                      onClick={() => setMode('signin')}
                      className="text-primary hover:underline"
                    >
                      {language === 'en' ? 'Sign in' : 'เข้าสู่ระบบ'}
                    </button>
                  </span>
                )}
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AuthPage;

