import { useEffect } from "react";
import { GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from "firebase/auth";
import { auth, provider } from "../firebase-config";
import { useNavigate } from "react-router";
import { Button, Card, CardContent, Typography, Box } from '@mui/material';
import { styled } from '@mui/system';

const Background = styled(Box)({
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

function AuthPage() {
  const navigate = useNavigate();
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // You can now use this info and store it in state or context.
        console.log({ user, token });
        // redirect to dashboard
        navigate("/dashboard");
        
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
        console.log({ errorCode, errorMessage, email, credential });
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log("Auth state changed. Current user: ", user);
      if (user) {
        navigate("/dashboard");
      }
    });

    // Cleanup the subscription on unmount
    return () => unsubscribe();
  }, [navigate]);

  return (
    <Background className="bg_login">
      <Card sx={{ minWidth: 275, backgroundColor: 'rgb(255,255,255,0.5)' }}>
        <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <Typography variant="h5" component="div" gutterBottom sx={{fontWeight: 700}}>
            Prospects Management
          </Typography>
          <Button variant="contained" onClick={signInWithGoogle} sx={{ mt: 2 }}>
            Sign in with Google
          </Button>
          <Typography variant="caption" component="div" sx={{marginTop: '20px'}}>
            You need to be on the users list to be able to sign in.
          </Typography>
        </CardContent>
      </Card>
    </Background>
  );
}

export default AuthPage;
