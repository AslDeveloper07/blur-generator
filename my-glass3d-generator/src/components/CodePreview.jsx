import { Button } from "@/components/ui/button";
import { Check, Copy } from 'lucide-react';
import { useCopyToClipboard } from '../lib/utils';

const CodePreview = ({ cssCode }) => {
  const [copiedText, copy] = useCopyToClipboard();

  return (
    <div className="mt-8 relative bg-gray-800/50 rounded-lg p-1 backdrop-blur-sm border border-gray-700">
      <pre className="bg-gray-900/70 p-4 rounded-md text-sm text-gray-100 overflow-x-auto border border-gray-700">
        <code>{cssCode}</code>
      </pre>
      <div className="absolute top-4 right-4">
        <Button
          variant="secondary"
          size="sm"
          onClick={() => copy(cssCode)}
          className="flex items-center gap-1 text-xs"
        >
          {copiedText ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
          {copiedText ? 'Copied!' : 'Copy CSS'}
        </Button>
      </div>
      <a href="mailto:Aslwexking777@gmail.com" className="text-blue-400 hover:text-blue-300 text-xs mt-4 block text-center mb-3">
        Aslwexking777@gmail.com
      </a>
    </div>
  );
};

export default CodePreview;