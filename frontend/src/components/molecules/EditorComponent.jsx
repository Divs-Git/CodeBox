import React, { useEffect, useState } from "react";
import { Editor } from "@monaco-editor/react";

const EditorComponent = () => {
  const [editorState, setEditorState] = useState({ theme: null });

  async function downloadTheme() {
    const response = await fetch("/oneDarkProTheme.json");
    const data = await response.json();
    setEditorState({ ...editorState, theme: data });
  }

  useEffect(() => {
    downloadTheme();
  }, []);

  function handleEditorTheme(editor, monaco) {
    monaco.editor.defineTheme("OneDarkPro", editorState.theme);
    monaco.editor.setTheme("OneDarkPro");
  }

  return (
    <React.Fragment>
      {editorState.theme && (
        <Editor
          height={"80vh"}
          width={"100%"}
          defaultLanguage="javascript"
          defaultValue="// Welcome to the playground"
          options={{ fontSize: "16px", fontFamily: "Monospace" }}
          onMount={handleEditorTheme}
        />
      )}
    </React.Fragment>
  );
};

export default EditorComponent;
