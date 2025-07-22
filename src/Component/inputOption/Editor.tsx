// src/components/Editor.tsx
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // นำเข้าคลาส CSS ของ Quill

const Editor: React.FC = () => {
  const [editorValue, setEditorValue] = useState<string>(''); // ค่าของ editor

  const handleChange = (value: string) => {
    setEditorValue(value); // เมื่อมีการเปลี่ยนแปลงค่าภายใน editor
  };

  return (
    <div className="bg-white border-gray-300 rounded-lg shadow-sm">
      <ReactQuill
        value={editorValue}
        onChange={handleChange}
        modules={{
          toolbar: [
            [{ 'header': '1'}, { 'header': '2'}, { 'font': [] }],
            [{ 'list': 'ordered'}, { 'list': 'bullet' }],
            [{ 'align': [] }],
            ['bold', 'italic', 'underline'],
            ['link'],
            [{ 'color': [] }, { 'background': [] }],
            ['image'],
            ['blockquote', 'code-block']
          ],
        }}
        className="h-60"
      />
    </div>
  );
};

export default Editor;
