export const translations = {
  en: {
    // Navigation
    nav: {
      home: "Home",
      about: "About Virtual Autism",
      howItWorks: "How It Works",
      assessment: "Assessment",
      resources: "Resources",
      faq: "FAQ",
      contact: "Contact"
    },
    
    // Homepage
    home: {
      heroTitle: "First Focus: Protecting Your Child's Development in the Digital Age",
      heroSubtitle: "AI-Powered Screening for Virtual Autism Risk. Empowering Parents for Early Action.",
      startAssessment: "Start Your Child's Free Assessment Now",
      whatIsFirstFocus: "What is First Focus?",
      firstFocusDescription: "First Focus is an AI-powered screening tool designed to help parents identify early signs of virtual autism in children aged 0-5 years. Our system provides personalized recommendations based on research-backed assessments.",
      keyBenefits: "Key Benefits",
      earlyDetection: "Early Detection",
      earlyDetectionDesc: "Identify warning signs before they become serious developmental delays",
      personalizedGuidance: "Personalized Guidance",
      personalizedGuidanceDesc: "Receive tailored recommendations based on your child's specific needs",
      researchBacked: "Research-Backed",
      researchBackedDesc: "Based on international research and adapted for modern parenting challenges",
      convenientAccess: "Convenient Access",
      convenientAccessDesc: "Web-based tool accessible anytime, anywhere on mobile or desktop"
    },
    
    // About page
    about: {
      title: "Understanding Virtual Autism",
      problemTitle: "The Problem: Virtual Autism",
      problemDescription: "Virtual autism refers to developmental delays resembling autism in young children, caused by excessive digital screen media exposure (often >4 hours/day for 0-3 years). Common symptoms include lack of eye contact, not responding to name, delayed speech, and limited social interaction. These symptoms are often reversible with appropriate intervention.",
      solutionTitle: "Our Solution: First Focus",
      solutionDescription: "First Focus is an AI-based tool designed to help parents independently screen for risk factors and receive personalized advice for their child's development.",
      methodTitle: "Our Methodology",
      methodDescription: "We combine Research-based Design and Design Thinking principles with AI and Rule-Based Algorithms. Our assessment is based on international research and adapted specifically for parents."
    },
    
    // How it works
    howItWorks: {
      title: "How It Works",
      step1: "Take the 20-Question Assessment",
      step1Desc: "Answer questions covering 4 key behavioral areas in just 5-10 minutes",
      step2: "AI Analyzes Your Child's Profile",
      step2Desc: "Our system processes answers and matches them with research-based risk indicators",
      step3: "Receive Your Child's Risk Level",
      step3Desc: "Get clear results categorized as Low, Medium, or High risk levels",
      step4: "Get Personalized Recommendations",
      step4Desc: "Receive tailored advice and strategies based on identified risk areas",
      step5: "Track Your Child's Development",
      step5Desc: "Monitor progress over time with our development tracking dashboard"
    },
    
    // Assessment
    assessment: {
      title: "Virtual Autism Screening Assessment",
      disclaimer: "Important: This tool is for screening purposes only and is not a substitute for professional medical diagnosis. A high score indicates areas of concern that warrant further professional evaluation.",
      timeEstimate: "Estimated time: 5-10 minutes",
      privacyNote: "Your responses are kept private and secure.",
      startButton: "Start Assessment",
      nextButton: "Next",
      previousButton: "Previous",
      submitButton: "Submit Assessment",
      progress: "Question {{current}} of {{total}}",
      
      // Categories
      categories: {
        screenTime: "Digital Screen Time Behavior",
        social: "Social Responsiveness", 
        communication: "Language & Communication Skills",
        emotional: "Emotional & Adaptive Behavior"
      },
      
      // Questions
      questions: {
        screenTime1: {
          question: "Approximately how many hours per day does your child spend on screens (TV, tablet, smartphone)?",
          options: ["Less than 1 hour", "1–2 hours", "2–4 hours", "More than 4 hours"]
        },
        screenTime2: {
          question: "At what age did your child first start using or regularly viewing screens?",
          options: ["Before 12 months", "12–18 months", "18–24 months", "After 2 years"]
        },
        screenTime3: {
          question: "Does the child often choose to use screen devices over playing with toys or interacting with people?",
          options: ["Yes", "No"]
        },
        screenTime4: {
          question: "Does the child show irritability, tantrums, or strong emotional reactions when screen time ends or when the device is taken away?",
          options: ["Yes", "No"]
        },
        screenTime5: {
          question: "Do you frequently rely on giving the child a screen (video, game) to comfort them, feed them, or help them sleep?",
          options: ["Yes", "No"]
        },
        
        social1: {
          question: "When you call the child's name, do they consistently look at you or show recognition?",
          options: ["Yes", "No"]
        },
        social2: {
          question: "Does the child make regular eye contact during interactions (e.g., during play or when you speak to them)?",
          options: ["Yes", "No"]
        },
        social3: {
          question: "Does the child point to objects of interest to show you (e.g., pointing to an airplane in the sky) or bring toys to show/share with you?",
          options: ["Yes", "No"]
        },
        social4: {
          question: "Does the child easily engage in simple back-and-forth play with others (e.g., peek-a-boo, rolling a ball to someone, or imitation games)?",
          options: ["Yes", "No"]
        },
        social5: {
          question: "Does the child show interest in other children (e.g., looking at them, smiling at them, or attempting to play near them)?",
          options: ["Yes", "No"]
        },
        
        communication1: {
          question: "Is the child's spoken language development on track for their age? (e.g., by 2 years old, do they use single words or simple phrases? If younger: do they babble by 12 months?)",
          options: ["Yes", "No"]
        },
        communication2: {
          question: "Does the child use gestures to communicate needs or share things? (e.g., pointing to what they want, nodding for \"yes,\" waving \"bye-bye\")",
          options: ["Yes", "No"]
        },
        communication3: {
          question: "Can the child understand and respond to simple commands or questions? (e.g., \"Give me the ball,\" \"Come here,\" or familiar names of people/objects)",
          options: ["Yes", "No"]
        },
        communication4: {
          question: "Does the child primarily use their own words to ask for things or communicate, rather than just repeating phrases from TV or videos?",
          options: ["Uses own words", "Repeats/echolalia from shows or videos"]
        },
        communication5: {
          question: "When the child wants something or tries to get your attention, do they make appropriate sounds or facial expressions (e.g., looking at you, reaching for you, or vocalizing) rather than just silently staring at a screen?",
          options: ["Yes", "No"]
        },
        
        emotional1: {
          question: "Does the child display emotions appropriate for their age (e.g., smiling when happy, crying when hurt) or do they often appear unusually flat or indifferent in their emotional expression?",
          options: ["Displays appropriate emotions", "Displays inappropriate or flat emotions"]
        },
        emotional2: {
          question: "Does the child have tantrums or meltdowns that seem excessive for their age or are triggered by minor issues (especially when denied desired activities like screen time)?",
          options: ["Yes", "No"]
        },
        emotional3: {
          question: "Does the child get significantly distressed by minor changes in routine or environment (e.g., needing the exact same daily schedule and melting down if it changes)?",
          options: ["Yes", "No"]
        },
        emotional4: {
          question: "Does the child have difficulty sustaining attention on non-screen activities or appear restless and unable to sit still unless a screen is present?",
          options: ["Yes", "No"]
        },
        emotional5: {
          question: "Does the child have strong reactions to certain sounds, sights, or textures (e.g., covering ears from moderate sounds, or significant distress from bright lights or specific sensations)?",
          options: ["Yes", "No"]
        },
        emotional6: {
          question: "Have you observed repetitive actions (e.g., hand flapping, rocking, or lining up objects) or unusual attachments to certain objects/topics in the child's behavior?",
          options: ["Yes", "No"]
        }
      },
      
      // Results
      results: {
        title: "Assessment Results",
        riskLevel: "Risk Level",
        totalScore: "Total Score: {{score}}/{{total}}",
        lowRisk: "Low Risk",
        mediumRisk: "Medium Risk", 
        highRisk: "High Risk",
        lowRiskDesc: "Safe, normal tendencies. Continue monitoring your child's development.",
        mediumRiskDesc: "Early signs detected. Consider implementing recommended strategies and monitor closely.",
        highRiskDesc: "Clear risk indicators. Strongly recommend professional consultation and immediate intervention.",
        categoryBreakdown: "Category Breakdown",
        recommendations: "Personalized Recommendations",
        nextSteps: "Next Steps",
        retakeAssessment: "Retake Assessment",
        downloadResults: "Download Results"
      }
    },
    
    // Common
    common: {
      learnMore: "Learn More",
      getStarted: "Get Started",
      loading: "Loading...",
      error: "An error occurred. Please try again.",
      close: "Close",
      save: "Save",
      cancel: "Cancel"
    }
  },
  
  th: {
    // Navigation
    nav: {
      home: "หน้าแรก",
      about: "เกี่ยวกับออทิสติกเสมือน",
      howItWorks: "วิธีการทำงาน",
      assessment: "แบบประเมิน",
      resources: "แหล่งข้อมูล",
      faq: "คำถามที่พบบ่อย",
      contact: "ติดต่อเรา"
    },
    
    // Homepage
    home: {
      heroTitle: "First Focus: ปกป้องพัฒนาการเด็กในยุคดิจิทัล",
      heroSubtitle: "เครื่องมือคัดกรองความเสี่ยงออทิสติกเสมือนด้วย AI เพื่อเสริมพลังให้ผู้ปกครองดำเนินการได้ทันท่วงที",
      startAssessment: "เริ่มประเมินบุตรหลานของท่านฟรี",
      whatIsFirstFocus: "First Focus คืออะไร?",
      firstFocusDescription: "First Focus เป็นเครื่องมือคัดกรองด้วย AI ที่ออกแบบมาเพื่อช่วยผู้ปกครองระบุสัญญาณเตือนภัยของออทิสติกเสมือนในเด็กอายุ 0-5 ปี ระบบของเราให้คำแนะนำเฉพาะบุคคลโดยอิงจากการประเมินที่มีฐานวิจัยรองรับ",
      keyBenefits: "ประโยชน์หลัก",
      earlyDetection: "การตรวจพบเร็ว",
      earlyDetectionDesc: "ระบุสัญญาณเตือนภัยก่อนที่จะกลายเป็นความล่าช้าทางพัฒนาการที่ร้ายแรง",
      personalizedGuidance: "คำแนะนำเฉพาะบุคคล",
      personalizedGuidanceDesc: "รับคำแนะนำที่ปรับให้เหมาะกับความต้องการเฉพาะของบุตรหลาน",
      researchBacked: "มีฐานวิจัยรองรับ",
      researchBackedDesc: "อิงจากงานวิจัยระดับนานาชาติและปรับให้เหมาะกับความท้าทายของการเลี้ยงดูในยุคปัจจุบัน",
      convenientAccess: "เข้าถึงได้สะดวก",
      convenientAccessDesc: "เครื่องมือบนเว็บที่เข้าถึงได้ทุกที่ทุกเวลาผ่านมือถือหรือคอมพิวเตอร์"
    },
    
    // About page
    about: {
      title: "ทำความเข้าใจออทิสติกเสมือน",
      problemTitle: "ปัญหา: ออทิสติกเสมือน",
      problemDescription: "ออทิสติกเสมือนหมายถึงความล่าช้าทางพัฒนาการที่มีลักษณะคล้ายออทิสติกในเด็กเล็ก ซึ่งเกิดจากการได้รับสื่อหน้าจอดิจิทัลมากเกินไป (มักจะมากกว่า 4 ชั่วโมงต่อวันในวัย 0-3 ปี) อาการทั่วไปได้แก่ การไม่สบตา ไม่ตอบสนองเมื่อถูกเรียกชื่อ การพูดล่าช้า และการมีปฏิสัมพันธ์ทางสังคมจำกัด อาการเหล่านี้มักจะสามารถแก้ไขได้ด้วยการแทรกแซงที่เหมาะสม",
      solutionTitle: "วิธีแก้ไขของเรา: First Focus",
      solutionDescription: "First Focus เป็นเครื่องมือที่ใช้ AI ออกแบบมาเพื่อช่วยผู้ปกครองคัดกรองปัจจัยเสี่ยงด้วยตนเองและรับคำแนะนำเฉพาะบุคคลสำหรับพัฒนาการของบุตรหลาน",
      methodTitle: "วิธีการของเรา",
      methodDescription: "เราผสมผสานหลักการออกแบบเชิงวิจัย (Research-based Design) และกระบวนการคิดเชิงออกแบบ (Design Thinking) เข้ากับ AI และอัลกอริทึมแบบกฎเกณฑ์ การประเมินของเราอิงจากงานวิจัยระดับนานาชาติและปรับให้เหมาะกับผู้ปกครองโดยเฉพาะ"
    },
    
    // How it works
    howItWorks: {
      title: "วิธีการทำงาน",
      step1: "ทำแบบประเมิน 20 ข้อ",
      step1Desc: "ตอบคำถามที่ครอบคลุมพฤติกรรม 4 ด้านหลักในเวลาเพียง 5-10 นาที",
      step2: "AI วิเคราะห์โปรไฟล์ของบุตรหลาน",
      step2Desc: "ระบบของเราประมวลผลคำตอบและจับคู่กับตัวบ่งชี้ความเสี่ยงที่มีฐานวิจัย",
      step3: "รับระดับความเสี่ยงของบุตรหลาน",
      step3Desc: "ได้รับผลลัพธ์ที่ชัดเจนแบ่งเป็นระดับความเสี่ยงต่ำ ปานกลาง หรือสูง",
      step4: "รับคำแนะนำเฉพาะบุคคล",
      step4Desc: "รับคำแนะนำและกลยุทธ์ที่ปรับให้เหมาะกับพื้นที่เสี่ยงที่ระบุได้",
      step5: "ติดตามพัฒนาการของบุตรหลาน",
      step5Desc: "ติดตามความก้าวหน้าตามเวลาด้วยแดชบอร์ดติดตามพัฒนาการของเรา"
    },
    
    // Assessment
    assessment: {
      title: "แบบประเมินคัดกรองออทิสติกเสมือน",
      disclaimer: "ข้อสำคัญ: เครื่องมือนี้มีไว้สำหรับการคัดกรองเท่านั้น และไม่ใช่การทดแทนการวินิจฉัยทางการแพทย์โดยผู้เชี่ยวชาญ คะแนนสูงบ่งชี้ถึงพื้นที่ที่น่ากังวลซึ่งควรได้รับการประเมินเพิ่มเติมจากผู้เชี่ยวชาญ",
      timeEstimate: "เวลาโดยประมาณ: 5-10 นาที",
      privacyNote: "คำตอบของท่านจะถูกเก็บเป็นความลับและปลอดภัย",
      startButton: "เริ่มประเมิน",
      nextButton: "ถัดไป",
      previousButton: "ก่อนหน้า",
      submitButton: "ส่งแบบประเมิน",
      progress: "คำถามข้อที่ {{current}} จาก {{total}}",
      
      // Categories
      categories: {
        screenTime: "พฤติกรรมการใช้หน้าจอดิจิทัล",
        social: "การตอบสนองทางสังคม",
        communication: "ทักษะภาษาและการสื่อสาร",
        emotional: "พฤติกรรมทางอารมณ์และการปรับตัว"
      },
      
      // Questions
      questions: {
        screenTime1: {
          question: "โดยประมาณ บุตรหลานของท่านใช้เวลาบนหน้าจอ (ทีวี แท็บเล็ต สมาร์ทโฟน) กี่ชั่วโมงต่อวัน?",
          options: ["น้อยกว่า 1 ชั่วโมง", "1–2 ชั่วโมง", "2–4 ชั่วโมง", "มากกว่า 4 ชั่วโมง"]
        },
        screenTime2: {
          question: "บุตรหลานของท่านเริ่มใช้หน้าจอหรือดูหน้าจอเป็นประจำตั้งแต่อายุเท่าใด?",
          options: ["ก่อน 12 เดือน", "12–18 เดือน", "18–24 เดือน", "หลังจาก 2 ขวบ"]
        },
        screenTime3: {
          question: "เด็กมักเลือกใช้อุปกรณ์หน้าจอมากกว่าการเล่นกับของเล่นหรือปฏิสัมพันธ์กับผู้คน หรือไม่?",
          options: ["ใช่", "ไม่ใช่"]
        },
        screenTime4: {
          question: "เด็กแสดงความหงุดหงิด ร้าวรานหรือมีอารมณ์รุนแรงเมื่อเวลาหน้าจอสิ้นสุด หรือเมื่ออุปกรณ์ถูกนำออกไปหรือไม่?",
          options: ["ใช่", "ไม่ใช่"]
        },
        screenTime5: {
          question: "ท่านพึ่งพาการมอบหน้าจอ (วิดีโอ เกม) ให้เด็กเพื่อปลอบใจพวกเขา ป้อนอาหาร หรือ ช่วยให้หลับได้บ่อยครั้งหรือไม่?",
          options: ["ใช่", "ไม่ใช่"]
        },
        
        social1: {
          question: "เมื่อท่านเรียกชื่อเด็ก พวกเขามองมาหาท่านหรือแสดงการรับรู้อย่างสม่ำเสมอหรือไม่?",
          options: ["ใช่", "ไม่ใช่"]
        },
        social2: {
          question: "เด็กสบตาเป็นประจำเมื่อปฏิสัมพันธ์ (เช่น ระหว่างการเล่นหรือเมื่อท่านพูดกับพวกเขา) หรือไม่?",
          options: ["ใช่", "ไม่ใช่"]
        },
        social3: {
          question: "เด็กชี้วัตถุที่สนใจเพื่อแสดงให้ท่านดู (เช่น ชี้เครื่องบินในท้องฟ้า) หรือนำของเล่นมาแสดง/ แบ่งปันกับท่านหรือไม่?",
          options: ["ใช่", "ไม่ใช่"]
        },
        social4: {
          question: "เด็กจะเข้าร่วมในการเล่นไปมาง่าย ๆ กับผู้อื่น (เช่น เล่นซ่อนหา กลิ้งลูกบอลให้ใครคนหนึ่ง หรือเกมเลียนแบบ) หรือไม่?",
          options: ["ใช่", "ไม่ใช่"]
        },
        social5: {
          question: "เด็กแสดงความสนใจในเด็กคนอื่น (เช่น มอง ยิ้มให้ หรือพยายามเล่นข้างๆ พวกเขา) หรือไม่?",
          options: ["ใช่", "ไม่ใช่"]
        },
        
        communication1: {
          question: "การพัฒนาภาษาพูดของเด็กเป็นไปตามเกณฑ์วัยหรือไม่? (เช่น ในอายุ 2 ขวบ พวกเขาใช้คำ เดี่ยวหรือวลีง่าย ๆ หรือไม่? หากอายุน้อยกว่า: พวกเขาพูดพึมพำในอายุ 12 เดือนหรือไม่?)",
          options: ["ใช่", "ไม่ใช่"]
        },
        communication2: {
          question: "เด็กใช้ท่าทางเพื่อสื่อสารความต้องการหรือแบ่งปันสิ่งต่าง ๆ หรือไม่? (เช่น ชี้สิ่งที่พวกเขาต้องการ พยักหน้าสำหรับ \"ใช่\" โบกมือ \"ลาก่อน\")",
          options: ["ใช่", "ไม่ใช่"]
        },
        communication3: {
          question: "เด็กสามารถเข้าใจและตอบสนองต่อคำสั่งหรือคำถามง่าย ๆ ได้หรือไม่? (เช่น \"ให้ ลูกบอลฉัน\" \"มานี่\" หรือชื่อที่คุ้นเคยของคน/วัตถุ)",
          options: ["ใช่", "ไม่ใช่"]
        },
        communication4: {
          question: "เด็กส่วนใหญ่ใช้คำพูดของตนเองเพื่อขอสิ่งต่าง ๆ หรือสื่อสาร แทนที่จะ เพียงทำซ้ำวลีจากทีวีหรือวิดีโอหรือไม่?",
          options: ["ใช้คำพูดของตนเอง", "พูดเลียนแบบ/พูดตามรายการหรือวิดีโอ"]
        },
        communication5: {
          question: "เมื่อเด็กต้องการบางสิ่งหรือพยายามดึงดูดความสนใจของท่าน พวกเขาทำเสียงหรือ สีหน้าที่เหมาะสม (เช่น มองมาหาท่าน เอื้อมมาหาท่าน หรือส่งเสียง) แทนที่จะแค่เงียบ ๆ ดูหน้าจอหรือไม่?",
          options: ["ใช่", "ไม่ใช่"]
        },
        
        emotional1: {
          question: "เด็กแสดงอารมณ์ที่เหมาะสมสำหรับวัยของพวกเขา (เช่น ยิ้มเมื่อมีความสุข ร้องไห้เมื่อ เจ็บ) หรือพวกเขามักปรากฏผิดปกติแบนราบหรือไม่แยแสในการแสดงอารมณ์?",
          options: ["แสดงอารมณ์เหมาะสม", "แสดงอารมณ์ไม่เหมาะสมหรือขาดการแสดงออก"]
        },
        emotional2: {
          question: "เด็กมีอารมณ์รุนแรงหรือการสลายตัวที่ดูเหมือนมากเกินไปสำหรับวัยของพวก เขาหรือถูกกระตุ้นโดยประเด็นเล็กน้อย (โดยเฉพาะเมื่อถูกปฏิเสธกิจกรรมที่ต้องการเช่นเวลาหน้าจอ) หรือไม่?",
          options: ["ใช่", "ไม่ใช่"]
        },
        emotional3: {
          question: "เด็กมีความเครียดอย่างมากจากการเปลี่ยนแปลงเล็กน้อย ในกิจวัตรหรือสิ่งแวดล้อม (เช่น ต้องการตารางเวลารายวันเหมือนเดิมทุกวัน และสลายตัวหากมีการเปลี่ยนแปลง) หรือไม่?",
          options: ["ใช่", "ไม่ใช่"]
        },
        emotional4: {
          question: "เด็กมีความยากลำบากในการสนใจของเล่นหรือกิจกรรมที่ไม่เกี่ยวข้อง กับหน้าจอ มักปรากฏอยู่ไม่นิ่งหรือไม่สามารถนั่งนิ่งได้เว้นแต่มหีหน้าจออยู่หรือไม่?",
          options: ["ใช่", "ไม่ใช่"]
        },
        emotional5: {
          question: "เด็กมีปฏิกิริยารุนแรงต่อเสียง สายตา หรือเนื้อสัมผัสบางอย่าง (เช่น ปิดหูจากเสียงปานกลาง หรือมีความเครียดอย่างมากจากแสงสว่างหรือความรู้สึกเฉพาะ) หรือไม่?",
          options: ["ใช่", "ไม่ใช่"]
        },
        emotional6: {
          question: "ท่านได้สังเกตเห็นการกระทำซ้ำๆ (เช่น การโบกมือ การโยก หรือการเรียงวัตถุ) หรือความ ผูกพันที่ผิดปกติกับวัตถุ/หัวข้อบางอย่างในพฤติกรรมของเด็กหรือไม่?",
          options: ["ใช่", "ไม่ใช่"]
        }
      },
      
      // Results
      results: {
        title: "ผลการประเมิน",
        riskLevel: "ระดับความเสี่ยง",
        totalScore: "คะแนนรวม: {{score}}/{{total}}",
        lowRisk: "ความเสี่ยงต่ำ",
        mediumRisk: "ความเสี่ยงปานกลาง",
        highRisk: "ความเสี่ยงสูง",
        lowRiskDesc: "ปลอดภัย มีแนวโน้มปกติ ควรติดตามพัฒนาการของบุตรหลานต่อไป",
        mediumRiskDesc: "ตรวจพบสัญญาณเตือนภัยเบื้องต้น ควรพิจารณาใช้กลยุทธ์ที่แนะนำและติดตามอย่างใกล้ชิด",
        highRiskDesc: "มีตัวบ่งชี้ความเสี่ยงที่ชัดเจน แนะนำอย่างยิ่งให้ปรึกษาผู้เชี่ยวชาญและเริ่มการแทรกแซงทันที",
        categoryBreakdown: "รายละเอียดตามหมวด",
        recommendations: "คำแนะนำเฉพาะบุคคล",
        nextSteps: "ขั้นตอนต่อไป",
        retakeAssessment: "ประเมินใหม่",
        downloadResults: "ดาวน์โหลดผลลัพธ์"
      }
    },
    
    // Common
    common: {
      learnMore: "เรียนรู้เพิ่มเติม",
      getStarted: "เริ่มต้น",
      loading: "กำลังโหลด...",
      error: "เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง",
      close: "ปิด",
      save: "บันทึก",
      cancel: "ยกเลิก"
    }
  }
};

