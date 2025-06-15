import React, { useState } from 'react';
import MonacoEditor from '@monaco-editor/react';

const Editor: React.FC = () => {
  const [code, setCode] = useState<string>('# Write your Python code here\n\ndef main():\n    print("Hello, World!")\n\nif __name__ == "__main__":\n    main()');

  const handleEditorChange = (value: string | undefined) => {
    if (value !== undefined) {
      setCode(value);
    }
  };

  return (
    <div className="h-[calc(100vh-8rem)] rounded-lg overflow-hidden border border-[#3C3C3C]">
      <MonacoEditor
        height="100%"
        language="python"
        theme="vs-dark"
        value={code}
        onChange={handleEditorChange}
        options={{
          fontSize: 14,
          minimap: { enabled: true },
          scrollBeyondLastLine: false,
          automaticLayout: true,
          lineNumbers: 'on',
          roundedSelection: false,
          padding: { top: 16 },
          folding: true,
          renderLineHighlight: 'all',
          suggestOnTriggerCharacters: true,
          acceptSuggestionOnEnter: 'on',
          tabSize: 4,
          wordWrap: 'on'
        }}
      />
    </div>
  );
};

export default Editor;