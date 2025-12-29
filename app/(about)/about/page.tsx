import ContentContainer from '@/components/container/ContentContainer'
import { congratulationsMessages } from '@/const'

const CongratsCard = ({name, title, ucapan, date, quote, socialMedia, organization}:CongratulationsMessage) => {
  return (
    <div className="w-full md:w-80 lg:w-90 p-5 md:p-7 rounded-xl bg-white shadow-xl flex flex-col gap-4">
      <div className="flex flex-col">
        <span className='text-[.8rem] text-gray-500'>{date}</span>
        <span>{name} - {title}</span>
      </div>

      <div className="flex flex-col gap-2">
        <span className='font-semibold'>"{quote}"</span>
        <p className='text-justify'>{ucapan}</p>
      </div>

      <div className="flex flex-col text-[.8rem]">
        {socialMedia && (
          <span>{socialMedia.platform} - {socialMedia.username}</span>
        )}
        <span>{organization}</span>
      </div>
    </div>
  )
}

const page = () => {
  return (
    <main className='w-full'>
      <section className='relative w-full h-125'>
        <div className="absolute inset-0">
          <img
            src='/images/pantai-segoro/pantai-segoro-1.jpeg'
            alt='bg-image'
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            width={400}
            height={600}
          />
        </div>

        <div className="w-full absolute top-0 left-0 z-20">
          <section className="w-full h-100 flex items-center justify-center bg-black/50">
            <img src="/images/kala_kelana_white-removebg-preview.png" alt="Kala Kelana Logo" className="h-45 w-auto" />
          </section>

          <section className="w-full bg-white">
            <div className="w-full bg-center bg-cover bg-[url('/images/bg-about-us.webp')]">
              <ContentContainer>
                <div className="w-full px-5 md:px-0 py-5 md:py-25 flex items-center justify-center">
                  <div className="w-full md:w-[80%] lg:w-[60%]">
                    <h1 className="font-semibold text-black text-[1.5rem] md:text-[3rem] uppercase">The eyes behind the story</h1>

                    <p className="mt-5 md:mt-10 text-black text-[.8rem] md:text-[1rem] font-light text-justify leading-6 md:leading-8">
                      GAGASAN MENCIPTAKAN LAYANAN WISATA KOMPREHENSIF BERTEMA, UNTUK KELAS PREMIUM DI ZONA WISATA YOGYAKARTA, MAGELANG  & SURAKARTA (SOLO). CERITA MATA LAHIR DARI MANAJEMEN BERLATAR BELAKANG MULTI BIDANG LEBIH DARI 28 TAHUN DIDUNIA BISNIS, INVESTASI, PERHOTELAN, PARIWISATA, TRAVEL, EVENTS & TEKNOLOGI. HADIR SEBAGAI ICON BARU DAN TREND SETTER WISATA DI INDONESIA MENJADI PERJUANGAN IDEALISME MANAJEMEN UNTUK PERSEMBAHAN PENIKMAT WISATA & MICE DENGAN PENGALAMAN BARU. HIDUP ADALAH TENTANG PERJALANAN DAN CERITA,  ...CERITA MATA HADIRKAN SEBUAH BAGIAN PERJALANAN HIDUP YANG ISTIMEWA UNTUK KITA BINGKAI JADI CERITA ANDA KELAK. 
                    </p>

                    <div className="flex flex-col mt-10 gap-2">
                      <span>Yogyakarta, 6 Desember  2025</span>
                      <span>SALAM CERITA MATA;</span>
                      <span>“ciptakan cerita indahmu..”</span>
                    </div>
                  </div>
                </div>
              </ContentContainer>
            </div>
          </section>
        </div>
      </section>

      <section className="w-full mb-10 mt-150 sm:mt-100 md:mt-190 xl:mt-150 2xl:mt-160">
        <div className="py-5 md:py-0 px-5 md:px-10 xl:px-20">
          <ContentContainer>
            <h1 className='text-center mt-10 md:mt-0 mb-10 font-semibold text-black text-[1.5rem] md:text-[3rem] uppercase'>Senyap Kata dari Mereka yang Telah Melihat</h1>

            <div className="flex items-center justify-center w-full">
              <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                {congratulationsMessages.map((message) => (
                  <li key={message.id}>
                    <CongratsCard 
                      name={message.name}
                      title={message.title}
                      ucapan={message.ucapan}
                      date={message.date}
                      quote={message.quote}
                      socialMedia={message.socialMedia}
                      organization={message.organization}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </ContentContainer>
        </div>
      </section>
    </main>
  )
}

export default page