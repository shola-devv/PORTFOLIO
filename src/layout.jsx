import BackgroundVideo from "./BackgroundVideo";

export default function Layout({ children }) {
  return (
    <div className="relative min-h-screen w-full overflow-hidden font-mono">
      <BackgroundVideo />
      {/* Dark overlay so text is readable */}
      <div className="relative min-h-screen bg-black/50">{children}</div>
    </div>
  );
}
