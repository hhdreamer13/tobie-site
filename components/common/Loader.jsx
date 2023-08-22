const Loader = () => {
  return (
    <div className="bg-slate-100 dark:bg-slate-950 text-main w-full h-screen text-4xl flex justify-center items-center">
      <svg className="h-20" viewBox="0 0 100 100">
        <circle fill="currentColor" stroke="none" cx="30" cy="50" r="6">
          <animate
            attributeName="opacity"
            dur="1s"
            values="0;1;0"
            repeatCount="indefinite"
            begin="0.1"
          />
        </circle>
        <circle fill="currentColor" stroke="none" cx="50" cy="50" r="6">
          <animate
            attributeName="opacity"
            dur="1s"
            values="0;1;0"
            repeatCount="indefinite"
            begin="0.2"
          />
        </circle>
        <circle fill="currentColor" stroke="none" cx="70" cy="50" r="6">
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
  );
};

export default Loader;
