import { Carousel } from "@/components/carousel/carousel";

const carouselPlayground = () => {
    return (
        <Carousel className='w-2/3 h-full pr-5'>
            <div className='bg-red-200 w-full h-[calc(100vh-65px)] text-center duration-300'>Element 1</div>
            <div className='bg-green-200 w-full h-[calc(100vh-65px)] text-center duration-300'>Element 2</div>
            <div className='bg-blue-200 w-full h-[calc(100vh-65px)] text-center duration-300'>Element 3</div>
            <div className='bg-yellow-200 w-full h-[calc(100vh-65px)] text-center duration-300'>Element 4</div>
        </Carousel>
    );
    }
    export default carouselPlayground;
