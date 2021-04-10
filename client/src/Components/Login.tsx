import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import config from '../config';
import { gql, useMutation, ApolloError } from '@apollo/client';

const LOGIN = gql`
  mutation Login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      id
    }
  }
`;

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

interface ModalProps {
  open?: boolean;
}

export default function LoginModal(props: ModalProps) {
  const classes = useStyles();
  const forceOpen = !!props.open;
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(forceOpen);
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState<ApolloError | null>(null);

  const [login, { data: loginData, loading: loginLoading, error: loginError }] = useMutation(LOGIN,{onError: e=>setError(e)});

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  if(loginData) {
    if(forceOpen){
      window.location.href = "/";
    } else if(open) {
      handleClose();
    }
  }

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="login-modal-title">Login</h2>

      <label>Password:</label><br />
      <input type="text" id="fname" name="username" value={username} onChange={(event) => setUsername(event.target.value)} /><br />
      <label>Password:</label><br />
      <input type="text" id="lname" name="password" value={password} onChange={(event) => setPassword(event.target.value)} /><br /><br />
      <input type="button" value="Submit" onClick={() => {try{setError(null);login({variables: {username,password}})}catch(e){}}} /><br/>
      {error && error.message}
    </div>
  );

  return (
    <div>
      {!forceOpen
        &&
        <button type="button" onClick={handleOpen}>
          Open Modal
        </button>
      }
      <Modal
        open={forceOpen || open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
