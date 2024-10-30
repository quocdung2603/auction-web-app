import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';

interface InputTypeStringProps{
    title: string,
    content: string,
    setContent: React.Dispatch<React.SetStateAction<string>>,
    placeholder: string
}
const inputDescription:React.FC<InputTypeStringProps> = ({title,content,placeholder,setContent}) => {
  return (
    <div className='w-full min-w-[200px] mb-5 text-black'>
      <label className='block mb-1 text-lg text-black font-medium'>
        {title}
      </label>
      <CKEditor
        editor={ClassicEditor}
        config={{
          toolbar: {
            items: [
              'undo',
              'redo',
              '|',
              'heading',
              '|',
              'fontSize',
              'fontColor',
              'fontBackgroundColor',
              '|',
              'bold',
              'italic',
              'strikethrough',
              'subscript',
              'superscript',
              'code',
              '-',
              '|',
              'alignment',
              'link',
              'imageUpload',
              'blockQuote',
              'codeBlock',
              '|',
              'bulletedList',
              'numberedList',
              'todoList',
              'outdent',
              'indent',
            ],
          },
          image: {
            toolbar: [
              'imageTextAlternative',
              'imageStyle:full',
              'imageStyle:side',
            ],
          },
          placeholder: placeholder,
          initialData: content,
        }}
        onChange={(event, editor) => {
          console.log(event);
          setContent(editor.getData());
        }}
      />
      {/* <p className='flex items-center mt-2 text-xs text-red-500'>
        Great! Your phone number is valid.
      </p> */}
    </div>
  );
}

export default inputDescription;