import { useEffect } from 'react';
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css';
import './htmlEditor.css';

function HtmlEditor() {
  const { quill, quillRef, Quill } = useQuill({
    modules: {
      toolbar: [
        [{ header: [1, 2, 3, false] }],
        ['bold', 'italic', 'strike'], // toggled buttons
        ['blockquote', 'code-block'],
        [{ align: [] }, { list: 'ordered' }, { list: 'bullet' }],
        [{ indent: '-1' }, { indent: '+1' }], // outdent/indent
        [{ color: [] }, { background: [] }], // dropdown with defaults from theme
        ['link', 'image'],
      ],
    },
    placeholder: 'Please input your story',
  });

  if (Quill && !quill) {
    // For execute this line only once.
    const KToolbar = Quill.import('modules/toolbar');
    console.log(KToolbar);
  }

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
