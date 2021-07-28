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

function slideforquiz(index){
    let question1=document.createElement("div");
    let solution1=document.createElement("div");
    let solution2=document.createElement("div");
    let solution3=document.createElement("div");
    let solution4=document.createElement("div");
    question1.setAttribute("id","question1");
    /*solution1.setAttribute("id","solution1");
    solution2.setAttribute("id","solution2");
    solution3.setAttribute("id","solution3");
    solution4.setAttribute("id","solution4");*/
    marvelquiz22=document.getElementById("marvelquiz");
    marvelquiz22.parentNode.removeChild(marvelquiz22);
    marvelquiz=document.createElement("div");
    marvelquiz.appendChild(question1)
    marvelquiz.setAttribute("id","marvelquiz");
    document.getElementById("containerofmarvelquiz").insertBefore(marvelquiz,document.getElementById("sliderofquiz"));
    for(pp=1;pp<5;pp++){
        let obj=eval("solution"+pp);
        obj.setAttribute("class","answersof1");
        obj.setAttribute("id","solution"+pp);
        marvelquiz.appendChild(obj);
    }
    if(index==0){
        let contenu11=document.createElement("span");
        let insidecontenu11=document.createTextNode("When was Marvel Entertainment created ?");
        contenu11.appendChild(insidecontenu11);
        question1.appendChild(contenu11);
        let contenu22=document.createElement("span");
        let insidecontenu22=document.createTextNode("→ 1947");
        contenu22.appendChild(insidecontenu22);
        solution1.appendChild(contenu22);
        let contenu33=document.createElement("span");
        let insidecontenu33=document.createTextNode("→ 1968");
        contenu33.appendChild(insidecontenu33);
        solution2.appendChild(contenu33);
        let contenu44=document.createElement("span");
        let insidecontenu44=document.createTextNode("→ 1939");
        contenu44.appendChild(insidecontenu44);
        solution3.appendChild(contenu44);
        let contenu55=document.createElement("span");
        let insidecontenu55=document.createTextNode("→ 1998");
        contenu55.appendChild(insidecontenu55);
        solution4.appendChild(contenu55);
        document.getElementById("solution1").addEventListener("click",function(){verification(3,75)});
        document.getElementById("solution2").addEventListener("click",function(){verification(3,75)});
        document.getElementById("solution3").addEventListener("click",function(){verification(3,75)});
        document.getElementById("solution4").addEventListener("click",function(){verification(3,75)});
    } 
    if(index==1){
        let contenu11=document.createElement("span");
        let insidecontenu11=document.createTextNode("What was the first product made by Marvel Entertainment ?");
        contenu11.appendChild(insidecontenu11);
        question1.appendChild(contenu11);
        let contenu22=document.createElement("span");
        let insidecontenu22=document.createTextNode("→ A Film");
        contenu22.appendChild(insidecontenu22);
        solution1.appendChild(contenu22);
        let contenu33=document.createElement("span");
        let insidecontenu33=document.createTextNode("→ A comic book");
        contenu33.appendChild(insidecontenu33);
        solution2.appendChild(contenu33);
        let contenu44=document.createElement("span");
        let insidecontenu44=document.createTextNode("→ A TV Show");
        contenu44.appendChild(insidecontenu44);
        solution3.appendChild(contenu44);
        let contenu55=document.createElement("span");
        let insidecontenu55=document.createTextNode("→ A Game");
        contenu55.appendChild(insidecontenu55);
        solution4.appendChild(contenu55); 
        document.getElementById("solution1").addEventListener("click",function(){verification(2,60)});
        document.getElementById("solution2").addEventListener("click",function(){verification(2,60)});
        document.getElementById("solution3").addEventListener("click",function(){verification(2,60)});
        document.getElementById("solution4").addEventListener("click",function(){verification(2,60)});
    }
    if(index==2){
        let contenu11=document.createElement("span");
        let insidecontenu11=document.createTextNode("What is the last product made by marvel ?(current date 16 november 2021)");
        contenu11.appendChild(insidecontenu11);
        question1.appendChild(contenu11);
        let contenu22=document.createElement("span");
        let insidecontenu22=document.createTextNode("→ Black Widow");
        contenu22.appendChild(insidecontenu22);
        solution1.appendChild(contenu22);
        let contenu33=document.createElement("span");
        let insidecontenu33=document.createTextNode("→ Avengers :Endgame");
        contenu33.appendChild(insidecontenu33);
        solution2.appendChild(contenu33);
        let contenu44=document.createElement("span");
        let insidecontenu44=document.createTextNode("→ WandaVision");
        contenu44.appendChild(insidecontenu44);
        solution3.appendChild(contenu44);
        let contenu55=document.createElement("span");
        let insidecontenu55=document.createTextNode("→ Shan-chi and the Legend of the Ten Rings");
        contenu55.appendChild(insidecontenu55);
        solution4.appendChild(contenu55);
        document.getElementById("solution1").addEventListener("click",function(){verification(1,30)});
        document.getElementById("solution2").addEventListener("click",function(){verification(1,30)});
        document.getElementById("solution3").addEventListener("click",function(){verification(1,30)});
        document.getElementById("solution4").addEventListener("click",function(){verification(1,30)});
    }
    if(index==3){
        //How much money did marvel make from Avengers :Endgame(2.788 billion)
        let contenu11=document.createElement("span");
        let insidecontenu11=document.createTextNode("How much money did marvel make from Avengers :Endgame");
        contenu11.appendChild(insidecontenu11);
        question1.appendChild(contenu11);
        let contenu22=document.createElement("span");
        let insidecontenu22=document.createTextNode("→ 2.549 Billion $");
        contenu22.appendChild(insidecontenu22);
        solution1.appendChild(contenu22);
        let contenu33=document.createElement("span");
        let insidecontenu33=document.createTextNode("→ Exactly 1 Billion $");
        contenu33.appendChild(insidecontenu33);
        solution2.appendChild(contenu33);
        let contenu44=document.createElement("span");
        let insidecontenu44=document.createTextNode("→ 985.54 Million $");
        contenu44.appendChild(insidecontenu44);
        solution3.appendChild(contenu44);
        let contenu55=document.createElement("span");
        let insidecontenu55=document.createTextNode("→ 2.788 Billion $");//this is the right one
        contenu55.appendChild(insidecontenu55);
        solution4.appendChild(contenu55);
        document.getElementById("solution1").addEventListener("click",function(){verification(4,60)});
        document.getElementById("solution2").addEventListener("click",function(){verification(4,60)});
        document.getElementById("solution3").addEventListener("click",function(){verification(4,60)});
        document.getElementById("solution4").addEventListener("click",function(){verification(4,60)});
    }
}
aaaaa=1
function addforslider(){
    if (aaaaa==3){
        aaaaa==0;
    }
    else{
        aaaaa++;
    }
}
function diminishforslider(){
    if (aaaaa==0){
        aaaaa==3;
    }
    else{
        aaaaa--;
    }
}
document.getElementById("arrowrightquiz").addEventListener("click",function(){addforslider()});
document.getElementById("arrowleftquiz").addEventListener("click",function(){diminishforslider()})
function verification(index,spacing){
    let spantrue=document.createElement("span");
    let spanfalse1=document.createElement("span");
    let spanfalse2=document.createElement("span");
    let spanfalse3=document.createElement("span");
    let contenutrue=document.createTextNode("✔");
    spantrue.style.color="green";
    spantrue.appendChild(contenutrue);
    spantrue.style.margin="0 0 0 "+spacing+"%";
    for(ee=1;ee<=3;ee++){
        let obj=eval("spanfalse"+ee);
        obj.style.margin="0 0 0 "+spacing+"%";
        let contenufalse=document.createTextNode("❌");
        obj.appendChild(contenufalse);
    }
    if(index==1){
        document.getElementById("solution1").appendChild(spantrue);
        document.getElementById("solution2").appendChild(spanfalse1);
        document.getElementById("solution3").appendChild(spanfalse2);
        document.getElementById("solution4").appendChild(spanfalse3);
    }
    if(index==2){
        document.getElementById("solution1").appendChild(spanfalse1);
        document.getElementById("solution2").appendChild(spantrue);
        document.getElementById("solution3").appendChild(spanfalse2);
        document.getElementById("solution4").appendChild(spanfalse3);
    }
    if(index==3){
        document.getElementById("solution1").appendChild(spanfalse1);
        document.getElementById("solution2").appendChild(spanfalse2);
        document.getElementById("solution3").appendChild(spantrue);
        document.getElementById("solution4").appendChild(spanfalse3);
    }
    if(index==4){
        document.getElementById("solution1").appendChild(spanfalse1);
        document.getElementById("solution2").appendChild(spanfalse2);
        document.getElementById("solution3").appendChild(spanfalse3);
        document.getElementById("solution4").appendChild(spantrue);
    }
}
document.getElementById("solution1").addEventListener("click",function(){verification(3,75)});
document.getElementById("solution2").addEventListener("click",function(){verification(3,75)});
document.getElementById("solution3").addEventListener("click",function(){verification(3,75)});
document.getElementById("solution4").addEventListener("click",function(){verification(3,75)});

