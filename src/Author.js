import Link from '@mui/material/Link';
function Author(props) {
    return (
        <sub>
            Written by {props.name} 
            (<Link href="#">{props.social}</Link>)
            <br/>
        </sub>
    );
}
export default Author;