window.onload=()=>{
    const backimg=document.getElementsByClassName("top");
    const imgURL = `../Character/Image/backimg/`
    const chBackImg =()=>{
        const result = Math.floor(Math.random()*23);
        setimg(result);
        setTimeout(chBackImg,3000);
    };
    const setimg=(result)=>{
        backimg[0].style.width=`50%`
        backimg[0].style.backgroundImage=`url(`+imgURL+String(result)+`.bmp)`;
        backimg[0].style.width=`100%`
    };

    chBackImg();
}