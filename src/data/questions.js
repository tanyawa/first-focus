// Flattened questions array for the assessment
export const questions = [
  // Screen Time Questions (5)
  {
    id: 'screenTime1',
    category: 'screenTime',
    question: {
      en: 'How much time does your child spend on screens (TV, tablet, phone) daily?',
      th: 'โดยประมาณ บุตรหลานของคุณใช้เวลาดูหน้าจอ (ทีวี แท็บเล็ต สมาร์ทโฟน) กี่ชั่วโมงต่อวัน?'
    },
    options: [
      { en: 'Less than 1 hour', th: 'น้อยกว่า 1 ชั่วโมง' },
      { en: '1-2 hours', th: '1-2 ชั่วโมง' },
      { en: '2-4 hours', th: '2-4 ชั่วโมง' },
      { en: 'More than 4 hours', th: 'มากกว่า 4 ชั่วโมง' }
    ],
    riskWeights: [0, 1, 2, 3]
  },
  {
    id: 'screenTime2',
    category: 'screenTime',
    question: {
      en: 'When did your child first start using screens regularly or show preference for screen activities?',
      th: 'บุตรหลานของคุณเริ่มใช้หน้าจอหรือแสดงพฤติกรรมเป็นประจำตั้งแต่อายุเท่าไร?'
    },
    options: [
      { en: 'Before 12 months', th: 'ก่อน 12 เดือน' },
      { en: '12-18 months', th: '12-18 เดือน' },
      { en: '18-24 months', th: '18-24 เดือน' },
      { en: 'After 2 years', th: 'หลังจาก 2 ขวบ' }
    ],
    riskWeights: [3, 2, 1, 0]
  },
  {
    id: 'screenTime3',
    category: 'screenTime',
    question: {
      en: 'How does your child react when screen time is limited or stopped?',
      th: 'บุตรหลานของคุณมีปฏิกิริยาอย่างไรเมื่อถูกจำกัดหรือหยุดการใช้หน้าจอ?'
    },
    options: [
      { en: 'Accepts calmly', th: 'ยอมรับอย่างสงบ' },
      { en: 'Shows mild disappointment', th: 'แสดงความผิดหวังเล็กน้อย' },
      { en: 'Gets upset or protests', th: 'โกรธหรือประท้วง' },
      { en: 'Has severe tantrums', th: 'โมโหรุนแรงหรือร้องไห้' }
    ],
    riskWeights: [0, 1, 2, 3]
  },
  {
    id: 'screenTime4',
    category: 'screenTime',
    question: {
      en: 'Does your child prefer screen activities over playing with toys or interacting with people?',
      th: 'บุตรหลานของคุณชอบกิจกรรมหน้าจอมากกว่าการเล่นของเล่นหรือมีปฏิสัมพันธ์กับคนอื่นหรือไม่?'
    },
    options: [
      { en: 'Never', th: 'ไม่เลย' },
      { en: 'Sometimes', th: 'บางครั้ง' },
      { en: 'Often', th: 'บ่อยครั้ง' },
      { en: 'Always', th: 'เสมอ' }
    ],
    riskWeights: [0, 1, 2, 3]
  },
  {
    id: 'screenTime5',
    category: 'screenTime',
    question: {
      en: 'How often does your child ask for or demand screen time?',
      th: 'บุตรหลานของคุณขอหรือเรียกร้องเวลาหน้าจอบ่อยแค่ไหน?'
    },
    options: [
      { en: 'Rarely or never', th: 'นานๆ ครั้งหรือไม่เลย' },
      { en: 'Once a day', th: 'วันละครั้ง' },
      { en: 'Multiple times a day', th: 'หลายครั้งต่อวัน' },
      { en: 'Constantly throughout the day', th: 'ตลอดทั้งวัน' }
    ],
    riskWeights: [0, 1, 2, 3]
  },

  // Social Responsiveness Questions (5)
  {
    id: 'social1',
    category: 'social',
    question: {
      en: 'How often does your child make eye contact during conversations or interactions?',
      th: 'บุตรหลานของคุณสบตาระหว่างการสนทนาหรือมีปฏิสัมพันธ์บ่อยแค่ไหน?'
    },
    options: [
      { en: 'Always maintains good eye contact', th: 'สบตาได้ดีเสมอ' },
      { en: 'Sometimes makes eye contact', th: 'สบตาได้บางครั้ง' },
      { en: 'Rarely makes eye contact', th: 'สบตาได้นานๆ ครั้ง' },
      { en: 'Avoids eye contact completely', th: 'หลีกเลี่ยงการสบตาโดยสิ้นเชิง' }
    ],
    riskWeights: [0, 1, 2, 3]
  },
  {
    id: 'social2',
    category: 'social',
    question: {
      en: 'Does your child respond when their name is called?',
      th: 'บุตรหลานของคุณตอบสนองเมื่อถูกเรียกชื่อหรือไม่?'
    },
    options: [
      { en: 'Always responds immediately', th: 'ตอบสนองทันทีเสมอ' },
      { en: 'Usually responds', th: 'ตอบสนองโดยปกติ' },
      { en: 'Sometimes responds', th: 'ตอบสนองบางครั้ง' },
      { en: 'Rarely or never responds', th: 'ตอบสนองนานๆ ครั้งหรือไม่เลย' }
    ],
    riskWeights: [0, 1, 2, 3]
  },
  {
    id: 'social3',
    category: 'social',
    question: {
      en: 'How does your child interact with other children their age?',
      th: 'บุตรหลานของคุณมีปฏิสัมพันธ์กับเด็กวยเดียวกันอย่างไร?'
    },
    options: [
      { en: 'Plays and interacts well', th: 'เล่นและมีปฏิสัมพันธ์ได้ดี' },
      { en: 'Plays alongside but limited interaction', th: 'เล่นข้างๆ แต่มีปฏิสัมพันธ์จำกัด' },
      { en: 'Prefers to play alone', th: 'ชอบเล่นคนเดียว' },
      { en: 'Avoids other children', th: 'หลีกเลี่ยงเด็กคนอื่น' }
    ],
    riskWeights: [0, 1, 2, 3]
  },
  {
    id: 'social4',
    category: 'social',
    question: {
      en: 'Does your child show interest in what others are doing or looking at?',
      th: 'บุตรหลานของคุณแสดงความสนใจในสิ่งที่คนอื่นกำลังทำหรือมองหรือไม่?'
    },
    options: [
      { en: 'Always shows interest', th: 'แสดงความสนใจเสมอ' },
      { en: 'Sometimes shows interest', th: 'แสดงความสนใจบางครั้ง' },
      { en: 'Rarely shows interest', th: 'แสดงความสนใจนานๆ ครั้ง' },
      { en: 'Never shows interest', th: 'ไม่แสดงความสนใจเลย' }
    ],
    riskWeights: [0, 1, 2, 3]
  },
  {
    id: 'social5',
    category: 'social',
    question: {
      en: 'How does your child react to physical affection (hugs, kisses)?',
      th: 'บุตรหลานของคุณตอบสนองต่อการแสดงความรัก (กอด จูบ) อย่างไร?'
    },
    options: [
      { en: 'Enjoys and seeks affection', th: 'ชอบและแสวงหาความรัก' },
      { en: 'Accepts affection when offered', th: 'ยอมรับความรักเมื่อได้รับ' },
      { en: 'Tolerates but doesn\'t seek affection', th: 'ทนได้แต่ไม่แสวงหาความรัก' },
      { en: 'Avoids or rejects physical affection', th: 'หลีกเลี่ยงหรือปฏิเสธความรัก' }
    ],
    riskWeights: [0, 1, 2, 3]
  },

  // Communication Questions (5)
  {
    id: 'communication1',
    category: 'communication',
    question: {
      en: 'How does your child communicate their needs or wants?',
      th: 'บุตรหลานของคุณสื่อสารความต้องการของตนอย่างไร?'
    },
    options: [
      { en: 'Uses words and gestures appropriately', th: 'ใช้คำพูดและท่าทางอย่างเหมาะสม' },
      { en: 'Uses mostly gestures and some words', th: 'ใช้ท่าทางเป็นหลักและคำพูดบ้าง' },
      { en: 'Points or leads adults to what they want', th: 'ชี้หรือพาผู้ใหญ่ไปหาสิ่งที่ต้องการ' },
      { en: 'Cries or has tantrums to communicate', th: 'ร้องไห้หรือโมโหเพื่อสื่อสาร' }
    ],
    riskWeights: [0, 1, 2, 3]
  },
  {
    id: 'communication2',
    category: 'communication',
    question: {
      en: 'Does your child use gestures like pointing, waving, or nodding?',
      th: 'บุตรหลานของคุณใช้ท่าทางเช่น ชี้ โบกมือ หรือพยักหน้าหรือไม่?'
    },
    options: [
      { en: 'Uses gestures frequently and appropriately', th: 'ใช้ท่าทางบ่อยและเหมาะสม' },
      { en: 'Uses some gestures', th: 'ใช้ท่าทางบ้าง' },
      { en: 'Uses very few gestures', th: 'ใช้ท่าทางน้อยมาก' },
      { en: 'Doesn\'t use gestures', th: 'ไม่ใช้ท่าทางเลย' }
    ],
    riskWeights: [0, 1, 2, 3]
  },
  {
    id: 'communication3',
    category: 'communication',
    question: {
      en: 'How well does your child understand simple instructions or requests?',
      th: 'บุตรหลานของคุณเข้าใจคำสั่งหรือคำของ่ายๆ ได้ดีแค่ไหน?'
    },
    options: [
      { en: 'Understands and follows well', th: 'เข้าใจและปฏิบัติตามได้ดี' },
      { en: 'Understands most instructions', th: 'เข้าใจคำสั่งส่วนใหญ่' },
      { en: 'Understands simple instructions only', th: 'เข้าใจเฉพาะคำสั่งง่ายๆ' },
      { en: 'Has difficulty understanding instructions', th: 'มีปัญหาในการเข้าใจคำสั่ง' }
    ],
    riskWeights: [0, 1, 2, 3]
  },
  {
    id: 'communication4',
    category: 'communication',
    question: {
      en: 'Does your child imitate sounds, words, or actions?',
      th: 'บุตรหลานของคุณเลียนแบบเสียง คำพูด หรือการกระทำหรือไม่?'
    },
    options: [
      { en: 'Imitates frequently and accurately', th: 'เลียนแบบบ่อยและแม่นยำ' },
      { en: 'Sometimes imitates', th: 'เลียนแบบบางครั้ง' },
      { en: 'Rarely imitates', th: 'เลียนแบบนานๆ ครั้ง' },
      { en: 'Doesn\'t imitate', th: 'ไม่เลียนแบบเลย' }
    ],
    riskWeights: [0, 1, 2, 3]
  },
  {
    id: 'communication5',
    category: 'communication',
    question: {
      en: 'How does your child express emotions or feelings?',
      th: 'บุตรหลานของคุณแสดงอารมณ์หรือความรู้สึกอย่างไร?'
    },
    options: [
      { en: 'Expresses emotions clearly through words/actions', th: 'แสดงอารมณ์ชัดเจนผ่านคำพูด/การกระทำ' },
      { en: 'Shows emotions but not always clear', th: 'แสดงอารมณ์แต่ไม่ชัดเจนเสมอ' },
      { en: 'Limited emotional expression', th: 'แสดงอารมณ์จำกัด' },
      { en: 'Difficulty expressing emotions', th: 'มีปัญหาในการแสดงอารมณ์' }
    ],
    riskWeights: [0, 1, 2, 3]
  },

  // Emotional & Adaptive Behavior Questions (5)
  {
    id: 'emotional1',
    category: 'emotional',
    question: {
      en: 'How does your child handle changes in routine or unexpected situations?',
      th: 'บุตรหลานของคุณรับมือกับการเปลี่ยนแปลงกิจวัตรหรือสถานการณ์ที่ไม่คาดคิดอย่างไร?'
    },
    options: [
      { en: 'Adapts well to changes', th: 'ปรับตัวกับการเปลี่ยนแปลงได้ดี' },
      { en: 'Needs some time but adapts', th: 'ต้องใช้เวลาแต่ปรับตัวได้' },
      { en: 'Has difficulty with changes', th: 'มีปัญหากับการเปลี่ยนแปลง' },
      { en: 'Becomes very upset with any changes', th: 'อารมณ์เสียมากกับการเปลี่ยนแปลงใดๆ' }
    ],
    riskWeights: [0, 1, 2, 3]
  },
  {
    id: 'emotional2',
    category: 'emotional',
    question: {
      en: 'Does your child show repetitive behaviors or intense interests in specific things?',
      th: 'บุตรหลานของคุณแสดงพฤติกรรมซ้ำๆ หรือสนใจในสิ่งใดสิ่งหนึ่งอย่างรุนแรงหรือไม่?'
    },
    options: [
      { en: 'No repetitive behaviors', th: 'ไม่มีพฤติกรรมซ้ำๆ' },
      { en: 'Occasional repetitive behaviors', th: 'มีพฤติกรรมซ้ำๆ เป็นครั้งคราว' },
      { en: 'Frequent repetitive behaviors', th: 'มีพฤติกรรมซ้ำๆ บ่อย' },
      { en: 'Intense repetitive behaviors that interfere with daily activities', th: 'มีพฤติกรรมซ้ำๆ รุนแรงจนรบกวนกิจวัตรประจำวัน' }
    ],
    riskWeights: [0, 1, 2, 3]
  },
  {
    id: 'emotional3',
    category: 'emotional',
    question: {
      en: 'How does your child react to sensory experiences (loud sounds, bright lights, textures)?',
      th: 'บุตรหลานของคุณตอบสนองต่อประสบการณ์ทางประสาทสัมผัส (เสียงดัง แสงสว่าง เนื้อสัมผัส) อย่างไร?'
    },
    options: [
      { en: 'Reacts normally to sensory input', th: 'ตอบสนองต่อสิ่งเร้าทางประสาทสัมผัสปกติ' },
      { en: 'Sometimes sensitive to certain sensations', th: 'บางครั้งไวต่อความรู้สึกบางอย่าง' },
      { en: 'Often over- or under-reactive to sensations', th: 'มักตอบสนองมากเกินไปหรือน้อยเกินไป' },
      { en: 'Extremely sensitive or unresponsive to sensory input', th: 'ไวมากหรือไม่ตอบสนองต่อสิ่งเร้าทางประสาทสัมผัส' }
    ],
    riskWeights: [0, 1, 2, 3]
  },
  {
    id: 'emotional4',
    category: 'emotional',
    question: {
      en: 'Does your child engage in pretend play or imaginative activities?',
      th: 'บุตรหลานของคุณเล่นแบบจินตนาการหรือกิจกรรมที่ใช้จินตนาการหรือไม่?'
    },
    options: [
      { en: 'Engages in rich pretend play', th: 'เล่นแบบจินตนาการได้หลากหลาย' },
      { en: 'Some pretend play', th: 'เล่นแบบจินตนาการบ้าง' },
      { en: 'Limited pretend play', th: 'เล่นแบบจินตนาการจำกัด' },
      { en: 'No pretend play', th: 'ไม่เล่นแบบจินตนาการเลย' }
    ],
    riskWeights: [0, 1, 2, 3]
  },
  {
    id: 'emotional5',
    category: 'emotional',
    question: {
      en: 'How well does your child regulate their emotions and behavior?',
      th: 'บุตรหลานของคุณควบคุมอารมณ์และพฤติกรรมของตนได้ดีแค่ไหน?'
    },
    options: [
      { en: 'Good emotional regulation for their age', th: 'ควบคุมอารมณ์ได้ดีตามวัย' },
      { en: 'Usually manages emotions well', th: 'โดยปกติจัดการอารมณ์ได้ดี' },
      { en: 'Sometimes has difficulty managing emotions', th: 'บางครั้งมีปัญหาในการจัดการอารมณ์' },
      { en: 'Frequent emotional outbursts or meltdowns', th: 'มีอารมณ์ระเบิดหรือเสียสติบ่อย' }
    ],
    riskWeights: [0, 1, 2, 3]
  }
];

