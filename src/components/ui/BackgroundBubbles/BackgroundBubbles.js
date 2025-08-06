const BackgroundBubbles = ({ children }) => {
    return (
      <div className="relative w-full min-h-screen overflow-hidden">
        {/* Background bubbles fixed behind */}
        <div className="fixed inset-0 -z-10 pointer-events-none">
          {/* Bubble 1 */}
          <div className="absolute -bottom-40 -left-20 w-[550px] h-[550px] rounded-full bg-purple-300/10 blur-3xl max-lg:hidden"></div>
          {/* Bubble 2 */}
          <div className="absolute -top-60 left-[15rem] w-[550px] h-[600px] rounded-full bg-sky-400/10 blur-3xl max-lg:hidden"></div>
          {/* Bubble 3 */}
          <div className="absolute -bottom-60 -right-[25rem] w-[500px] h-[500px] rounded-full bg-green-300/10 blur-3xl max-lg:hidden"></div>
        </div>
  
        {/* Content on top */}
        <div className="relative z-10">{children}</div>
      </div>
    );
  };
  
  export default BackgroundBubbles;
  