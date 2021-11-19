import React from "react";
import { Col, Row } from "reactstrap";
import Widget from "../../components/Widget/Widget";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import FroalaEditor from "react-froala-editor";
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import 'froala-editor/js/plugins.pkgd.min.js';
import FroalaEditorComponent from 'react-froala-wysiwyg';
const Bookwrite = () => {
  const str = "<p>React Froala Editor</p>";
  return (
    <div>
      {/* <Editor
  toolbarClassName="toolbarClassName"
  wrapperClassName="wrapperClassName"
  editorClassName="editorClassName"
/> */}

      {/* <FroalaEditor
        base="https://cdnjs.cloudflare.com/ajax/libs/froala-editor/2.3.4"
        
        imageP
        imageManagerP
        
      /> */}
      <FroalaEditorComponent tag='textarea'/>
    </div>
  );
};

export default Bookwrite;
