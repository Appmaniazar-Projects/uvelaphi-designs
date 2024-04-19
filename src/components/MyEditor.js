import React, { useState } from 'react';
import { ChromePicker } from 'react-color';

const MyEditor = () => {
  const [text, setText] = useState('');
  const [font, setFont] = useState('Helvetica Neue');
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);
  const [isStrikethrough, setIsStrikethrough] = useState(false);
  const [size, setSize] = useState(11);
  const [textAlign, setTextAlign] = useState('left');
  const [textColor, setTextColor] = useState('#000000');
  const [image, setImage] = useState(null);

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleFontChange = (event) => {
    setFont(event.target.value);
  };

  const toggleBold = () => {
    setIsBold(!isBold);
  };

  const toggleItalic = () => {
    setIsItalic(!isItalic);
  };

  const toggleUnderline = () => {
    setIsUnderline(!isUnderline);
  };

  const toggleStrikethrough = () => {
    setIsStrikethrough(!isStrikethrough);
  };

  const increaseSize = () => {
    setSize(size + 1);
  };

  const decreaseSize = () => {
    setSize(size - 1);
  };

  const handleTextAlign = (align) => {
    setTextAlign(align);
  };

  const handleTextColorChange = (color) => {
    setTextColor(color.hex);
  };

  const handleImageUpload = (event) => {
    setImage(event.target.files[0]);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <div className="w-full max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow">
        <textarea
          className="w-full h-32 p-2 text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-sm"
          value={text}
          onChange={handleTextChange}
          style={{
            fontFamily: font,
            fontWeight: isBold ? 'bold' : 'normal',
            fontStyle: isItalic ? 'italic' : 'normal',
            textDecoration: `${isUnderline ? 'underline' : ''} ${
              isStrikethrough ? 'line-through' : ''
            }`,
            fontSize: `${size}pt`,
            textAlign: textAlign,
            color: textColor,
          }}
        />
        <div className="flex flex-col items-start justify-between mt-4 space-y-4">
          <div className="font-selector flex items-center">
            <label className="text-sm font-medium text-gray-700 mr-2">Font:</label>
            <select
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
              value={font}
              onChange={handleFontChange}
            >
              <option>Helvetica Neue</option>
              <option>Arial</option>
              <option>Times New Roman</option>
              <option>Georgia</option>
              <option>Verdana</option>
              <option>Courier New</option>
            </select>
          </div>
          <div className="formatting-buttons flex space-x-4 ring-gray-400 ring-1 ring-opacity-50">
            <button
              className={`px-2 py-1 text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ${
                isBold ? 'font-bold' : ''
              }`}
              onClick={toggleBold}
            >
              B
            </button>
            <button
              className={`px-2 py-1 text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ${
                isItalic ? 'italic' : ''
              }`}
              onClick={toggleItalic}
            >
              I
            </button>
            <button
              className={`px-2 py-1 text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ${
                isUnderline ? 'underline' : ''
              }`}
              onClick={toggleUnderline}
            >
              U
            </button>
            <button
              className={`px-2 py-1 text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ${
                isStrikethrough ? 'line-through' : ''
              }`}
              onClick={toggleStrikethrough}
            >
              S
            </button>
          </div>
          <div className="size-controls flex items-center space-x-4">
            <button
              className="px-2 py-1 text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50"
              onClick={decreaseSize}
            >
              -
            </button>
            <span className="px-2 text-sm font-medium text-gray-700">{size}pt</span>
            <button
              className="px-2 py-1 text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50"
              onClick={increaseSize}
            >
              +
            </button>
          </div>
          <div className="text-align-buttons flex space-x-4">
            <button
              className={`px-2 py-1 text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ${
                textAlign === 'left' ? 'font-bold' : ''
              }`}
              onClick={() => handleTextAlign('left')}
            >
              =
            </button>
            <button
              className={`px-2 py-1 text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ${
                textAlign === 'center' ? 'font-bold' : ''
              }`}
              onClick={() => handleTextAlign('center')}
            >
              =
            </button>
            <button
              className={`px-2 py-1 text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ${
                textAlign === 'right' ? 'font-bold' : ''
              }`}
              onClick={() => handleTextAlign('right')}
            >
              =
            </button>
          </div>
          <div className="color-picker flex items-center">
            <label className="text-sm font-medium text-gray-700 mr-2">Color:</label>
            <ChromePicker
              color={textColor}
              onChange={handleTextColorChange}
              className="rounded-lg"
            />
          </div>
          <div className="image-upload flex items-center">
            <label className="text-sm font-medium text-gray-700 mr-2">Image:</label>
            <input
              type="file"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
              onChange={handleImageUpload}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyEditor;