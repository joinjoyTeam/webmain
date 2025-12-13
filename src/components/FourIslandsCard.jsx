function FourIslandsCard() {
  const islands = [
    {
      name: 'Poda Island',
      image: 'https://raw.githubusercontent.com/BorbbangZar/joinjoytravel-assets/refs/heads/main/1765649099678.jpg',
      caption: 'Best for swimming & relaxed beach time',
      links: {
        facebook: 'https://www.facebook.com/share/r/1H278RodX6/',
        youtube: 'https://youtube.com/shorts/mIDeJtAXmJM?feature=shared'
      }
    },
    {
      name: 'Chicken Island',
      image: 'https://raw.githubusercontent.com/BorbbangZar/joinjoytravel-assets/refs/heads/main/1765649028671.jpg',
      caption: 'Krabi’s most iconic limestone formation',
      links: {
        facebook: 'https://www.facebook.com/share/r/1H278RodX6/',
        youtube: 'https://youtube.com/shorts/mIDeJtAXmJM?feature=shared'
      }
    },
    {
      name: 'Tup Sandbar',
      image: 'https://raw.githubusercontent.com/BorbbangZar/joinjoytravel-assets/refs/heads/main/340726_0.jpg',
      caption: 'Walkable sandbar at low tide',
      links: {
        facebook: 'https://www.facebook.com/share/r/1H278RodX6/',
        youtube: 'https://youtube.com/shorts/mIDeJtAXmJM?feature=shared'
      }
    },
    {
      name: 'Phra Nang',
      image: 'https://raw.githubusercontent.com/BorbbangZar/joinjoytravel-assets/refs/heads/main/1765649053579.jpg',
      caption: 'Dramatic cliffs & hidden cave beach',
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
  className="relative overflow-hidden rounded-lg ring-1 ring-slate-200"
>


<span className="absolute top-2 left-2 z-10 text-[10px] font-medium text-white bg-black/40 px-1.5 py-0.5 rounded">
    {String(index + 1).padStart(2, '0')}
  </span>



              <div className="overflow-hidden rounded-lg ring-1 ring-slate-200">
                 <img
    src={island.image}
    alt={island.name}
    className="h-24 w-full object-cover"
  />
              </div>
              <div className="mt-2 flex items-center gap-2 text-[10px] font-medium text-slate-700">
                
<div className="flex flex-col">
  <div className="flex flex-col">
    <span className="leading-tight text-slate-900">
      {island.name}
    </span>
    <span className="mt-0.5 line-clamp-2 text-[10px] leading-snug text-slate-500">
      {island.caption}
    </span>
  </div>
</div>






                <div className="ml-auto flex items-center gap-1.5 opacity-60 hover:opacity-100 transition">

                  <a
                    href={island.links.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white text-[0] ring-1 ring-slate-200 transition hover:ring-slate-300"
                    aria-label={`${island.name} on Facebook`}
                  >
                    <img
                      src="https://cdn.simpleicons.org/facebook/1877F2"
                      alt="Facebook"
                      className="h-5 w-5 transition group-hover:scale-105"
                    />
                  </a>
                  <a
                    href={island.links.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white text-[0] ring-1 ring-slate-200 transition hover:ring-slate-300"
                    aria-label={`${island.name} on YouTube`}
                  >
                    <img
                      src="https://cdn.simpleicons.org/youtube/FF0000"
                      alt="YouTube"
                      className="h-3.5 w-3.5"
                    />
                  </a>
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
