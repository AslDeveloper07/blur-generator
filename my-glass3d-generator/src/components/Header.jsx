import React from 'react';
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Header = ({ activeTab, setActiveTab }) => {
  return (
    <div className="flex flex-col items-center mb-8">
      <div className="flex items-center space-x-2 text-white mb-4">
        <h1 className="text-3xl font-bold text-gray-100">Blur Generator </h1>
      </div>
      <p className="text-sm text-gray-400 text-center mb-6 max-w-sm">
Use blur effects in a style you like.
      </p>
      <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="w-[350px]">
        <TabsList className="grid w-full grid-cols-3 bg-gray-200/20 backdrop-blur-sm">
          <TabsTrigger value="Dark" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Dark</TabsTrigger>
          <TabsTrigger value="Video" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Video</TabsTrigger>
          <TabsTrigger value="Light" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Light</TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
};

export default Header;