import avatar from './../../assets/avatar.jpg';
import Webcam from "react-webcam";
import eye1 from './../../assets/stuc-images/eye1.jpg';
import eye2 from './../../assets/stuc-images/eye2.jpg';
import eye3 from './../../assets/stuc-images/eye3.jpg';
import { NavLink } from 'react-router-dom';


export default function Camera() {
    const videoConstraints = {
        width: 300,
        height: 500,
        facingMode: "user"
      };
    
    return (
        <div className='bg-[#0C0C0C] h-screen w-screen'>
            <div className="flex justify-between p-8 bg-[#0C0C0C] h-[16%] border-b border-b-[#494949] items-center">
                <h1 className="text-[#7FD9CB] font-bold text-2xl "><NavLink to='/signin'>STUC-X</NavLink></h1>
                <div className="flex items-center">
                    <svg className="w-6 h-6 text-[#C2FCE0] mr-8 cursor-pointer" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.2501 7.5C21.2501 4.04822 18.4519 1.25 15.0001 1.25C11.5483 1.25 8.75009 4.04822 8.75009 7.5M21.2501 7.5H22.886C25.4931 7.5 26.7967 7.5 27.542 8.3327C28.2873 9.16539 28.1433 10.461 27.8554 13.0522L27.4856 16.3804C26.8979 21.6695 26.6041 24.3141 24.8243 25.907C23.0446 27.5 20.3631 27.5 15.0001 27.5C9.63709 27.5 6.95559 27.5 5.17585 25.907C3.3961 24.3141 3.10226 21.6695 2.51458 16.3804L2.14477 13.0522C1.85686 10.461 1.71291 9.16539 2.45821 8.3327C3.20351 7.5 4.50707 7.5 7.11419 7.5H8.75009M21.2501 7.5H8.75009M22.5001 12.5H7.50009" stroke="#C2FCE0" stroke-width="1.875" stroke-linecap="round"/></svg>

                    <svg className="h-6 w-6 text-[#C2FCE0] cursor-pointer" viewBox="0 0 21 21" xmlns="http://www.w3.org/2000/svg"><path d="m2.41547595 3.5h10.16904815c.9116644 0 1.6507144.73905002 1.6507144 1.65071443 0 .299182-.0813106.59273912-.2352385.84928557-.9815222 1.63587038-1.5 3.50773964-1.5 5.4154759v1.0845241c0 2.209139-1.790861 4-4 4h-2c-2.209139 0-4-1.790861-4-4v-1.0845241c0-1.90773626-.51847777-3.77960552-1.5-5.4154759-.46904747-.78174578-.2155554-1.79571405.56619038-2.26476152.25654645-.15392786.55010357-.23523848.84928557-.23523848zm2.58452405-1.5c.66666667-1 1.5-1.5 2.5-1.5s1.83333333.5 2.5 1.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" transform="matrix(-1 0 0 -1 18 19)"/></svg>

                    <div className="flex rounded-3xl ml-9 cursor-pointer items-center justify-evenly p-2 bg-[rgba(220,220,220,0.05)]">
                        <svg className="h-3 w-3 text-[#C2FCE0]" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.00002 9.30001C8.30002 9.30001 7.60002 9.03001 7.07002 8.50001L0.55002 1.98001C0.26002 1.69001 0.26002 1.21001 0.55002 0.920015C0.84002 0.630015 1.32002 0.630015 1.61002 0.920015L8.13002 7.44001C8.61002 7.92001 9.39002 7.92001 9.87002 7.44001L16.39 0.920015C16.68 0.630015 17.16 0.630015 17.45 0.920015C17.74 1.21001 17.74 1.69001 17.45 1.98001L10.93 8.50001C10.4 9.03001 9.70002 9.30001 9.00002 9.30001Z" fill="#C2FCE0"/></svg>
                        <p className="mx-2 text-[#C2FCE0]">David</p>
                        <img src={avatar} className="rounded-full h-6 w-6"  alt="profile picture" />
                    </div>
                </div>
            </div>
            <div className='flex w-full justify-between'>
                <div className='bg-[rgba(255,255,255,0.03)] w-fit pr-40 m-3 rounded-lg border border-[#494949] p-5'>
                    <div className='px-2 py-3 mb-6'>
                        <button className='flex items-center'>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.3783 1.42229e-06C3.3905 2.13754e-06 3.40273 2.8528e-06 3.415 2.8528e-06L5.62171 1.42229e-06C6.01734 -2.18235e-05 6.37336 -4.26844e-05 6.66942 0.0245434C6.98657 0.0508816 7.32336 0.110525 7.65244 0.281469C8.10905 0.518658 8.48135 0.890959 8.71854 1.34757C8.88948 1.67665 8.94912 2.01343 8.97546 2.33059C9.00005 2.62664 9.00003 2.98265 9 3.37828V7.62172C9.00003 8.01735 9.00005 8.37337 8.97546 8.66942C8.94912 8.98657 8.88948 9.32336 8.71854 9.65244C8.48135 10.109 8.10905 10.4813 7.65244 10.7185C7.32336 10.8895 6.98657 10.9491 6.66942 10.9755C6.37337 11 6.01735 11 5.62172 11H3.37828C2.98265 11 2.62664 11 2.33059 10.9755C2.01344 10.9491 1.67665 10.8895 1.34757 10.7185C0.890958 10.4813 0.518658 10.109 0.281469 9.65244C0.110525 9.32336 0.0508816 8.98657 0.0245434 8.66942C-4.26844e-05 8.37336 -2.18235e-05 8.01735 1.42229e-06 7.62171L2.8528e-06 3.415C2.8528e-06 3.40273 2.13754e-06 3.3905 1.42229e-06 3.3783C-2.18235e-05 2.98266 -4.26844e-05 2.62664 0.0245434 2.33059C0.0508816 2.01343 0.110525 1.67665 0.281469 1.34757C0.518658 0.890959 0.890959 0.518658 1.34757 0.281469C1.67665 0.110525 2.01343 0.0508816 2.33059 0.0245434C2.62664 -4.26844e-05 2.98266 -2.18235e-05 3.3783 1.42229e-06ZM2.27752 2.05297C2.27226 2.05488 2.27001 2.05604 2.26952 2.0563C2.17819 2.10373 2.10373 2.17819 2.0563 2.26952C2.05604 2.27001 2.05488 2.27226 2.05297 2.27752C2.05098 2.28299 2.04767 2.29312 2.04372 2.30961C2.03541 2.34427 2.02554 2.40145 2.01768 2.49611C2.00081 2.69932 2 2.9711 2 3.415V7.585C2 8.02891 2.00081 8.30068 2.01768 8.5039C2.02554 8.59855 2.03541 8.65574 2.04372 8.6904C2.04767 8.70688 2.05098 8.71701 2.05297 8.72249C2.05488 8.72775 2.05604 8.72999 2.0563 8.73049C2.10373 8.82181 2.17819 8.89627 2.26952 8.94371C2.27001 8.94397 2.27226 8.94513 2.27752 8.94704C2.28299 8.94903 2.29312 8.95234 2.30961 8.95629C2.34427 8.96459 2.40145 8.97446 2.49611 8.98232C2.69932 8.9992 2.9711 9 3.415 9H5.585C6.02891 9 6.30068 8.9992 6.5039 8.98232C6.59855 8.97446 6.65574 8.96459 6.6904 8.95629C6.70688 8.95234 6.71701 8.94903 6.72249 8.94704C6.72775 8.94513 6.72999 8.94397 6.73049 8.94371C6.82181 8.89627 6.89627 8.82181 6.94371 8.73049C6.94397 8.72999 6.94513 8.72775 6.94704 8.72249C6.94903 8.71701 6.95234 8.70688 6.95629 8.6904C6.96459 8.65574 6.97446 8.59855 6.98232 8.5039C6.9992 8.30068 7 8.02891 7 7.585V3.415C7 2.9711 6.9992 2.69932 6.98232 2.49611C6.97446 2.40145 6.96459 2.34427 6.95629 2.30961C6.95234 2.29312 6.94903 2.28299 6.94704 2.27752C6.94513 2.27226 6.94397 2.27001 6.94371 2.26952C6.89627 2.17819 6.82181 2.10373 6.73049 2.0563C6.72999 2.05604 6.72775 2.05488 6.72249 2.05297C6.71701 2.05098 6.70688 2.04767 6.6904 2.04372C6.65574 2.03541 6.59855 2.02554 6.5039 2.01768C6.30068 2.00081 6.02891 2 5.585 2H3.415C2.9711 2 2.69932 2.00081 2.49611 2.01768C2.40145 2.02554 2.34427 2.03541 2.30961 2.04372C2.29312 2.04767 2.28299 2.05098 2.27752 2.05297ZM14.3783 1.42229e-06H16.6217C17.0173 -2.18235e-05 17.3734 -4.26844e-05 17.6694 0.0245434C17.9866 0.0508816 18.3234 0.110525 18.6524 0.281469C19.109 0.518659 19.4813 0.89096 19.7185 1.34757C19.8895 1.67665 19.9491 2.01343 19.9755 2.33059C20 2.62665 20 2.98267 20 3.37832V3.62168C20 4.01733 20 4.37336 19.9755 4.66942C19.9491 4.98657 19.8895 5.32336 19.7185 5.65244C19.4813 6.10905 19.109 6.48135 18.6524 6.71854C18.3234 6.88948 17.9866 6.94912 17.6694 6.97546C17.3734 7.00005 17.0173 7.00003 16.6217 7H14.3783C13.9827 7.00003 13.6266 7.00005 13.3306 6.97546C13.0134 6.94912 12.6766 6.88948 12.3476 6.71854C11.891 6.48135 11.5187 6.10905 11.2815 5.65244C11.1105 5.32336 11.0509 4.98657 11.0245 4.66942C11 4.37337 11 4.01735 11 3.62172V3.37828C11 2.98265 11 2.62664 11.0245 2.33059C11.0509 2.01344 11.1105 1.67665 11.2815 1.34757C11.5187 0.890958 11.891 0.518658 12.3476 0.281469C12.6766 0.110525 13.0134 0.0508816 13.3306 0.0245434C13.6266 -4.26844e-05 13.9827 -2.18235e-05 14.3783 1.42229e-06ZM13.2775 2.05297C13.2723 2.05488 13.27 2.05604 13.2695 2.0563C13.1782 2.10373 13.1037 2.17819 13.0563 2.26952C13.056 2.27001 13.0549 2.27226 13.053 2.27752C13.051 2.28299 13.0477 2.29312 13.0437 2.30961C13.0354 2.34427 13.0255 2.40145 13.0177 2.49611C13.0008 2.69932 13 2.9711 13 3.415V3.585C13 4.02891 13.0008 4.30068 13.0177 4.5039C13.0255 4.59855 13.0354 4.65574 13.0437 4.6904C13.0477 4.70688 13.051 4.71701 13.053 4.72249C13.0549 4.72775 13.056 4.72999 13.0563 4.73049C13.1037 4.82181 13.1782 4.89627 13.2695 4.94371C13.27 4.94397 13.2723 4.94512 13.2775 4.94704C13.283 4.94903 13.2931 4.95234 13.3096 4.95629C13.3443 4.96459 13.4015 4.97446 13.4961 4.98232C13.6993 4.9992 13.9711 5 14.415 5H16.585C17.0289 5 17.3007 4.9992 17.5039 4.98232C17.5986 4.97446 17.6557 4.96459 17.6904 4.95629C17.7069 4.95234 17.717 4.94903 17.7225 4.94704C17.7277 4.94512 17.73 4.94397 17.7305 4.94371C17.8218 4.89627 17.8963 4.82181 17.9437 4.73049C17.944 4.72999 17.9451 4.72775 17.947 4.72249C17.949 4.71701 17.9523 4.70688 17.9563 4.6904C17.9646 4.65573 17.9745 4.59855 17.9823 4.5039C17.9992 4.30068 18 4.02891 18 3.585V3.415C18 2.9711 17.9992 2.69932 17.9823 2.49611C17.9745 2.40145 17.9646 2.34427 17.9563 2.30961C17.9523 2.29312 17.949 2.28299 17.947 2.27752C17.9451 2.27226 17.944 2.27001 17.9437 2.26952C17.8963 2.17819 17.8218 2.10373 17.7305 2.0563C17.73 2.05604 17.7277 2.05488 17.7225 2.05297C17.717 2.05098 17.7069 2.04767 17.6904 2.04372C17.6557 2.03541 17.5986 2.02554 17.5039 2.01768C17.3007 2.00081 17.0289 2 16.585 2H14.415C13.9711 2 13.6993 2.00081 13.4961 2.01768C13.4015 2.02554 13.3443 2.03541 13.3096 2.04372C13.2931 2.04767 13.283 2.05098 13.2775 2.05297ZM14.3783 9H16.6217C17.0173 8.99998 17.3734 8.99996 17.6694 9.02454C17.9866 9.05088 18.3234 9.11052 18.6524 9.28147C19.109 9.51866 19.4813 9.89096 19.7185 10.3476C19.8895 10.6766 19.9491 11.0134 19.9755 11.3306C20 11.6266 20 11.9827 20 12.3783V16.6217C20 17.0173 20 17.3734 19.9755 17.6694C19.9491 17.9866 19.8895 18.3234 19.7185 18.6524C19.4813 19.109 19.109 19.4813 18.6524 19.7185C18.3234 19.8895 17.9866 19.9491 17.6694 19.9755C17.3734 20 17.0173 20 16.6217 20H14.3783C13.9827 20 13.6266 20 13.3306 19.9755C13.0134 19.9491 12.6766 19.8895 12.3476 19.7185C11.891 19.4813 11.5187 19.109 11.2815 18.6524C11.1105 18.3234 11.0509 17.9866 11.0245 17.6694C11 17.3734 11 17.0174 11 16.6217V12.3783C11 11.9827 11 11.6266 11.0245 11.3306C11.0509 11.0134 11.1105 10.6766 11.2815 10.3476C11.5187 9.89096 11.891 9.51866 12.3476 9.28147C12.6766 9.11052 13.0134 9.05088 13.3306 9.02454C13.6266 8.99996 13.9827 8.99998 14.3783 9ZM13.2775 11.053C13.2723 11.0549 13.27 11.056 13.2695 11.0563C13.1782 11.1037 13.1037 11.1782 13.0563 11.2695C13.056 11.27 13.0549 11.2723 13.053 11.2775C13.051 11.283 13.0477 11.2931 13.0437 11.3096C13.0354 11.3443 13.0255 11.4015 13.0177 11.4961C13.0008 11.6993 13 11.9711 13 12.415V16.585C13 17.0289 13.0008 17.3007 13.0177 17.5039C13.0255 17.5986 13.0354 17.6557 13.0437 17.6904C13.0477 17.7069 13.051 17.717 13.053 17.7225C13.0549 17.7277 13.056 17.73 13.0563 17.7305C13.1037 17.8218 13.1782 17.8963 13.2695 17.9437C13.27 17.944 13.2723 17.9451 13.2775 17.947C13.283 17.949 13.2931 17.9523 13.3096 17.9563C13.3443 17.9646 13.4015 17.9745 13.4961 17.9823C13.6993 17.9992 13.9711 18 14.415 18H16.585C17.0289 18 17.3007 17.9992 17.5039 17.9823C17.5986 17.9745 17.6557 17.9646 17.6904 17.9563C17.7069 17.9523 17.717 17.949 17.7225 17.947C17.7277 17.9451 17.73 17.944 17.7305 17.9437C17.8218 17.8963 17.8963 17.8218 17.9437 17.7305C17.944 17.73 17.9451 17.7277 17.947 17.7225C17.949 17.717 17.9523 17.7069 17.9563 17.6904C17.9646 17.6557 17.9745 17.5986 17.9823 17.5039C17.9992 17.3007 18 17.0289 18 16.585V12.415C18 11.9711 17.9992 11.6993 17.9823 11.4961C17.9745 11.4015 17.9646 11.3443 17.9563 11.3096C17.9523 11.2931 17.949 11.283 17.947 11.2775C17.9451 11.2723 17.944 11.27 17.9437 11.2695C17.8963 11.1782 17.8218 11.1037 17.7305 11.0563C17.73 11.056 17.7277 11.0549 17.7225 11.053C17.717 11.051 17.7069 11.0477 17.6904 11.0437C17.6557 11.0354 17.5986 11.0255 17.5039 11.0177C17.3007 11.0008 17.0289 11 16.585 11H14.415C13.9711 11 13.6993 11.0008 13.4961 11.0177C13.4015 11.0255 13.3443 11.0354 13.3096 11.0437C13.2931 11.0477 13.283 11.051 13.2775 11.053ZM3.37828 13H5.62172C6.01735 13 6.37337 13 6.66942 13.0245C6.98657 13.0509 7.32336 13.1105 7.65244 13.2815C8.10905 13.5187 8.48135 13.891 8.71854 14.3476C8.88948 14.6766 8.94912 15.0134 8.97546 15.3306C9.00005 15.6266 9.00003 15.9827 9 16.3783V16.6217C9.00003 17.0174 9.00005 17.3734 8.97546 17.6694C8.94912 17.9866 8.88948 18.3234 8.71854 18.6524C8.48135 19.109 8.10905 19.4813 7.65244 19.7185C7.32336 19.8895 6.98657 19.9491 6.66942 19.9755C6.37336 20 6.01733 20 5.62168 20H3.37832C2.98267 20 2.62665 20 2.33059 19.9755C2.01343 19.9491 1.67665 19.8895 1.34757 19.7185C0.89096 19.4813 0.518659 19.109 0.281469 18.6524C0.110525 18.3234 0.0508816 17.9866 0.0245434 17.6694C-4.26844e-05 17.3734 -2.18235e-05 17.0173 1.42229e-06 16.6217V16.3783C-2.18235e-05 15.9827 -4.26844e-05 15.6266 0.0245434 15.3306C0.0508816 15.0134 0.110525 14.6766 0.281469 14.3476C0.518658 13.891 0.890958 13.5187 1.34757 13.2815C1.67665 13.1105 2.01344 13.0509 2.33059 13.0245C2.62664 13 2.98265 13 3.37828 13ZM2.27752 15.053C2.27226 15.0549 2.27001 15.056 2.26952 15.0563C2.17819 15.1037 2.10373 15.1782 2.0563 15.2695C2.05604 15.27 2.05488 15.2723 2.05297 15.2775C2.05098 15.283 2.04767 15.2931 2.04372 15.3096C2.03541 15.3443 2.02554 15.4015 2.01768 15.4961C2.00081 15.6993 2 15.9711 2 16.415V16.585C2 17.0289 2.00081 17.3007 2.01768 17.5039C2.02554 17.5986 2.03541 17.6557 2.04372 17.6904C2.04767 17.7069 2.05098 17.717 2.05297 17.7225C2.05488 17.7277 2.05604 17.73 2.0563 17.7305C2.10373 17.8218 2.17819 17.8963 2.26952 17.9437C2.27001 17.944 2.27226 17.9451 2.27752 17.947C2.28299 17.949 2.29312 17.9523 2.30961 17.9563C2.34427 17.9646 2.40145 17.9745 2.49611 17.9823C2.69932 17.9992 2.9711 18 3.415 18H5.585C6.02891 18 6.30068 17.9992 6.5039 17.9823C6.59855 17.9745 6.65573 17.9646 6.6904 17.9563C6.70688 17.9523 6.71701 17.949 6.72249 17.947C6.72775 17.9451 6.72999 17.944 6.73049 17.9437C6.82181 17.8963 6.89627 17.8218 6.94371 17.7305C6.94397 17.73 6.94513 17.7277 6.94704 17.7225C6.94903 17.717 6.95234 17.7069 6.95629 17.6904C6.96459 17.6557 6.97446 17.5986 6.98232 17.5039C6.9992 17.3007 7 17.0289 7 16.585V16.415C7 15.9711 6.9992 15.6993 6.98232 15.4961C6.97446 15.4015 6.96459 15.3443 6.95629 15.3096C6.95234 15.2931 6.94903 15.283 6.94704 15.2775C6.94513 15.2723 6.94397 15.27 6.94371 15.2695C6.89627 15.1782 6.82181 15.1037 6.73049 15.0563C6.72999 15.056 6.72775 15.0549 6.72249 15.053C6.71701 15.051 6.70688 15.0477 6.6904 15.0437C6.65574 15.0354 6.59855 15.0255 6.5039 15.0177C6.30068 15.0008 6.02891 15 5.585 15H3.415C2.9711 15 2.69932 15.0008 2.49611 15.0177C2.40145 15.0255 2.34427 15.0354 2.30961 15.0437C2.29312 15.0477 2.28299 15.051 2.27752 15.053Z" fill="#84828A"/></svg>
                            <p className='ml-4 text-[#84828A] text-sm font-thin'>Dashboard</p>

                        </button>
                    </div>
                    <div className='px-2 py-3 bg-[#D9D9D9]  mb-6 rounded-lg w-[100%]'>
                        <button className='flex items-center'>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.5 2C3.11929 2 2 3.11929 2 4.5V5C2 5.55228 1.55228 6 1 6C0.447715 6 0 5.55228 0 5V4.5C0 2.01472 2.01472 0 4.5 0H5C5.55228 0 6 0.447715 6 1C6 1.55228 5.55228 2 5 2H4.5Z" fill="#1A1722"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.95984 4C8.29397 3.99998 7.73444 3.99997 7.27657 4.03738C6.79785 4.07649 6.34289 4.16143 5.91103 4.38148C5.25247 4.71703 4.71703 5.25247 4.38148 5.91103C4.16143 6.34289 4.07649 6.79785 4.03738 7.27657C4.01958 7.49452 4.01025 7.73549 4.00536 8H2C1.44772 8 1 8.44771 1 9C1 9.55229 1.44772 10 2 10H18C18.5523 10 19 9.55229 19 9C19 8.44771 18.5523 8 18 8H15.9946C15.9898 7.73549 15.9804 7.49451 15.9626 7.27657C15.9235 6.79785 15.8386 6.34289 15.6185 5.91103C15.283 5.25247 14.7475 4.71703 14.089 4.38148C13.6571 4.16143 13.2021 4.07649 12.7234 4.03738C12.2656 3.99997 11.706 3.99998 11.0402 4H8.95984ZM13.9943 8C13.99 7.7843 13.9825 7.60112 13.9693 7.43944C13.9403 7.0844 13.889 6.92194 13.8365 6.81901C13.6927 6.53677 13.4632 6.3073 13.181 6.16349C13.0781 6.11105 12.9156 6.05975 12.5606 6.03074C12.1938 6.00078 11.7166 6 11 6H9C8.28343 6 7.80615 6.00078 7.43944 6.03074C7.0844 6.05975 6.92194 6.11105 6.81901 6.16349C6.53677 6.3073 6.3073 6.53677 6.16349 6.81901C6.11105 6.92194 6.05975 7.0844 6.03074 7.43944C6.01753 7.60112 6.00999 7.7843 6.00569 8H13.9943Z" fill="#1A1722"/>
                            <path d="M12.0757 16L8.95984 16C8.29405 16 7.7344 16 7.27657 15.9626C6.79785 15.9235 6.34289 15.8386 5.91103 15.6185C5.25247 15.283 4.71703 14.7475 4.38148 14.089C4.34482 14.017 4.32528 13.9835 4.29997 13.9401C4.28429 13.9132 4.26639 13.8825 4.24083 13.8365C4.17247 13.7135 4.09846 13.5585 4.05426 13.342C4.01816 13.1651 4.00895 12.9784 4.00455 12.795C4 12.6058 4 12.3522 4 12.0159V12C4 11.4477 4.44772 11 5 11C5.55229 11 6 11.4477 6 12C6 12.3558 6.00007 12.5848 6.00397 12.7469C6.0058 12.823 6.00837 12.872 6.01047 12.9021C6.04313 12.9585 6.10631 13.0688 6.16349 13.181C6.3073 13.4632 6.53677 13.6927 6.81901 13.8365C6.92194 13.889 7.0844 13.9403 7.43944 13.9693C7.80615 13.9992 8.28343 14 9 14H12C12.5027 14 12.6376 13.9969 12.7347 13.9815C13.3765 13.8799 13.8799 13.3765 13.9815 12.7347C13.9969 12.6376 14 12.5027 14 12C14 11.4477 14.4477 11 15 11C15.5523 11 16 11.4477 16 12L16 12.0757C16.0002 12.4657 16.0003 12.7734 15.9569 13.0475C15.7197 14.5451 14.5451 15.7197 13.0475 15.9569C12.7734 16.0003 12.4657 16.0002 12.0757 16Z" fill="#1A1722"/>
                            <path d="M20 15C20 14.4477 19.5523 14 19 14C18.4477 14 18 14.4477 18 15V15.5C18 16.8807 16.8807 18 15.5 18H15C14.4477 18 14 18.4477 14 19C14 19.5523 14.4477 20 15 20H15.5C17.9853 20 20 17.9853 20 15.5V15Z" fill="#1A1722"/>
                            <path d="M14 1C14 0.447715 14.4477 0 15 0H15.5C17.9853 0 20 2.01472 20 4.5V5C20 5.55228 19.5523 6 19 6C18.4477 6 18 5.55228 18 5V4.5C18 3.11929 16.8807 2 15.5 2H15C14.4477 2 14 1.55228 14 1Z" fill="#1A1722"/>
                            <path d="M2 15C2 14.4477 1.55228 14 1 14C0.447715 14 0 14.4477 0 15V15.5C0 17.9853 2.01472 20 4.5 20H5C5.55228 20 6 19.5523 6 19C6 18.4477 5.55228 18 5 18H4.5C3.11929 18 2 16.8807 2 15.5V15Z" fill="#1A1722"/></svg>

                            <p className='ml-4 text-sm font-thin'>Scan</p>

                        </button>
                    </div>
                    <div className='px-2 py-3 mb-6'>
                        <button className='flex items-center'>
                            <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 13C4 12.4477 4.44772 12 5 12H7C7.55229 12 8 12.4477 8 13C8 13.5523 7.55229 14 7 14H5C4.44772 14 4 13.5523 4 13Z" fill="#84828A"/>
                            <path d="M10 12C9.44772 12 9 12.4477 9 13C9 13.5523 9.44772 14 10 14H11C11.5523 14 12 13.5523 12 13C12 12.4477 11.5523 12 11 12H10Z" fill="#84828A"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.788 4.24425e-07C4.96948 -1.23311e-05 4.29393 -2.28584e-05 3.74393 0.0456519C3.17258 0.0931001 2.64774 0.194963 2.1561 0.450348C1.42553 0.82985 0.82985 1.42553 0.450348 2.1561C0.194963 2.64774 0.0931001 3.17258 0.0456519 3.74393C-2.28584e-05 4.29393 -1.23311e-05 4.96946 4.24425e-07 5.78798V12.212C-1.23311e-05 13.0305 -2.28584e-05 13.7061 0.0456519 14.2561C0.0931001 14.8274 0.194963 15.3523 0.450348 15.8439C0.82985 16.5745 1.42553 17.1702 2.1561 17.5497C2.64774 17.805 3.17258 17.9069 3.74393 17.9544C4.29394 18 4.96949 18 5.78803 18H16.212C17.0305 18 17.7061 18 18.2561 17.9544C18.8274 17.9069 19.3523 17.805 19.8439 17.5497C20.5745 17.1702 21.1702 16.5745 21.5497 15.8439C21.805 15.3523 21.9069 14.8274 21.9544 14.2561C22 13.7061 22 13.0305 22 12.212V5.78802C22 4.96949 22 4.29394 21.9544 3.74393C21.9069 3.17258 21.805 2.64774 21.5497 2.1561C21.1702 1.42553 20.5745 0.82985 19.8439 0.450348C19.3523 0.194963 18.8274 0.0931 18.2561 0.0456519C17.7061 -2.28584e-05 17.0305 -1.23311e-05 16.212 4.24425e-07H5.788ZM3.07805 2.22517C3.23663 2.1428 3.46402 2.07578 3.90945 2.03879C4.36686 2.00081 4.95898 2 5.83 2H16.17C17.041 2 17.6331 2.00081 18.0906 2.03879C18.536 2.07578 18.7634 2.1428 18.922 2.22517C19.2872 2.41493 19.5851 2.71277 19.7748 3.07805C19.8572 3.23663 19.9242 3.46402 19.9612 3.90945C19.9857 4.20418 19.9947 4.55484 19.9981 5H2.00194C2.00528 4.55484 2.01431 4.20418 2.03879 3.90945C2.07578 3.46402 2.1428 3.23663 2.22517 3.07805C2.41493 2.71277 2.71277 2.41493 3.07805 2.22517ZM2 7V12.17C2 13.041 2.00081 13.6331 2.03879 14.0906C2.07578 14.536 2.1428 14.7634 2.22517 14.922C2.41493 15.2872 2.71277 15.5851 3.07805 15.7748C3.23663 15.8572 3.46402 15.9242 3.90945 15.9612C4.36686 15.9992 4.95898 16 5.83 16H16.17C17.041 16 17.6331 15.9992 18.0906 15.9612C18.536 15.9242 18.7634 15.8572 18.922 15.7748C19.2872 15.5851 19.5851 15.2872 19.7748 14.922C19.8572 14.7634 19.9242 14.536 19.9612 14.0906C19.9992 13.6331 20 13.041 20 12.17V7H2Z" fill="#84828A"/></svg>
                            <p className='ml-4 text-sm font-thin text-[#84828A]'>Shopping card</p>
                        </button>
                    </div>
                    <div className='px-2 py-3 mb-6'>
                        <button className='flex items-center'>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.35305 10.1942L5.2599 13.9042C5.25589 14.1022 5.33102 14.2932 5.46924 14.4352C5.60847 14.5782 5.79878 14.6582 5.99711 14.6582H9.68313C10.4494 14.6582 11.1706 14.3602 11.7135 13.8182L19.0975 6.4461C19.6805 5.86509 20 5.09208 20 4.27006C20 3.45005 19.6805 2.67604 19.0975 2.09503L17.9006 0.900014C16.6986 -0.300005 14.7444 -0.300005 13.5434 0.900014L6.19343 8.23812C5.67057 8.76013 5.37208 9.45514 5.35305 10.1942ZM6.82746 10.2312C6.83748 9.87215 6.98172 9.53314 7.23713 9.27914L12.9385 3.58605L14.8115 5.45808C14.9558 5.60108 15.1441 5.67308 15.3334 5.67308C15.5217 5.67308 15.711 5.60108 15.8552 5.45808C16.1427 5.16908 16.1427 4.70407 15.8552 4.41607L13.9812 2.54504L14.5861 1.94103C15.2122 1.31602 16.2308 1.31602 16.8579 1.94103L18.0548 3.13705C18.6808 3.76206 18.6808 4.77907 18.0548 5.40508L10.6707 12.7772C10.4063 13.0412 10.0557 13.1852 9.68313 13.1852H6.75434L6.82746 10.2312ZM0.738407 10.4431C1.14507 10.4431 1.47561 10.1131 1.47561 9.70705V5.93799C1.47561 3.24795 3.1173 1.50992 5.65845 1.50992H9.33546C9.74313 1.50992 10.0737 1.18092 10.0737 0.773912C10.0737 0.367905 9.74313 0.0379006 9.33546 0.0379006H5.65845C2.27392 0.0379006 0.000200328 2.40894 0.000200328 5.93799V9.70705C0.000200328 10.1131 0.330741 10.4431 0.738407 10.4431ZM19.2585 9.40984C18.8508 9.40984 18.5213 9.73885 18.5213 10.1459V14.0999C18.5213 16.79 16.8786 18.527 14.3364 18.527H5.65825C3.1171 18.527 1.47641 16.79 1.47641 14.0999C1.47641 13.6939 1.14587 13.3639 0.738207 13.3639C0.331542 13.3639 0 13.6939 0 14.0999C0 17.629 2.27372 20 5.65825 20H14.3364C17.722 20 19.9957 17.629 19.9957 14.0999V10.1459C19.9957 9.73885 19.6652 9.40984 19.2585 9.40984Z" fill="#84828A"/></svg>

                            <p className='ml-4 text-sm font-thin text-[#84828A]'>Chatbot</p>
                        </button>
                    </div>
                    <div className='px-2 py-3 mb-6'>
                        <button className='flex items-center'>
                            <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 17.1115C1 14.6984 2.69732 12.643 5.00404 12.2627L5.21182 12.2284C7.05892 11.9239 8.94108 11.9239 10.7882 12.2284L10.996 12.2627C13.3027 12.643 15 14.6984 15 17.1115C15 18.1545 14.1815 19 13.1719 19H2.82813C1.81848 19 1 18.1545 1 17.1115Z" stroke="#84828A" stroke-width="1.5"/>
                            <path d="M12.0834 4.9375C12.0834 7.11212 10.2552 8.875 8.00002 8.875C5.74486 8.875 3.91669 7.11212 3.91669 4.9375C3.91669 2.76288 5.74486 1 8.00002 1C10.2552 1 12.0834 2.76288 12.0834 4.9375Z" stroke="#84828A" stroke-width="1.5"/></svg>
                            <p className='ml-4 text-sm font-thin text-[#84828A]'>Account</p>
                        </button>
                    </div>
                    <div className='px-2 py-3 mb-6'>
                        <button className='flex items-center'>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.48 16.5368H19M2.68 10L1 10.044M2.68 10C2.68 11.3255 3.75451 12.4 5.08 12.4C6.40548 12.4 7.48 11.3255 7.48 10C7.48 8.67452 6.40548 7.6 5.08 7.6C3.75451 7.6 2.68 8.67452 2.68 10ZM8.16898 10.0441H19M10.801 3.55124L1 3.55124M19 3.55124H16.48M1 16.5368H10.801M15.88 16.6C15.88 17.9255 14.8055 19 13.48 19C12.1545 19 11.08 17.9255 11.08 16.6C11.08 15.2745 12.1545 14.2 13.48 14.2C14.8055 14.2 15.88 15.2745 15.88 16.6ZM15.88 3.4C15.88 4.72548 14.8055 5.8 13.48 5.8C12.1545 5.8 11.08 4.72548 11.08 3.4C11.08 2.07452 12.1545 1 13.48 1C14.8055 1 15.88 2.07452 15.88 3.4Z" stroke="#84828A" stroke-width="1.5" stroke-linecap="round"/></svg>
                            <p className='ml-4 text-sm font-thin text-[#84828A]'>Settings</p>
                        </button>
                    </div>
                </div>
                <Webcam className='mt-5'  imageSmoothing={true} videoConstraints={videoConstraints} mirrored={true} />
                <div className='h-[80%] border border-[#494949] mr-20  mt-3 bg-[#0E0E0E] rounded-xl p-5 w-fit'>
                    <img src={eye1} className='w-[158px] h-[158px] mb-3 rounded-3xl' />
                    <img src={eye2} className='w-[158px] h-[158px] mb-3 rounded-3xl' />
                    <img src={eye3} className='w-[158px] h-[158px] rounded-3xl' />
                </div>
            </div>
        </div>
    )
}