function slideforquizstarwars(index){
    let question1=document.createElement("div");
    let solution1=document.createElement("div");
    let solution2=document.createElement("div");
    let solution3=document.createElement("div");
    let solution4=document.createElement("div");
    question1.setAttribute("id","question1");
    /*solution1.setAttribute("id","solution1");
    solution2.setAttribute("id","solution2");
    solution3.setAttribute("id","solution3");
    solution4.setAttribute("id","solution4");*/
    starwarsquiz22=document.getElementById("starwarsquiz");
    starwarsquiz22.parentNode.removeChild(starwarsquiz22);
    satrwarsquiz=document.createElement("div");
    starwarsquiz.appendChild(question1)
    starwarsquiz.setAttribute("id","starwarsquiz");
    document.getElementById("containerofstarwars").insertBefore(starwarsquiz,document.getElementById("sliderofquiz"));
    for(pp=1;pp<5;pp++){
        let obj=eval("solution"+pp);
        obj.setAttribute("class","answersof1");
        obj.setAttribute("id","solution"+pp);
        starwarsquiz.appendChild(obj);
    }
    if(index==0){
        let contenu11=document.createElement("span");
        let insidecontenu11=document.createTextNode("When was Marvel Entertainment created ?");
        contenu11.appendChild(insidecontenu11);
        question1.appendChild(contenu11);
        let contenu22=document.createElement("span");
        let insidecontenu22=document.createTextNode("→ 1947");
        contenu22.appendChild(insidecontenu22);
        solution1.appendChild(contenu22);
        let contenu33=document.createElement("span");
        let insidecontenu33=document.createTextNode("→ 1968");
        contenu33.appendChild(insidecontenu33);
        solution2.appendChild(contenu33);
        let contenu44=document.createElement("span");
        let insidecontenu44=document.createTextNode("→ 1939");
        contenu44.appendChild(insidecontenu44);
        solution3.appendChild(contenu44);
        let contenu55=document.createElement("span");
        let insidecontenu55=document.createTextNode("→ 1998");
        contenu55.appendChild(insidecontenu55);
        solution4.appendChild(contenu55);
        document.getElementById("solution1").addEventListener("click",function(){verification(3,75)});
        document.getElementById("solution2").addEventListener("click",function(){verification(3,75)});
        document.getElementById("solution3").addEventListener("click",function(){verification(3,75)});
        document.getElementById("solution4").addEventListener("click",function(){verification(3,75)});
    } 
    if(index==1){
        let contenu11=document.createElement("span");
        let insidecontenu11=document.createTextNode("What was the first product made by Marvel Entertainment ?");
        contenu11.appendChild(insidecontenu11);
        question1.appendChild(contenu11);
        let contenu22=document.createElement("span");
        let insidecontenu22=document.createTextNode("→ A Film");
        contenu22.appendChild(insidecontenu22);
        solution1.appendChild(contenu22);
        let contenu33=document.createElement("span");
        let insidecontenu33=document.createTextNode("→ A comic book");
        contenu33.appendChild(insidecontenu33);
        solution2.appendChild(contenu33);
        let contenu44=document.createElement("span");
        let insidecontenu44=document.createTextNode("→ A TV Show");
        contenu44.appendChild(insidecontenu44);
        solution3.appendChild(contenu44);
        let contenu55=document.createElement("span");
        let insidecontenu55=document.createTextNode("→ A Game");
        contenu55.appendChild(insidecontenu55);
        solution4.appendChild(contenu55); 
        document.getElementById("solution1").addEventListener("click",function(){verification(2,60)});
        document.getElementById("solution2").addEventListener("click",function(){verification(2,60)});
        document.getElementById("solution3").addEventListener("click",function(){verification(2,60)});
        document.getElementById("solution4").addEventListener("click",function(){verification(2,60)});
    }
    if(index==2){
        let contenu11=document.createElement("span");
        let insidecontenu11=document.createTextNode("What is the last product made by marvel ?(current date 16 november 2021)");
        contenu11.appendChild(insidecontenu11);
        question1.appendChild(contenu11);
        let contenu22=document.createElement("span");
        let insidecontenu22=document.createTextNode("→ Black Widow");
        contenu22.appendChild(insidecontenu22);
        solution1.appendChild(contenu22);
        let contenu33=document.createElement("span");
        let insidecontenu33=document.createTextNode("→ Avengers :Endgame");
        contenu33.appendChild(insidecontenu33);
        solution2.appendChild(contenu33);
        let contenu44=document.createElement("span");
        let insidecontenu44=document.createTextNode("→ WandaVision");
        contenu44.appendChild(insidecontenu44);
        solution3.appendChild(contenu44);
        let contenu55=document.createElement("span");
        let insidecontenu55=document.createTextNode("→ Shan-chi and the Legend of the Ten Rings");
        contenu55.appendChild(insidecontenu55);
        solution4.appendChild(contenu55);
        document.getElementById("solution1").addEventListener("click",function(){verification(1,30)});
        document.getElementById("solution2").addEventListener("click",function(){verification(1,30)});
        document.getElementById("solution3").addEventListener("click",function(){verification(1,30)});
        document.getElementById("solution4").addEventListener("click",function(){verification(1,30)});
    }
    if(index==3){
        //How much money did marvel make from Avengers :Endgame(2.788 billion)
        let contenu11=document.createElement("span");
        let insidecontenu11=document.createTextNode("How much money did marvel make from Avengers :Endgame");
        contenu11.appendChild(insidecontenu11);
        question1.appendChild(contenu11);
        let contenu22=document.createElement("span");
        let insidecontenu22=document.createTextNode("→ 2.549 Billion $");
        contenu22.appendChild(insidecontenu22);
        solution1.appendChild(contenu22);
        let contenu33=document.createElement("span");
        let insidecontenu33=document.createTextNode("→ Exactly 1 Billion $");
        contenu33.appendChild(insidecontenu33);
        solution2.appendChild(contenu33);
        let contenu44=document.createElement("span");
        let insidecontenu44=document.createTextNode("→ 985.54 Million $");
        contenu44.appendChild(insidecontenu44);
        solution3.appendChild(contenu44);
        let contenu55=document.createElement("span");
        let insidecontenu55=document.createTextNode("→ 2.788 Billion $");//this is the right one
        contenu55.appendChild(insidecontenu55);
        solution4.appendChild(contenu55);
        document.getElementById("solution1").addEventListener("click",function(){verification(4,60)});
        document.getElementById("solution2").addEventListener("click",function(){verification(4,60)});
        document.getElementById("solution3").addEventListener("click",function(){verification(4,60)});
        document.getElementById("solution4").addEventListener("click",function(){verification(4,60)});
    }
}