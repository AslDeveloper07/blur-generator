import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import SettingSection from './components/SettingSection';
import { FilterSlider, ColorControls, TextureControls } from './components/Controls';
import CodePreview from './components/CodePreview';
import GlassCard from './components/GlassCard';

function App() {
  const [activeTab, setActiveTab] = useState('Video'); // Default tab
  const [backdropFilterOn, setBackdropFilterOn] = useState(true);
  const [blur, setBlur] = useState(70);
  const [brightness, setBrightness] = useState(1.9);
  const [saturation, setSaturation] = useState(2.5);
  const [colorOn, setColorOn] = useState(true);
  const [cardColor, setCardColor] = useState({ h: 189, s: 80, l: 10 }); // HSL values
  const [textureOn, setTextureOn] = useState(false);

  const cardStyle = {
    backdropFilter: backdropFilterOn ? `blur(${blur}px) brightness(${brightness}) saturate(${saturation})` : 'none',

  };

  const generateCssCode = () => {
    let filterCss = '';
    if (backdropFilterOn) {
      filterCss += `blur(${blur}px) brightness(${brightness}) saturate(${saturation})`;
    } else {
      filterCss = 'none';
    }

    const cssVars = `
  --filter-glass3d: ${filterCss};
  --color-glass3d-h: ${cardColor.h};
  --color-glass3d-s: ${cardColor.s}%;
  --color-glass3d-l: ${cardColor.l}%;
  --color-glass3d-opacity: ${colorOn ? 0.7 : 0};
`;

    const styleBlock = `
.glass3d {
  ${cssVars}
  backdrop-filter: var(--filter-glass3d);
  background-color: hsl(var(--color-glass3d-h), var(--color-glass3d-s), var(--color-glass3d-l), var(--color-glass3d-opacity));
  /* Qo'shimcha stillar bu yerda bo'lishi mumkin, masalan border, shadow */
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 15px; /* Misol uchun */
}
`;
    return styleBlock;
  };

  return (
    <div className="relative min-h-screen flex items-start justify-between p-4 overflow-hidden dark">

<div className="relative z-10 w-full max-h-[690px] overflow-auto kurinmas max-w-sm bg-gray-900/60 rounded-2xl shadow-2xl p-4 border border-gray-800 backdrop-blur-xs ">
        <Header activeTab={activeTab} setActiveTab={setActiveTab} />

        <div className="space-y-4 overflow-auto kurinmas">
          <SettingSection
            label="backdrop-filter"
            isOn={backdropFilterOn}
            handleToggle={() => setBackdropFilterOn(!backdropFilterOn)}
          >
            <FilterSlider label="blur" value={blur} min={0} max={200} step={1} onChange={setBlur} />
            <FilterSlider label="brightness" value={brightness} min={0} max={5} step={0.1} onChange={setBrightness} />
            <FilterSlider label="saturation" value={saturation} min={0} max={10} step={0.1} onChange={setSaturation} />
          </SettingSection>

          <SettingSection
            label="color"
            isOn={colorOn}
            handleToggle={() => setColorOn(!colorOn)}
          >
            <ColorControls label="color" color={cardColor} onChange={setCardColor} />
          </SettingSection>

          <SettingSection
            label="texture"
            isOn={textureOn}
            handleToggle={() => setTextureOn(!textureOn)}
          >
            <TextureControls />
          </SettingSection>
        <CodePreview cssCode={generateCssCode()} />
        </div>

      </div>
      <div className="]">
         <GlassCard style={cardStyle} />
      </div>


    </div>
  );
}

export default App;