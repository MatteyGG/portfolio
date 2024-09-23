"use client"

function header() {
    localStorage.theme = 'light'
    if (
        localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      ) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
        document.documentElement.classList.add("light");
      }
    return (
        <div className="header flex justify-center items-center gap-2">
          <button
            className="text-xl"
            onClick={() => {
              document.documentElement.classList.toggle("dark");
              localStorage.setItem("theme", document.documentElement.classList.toString());
            }}
          >
            Toggle dark/light mode
          </button>
        </div>
    )
}

export default header