import Breadcrumb from '@/components/Breadcrumb';
import SimpleDetailsNewCard from '@/components/news/item/SimpleDetailsNewCard';
import RecentNews from '@/components/news/RecentNews';
import Search from '@/components/news/Search';
import React from 'react';
import Category from '@/components/Category';
import PopularNews from '@/components/news/PopularNews';
import HeadLines from "@/components/HeadLines";
import Header from '@/components/Header';
import {base_api_url} from "@/config/config";
import parse from 'html-react-parser';
import RelatedNews from '@/components/news/RelatedNews';

const Details  = async ({params}) => {

    const {slug} = params

    const res = await fetch(`${base_api_url}/api/news/details/${slug}`, {
        next: {
            revalidate: 1
        }
    })

    const {news, relatedNews} = await res.json()


    return (
        <div className="max-w-[2000px] mx-auto">
            <div className="fixed top-0 left-0 w-full z-50 bg-white shadow">
                <Header />
                
            </div>
            <div className="h-[140px]"></div>
            <div className='bg-white shadow-sm py-4'>
                <div className='px-4 md:px-8 w-full'>
                    <Breadcrumb one={news?.category} two={news?.title}/>
                </div>
            </div>
            
            <div className=' w-full'>
                <div className='px-4 md:px-8 w-full py-8'>
                    <div className='flex flex-wrap'>
                        <div className='w-full xl:w-8/12'>
                            <div className='w-full pr-0 xl:pr-4'>
                                <div className='flex flex-col gap-y-5 bg-white'>
                                    <img src={news?.image} alt=""/>
                                    <div className='flex flex-col gap-y-4 px-6 pb-6'>
                                        <h3 className='text-sky-400 uppercase font-medium text-xl'>{news?.category}</h3>
                                        <h2 className='text-3xl text-gray-700 font-bold'>{news?.title}</h2>
                                        <div className='flex gap-x-2 text-xl font-normal text-slate-600 '>
                                            <span className='font-bold'>{news?.date}</span>
                                            <span className='font-bold'>{news?.writerName}</span>
                                        </div>

                                        <p>
                                            <div className="text-justify">
                                                {parse(news?.description || "")}
                                            </div>
                                        </p>
                                    </div>
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
                        <RelatedNews news={relatedNews} type='Related News'/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;