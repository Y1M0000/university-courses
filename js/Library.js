// 轮播图
let swiperWindow = document.querySelector(".swiper-window");
let str = `
    <section class="swiper">
        <div class="swiper-wrapper">
            <div class="swiper-slide">
                <img src="../img/downland1.gif" alt="">
            </div>
            <div class="swiper-slide">
                <img src="../img/hot-ending.jpg" alt="">
            </div>
            <div class="swiper-slide">
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

let aArr = document.querySelectorAll(".module-switch1 a");
let liArr = document.querySelectorAll("main>ul>li");
let lastIndex = 0;
for(let i=0;i < aArr.length;i++){
    let item = aArr[i];
    item.onclick = function(){
    aArr[lastIndex].classList.remove("current");
    liArr[lastIndex].classList.remove("show")
    item.classList.add("current");
    liArr[i].classList.add("show")
    lastIndex = i;
    }
}

// 促销
let goodsList = [
    {
        id:5,
        Name:"街头霸王6",
        coverUrl:"../img/StreetFighter6.webp",
        money:"￥149",
        sale:"50",
        score:"9.5",
        classify:"2D格斗|格斗|街机"
    },
    {
        id:6,
        Name:"怪物猎人：世界",
        coverUrl:"../img/MonsterHunterWorld.jpg",
        money:"￥49",
        sale:"67",
        score:"9.5",
        classify:"动作|合作|角色扮演"
    },
    {
        id:12,
        Name:"荒野大镖客：救赎2",
        coverUrl:"../img/RedDead2.webp",
        money:"￥92",
        sale:"67",
        score:"9.7",
        classify:"动作|冒险|开放世界"
    },
    {
        id:4,
        Name:"幻兽帕鲁",
        coverUrl:"../img/Palworld.webp",
        money:"￥81",
        sale:"25",
        score:"9.3",
        classify:"动作|冒险|开放世界"
    },
    {
        id:14,
        Name:"只狼：影度二逝",
        coverUrl:"../img/seikro.jpg",
        money:"￥129",
        sale:"50",
        score:"9.8",
        classify:"动作|冒险|类魂系列"
    },
    {
        id:15,
        Name:"生化危机4 重制版",
        coverUrl:"../img/ResidentEvil.png",
        money:"￥149",
        sale:"25",
        score:"9.9",
        classify:"动作|冒险|恐怖"
    },
]
let goodsBox = document.querySelector(".goods");
let goodsStr = "";
goodsList.forEach((item,index)=>{
    goodsStr += `
    <div onclick="toDetail(${item.id})">
        <img class="goods-img" src="${item.coverUrl}">
        <div class="goods-title">${item.Name}</div>
        <div class="goods-money-sale">
        <span class="iconfont icon-inbox-full goods-money">${item.money}</span>
        <span class="goods-sale">-${item.sale}%</span>
        </div>
        <span class="classify">${item.classify}</span>
    </div>`

})
goodsBox.innerHTML = goodsStr;






// 热销榜
let hotList=[
    {   
        id:1,
        Name:"黑神话：悟空",
        coverUrl:"../img/Wukong.webp",
        money:"￥268",
        score:"9.8",
    },
    {
        id:2,
        Name:"无人深空",
        coverUrl:"../img/NoManSky.webp",
        money:"￥70",
        score:"9.1",
    },
    
    {
        id:3,
        Name:"艾尔登法环",
        coverUrl:"../img/EndingRing.jpg",
        money:"￥298",
        score:"9.6",
    },
    {
        id:4,
        Name:"幻兽帕鲁",
        coverUrl:"../img/Palworld.webp",
        money:"￥81",
        score:"9.3",
    },
    {
        id:5,
        Name:"街头霸王6",
        coverUrl:"../img/StreetFighter6.webp",
        money:"￥149",
        score:"9.5",
    },
    {
        id:6,
        Name:"怪物猎人：世界",
        coverUrl:"../img/MonsterHunterWorld.jpg",
        money:"￥49",
        score:"9.5",
    },
]
let findBox = document.querySelector(".find-box");
let ztr = "";
hotList.forEach((item,index)=>{
    ztr +=`
        <a onclick="toDetail(${item.id})">
            <div class="textual-img">
                <span class="iconfont icon-steam"></span>
                <img src="${item.coverUrl}">
            </div>
            <div class="textual">
                <div class="textual-title">${item.Name}</div>
                <div class="textual-like">
                    <span class="iconfont icon-inbox-full textual-money ">${item.money}</span>
                    <span class="iconfont icon-shangjiapingfen textual-comment">${item.score}</span>
                </div>
            </div>     
        </a>
    ` 
})
findBox.innerHTML=ztr;

// 期待榜
let libraryList=[
    {   
        id:1,
        Name:"黑神话：悟空",
        coverUrl:"../img/Wukong.webp",
        money:"￥268",
        score:"9.8",

    },
    {
        id:7,
        Name:"空洞骑士：丝之歌",
        coverUrl:"../img/HollowKnight.webp",
        money:"￥",
        score:"9.8",
    },
    {
        id:8,
        Name:"冰汽时代2",
        coverUrl:"../img/Forstpuck2.jpg",
        money:"￥149",
        score:"9.8",
    },
    {
        id:9,
        Name:"怪物猎人：荒野",
        coverUrl:"../img/monsterhunter.jpg",
        money:"￥",
        score:"9.8",
    },
    {
        id:10,
        Name:"潜行者2：切尔诺贝利之心",
        coverUrl:"../img/STALKER2.jpg",
        money:"￥268",
        score:"82",
    },
    {
        id:11,
        Name:"小小梦魇3",
        coverUrl:"../img/LittleNightmares3.webp",
        money:"￥",
        score:"9.8",
    },
]
let libraryHot = document.querySelector(".library-hot");
let ltr = "";
libraryList.forEach((item,index)=>{
    ltr +=`
        <a onclick="toDetail(${item.id})">
            <div class="textual-img">
                <span class="iconfont icon-steam"></span>
                <img src="${item.coverUrl}">
            </div>
            <div class="textual">
                <div class="textual-title">${item.Name}</div>
                <div class="textual-like">
                    <span class="iconfont icon-inbox-full textual-money ">${item.money}</span>
                    <span class="iconfont icon-shangjiapingfen textual-comment">${item.score}</span>
                </div>
            </div>
        </a>
    ` 
})
libraryHot.innerHTML=ltr;


function toDetail(id) {
    // console.log(location);
    // reload() 重新加载当前页面，相当与刷新
    // location.reload();
    
    // replace() 新页面替换旧页面,返回上一页是找不到旧页面
    // location.replace("../views/movie-detail.html")
    // 给href赋值，可以实现页面跳转，返回上一页是跳转之前的页面
    location.href = "../views/detail.html?movieId=" + id;
}