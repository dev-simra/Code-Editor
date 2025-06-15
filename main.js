require.config({ paths: { vs: 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.44.0/min/vs' } });

require(['vs/editor/editor.main'], function () {
  const editor = monaco.editor.create(document.getElementById('editor'), {
    value: `# Write your Python code here

def main():
    print("Hello, World!")

if __name__ == "__main__":
    main()`,
    language: 'python',
    theme: 'vs-dark',
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
  });

  const runButton = document.getElementById('runButton');
  runButton.addEventListener('click', () => {
    const code = editor.getValue();
    console.log('Running code:', code);
    // Add your Python code execution logic here
  });

  // Handle window resize
  window.addEventListener('resize', () => {
    editor.layout();
  });
});