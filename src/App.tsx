'use client'
import { useState, useRef, useEffect} from "react";
import { FilmData } from "./types";
import { fetchFilmData } from "./data";

function App() {
  const [adEnabled, setAdEnabled] = useState(false);
  const [filmData, setFilmData] = useState<FilmData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Use ref to prevent multiple fetch calls
  const hasLoadedRef = useRef(false);

  useEffect(() => {
  // Prevent double fetch in strict mode
  if (hasLoadedRef.current) return;
  hasLoadedRef.current = true;

  const loadData = async () => {
    try {
      setLoading(true);
      const data = await fetchFilmData();
      setFilmData(data);
      setError(null);
    } catch (err) {
      setError("Erreur lors du chargement de la vidéo. Veuillez réessayer.");
      setFilmData(null);
    } finally {
      setLoading(false);
    }
  };

  loadData();
  }, []);

  // Loading state
  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mb-4"></div>
          <p className="text-gray-600">Chargement de la vidéo...</p>
        </div>
      </div>
    );
  }

  // Error state
  if (error || !filmData) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <p className="text-red-600 font-semibold mb-4">{error || "Erreur lors du chargement"}</p>
          <button 
            onClick={() => globalThis.location.reload()}
            className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700"
          >
            Réessayer
          </button>
        </div>
      </div>
    );
  }
  return (
    <>
      <a 
        href="#main-content" 
        className="absolute top-[-100px] left-0 bg-indigo-700 text-white p-3 z-50 transition-all focus:top-0 font-bold rounded-br-lg shadow-lg"
      >
        Aller au contenu principal
      </a>

      <div className="w-full lg:h-screen lg:overflow-hidden flex flex-col bg-gray-50 text-gray-900 font-sans">
        <div className="flex-shrink-0 p-4 pb-2 bg-white shadow-sm z-10 relative">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h1 className="text-xl md:text-2xl font-extrabold tracking-tight text-gray-900 m-0">
                  {filmData.film.title}
                </h1>
              </div>
              
              <button 
                  onClick={() => setAdEnabled(!adEnabled)} 
                  className={`
                    text-sm px-4 py-2 rounded-full font-semibold transition-all shadow-sm
                    ${adEnabled 
                      ? 'bg-indigo-100 text-indigo-700 border-2 border-indigo-200' 
                      : 'bg-white text-gray-600 border-2 border-gray-200 hover:bg-gray-100'}
                  `}
              >
                {adEnabled ? "AD : Activée 🔈" : "Activer AD"}
              </button>
            </div>
            Chapters
        </div>
        <main id="main-content" className="flex-1 min-h-0 p-4 grid grid-cols-1 lg:grid-cols-4 gap-4 bg-gray-50">
            <div className="lg:col-span-3 flex flex-col gap-4 h-full min-h-0">
                <section aria-label="Lecteur vidéo" className="lg:h-1/2 w-full bg-black rounded-2xl overflow-hidden shadow-xl flex-shrink-0 min-h-[250px] ring-1 ring-black/10">
                   <div className="h-full w-full flex items-center justify-center">
                     Player
                   </div>
                </section>
                <section aria-label="Carte interactive" className="lg:h-1/2 w-full bg-white rounded-2xl overflow-hidden shadow-xl relative z-0 flex-shrink-0 min-h-[250px] ring-1 ring-black/5">
                    <div className="h-full w-full">
                       Map
                    </div>
                </section>

            </div>
            <div className="lg:col-span-1 h-full min-h-0">
                <section className="h-[500px] lg:h-full flex flex-col rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5 bg-white">
                  Chat
                </section>
            </div>

        </main>
        AudioDescriptionManager 
      </div>
    </>
  );
}

export default App;
