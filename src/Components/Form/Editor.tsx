import { Editor } from "@tinymce/tinymce-react/lib/cjs/main/ts/components/Editor";
import React from "react";
import { useUploadImageMutation } from "../../generated/graphql";
import Loading from "../Shared/Dialog/Loading";

interface Probs {
  id: string;
  initialValue?: string | null;
  value: string | undefined;
  onChange: Function;
}

const MarkDownEditor = (probs: Probs) => {
  const [uploadImageMutation, { loading }] = useUploadImageMutation();

  return (
    <>
      <Loading loading={loading} />
      <Editor
        id={probs.id}
        apiKey="mkq4wx2fqdpsudg39muuml92d69h1mo1gsbjspljadf570fm"
        init={{
          width: "100%",
          menubar: false,
          block_formats: 'Paragraph=p;Header 1=h2;Header 2=h4;',
          plugins: [
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace visualblocks code fullscreen",
            "insertdatetime media table paste code help wordcount hr",
          ],
          toolbar:
            "undo redo | fullscreen image link table code | formatselect | bold italic underline backcolor | hr alignleft aligncenter alignright alignjustify | bullist numlist outdent indent",
          automatic_uploads: true,
          file_picker_types: "image",
          file_picker_callback: function (cb, value, meta) {
            var input = document.createElement("input");
            input.setAttribute("type", "file");
            input.setAttribute("accept", "image/*");
            input.onchange = function () {
              var file = (this as any).files[0];
              uploadImageMutation({
                variables: {
                  image: [file],
                },
              })
                .then((data) => cb(data?.data?.uploadImage[0].url!))
                .catch((e) => {
                  console.log(e);
                  alert("Image Upload failed. Retry...");
                });
            };
            input.click();
          },
          content_style: "body { font-family: Proxima Nova; font-size: 18px }",
        }}
        aria-required
        initialValue={probs.initialValue!}
        value={probs.value}
        onEditorChange={(e) => probs.onChange(probs.id, e)}
      />
    </>
  );
};

export default MarkDownEditor;
