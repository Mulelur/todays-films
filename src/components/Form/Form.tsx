import * as React from 'react';
import { Post } from '../../services/service';

const Form = () => {
  const [firstName, setFirstName] = React.useState('');
  const [surname, setSurname] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phoneNumber, setPhoneNumber] = React.useState('');
  const [Movie, setMovie] = React.useState('');
  // eslint-disable-next-line unicorn/consistent-function-scoping
  const handelSubmit = (event: React.FormEvent<HTMLInputElement>) => {
    // eslint-disable-next-line react/destructuring-assignment
    event.preventDefault();
    Post('')
      .then((response) => {
        // eslint-disable-next-line no-console
        console.log(response);
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error);
      });
  };
  return (
    <form onSubmit={() => handelSubmit}>
      <input
        type="text"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setFirstName(event.target.value)
        }
        name="firstName"
        value={firstName}
      />
      <input
        type="text"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setSurname(event.target.value)
        }
        name="surname"
        value={surname}
      />
      <input
        type="email"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setEmail(event.target.value)
        }
        name="email"
        value={email}
      />
      <input
        type="number"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setPhoneNumber(event.target.value)
        }
        name="phoneNumber"
        value={phoneNumber}
      />
      <input
        type="number"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setMovie(event.target.value)
        }
        name="Movie"
        value={Movie}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
