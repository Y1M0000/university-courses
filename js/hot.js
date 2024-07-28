
let swiperWindow = document.querySelector(".swiper-window");
let str = `
    <section class="swiper">
        <div class="swiper-wrapper">
            <div class="swiper-slide">
                <div class="swiper-text">从零开始冰汽时代</div>
                <img src="../img/hot-Frostpunk.webp" alt="">
            </div>
            <div class="swiper-slide">
                <div class="swiper-text">你的黑暗无法吞噬我的黑暗</div>
                <img src="../img/hot-ending.jpg" alt="">
            </div>
            <div class="swiper-slide">
            <div class="swiper-text">再加载一会,再加载一会,再加载一会,再加载一会,再加载一会</div>
                <img src="../img/downland.jpg" alt="">
            </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
    </section>

` 
swiperWindow.innerHTML=str;
// -------------------------初始化轮播图 start-------------------------
// 初始化Swiper。
var mySwiper = new Swiper ('.swiper', {
    // direction: 'vertical', // 垂直切换选项
    loop: true, // 循环模式选项
    initialSlide: 0,  //设定初始化时slide的索引
    speed: 500,
    autoplay:true,
    autoplay: {
        delay:2000,
    },
    effect: "fade",

    
    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
    },
})   
// -------------------------初始化轮播图 end-------------------------


let hotList=[
    {   
        id:1,
        hotName:"外媒盘点PS5最难游戏：老头环DLC“荣”获榜首",
        coverUrl:"../img/hot-ending.jpg",
        hotTime:"30分钟前|PS",
        score:"15",

    },
    {
        id:2,
        hotName:"ImperialHal 为《Apex 英雄》通行证改版发声：为了游戏的长远发展",
        coverUrl:"../img/hot-apex.jpg",
        hotTime:"2小时前|APEX英雄",
        score:"48",
    },
    {
        id:3,
        hotName:"MC93分《月姬R》：寂夜绽放的月之花，远野志贵的爱与欲",
        coverUrl:"../img/hot-moon.webp",
        hotTime:"2小时|月姬R",
        score:"82",
    },
    {
        id:4,
        hotName:"《冰汽时代》入门通用详细攻略",
        coverUrl:"../img/hot-Frostpunk.webp",
        hotTime:"6小时前|Forstpunk",
        score:"132",
    },
]

let findBox = document.querySelector(".find-box");
console.log(findBox);
let ztr = "";
hotList.forEach((item,index)=>{
    ztr +=`
        <a href="">
            <div class="textual">
                <div class="textual-title">${item.hotName}</div>
                <div class="textual-time">${item.hotTime}</div>
                <span class=" iconfont icon-pinglun- textual-comment">${item.score}</span>
            </div>
            <div class="textual-img">
                <img src="${item.coverUrl}">
            </div>
        </a>

    ` 
})
findBox.innerHTML=ztr;