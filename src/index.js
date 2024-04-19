import React from "react";
import ReactDOM from "react-dom/client";
import Post from "./Post";
import reportWebVitals from "./reportWebVitals";
import { CssBaseline, Container } from "@mui/material";

const postComments = [
  {
    name: "Dominic Toretto",
    date: "01/01/2020",
    body: "Family!"
  },
  {
    name: "John Doe",
    date: "01/02/2020",
    body: "Yolo!"
  },
  {
    name: "Sheldon Cooper",
    date: "01/03/2020",
    body: "Baziingaa!"
  }
];

const authorsList = [
  {
    name: "Dominic Toretto",
    social: "@dom_family",
  },
  {
    name: "Carl Sagan",
    social: "@carl_space",
  },
];

const post = {
  title: "Spaceships are Awesome",
  authors: authorsList,
  body: "Spaceships go zooom!",
  comments: postComments
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <CssBaseline />
    <Container fixed>
      <Post
        title={post.title}
        authors={post.authors}
        body={post.body}
        comments={post.comments}
      />
    </Container>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
