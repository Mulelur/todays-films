import * as React from 'react';
import { toast } from 'react-toastify';
import { Post, Update } from '../../services/service';

import './Form.scss';

// TODO set up Notifications
// TODO set up Logs

const notify = () =>
  toast('Movie Updated', {
    position: 'top-left',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined
  });

const Form = () => {
  const [firstName, setFirstName] = React.useState('');
  const [surname, setSurname] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phoneNumber, setPhoneNumber] = React.useState('');
  const [Movie, setMovie] = React.useState('');

  const TRELLO_API_KEY = process.env.REACT_APP_TRELLO_API_KEY;
  const TRELLO_API_TOKEN = process.env.REACT_APP_TRELLO_API_TOKEN;
  const TRELLO_LIST_ID = process.env.REACT_APP_TRELLO_API_LIST_ID;

  const TRELLO_CARD_ID = process.env.REACT_APP_TRELLO_API_CARD_ID;
  const [cardId, setCardId] = React.useState(TRELLO_CARD_ID);

  const TRELLO_FIRST_NAME_ID =
    process.env.REACT_APP_TRELLO_API_FIRST_NAME_CUSTOMFIELD_ID;
  const TRELLO_SURNAME_ID =
    process.env.REACT_APP_TRELLO_API_SURNAME_CUSTOMFIELD_ID;
  const TRELLO_EMAIL_ID = process.env.REACT_APP_TRELLO_API_EMAIL_CUSTOMFIELD_ID;
  const TRELLO_PHONE_NUMBER_ID =
    process.env.REACT_APP_TRELLO_API_PHONE_NUMBER_CUSTOMFIELD_ID;
  const TRELLO_MOVIE_ID = process.env.REACT_APP_TRELLO_API_MOVIE_CUSTOMFIELD_ID;

  React.useEffect(() => {
    // CHeck  CardID
    if (!TRELLO_CARD_ID) {
      // Create a Card
      Post(
        `https://api.trello.com/1/cards?key=${TRELLO_API_KEY}&token=${TRELLO_API_TOKEN}&idList=${TRELLO_LIST_ID}&desc=test&name=Rotonda-Mulelu`
      )
        .then((response) => {
          // eslint-disable-next-line no-console
          console.log(response);
          setCardId(response.data.id);
        })
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.log(error);
        });
    }
  }, []);

  const handelSubmit = async () => {
    // Update First Name
    await Update(
      `https://api.trello.com/1/card/${cardId}/customField/${TRELLO_FIRST_NAME_ID}/item`,
      {
        value: {
          text: firstName
        },
        key: TRELLO_API_KEY,
        token: TRELLO_API_TOKEN
      }
    )
      .then((response) => {
        // eslint-disable-next-line no-console
        console.log(response);
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error);
      });
    // Update Last Name
    await Update(
      `https://api.trello.com/1/card/${cardId}/customField/${TRELLO_SURNAME_ID}/item`,
      {
        value: {
          text: surname
        },
        key: TRELLO_API_KEY,
        token: TRELLO_API_TOKEN
      }
    )
      .then((response) => {
        // eslint-disable-next-line no-console
        console.log(response);
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error);
      });
    // Update Email
    await Update(
      `https://api.trello.com/1/card/${cardId}/customField/${TRELLO_EMAIL_ID}/item`,
      {
        value: {
          text: email
        },
        key: TRELLO_API_KEY,
        token: TRELLO_API_TOKEN
      }
    )
      .then((response) => {
        // eslint-disable-next-line no-console
        console.log(response);
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error);
      });

    // Update Phone Number

    await Update(
      `https://api.trello.com/1/card/${cardId}/customField/${TRELLO_PHONE_NUMBER_ID}/item`,
      {
        value: {
          text: phoneNumber
        },
        key: TRELLO_API_KEY,
        token: TRELLO_API_TOKEN
      }
    )
      .then((response) => {
        // eslint-disable-next-line no-console
        console.log(response);
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error);
      });

    // Update Movie

    await Update(
      `https://api.trello.com/1/card/${cardId}/customField/${TRELLO_MOVIE_ID}/item`,
      {
        value: {
          text: Movie
        },
        key: TRELLO_API_KEY,
        token: TRELLO_API_TOKEN
      }
    )
      .then((response) => {
        notify();
        // eslint-disable-next-line no-console
        console.log(response);
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error);
      });
  };

  return (
    <form className="form">
      <div className="form__group">
        <input
          type="text"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setFirstName(event.target.value)
          }
          placeholder="first name *"
          value={firstName}
          className="form__input"
          required
        />
        <input
          type="text"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setSurname(event.target.value)
          }
          placeholder="surname *"
          value={surname}
          className="form__input"
          required
        />
        <input
          type="email"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(event.target.value)
          }
          placeholder="email *"
          value={email}
          className="form__input"
          required
        />
        <input
          type="number"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setPhoneNumber(event.target.value)
          }
          placeholder="phone number *"
          value={phoneNumber}
          className="form__input"
          required
        />
        <input
          type="text"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setMovie(event.target.value)
          }
          placeholder="movie *"
          value={Movie}
          className="form__input"
          required
        />
      </div>
      <div className="form__group">
        <button
          onClick={handelSubmit}
          className="form__input form__input-submit"
          type="button"
        >
          Get Film
        </button>
      </div>
    </form>
  );
};

export default Form;
