let personalList=[
    {   
        id:1,
        Name:"这是一个名字",
        coverUrl:"../img/mkl.jpg",
        sign:"这是一个很有个性的签名",
        concern:"18",
        fan:"2",
        collection:"48",
        history:"87",

    },
]
let card = document.querySelector(".card");
let str = "";
personalList.forEach((item,index)=>{
    str +=`
            <div class="information">
                <img src="${item.coverUrl}">
                <div class="information-name-sign">
                    <span>${item.Name}</span>
                    <span>${item.sign}</span>
                </div>
            </div>
            <div class="bar">
                <div>
                    <span>${item.concern}</span>
                    <span>关注</span>
                </div>
                <div>
                    <span>${item.fan}</span>
                    <span>粉丝</span>
                </div>
                <div>
                    <span>${item.collection}</span>
                    <span>收藏</span>
                </div>
                <div>
                    <span>${item.history}</span>
                    <span>浏览记录</span>
                </div>
            </div>
        `   
}) 
card.innerHTML=str

let platformList=[
    {   
        id:1,
        Name:"这是一个名字",
        coverUrl:"../img/mkl.jpg",
        state:"离线",
        money:"5298",
        time:"1876",
        collection:"48",

    },
]
let platform = document.querySelector(".platform");
let plat = "";
platformList.forEach((item,index)=>{
    plat +=`
            <div class="platform-information">
                <img src="${item.coverUrl}">
                <div class="platform-information-name-state">
                    <span>${item.Name}</span>
                    <span>${item.state}</span>
                </div>
            </div>
            <div class="platform-bar-frame">
                <div class="platform-bar">
                    <div>
                        <span>${item.money}</span>
                        <span>游戏价值￥</span>
                    </div>
                    <div>
                        <span>${item.time}</span>
                        <span>游戏时长h</span>
                    </div>
                    <div>
                        <span>${item.collection}</span>
                        <span>游戏数量</span>
                    </div>
                </div>
                <span class="iconfont icon-youjiantou"></span>
            </div>
        `   
}) 
platform.innerHTML=plat