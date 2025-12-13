function FourIslandsCard() {
  const islands = [
    {
      name: 'Poda Island',
      image: 'https://raw.githubusercontent.com/BorbbangZar/joinjoytravel-assets/refs/heads/main/1765649099678.jpg',
      caption: 'Swimming & Relax',
      links: {
        facebook: 'https://www.facebook.com/share/r/1H278RodX6/',
        youtube: 'https://youtube.com/shorts/mIDeJtAXmJM?feature=shared'
      }
    },
    {
      name: 'Chicken Island',
      image: 'https://raw.githubusercontent.com/BorbbangZar/joinjoytravel-assets/refs/heads/main/1765649028671.jpg',
      caption: 'Iconic Limestone Cliffs',
      links: {
        facebook: 'https://www.facebook.com/share/r/1H278RodX6/',
        youtube: 'https://youtube.com/shorts/mIDeJtAXmJM?feature=shared'
      }
    },
    {
      name: 'Tup Sandbar',
      image: 'https://raw.githubusercontent.com/BorbbangZar/joinjoytravel-assets/refs/heads/main/340726_0.jpg',
      caption: 'Walkable Sandbar',
      links: {
        facebook: 'https://www.facebook.com/share/r/1H278RodX6/',
        youtube: 'https://youtube.com/shorts/mIDeJtAXmJM?feature=shared'
      }
    },
    {
      name: 'Phra Nang',
      image: 'https://raw.githubusercontent.com/BorbbangZar/joinjoytravel-assets/refs/heads/main/1765649053579.jpg',
      caption: 'Cliffs & Cave Beach',
      links: {
        facebook: 'https://www.facebook.com/share/r/1H278RodX6/',
        youtube: 'https://youtube.com/shorts/mIDeJtAXmJM?feature=shared'
      }
    },
  ];

  const fullRouteYoutube = 'https://youtube.com/shorts/mIDeJtAXmJM?feature=shared';
  const guideFacebook = 'https://www.facebook.com/share/r/1H278RodX6/';

  return (
    <article className="rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm ring-1 ring-white/60 sm:p-5">
      <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-sky-700">
        <span className="h-1.5 w-1.5 rounded-full bg-sky-400" aria-hidden="true" />
        <span>Route preview</span>
      </div>

      <h2 className="text-xl font-semibold text-slate-900">
  Krabi 4 Islands Classic
</h2>
      <div className="flex items-center gap-2 mb-2">
  <span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-medium text-white">
    CURATED BY LOCALS
  </span>
</div>


      <p className="mt-1 text-sm text-slate-600">
  A locally-curated route designed for calm seas, perfect timing, and iconic views.
</p>


      <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 px-3 py-3 shadow-inner sm:px-4">
        <div className="flex items-center justify-between text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-500">
          <span>Route steps</span>
          <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs text-emerald-700">
  🌊 Calm Day Route
</span>
        </div>

        <div className="mt-3 grid grid-cols-2 gap-3">
          {islands.map((island, index) => (
            <div
  key={island.name}
  className="relative rounded-xl border border-slate-200 bg-white/95 p-3 shadow-sm"
>


<span className="absolute top-2 left-2 z-10 text-[10px] font-medium text-white bg-black/40 px-1.5 py-0.5 rounded">
    {String(index + 1).padStart(2, '0')}
  </span>


<div className="relative overflow-hidden rounded-lg ring-1 ring-slate-200">
  <img
    src={island.image}
    alt={island.name}
    className="h-28 w-full object-cover"
  />

  {/* Island name overlay */}
  <div className="absolute bottom-2 left-2 right-2">
    <span className="inline-block rounded-md bg-black/45 px-2 py-1 text-[12px] font-medium text-white backdrop-blur-sm">
      {island.name}
    </span>
  </div>
</div>

 

<div className="mt-2 flex flex-col gap-1.5">

  {/* CAPTION */}
  <span className="text-[11px] font-medium text-slate-700">
    {island.caption}
  </span>

  <div className="mt-1 flex items-center gap-2 text-[11px] text-slate-400">

  <span className="font-medium tracking-tight">
    Explore more
  </span>

  <div className="flex items-center gap-1.5 opacity-70 hover:opacity-100 transition">

    {/* Facebook */}
    <a
      href={island.links.facebook}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${island.name} on Facebook`}
      className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/70 ring-1 ring-slate-200 transition hover:ring-slate-300"
    >
      <img
        src="https://cdn.simpleicons.org/facebook/64748b"
        alt="Facebook"
        className="h-3.5 w-3.5"
      />
    </a>

    {/* YouTube */}
    <a
      href={island.links.youtube}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${island.name} on YouTube`}
      className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/70 ring-1 ring-slate-200 transition hover:ring-slate-300"
    >
      <img
        src="https://cdn.simpleicons.org/youtube/64748b"
        alt="YouTube"
        className="h-3.5 w-3.5"
      />
    </a>

  </div>
</div>



</div>

             
            
                
            </div>
          ))}
        </div>
        <p className="mt-3 text-center text-[12px] font-semibold leading-snug text-slate-600">
  A must-see island route for anyone visiting Ao Nang.
</p>

      </div>

      <div className="mt-4 space-y-2 border-t border-slate-200 pt-3 text-sm text-slate-700">
        <a
          href={fullRouteYoutube}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 rounded-xl bg-white/90 px-4 py-3 ring-1 ring-slate-200 transition hover:bg-white hover:ring-slate-300"


        >
          <img
            src="https://cdn.simpleicons.org/youtube/FF0000"
            alt="YouTube"
            className="h-5 w-5 transition group-hover:scale-105"
          />
          <div className="leading-tight">
           <div className="font-medium text-slate-900">
  Watch the full island journey
</div>
<div className="text-[12px] text-slate-500">
  See how the day flows at sea
</div>
</div>

        </a>

        <a
          href={guideFacebook}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 rounded-xl bg-white/90 px-4 py-3 ring-1 ring-slate-200 transition hover:bg-white hover:ring-slate-300"


        >
          <img
            src="https://cdn.simpleicons.org/facebook/1877F2"
            alt="Facebook"
            className="h-5 w-5"
          />
          <div className="leading-tight">
            <div className="font-medium text-slate-900">
  Read the local travel guide
</div>
<div className="text-[12px] text-slate-500">
  Find the travel style that suits you best
</div>

          </div>
        </a>
      </div>
    </article>
  );
}

export default FourIslandsCard;
