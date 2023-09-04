import Navbar from "./navbar";


export default function Gallery() {
    return (
        <div className="bg-center text-center bg-blend-multiply bg-green-500 h-max w-full">
            <Navbar />
            <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl mt-10">Gallery</h1>            
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20 mr-32 ml-32">
                <div class="grid gap-4">
                    <div>
                        <img class="h-auto max-w-full rounded-lg hover:scale-110 ease-in-out duration-150" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg" alt="" />
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded-lg hover:scale-110 ease-in-out duration-150" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg" alt="" />
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded-lg hover:scale-110 ease-in-out duration-150" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg" alt=""/>
                    </div>
                </div>
                <div class="grid gap-4">
                    <div>
                        <img class="h-auto max-w-full rounded-lg hover:scale-110 ease-in-out duration-150" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" alt=""/>
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded-lg hover:scale-110 ease-in-out duration-150" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg" alt=""/>
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded-lg hover:scale-110 ease-in-out duration-150" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg" alt=""/>
                    </div>
                </div>
                <div class="grid gap-4">
                    <div>
                        <img class="h-auto max-w-full rounded-lg hover:scale-110 ease-in-out duration-150" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg" alt=""/>
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded-lg hover:scale-110 ease-in-out duration-150" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg" alt=""/>
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded-lg hover:scale-110 ease-in-out duration-150" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg" alt=""/>
                    </div>
                </div>
                <div class="grid gap-4">
                    <div>
                        <img class="h-auto max-w-full rounded-lg hover:scale-110 ease-in-out duration-150" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg" alt=""/>
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded-lg hover:scale-110 ease-in-out duration-150" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg" alt=""/>
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded-lg hover:scale-110 ease-in-out duration-150" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg" alt=""/>
                    </div>
                </div>
            </div>

        </div>
    );
}