import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import MyPhoto from "../assets/myPhoto.jpg";

const Home = () => {
  return (
    <div
      name="home"
      className="bg-gradient-to-b from-black via-black to-gray-800 w-full h-screen flex justify-center items-center"
    >
      <div className="max-w-screen-lg flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-white text-4xl font-bold">
            I am a Frontend Developer
          </h2>
          <p className="text-gray-400 py-4 max-w-md">
            Self-motivated and hardworking person seeking an opportunity to work
            in a challenging environment to prove my skills and utilize my
            knowledge & intelligence for growth of the organization
          </p>
          <button className="group bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer text-white w-fit flex items-center rounded-md px-6 py-3 my-2">
            Portfolio
            <span className="group-hover:rotate-90 duration-300">
              <MdOutlineKeyboardDoubleArrowRight size={25} className="ml-1" />
            </span>
          </button>
        </div>
        <div>
          <img
            src={MyPhoto}
            alt="my profile"
            className="w-2/3 mx-auto rounded-2xl md:w-2/3"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Home;
