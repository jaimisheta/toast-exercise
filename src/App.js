import React, { useCallback, useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import Header from './Header';
import Content from './Content';
import { fetchLikedFormSubmissions, saveLikedFormSubmission } from './service/mockServer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [submission, setSubmissions] = useState([]);
  const [snackbar, setSnackbar] = React.useState(false);
  const [loader, setLoader] = React.useState(true);

  useEffect(() => {
    setLoader(true);
    fetchData()
      .then(result => {
        setSubmissions(result.formSubmissions)
      })
      .catch(error => {
        toast.error("something went wrong with fetching records", {
          position: toast.POSITION.TOP_CENTER
        });
      })
      .finally(() => {
        setLoader(false);
      })
  }, [snackbar])

  const saveItem = useCallback((submissionEntry) => {
    setLoader(true);

    const formSubmission = {
      id: submissionEntry.id,
      data: {
        email: submissionEntry.data.email,
        firstName: submissionEntry.data.firstName,
        lastName: submissionEntry.data.lastName,
        liked: submissionEntry.data.liked,
      },
    };

    saveLikedFormSubmission(formSubmission)
      .then(result => {
        setSnackbar(false);
      })
      .catch(error => {
        toast.error("Something went wrong with saving the record", {
          position: toast.POSITION.TOP_CENTER
        });
      })
      .finally(() => {
        setLoader(false)
      });
  }, []);

  const fetchData = () => {
    return new Promise((resolve, reject) => {
      try {
        fetchLikedFormSubmissions().then((result) => {
          if (result.status === 500) {
            reject(result);
          }
          resolve(result)
        }).catch((error) => {
          reject(error)
        })
      } catch (error) {
        reject(error)
      }
    });
  }

  return (
    <>
      <Header saveItem={(submissionEntry) => saveItem(submissionEntry)} snackbar={snackbar} setSnackbar={setSnackbar} />
      <Container>
        <Content loader={loader} submission={submission} />
      </Container>
      <ToastContainer />
    </>
  );
}

export default App;
