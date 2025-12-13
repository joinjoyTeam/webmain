function FourIslandsCard() {
  const islands = [
    {
      name: 'Poda Island',
      image: 'https://raw.githubusercontent.com/BorbbangZar/joinjoytravel-assets/refs/heads/main/340726_0.jpg',
      links: {
        facebook: 'https://www.facebook.com/share/r/1H278RodX6/',
        youtube: 'https://youtube.com/shorts/mIDeJtAXmJM?feature=shared'
      }
    },
    {
      name: 'Chicken Island',
      image: 'https://raw.githubusercontent.com/BorbbangZar/joinjoytravel-assets/refs/heads/main/340726_0.jpg',
      links: {
        facebook: 'https://www.facebook.com/share/r/1H278RodX6/',
        youtube: 'https://youtube.com/shorts/mIDeJtAXmJM?feature=shared'
      }
    },
    {
      name: 'Tup Sandbar',
      image: 'https://raw.githubusercontent.com/BorbbangZar/joinjoytravel-assets/refs/heads/main/340726_0.jpg',
      links: {
        facebook: 'https://www.facebook.com/share/r/1H278RodX6/',
        youtube: 'https://youtube.com/shorts/mIDeJtAXmJM?feature=shared'
      }
    },
    {
      name: 'Phra Nang',
      image: 'https://raw.githubusercontent.com/BorbbangZar/joinjoytravel-assets/refs/heads/main/340726_0.jpg',
      links: {
        facebook: 'https://www.facebook.com/share/r/1H278RodX6/',
        youtube: 'https://youtube.com/shorts/mIDeJtAXmJM?feature=shared'
      }
    },
  ];

  const fullRouteYoutube = 'https://youtube.com/shorts/mIDeJtAXmJM?feature=shared';
  const guideFacebook = 'https://www.facebook.com/share/r/1H278RodX6/';

  return (
    <article className="rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-none ring-1 ring-white/60 sm:p-5">
      <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-sky-700">
        <span className="h-1.5 w-1.5 rounded-full bg-sky-400" aria-hidden="true" />
        <span>Route preview</span>
      </div>

      <h3 className="mt-2 text-base font-semibold text-slate-900 sm:text-lg">
        Krabi 4 Islands Classic
      </h3>

      <p className="mt-1 text-[13px] leading-relaxed text-slate-600">
        Visit Krabi’s four most iconic islands in one easy, local-approved route.
      </p>

      <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 px-3 py-3 sm:px-4">
        <div className="flex items-center justify-between text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-500">
          <span>Route steps</span>
          <span className="text-[10px] font-medium text-slate-400">Calm day route</span>
        </div>

        <div className="mt-3 flex items-start gap-3 overflow-x-auto pb-1">
          {islands.map((island, index) => (
            <div key={island.name} className="flex shrink-0 items-center gap-2">
              <div className="relative flex flex-col items-center gap-1">
                <div className="h-12 w-12 overflow-hidden rounded-xl ring-1 ring-slate-200">
                  <img
                    src={island.image}
                    alt={island.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="text-[11px] font-medium text-slate-600 whitespace-nowrap">
                  {island.name}
                </div>
              </div>
              {index < islands.length - 1 && (
                <div className="h-[1px] w-8 rounded-full bg-slate-200" aria-hidden="true" />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 flex flex-col gap-2 border-t border-slate-200 pt-3 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
        <a
          href={fullRouteYoutube}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1.5 font-semibold text-slate-700 ring-1 ring-slate-200 transition hover:bg-white"
        >
          <img
            src="https://cdn.simpleicons.org/youtube/FF0000"
            alt="YouTube"
            className="h-4 w-4"
          />
          <span>Watch full route</span>
        </a>

        <a
          href={guideFacebook}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1.5 font-medium text-slate-700 ring-1 ring-slate-200 transition hover:bg-white"
        >
          <img
            src="https://cdn.simpleicons.org/facebook/1877F2"
            alt="Facebook"
            className="h-4 w-4"
          />
          <span>Read travel guide</span>
        </a>
      </div>
    </article>
  );
}

export default FourIslandsCard;
