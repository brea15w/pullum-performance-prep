import logo from './assets/logo.jpg'

function App() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
      <img
        src={logo}
        alt="Pullum Performance Prep"
        className="w-72 mb-8"
      />

      <h1 className="text-5xl font-bold text-center">
        PULLUM PERFORMANCE PREP
      </h1>

      <p className="text-gray-400 text-center mt-4 max-w-xl">
        Elite bodybuilding coaching, customized prep plans,
        nutrition guidance, and performance training.
      </p>

      <div className="flex gap-4 mt-8">
        <a
          href="tel:5738201141"
          className="bg-red-600 hover:bg-red-700 px-8 py-3 rounded-xl text-lg font-semibold transition"
        >
          Call Now
        </a>

        <a
          href="mailto:lpullum25.student@gmail.com?subject=Pullum Performance Prep Inquiry"
          className="bg-white text-black hover:bg-gray-200 px-8 py-3 rounded-xl text-lg font-semibold transition"
        >
          Email Us
        </a>
      </div>
    </div>
  )
}

export default App
