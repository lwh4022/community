import { useEffect } from 'react';
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css';
import './htmlEditor.css';

function HtmlEditor() {
  const { quill, quillRef } = useQuill({
    modules: {
      toolbar: [
        [{ header: [1, 2, 3, false] }],
        ['bold', 'italic', 'strike'], // toggled buttons
        ['blockquote', 'code-block'],
        [{ align: [] }, { list: 'ordered' }, { list: 'bullet' }],
        [{ color: [] }, { background: [] }], // dropdown with defaults from theme
        ['link', 'image'],
      ],
    },
    formats: ['blockquote', 'code-block'],
    placeholder: 'Please input your story',
  });

  useEffect(() => {
    if (quill) {
      quill.on('text-change', (delta, oldDelta, source) => {
        console.log(delta);
        console.log(source);
        console.log(quill.root.innerHTML); // Get innerHTML using quill
      });
    }
  }, [quill]);

  return <div ref={quillRef} />;
}

export default HtmlEditor;
