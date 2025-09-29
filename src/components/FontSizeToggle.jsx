import React from 'react';
import { Button } from './ui/button';
import { useTheme } from '../contexts/ThemeContext';
import { Type } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

const FontSizeToggle = () => {
  const { fontSize, changeFontSize } = useTheme();

  const fontSizes = [
    { value: 'small', label: 'Small' },
    { value: 'medium', label: 'Medium' },
    { value: 'large', label: 'Large' }
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="flex items-center gap-2">
          <Type className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {fontSizes.map((size) => (
          <DropdownMenuItem
            key={size.value}
            onClick={() => changeFontSize(size.value)}
            className={fontSize === size.value ? 'bg-accent' : ''}
          >
            {size.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default FontSizeToggle;

