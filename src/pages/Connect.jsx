import rightArrow from "../assets/rightArrow.svg";

const Connect = () => {
  return (
    <div className="h-fit p-20 my-section-gap flex flex-col justify-center items-center text-center rounded-lg  bg-surface-container border-outline-variant  ">
      <p className="w-fit px-4 mb-6 label-caps  rounded-full bg-surface-dim  ">LET'S COLLABORATE</p>
      <h1 className="mb-6 text-headline-xl font-display ">Ready to start a project?</h1>
      <p className="mt-6 mb-6 text-body-lg font-body ">
        I'm currently available for freelance work. If you have a project that
        needs some creative injection then that's where I come in.
      </p>
      <button className="flex px-8 py-4 mb-6 w-fit label-caps rounded-full  bg-primary whitespace-nowrap  ">
        <p className="mr-3 text-on-primary text-button-text">Let's Talk</p> 
        <img src={rightArrow} alt="arrow-right" />
      </button>
       <p className=" mt-6 mb-6 text-body-lg font-body ">
        or drop a line at:
      </p>
      <p className="font-body text-button-text m-2">nazifash31@gmail.com</p>
    </div>
  );
};

export default Connect;
