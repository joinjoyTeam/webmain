import BoatCard from '../components/BoatCard.jsx';
import ExperienceCard from '../components/ExperienceCard.jsx';
import Footer from '../components/Footer.jsx';
import Map from '../components/Map.jsx';
import '../components/Map.css';
import FourIslandsCard from '../components/FourIslandsCard.jsx';

// const heroHighlights = [
//   { title: 'You pick the boat, not the counter', subtitle: 'NO MORE RANDOM BOATS' },
//   { title: 'Compare long-tail boats in one place', subtitle: 'ALL BOATS, ONE MAP' },
//   { title: 'Built for real feedback, not fake stars', subtitle: 'HONEST REVIEWS ONLY' },
//   { title: 'Same pier price or better, always', subtitle: 'LOCAL PRICE, NO MARKUP' }
// ];

const experiences = [
  {
    title: 'Sunset champagne cruise',
    category: 'Evening',
    icon: '🌅',
    description: 'Set sail for golden hour with feel-good playlists, chilled champagne, and crew timing the perfect sunset spot.',
    highlights: ['2.5 hours', 'Curated champagne', "Chef-made canapés"]
  },
  {
    title: 'One-day Krabi island hop',
    category: 'Adventure',
    icon: '🏝️',
    description: 'Catch the breeze on hidden sandbars and snorkel coral with local guides who know the calm, quiet bays.',
    highlights: ['6 hours', 'Snorkel gear included', 'Drone photography']
  },
  {
    title: 'Work onboard, executive style',
    category: 'Corporate',
    icon: '💼',
    description: 'Welcome clients or teams with full concierge service, on-board Wi‑Fi, and chef canapés for smooth, premium meetings.',
    highlights: ['Private steward', 'Ready-to-use sound', 'Scenic sea routes']
  }
];

