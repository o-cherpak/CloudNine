export function Logo() {
  return (
    <a href={"/"} className="flex flex-row items-center gap-4 md:gap-4 hover:scale-105 group duration-300 ease">
      <img src="/images/logo.png" alt="CloudNine Logo" className="w-8 h-8 md:w-14 md:h-14 rounded-3xl" />

      <h2 className="text-2xl md:text-3xl font-medium shadow-2xl">CloudNine</h2>
    </a>
  );
}

