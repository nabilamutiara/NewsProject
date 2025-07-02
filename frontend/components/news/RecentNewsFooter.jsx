import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {base_api_url} from '@/config/config';

const RecentNewsFooter = async () => {
     const res = await fetch(`${base_api_url}/api/recent/news`,{
        next: {
            revalidate: 1
        }
    })
   
    const {news} = await res.json()
    return (
        <div className='w-full flex flex-col gap-y-[14px]'>
           <div className={`text-xl font-bold text-black relative `}>
                    Recent News
            </div> 
            <div className='grid grid-cols-1 gap-y-2 pt-1'>
                {
                    news && news.length > 0 && news.map((r,i)=>{
                        if (i < 4) {
                            return <Link key={i} href={`/news/${r.slug}`} className='flex w-full'>
                                <div className='group relative overflow-hidden w-[80px] h-[65px]'>
                                    <div className='w-[80px] h-[65px] block group-hover:scale-[1.1] transition-all duration-[1s]'>
                                        <Image
                                        className=''
                                        layout='fill'
                                        src={r.image}
                                        alt='images'
                                        />
                                        <div className='w-full h-full block absolute left-0 top-0 invisible group-hover:visible bg-white cursor-pointer opacity-5 transition-all duration-300' href={"#"}>

                                        </div>
                                    </div>
                                    
                                </div>
                                <div className='w-[calc(100%-90px)] pl-2'>
                                    <div className='flex flex-col gap-y-1'>
                                        <h2 className='text-sm font-semibold text-black hover:text-gray-500'>
                                            {r.title}
                                        </h2>
                                        <div className='flex gap-x-2 text-xs font-normal text-gray-500'>
                                            <span>{r.date}</span>
                                            <span>{r.writerName}</span>

                                        </div>
                                    </div>
                                </div>
                                
                            </Link>
                        }
                    })
                }
            </div>
        </div>
    );
};

export default RecentNewsFooter;