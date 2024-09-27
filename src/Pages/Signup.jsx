import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import image from '../assets/images/logo.svg';
import './Signup.css';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import Checkbox from '@mui/material/Checkbox';

// Styled checkbox components
const BpIcon = styled('span')(({ theme }) => ({
    borderRadius: 3,
    width: 16,
    height: 16,
    backgroundColor: 'rgba(19, 90, 250, 0.1)', // 50% transparency
    border: '1px solid rgba(19, 90, 250, 0.1)', // Grey border
    '.Mui-focusVisible &': {
        outline: '2px auto rgba(19, 90, 250, 0.1)',
        outlineOffset: 2,
    },
    'input:hover ~ &': {
        backgroundColor: 'rgba(19, 90, 250, 0.1)',
    },
}));

const BpCheckedIcon = styled(BpIcon)({
    backgroundColor: 'rgba(19, 90, 250, 0.1)',
    border: '1px solid rgba(19, 90, 250, 0.1)',
    '&::before': {
        display: 'block',
        width: 16,
        height: 16,
        backgroundImage: "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%230000ff'/%3E%3C/svg%3E\")",
        content: '""',
    },
    'input:hover ~ &': {
        backgroundColor: 'rgba(16, 107, 163, 0.5)', // Darker blue on hover
    },
});

// Custom checkbox component
function BpCheckbox(props) {
    return (
        <Checkbox
            sx={{ '&:hover': { bgcolor: 'transparent' } }}
            disableRipple
            color="default"
            checkedIcon={<BpCheckedIcon />}
            icon={<BpIcon />}
            inputProps={{ 'aria-label': 'Checkbox demo' }}
            {...props}
        />
    );
}

const Signup = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [termsAccepted, setTermsAccepted] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [isHovered, setIsHovered] = useState(false); // State for hover effect

    const navigate = useNavigate();

    const handleSignup = () => {
        if (!username || !email || !password) {
            setErrorMessage('Please fill in all fields.');
            return;
        }
        setErrorMessage('');
        console.log('Signing up:', { username, email, password });
        navigate('/login');
    };

    const handleCheckboxChange = (e) => {
        setTermsAccepted(e.target.checked);
    };

    return (
        <section className="userProfileSection">
            <section
                className="contentBoxSection"
                style={{ '--src': `url(/assets/Rectangle 240.png)` }}>
                <div className="contentBox">
                    <div className="flexColumn">
                        <div className="flexRow">
                            <img className="profileImage" src={image} alt="Profile" />
                        </div>

                        <div className="actionButtonsRow">
                            <button className="googleSignUpButton">
                                <FcGoogle className="googleIcon" size={20} />
                                <div className="googleSignUpText">Sign up with Google</div>
                            </button>
                            <button className="githubSignUpButton">
                                <FaGithub className="githubIcon" color="black" size={20} />
                                <div className="githubSignUpText">Sign up with GitHub</div>
                            </button>
                        </div>

                        <Box
                            component="form"
                            sx={{ '& .MuiTextField-root': { m: 1, width: '100%' } }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField
                                className='InputTextField'
                                id="standard-username-input"
                                label="Username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="Enter your username"
                                variant="standard"
                                InputLabelProps={{
                                    sx: {
                                        color: 'gray',
                                        '&.Mui-focused': {
                                            color: 'gray',
                                        },
                                    },
                                }}
                                InputProps={{
                                    sx: {
                                        '&:before': {
                                            borderBottomColor: 'gray',
                                        },
                                        '&:hover:not(.Mui-disabled):before': {
                                            borderBottomColor: 'gray',
                                        },
                                        '&:after': {
                                            borderBottomColor: 'rgb(97, 0, 194)',
                                        },
                                    },
                                }}
                            />
                            <TextField
                                id="standard-email-input"
                                label="Email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                variant="standard"
                                InputLabelProps={{
                                    sx: {
                                        color: 'gray',
                                        '&.Mui-focused': {
                                            color: 'gray',
                                        },
                                    },
                                }}
                                InputProps={{
                                    sx: {
                                        '&:before': {
                                            borderBottomColor: 'gray',
                                        },
                                        '&:hover:not(.Mui-disabled):before': {
                                            borderBottomColor: 'gray',
                                        },
                                        '&:after': {
                                            borderBottomColor: 'rgb(97, 0, 194)',
                                        },
                                    },
                                }}
                            />
                            <TextField
                                id="standard-password-input"
                                label="Password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter your password"
                                variant="standard"
                                autoComplete="current-password"
                                InputLabelProps={{
                                    sx: {
                                        color: 'gray',
                                        '&.Mui-focused': {
                                            color: 'gray',
                                        },
                                    },
                                }}
                                InputProps={{
                                    sx: {
                                        '&:before': {
                                            borderBottomColor: 'gray',
                                        },
                                        '&:hover:not(.Mui-disabled):before': {
                                            borderBottomColor: 'gray',
                                        },
                                        '&:after': {
                                            borderBottomColor: 'rgb(97, 0, 194)',
                                        },
                                    },
                                }}
                            />
                        </Box>

                        {errorMessage && (
                            <div style={{ color: 'red', marginTop: '8px' }}>
                                {errorMessage}
                            </div>
                        )}

                        <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                            <div className="signupButtonRow1" style={{ display: 'flex', alignItems: 'center' }}>
                                <BpCheckbox checked={termsAccepted} onChange={handleCheckboxChange} />
                                <a href='#' style={{ color: 'white', textDecoration: 'none', marginLeft: '8px' }}>I accept the terms & conditions</a>
                            </div>

                            <div className="signupButtonRow2">
                                <button
                                    className="generalSignUpButton"
                                    onClick={handleSignup}
                                    disabled={!termsAccepted}
                                    style={{
                                        backgroundColor: termsAccepted ? (isHovered ? 'rgb(150, 0, 255)' : 'rgb(97, 0, 194)') : 'gray',
                                        cursor: termsAccepted ? 'pointer' : 'not-allowed',
                                    }}
                                    onMouseEnter={() => setIsHovered(true)} // Handle mouse enter
                                    onMouseLeave={() => setIsHovered(false)} // Handle mouse leave
                                >
                                    SIGN UP
                                </button>
                            </div>
                        </div>

                        <div className="infoBox_box">
                            <span className="infoBox">
                                Own an Account? <Link to="/login" className="infoBox_link">Login here</Link>
                            </span>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default Signup;