export const questionCategories = [
  {
    id: 'screenTime',
    name: 'Digital Screen Time Behavior',
    description: 'Assessing screen media exposure and related behaviors',
    questions: [
      {
        id: 'screenTime1',
        type: 'multiple',
        category: 'screenTime',
        riskWeights: [0, 1, 2, 3] // Risk scores for each option
      },
      {
        id: 'screenTime2', 
        type: 'multiple',
        category: 'screenTime',
        riskWeights: [3, 2, 1, 0]
      },
      {
        id: 'screenTime3',
        type: 'yesno',
        category: 'screenTime',
        riskWeights: [1, 0] // Yes = 1, No = 0
      },
      {
        id: 'screenTime4',
        type: 'yesno', 
        category: 'screenTime',
        riskWeights: [1, 0]
      },
      {
        id: 'screenTime5',
        type: 'yesno',
        category: 'screenTime', 
        riskWeights: [1, 0]
      }
    ]
  },
  {
    id: 'social',
    name: 'Social Responsiveness',
    description: 'Evaluating social interaction and engagement',
    questions: [
      {
        id: 'social1',
        type: 'yesno',
        category: 'social',
        riskWeights: [0, 1] // Yes = 0, No = 1 (reversed scoring)
      },
      {
        id: 'social2',
        type: 'yesno',
        category: 'social',
        riskWeights: [0, 1]
      },
      {
        id: 'social3',
        type: 'yesno',
        category: 'social',
        riskWeights: [0, 1]
      },
      {
        id: 'social4',
        type: 'yesno',
        category: 'social',
        riskWeights: [0, 1]
      },
      {
        id: 'social5',
        type: 'yesno',
        category: 'social',
        riskWeights: [0, 1]
      }
    ]
  },
  {
    id: 'communication',
    name: 'Language & Communication Skills',
    description: 'Assessing speech, comprehension, and non-verbal communication',
    questions: [
      {
        id: 'communication1',
        type: 'yesno',
        category: 'communication',
        riskWeights: [0, 1]
      },
      {
        id: 'communication2',
        type: 'yesno',
        category: 'communication',
        riskWeights: [0, 1]
      },
      {
        id: 'communication3',
        type: 'yesno',
        category: 'communication',
        riskWeights: [0, 1]
      },
      {
        id: 'communication4',
        type: 'multiple',
        category: 'communication',
        riskWeights: [0, 1] // Own words = 0, Repeats = 1
      },
      {
        id: 'communication5',
        type: 'yesno',
        category: 'communication',
        riskWeights: [0, 1]
      }
    ]
  },
  {
    id: 'emotional',
    name: 'Emotional & Adaptive Behavior',
    description: 'Examining emotional responses and behavioral patterns',
    questions: [
      {
        id: 'emotional1',
        type: 'multiple',
        category: 'emotional',
        riskWeights: [0, 1] // Appropriate = 0, Inappropriate = 1
      },
      {
        id: 'emotional2',
        type: 'yesno',
        category: 'emotional',
        riskWeights: [1, 0]
      },
      {
        id: 'emotional3',
        type: 'yesno',
        category: 'emotional',
        riskWeights: [1, 0]
      },
      {
        id: 'emotional4',
        type: 'yesno',
        category: 'emotional',
        riskWeights: [1, 0]
      },
      {
        id: 'emotional5',
        type: 'yesno',
        category: 'emotional',
        riskWeights: [1, 0]
      },
      {
        id: 'emotional6',
        type: 'yesno',
        category: 'emotional',
        riskWeights: [1, 0]
      }
    ]
  }
];

