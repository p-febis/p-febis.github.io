import { CallToAction } from "./CallToAction";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <>
      <CallToAction />
      <footer className="flex h-16 items-center justify-center">
        <span className="text-neutral-700">
          Copyright &copy; {year} Preston Febis
        </span>
      </footer>
    </>
  );
};
