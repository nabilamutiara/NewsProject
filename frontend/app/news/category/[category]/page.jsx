import Breadcrumb from '@/components/Breadcrumb';
import SimpleDetailsNewCard from '@/components/news/item/SimpleDetailsNewCard';
import RecentNews from '@/components/news/RecentNews';
import Search from '@/components/news/Search';
import React from 'react';
import Category from '@/components/Category';
import PopularNews from '@/components/news/PopularNews';

const page = () => {
    return (
        <div>
            <div className='bg-white shadow-sm py-4'>
                <div className='px-4 md:px-8 w-full'>
                    <Breadcrumb one="Category" two="Sports"/>
                </div>
            </div>
            <div className='bg-slate-200 w-full'>
                <div className='px-4 md:px-8 w-full py-8'>
                    <div className='flex flex-wrap'>
                        <div className='w-full xl:w-8/12'>
                            <div className='w-full pr-0 xl:pr-4'>
                                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                                    {
                                        [1,2,3,4,5,6].map((item,i)=>(
                                            <SimpleDetailsNewCard news={item} type="details_news" height={200}/>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                        <div className='w-full xl:w-4/12'>
                            <div className='w-full pl-0 xl:pl-4'>
                                <div className='flex flex-col gap-y-8'>
                                    <Search/>
                                    <RecentNews/>
                                    <div className='p-4 bg-white'>
                                        <Category titleStyle={"text-gray-700 font-bold"}/>
                                    </div>
                                </div>
                            
                            </div>  

                        </div>

                    </div>
                    <div className='pt-8 '>
                        <PopularNews/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;