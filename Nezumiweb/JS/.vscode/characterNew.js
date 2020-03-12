window.onload=()=>{
    const characterImage = [document.getElementsByClassName("nezumi"),document.getElementsByClassName("inu"),document.getElementsByClassName("usagi"),document.getElementsByClassName("neko")];
    let x=0;const chsp=300;
    const imageChange=(character)=>{
        if(x<character.length){
            setTimeout(() => {
                character[x][0].className=character[x][0].className+"3";
                x++;
                imageChange(character)
            }, chsp);
            
        };
    };
    imageChange(characterImage);

    const arraySource = document.getElementsByClassName("produceBox");
    const arraySourceIM = document.getElementsByClassName("characterS")[0].children;
    let arrayText =[];let arrayTestSp =[];let arrayElements =[];
    const limit = arraySource[0].children.length;
    const arrayGet=()=>{
       for(let e =0;e<limit;e++){
            arrayText.push(arraySource[0].children[e].innerText);//テキスト取得
            arrayTestSp.push(arrayText[e].split(""));//テキスト分割
            arrayElements.push(arraySource[0].children[e]);//エレメント取得(onmouceover)
            arraySource[0].children[e].innerText = "";//テキスト初期化
       };
    };
    arrayGet();
    //onmouseover=>CheckName(muchSeak)=>onmouseover:if=>setTxt
    //muchSeak = マッチしたキャラクター要素の配列インデックス番号
    document.onmouseover=()=>{
        tag = event.target
        let muchSeak = "";let z = 0;
        muchSeak = CheckName(tag.parentNode.className )
        if(muchSeak!=false || muchSeak==0){//要素がマッチしていればテキスト出力
            setTxt(muchSeak,z);
            videoChange(muchSeak);
        };
    };
    document.onmouseout=()=>{//キャラクター要素からmouseoutで文字列を削除
        taglv = event.target
        let muchSeakLv = "";
        muchSeakLv = CheckName(taglv.parentNode.className)
        if (muchSeakLv!=false || muchSeakLv==0){
            eraseT(muchSeakLv);
            videoChangeN();
        };     
    };
    const eraseT=(muchSeakLv)=>{
            arrayElements[muchSeakLv].innerHTML="";
    };
    const vidArray=["nezumiPro.mp4","inuPro.mp4","usagiPro.mp4","nekoPro.mp4"];
    const vidSrc =document.getElementsByClassName("mainvideo")[0];
    const vidURL="../Movie/"
    const videoChange=(much)=>{
        vidSrc.src = vidURL+vidArray[much];
    };
    const videoChangeN=()=>{
        vidSrc.src = vidURL+"noise.mp4";
    };

    
    const setTxt=(muchSeak,z)=>{//タイプライター出力部分
        let limit = arrayTestSp[muchSeak].length;
        if(z<limit){
            arrayElements[muchSeak].innerHTML=arrayElements[muchSeak].innerHTML+arrayTestSp[muchSeak][z];
            z++//分割文字列の出力に使用
            let curTex = arrayElements[muchSeak].innerHTML.length;let limitTex = arrayTestSp[muchSeak].length
                if((limitTex-curTex)+z == limitTex){
                    setTimeout(setTxt,10,muchSeak,z);
                }else{
                    arrayElements[muchSeak].innerHTML="";
                    JS_die();//存在しない関数で処理を無理やり殺す
                    //setTimeout(setTxt,10,muchSeak,1);
                };
            //Split配列が出力しきるまで300ずつ出力
        }else{
            return;
        };
    };
    const CheckName=(tagName)=>{//mouseoverのあった要素のclassNameがCharacters要素のNameとマッチすれば配列番号を戻す
        for(let i=0;i<arraySourceIM.length;i++){
            if (tagName== arraySourceIM[i].className){
                return i;
            }
        };
        return false;
    };

    const imgsrc = document.getElementsByClassName("top")[0];
    const imgURL = "./Image/backimg/"
    const chBackImg =()=>{
        const result = Math.floor(Math.random()*23);
        setimg(result);
        setTimeout(chBackImg,5000);
    };
    const setimg=(result)=>{
        imgsrc.style.backgroundImage=`url(`+imgURL+String(result)+`.bmp)`;
    };

    chBackImg();

};