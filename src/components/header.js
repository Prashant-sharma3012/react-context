import React, { useContext } from 'react';
import { ThemeContext } from '../context/theme-context';

const componentStyles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '1rem',
  },
  banner: {
    
  },
  colors: {
    backgroundColor: 'grey',
    color: 'white'
  },
  toggleTheme: {

  },
  buttonContainer:{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  }
}

const Header = (props) => {

  const theme = useContext(ThemeContext);

  return (
    <div
      style={{
        ...componentStyles.colors,
        ...componentStyles.container,
        backgroundColor: theme.pallette.background,
        color: theme.pallette.foreground
      }}
    >
      <div style={componentStyles.banner}>
        Header
      </div>
      <div style={componentStyles.buttonContainer}>
        <button style={componentStyles.toggleTheme} onClick={props.toggleTheme}>{theme.isDark ? 'Day' : 'Night'}</button>
      </div>
    </div>
  )
}

export default Header;