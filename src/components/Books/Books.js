import React, { Component } from 'react';
import axios from "axios";
// import './App.css';
import { Table, Tag, Popconfirm } from 'antd';
import 'antd/dist/antd.css';


class Books extends Component {
  constructor(props) {
    super(props)
    this.state = {
      books: []
    }
  }

  async componentDidMount() {
    const url = "http://localhost:8000/books/book";
    const response = await axios.get(url);
    const a = response.data
    console.log(a);
    this.setState({ books: a })
  }

  handleDelete = key => {
    const dataSource = this.state.books;
    this.setState({
      dataSource: dataSource.filter(item => item._id !== key)
    
    });
    console.log(dataSource)
  };

  render() {
    const columns = [
      {
        title: 'Id',
        dataIndex: '_id',
        key: '_id',
      },
      {
        title: 'Title',
        dataIndex: 'title',
        key: 'title',
      },
      {
        title: 'PublishedDate',
        dataIndex: 'publishedDate',
        key: 'publishedDate',
      },
      {
        title: 'ThumbnailUrl',
        dataIndex: 'thumbnailUrl',
        key: 'thumbnailUrl',
      },
      {
        title: 'ShortDescription',
        dataIndex: 'shortDescription',
        key: 'shortDescription',
      },
      {
        title: 'Authors',
        dataIndex: 'authors',
        key: 'authors',
      },
      {
        title: 'Categories',
        dataIndex: 'categories',
        key: 'categories',
      },
      {
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
      },
      {
        title: 'Action',
        key: 'action',
        render: (text, record) =>
        this.state.books.length >= 1 ? (
            <Popconfirm title="Sure to delete?" onConfirm={() => this.handleDelete(record.key)}>
              <a>Delete</a>
            </Popconfirm>
          ) : null,
       
      }
    ];
    return (
      <Table dataSource={this.state.books} columns={columns} />

    );
  }
}

export default Books;

