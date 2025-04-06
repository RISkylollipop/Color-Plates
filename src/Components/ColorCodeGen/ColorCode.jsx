import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../../src/App.css';
import styles from './ColorCode.module.css'




const ColorCode = () => {
    const [colortype, setColortype] = useState('HEX');
    const [color, setColor] = useState('#5B06F8');

    function HandleRandomUtility(length) {
        // Random Number Generator Code According to lenght inserted
        return Math.floor(Math.random() * length);
    }

    function HandleHEXColorChange() {
        // To Achieve the random Number to be inserted in hex code
        //#11e061
        const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
        let hexColor = '#';
        for (let i = 0; i < 6; i++) {
            hexColor += hex[HandleRandomUtility(hex.length)];
        }
        setColor(hexColor);
    }

    function HandleHSLColorChange() {
        const h = HandleRandomUtility(360); // Changed to 360 for HSL hue
        const s = HandleRandomUtility(100);
        const l = HandleRandomUtility(100);

        let hslColor = `hsl(${h}, ${s}%, ${l}%)`;
        setColor(hslColor);
    }

    function HandleRGBColorChange() {
        const r = HandleRandomUtility(256);
        const g = HandleRandomUtility(256);
        const b = HandleRandomUtility(256);

        let rgbColor = `rgb(${r}, ${g}, ${b})`;
        setColor(rgbColor);
    }

    // This effect runs when the color type is changed.
    useEffect(() => {

        if (colortype === 'HEX') { HandleHEXColorChange() }
        else if (colortype === 'RGB') { HandleRGBColorChange() }
        else { HandleHSLColorChange() };

    }, [colortype]);


    // Function to copy the text to clipboard
    const copyToClipboard = (text) => {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        toast.success(
            <span className={styles.toastContainer}>{color} <br /> <br /> Copied to ClipBoard</span>
          );

    };

    return (

        <div className={styles.main}>
            <div className={styles.ColorDivContainer} style={{ background: color }}>

                <h3 className={styles.colorHeading} style={{ textAlign: "center" }}>CirCus Color Code</h3>
                <div className={styles.btnContainer}>
                    <button onClick={() => setColortype('HEX')}>HEX CODE</button>
                    <button onClick={() => setColortype('RGB')}>RGB CODE</button>
                    <button onClick={() => setColortype('HSL')}>HSL CODE</button>

                    <button
                        onClick={() => {
                            if (colortype === 'HEX') HandleHEXColorChange();
                            else if (colortype === 'HSL') HandleHSLColorChange();
                            else if (colortype === 'RGB') HandleRGBColorChange();
                        }}
                    >
                        Random Generator
                    </button>

                </div>


                <div className={styles.items}>

                    <h3>{colortype}</h3>
                    <h3>{color}</h3>

                    <ToastContainer
                        position="bottom-center"
                        toastClassName="custom-toast"
                        closeOnClick
                        pauseOnHover
                        draggable 
                        className={styles.toastContainer}/>


                    {/* Button to copy color to clipboard */}
                    <button onClick={() => copyToClipboard(color)}>
                        Copy Color
                    </button>


                </div>
            </div>
        </div>
    );
};

export default ColorCode;
