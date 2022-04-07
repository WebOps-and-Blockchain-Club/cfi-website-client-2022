import { Editor } from "@tinymce/tinymce-react/lib/cjs/main/ts/components/Editor";
import React from "react";

interface Probs {
  id: string;
  initialValue?: string | null;
  value: string | undefined;
  onChange: Function;
}

const MarkDownEditor = (probs: Probs) => {
  return (
    <Editor
      id={probs.id}
      apiKey="mkq4wx2fqdpsudg39muuml92d69h1mo1gsbjspljadf570fm"
      init={{
        menubar: false,
        plugins: [
          "advlist autolink lists link image charmap print preview anchor",
          "searchreplace visualblocks code fullscreen",
          "insertdatetime media table paste code help wordcount hr",
        ],
        toolbar:
          "undo redo | fullscreen image link table code | formatselect | bold italic underline backcolor | hr alignleft aligncenter alignright alignjustify | bullist numlist outdent indent",
        images_upload_handler: function (blobInfo, success, failure) {
          //   success("img link");
          failure("Invalid Input");
        },
        content_style: "body { font-family: Proxima Nova; font-size:16px }",
      }}
      aria-required
      initialValue={probs.initialValue!}
      value={probs.value}
      onEditorChange={(e) => probs.onChange(probs.id, e)}
    />
  );
};

export default MarkDownEditor;
