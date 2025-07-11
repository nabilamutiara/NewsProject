import HeadLines from "@/components/HeadLines";
import Image from "next/image";
import LatestNews from "@/components/news/LatestNews";
import Title from "@/components/Title";
import SimpleNewsCard from "@/components/news/item/SimpleNewsCard";
import PopularNews from "@/components/news/PopularNews";
import DetailsNewsRow from "@/components/news/DetailsNewsRow";
import DetailsNews from "@/components/news/DetailsNews";
import DetailsNewsCol from "@/components/news/DetailsNewsCol";
import NewsCard from "@/components/news/item/NewsCard";
import Footer from '../components/Footer';
import {base_api_url} from "@/config/config";
import Header from '@/components/Header';
import RecentNews from "@/components/news/RecentNews";


const Home = async() =>{
  const news_data = await fetch(`${base_api_url}/api/all/news`,{
    next: {
      revalidate: 5,
    }
  });

  let news = await news_data?.json()
  console.log(news)
  news = news.news

  return (
    <div>
    <main >
      <div className="fixed top-0 left-0 w-full z-50 bg-white shadow">
            <Header />
            <HeadLines news={news}/>
      </div>
      <div className="h-[200px]"></div>

      <div className="max-w-[2000px] mx-auto">
        <div className="px-4 md:px-8 py-8">
          
          <div className="flex flex-wrap">
            <div className="w-full lg:w-6/12">
              <LatestNews/>

            </div>
            <div className="w-full lg:w-6/12 mt-5 lg:mt-5">
              <div className='flex w-full flex-col gap-y-[14px] pl-0 lg:pl-2'>
                <Title title="Teknologi"/>
                <div className='grid grid-cols-2 gap-[14px]'>
                  {
                    news["Technology"].map((item, i) => {
                      if (i < 4) {
                        return <SimpleNewsCard item={item} key={i} />
                      }
                    })
                  }
                </div>
              </div>
            </div>
          </div>

          <PopularNews type='Popular News'/>

          {/*first Section*/}
          <div className='w-full'>
            <div className='flex flex-wrap'>
              <div className='w-full lg:w-8/12'>
                  <DetailsNewsRow category='Sports' 
                  type="details_news" 
                  news={news["Sports"]}/>

                  <DetailsNews category= "Health"
                  news={news["Health"]}/>

              </div>
              <div className='w-full lg:w-4/12'>
                  <DetailsNewsCol 
                  category= "Education"
                  news={news["Education"]}
                  />
              </div>
            </div>
          </div>

          {/*2nd Section*/}
          <div className='w-full'>
            <div className='flex flex-wrap'>
              <div className='w-full lg:w-4/12'>
                <div className='pl-3'>
                  <DetailsNewsCol category= "International"
                  news={news["International"]}
                  
                  />
                </div>

              </div>
              <div className='w-full lg:w-8/12'>
                <div className='pl-3'>
                  <DetailsNewsRow category='Travel' 
                  news={news["Travel"]}
                  type="details_news"/>
                  <DetailsNews category= "Business"
                  news={news["Business"]}
                  
                  />
                </div>
                  
              </div>
            </div>
          </div>

          {/*3nd Section*/}
          <div className='w-full'>
            <div className='flex flex-wrap'>
              <div className='w-full lg:w-8/12'>
                  <DetailsNewsRow category='Technology'
                  news={news["Technology"]}
                  
                  type="details_news"/>
                  

              </div>
              <div className='w-full lg:w-4/12'>
                  <div className='pl-3 mt-4'>
                    <RecentNews/>
                  </div>
              </div>
            </div>
          </div>

          

        </div>
      </div>
    </main>
    </div>
  );
}

export default Home;
