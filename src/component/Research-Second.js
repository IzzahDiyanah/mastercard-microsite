const SecondApp = () => {
  const socialIcons = [
    { src: "/images/FB.png", alt: "Facebook" },
    { src: "/images/Forum.png", alt: "Forum" },
    { src: "/images/X.png", alt: "X (Twitter)" },
    { src: "/images/Reddit.png", alt: "Reddit" },
    { src: "/images/Blogs.png", alt: "Blogs" },
    { src: "/images/Instagram.png", alt: "Instagram" },
    { src: "/images/News.png", alt: "News" }
  ];

  return (
    <section className="w-full h-screen flex">
      {/* Left Content */}
      <div className="w-3/5 flex flex-col">
        {/* Top Section */}
        <div className="h-1/2 bg-gradient-to-b from-amber-900 to-amber-950 p-10 text-white relative">
          <h2 className="text-4xl font-normal mb-8 max-w-lg">
            Online conversations on Safety and Security
          </h2>
          
          {/* Social Icons Grid */}
          <div className="grid grid-cols-4 gap-6 max-w-sm">
            {socialIcons.slice(0, 4).map((icon, index) => (
              <img key={index} src={icon.src} alt={icon.alt} className="w-12 h-12" />
            ))}
          </div>
          <div className="grid grid-cols-3 gap-6 max-w-xs ml-8 mt-4">
            {socialIcons.slice(4).map((icon, index) => (
              <img key={index} src={icon.src} alt={icon.alt} className="w-12 h-12" />
            ))}
          </div>
          
          {/* NEW Badge */}
          <div className="absolute -bottom-6 left-3/4 w-28 h-14 bg-white text-orange-500 rounded-b-3xl flex items-center justify-center font-extrabold text-xl">
            NEW
          </div>
        </div>

        {/* Bottom Section */}
        <div className="h-1/2 bg-gradient-to-b from-orange-400 to-orange-500 p-10 flex items-center">
          <div className="space-y-6">
            <div className="flex items-center gap-8">
              <img src="/images/mastercard-insights.png" alt="Mastercard Insights" className="w-16 h-16" />
              <h1 className="text-3xl font-extrabold text-gray-900">Mastercard Cyber Insights</h1>
            </div>
            <p className="text-xl text-gray-900 max-w-2xl">
              Strategic cyber threat landscape assessment and analysis. Identification of cyber threat trends per region, industry, segment and business assets.
            </p>
          </div>
        </div>
      </div>

      {/* Right Image */}
      <div className="w-2/5">
        <img src="/images/mastercard-online.png" alt="Mastercard Online" className="w-full h-full object-cover" />
      </div>
    </section>
  );
}

export default SecondApp;