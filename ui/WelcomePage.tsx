const WelcomePage = () => {
  return (
    <div className="text-4xl flex flex-col justify-center items-center w-1/2 border-2 bg-black h-full p-36 rounded-2xl">
      <h1 className="text-4xl font-bold text-white mb-5 text-center">
        Welcome to Your To-Do List
      </h1>
      <h2 className="text-xl text-gray-300 mb-10 text-center">
        Stay organized and productive!
      </h2>
      <p className="text-2xl italic text-textMuted text-center max-w-lg mx-4 mb-5">
        &quot;The secret to getting ahead is getting started.&quot;
      </p>
      <p className="text-2xl italic text-textMuted text-center max-w-lg mx-4 mb-5">
        &quot;Success is the sum of small efforts, repeated day in and day
        out.&quot;
      </p>
    </div>
  );
};

export default WelcomePage;
