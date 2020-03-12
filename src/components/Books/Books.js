import React, { Component } from 'react';
import axios from "axios";
// import './App.css';
import { Table, Tag } from 'antd';
import 'antd/dist/antd.css';


class Books extends Component {
  constructor (props) {
    super(props)
    this.state = {
      books: []
    }
  }

  async componentDidMount () {
    const url = "http://localhost:5000/books/book";
    const response = await axios.get(url);
    const a = response.data
    console.log(a);
    this.setState({books:a})
   

  }

  render () {
    const columns = [
        {
          title: 'Title',
          dataIndex: 'title',
          key: 'title',
        },
        {
          title: 'Isbn',
          dataIndex: 'isbn',
          key: 'isbn',
        },
      ];
  return (
    <Table dataSource={this.state.books} columns={columns} />

  );
 }
}

export default Books;

