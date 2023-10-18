function loopRand(range, callback) {
  let stopped = false;

  const newF = () => {
    if (stopped) return;
    callback();
    wait(rand(range[0], range[1]), newF);
  };

  newF();

  return () => {
    stopped = true;
  };
}
