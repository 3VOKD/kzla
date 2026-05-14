
 <script>
    import { onMount } from 'svelte';
    
    const frames = [
                    'Icon/1.svg',
                    'Icon/2.svg'
    ];
    
    let about = $state(false);
    let loaded = $state(false);
    let player = $state(false);
    
    
    
    let header_entry = 'Hi, I\'m Karlo';
    let header_about = 'Contact me at:';
    
    let text_entry = 'I specialize in Cybersecurity to protect digital environments and partake in the imaginative world building of Game Development.';
    let text_about = '3vokd.dev@gmail.com';
    
    let header = $state(header_entry);
    let text = $state(text_entry);
    
    let current = $state(0);
    let interval;
    
    
    
    onMount(() => {
        interval = setInterval(() => {
            current = (current + 1) % frames.length;
        },250);
        
        const timer = setTimeout(() => {
            loaded = true;
        }, 3000);
        
    });
    
    
    
    
    function aboutMe(){
        player = false;
        about = !about;
        
        if (about) {
            header = header_about;
            text = text_about;
        } 
        else {
            header = header_entry;
            text = text_entry;
        }
    }
    
    function Back(){
        about = false;
        player = false;
        
        header = header_entry;
        text = text_entry;
    }
  
</script> 




<section class="flex flex-col w-full h-full " id="all">
    <img src={frames[current]} alt="Animation frame" class="flex justify-center items-center mx-auto relative p-0 mt-6" />
    
    
    <div class="flex h-60 md:h-200 lg:h-203 xl:h-100 w-[80%] bg-iron rounded-lg justify-center items-center flex-col mx-auto -mt-3 overflow-hidden">
        <div class="flex w-[90%] h-[90%] justify-center items-center mx-auto flex-col text-center">
        
            {#if !player}
            
                <h1 class="mt-9 mb-2">{header}</h1>
                <p class="h-[90%] lg:flex lg:text-center lg:items-center lg:w-[90%] lg:mx-auto">{text}</p>
                
                
            {:else if (player && !about)}
            
                <div class="video-container aspect-video w-full max-w-3xl mx-auto overflow-hidden rounded-lg relative mt-4 mb-4">
                    <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/rYP00Qirv6g?si=RfWsHGlQbebUFXAo&amp;autoplay=1&mute=1"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen
                        
                    ></iframe>
                </div>
        
            {/if}
                
            {#if about || player}
                <button onclick={() => Back()} title='back'>
                    <i class="fa-solid fa-x scale-125 text-platinum inter hover:text-shadow"></i>
                </button>
                
            {:else if (!about && !player)}
                <span class='bg-platinum justify-center items-center w-12 lg:w-24 aspect-square rounded-full p-0 m-0 translate-y-3 lg:translate-y-22'>
                    <button onclick={() => player = !player} title='demo reel'>
                        <i class="fa-solid fa-film text-iron lg:scale-200 hover:scale-75 active:scale-75 lg:hover:scale-175 lg:active:scale-175 lg:mt-4 transition-all duration-300 ease-in-out"></i>
                    </button>
                    
                </span>
            {/if}
        </div>
    </div>
    
    <div class="flex justify-center items-center mx-auto h-50 w-full bg-shadow mt-4 mb-0 fade-in">
    
        <iframe src="bororo/index.html"
        class = 'fade-in'
        class:hidden={!loaded}
        title="Bropo"
        width="340"
        height="200"
        allow="autoplay">
        </iframe>
    </div>
    
    <div class="flex flex-col w-full gap-2 -mt-6">
        <span class="bg-iron h-2 mt-6"></span>
        
        <ul class="flex justify-center items-center gap-6 lg:gap-12">
            <li>
                <a href="https://3vokd.itch.io/" title="itch.io">
                    <i class="fa-brands fa-itch-io icon inter"></i>
                </a>
            </li>
            
            <li>
                <a href="https://x.com/3VOKD" title="Twitter">
                    <i class="fa-brands fa-x-twitter icon inter"></i>
                </a>
            </li>
            
            <li>
                <a href="https://bsky.app/profile/3vokd.bsky.social" title="Bluesky">
                    <i class="fa-brands fa-bluesky icon inter"></i>
                </a>
            </li>
            
            <li>
                <a href="https://www.instagram.com/3vokd/" title="Instagram">
                    <i class="fa-brands fa-instagram icon inter"></i>
                </a>
            </li>
            
            <li>
                <button onclick={() =>aboutMe()} title="About Me">
                    <i class="fa-solid fa-hashtag icon inter"></i>
                </button>
            </li>
        </ul>
        
        <span class="bg-iron h-2"></span>
        
    </div>
    
    
    
</section>



