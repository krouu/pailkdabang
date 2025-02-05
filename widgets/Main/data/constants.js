const contentWidth = {
    half : "w-1/2 h-fit",
    full : "w-full h-fit",
    area1_3 : "w-1/3 h-fit",
    area2_3 : "w-2/3 h-fit",
}

const fontColors = {
    white : "text-white",
    deepblue : "text-blue-950",
    grey : "text-slate-300", 
    deepgrey : "text-slate-900",
    brown : "text-amber-950",
    yellow : "text-yellow-400",
}

const contentPostion = {
    leftPostion : "pl-72 py-10",
    rightPostion : "px-16 py-10",
}

export const constants = {
    firstBanner : [{
        href : "/menu",
        width : contentWidth.half,
        postion : contentPostion.leftPostion,
        imgSrc :"https://paikdabang.com/wp-content/themes/paikdabang/assets/images/main_sec1.jpg",
        title1 : "PAIK'S COFFEE",
        title2 : "STORY",
        title3 : "",
        text1 : "균형잡힌 바디감으로 긴 여운을 남기는 빽다방 커피를 만나보세요.",
        text2 : "",
        imgSize : "cover",
        imgPostion : "60%",
        backColor:"",
        titleColor : fontColors.deepblue,
        textColor : fontColors.deepgrey,
    },
    {
        href : "/info",
        width : contentWidth.half,
        postion : contentPostion.rightPostion,
        imgSrc :"https://paikdabang.com/wp-content/themes/paikdabang/assets/images/main_intro_bn.jpg",
        title1 : "PAIK'S BRAND",
        title2 : "STORY",
        title3 : "",
        text1 : "합리적인 가격으로 만나는 맛있고 든든한 빽다방",
        text2 : "",
        imgSize : "",
        imgPostion : "80%",
        backColor : "#253f85",
        titleColor : fontColors.white,
        textColor : fontColors.grey,
    }],
    secondBanner : [{
        href : "/menu",
        width : contentWidth.full,
        postion : contentPostion.leftPostion,
        imgSrc :"https://paikdabang.com/wp-content/themes/paikdabang/assets/images/main_sec2.jpg",
        title1 : "FRESH",
        title2 : "COFFEE",
        title3 : "",
        text1 : "신선한 뉴크롭 원두를 사용하여",
        text2 : "추출한 커피메뉴!",
        imgSize : "cover",
        imgPostion : "",
        backColor : "",
        titleColor : fontColors.brown,
        textColor : fontColors.deepgrey,
    }],
    thirdBanner : [{
        href : "/menu",
        width : contentWidth.area2_3,
        postion : contentPostion.leftPostion,
        imgSrc :"https://paikdabang.com/wp-content/themes/paikdabang/assets/images/main_sec3.jpg",
        title1 : "VARIOUS",
        title2 : "BEVERAGE",
        title3 : "",
        text1 : "에이드, 티, 주스 등 취향대로",
        text2 : "골라먹는 즐거움!",
        imgSize : "cover",
        imgPostion : "50%",
        backColor : "",
        titleColor : fontColors.deepblue,
        textColor : fontColors.deepgrey,
    },
    {
        href : "/menu",
        width : contentWidth.area1_3,
        postion : contentPostion.rightPostion,
        imgSrc :"https://paikdabang.com/wp-content/themes/paikdabang/assets/images/main_sec4.jpg",
        title1 : "SWEET",
        title2 : "PAIK'S CCINO",
        title3 : "",
        text1 : "달콤 시원한 빽다방",
        text2 : "시그니처 메뉴!",
        imgSize : "cover",
        imgPostion : "50%",
        backColor : "",
        titleColor : fontColors.yellow,
        textColor : fontColors.deepgrey,
    }],
    fourBanner : [{
        href : "/menu",
        width : contentWidth.area2_3,
        postion : contentPostion.rightPostion,
        imgSrc :"https://paikdabang.com/wp-content/themes/paikdabang/assets/images/main_sec5.jpg",
        title1 : "TASTY",
        title2 : "ICE CREAM /",
        title3 : "DESSERT",
        text1 : "달콤한 아이스크림부터",
        text2 : "든든한 브래드까지!",
        imgSize : "cover",
        imgPostion : "50%",
        backColor : "",
        titleColor : fontColors.white,
        textColor : fontColors.white,
    }],
    etcBanner : [{
        title : "STORE",
        text : "원하는 지역의 매장을 검색해보세요!",
        searchBool : true,
        backImgBool : false,
    }]
}