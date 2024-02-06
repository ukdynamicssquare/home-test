import React, { useRef, useEffect, useState } from 'react';

const AnimationComponent = () => {
  const canvasRef = useRef(null);
  const animationData = require('/Frame.json'); // Adjust the path accordingly
  const [animationInstance, setAnimationInstance] = useState(null);

  useEffect(() => {
    // Create and configure the canvas context
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.canvas.width = animationData.w;
    ctx.canvas.height = animationData.h;

    // Create a function to draw the animation frame
    const drawFrame = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(animationData.layers[0].ks.o.k, 0, 0); // Adjust this based on your animation structure
      requestAnimationFrame(drawFrame);
    };

    // Start drawing frames
    drawFrame();

    // Set the animation instance to the state
    setAnimationInstance({ canvas, ctx });
  }, [animationData]);

  useEffect(() => {
    // Additional logic for handling play/pause/resume can be added here
    if (animationInstance) {
      // Uncomment the line below to pause the animation initially
      // animationInstance.ctx.clearRect(0, 0, animationInstance.canvas.width, animationInstance.canvas.height);
    }
  }, [animationInstance]);

  return (
    <canvas ref={canvasRef} />
  );
};

export default AnimationComponent;
