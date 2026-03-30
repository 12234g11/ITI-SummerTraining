function changePosition(){
    if(document.getElementsByTagName('img').length>=2){
        return;
    }
    document.getElementsByTagName('img')[0].style.marginLeft='auto';
    document.getElementsByTagName('img')[0].style.marginRight='0';
    document.getElementsByTagName('img')[0].style.display='block';
    let newImg = document.createElement('img');
    newImg.src = 'dom.jpg';
    document.body.appendChild(newImg);
    document.getElementById("nav").style.listStyleType = "circle";
}