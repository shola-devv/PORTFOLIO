export default function BackgroundVideo() {
    return (
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed top-0 left-0 w-full h-full object-cover object-center -z-10"
      >
        <source src="/videos/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    );
  }
  