import React, {useEffect, useState} from "react";
import { themes } from "../../constants/theme.js";
import applyTheme from "../../helpers/applyTheme.js";
import "./index.css";

const ThemeSwitcher = () => {
    const [selectedTheme, setSelectedTheme] = useState(
        localStorage.getItem("selectedTheme") || "default"
    );

    useEffect(() => {
        applyTheme(selectedTheme);
    }, [selectedTheme]);

    return (
        <>
            <div className="themeColor-title">
                Set Theme Color:
            </div>
            <select
                value={selectedTheme}
                onChange={(e) => {
                    setSelectedTheme(e.target.value);
                }}
            >
                <option value="default">Default Theme</option>
                <option value="earthy_1">Earthy One</option>
                <option value="earthy_2">Earthy Two</option>
                <option value="earthy_3">Earthy Three</option>
                <option value="earthy_4">Earthy Four</option>
                <option value="earthy_5">Earthy Five</option>
            </select>
        </>
        
    );

}

export default ThemeSwitcher;