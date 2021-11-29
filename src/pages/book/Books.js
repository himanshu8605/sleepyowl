


import React, { useState }  from "react";
//import { Modal } from 'react-responsive-modal-scroll';
import Modal from 'react-responsive-modal-scroll';
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





const Books = () => {
  const [open, setOpen] = React.useState(false);
  const lorem = (
    <p>
      Mauris ac arcu sit amet dui interdum bibendum a sed diam. Praesent rhoncus
      congue ipsum elementum lobortis. Ut ligula purus, ultrices id condimentum
      quis, tincidunt quis purus. Proin quis enim metus. Nunc feugiat odio at
      eros porta, ut rhoncus lorem tristique. Nunc et ipsum eu ex vulputate
      consectetur vel eu nisi. Donec ultricies rutrum lectus, sit ame feugiat
      est semper vitae. Proin varius imperdiet consequat. Proin eu metus nisi.
      In hac habitasse platea dictumst. Vestibulum ac ultrices risus.
      Pellentesque arcu sapien, aliquet sed orci sit amet, pulvinar interdum
      velit. Nunc a rhoncus ipsum, maximus fermentum dolor. Praesent aliquet
      justo vitae rutrum volutpat. Ut quis pulvinar est.
    </p>
  );
  
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

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    //subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }




  const str = "<p>React Froala Editor</p>";
  return (
    <div className="container">

 <Modal open={open} onClose={() => setOpen(false)}>
        
        {lorem}
        {lorem}
        {lorem}
        {lorem}
        {lorem}
        {lorem}
        {lorem}
        {lorem}
        {lorem}
      </Modal>

    <div data-view="list-view" className="download-cards">
    {booksList.map((item)=>
      <article className="download-card">
        <div className="download-card__icon-box"><img src={item.image} /></div>
        <div className="download-card__content-box">
          <div className="content">
            <h2 className="download-card__content-box__catagory">{item.price}</h2>
            <h3 className="download-card__content-box__title">{item.title}</h3>
            <p className="download-card__content-box__description">High &amp; low-res photos for print and web media. </p>
            <a onClick={() => setOpen(true)} className="button"> <i className="fa fa-book" /> Read</a>
          </div>
        </div>
      </article>



    )}
 




    </div>
  </div>


  );
};

export default Books;








