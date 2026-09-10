

const GlassNav = () => {
  return (
    //mobile screen : flex and hidden , tablet and larger screen : flex and visible
    <div className="hidden sm:flex h-fit bg-outline-variant text-on-surface-variant button-text  px-4 py-2 rounded-full justify-around bg-blur-lg border-dim">
      <a href="http://" className="font-body text-button-text m-2 transition-all duration-200 hover:-translate-y-0.5  hover:font-extrabold hover:text-cyan-100">Home</a>
      <a href="http://" className="font-body text-button-text m-2 transition-all duration-200 hover:-translate-y-0.5  hover:font-extrabold hover:text-cyan-100">Work</a>
      <a href="http://" className="font-body text-button-text m-2 transition-all duration-200 hover:-translate-y-0.5  hover:font-extrabold hover:text-cyan-100">About</a>
      <a href="http://" className="font-body text-button-text m-2 transition-all duration-200 hover:-translate-y-0.5  hover:font-extrabold hover:text-cyan-100">Connect</a>
    </div>
  )
}

export default GlassNav