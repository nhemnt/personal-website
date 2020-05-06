import React, { useState, useEffect, useRef } from "react";
import { themeColorStorageKey, defaultColor } from "../../constants/defaultValues";

const ColorSwitcher = () => {
  let toggle,
    getContainer,
    handleDocumentClick,
    addEvents,
    removeEvents,
    changeThemeColor,
    themeColor;

  if (typeof window !== 'undefined') {
    themeColor = localStorage.getItem(themeColorStorageKey)
  } else {
    themeColor = defaultColor;
  }

  const colorSwitcherRef = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedColor] = useState(themeColor);

  toggle = (e) => {
    e.preventDefault();
    if (!isOpen) {
      addEvents();
    } else {
      removeEvents();
    }

    setIsOpen(!isOpen);
  };

  getContainer = () => {
    return colorSwitcherRef.current;
  };

  handleDocumentClick = (e) => {
    const container = getContainer();
    if (container.contains(e.target) || container === e.target) {
      return;
    }
    toggle(e);
  };

  addEvents = () => {
    const useCapture = true;
    ["click", "touchstart"].forEach((event) =>
      document.addEventListener(event, handleDocumentClick, useCapture)
    );
  };

  removeEvents = () => {
    const useCapture = true;
    ["click", "touchstart"].forEach((event) =>
      document.removeEventListener(event, handleDocumentClick, useCapture)
    );
  };

  changeThemeColor = (e, color) => {
    e.preventDefault();
    localStorage.setItem(themeColorStorageKey, color);
    toggle(e);
    setTimeout(() => {
      window.location.reload();
    }, 500);
  };

  useEffect(() => {
    removeEvents();
  }, []);

  return (
    <div
      ref={colorSwitcherRef}
      className={`theme-colors ${isOpen ? "shown" : ""}`}
    >
      <div className="p-4">
        <p className="text-muted mb-2">Light Theme</p>
        <div className="d-flex flex-row justify-content-between mb-4">
          {["purple", "blue", "green", "orange", "red"].map((color) => (
            <a
              key={`light.${color}`}
              href={`#light.${color}`}
              className={`theme-color theme-color-${color} ${
                selectedColor === `light.${color}` ? "active" : ""
              }`}
              onClick={(e) => changeThemeColor(e, `light.${color}`)}
            >
              <span>`light.${color}`</span>
            </a>
          ))}
        </div>
        <p className="text-muted mb-2">Dark Theme</p>
        <div className="d-flex flex-row justify-content-between">
          {["purple", "blue", "green", "orange", "red"].map((color) => (
            <a
              key={`dark.${color}`}
              href={`#dark.${color}`}
              className={`theme-color theme-color-${color} ${
                selectedColor === `dark.${color}` ? "active" : ""
              }`}
              onClick={(e) => changeThemeColor(e, `dark.${color}`)}
            >
              <span>`dark.${color}`</span>
            </a>
          ))}
        </div>
      </div>

      <a href="#" className="theme-button" onClick={toggle}>
        {" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
          width="64px"
          height="64px"
        >
          <linearGradient
            id="5daftODJb3u22konlfyrca"
            x1="32.337"
            x2="31.642"
            y1="16.5"
            y2="46.397"
            gradientUnits="userSpaceOnUse"
            spreadMethod="reflect"
          >
            <stop offset="0" stop-color="#6dc7ff" />
            <stop offset="1" stop-color="#e6abff" />
          </linearGradient>
          <path
            fill="url(#5daftODJb3u22konlfyrca)"
            fill-rule="evenodd"
            d="M32 26A5 5 0 1 0 32 36A5 5 0 1 0 32 26Z"
            clip-rule="evenodd"
          />
          <linearGradient
            id="5daftODJb3u22konlfyrcb"
            x1="32"
            x2="32"
            y1="3.75"
            y2="59.5"
            gradientUnits="userSpaceOnUse"
            spreadMethod="reflect"
          >
            <stop offset="0" stop-color="#1a6dff" />
            <stop offset="1" stop-color="#c822ff" />
          </linearGradient>
          <path
            fill="url(#5daftODJb3u22konlfyrcb)"
            d="M31.943,58.001c-0.499,0-1.001-0.013-1.506-0.039c-1.654-0.106-2.982-1.313-3.245-2.936 c-0.159-0.984-0.351-2.171-0.51-3.101c-0.092-0.57-0.485-1.024-1.027-1.194c-1.09-0.351-2.137-0.788-3.118-1.3 c-0.507-0.265-1.109-0.222-1.572,0.113c-0.769,0.555-1.75,1.262-2.566,1.843c-1.324,0.955-3.113,0.869-4.345-0.213 c-0.764-0.68-1.512-1.423-2.226-2.214c-1.094-1.244-1.18-3.037-0.218-4.37c0.583-0.808,1.288-1.783,1.832-2.553 c0.338-0.468,0.381-1.067,0.118-1.571c-0.523-1.021-0.955-2.07-1.285-3.125c-0.171-0.545-0.628-0.94-1.192-1.031l-0.211-0.034 c-0.9-0.146-1.991-0.323-2.906-0.478c-1.612-0.26-2.816-1.586-2.921-3.222c-0.06-1.022-0.062-2.076-0.008-3.14 c0.106-1.654,1.313-2.982,2.936-3.245c0.984-0.159,2.171-0.351,3.101-0.51c0.57-0.092,1.024-0.485,1.194-1.027 c0.351-1.09,0.788-2.137,1.3-3.118c0.265-0.506,0.222-1.109-0.113-1.572c-0.555-0.769-1.262-1.75-1.843-2.566 c-0.956-1.324-0.87-3.113,0.213-4.345c0.68-0.764,1.423-1.512,2.214-2.226c1.244-1.094,3.036-1.181,4.37-0.218 c0.808,0.583,1.783,1.288,2.553,1.832c0.469,0.338,1.067,0.383,1.571,0.118c1.021-0.523,2.07-0.955,3.125-1.285 c0.545-0.171,0.94-0.628,1.031-1.192l0.034-0.211c0.146-0.9,0.323-1.991,0.478-2.906c0.26-1.612,1.586-2.816,3.222-2.921 c1.022-0.059,2.077-0.062,3.14-0.008c1.654,0.106,2.982,1.313,3.245,2.936c0,0,0,0,0,0c0.159,0.983,0.351,2.17,0.51,3.1 c0.092,0.57,0.485,1.024,1.027,1.194c1.09,0.351,2.137,0.788,3.118,1.3c0.506,0.265,1.11,0.222,1.572-0.113 c0.769-0.555,1.75-1.262,2.566-1.843c1.323-0.957,3.112-0.871,4.345,0.213c0.764,0.68,1.512,1.423,2.226,2.214 c1.094,1.244,1.18,3.037,0.218,4.37c-0.583,0.808-1.288,1.783-1.832,2.553c-0.338,0.468-0.381,1.067-0.118,1.571 c0.523,1.021,0.955,2.07,1.285,3.125c0.171,0.545,0.628,0.94,1.192,1.031l0.211,0.034c0.9,0.146,1.991,0.323,2.906,0.478 c1.612,0.26,2.816,1.586,2.921,3.222c0.06,1.022,0.062,2.076,0.008,3.14c-0.106,1.654-1.313,2.982-2.936,3.245 c-0.984,0.159-2.171,0.351-3.101,0.51c-0.57,0.092-1.024,0.485-1.194,1.027c-0.351,1.09-0.788,2.137-1.3,3.118 c-0.265,0.506-0.222,1.109,0.113,1.572c0.555,0.769,1.262,1.75,1.843,2.566c0.956,1.324,0.87,3.113-0.213,4.345 c-0.68,0.764-1.423,1.512-2.214,2.226c-1.245,1.093-3.036,1.18-4.37,0.218c-0.808-0.583-1.783-1.288-2.553-1.832 c-0.468-0.337-1.066-0.382-1.571-0.118c-1.021,0.523-2.07,0.955-3.125,1.285c-0.545,0.171-0.94,0.628-1.031,1.192l-0.034,0.211 c-0.146,0.9-0.323,1.991-0.478,2.906c-0.26,1.612-1.586,2.816-3.222,2.921C33.04,57.985,32.495,58.001,31.943,58.001z M21.84,47.258c0.554,0,1.11,0.133,1.625,0.401c0.88,0.46,1.821,0.853,2.797,1.167c1.262,0.396,2.182,1.458,2.395,2.771 c0.159,0.926,0.352,2.121,0.511,3.11c0.112,0.695,0.682,1.213,1.384,1.258c0.979,0.05,1.959,0.047,2.903-0.008 c0.693-0.044,1.26-0.559,1.372-1.251c0.155-0.917,0.331-2.004,0.476-2.899l0.034-0.211c0.213-1.315,1.135-2.381,2.408-2.78 c0.947-0.296,1.89-0.684,2.803-1.152c1.172-0.612,2.575-0.511,3.654,0.267c0.767,0.542,1.748,1.25,2.561,1.837 c0.572,0.411,1.34,0.375,1.868-0.09c0.727-0.657,1.419-1.352,2.047-2.058c0.459-0.522,0.496-1.287,0.085-1.854 c-0.582-0.818-1.286-1.795-1.839-2.56c-0.78-1.081-0.881-2.487-0.263-3.669c0.46-0.88,0.853-1.821,1.167-2.797 c0.396-1.262,1.458-2.182,2.771-2.395c0.926-0.159,2.121-0.352,3.11-0.511c0.695-0.112,1.213-0.682,1.258-1.384 c0.049-0.978,0.047-1.959-0.008-2.903c-0.044-0.693-0.559-1.26-1.251-1.372c-0.917-0.155-2.004-0.331-2.899-0.476l-0.211-0.034 c-1.315-0.213-2.381-1.135-2.78-2.408c-0.296-0.947-0.684-1.89-1.152-2.803c-0.613-1.172-0.512-2.575,0.267-3.654 c0.542-0.767,1.25-1.748,1.837-2.561c0.412-0.571,0.375-1.34-0.09-1.868c-0.657-0.727-1.352-1.419-2.058-2.047 c-0.521-0.458-1.286-0.496-1.854-0.085c-0.818,0.582-1.795,1.286-2.56,1.839c-1.082,0.779-2.488,0.88-3.669,0.263 c-0.88-0.46-1.821-0.853-2.797-1.167c-1.262-0.396-2.182-1.458-2.395-2.771c-0.159-0.926-0.352-2.121-0.511-3.11 c-0.112-0.695-0.682-1.213-1.384-1.258c-0.979-0.049-1.96-0.047-2.903,0.008c-0.693,0.044-1.26,0.559-1.372,1.251 c-0.155,0.917-0.331,2.004-0.476,2.899l-0.034,0.211c-0.213,1.315-1.135,2.381-2.408,2.78c-0.947,0.296-1.89,0.684-2.803,1.152 c-1.172,0.613-2.576,0.512-3.654-0.267c-0.767-0.542-1.748-1.25-2.561-1.837c-0.572-0.412-1.339-0.375-1.868,0.09 c-0.727,0.657-1.419,1.352-2.047,2.058c-0.459,0.522-0.496,1.287-0.085,1.854c0.582,0.818,1.286,1.795,1.839,2.56 c0.78,1.081,0.881,2.487,0.263,3.669c-0.46,0.88-0.853,1.821-1.167,2.797c-0.396,1.262-1.458,2.182-2.771,2.395 c-0.926,0.159-2.121,0.352-3.11,0.511c-0.695,0.112-1.213,0.682-1.258,1.384c-0.049,0.978-0.047,1.959,0.008,2.903 c0.044,0.693,0.559,1.26,1.251,1.372c0.917,0.155,2.004,0.331,2.899,0.476l0.211,0.034c1.315,0.213,2.381,1.135,2.78,2.408 c0.296,0.947,0.684,1.89,1.152,2.803c0.613,1.172,0.512,2.575-0.267,3.654c-0.542,0.767-1.25,1.748-1.837,2.561 c-0.412,0.571-0.375,1.34,0.09,1.868c0.657,0.727,1.352,1.419,2.058,2.047c0.522,0.458,1.287,0.497,1.854,0.085 c0.818-0.582,1.795-1.286,2.56-1.839C20.406,47.481,21.121,47.258,21.84,47.258z"
          />
          <linearGradient
            id="5daftODJb3u22konlfyrcc"
            x1="32"
            x2="32"
            y1="13.917"
            y2="48.258"
            gradientUnits="userSpaceOnUse"
            spreadMethod="reflect"
          >
            <stop offset="0" stop-color="#6dc7ff" />
            <stop offset="1" stop-color="#e6abff" />
          </linearGradient>
          <path
            fill="url(#5daftODJb3u22konlfyrcc)"
            d="M32,48c-9.374,0-17-7.626-17-17s7.626-17,17-17s17,7.626,17,17S41.374,48,32,48z M32,16 c-8.271,0-15,6.729-15,15s6.729,15,15,15s15-6.729,15-15S40.271,16,32,16z"
          />
          <g>
            <linearGradient
              id="5daftODJb3u22konlfyrcd"
              x1="32"
              x2="32"
              y1="19.167"
              y2="43.62"
              gradientUnits="userSpaceOnUse"
              spreadMethod="reflect"
            >
              <stop offset="0" stop-color="#1a6dff" />
              <stop offset="1" stop-color="#c822ff" />
            </linearGradient>
            <path
              fill="url(#5daftODJb3u22konlfyrcd)"
              d="M32,43c-6.617,0-12-5.383-12-12s5.383-12,12-12s12,5.383,12,12S38.617,43,32,43z M32,21 c-5.514,0-10,4.486-10,10s4.486,10,10,10s10-4.486,10-10S37.514,21,32,21z"
            />
          </g>
        </svg>
      </a>
    </div>
  );
  // }
};

export default ColorSwitcher;