const boats = [
  {
    name: 'KRABI SEA TOUR',//KRABI SEA TOUR (Warisa Boat)
    type: 'Join Trip Longtail Boat',//Longtail Boat  
    capacity: 12,
    showCapacity: false,   // ✅ แสดงที่นั่ง
    price: 500,
    rating: 4.9,
    showRating: false, // ซ่อนเรตติ้งสำหรับเรือท้องถิ่น
    description: 'Join a group trip on a traditional longtail boat at an affordable price.',
    image: 'https://raw.githubusercontent.com/BorbbangZar/joinjoytravel-assets/refs/heads/main/KRABISEATOUR.jpg',
    link: 'https://joinjoytravel.com/en/trips/24',
    tags:[],
    buttonLabel: "Book Now"
    
    //tags: ['Sunset cruise', 'Premium bar', 'Crewed service']
    //Half Day 4 Islands Join Trip  \n Talay Waek, Poda, Chicken, \n Phanang Cave 
  },
  {
    name: 'Peace Travel',//KRABI SEA TOUR (Warisa Boat)
    type: 'Private Longtail Boat',//Longtail Boat  
    capacity: 12,
    showCapacity: false,   // ✅ แสดงที่นั่ง
    price: 500,
    rating: 4.9,
    showRating: false, // ซ่อนเรตติ้งสำหรับเรือท้องถิ่น
    description: 'Private longtail boat, affordable and relaxing.',
    image: 'https://raw.githubusercontent.com/BorbbangZar/joinjoytravel-assets/refs/heads/main/340726_0.jpg',
    link: 'https://wa.me/66624290062',
    tags:[],
    buttonLabel: "Check Available"
    //tags: ['Sunset cruise', 'Premium bar', 'Crewed service']
  },
  {
    name: 'Aonang Tour and Travel',//KRABI SEA TOUR (Warisa Boat)
    type: 'Private Luxury Longtail Boat',//Longtail Boat  
    capacity: 12,
    showCapacity: false,   // ✅ แสดงที่นั่ง
    price: 500,
    rating: 4.9,
    showRating: false, // ซ่อนเรตติ้งสำหรับเรือท้องถิ่น
    description: 'Private longtail boat with premium comfort, beautiful views, and great photo spots.',
    image: 'https://raw.githubusercontent.com/BorbbangZar/joinjoytravel-assets/refs/heads/main/340726_0.jpg',
    link: 'https://wa.me/66624290062',
    tags:[],
    buttonLabel: "Check Available"
    //tags: ['Sunset cruise', 'Premium bar', 'Crewed service']
  },
  {
    name: 'Beyond Krabi Tours',//KRABI SEA TOUR (Warisa Boat)
    type: 'Join Trip Speed Boat',//Longtail Boat  
    capacity: 12,
    showCapacity: false,   // ✅ แสดงที่นั่ง
    price: 500,
    rating: 4.9,
    showRating: false, // ซ่อนเรตติ้งสำหรับเรือท้องถิ่น
    description: 'Join a speed boat tour to visit Krabi’s top spots quickly and easily.',
    image: 'https://raw.githubusercontent.com/BorbbangZar/joinjoytravel-assets/refs/heads/main/BeyondKrabiTours.png.png',
    link: 'https://wa.me/66624290062',
    tags:[],
    buttonLabel: "Check Available"
    //tags: ['Sunset cruise', 'Premium bar', 'Crewed service']
  },
  {
    name: 'Wonderful Tour Krabi',//KRABI SEA TOUR (Warisa Boat)
    type: 'Private Trip Speed Boat',//Longtail Boat  
    capacity: 12,
    showCapacity: false,   // ✅ แสดงที่นั่ง
    price: 500,
    rating: 4.9,
    showRating: false, // ซ่อนเรตติ้งสำหรับเรือท้องถิ่น
    description: 'High-end private speed boat with comfort, privacy, and stunning photo spots.',
    image: 'https://raw.githubusercontent.com/BorbbangZar/joinjoytravel-assets/refs/heads/main/340726_0.jpg',
    link: 'https://wa.me/66624290062',
    tags:[],
    buttonLabel: "Check Available"
    //tags: ['Sunset cruise', 'Premium bar', 'Crewed service']
  },
  
  // {
  //   name: 'Silver Tide 36',
  //   type: 'Sport cruiser',
  //   capacity: 8,
  //   price: 560,
  //   rating: 4.7,
  //   image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
  //   tags: ['Day trip', 'Snorkel gear', 'Bluetooth music']
  // },
  // {
  //   name: 'Mariner 50',
  //   type: 'Skydeck yacht',
  //   capacity: 16,
  //   price: 1040,
  //   rating: 4.8,
  //   image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
  //   tags: ['Overnight option', 'Private chef', 'Cabin suites']
  // },
  // {
  //   name: 'Coral Whisper 32',
  //   type: 'Eco cruiser',
  //   capacity: 6,
  //   price: 420,
  //   rating: 4.6,
  //   image: 'https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=1200&q=80',
  //   tags: ['Hybrid-electric', 'Shallow beach stops', 'Local guide']
  // }
];

