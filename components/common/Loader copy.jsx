const Loader = () => {
  return (
    <div className="bg-slate-100 dark:bg-slate-950 text-main w-full h-screen text-4xl flex justify-center items-center">
      <div className="flex justify-center items-center">
        <h2 className="h-16 text-center ml-10">Un moment</h2>
        <svg className="h-20 m-3 pb-1 inline-block" viewBox="0 0 100 100">
          <circle fill="currentColor" stroke="none" cx="6" cy="50" r="6">
            <animate
              attributeName="opacity"
              dur="1s"
              values="0;1;0"
              repeatCount="indefinite"
              begin="0.1"
            />
          </circle>
          <circle fill="currentColor" stroke="none" cx="26" cy="50" r="6">
            <animate
              attributeName="opacity"
              dur="1s"
              values="0;1;0"
              repeatCount="indefinite"
              begin="0.2"
            />
          </circle>
          <circle fill="currentColor" stroke="none" cx="46" cy="50" r="6">
            <animate
              attributeName="opacity"
              dur="1s"
              values="0;1;0"
              repeatCount="indefinite"
              begin="0.3"
            />
          </circle>
        </svg>
      </div>
    </div>
  );
};

export default Loader;
