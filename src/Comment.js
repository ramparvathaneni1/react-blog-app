import { Paper, Grid } from '@mui/material';
function Comment(props) {
  return (
    <Grid xs={4}>
      <Paper elevation={3} square={false}>
        <p>
          {props.comment.body}
          <br />
          <sub>
            {props.comment.name}, {props.comment.date}
          </sub>
        </p>
      </Paper>
    </Grid>
    
  );
}

export default Comment;