export const getAllQuestions = () => {
  return questionCategories.flatMap(category => category.questions);
};

export const getQuestionById = (questionId) => {
  const allQuestions = getAllQuestions();
  return allQuestions.find(q => q.id === questionId);
};

export const calculateCategoryScore = (categoryId, answers) => {
  const category = questionCategories.find(c => c.id === categoryId);
  if (!category) return 0;
  
  let totalScore = 0;
  category.questions.forEach(question => {
    const answer = answers[question.id];
    if (answer !== undefined && answer !== null) {
      totalScore += question.riskWeights[answer] || 0;
    }
  });
  
  return totalScore;
};

export const calculateTotalScore = (answers) => {
  return questionCategories.reduce((total, category) => {
    return total + calculateCategoryScore(category.id, answers);
  }, 0);
};

export const getRiskLevel = (totalScore) => {
  if (totalScore <= 6) return 'low';
  if (totalScore <= 13) return 'medium';
  return 'high';
};

export const getHighestRiskCategory = (answers) => {
  let highestScore = -1;
  let highestCategory = null;
  
  questionCategories.forEach(category => {
    const score = calculateCategoryScore(category.id, answers);
    const maxPossibleScore = category.questions.reduce((sum, q) => sum + Math.max(...q.riskWeights), 0);
    const normalizedScore = maxPossibleScore > 0 ? score / maxPossibleScore : 0;
    
    if (normalizedScore > highestScore) {
      highestScore = normalizedScore;
      highestCategory = category.id;
    }
  });
  
  return highestCategory;
};

