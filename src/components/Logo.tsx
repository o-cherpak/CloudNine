export function Logo() {
  return (
    <a href={"/"} className="flex flex-row items-center gap-2 md:gap-4">
      <img src="../images/logo.png" alt="CloudNine Logo" className="w-8 h-8 md:w-14 md:h-14 rounded-xl" />

      <h2 className="text-xl md:text-2xl">CloudNine</h2>
    </a>
  );
}

