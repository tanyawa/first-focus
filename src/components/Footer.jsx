import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Heart, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const { language } = useLanguage();

  return (
    <footer className="bg-card border-t border-border mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <Heart className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-primary">First Focus</span>
            </div>
            <p className="text-muted-foreground mb-4">
              {language === 'en' 
                ? "AI-powered screening tool for virtual autism risk assessment in early childhood development."
                : "เครื่องมือคัดกรองด้วย AI สำหรับประเมินความเสี่ยงออทิสติกเสมือนในพัฒนาการเด็กปฐมวัย"
              }
            </p>
            <p className="text-sm text-muted-foreground">
              {language === 'en'
                ? "© 2024 First Focus. All rights reserved."
                : "© 2024 First Focus สงวนลิขสิทธิ์"
              }
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">
              {language === 'en' ? 'Quick Links' : 'ลิงก์ด่วน'}
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  {language === 'en' ? 'Privacy Policy' : 'นโยบายความเป็นส่วนตัว'}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  {language === 'en' ? 'Terms of Service' : 'ข้อกำหนดการใช้งาน'}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  {language === 'en' ? 'Research Papers' : 'เอกสารวิจัย'}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  {language === 'en' ? 'Support' : 'ความช่วยเหลือ'}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">
              {language === 'en' ? 'Contact' : 'ติดต่อเรา'}
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>tci.allforone@gmail.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+66 82 498 2642</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>
                  {language === 'en' 
                    ? 'Bangkok, Thailand'
                    : 'กรุงเทพมหานคร ประเทศไทย'
                  }
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>
            {language === 'en'
              ? "This tool is for screening purposes only and is not a substitute for professional medical diagnosis."
              : "เครื่องมือนี้มีไว้สำหรับการคัดกรองเท่านั้น และไม่ใช่การทดแทนการวินิจฉัยทางการแพทย์โดยผู้เชี่ยวชาญ"
            }
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

