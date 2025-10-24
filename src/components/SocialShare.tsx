import { Facebook, Linkedin, Twitter, Share2 } from 'lucide-react';

export function SocialShare() {
  const eventUrl = encodeURIComponent(window.location.href);
  const eventTitle = encodeURIComponent('BECOSASO Alumni Meet 2025 - Join us in Hyderabad!');
  const hashtags = 'BECOSASO2025,BVCAlumniMeet,ReunionHyderabad';

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${eventUrl}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${eventUrl}`,
    twitter: `https://twitter.com/intent/tweet?url=${eventUrl}&text=${eventTitle}&hashtags=${hashtags}`,
    whatsapp: `https://wa.me/?text=${eventTitle}%20${eventUrl}`,
  };

  return (
    <section className="py-20 bg-gradient-to-r from-[#7A1E1E] to-[#5A1616]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <Share2 className="w-16 h-16 text-[#D9B47C] mx-auto mb-4" />
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Spread the Word!
          </h2>
          <p className="text-xl text-white/90">
            Help us reach every BVCian! Share this event with your batchmates
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <a
            href={shareLinks.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-6 py-4 bg-[#1877F2] hover:bg-[#145DBF] text-white rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            <Facebook className="w-5 h-5" />
            <span>Facebook</span>
          </a>

          <a
            href={shareLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-6 py-4 bg-[#0A66C2] hover:bg-[#084E94] text-white rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            <Linkedin className="w-5 h-5" />
            <span>LinkedIn</span>
          </a>

          <a
            href={shareLinks.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-6 py-4 bg-[#1DA1F2] hover:bg-[#1A8CD8] text-white rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            <Twitter className="w-5 h-5" />
            <span>Twitter</span>
          </a>

          <a
            href={shareLinks.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-6 py-4 bg-[#25D366] hover:bg-[#1EBD57] text-white rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            <span>WhatsApp</span>
          </a>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-2xl mx-auto">
          <p className="text-white/90 mb-3">Use these hashtags when sharing:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {hashtags.split(',').map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 bg-[#D9B47C] text-[#7A1E1E] rounded-full font-semibold text-sm"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
