import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";

// RangeSlider o'rniga
export const FilterSlider = ({ label, value, min, max, step, onChange }) => {
  return (
    <div className="flex items-center gap-4 mb-4">
      <Checkbox id={`checkbox-${label}`} checked={true} disabled className="h-4 w-4 rounded" />
      <Label htmlFor={`checkbox-${label}`} className="w-20 text-gray-300 capitalize">{label}</Label>
      <Slider
        defaultValue={[value]}
        min={min}
        max={max}
        step={step}
        onValueChange={(val) => onChange(val[0])}
        className="flex-grow"
      />
      <span className="text-gray-300 w-10 text-right text-sm">{value}</span>
    </div>
  );
};

// ColorPicker o'rniga
export const ColorControls = ({ label, color, onChange }) => {
  const { h, s, l } = color;

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <Checkbox id={`checkbox-color-${label}`} checked={true} disabled className="h-4 w-4 rounded" />
          <Label htmlFor={`checkbox-color-${label}`} className="text-gray-300 capitalize">{label}</Label>
        </div>
        <div
          className="w-8 h-8 rounded-full border border-gray-600 shadow-inner"
          style={{ backgroundColor: `hsl(${h}, ${s}%, ${l}%)` }}
        ></div>
      </div>
      <div className="space-y-4 pl-6">
        <div>
          <Label className="block text-gray-400 text-sm mb-1">Hue</Label>
          <Slider
            defaultValue={[h]}
            min={0}
            max={360}
            step={1}
            onValueChange={(val) => onChange({ ...color, h: val[0] })}
            className="w-full [&>span:first-child]:bg-gradient-to-r [&>span:first-child]:from-red-500 [&>span:first-child]:via-green-500 [&>span:first-child]:to-blue-500"
          />
        </div>
        <div>
          <Label className="block text-gray-400 text-sm mb-1">Saturation</Label>
          <Slider
            defaultValue={[s]}
            min={0}
            max={100}
            step={1}
            onValueChange={(val) => onChange({ ...color, s: val[0] })}
            className="w-full"
            style={{ '--slider-track-background': `linear-gradient(to right, hsl(${h}, 0%, ${l}%), hsl(${h}, 100%, ${l}%))` }}
          />
        </div>
        <div>
          <Label className="block text-gray-400 text-sm mb-1">Lightness</Label>
          <Slider
            defaultValue={[l]}
            min={0}
            max={100}
            step={1}
            onValueChange={(val) => onChange({ ...color, l: val[0] })}
            className="w-full"
            style={{ '--slider-track-background': `linear-gradient(to right, hsl(${h}, ${s}%, 0%), hsl(${h}, ${s}%, 50%), hsl(${h}, ${s}%, 100%))` }}
          />
        </div>
      </div>
    </div>
  );
};

export const TextureControls = () => {
  return (
    <div className="text-gray-400 text-sm">
      Texture sozlamalari bu yerda bo'ladi (Hozircha yo'q)
    </div>
  );
};