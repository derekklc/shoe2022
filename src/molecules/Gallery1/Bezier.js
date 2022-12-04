export const BezierCoords = (time, BezierPoints) => {
  //   refrence = "https://www.desmos.com/calculator/ebdtbxgbq0";
  //   const samplePoints = {
  //     start: { x: 1.6, y: 1.37 },
  //     startDir: { x: 1.58, y: 8.4 },
  //     finish: { x: 5.12, y: 4.89 },
  //     finishDir: { x: 7.06, y: 6.44 },
  //   };
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

export const FlyMe = (leaf) => {
  if (!leaf || !leaf[0]) {
    return;
  }
  window.requestAnimationFrame =
    window.requestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.msRequestAnimationFrame;

  // var field = document.getElementById("field");
  var ball = leaf[0];

  // var maxX = field.clientWidth - ball.offsetWidth;
  // var maxY = field.clientHeight - ball.offsetHeight;

  let maxX = 200;

  var duration = 0.3; // seconds
  var gridSize = {
    x: 10,
    y: 4,
  }; // pixels
  var start = null;

  function step(timestamp) {
    var progress;
    if (start === null) start = timestamp;

    progress = (timestamp - start) / duration / 1000; // percent

    // let x = (progress * maxX) / gridSize.x; // x = ƒ(t)
    // let y = 2 * Math.sin(x); // y = ƒ(x)
    let { x, y } = BezierCoords(progress);
    // x = x / gridSize.x;
    // y = y / gridSize.y;

    // ball.style.left = Math.min(maxX, gridSize.x * x) + "px";
    // ball.style.bottom = maxY / 2 + gridSize.y * y + "px";
    const leftOffset = Math.min(maxX, gridSize.x * x);
    const bottomOffset = gridSize.y * y;
    leaf.css({
      transform: `translate(${leftOffset}px, ${-bottomOffset}px)`,
    });

    // if(progress >= 1) start = null; // reset to start position
    if (progress <= 0.98) {
      requestAnimationFrame(step);
    }
  }

  requestAnimationFrame(step);
};
