function Loading() {
  return (
    <div className="w-full max-h-screen h-[calc(100vh-119px)] lg:h-[calc(100vh-116px)] xs:h-[calc(100vh-88px)] flex justify-center bg-black items-center">
      <video
        autoPlay={true}
        muted
        loop
        playsInline
        className=" w-fit h-[280px] translate-x-[3%] xs:translate-x-[1%] bg-transparent xs:w-full lg:h-[200px] xs:h-[150px] lg:object-contain"
        width={1500}
        height={1500}
        src="/loader.mp4"
      ></video>
    </div>
  );
}

export default Loading;
