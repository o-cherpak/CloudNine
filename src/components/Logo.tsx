function Logo() {
  return (
    <a href={"/"} className="flex flex-row items-center gap-4">
      <img src="../images/logo.png" alt="CloudNine Logo" className="w-14 h-14 rounded-xl" />

      <h2 className="text-2xl">CloudNine</h2>
    </a>
  );
}

export default Logo;
