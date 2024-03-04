import { css, useTheme } from "@emotion/react"
import { toggleTheme } from "../redux/themeSlice"
import { useDispatch, useSelector } from "react-redux"

export default function ThemeToggle() {
  const theme = useTheme()
  const dispatch = useDispatch()

  const toggleStyles = css`
    //altered from https://www.w3schools.com/howto/howto_css_switch.asp
    /* The switch - the box around the slider */
    .switch {
      position: relative;
      display: inline-block;
      cursor: pointer;
      width: 60px;
      height: 34px;
    }

    /* Hide default HTML checkbox */
    .switch input {
      opacity: 0;
      width: 0;
      height: 0;
    }

    /* The slider */
    .slider {
      position: absolute;
      border-radius: 34px;
      box-shadow: 0px 5px 15px "#000000";
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #fffefe;
      -webkit-transition: 0.4s;
      transition: 0.4s;
    }

    .slider:before {
      position: absolute;
      border-radius: 50%;
      content: "";
      height: 26px;
      width: 26px;
      left: 4px;
      bottom: 4px;
      background-color: ${theme.purple};
      -webkit-transition: 0.4s;
      transition: 0.4s;
    }

    input:checked + .slider {
      background-color: ${theme.creamGrey};
    }

    input:focus + .slider {
      box-shadow: 0px 5px 15px "#000000";
    }

    input:checked + .slider:before {
      -webkit-transform: translateX(26px);
      -ms-transform: translateX(26px);
      transform: translateX(26px);
    }
  `

  /*

*/
  return (
    <div css={toggleStyles} className="themeToggle">
      <label className="switch">
        <input type="checkbox" onClick={() => dispatch(toggleTheme())} />
        <span className="slider"></span>
      </label>
    </div>
  )
}
