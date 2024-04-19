import {useState} from "react";
import Comment from "./Comment";
import Author from "./Author";
import { TextField, Button, Grid, Typography } from "@mui/material";

function Post(props) {

  const [body, setBody] = useState(props.body);
  const [contentText, setContentText] = useState(props.body);

  const allAuthors = props.authors.map(author => (
    <Author name={author.name} social={author.social} />
  ));

  const allComments = props.comments.map(comment => (
    <Comment comment={comment} />
  ));

  const onClickBtn = () => {
    return setBody(contentText);
  };

  const onChangeContent= (event) => {
    return setContentText(event.target.value);
  }

  return (
    <div>
      <Typography variant="h1" gutterBottom>{props.title}</Typography>
      <Typography variant="overline" display="block" gutterBottom>
        {allAuthors}
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Typography variant="body1" gutterBottom>{body}</Typography>
        </Grid>
        <Grid item xs={4}>
          <TextField
            label="Edit Post"
            variant="outlined"
            color="secondary"
            multiline
            id="content"
            rows={10}
            onChange={onChangeContent}
            value={contentText}/>
            <br/>
            <br/>
          <Button variant="contained" onClick={onClickBtn}>Post</Button>
        </Grid>
        <Grid xs={12}>
          <hr/>
          <Typography variant="h5" gutterBottom>All Comments:</Typography>
          {allComments}
        </Grid>
      </Grid>
    </div>
  );
}

export default Post;
