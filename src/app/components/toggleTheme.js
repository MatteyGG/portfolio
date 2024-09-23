"use client";

export default function ToggleTheme() {
    return (
        <div
            className="toggleTheme"
            onClick={() => {
                document.documentElement.classList.toggle("dark");
                localStorage.setItem("theme", document.documentElement.classList);
            }}
        >
            <div className="toggleTheme__icon" />
        </div>
    );
}

export { ToggleTheme };