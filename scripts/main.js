const allPosts = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts')
    const data = await res.json()
    data.posts.forEach((post) => {
        // console.log(post.image);
        // changeInnerTextHandler('sec1img', 'post.image')
        const newDiv1 = document.createElement('div')
        const sec1LeftCont = document.getElementById('sec1leftcont')


        newDiv1.innerHTML = `
        <div class="mt-6 flex gap-6 p-10 bg-[#7d7dfc16] border-2 border-[#7d7dfc5a] rounded-3xl">
            <!-- Section 1 container left card Left  -->
            <div class="relative rounded-2xl w-16 h-16">
                <img id="sec1img" class="rounded-2xl  object-fill" src="${post.image}" alt="">
                <p class="top-0 right-0 absolute size-4 rounded-full green-dot"></p>
            </div>
            <!-- Section 1 container left card Right  -->
            <div class="w-full">
                <!-- Section 1 container left card Right div 1 -->
                <div class="text-[#12132D] flex gap-4 pb-3">
                    <p class="text-sm font-medium"># <span>${post.category}</span></p>
                    <p class="text-sm font-medium">Author: <span>${post.author.name}</span></p>
                </div>
                <!-- Section 1 container left card Right div 2 -->
                <h4 class="text-xl font-bold pb-4">${post.title}</h4>
                <!-- Section 1 container left card Right div 3 -->
                <p class="text-base text-[#12132d83]">${post.description}</p>
                <!-- Section 1 container left card Right div 4 -->
                <hr class="border-t border-dashed border-black mt-5 mb-6 border-[#12132d83]">
                <!-- Section 1 container left card Right div 5 -->
                <div class="flex justify-between">
                    <div class="flex gap-7">
                        <p class="text-lg text-[#12132d83]"><i class="fa-solid fa-message"></i> <span>${post.comment_count}</span></p>
                        <p class="text-lg text-[#12132d83]"><i class="fa-solid fa-eye"></i></i> <span>${post.view_count}</span></p>
                        <p class="text-lg text-[#12132d83]"><i class="fa-solid fa-clock"></i> <span>${post.posted_time}</span> min</p>
                    </div>
                    <div class="bg-green-600 h-8 w-9 rounded-full flex
                        justify-center">
                        <button class=btn"><i class=" text-white fa-solid
                        fa-envelope-open"></i></button>
                    </div>
                </div>
            </div>
                    </div>
        `
        sec1LeftCont.appendChild(newDiv1)



        // console.log();
    }
    )
}


// document.getElementById('read-btn').addEventListener('click', (event) =>{
//     console.log('ok');

// } 
// )




// const changeInnerTextHandler = (id, value) =>{
//     const element = document.getElementById(id)
//     // const innerText = 
//     element.innerText = value 
// }

allPosts()