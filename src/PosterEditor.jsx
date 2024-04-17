import React, { useEffect, useRef, useState, useCallback } from 'react';
import { fabric } from 'fabric';

const initialPosterData = {
  textObjects: [
    {
      text: 'Hello, World!',
      left: 100,
      top: 100,
      color: 'black',
      fontSize: 20,
      fontWeight: 'normal',
      fontFamily: 'Arial',
    },
    // Add more text objects as needed
  ],
};

const PosterEditor = () => {
  const canvasRef = useRef(null);
  const [canvas, setCanvas] = useState(null);

  useEffect(() => {
    const newCanvas = new fabric.Canvas(canvasRef.current);
    setCanvas(newCanvas);
  }, []);

  const updateCanvasWithPosterData = useCallback(() => {
    if (!canvas) return;

    // Clear existing objects from the canvas
    canvas.clear();

    // Loop through the poster data and add text objects to the canvas
    initialPosterData.textObjects.forEach((textObject) => {
      const newText = new fabric.Textbox(textObject.text, {
        left: textObject.left,
        top: textObject.top,
        fill: textObject.color,
        fontSize: textObject.fontSize,
        fontWeight: textObject.fontWeight,
        fontFamily: textObject.fontFamily,
      });
      canvas.add(newText);
    });

    // Render the canvas
    canvas.renderAll();
  }, [canvas]);

  useEffect(() => {
    updateCanvasWithPosterData();
  }, [updateCanvasWithPosterData]);

  return (
    <div>
      <canvas ref={canvasRef} width={800} height={600} />
      {/* Add other UI elements here */}
    </div>
  );
};

export default PosterEditor;
