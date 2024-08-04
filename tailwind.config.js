/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      _backgroundImage: {
        "hero-pattern": "url('imgs/Rectangle 626.png')",
      },
      get backgroundImage() {
        return this._backgroundImage;
      },
      set backgroundImage(value) {
        this._backgroundImage = value;
      },
    },
  },
  plugins: [],
};
