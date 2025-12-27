import { IconButton } from "@/components/Buttons";
import CarouselButtons from "@/components/CarouselButton";
import { ArticleCard, CardWithImage } from "@/components/Cards";
import ContentContainer from "@/components/container/ContentContainer";
import { CardColumn, CardRow } from "@/components/layout/CardGrid";
import { FlexContainer } from "@/components/layout/FlexContainer";
import SpotlightCarousel from "@/components/SpotlightCarousel";
import { ExperienceHighlights, JogjaArticles, JogjaTourPackages, SpotlightItems } from "@/const";
import { ArrowRightIcon } from "@/icons";
import { useCarousel } from "@/hooks/useCarousel";

export default function Home() {
  return (
    <main className="w-full">
      {/* hero section */}
      <section className="relative w-full h-screen 2xl:h-200 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>

        {/* video container */}
        <video id="mainVideo" autoPlay loop muted playsInline preload="auto" controls={false} style={{
          objectFit: 'cover'
        }} className="h-full w-full">
          <source src="/video/tugu-jogja.mp4" type="video/mp4" />
        </video>

        {/* writing */}
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <div className="flex flex-col items-center text-center px gap-1 text-white">
            <h1 className="text-shadow-2xl font-bold text-[1.5rem] lg:text-[2.5rem]">Yogyakarta: Serambi Budaya, Jiwa yang terukir dalam Rentang Waktu.</h1>
            <span className="text-[1rem] xl:text-[1.5rem]">Temukan sebuah epik yang menunggu untuk Anda alami dengan segenap indra.</span>
          </div>
        </div>
      </section>
      {/* hero section */}

      {/* experinces */}
      <section className="w-full">
        <ContentContainer>
          <div className="px-5 md:px-10 xl:px-20 py-5 md:py-25">
            <h1 className="font-semibold mb-10 leading-10 md:leading-15 text-[2rem] md:text-[3rem]">Experiences Yogyakarta</h1>

            <div className="w-full flex items-center justify-center">
              <div className="overflow-x-auto">
                <FlexContainer gap={5} direction="flex-col md:flex-row" className="w-fit">
                  <CardColumn gap={2}>
                    <CardWithImage {...ExperienceHighlights[0]} />
                    <CardRow className="justify-between">
                      <CardWithImage {...ExperienceHighlights[1]} />
                      <CardWithImage {...ExperienceHighlights[2]} />
                    </CardRow>
                  </CardColumn>

                  <CardColumn gap={2}>
                    <CardRow className="justify-between">
                      <CardWithImage {...ExperienceHighlights[3]} />
                      <CardWithImage {...ExperienceHighlights[4]} />
                    </CardRow>
                    <CardWithImage {...ExperienceHighlights[5]} />
                  </CardColumn>
                </FlexContainer>
              </div>
            </div>
          </div>
        </ContentContainer>
      </section>
      {/* experinces */}

      {/* spotlight */}
      <section className="bg-[url('/images/texture.jpg')] bg-center bg-cover overflow-x-hidden">
        <ContentContainer>
          <div className="px-5 md:px-10 lg:px-0 py-5 md:py-25">
            <div className="flex flex-col lg:flex-row items-center gap-8 xl:gap-10">
              {/* writing */}
              <div className="mx-0 md:mx-5 lg:mx-20 w-full lg:w-[45%]">
                <div className="flex flex-col items-start gap-3 lg:gap-5 text-white">
                  <span className="font-semibold text-[1.3rem] capitalize">spotlight</span>
                  <h1 className="font-semibold leading-15 text-[3rem]">Ciri Khas Yogyakarta</h1>
                  <span>Temukan keunikan budaya Yogyakarta melalui karakteristik menariknya, seperti kerajinan tangan, tradisi lokal, dan spesial kuliner yang menggugah selera.</span>

                  <IconButton label="temukan ciri khas Yogyakarta" isLink={true} url={'#'} icon={<ArrowRightIcon size={15} color="white" />} style="mt-5 lg:mt-10 border border-white font-semibold capitalize text-[.9rem]" />
                </div>
              </div>

              {/* carousel */}
              <div className='w-full lg:w-[50%] xl:w-[65%]'>
                <div className="w-full md:w-fit h-fit md:h-full">
                  {/* {SpotlightItems.map((item) => (
                    <CardWithImage key={item.id} {...item} dimension="w-70 lg:w-100 h-90 lg:h-150" />
                  ))} */}
                  
                  <SpotlightCarousel />
                </div>
              </div>
            </div>
          </div>
        </ContentContainer>
      </section>
      {/* spotlight */}
      
      {/* article */}
      <section className="w-full">
        <ContentContainer>
          <div className="w-full px-5 md:px-10 xl:px-20 py-5 md:py-25">
            <div className="w-full flex flex-col items-start gap-10">
              {/* title */}
              <div className="w-full">
                <h1 className="font-semibold leading-10 md:leading-15 text-[2rem] md:text-[3rem]">Through Traveler's Eyes</h1>
                <div className="mt-5 md:mt-0 w-full flex flex-col md:flex-row gap-4 md:gap-0 md:items-center justify-between">
                  <span className="text-[1rem] lg:text-[1.3rem]">Rasakan keseruan Yogyakarta melalui cerita mereka.</span>
                  <a href="#" className="flex items-center gap-2">
                    <span className="capitalize font-semibold">Lihat Semua</span>
                    <ArrowRightIcon size={15} color="black" />
                  </a>
                </div>
              </div>
              
              {/* article */}
              <div className="w-full flex flex-col gap-8">
                <div className="w-full flex flex-col gap-6 md:gap-0 md:flex-row items-center justify-between">
                  {JogjaArticles.filter(item => item.id !== 'ART-JOGJA-004').map((item) => (
                    <ArticleCard key={item.id} title={item.title} alt={item.subtitle} date={item.date} image={item.image} dimension="w-70 md:w-[220px] lg:w-[300px] h-[400px] xl:w-[350px] xl:h-[600px]" />
                  ))}
                </div>

                {JogjaArticles
                  .filter(item => item.id === 'ART-JOGJA-004')
                  .map((item) => (
                    <ArticleCard 
                      key={item.id}
                      title={item.title}
                      alt={item.subtitle}
                      date={item.date}
                      image={item.image}
                      dimension="w-full h-[500px] md:h-[600px]"
                    />
                  ))
                }
              </div>
            </div>
          </div>
        </ContentContainer>
      </section>

      {/* tour package */}
      <section className="w-full relative">
        <div className="absolute top-25 md:top-50 inset-0 w-full h-full md:h-190 lg:h-full">
          <div className="relative w-full h-full">
            {/* Image */}
            <img 
              src="/images/pantai-mesra-1.jpeg" 
              alt="tour package background" 
              className="w-full h-full object-cover"
              loading="lazy"
            />
            
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-linear-to-t from-white/90 via-white/40 to-transparent" />
          </div>
        </div>

        <div className="relative z-10 w-full h-full">
          <ContentContainer>
            <div className="w-full py-5 md:py-0 px-5 md:px-10 xl:px-20">
              <div className="w-full flex flex-col items-start gap-10">
                {/* title */}
                <div className="w-full">
                  <h1 className="font-semibold leading-10 md:leading-15 text-[2rem] md:text-[3rem]">Let Kellana Guide Your Steps</h1>
                  <div className="mt-5 md:mt-0 w-full flex flex-col md:flex-row gap-4 md:gap-0 md:items-center justify-between">
                    <span className="text-[1rem] lg:text-[1.3rem]">Ikuti petualangan spektakuler bersama Kallana</span>
                    <a href="#" className="flex items-center gap-2">
                      <span className="capitalize font-semibold">Lihat Semua</span>
                      <ArrowRightIcon size={15} color="black" />
                    </a>
                  </div>
                </div>
                
                {/* article */}
                <div className="w-full">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {JogjaTourPackages.map((item) => (
                      <CardWithImage badgeText={item.id} showBadge key={item.id} image={item.image} title={item.name} paragraf={item.subtitle} dimension="w-full md:w-80 lg:w-75 xl:w-95 h-90" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </ContentContainer>
        </div>
      </section>

      <div className="mt-20 md:mt-20 lg:mt-50 w-full h-30" style={{
        backgroundColor: 'rgb(253, 241, 247)'
      }}></div>
    </main>
  );
}