var a=0
function diminish(){
    if (a>0){
        a--;
        console.log(a);
    }
    else if (a==0){
        a=3;
        console.log(a);
    }
    else{
        console.log("error");
    }
    moveback()
}
function add(){
    if (a==3){
        a=0;
        console.log(a);
    }
    else if (a<3){
        a++;
        console.log(a);
    }
    else{
        console.log("error");
    }
    moveforward()
}
function moveback(){
    arrowleft=document.getElementById("link1")
    aa1=document.getElementById('title');
    //aa1text=document.getElementById('title').textContent;
    replacement=document.createElement('title');
    icon=document.getElementById("linkicon");
    console.log(aa1.parentNode)
    if (a==3){
        arrowleft.setAttribute('href','#universal-studios');
        replacement.appendChild(document.createTextNode('Universal Studios'));
        icon.setAttribute("href","res/gold-of-minions-removebg-preview.png")
    }
    else if(a==2){
        arrowleft.setAttribute('href',"#dc-comics");
        replacement.appendChild(document.createTextNode('DC Comics'));
        icon.setAttribute("href","res/dc-comics-logo-removebg-preview-for-title.png");
    }
    else if(a==1){
        arrowleft.setAttribute('href',"#star-wars");
        replacement.appendChild(document.createTextNode('Star Wars'));
        icon.setAttribute("href","res/Rebel_Alliance_logo.svg.png");
    }
    else if(a==0){
        arrowleft.setAttribute('href','#marvel');
        replacement.appendChild(document.createTextNode('Marvel'));
        icon.setAttribute("href","res/logo-of-marvel-title-removebg-preview.png");
    }
    /*switch(a){
        case 3:
            
        case 2:
            
        case 1:
            c=
        case 0:
            c=
    }*/
    //arrowleft.setAttribute('onclick','diminish()')
    aa1.parentNode.replaceChild(replacement,aa1);
    replacement.setAttribute('id','title')
}
function moveforward(){
    aa=document.getElementById('title');
    icon=document.getElementById("linkicon");
    //aatext=document.getElementById('title').textContent;
    replacement=document.createElement('title');
    arrowright=document.getElementById("link2");
    if(a==0){
        change=arrowright.setAttribute('href','#marvel');
        //console.log("hello1")
        replacement.appendChild(document.createTextNode('Marvel'));
        icon.setAttribute("href","res/logo-of-marvel-title-removebg-preview.png");
    }
    else if(a==1){
        arrowright.setAttribute('href',"#star-wars");
        //console.log("hello2")
        replacement.appendChild(document.createTextNode('Star Wars'));
        icon.setAttribute("href","res/Rebel_Alliance_logo.svg.png");
    }
    else if (a==2){
        arrowright.setAttribute('href','#dc-comics')
        //console.log("hello3")
        replacement.appendChild(document.createTextNode('DC Comics'));
        icon.setAttribute("href","res/dc-comics-logo-removebg-preview-for-title.png");
    }
    else if (a==3){
        arrowright.setAttribute('href',"#universal-studios")
        replacement.appendChild(document.createTextNode('Universal Studios'));
            //console.log("hello4")
        icon.setAttribute("href","res/gold-of-minions-removebg-preview.png")
    }
    //arrowright.setAttribute('onclick','add()')
    //console.log(aa)
    aa.parentNode.replaceChild(replacement,aa);
    replacement.setAttribute('id','title')
}
