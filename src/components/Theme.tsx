import useTheme from '../theme/useTheme';

const ThemeComponent = () => {
     const {toggleTheme} = useTheme();
     return (
          <div>
               <button onClick={toggleTheme}>TOGGLE</button>
          </div>
     );
};

export default ThemeComponent;