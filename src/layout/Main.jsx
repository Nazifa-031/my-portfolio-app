import Hello from "../sections/Hello";
import Connect from "../pages/Connect";

const Main = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Hello />
    
      <div className="m-section-gap">
        <Connect/>
      </div>
    </div>
  );
};

export default Main;
