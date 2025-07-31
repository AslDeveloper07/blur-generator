import React from 'react';
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { ChevronDown, ChevronUp } from 'lucide-react';

const SettingSection = ({ label, isOn, handleToggle, children }) => {
  const [isOpen, setIsOpen] = React.useState(isOn); 

  React.useEffect(() => {
    setIsOpen(isOn);
  }, [isOn]);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="w-full bg-gray-800/50 rounded-lg p-4 mb-4 backdrop-blur-sm border border-gray-700">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Switch id={`toggle-${label}`} checked={isOn} onCheckedChange={handleToggle} />
          <Label htmlFor={`toggle-${label}`} className="text-gray-200 text-lg cursor-pointer">{label}</Label>
        </div>
        <button onClick={toggleOpen} className="text-gray-400 p-1 rounded-md hover:bg-gray-700 transition-colors">
          {isOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
        </button>
      </div>
      {isOpen && <div className="mt-4 pl-8">{children}</div>}
    </div>
  );
};

export default SettingSection;