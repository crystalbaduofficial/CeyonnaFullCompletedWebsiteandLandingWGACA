/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useRef, useState } from "react";
import useInterval from "@use-it/interval";
import Spline from "@splinetool/react-spline";
import "./index.css";

// Constants
const VALID_CHARS = `01`;
const STREAM_MUTATION_ODDS = 0.02;

const MIN_STREAM_SIZE = 15;
const MAX_STREAM_SIZE = 50;

const MIN_INTERVAL_DELAY = 30;
const MAX_INTERVAL_DELAY = 200;

const MIN_DELAY_BETWEEN_STREAMS = 0;
const MAX_DELAY_BETWEEN_STREAMS = 60;

const getRandInRange = (min, max) =>
  Math.floor(Math.random() * (max - min)) + min;

const getRandChar = () =>
  VALID_CHARS.charAt(Math.floor(Math.random() * VALID_CHARS.length));

const getRandStream = () =>
  new Array(getRandInRange(MIN_STREAM_SIZE, MAX_STREAM_SIZE))
    .fill()
    .map(() => getRandChar());

const getMutatedStream = (stream) => {
  const newStream = [];
  for (let i = 1; i < stream.length; i++) {
    if (Math.random() < STREAM_MUTATION_ODDS) {
      newStream.push(getRandChar());
    } else {
      newStream.push(stream[i]);
    }
  }
  newStream.push(getRandChar());
  return newStream;
};

const RainStream = ({ height, color, additionalStyle }) => {
  const [stream, setStream] = useState(getRandStream());
  const [topPadding, setTopPadding] = useState(stream.length * -50);
  const [intervalDelay, setIntervalDelay] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setIntervalDelay(getRandInRange(MIN_INTERVAL_DELAY, MAX_INTERVAL_DELAY));
    }, getRandInRange(MIN_DELAY_BETWEEN_STREAMS, MAX_DELAY_BETWEEN_STREAMS));
  }, []);

  useInterval(() => {
    if (!height) return;

    if (!intervalDelay) return;

    if (topPadding > height) {
      setStream([]);
      const newStream = getRandStream();
      setStream(newStream);
      setTopPadding(newStream.length * -44);
      setIntervalDelay(null);
      setTimeout(
        () =>
          setIntervalDelay(
            getRandInRange(MIN_INTERVAL_DELAY, MAX_INTERVAL_DELAY)
          ),
        getRandInRange(MIN_DELAY_BETWEEN_STREAMS, MAX_DELAY_BETWEEN_STREAMS)
      );
    } else {
      setTopPadding(topPadding + 44);
    }
    setStream(getMutatedStream);
  }, intervalDelay);

  return (
    <div
      style={{
        fontFamily: "matrixFont",
        color: color,
        writingMode: "vertical-rl",
        textOrientation: "upright",
        userSelect: "none",
        whiteSpace: "nowrap",
        marginTop: topPadding,
        marginLeft: 0,
        marginRight: -15,
        fontSize: 50,
        ...additionalStyle,
      }}
    >
      {stream.map((char, index) => (
        <a
          key={index}
          style={{
            marginTop: -12,
            opacity: index < 6 ? 0.1 + index * 0.15 : 1,
            color: index === stream.length - 1 ? "#fff" : undefined,
            textShadow:
              index === stream.length - 1
                ? "0px 0px 20px rgba(255, 255, 255, 1)"
                : undefined,
          }}
        >
          {char}
        </a>
      ))}
    </div>
  );
};

const MatrixRain = () => {
  const containerRef = useRef(null);
  const [containerSize, setContainerSize] = useState(null);

  useEffect(() => {
    const boundingClientRect = containerRef.current.getBoundingClientRect();
    setContainerSize({
      width: boundingClientRect.width,
      height: boundingClientRect.height,
    });
  }, []);

  const streamCount = containerSize ? Math.floor(containerSize.width / 26) : 0;

  return (
    <div
      style={{
        background: "black",
        position: "fixed",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
      ref={containerRef}
    >
      {/* Bright layer */}
      <div
        style={{
          position: "fixed",
		  top: 0,
		  left: 0,
		  bottom: 0,
		  right: 0,
		  overflow: "hidden",
		  display: "flex",
		  flexDirection: "row",
		  justifyContent: "center",
          zIndex: 3, // Highest z-index
          opacity: 1, // Fully visible
        }}
      >
        {new Array(streamCount).fill().map((_, i) => (
          <RainStream
            key={`bright-${i}`}
            height={containerSize?.height}
            color="rgba(106, 0, 255, 0.78)" // Bright purple
            additionalStyle={{
              textShadow: "0px 0px 10px rgba(120, 0, 255, 0.8)",
            }}
          />
        ))}
      </div>

      {/* Dim layer */}
      {new Array(streamCount).fill().map((_, i) => (
        <RainStream
          key={`dim-${i}`}
          height={containerSize?.height}
          color="rgba(78, 87, 253, 0.6)" // Dimmer purple
          additionalStyle={{
            textShadow: "0px 0px 6px rgba(40, 9, 237, 0.6)",
          }}
        />
      ))}

      {/* Even dimmer layer */}
      {new Array(streamCount).fill().map((_, i) => (
        <RainStream
          key={`dimmer-${i}`}
          height={containerSize?.height}
          color="rgba(50, 50, 150, 0.4)" // Even dimmer purple
          additionalStyle={{
            textShadow: "0px 0px 4px rgba(30, 30, 120, 0.4)",
          }}
        />
      ))}
		 {/* Spline Brain Animation */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 4, // Higher than rain layers
          pointerEvents: "none", // Makes it non-interactive
        }}
      >
        <Spline
          scene="https://prod.spline.design/wmyROkwOiURm1npG/scene.splinecode"
          style={{
            width: "1000px", // Adjust as needed
            height: "1000px"
          }}
        />
      </div>
    </div>
  );
};

export default MatrixRain;
