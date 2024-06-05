import analogClock from "../assets/portfolio/analog-clock.jpg";
import brickGame from "../assets/portfolio/brick-game.jpg";
import clickAndDragTheBallInCanvas from "../assets/portfolio/click-and-drag-the-ball-in-canvas.jpg";
import debouncingAndThrottling from "../assets/portfolio/debouncing-and-throttling.jpg";
import countdownTimer from "../assets/portfolio/countdown-timer.jpg";
import stopWatch from "../assets/portfolio/stop-watch.jpg";
import digitalClock from "../assets/portfolio/digital-clock.jpg";
import codewellChallengesCurrentStatus from "../assets/portfolio/codewell-challenges-current status.jpg";
import photoViewer from "../assets/portfolio/photo-viewer.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: analogClock,
    },
    {
      id: 2,
      src: brickGame,
    },
    {
      id: 3,
      src: clickAndDragTheBallInCanvas,
    },
    {
      id: 4,
      src: debouncingAndThrottling,
    },
    {
      id: 5,
      src: countdownTimer,
    },
    {
      id: 6,
      src: stopWatch,
    },
  ];
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 text-white w-full md:h-screen"
    >
      <div className="flex flex-col justify-center max-w-screen-lg p-4 mx-auto w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md hover:scale-105 duration-200"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                <button className="w-1/2 px-6 m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
