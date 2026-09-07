import './Counter.css';
import { useState } from 'react';

const Counter = () => {
    const [theme, setTheme] = useState('light');
    const [count, setCount] = useState(0);

    const setDarkThemeHandler = () => {
        setTheme('dark');
    };

    const setLightThemeHandler = () => {
        setTheme('light');
    };

    const toggleThemeHandler = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    const incrementHandler = () => {
        setCount(prevCount => prevCount + 1);
    };

    const decrementHandler = () => {
        setCount(prevCount => prevCount - 1);
    };

    const resetHandler = () => {
        setCount(0);
    };
    return (
        <div className={`content ${theme}`}>
            <h1>UseState Component</h1>
            <button onClick={setDarkThemeHandler}>Dark</button>
            <button onClick={setLightThemeHandler}>Light</button>
            <button onClick={toggleThemeHandler}>Toggle Theme</button>

            <h2>{count}</h2>

            <button onClick={incrementHandler}>Increment</button>
            <button onClick={decrementHandler}>Decrement</button>
            <button onClick={resetHandler}>Reset</button>
        </div>
    );
};

export default Counter;