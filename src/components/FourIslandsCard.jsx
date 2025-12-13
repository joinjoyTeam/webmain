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
    <article className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
      <div className="text-[11px] font-semibold tracking-widest text-sky-600">
        MUST-HAVE TRIP
      </div>

      <h3 className="mt-1 text-lg font-semibold text-slate-900">
        Krabi 4 Islands Classic
      </h3>

      <p className="mt-2 text-sm text-slate-600">
        Visit Krabi’s four most iconic islands in one easy, local-approved route.
      </p>

      <div className="mt-4 grid grid-cols-2 gap-4">
        {islands.map((island) => (
          <div key={island.name} className="space-y-2">
            <div className="overflow-hidden rounded-2xl bg-slate-100">
              <img
                src={island.image}
                alt={island.name}
                className="h-24 w-full object-cover"
              />
            </div>

            <div className="flex items-center justify-between text-sm font-semibold text-slate-800">
              <span>{island.name}</span>

              <div className="flex items-center gap-2">
                {island.links?.facebook && (
                  <a
                    href={island.links.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Read on Facebook"
                    className="hover:scale-110 transition"
                  >
                    <img
                      src="https://cdn.simpleicons.org/facebook/1877F2"
                      alt="Facebook"
                      className="h-4 w-4"
                    />
                  </a>
                )}

                {island.links?.youtube && (
                  <a
                    href={island.links.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Watch on YouTube"
                    className="hover:scale-110 transition"
                  >
                    <img
                      src="https://cdn.simpleicons.org/youtube/FF0000"
                      alt="YouTube"
                      className="h-4 w-4"
                    />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>








      <div className="mt-5 space-y-3 border-t pt-4">

  {/* YouTube – คลิปรวม */}
  <a
    href={fullRouteYoutube}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-red-600 transition"
  >
    <img
      src="https://cdn.simpleicons.org/youtube/FF0000"
      alt="YouTube"
      className="h-5 w-5"
    />
    <span>Watch full route – where this trip takes you</span>
  </a>

  {/* Facebook – บทความความรู้ */}
  <a
    href={guideFacebook}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 text-sm text-slate-600 hover:text-[#1877F2] transition"
  >
    <img
      src="https://cdn.simpleicons.org/facebook/1877F2"
      alt="Facebook"
      className="h-5 w-5"
    />
    <span>
      Read more on Facebook – which travel style suits you
    </span>
  </a>

</div>



    </article>
  );
}

export default FourIslandsCard;
