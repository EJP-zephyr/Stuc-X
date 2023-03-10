import egba from './../../assets/egba.jpg';
import arami from './../../assets/stuc-images/arami.jpg';
import jomalone from './../../assets/stuc-images/jomalone.jpg';
import lamer from './../../assets/stuc-images/lamer.jpg';
import santal from './../../assets/stuc-images/santal.jpg';
import origins from './../../assets/stuc-images/origins.jpg';
import smashbox from './../../assets/stuc-images/smashbox.jpg';

export default function Chat() {

    return (
        <div className="bg-[#0C0C0C] h-screen w-screen">
            <div className="flex justify-between p-8 bg-[#0C0C0C] h-[16%] border-b border-b-[#494949] items-center">
                <h1 className="text-[#7FD9CB] font-bold text-2xl ">STUC-X</h1>
                <div className="flex items-center">
                    <svg className="w-6 h-6 text-[#C2FCE0] mr-8 cursor-pointer" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.2501 7.5C21.2501 4.04822 18.4519 1.25 15.0001 1.25C11.5483 1.25 8.75009 4.04822 8.75009 7.5M21.2501 7.5H22.886C25.4931 7.5 26.7967 7.5 27.542 8.3327C28.2873 9.16539 28.1433 10.461 27.8554 13.0522L27.4856 16.3804C26.8979 21.6695 26.6041 24.3141 24.8243 25.907C23.0446 27.5 20.3631 27.5 15.0001 27.5C9.63709 27.5 6.95559 27.5 5.17585 25.907C3.3961 24.3141 3.10226 21.6695 2.51458 16.3804L2.14477 13.0522C1.85686 10.461 1.71291 9.16539 2.45821 8.3327C3.20351 7.5 4.50707 7.5 7.11419 7.5H8.75009M21.2501 7.5H8.75009M22.5001 12.5H7.50009" stroke="#C2FCE0" stroke-width="1.875" stroke-linecap="round"/></svg>

                    <svg className="h-6 w-6 text-[#C2FCE0] cursor-pointer" viewBox="0 0 21 21" xmlns="http://www.w3.org/2000/svg"><path d="m2.41547595 3.5h10.16904815c.9116644 0 1.6507144.73905002 1.6507144 1.65071443 0 .299182-.0813106.59273912-.2352385.84928557-.9815222 1.63587038-1.5 3.50773964-1.5 5.4154759v1.0845241c0 2.209139-1.790861 4-4 4h-2c-2.209139 0-4-1.790861-4-4v-1.0845241c0-1.90773626-.51847777-3.77960552-1.5-5.4154759-.46904747-.78174578-.2155554-1.79571405.56619038-2.26476152.25654645-.15392786.55010357-.23523848.84928557-.23523848zm2.58452405-1.5c.66666667-1 1.5-1.5 2.5-1.5s1.83333333.5 2.5 1.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" transform="matrix(-1 0 0 -1 18 19)"/></svg>

                    <div className="flex rounded-3xl ml-9 cursor-pointer items-center justify-evenly p-2 bg-[rgba(220,220,220,0.05)]">
                        <svg className="h-3 w-3 text-[#C2FCE0]" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.00002 9.30001C8.30002 9.30001 7.60002 9.03001 7.07002 8.50001L0.55002 1.98001C0.26002 1.69001 0.26002 1.21001 0.55002 0.920015C0.84002 0.630015 1.32002 0.630015 1.61002 0.920015L8.13002 7.44001C8.61002 7.92001 9.39002 7.92001 9.87002 7.44001L16.39 0.920015C16.68 0.630015 17.16 0.630015 17.45 0.920015C17.74 1.21001 17.74 1.69001 17.45 1.98001L10.93 8.50001C10.4 9.03001 9.70002 9.30001 9.00002 9.30001Z" fill="#C2FCE0"/></svg>
                        <p className="mx-2 text-[#C2FCE0]">David</p>
                        <img src={egba} className="rounded-full h-6 w-6"  alt="profile picture" />
                    </div>
                </div>
            </div>
            <section className='flex h-[84%] bg-[#0C0C0C]'>
                <div className='bg-[rgba(73,73,73,0.29)] border border-[#494949] rounded-lg h-[90%] w-[60%] m-5 flex flex-col p-6'>
                    <div className='w-full h-full' >
                        <p className='bg-[rgba(84,248,169,0.08)] ml-auto mb-6 w-80 r-0 font-light text-white p-5 rounded-t-3xl rounded-bl-3xl'>Help me suggest best skincare routine and facial therapy, i have burns and tannings on my face and skin</p>
                        <p className='bg-[#171717] w-80 mr-4 font-light text-white rounded-3xl pb-36 pt-5 pl-5'>Generating response...</p>
                    </div>
                    <input type='text' className='border-[#494949] bg-[rgba(73,73,73,0.29)] border p-3 font-thin text-[#f5f9fc] rounded-2xl w-full self-end justify-self-end focus:outline-none' placeholder='Enter your message here' />
                </div>
                <div className='m-5 font-thin'>
                    <h3 className='text-white mb-5'>Recommended products</h3>
                    <div className='grid grid-cols-2 gap-14 h-[90%] overflow-auto scrollbar-thin scrollbar-thumb-gray-900 p-3'>
                        <div>
                            <img src={lamer} width='180px' className='rounded-3xl' />
                            <div className='mt-2'>
                                <h2 className='text-center text-white'>La Mer Cream</h2>
                                <div className='flex justify-center'>
                                    <p className='text-center text-white mr-2'>$43</p><s className='text-white'>$69</s>
                                </div>
                            </div>
                        </div>
                        <div>
                            <img src={santal} width='180px' className='rounded-3xl' />
                            <div className='mt-2'>
                                <h2 className='text-center text-white'>Santal 33</h2>
                                <div className='flex justify-center'>
                                    <p className='text-center text-white mr-2'>$43</p><s className='text-white'>$69</s>
                                </div>
                            </div>
                        </div>
                        <div>
                            <img src={arami} width='180px' className='rounded-3xl' />
                            <div className='mt-2'>
                                <h2 className='text-center text-white'>Aramis</h2>
                                <div className='flex justify-center'>
                                    <p className='text-center text-white mr-2'>$43</p><s className='text-white'>$69</s>
                                </div>
                            </div>
                        </div>
                        <div>
                            <img src={origins} width='180px' className='rounded-3xl' />
                            <div className='mt-2'>
                                <h2 className='text-center text-white'>Origin</h2>
                                <div className='flex justify-center'>
                                    <p className='text-center text-white mr-2'>$43</p><s className='text-white'>$69</s>
                                </div>
                            </div>
                        </div>
                        <div>
                            <img src={jomalone} width='180px' className='rounded-3xl' />
                            <div className='mt-2'>
                                <h2 className='text-center text-white'>Jomalon</h2>
                                <div className='flex justify-center'>
                                    <p className='text-center text-white mr-2'>$43</p><s className='text-white'>$69</s>
                                </div>
                            </div>
                        </div>
                        <div>
                            <img src={smashbox} width='180px' className='rounded-3xl' />
                            <div className='mt-2'>
                                <h2 className='text-center text-white'>Smashbox</h2>
                                <div className='flex justify-center'>
                                    <p className='text-center text-white mr-2'>$43</p><s className='text-white'>$69</s>
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
                
            </section>
        </div>
    )
}