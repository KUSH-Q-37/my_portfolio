function Background() {
  return (
    <>
      <div
        className="
        fixed
        top-40
        left-20
        w-72
        h-72
        rounded-full
        bg-violet-700/20
        blur-[120px]
        -z-10
        "
      />

      <div
        className="
        fixed
        bottom-20
        right-10
        w-72
        h-72
        rounded-full
        bg-blue-700/20
        blur-[120px]
        -z-10
        "
      />
    </>
  );
}

export default Background;