import { FormControlLabel, Switch } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useEffect } from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';
import { sendPersonalData } from '../redux/actions';
import OpenFileBtn from './OpenFileBtn';

const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(16px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: '#00b95d',
        opacity: 1,
        border: 0,
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#33cf4d',
      border: '6px solid #fff',
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color:
        theme.palette.mode === 'light'
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: 0.3,
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 22,
    height: 22,
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: '#157fff',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
  },
}));

function Header({ dispatch, language }) {
  const [navbar, setNavbar] = useState(false);

  const scrollInitial =
    'w-100 flex justify-end px-10 py-4 sticky top-0 z-50 transition-all duration-300 ease-in-out';

  const scrollBg = `w-100 flex justify-end px-10 py-4 sticky top-0 z-50
  transition duration-500 ease-in-out
  outline outline-sky-500/60 outline-bottom outline-1 backdrop-blur-sm bg-sky-600/20
  bg-gradient-to-r from-sky-600/70`;

  useEffect(() => {
    const headerObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setNavbar(!entry.isIntersecting);
      });
    });
    const profilePictureElement = document.getElementById('profile-div');
    headerObserver.observe(profilePictureElement);
  }, [navbar]);

  const onChangeHandler = () => {
    const newLang = language === 'en' ? 'pt-br' : 'en';
    dispatch(sendPersonalData(newLang));
  };

  return (
    <header className={`${navbar ? scrollBg : scrollInitial} flex justify-between`} id="header">
      <OpenFileBtn file="/assets/Resume-Raphael_Cirelli_Garrido.pdf" />
      <div>
        <FormControlLabel
          control={
            <FormControlLabel
              control={<IOSSwitch sx={{ m: 1 }} />}
              label="🇺🇸"
              labelPlacement="start"
              sx={{ mr: 0 }}
              value={language}
              onChange={onChangeHandler}
            />
          }
          label="🇧🇷"
          labelPlacement="end"
        />
      </div>
    </header>
  );
}

const mapStateToProps = (state) => ({
  language: state.language,
});

export default connect(mapStateToProps)(Header);
