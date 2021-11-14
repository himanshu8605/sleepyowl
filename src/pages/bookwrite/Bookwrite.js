import React from "react";
import {
  Col,
  Row,
} from "reactstrap";
import Widget from "../../components/Widget/Widget";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import FroalaEditor from "react-froala-editor";
const Bookwrite = () => {
  const str = '<p>React Froala Editor</p>';
  return (
    <div>
      
      {/* <Editor
  toolbarClassName="toolbarClassName"
  wrapperClassName="wrapperClassName"
  editorClassName="editorClassName"
/> */}


<FroalaEditor
        base='https://cdnjs.cloudflare.com/ajax/libs/froala-editor/2.3.4'
      
        
        alignP
        charCounterP        
        codeBeautifierP
        colorsP
        draggableP
        emoticonsP
        entitiesP
        fileP
        fontFamilyP
        fontSizeP
        fullscreenP
        imageP
        imageManagerP
        inlineStyleP
        lineBreakerP
        linkP
        listsP
        paragraphFormatP
        paragraphStyleP
        quickInsertP
        quoteP
        saveP
        tableP
        urlP
        videoP/>
      
      
    </div>
  )
}

export default Bookwrite;



