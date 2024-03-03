// let readCount = 0

// const loadPosts = async () => {
//     const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts')
//     const data = await res.json()
//     data.posts.forEach((post) => {
//         const newDiv1 = document.createElement('div')
//         const sec1LeftCont = document.getElementById('sec1leftcont')

//         newDiv1.innerHTML = `
//         <div class="mt-6 flex gap-6 p-10 bg-[#7d7dfc16] border-2 border-[#7d7dfc5a] rounded-3xl">
//             <!-- Section 1 container left card Left  -->
//             <div id="small-circle-cont" class="relative rounded-2xl w-16 h-16">
//                 <img id="sec1img" class="rounded-2xl  object-fill" src="${post.image}" alt="">
//                 <p id="small-circle" class="top-0 ${post.isActive ? 'green-dot' : 'red-dot'} right-0 absolute size-4 rounded-full"></p>
//             </div>
//             <!-- Section 1 container left card Right  -->
//             <div class="w-full">
//                 <!-- Section 1 container left card Right div 1 -->
//                 <div class="text-[#12132D] flex gap-4 pb-3">
//                     <p class="text-sm font-medium"># <span>${post.category}</span></p>
//                     <p class="text-sm font-medium">Author: <span>${post.author.name}</span></p>
//                 </div>
//                 <!-- Section 1 container left card Right div 2 -->
//                 <h4 class="text-xl font-bold pb-4">${post.title}</h4>
//                 <!-- Section 1 container left card Right div 3 -->
//                 <p class="text-base text-[#12132d83]">${post.description}</p>
//                 <!-- Section 1 container left card Right div 4 -->
//                 <hr class="border-t border-dashed border-black mt-5 mb-6 border-[#12132d83]">
//                 <!-- Section 1 container left card Right div 5 -->
//                 <div class="flex justify-between">
//                     <div class="flex gap-7">
//                         <p class="text-lg text-[#12132d83]"><i class="fa-solid fa-message"></i> <span>${post.comment_count}</span></p>
//                         <p class="text-lg text-[#12132d83]"><i class="fa-solid fa-eye"></i></i> <span>${post.view_count}</span></p>
//                         <p class="text-lg text-[#12132d83]"><i class="fa-solid fa-clock"></i> <span>${post.posted_time}</span> min</p>
//                     </div>
//                     <div class="bg-green-600 h-8 w-9 rounded-full flex
//                         justify-center">
//                         <button onclick="readBtn('${post.id}')" class=btn"><i class=" text-white fa-solid
//                         fa-envelope-open"></i></button>
//                     </div>
//                 </div>
//             </div>
//                     </div>
//         `
//         sec1LeftCont.appendChild(newDiv1)

        



//         // read button related ----------------------
//          readBtn = (id) => {
//             // Increasing read count 
//             readCount ++
//             document.getElementById('readCount').innerText = readCount
       

//             // adding read articles 
//             const newDiv2 = document.createElement('div')
//             const readPostContainer = document.getElementById('readPostContainer')

//             data.posts.forEach((post)=>{
//                 if(post.id == id){

//                     newDiv2.innerHTML=`
//                 <div class="my-2 p-4 bg-white rounded-2xl flex justify-between gap-2">
//                     <p class="text-base font-semibold">${post.title}</p>
//                     <div class="flex gap-2 items-center">
//                         <p><i class="text-[#12132d83] fa-regular fa-eye"></i></p>
//                         <p class="text-[#12132d83]">${[post.view_count]}</p>
//                     </div>
//                 </div>
//             `
//                 }
                
//             })

//             readPostContainer.appendChild(newDiv2)
//         }

//     }
//     )
// }





// const loadLatestPosts = async () =>{
//     const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts') 
//     const data = await res.json()
//     // console.log(data)
//     data.forEach((post)=>{

//         const latestPostCont = document.getElementById('latest-post-cont') 
//         const newDiv3 = document.createElement('div')
//         newDiv3.innerHTML=`
//                 <div class="p-6 rounded-3xl border-2 border border-[#12132d1e] bg-white">
//                 <div class="flex justify-center max-h-48 rounded-3xl">
//                     <img class="object-contain" src="${post.cover_image}" alt="">
//                 </div>
//                 <p class="text-[#12132d83] pt-6"><i class="fa-regular fa-calendar-plus"></i><span> ${post.author.posted_date}</span></p>
//                 <h4 class="text-xl font-bold pb-3 pt-3">${post.title}</h4>
//                 <p class="text-base text-[#12132d83]">${post.description}</p>
//                 <div class="flex gap-4 pt-4">
//                     <div class="size-11 rounded-full bg-black">
//                         <img class="rounded-full" src="${post.profile_image}" alt="">
//                     </div>
//                     <div>
//                         <p class="text-base font-bold text-[#12132D]">${post.author.name}</p>
//                         <p class="pt-1 text-[#12132d83] text-sm">${post.author.designation}</p>
//                     </div>
//                 </div>
//             </div>
//                 `
//                 latestPostCont.appendChild(newDiv3)

//     }
//     )
// }


// // Search function 
// const searchInput = document.getElementById('search-input')

// searchBtn = ()=>{
//     const searchvalue = searchInput.value

//     console.log(searchvalue)
// }

 











// loadLatestPosts()

// loadPosts()