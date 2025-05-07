export const HeroSection = () => {
  return (
    <>
      <div className="absolute -z-10 container h-[calc(48px*11)] border-r border-b bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:48px_48px]"></div>
      <main className="container flex h-[calc(48px*11)] flex-col items-center justify-center gap-4">
        <h1 className="text-5xl font-bold md:text-7xl">Preston Febis</h1>
        <h1 className="bg-gradient-to-r from-purple-400 to-indigo-600 bg-clip-text text-5xl font-bold text-transparent md:text-7xl">
          Full-Stack Developer
        </h1>
        <p className="font-md max-w-prose text-center text-neutral-700">
          Bringing ideas to life with clean code, frictionless interfaces, and
          full-stack solutions that scale.
        </p>
      </main>
    </>
  );
};
