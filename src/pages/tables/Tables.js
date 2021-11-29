import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  Col,
  Row,
  Table,
  Pagination,
  PaginationItem,
  PaginationLink,
  ButtonDropdown,
  Dropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem,
  Label,
  Badge,
} from "reactstrap";
import Widget from "../../components/Widget/Widget.js";
import TaskContainer from "./components/TaskContainer/TaskContainer.js";

// import BootstrapTable from "react-bootstrap-table-next";
// import paginationFactory from 'react-bootstrap-table2-paginator';
// import MUIDataTable from "mui-datatables";

import cloudIcon from "../../assets/tables/cloudIcon.svg";
import funnelIcon from "../../assets/tables/funnelIcon.svg";
import optionsIcon from "../../assets/tables/optionsIcon.svg";
import printerIcon from "../../assets/tables/printerIcon.svg";
import searchIcon from "../../assets/tables/searchIcon.svg";
import moreIcon from "../../assets/tables/moreIcon.svg";

import s from "./Tables.module.scss";
import mock from "./mock.js";
const axios = require('axios');
const Tables = function () {

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


  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [firstTable] = useState(mock.secondTable);
  const [secondTable] = useState(mock.secondTable);
  const [transactions, setTransactions] = useState(mock.transactionsWidget);
  const [tasks, setTasks] = useState(mock.tasksWidget);
  const [firstTableCurrentPage, setFirstTableCurrentPage] = useState(0);
  const [secondTableCurrentPage, setSecondTableCurrentPage] = useState(0);
  const [tableDropdownOpen, setTableMenuOpen] = useState(false);

  const pageSize = 4;
  const firstTablePagesCount = Math.ceil(booksList.length / pageSize);
  const secondTablePagesCount = Math.ceil(secondTable.length / pageSize);

  const setFirstTablePage = (e, index) => {
    e.preventDefault();
    setFirstTableCurrentPage(index);
  }

  const setSecondTablePage = (e, index) => {
    e.preventDefault();
    setSecondTableCurrentPage(index);
  }

  const toggle = () => {
    setDropdownOpen(!dropdownOpen);
  }

  const transactionMenuOpen = (id) => {
    setTransactions(
      transactions.map( transaction => {
        if (transaction.id === id) {
          transaction.dropdownOpen = !transaction.dropdownOpen;
        }
        return transaction;
      })
    )
  }

  const tableMenuOpen = () => {
    setTableMenuOpen(!tableDropdownOpen);
  }

  const toggleTask = (id) => {
    setTasks(
      tasks.map( task => {
        if (task.id === id) {
          task.completed = !task.completed;
        }
        return task;
      })
    )
  }

  return (
    <div>
      <Row>
        <Col>
          <Row className="mb-4">
            <Col>
              <Widget>
                <div className={s.tableTitle}>
                  <div className="headline-2">Books</div>
                  <div className="d-flex">
                    <a ><img src={searchIcon} alt="Search"/></a>
                    <a ><img className="d-none d-sm-block" src={cloudIcon} alt="Cloud" /></a>
                    <a ><img src={printerIcon} alt="Printer" /></a>
                    <a ><img className="d-none d-sm-block" src={optionsIcon} alt="Options" /></a>
                    <a ><img src={funnelIcon} alt="Funnel" /></a>
                  </div>
                </div>
                <div className="widget-table-overflow">
                  <Table className={`table-striped table-borderless table-hover ${s.statesTable}`} responsive>
                    <thead>
                    <tr>
                      <th className={s.checkboxCol}>
                        <div className="checkbox checkbox-primary">
                          <input
                            className="styled"
                            id="checkbox100"
                            type="checkbox"
                          />
                          <label for="checkbox100"/>
                        </div>
                      </th>
                      <th className="w-25">Name</th>
                      <th className="w-25">Price</th>
                      
                    </tr>
                    </thead>
                    <tbody>
                    {booksList
                      .slice(
                        firstTableCurrentPage * pageSize,
                        (firstTableCurrentPage + 1) * pageSize
                      )
                      .map(item => (
                        <tr key={uuidv4()}>
                          <td>
                            <div className="checkbox checkbox-primary">
                              <input
                                id={item.id}
                                className="styled"
                                type="checkbox"
                              />
                              <Label for={item.id} />
                            </div>
                          </td>
                          <td className="d-flex align-items-center"><img className={s.image} src={item.image} alt="Books"/><span className="ml-3">{item.title}</span></td>
                          <td>{item.price}</td>
                          
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                  <Pagination className="pagination-borderless" aria-label="Page navigation example">
                    <PaginationItem disabled={firstTableCurrentPage <= 0}>
                      <PaginationLink
                        onClick={e => setFirstTablePage(e, firstTableCurrentPage - 1)}
                        previous
                        href="#top"
                      />
                    </PaginationItem>
                    {[...Array(firstTablePagesCount)].map((page, i) =>
                      <PaginationItem active={i === firstTableCurrentPage} key={i}>
                        <PaginationLink onClick={e => setFirstTablePage(e, i)} href="#top">
                          {i + 1}
                        </PaginationLink>
                      </PaginationItem>
                    )}
                    <PaginationItem disabled={firstTableCurrentPage >= firstTablePagesCount - 1}>
                      <PaginationLink
                        onClick={e => setFirstTablePage(e, firstTableCurrentPage + 1)}
                        next
                        href="#top"
                      />
                    </PaginationItem>
                  </Pagination>
                </div>
              </Widget>
            </Col>
          </Row>
          
        </Col>
      </Row>
    </div>
  )
}

export default Tables;
