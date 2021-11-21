import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import classnames from "classnames";
import {
  Col,
  Row,
  Button,
} from "reactstrap";
import Widget from "../../components/Widget/Widget.js";
import Code from "../../components/Code/Code.js";
import Notification from "../../components/Notification/Notification.js";
import s from "./Notifications.module.scss";
import successIcon from "../../assets/notificationsIcons/successIcon.svg";
import closeIcon from "../../assets/notificationsIcons/closeIcon.svg";
import Tabs from 'react-responsive-tabs';

// IMPORTANT you need to include the default styles
import 'react-responsive-tabs/styles.css';

const presidents = [
  { name: 'My Books', biography: '...' },
  { name: 'My Subscriptions', biography: '...' },
  { name: 'My Media', biography: '...' },
];

function getTabs() {
  return presidents.map((president, index) => ({
    title: president.name,
    getContent: () => president.biography,
    /* Optional parameters */
    key: index,
    tabClassName: 'tab',
    panelClassName: 'panel',
  }));
}


const Notifications = function () {




  return (
    <div>
        <Tabs items={getTabs()} />
    </div>
  )
}

export default Notifications;

