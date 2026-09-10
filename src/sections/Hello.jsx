const Hello = () => {
  return (
    <div className="w-full h-fit mb-section-gap flex flex-col justify-center items-center">
      <div className="flex flex-col font-display text-center ">
        {/* as h1 is a block element and we only have to center it horizontally - text-center */}
        <h1 className="text-display-lg">Hello, I'm Nazifa</h1>
        <h1 className="text-display-lg">A Front-End Engineer</h1>
      </div>

      <h4 className="text-body-lg font-body mt-6 w-[672px] text-center ">
        I specialize in contemporary, user-friendly web designs and digital
        solutions. <br /> Focusing on brand identity, advertising, and intuitive
        interfaces, I aim to assist you in constructing the brand of your
        fantasies.
      </h4>
    </div>
  );
};

export default Hello;
