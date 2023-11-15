export default function Home() {
  const event = async () => {
    const data = await fetch("http://ibibles.net/quote.php?niv-mat/5:3-12");
    const verse = data.json()
    return verse
  };


  return (
    <main>
      <body>
        <h1>Read some bible</h1>
      </body>
    </main>
  );
}
