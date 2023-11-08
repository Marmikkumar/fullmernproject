import React, { useEffect ,useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext} from "../first";


const Logout = () => {
  const navigate = useNavigate();
  const {state, dispatch} = useContext(UserContext);

  useEffect(() => {
    const logout = async () => {
      try {
        const response = await fetch('http://localhost:5000/logout', {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          credentials: 'include'
        });

        if (response.status === 200) {
          dispatch({type: "USER" , payload: false} )
          navigate('/login', { replace: true });
        } else {
          const error = new Error('Logout failed');
          throw error;
        }
      } catch (error) {
        console.error('Logout error:', error);
        // Handle the error, such as showing a message to the user
      }
    };

    logout(); // Call the logout function inside useEffect
  }, [navigate]);

  return (
    <>
      <h1>Logout Page</h1>
    </>
  );
};

export default Logout;
