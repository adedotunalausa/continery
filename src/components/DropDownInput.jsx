import React, { useState } from "react";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

function DropDownInput() {
    const [reveal, setReveal] = useState(false);

    function DropDown() {
        setReveal(prevValue => {
            if (prevValue === true) {
                return false;
            } else {
                return true;
            }
        });
    }

    return (
        <div>
            <div className="dropdown">
                <button onClick={DropDown} className="dropdown-btn" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <div className="dropdown-elements">
                        Filter by region
                        <ArrowDropDownIcon fontSize="small" />
                    </div>
                </button>

                {reveal ? <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <li className="dropdown-item">
                        Africa
                    </li>
                    <li className="dropdown-item">
                        America
                    </li>
                    <li className="dropdown-item">
                        Asia
                    </li>
                    <li className="dropdown-item">
                        Europe
                    </li>
                    <li className="dropdown-item">
                        Oceania
                    </li>
                </ul> : null}
            </div>
        </div>
    )
}

export default DropDownInput;