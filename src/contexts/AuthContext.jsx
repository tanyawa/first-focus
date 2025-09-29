import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for stored user data on app load
    const storedUser = localStorage.getItem('firstFocusUser');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error('Error parsing stored user data:', error);
        localStorage.removeItem('firstFocusUser');
      }
    }
    setLoading(false);
  }, []);

  const signUp = async (userData) => {
    try {
      // Simulate API call
      const newUser = {
        id: Date.now().toString(),
        email: userData.email,
        relationship: userData.relationship,
        childInfo: userData.childInfo,
        createdAt: new Date().toISOString(),
        assessments: [],
        tasks: []
      };
      
      setUser(newUser);
      localStorage.setItem('firstFocusUser', JSON.stringify(newUser));
      return { success: true, user: newUser };
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  const signIn = async (email, password) => {
    try {
      // Simulate API call - in real app, this would validate credentials
      const storedUser = localStorage.getItem('firstFocusUser');
      if (storedUser) {
        const userData = JSON.parse(storedUser);
        if (userData.email === email) {
          setUser(userData);
          return { success: true, user: userData };
        }
      }
      return { success: false, error: 'Invalid credentials' };
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  const signOut = () => {
    setUser(null);
    localStorage.removeItem('firstFocusUser');
  };

  const updateUser = (updates) => {
    const updatedUser = { ...user, ...updates };
    setUser(updatedUser);
    localStorage.setItem('firstFocusUser', JSON.stringify(updatedUser));
  };

  const addAssessment = (assessment) => {
    const updatedUser = {
      ...user,
      assessments: [...(user.assessments || []), assessment]
    };
    setUser(updatedUser);
    localStorage.setItem('firstFocusUser', JSON.stringify(updatedUser));
  };

  const updateTask = (taskId, updates) => {
    const updatedTasks = user.tasks.map(task => 
      task.id === taskId ? { ...task, ...updates } : task
    );
    const updatedUser = { ...user, tasks: updatedTasks };
    setUser(updatedUser);
    localStorage.setItem('firstFocusUser', JSON.stringify(updatedUser));
  };

  const addTasks = (newTasks) => {
    const updatedUser = {
      ...user,
      tasks: [...(user.tasks || []), ...newTasks]
    };
    setUser(updatedUser);
    localStorage.setItem('firstFocusUser', JSON.stringify(updatedUser));
  };

  const value = {
    user,
    loading,
    signUp,
    signIn,
    signOut,
    updateUser,
    addAssessment,
    updateTask,
    addTasks
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

