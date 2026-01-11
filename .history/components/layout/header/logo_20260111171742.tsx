export default function Logo() {
  return (
    <div className="flex items-start py-3 min-h-9">
      <a className="flex items-center py-3 gap-2" href="/">
        <img
          alt="Company Logo"
          className="h-5 w-auto"
          src="./images/logo-icon.png"
        />
        <div className="flex flex-col leading-none">
          <img
            alt="Company Logo"
            className="h-4 w-auto"
            src="./images/logo-black.png"
          />
        </div>
      </a>
    </div>
  );
}
