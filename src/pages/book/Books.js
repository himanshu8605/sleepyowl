


import React, { useState }  from "react";
import './books.scss';
import { Col, Row } from "reactstrap";
import Widget from "../../components/Widget/Widget";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import FroalaEditor from "react-froala-editor";
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import 'froala-editor/js/plugins.pkgd.min.js';
const axios = require('axios');

// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";




const Books = () => {
  const [booksList, setBooklist] = useState([]);
  const [id, setId] = React.useState(1);
  React.useEffect(() => {
    if (id == null || id === '') {
      return;
    }
    
    axios.get('https://api.itbook.store/1.0/search/reaction')
  .then(function (response) {
    // handle success
    console.log('response from book api:',response.data.books);
    setBooklist(response.data.books)
    // booksList=response.data.books;
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  }, [id]);
  const str = "<p>React Froala Editor</p>";
  return (
    <div className="container">
 
    <div data-view="list-view" className="download-cards">
    {booksList.map((item)=>
      <article className="download-card">
        <div className="download-card__icon-box"><img src={item.image} /></div>
        <div className="download-card__content-box">
          <div className="content">
            <h2 className="download-card__content-box__catagory">{item.price}</h2>
            <h3 className="download-card__content-box__title">{item.title}</h3>
            <p className="download-card__content-box__description">High &amp; low-res photos for print and web media. </p>
            <a className="button"> <i className="fa fa-book" /> Read</a>
          </div>
        </div>
      </article>
    )}
 
    </div>
  </div>


  );
};

export default Books;








