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

export default function Home() {
  return (
    <div>
    <main >
      <HeadLines/>
      <div className="bg-slate-100">
        <div className="px-4 md:px-8 py-8">
          
          <div className="flex flex-wrap">
            <div className="w-full lg:w-6/12">
              <LatestNews/>

            </div>
            <div className="w-full lg:w-6/12 mt-5 lg:mt-5">
              <div className='flex w-full flex-col gap-y-[14px] pl-0 lg:pl-2'>
                <div className='text-xl font-bold text-gray-800 relative pl-4'>
                    <span className='absolute inset-y-0 left-0 w-1 bg-blue-600 rounded-sm'></span>
                    Technology
                </div>
                <div className='grid grid-cols-2 gap-[14px]'>
                  {
                    [1,2,3,4].map((item, i)=><SimpleNewsCard item={item} key={i} />)
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
                  <DetailsNewsRow category='Sports' type="details_news"/>
                  <DetailsNews category= "Health"/>

              </div>
              <div className='w-full lg:w-4/12'>
                  <DetailsNewsCol category= "Education"/>
              </div>
            </div>
          </div>

          {/*2nd Section*/}
          <div className='w-full'>
            <div className='flex flex-wrap'>
              <div className='w-full lg:w-4/12'>
                <div className='pl-3'>
                  <DetailsNewsCol category= "Politics"/>
                </div>

              </div>
              <div className='w-full lg:w-8/12'>
                <div className='pl-3'>
                  <DetailsNewsRow category='Travel' type="details_news"/>
                  <DetailsNews category= "International"/>
                </div>
                  
              </div>
            </div>
          </div>

          {/*3nd Section*/}
          <div className='w-full'>
            <div className='flex flex-wrap'>
              <div className='w-full lg:w-8/12'>
                  <DetailsNewsRow category='Technology' type="details_news"/>
                  

              </div>
              <div className='w-full lg:w-4/12'>
                  <div className='pl-3 mt-4'>
                    <Title title='Recent News'/>
                    <div className='grid grid-cols-1 gap-y-[8px] mt-2'>
                      {
                        [1,2,3,4].map((item, i)=>(
                          <NewsCard item={item} key={i}/>
                        ))
                      }
                    </div>
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
