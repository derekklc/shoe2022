export const BezierCoords = (time, BezierPoints) => {
  //   refrence = "https://www.desmos.com/calculator/ebdtbxgbq0";
  const samplePoints = {
    start: { x: 0, y: 0 },
    startDir: { x: 0, y: 20 },
    finish: { x: 20, y: 15 },
    finishDir: { x: 14, y: 4 },
  };
  let points = !!BezierPoints ? BezierPoints : samplePoints;
  const { start, finish, startDir, finishDir } = points;
  const { x: c1, y: v1 } = start;
  const { x: c2, y: v2 } = startDir;
  const { x: c3, y: v3 } = finishDir;
  const { x: c4, y: v4 } = finish;

  return {
    x:
      Math.pow(1 - time, 3) * c1 +
      3 * time * Math.pow(1 - time, 2) * c2 +
      3 * Math.pow(time, 2) * (1 - time) * c3 +
      Math.pow(time, 3) * c4,
    y:
      Math.pow(1 - time, 3) * v1 +
      3 * time * Math.pow(1 - time, 2) * v2 +
      3 * Math.pow(time, 2) * (1 - time) * v3 +
      Math.pow(time, 3) * v4,
  };
};

export const FlyMe = (leaf, startPosition, finishPosition) => {
  //   console.log("startPosition: ", startPosition);
  console.log("finishPosition: ", finishPosition);
  if (!leaf || !leaf[0] || !startPosition) {
    return;
  }
  if (leaf.is(":hidden")) {
    leaf.css({
      left: `${startPosition.x}px`,
      top: `${startPosition.y}px`,
      display: "block",
    });
  }
  window.requestAnimationFrame =
    window.requestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.msRequestAnimationFrame;

  var duration = 0.5; // seconds
  var gridSize = {
    x: 1,
    y: 1,
  }; // pixels
  var start = null;

  function step(timestamp) {
    var progress;
    if (start === null) start = timestamp;

    progress = (timestamp - start) / duration / 1000; // percent

    let BezierPoints;
    let xDiff, yDiff;
    if (finishPosition) {
      xDiff = finishPosition.x - startPosition.x;
      yDiff = startPosition.y - finishPosition.y;
      //   console.log("xDiff: ", xDiff);
      BezierPoints = {
        start: { x: 0, y: 0 },
        startDir: { x: 0, y: 20 },
        finish: {
          x: xDiff,
          y: yDiff,
        },
        finishDir: { x: yDiff, y: yDiff < 3 ? yDiff : yDiff - 3 },
      };
    }

    let { x, y } = BezierCoords(progress, BezierPoints);

    const leftOffset = gridSize.x * x;
    const bottomOffset = gridSize.y * y;
    leaf.css({
      transform: `translate(${leftOffset}px, ${-bottomOffset}px)`,
    });

    // if(progress >= 1) start = null; // reset to start position
    if (progress <= 0.98) {
      requestAnimationFrame(step);
    } else {
      //   leaf.hide();
    }
  }

  requestAnimationFrame(step);
};
