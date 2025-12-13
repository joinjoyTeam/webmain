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
    <article className="rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm ring-1 ring-white/60 sm:p-5">
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

      <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 px-3 py-3 shadow-inner sm:px-4">
        <div className="flex items-center justify-between text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-500">
          <span>Route steps</span>
          <span className="text-[10px] font-medium text-slate-400">Calm day route</span>
        </div>

        <div className="mt-3 grid grid-cols-2 gap-3">
          {islands.map((island, index) => (
            <div
              key={island.name}
              className="rounded-xl border border-slate-200 bg-white/90 p-2 shadow-sm"
            >
              <div className="overflow-hidden rounded-lg ring-1 ring-slate-200">
                <img
                  src={island.image}
                  alt={island.name}
                  className="h-24 w-full object-cover"
                />
              </div>
              <div className="mt-2 flex items-center gap-2 text-[12px] font-medium text-slate-700">
                <span className="truncate">{island.name}</span>
                <div className="ml-auto flex items-center gap-1.5">
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
                      className="h-3.5 w-3.5"
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
      </div>

      <div className="mt-4 space-y-2 border-t border-slate-200 pt-3 text-sm text-slate-700">
        <a
          href={fullRouteYoutube}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 rounded-xl bg-white/80 px-3 py-2 ring-1 ring-slate-200 transition hover:ring-slate-300"
        >
          <img
            src="https://cdn.simpleicons.org/youtube/FF0000"
            alt="YouTube"
            className="h-5 w-5"
          />
          <div className="leading-tight">
            <div className="font-semibold">Watch full route</div>
            <div className="text-[12px] text-slate-500">where this trip takes you</div>
          </div>
        </a>

        <a
          href={guideFacebook}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 rounded-xl bg-white/80 px-3 py-2 ring-1 ring-slate-200 transition hover:ring-slate-300"
        >
          <img
            src="https://cdn.simpleicons.org/facebook/1877F2"
            alt="Facebook"
            className="h-5 w-5"
          />
          <div className="leading-tight">
            <div className="font-semibold">Read travel guide</div>
            <div className="text-[12px] text-slate-500">which travel style suits you</div>
          </div>
        </a>
      </div>
    </article>
  );
}

export default FourIslandsCard;
