import ShortenUrl from './components/ShortenUrl';
import UrlList from './components/UrlList';

function App() {
  return (
    <main className="min-h-screen p-6 mx-auto max-w-7xl">
      <section className="flex justify-center">
        <div className="space-y-10">
          <ShortenUrl />
          <UrlList />
        </div>
      </section>
    </main>
  );
}

export default App;