function Hero() {
  return (
    <section className="relative overflow-visible lg:overflow-hidden bg-white pt-4 pb-2 sm:pt-6 sm:pb-4 lg:pt-8 lg:pb-6 min-h-[60vh] lg:min-h-[70vh]">

      <div
        className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_10%_20%,rgba(24,119,242,0.1),transparent_32%),radial-gradient(circle_at_80%_0%,rgba(66,183,42,0.12),transparent_36%)]"
        aria-hidden
      />
      <div className="section-shell relative grid gap-0 lg:grid-cols-2 lg:items-center h-full">
        <div className="space-y-8">
          <span className="inline-flex items-center rounded-full bg-[#e8f2ff] px-4 py-2 text-sm font-semibold text-[#1877F2] ring-1 ring-[#1877F2]/20">
            JoinJoy Travel • Krabi Local Buddy
          </span>
          <h1 className="text-4xl font-black leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Where to go today told by a real local
          </h1>
          <p className="text-lg text-slate-700 sm:max-w-xl">
            Get real-time tips, honest recommendations, and curated spots for the best day in Krabi.
          </p>
          <div className="flex gap-3 w-full justify-center sm:justify-start">


       
            <button
            onClick={() => {
              // มือถือเท่านั้น
            //  if (window.innerWidth < 768) {
                const el = document.getElementById('Seeallboats');

                if (el) {
                  const rect = el.getBoundingClientRect();
                 const offset = 10; // ปรับตามขนาด header ของคุณ

                  window.scrollTo({
                    top: window.scrollY + rect.top - offset,
                    behavior: 'smooth'
                  });
                }
            //  }
            }}
            className="inline-flex items-center gap-2 rounded-xl bg-[#1877F2] px-3 py-1.5 text-sm font-semibold text-white shadow-md shadow-[#1877F2]/30 transition hover:scale-[1.01]">
              See all boats
              <span aria-hidden="true" className="text-base">→</span>
            </button>
            <button 
             onClick={() => {
              // มือถือเท่านั้น
            //  if (window.innerWidth < 768) {
                const el = document.getElementById('highlights');

                if (el) {
                  const rect = el.getBoundingClientRect();
                  const offset = 120; // ปรับตามขนาด header ของคุณ
                  const extraScroll = 120;
                  window.scrollTo({
                    top: window.scrollY + rect.top - offset + extraScroll,
                    behavior: 'smooth'
                  });
                }
             // }
            }}
          className="inline-flex items-center gap-2 rounded-xl bg-white px-3 py-1.5 text-sm font-semibold text-[#1877F2] shadow-md shadow-[#1877F2]/30 transition hover:bg-[#f0f6ff]">
              Explore like a local
            </button>
          </div>
          <div className="grid max-w-lg grid-cols-2 gap-4 sm:gap-6">
            {/* {heroHighlights.map((item) => (
              <div key={item.title} className="card-surface space-y-1 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-[#1877F2]">{item.subtitle}</p>
                <p className="text-lg font-semibold text-slate-900">{item.title}</p>
              </div>
            ))} */}
          </div>
        </div>
        <div  id="highlights" className="relative h-full lg:min-h-[420px] flex items-stretch" style={{ width: '100%' }}>
          <Map />
        </div>
      </div>
    </section>
  );
}

function ExperienceGrid() {
  return (
    <section
  id="experiences"
  className="bg-[#f7f9fb] pt-2 pb-4 sm:pt-8 sm:pb-16"
>
      <div className="section-shell space-y-10">
        <div className="space-y-3 text-center">
          <span className="inline-flex items-center rounded-full bg-white px-4 py-2 text-base font-semibold text-[#1877F2] ring-1 ring-[#1877F2]/20 shadow-sm">
            Handpicked experiences
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">Pick your style and enjoy Krabi with JoinJoy</h2>
          <p className="text-lg text-slate-700 sm:mx-auto sm:max-w-2xl">
            From romantic hangs to team workshops by the sea, our concierge designs the right trip so you only focus on joy.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {experiences.map((experience) => (
            <ExperienceCard key={experience.title} experience={experience} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FleetSection() {
  return (
    <section   id="boats" className="pt-2 pb-6 sm:pt-8 sm:pb-16">
      <div  id="Seeallboats" className="section-shell space-y-12">
        <div className="space-y-3 text-center">
          <span className="inline-flex items-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#1877F2] ring-1 ring-[#1877F2]/20 shadow-sm">
            A signature fleet of Longtail Boats
          </span>
          <h3 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">Choose your boat styles <br />
          And head out to 4 Islands Trip</h3>
          <p className="text-lg leading-snug text-slate-700 sm:mx-auto sm:max-w-2xl mb-1">
            Each boat is inspected, professionally crewed, transparently priced
           <br />
            And can flex to your trip style.
            </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {boats.map((boat) => (
            <BoatCard key={boat.name} boat={boat} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Home() {
  return (
    <main>
      <Hero />
      
      {/* 🔹 4 Islands Route Insight */}
      <section className="bg-[#f7f9fb] py-6 sm:py-10">
        <div className="section-shell max-w-3xl mx-auto">
          <FourIslandsCard />
        </div>
      </section>




      <FleetSection />
      <Footer />
    </main>
  );
}

export default Home;
