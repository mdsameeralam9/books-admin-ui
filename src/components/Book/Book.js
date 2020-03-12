import React, { Component } from "react";
import axios from "axios";
import BookForm from "./BookForm";

export class Book extends Component {

    state = {
        profileImage: ''
    }


    onChangeHandler = event => {
        this.setState({ profileImage: event.target.files[0] })

    }
    onSubmitHandler = async values => {

        const {
            title,
            isbn,
            pageCount,
            publishedDate,
            shortDescription,
            longDescription,
            status,
            authors,
            categories,
            price,
            thumbnailUrl,
          } = values
          const data = new FormData();
          data.append('title', title)
          data.append('isbn', isbn)
          data.append('pageCount', pageCount)
          data.append('publishedDate', publishedDate)
          data.append('shortDescription', shortDescription)
          data.append('longDescription', longDescription)
          data.append('status', status)
          data.append('authors', authors)
          data.append('categories', categories)
          data.append('price', price)
          data.append('profileImage', this.state.profileImage)
        const url = "http://localhost:5000/books/add-book";
        const headers = { headers: { Authorization: `Bearer ${localStorage.getItem("access_token")}` } };
        const response = await axios.post(url, data, headers);

        // if (access_token) {
        //     localStorage.setItem("access_token", access_token);
        //     this.props.history.push("/home");
        // }
    };

    render() {
        
        return <BookForm onSubmitHandler={this.onSubmitHandler} onChangeHandler={this.onChangeHandler} />;
    }
}
