import { Fragment, Suspense, useContext, useState } from 'react';
import classes from './style.module.scss';
import { Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async';
import { MainPageAsync } from './pages/MainPage/MainPage.async';

import './styles/index.scss'
import ThemeComponent from './components/Theme';
import useTheme from './theme/useTheme';
import { classNames } from './helpers/classNames';

const App = () => {
const { theme } = useTheme();

return (
          <div className={classNames('app', {}, [theme])}>
               <ThemeComponent />
              <h1 className={classes.abc}>Hello, world</h1> 
              <Link to='/about'>about</Link>
              <Link to='/'>main</Link>
              <Suspense fallback="...loading">
               <Routes>
                    <Route path={'/about'} element={<AboutPageAsync/>} />
                    <Route path={'/'} element={<MainPageAsync/>} />
               </Routes>
              </Suspense>
          </div>
     );
};

export default App;