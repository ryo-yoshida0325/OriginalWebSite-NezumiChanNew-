window.onload=function(){

const Texts = [document.getElementsByClassName("mainText1"),document.getElementsByClassName("mainText2"),document.getElementsByClassName("mainText3")];
//テキストコンテンツをクラス指定で取得
const textSplit = [Texts[0][0].textContent.split(""),Texts[1][0].textContent.split(""),Texts[2][0].textContent.split("")];
//一文字ずつSplit
let getCurText;
const textsLength=Texts.length;
let getText="";

const eraseText=(number)=>{
    Texts[number][0].innerHTML="";//引数の配列のinnertextを削除
};

for(let a=0;a<Texts.length;a+=1){
    eraseText(a);//Texts配列のLengthを渡す
}



const textOpningAdd=function(){
    Texts[0][0].textContent = "_" ;
};


const textOpningErase=function(){
    Texts[0][0].textContent = "";
};

const addtext =(i,j)=>{
    Texts[i][0].textContent =  getText;
    Texts[i][0].textContent = Texts[i][0].textContent + textSplit[i][j]+"_";
    getCurText = Texts[i][0].textContent.split("");
    getCurText.splice(getCurText.length-1,1);
    getText = getCurText.join("");
        if (j==textSplit[i].length-1){
            Texts[i][0].textContent =  getText;
        };
};

const txsp=150;
let count = 0;let j = 0;let i = 0;
const setText = function(){
if (i<Texts.length){
    if(j<textSplit[i].length){
        addtext(i,j);
        j++;
        setTimeout(setText, txsp);
    }else{
        getText="";
        i++;j=0;setText();
    };
}else{
    return;
};
};

var promise = new Promise(function(resolve){
});

const chsp = 500;
let countSet=0;
let endGurd=0;
const textOpningUnite=()=>{
    countSet++;
    if(countSet<7){
        if (countSet%2==0){
            textOpningAdd();
            setTimeout(textOpningUnite,chsp);
        }else if(countSet%2!=0){
            textOpningErase();
            setTimeout(textOpningUnite,chsp);
        }
    }else if(countSet>=7){
        setText();
    };
};

textOpningUnite();

const videosrc = document.getElementsByClassName(`mainvideo`);
const videos = [`gokuraku.mp4`,`gokuraku1.mp4`,`gokuraku2.mp4`,`gokuraku3.mp4`,`gokuraku4.mp4`,`koi.mp4`,`koi1.mp4`,`koi2.mp4`,`koi3.mp4`,`robot1.mp4`,`robot2.mp4`,`robot3.mp4`];
const noise = `noise.mp4`;
const fileLeng = videos.length;
const vidURL = "Movie/";
let curvid=0;

const rondomVidSeak=(Len)=>{
    const result = Math.floor(Math.random()*Math.floor(Len));
    console.log(result);
    if (result!=curvid){
        curvid=result;
        console.log(result);
        return result;//乱数計算
    }else if(result==curvid){
        rondomVidSeak(Len);
    };
    
};

const rondomVid=(Len)=>{
    const result = Math.floor(Math.random()*Math.floor(Len));
    return result;//乱数計算
};



const chVideoSrc=(rondom)=>{
    if (rondom ==undefined){
        chVideoSrc(rondomVidSeak(fileLeng));
    }else{
        videosrc[0].src= vidURL + noise;//一秒間ノイズをかます
        console.log(rondom);
        setTimeout(()=>{videosrc[0].src= vidURL + videos[rondom]},2000);
    };
};

const changeVideo = ()=>{
    const chvd = rondomVid(15000); 
    if (chvd>5000){//最低5秒間動画を流す
        chVideoSrc(rondomVidSeak(fileLeng))//配列長を渡して乱数計算+動画切り替え処理
        setTimeout(changeVideo,chvd);
    }else if(chvd<5000){
        changeVideo();//5秒以下だった場合、再計算し再評価
    };
};

changeVideo();

let fukidashiCh = document.getElementsByClassName("fukidashiB")[0];
const ukagaka = document.getElementsByClassName("ukagaka");
const SE = document.getElementsByClassName("SEs")[0];
const serifArray=["こんにちは！ わたしのこと は ねずみちゃん と よんで くださいね！","やめて！　たいした　ことない　サイトだな　とか　いわないで！;;","HAI?","NANDESUKA?","YAMETE KUDASAI"];
const touchArray=["いたっ","ちょっ、なんですか","やめて！小突かないで！","やめっ、、、ちょっと　ほんとうに、、","ほんとに　おこりますよ！","やー！","、、、、、"];
//const spSerif;const spSerifAr;

fukidashiCh.className="fukidashi";
let fukidashiChAn = document.getElementsByClassName("fukidashi");
fukidashiChAn[0].innerHTML=serifArray[0];
let chFlag=0;
const hideSerif =(pre) => {
    fukidashiChAn[0].innerHTML="";
    fukidashiChAn[0].className="fukidashiB";
    fukidashiCh = document.getElementsByClassName("fukidashiB")[0];
    chFlag=1;
};
let opFlag=0;
const socSerif=(fukidashi,fukidashiArr,i,times)=>{
    if (chFlag==1){
        setTimeout(() => {
            fukidashiCh.className=fukidashi;
            fukidashiChAn = document.getElementsByClassName(fukidashi);
            fukidashiChAn[0].innerHTML=fukidashiArr[i];
            opFlag=1
        }, times);
    }else{
        socSerif();
    }
}
setTimeout(hideSerif,8000,"");
setTimeout(socSerif,10000,"fukidashi",serifArray,1,2000);
let plus = 0;let lage =0;let fire=0;
ukagaka[0].onclick=()=>{
    if(opFlag==1){
        hideSerif("");
        if(plus>5){
            plus=5;
            lage++;
            if(lage>6){
                SE.src="SE/machinegun-firing1.mp3";
                for(let i=1;i<4;i++){
                    let getguns =document.getElementsByClassName("gun"+i)[0]
                    getguns.style.visibility="visible";
                    fire=1;
                };
            };
            if(lage>5&&fire==0){
                ukagaka[0].src="Character/Image/nezumiGun.png";
                SE.src="SE/handgun-ready1.mp3";
            };
        };//5回以上クリックされた場合の処理
        plus++;
        socSerif("fukidashi",touchArray,plus,100);
    };
    
};


}