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
        let insidecontenu11=document.createTextNode("What is the last product made by marvel ?(current date 16 july 2021)");
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
sssss=1;
function slideforquizstarwars(index){
    let question2=document.createElement("div");
    let solution5=document.createElement("div");
    let solution6=document.createElement("div");
    let solution7=document.createElement("div");
    let solution8=document.createElement("div");
    question2.setAttribute("id","question2");
    /*solution1.setAttribute("id","solution1");
    solution2.setAttribute("id","solution2");
    solution3.setAttribute("id","solution3");
    solution4.setAttribute("id","solution4");*/
    starwarsquiz22=document.getElementById("starwarsquiz");
    starwarsquiz22.parentNode.removeChild(starwarsquiz22);
    starwarsquiz=document.createElement("div");
    starwarsquiz.appendChild(question2)
    starwarsquiz.setAttribute("id","starwarsquiz");
    document.getElementById("containerofstarwars").insertBefore(starwarsquiz,document.getElementById("sliderofquiz2"));
    for(pp=5;pp<9;pp++){
        let obj=eval("solution"+pp);
        obj.setAttribute("class","answersof2");
        obj.setAttribute("id","solution"+pp);
        starwarsquiz.appendChild(obj);
    }
    if(index==0){
        let contenu11=document.createElement("span");
        let insidecontenu11=document.createTextNode("What is the first film of the Star Wars Saga ?");
        contenu11.appendChild(insidecontenu11);
        question2.appendChild(contenu11);
        let contenu22=document.createElement("span");
        let insidecontenu22=document.createTextNode("→ Star Wars,Return of the Jedi");
        contenu22.appendChild(insidecontenu22);
        solution5.appendChild(contenu22);
        let contenu33=document.createElement("span");
        let insidecontenu33=document.createTextNode("→ Star Wars: The Last Jedi");
        contenu33.appendChild(insidecontenu33);
        solution6.appendChild(contenu33);
        let contenu44=document.createElement("span");
        let insidecontenu44=document.createTextNode("→ Star Wars: Episode I – The Phantom Menace");
        contenu44.appendChild(insidecontenu44);
        solution7.appendChild(contenu44);
        let contenu55=document.createElement("span");
        let insidecontenu55=document.createTextNode("→ Star Wars, Episode IV : A New Hope");//the true one
        contenu55.appendChild(insidecontenu55);
        solution8.appendChild(contenu55);
        document.getElementById("solution5").addEventListener("click",function(){verificationstarwars(4,50)});
        document.getElementById("solution6").addEventListener("click",function(){verificationstarwars(4,50)});
        document.getElementById("solution7").addEventListener("click",function(){verificationstarwars(4,50)});
        document.getElementById("solution8").addEventListener("click",function(){verificationstarwars(4,50)});
    } 
    if(index==1){
        let contenu11=document.createElement("span");
        let insidecontenu11=document.createTextNode("Who owned Star Wars before being bought by Disney ?");
        contenu11.appendChild(insidecontenu11);
        question2.appendChild(contenu11);
        let contenu22=document.createElement("span");
        let insidecontenu22=document.createTextNode("→ AT&T Inc");
        contenu22.appendChild(insidecontenu22);
        solution5.appendChild(contenu22);
        let contenu33=document.createElement("span");
        let insidecontenu33=document.createTextNode("→ Comcast");
        contenu33.appendChild(insidecontenu33);
        solution6.appendChild(contenu33);
        let contenu44=document.createElement("span");
        let insidecontenu44=document.createTextNode("→ Fox");//the true one
        contenu44.appendChild(insidecontenu44);
        solution7.appendChild(contenu44);
        let contenu55=document.createElement("span");
        let insidecontenu55=document.createTextNode("→ CBS");
        contenu55.appendChild(insidecontenu55);
        solution8.appendChild(contenu55); 
        document.getElementById("solution5").addEventListener("click",function(){verificationstarwars(3,60)});
        document.getElementById("solution6").addEventListener("click",function(){verificationstarwars(3,60)});
        document.getElementById("solution7").addEventListener("click",function(){verificationstarwars(3,60)});
        document.getElementById("solution8").addEventListener("click",function(){verificationstarwars(3,60)});
    }
    if(index==2){
        let contenu11=document.createElement("span");
        let insidecontenu11=document.createTextNode("What is the last film of the Saga Star Wars ?(current date 16 july 2021)");
        contenu11.appendChild(insidecontenu11);
        question2.appendChild(contenu11);
        let contenu22=document.createElement("span");
        let insidecontenu22=document.createTextNode("→ The Empire Strikes Back");
        contenu22.appendChild(insidecontenu22);
        solution5.appendChild(contenu22);
        let contenu33=document.createElement("span");
        let insidecontenu33=document.createTextNode("→ Star Wars: The Rise of Skywalker");
        contenu33.appendChild(insidecontenu33);
        solution6.appendChild(contenu33);
        let contenu44=document.createElement("span");
        let insidecontenu44=document.createTextNode("→ Star Wars: Episode III – Revenge of the Sith");
        contenu44.appendChild(insidecontenu44);
        solution7.appendChild(contenu44);
        let contenu55=document.createElement("span");
        let insidecontenu55=document.createTextNode("→ Star Wars: Episode II – Attack of the Clones");
        contenu55.appendChild(insidecontenu55);
        solution8.appendChild(contenu55);
        document.getElementById("solution5").addEventListener("click",function(){verificationstarwars(2,30)});
        document.getElementById("solution6").addEventListener("click",function(){verificationstarwars(2,30)});
        document.getElementById("solution7").addEventListener("click",function(){verificationstarwars(2,30)});
        document.getElementById("solution8").addEventListener("click",function(){verificationstarwars(2,30)});
    }
    if(index==3){
        //How much money did marvel make from Avengers :Endgame(2.788 billion)
        let contenu11=document.createElement("span");
        let insidecontenu11=document.createTextNode("Which is the best selling Star Wars film (2 billion $) ?");
        contenu11.appendChild(insidecontenu11);
        question2.appendChild(contenu11);
        let contenu22=document.createElement("span");
        let insidecontenu22=document.createTextNode("→ Star Wars: The Force Awakens");
        contenu22.appendChild(insidecontenu22);
        solution5.appendChild(contenu22);
        let contenu33=document.createElement("span");
        let insidecontenu33=document.createTextNode("→ The Return of the Jedi");
        contenu33.appendChild(insidecontenu33);
        solution6.appendChild(contenu33);
        let contenu44=document.createElement("span");
        let insidecontenu44=document.createTextNode("→ Star Wars:The Empire Strikes Back");
        contenu44.appendChild(insidecontenu44);
        solution7.appendChild(contenu44);
        let contenu55=document.createElement("span");
        let insidecontenu55=document.createTextNode("→ Star Wars :The Last Jedi");//this is the right one
        contenu55.appendChild(insidecontenu55);
        solution8.appendChild(contenu55);
        document.getElementById("solution5").addEventListener("click",function(){verificationstarwars(1,40)});
        document.getElementById("solution6").addEventListener("click",function(){verificationstarwars(1,40)});
        document.getElementById("solution7").addEventListener("click",function(){verificationstarwars(1,40)});
        document.getElementById("solution8").addEventListener("click",function(){verificationstarwars(1,40)});
    }
}
document.getElementById("arrowrightquiz1").addEventListener("click",function(){addforslider(sssss)})
document.getElementById("arrowleftquiz1").addEventListener("click",function(){addforslider(sssss)})
function verificationstarwars(index,spacing){
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
        document.getElementById("solution5").appendChild(spantrue);
        document.getElementById("solution6").appendChild(spanfalse1);
        document.getElementById("solution7").appendChild(spanfalse2);
        document.getElementById("solution8").appendChild(spanfalse3);
    }
    else if(index==2){
        document.getElementById("solution5").appendChild(spanfalse1);
        document.getElementById("solution6").appendChild(spantrue);
        document.getElementById("solution7").appendChild(spanfalse2);
        document.getElementById("solution8").appendChild(spanfalse3);
    }
    else if(index==3){
        document.getElementById("solution5").appendChild(spanfalse1);
        document.getElementById("solution6").appendChild(spanfalse2);
        document.getElementById("solution7").appendChild(spantrue);
        document.getElementById("solution8").appendChild(spanfalse3);
    }
    else if(index==4){
        document.getElementById("solution5").appendChild(spanfalse1);
        document.getElementById("solution6").appendChild(spanfalse2);
        document.getElementById("solution7").appendChild(spanfalse3);
        document.getElementById("solution8").appendChild(spantrue);
    }
}
function addforsliderstarwars(){
    if (sssss==3){
        sssss==0;
    }
    else{
        sssss++;
    }
}
function diminishforsliderstarwars(){
    if (sssss==0){
        sssss==3;
    }
    else{
        sssss--;
    }
}
document.getElementById("arrowleftquiz1").addEventListener("click",function(){addforsliderstarwars()});
document.getElementById("arrowrightquiz1").addEventListener("click",function(){diminishforsliderstarwars()});
document.getElementById("solution5").addEventListener("click",function(){verificationstarwars(4,60)});
document.getElementById("solution6").addEventListener("click",function(){verificationstarwars(4,60)});
document.getElementById("solution7").addEventListener("click",function(){verificationstarwars(4,60)});
document.getElementById("solution8").addEventListener("click",function(){verificationstarwars(4,60)});
//dc comics(repeat  from marvel because it doesn't seem to work)
function slideforquizdc(index){
    let question3=document.createElement("div");
    let solution9=document.createElement("div");
    let solution10=document.createElement("div");
    let solution11=document.createElement("div");
    let solution12=document.createElement("div");
    question3.setAttribute("id","question3");
    /*solution1.setAttribute("id","solution1");
    solution2.setAttribute("id","solution2");
    solution3.setAttribute("id","solution3");
    solution4.setAttribute("id","solution4");*/
    dcquiz22=document.getElementById("dcquiz");
    dcquiz22.parentNode.removeChild(dcquiz22);
    dcquiz=document.createElement("div");
    dcquiz.appendChild(question3);
    dcquiz.setAttribute("id","dcquiz");
    document.getElementById("containerofdc").insertBefore(dcquiz,document.getElementById("sliderofquiz3"));
    for(pp=9;pp<13;pp++){
        let obj=eval("solution"+pp);
        obj.setAttribute("class","answersof3");
        obj.setAttribute("id","solution"+pp);
        dcquiz.appendChild(obj);
    }
    if(index==0){
        let contenu11=document.createElement("span");
        let insidecontenu11=document.createTextNode("When was DC comics created ?");
        contenu11.appendChild(insidecontenu11);
        question3.appendChild(contenu11);
        let contenu22=document.createElement("span");
        let insidecontenu22=document.createTextNode("→ 1945");
        contenu22.appendChild(insidecontenu22);
        solution9.appendChild(contenu22);
        let contenu33=document.createElement("span");
        let insidecontenu33=document.createTextNode("→ 1934");//true
        contenu33.appendChild(insidecontenu33);
        solution10.appendChild(contenu33);
        let contenu44=document.createElement("span");
        let insidecontenu44=document.createTextNode("→ 1988");
        contenu44.appendChild(insidecontenu44);
        solution11.appendChild(contenu44);
        let contenu55=document.createElement("span");
        let insidecontenu55=document.createTextNode("→ 1963");
        contenu55.appendChild(insidecontenu55);
        solution12.appendChild(contenu55);
        document.getElementById("solution9").addEventListener("click",function(){verificationdc(2,60)});
        document.getElementById("solution10").addEventListener("click",function(){verificationdc(2,60)});
        document.getElementById("solution11").addEventListener("click",function(){verificationdc(2,60)});
        document.getElementById("solution12").addEventListener("click",function(){verificationdc(2,60)});
    } 
    if(index==1){
        let contenu11=document.createElement("span");
        let insidecontenu11=document.createTextNode("What was the best selling DC film($1,148 billion) ?");
        contenu11.appendChild(insidecontenu11);
        question3.appendChild(contenu11);
        let contenu22=document.createElement("span");
        let insidecontenu22=document.createTextNode("→ Joker");
        contenu22.appendChild(insidecontenu22);
        solution9.appendChild(contenu22);
        let contenu33=document.createElement("span");
        let insidecontenu33=document.createTextNode("→ Wonder Woman");
        contenu33.appendChild(insidecontenu33);
        solution10.appendChild(contenu33);
        let contenu44=document.createElement("span");
        let insidecontenu44=document.createTextNode("→ Shazam");
        contenu44.appendChild(insidecontenu44);
        solution11.appendChild(contenu44);
        let contenu55=document.createElement("span");
        let insidecontenu55=document.createTextNode("→ Aquaman");
        contenu55.appendChild(insidecontenu55);
        solution12.appendChild(contenu55); 
        document.getElementById("solution9").addEventListener("click",function(){verificationdc(4,40)});
        document.getElementById("solution10").addEventListener("click",function(){verificationdc(4,40)});
        document.getElementById("solution11").addEventListener("click",function(){verificationdc(4,40)});
        document.getElementById("solution12").addEventListener("click",function(){verificationdc(4,40)});
    }
    if(index==2){
        let contenu11=document.createElement("span");
        let insidecontenu11=document.createTextNode("Who is the current owner of dc comics ?");
        contenu11.appendChild(insidecontenu11);
        question3.appendChild(contenu11);
        let contenu22=document.createElement("span");
        let insidecontenu22=document.createTextNode("→ Disney");
        contenu22.appendChild(insidecontenu22);
        solution9.appendChild(contenu22);
        let contenu33=document.createElement("span");
        let insidecontenu33=document.createTextNode("→ AT&T");
        contenu33.appendChild(insidecontenu33);
        solution10.appendChild(contenu33);
        let contenu44=document.createElement("span");
        let insidecontenu44=document.createTextNode("→ CBS");
        contenu44.appendChild(insidecontenu44);
        solution11.appendChild(contenu44);
        let contenu55=document.createElement("span");
        let insidecontenu55=document.createTextNode("→ Fox");
        contenu55.appendChild(insidecontenu55);
        solution12.appendChild(contenu55);
        document.getElementById("solution9").addEventListener("click",function(){verificationdc(1,60)});
        document.getElementById("solution10").addEventListener("click",function(){verificationdc(1,60)});
        document.getElementById("solution11").addEventListener("click",function(){verificationdc(1,60)});
        document.getElementById("solution12").addEventListener("click",function(){verificationdc(1,60)});
    }
    if(index==3){
        //How much money did marvel make from Avengers :Endgame(2.788 billion)
        let contenu11=document.createElement("span");
        let insidecontenu11=document.createTextNode("What is the upcoming film that will be produced by DC Comics ");
        contenu11.appendChild(insidecontenu11);
        question3.appendChild(contenu11);
        let contenu22=document.createElement("span");
        let insidecontenu22=document.createTextNode("→ Justice league vs The Fatal Five");
        contenu22.appendChild(insidecontenu22);
        solution9.appendChild(contenu22);
        let contenu33=document.createElement("span");
        let insidecontenu33=document.createTextNode("→ Birds of Prey");
        contenu33.appendChild(insidecontenu33);
        solution10.appendChild(contenu33);
        let contenu44=document.createElement("span");
        let insidecontenu44=document.createTextNode("→ The Suicide Squad");
        contenu44.appendChild(insidecontenu44);
        solution11.appendChild(contenu44);
        let contenu55=document.createElement("span");
        let insidecontenu55=document.createTextNode("→ The Flash");//this is the right one
        contenu55.appendChild(insidecontenu55);
        solution12.appendChild(contenu55);
        document.getElementById("solution9").addEventListener("click",function(){verificationdc(4,30)});
        document.getElementById("solution10").addEventListener("click",function(){verificationdc(4,30)});
        document.getElementById("solution11").addEventListener("click",function(){verificationdc(4,30)});
        document.getElementById("solution12").addEventListener("click",function(){verificationdc(4,30)});
    }
}
ddddd=1
function addforsliderdc(){
    if (ddddd==3){
        ddddd==0;
    }
    else{
        ddddd++;
    }
}
function diminishforsliderdc(){
    if (ddddd==0){
        ddddd==3;
    }
    else{
        ddddd--;
    }
}
document.getElementById("arrowleftquiz2").addEventListener("click",function(){addforsliderdc()});
document.getElementById("arrowrightquiz2").addEventListener("click",function(){diminishforsliderdc()})
function verificationdc(index,spacing){
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
        document.getElementById("solution9").appendChild(spantrue);
        document.getElementById("solution10").appendChild(spanfalse1);
        document.getElementById("solution11").appendChild(spanfalse2);
        document.getElementById("solution12").appendChild(spanfalse3);
    }
    if(index==2){
        document.getElementById("solution9").appendChild(spanfalse1);
        document.getElementById("solution10").appendChild(spantrue);
        document.getElementById("solution11").appendChild(spanfalse2);
        document.getElementById("solution12").appendChild(spanfalse3);
    }
    if(index==3){
        document.getElementById("solution9").appendChild(spanfalse1);
        document.getElementById("solution10").appendChild(spanfalse2);
        document.getElementById("solution11").appendChild(spantrue);
        document.getElementById("solution12").appendChild(spanfalse3);
    }
    if(index==4){
        document.getElementById("solution9").appendChild(spanfalse1);
        document.getElementById("solution10").appendChild(spanfalse2);
        document.getElementById("solution11").appendChild(spanfalse3);
        document.getElementById("solution12").appendChild(spantrue);
    }
}
document.getElementById("solution9").addEventListener("click",function(){verificationdc(3,75)});
document.getElementById("solution10").addEventListener("click",function(){verificationdc(3,75)});
document.getElementById("solution11").addEventListener("click",function(){verificationdc(3,75)});
document.getElementById("solution12").addEventListener("click",function(){verificationdc(3,75)});
//universal
function slideforquizuniversal(index){
    let question4=document.createElement("div");
    let solution13=document.createElement("div");
    let solution14=document.createElement("div");
    let solution15=document.createElement("div");
    let solution16=document.createElement("div");
    question4.setAttribute("id","question4");
    /*solution1.setAttribute("id","solution1");
    solution2.setAttribute("id","solution2");
    solution3.setAttribute("id","solution3");
    solution4.setAttribute("id","solution4");*/
    universalquiz22=document.getElementById("universalquiz");
    universalquiz22.parentNode.removeChild(universalquiz22);
    universalquiz=document.createElement("div");
    universalquiz.appendChild(question4);
    universalquiz.setAttribute("id","universalquiz");
    document.getElementById("containerofuniversal").insertBefore(universalquiz,document.getElementById("sliderofquiz4"));
    for(pp=13;pp<17;pp++){
        let obj=eval("solution"+pp);
        obj.setAttribute("class","answersof4");
        obj.setAttribute("id","solution"+pp);
        universalquiz.appendChild(obj);
    }
    if(index==0){
        let contenu11=document.createElement("span");
        let insidecontenu11=document.createTextNode("Who owns Universal Studios ?");
        contenu11.appendChild(insidecontenu11);
        question4.appendChild(contenu11);
        let contenu22=document.createElement("span");
        let insidecontenu22=document.createTextNode("→ AT&T");
        contenu22.appendChild(insidecontenu22);
        solution13.appendChild(contenu22);
        let contenu33=document.createElement("span");
        let insidecontenu33=document.createTextNode("→ Disney");
        contenu33.appendChild(insidecontenu33);
        solution14.appendChild(contenu33);
        let contenu44=document.createElement("span");
        let insidecontenu44=document.createTextNode("→ Fox");
        contenu44.appendChild(insidecontenu44);
        solution15.appendChild(contenu44);
        let contenu55=document.createElement("span");
        let insidecontenu55=document.createTextNode("→ Comcast");//true
        contenu55.appendChild(insidecontenu55);
        solution16.appendChild(contenu55);
        document.getElementById("solution13").addEventListener("click",function(){verificationuniversal(4,60)});
        document.getElementById("solution14").addEventListener("click",function(){verificationuniversal(4,60)});
        document.getElementById("solution15").addEventListener("click",function(){verificationuniversal(4,60)});
        document.getElementById("solution16").addEventListener("click",function(){verificationuniversal(4,60)});
    } 
    if(index==1){
        let contenu11=document.createElement("span");
        let insidecontenu11=document.createTextNode("What is the most successful film made by Universal Studios(over 1 billion $) ?");
        contenu11.appendChild(insidecontenu11);
        question4.appendChild(contenu11);
        let contenu22=document.createElement("span");
        let insidecontenu22=document.createTextNode("→ Jurassic World");
        contenu22.appendChild(insidecontenu22);
        solution13.appendChild(contenu22);
        let contenu33=document.createElement("span");
        let insidecontenu33=document.createTextNode("→ Minions");
        contenu33.appendChild(insidecontenu33);
        solution14.appendChild(contenu33);
        let contenu44=document.createElement("span");
        let insidecontenu44=document.createTextNode("→ Fast & Furious 9");
        contenu44.appendChild(insidecontenu44);
        solution15.appendChild(contenu44);
        let contenu55=document.createElement("span");
        let insidecontenu55=document.createTextNode("→ King Kong");
        contenu55.appendChild(insidecontenu55);
        solution16.appendChild(contenu55); 
        document.getElementById("solution13").addEventListener("click",function(){verificationuniversal(1,50)});
        document.getElementById("solution14").addEventListener("click",function(){verificationuniversal(1,50)});
        document.getElementById("solution15").addEventListener("click",function(){verificationuniversal(1,50)});
        document.getElementById("solution16").addEventListener("click",function(){verificationuniversal(1,50)});
    }
    if(index==2){
        let contenu11=document.createElement("span");
        let insidecontenu11=document.createTextNode("What is the latest film released by Universal Studios ?(current date 16 july 2021)");
        contenu11.appendChild(insidecontenu11);
        question4.appendChild(contenu11);
        let contenu22=document.createElement("span");
        let insidecontenu22=document.createTextNode("→ American Nightmare 5");//true
        contenu22.appendChild(insidecontenu22);
        solution13.appendChild(contenu22);
        let contenu33=document.createElement("span");
        let insidecontenu33=document.createTextNode("→ Shrek");
        contenu33.appendChild(insidecontenu33);
        solution14.appendChild(contenu33);
        let contenu44=document.createElement("span");
        let insidecontenu44=document.createTextNode("→ Jurassic world fallen kingdom");
        contenu44.appendChild(insidecontenu44);
        solution15.appendChild(contenu44);
        let contenu55=document.createElement("span");
        let insidecontenu55=document.createTextNode("→ King Kong");
        contenu55.appendChild(insidecontenu55);
        solution16.appendChild(contenu55);
        document.getElementById("solution13").addEventListener("click",function(){verificationuniversal(1,50)});
        document.getElementById("solution14").addEventListener("click",function(){verificationuniversal(1,50)});
        document.getElementById("solution15").addEventListener("click",function(){verificationuniversal(1,50)});
        document.getElementById("solution16").addEventListener("click",function(){verificationuniversal(1,50)});
    }
    if(index==3){
        //How much money did marvel make from Avengers :Endgame(2.788 billion)
        let contenu11=document.createElement("span");
        let insidecontenu11=document.createTextNode("When was Universal Studios created ? ");
        contenu11.appendChild(insidecontenu11);
        question4.appendChild(contenu11);
        let contenu22=document.createElement("span");
        let insidecontenu22=document.createTextNode("→ 1912/03/15");
        contenu22.appendChild(insidecontenu22);
        solution13.appendChild(contenu22);
        let contenu33=document.createElement("span");
        let insidecontenu33=document.createTextNode("→ 1913/06/15");
        contenu33.appendChild(insidecontenu33);
        solution14.appendChild(contenu33);
        let contenu44=document.createElement("span");
        let insidecontenu44=document.createTextNode("→ 1930/02/15");
        contenu44.appendChild(insidecontenu44);
        solution15.appendChild(contenu44);
        let contenu55=document.createElement("span");
        let insidecontenu55=document.createTextNode("→ 1912/04/30");//this is the right one
        contenu55.appendChild(insidecontenu55);
        solution16.appendChild(contenu55);
        document.getElementById("solution13").addEventListener("click",function(){verificationuniversal(4,30)});
        document.getElementById("solution14").addEventListener("click",function(){verificationuniversal(4,30)});
        document.getElementById("solution15").addEventListener("click",function(){verificationuniversal(4,30)});
        document.getElementById("solution16").addEventListener("click",function(){verificationuniversal(4,30)});
    }
}
uuuuu=1;
function addforslideruniversal(){
    if (uuuuu==3){
        uuuuu==0;
    }
    else{
        uuuuu++;
    }
}
function diminishforslideruniversal(){
    if (uuuuu==0){
        uuuuu==3;
    }
    else{
        uuuuu--;
    }
}
document.getElementById("arrowleftquiz3").addEventListener("click",function(){diminishforslideruniversal()});
document.getElementById("arrowrightquiz3").addEventListener("click",function(){addforslideruniversal()})
function verificationuniversal(index,spacing){
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
        document.getElementById("solution13").appendChild(spantrue);
        document.getElementById("solution14").appendChild(spanfalse1);
        document.getElementById("solution15").appendChild(spanfalse2);
        document.getElementById("solution16").appendChild(spanfalse3);
    }
    if(index==2){
        document.getElementById("solution13").appendChild(spanfalse1);
        document.getElementById("solution14").appendChild(spantrue);
        document.getElementById("solution15").appendChild(spanfalse2);
        document.getElementById("solution16").appendChild(spanfalse3);
    }
    if(index==3){
        document.getElementById("solution13").appendChild(spanfalse1);
        document.getElementById("solution14").appendChild(spanfalse2);
        document.getElementById("solution15").appendChild(spantrue);
        document.getElementById("solution16").appendChild(spanfalse3);
    }
    if(index==4){
        document.getElementById("solution13").appendChild(spanfalse1);
        document.getElementById("solution14").appendChild(spanfalse2);
        document.getElementById("solution15").appendChild(spanfalse3);
        document.getElementById("solution16").appendChild(spantrue);
    }
}
document.getElementById("solution13").addEventListener("click",function(){verificationuniversal(3,75)});
document.getElementById("solution14").addEventListener("click",function(){verificationuniversal(3,75)});
document.getElementById("solution15").addEventListener("click",function(){verificationuniversal(3,75)});
document.getElementById("solution16").addEventListener("click",function(){verificationuniversal(3,75)});

function video(src){
    let body=document.querySelector("body");
    let headd=document.querySelector("head")
    containerofhead=headd;
    containerr=body;
    let html=document.querySelector('html');
    html.removeChild(body);
    document.write("<video id='video' controls autoplay oncanplaythrough='videoduration()'><source src="+src+" type=video/mp4></video>");
    document.write("<script src='js/script.js'></script>")
    /*video1=document.createElement("video");
    video1.setAttribute("autoplay","")
    video1.setAttribute("controls","")
    /*video1.setAttribute("oncanplaythrough","quit()");
    source1=document.createElement("source");
    source1.setAttribute("src",src);
    source1.setAttribute("type","video/mp4")
    video1.appendChild(source1);
    html.appendChild(video1);*/
}
function videoduration(){
    video2=document.querySelector("#video");
    document.getElementById("video").requestFullscreen()
    //document.getElementById("video").requestFullScreen();
    ttt=video2.duration;
    ttt*=1000;
    setTimeout(function(){
        let html1=document.querySelector('html');
        let body1=document.querySelector('body');
        html1.removeChild(body1);
        html1.removeChild(document.querySelector("head"))
        html1.appendChild(containerofhead);
        html1.appendChild(containerr);
    },ttt)
}
function resetHref() {
    location.hash = '';
}
document.querySelector("#link1").addEventListener("click",function(){resetHref()});
document.querySelector("#link2").addEventListener("click",function(){resetHref()})
function checktext(){
    validity1="invalid";
    name1=document.getElementById("name").value;
    namenotcontent=document.querySelector("#name");
    namenotcontent1=document.getElementById("name")
    form1=document.querySelector("form");
    //email=document.getElementById("email");
    //
    if (namenotcontent.nextElementSibling.innerHTML=="⛔ Invalid Name. Please enter a valid one."){
        if(name1==null || name1==0 || name1=='NaN' || name1==undefined){
            /*
            let texr=document.createElement("p");
            let contenu=document.createTextNode("⛔ Invalid Name. Please enter a valid one.");
            texr.appendChild(contenu);
            namenotcontent1.parentNode.removeChild(namenotcontent1.nextElementSibling);
            alert("it didnt't1");
            form1.insertBefore(texr,document.querySelector('#label2'));
            return false;*/
            //alert("it didn't1");
            validity1="invalid";
            return false;
        } 
        
        else if (name1!=null || name1!=0 || name1!='NaN' || name1!=undefined){
            let texr=document.createElement("pre");
            let contenu=document.createTextNode("✅ Valid Name");
            texr.appendChild(contenu);
            namenotcontent1.parentNode.removeChild(namenotcontent1.nextElementSibling);
            form1.insertBefore(texr,document.querySelector('#label2'));
            validity1="valid";
            return false;
    }
}
    else if(namenotcontent.nextElementSibling.innerHTML=="✅ Valid Name"){
        if (name1==null || name1==0 || name1=='NaN' || name1==undefined){
            let texr=document.createElement("p");
            let contenu=document.createTextNode("⛔ Invalid Name. Please enter a valid one.");
            console.log(contenu.textContent);
            //contenu.textContent.style.color="red";
            texr.appendChild(contenu);
            console.log(document.querySelector('#label2'));
            form1.insertBefore(texr,document.querySelector('#label2'));
            namenotcontent1.parentNode.removeChild(namenotcontent1.nextElementSibling);
            //alert("it didnt't2");
            validity1="invalid";
            return false;
        }
        else if(name1!=null || name1!=0 || name1!=NaN || name1!=undefined){
            let texr=document.createElement("pre");
            let contenu=document.createTextNode("✅ Valid Name");
            texr.appendChild(contenu);
            namenotcontent1.parentNode.removeChild(namenotcontent1.nextElementSibling);
            form1.insertBefore(texr,document.querySelector('#label2'));
            //alert("it's entered2");
            validity1="valid";
            return false;
        }
    }
    else{	
        if (name1==null || name1==0 || name1=='NaN' || name1==undefined){
            let texr=document.createElement("p");
            let contenu=document.createTextNode("⛔ Invalid Name. Please enter a valid one.");
            console.log(contenu.textContent)
            //contenu.textContent.style.color="red";
            texr.appendChild(contenu);
            console.log(document.querySelector('#label2'));
            form1.insertBefore(texr,document.querySelector('#label2'));
            //alert("secondone");
            validity1="invalid";		
            return false;
        
        }
        else if (name1!=null || name1!=0 || name1!='NaN' || name1!=undefined){
            let texr=document.createElement("pre");
            let contenu=document.createTextNode("✅ Valid Name");
            texr.appendChild(contenu);
            form1.insertBefore(texr,document.querySelector('#label2'));
            //alert("firstone");
            validity1="valid";
            return false;
        }
    }
}
function checkemail(){
    let array1=[]
    validity2="invalid";
    let pparent=document.querySelector('form');
    let email1=document.querySelector("#email1").value;
    console.log(email1.indexOf("@"));
    for(var compt=email1.indexOf("@");compt<email1.length;compt++){
        if (email1.indexOf("@")==-1){break}
        if (email1[compt]==="@"){
            array1.push("@");
        }
    }
    //console.log(array1)
    if (document.getElementById("email1").nextElementSibling.textContent=="⛔ Invalid Email. Please enter a valid one." || document.getElementById("email1").nextElementSibling.textContent=="✅ Valid Email"){
            pparent.removeChild(document.getElementById("email1").nextElementSibling);
            //alert("entered")
        }
    if (array1.length ==1){
        let texr=document.createElement("pre");
        let contenu=document.createTextNode("✅ Valid Email");
        texr.appendChild(contenu);
        pparent.insertBefore(texr,document.getElementById("label3"));
        validity2="valid";
    }
    else{
        if (document.getElementById("email1").nextElementSibling.textContent=="⛔ Invalid Email. Please enter a valid one." || document.getElementById("email1").nextElementSibling.textContent=="✅ Valid Email"){
            pparent.removeChild(document.getElementById("email1").nextElementSibling);
            //alert("entered")
        }
        let texr=document.createElement("p");
        let contenu=document.createTextNode("⛔ Invalid Email. Please enter a valid one.");
        //console.log(contenu.textContent)
        //contenu.textContent.style.color="red";
        texr.appendChild(contenu);
        //console.log(document.querySelector('#label2'));
        pparent.insertBefore(texr,document.getElementById('label3'));
        validity2="invalid";
        /*alert(document.getElementById("email1").nextElementSibling);
        console.log(document.getElementById("email1").nextElementSibling.textContent);*/
    }
}
function checkpassword(){
    validity3="invalid"
    let maj="invalid";
    let min="invalid";
    let spch="invalid";
    let arrayofmaj=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","K","R","S","T","U","V","W","X","Y","Z"];
    let arrayofmin=["a","b","c","d","e","f","g","h","i","j","l","m","n","o","p","k","r","s","t","u","v","w","x","y","z"];
    let arrayofspch=["!","#",'"',"'","$","%","&","|","(",")","*","+","-","/",",","."," ",";","?","[","]","~","_","\"","@","§","£","¨","^","²","°","¤","=","<",">","0","1","2","3","4","5","6","7","8","9"]
    let passwd=document.getElementById("passwd");
    //console.log(passwd.nextElementSibling.textContent);
    var ppparent=passwd.parentNode;
    var test11=undefined;
    for (var ff=0;ff<passwd.parentNode.children.length;ff++){
        if((child2=ppparent.lastChild.previousSibling).textContent=="⛔ Invalid Password. Please write one that its length is greater than or equal to 8" || (child2=ppparent.lastChild.previousSibling).textContent=="✅ Valid password which has a length greater or equal to 8"){
            test11=true;
            console.log("truy");
        }
        else{
            test11=false;
        }
    }
    if (passwd.value.length<8){
        if (passwd.nextElementSibling==undefined){
            passwd.parentElement.removeChild(passwd.nextSibling);
            let texr=document.createElement("p");
            let contenu=document.createTextNode("⛔ Invalid Password. Please write one that its length is greater than or equal to 8");
            texr.appendChild(contenu);
            passwd.parentNode.appendChild(texr,document.getElementById('label3'));	
            validity3="invalid";
        }
        else if(test11==true){
            passwd.parentElement.removeChild(passwd.nextSibling);
            let texr=document.createElement("p");
            let contenu=document.createTextNode("⛔ Invalid Password. Please write one that its length is greater than or equal to 8");
            texr.appendChild(contenu);
            passwd.parentNode.appendChild(texr,document.getElementById('label3'));	
            validity3="invalid";
        }
    }
    else if(passwd.value.length>=8){
        if (passwd.nextElementSibling==undefined){
            let texr=document.createElement("pre");
            let contenu=document.createTextNode("✅ Valid password which has a length greater or equal to 8");
            texr.appendChild(contenu);
            passwd.parentNode.appendChild(texr,document.getElementById('label3'));
            validity3="valid";
        }
        else if(test11==true ){
            passwd.parentNode.removeChild(passwd.nextSibling);
            let texr=document.createElement("pre");
            let contenu=document.createTextNode("✅ Valid password which has a length greater or equal to 8");
            texr.appendChild(contenu);
            passwd.parentNode.appendChild(texr,document.getElementById('label3'));
            validity3="valid";
        }
    }
    //console.log(passwd.value);
    //console.log(passwd.value[1]);
    //console.log(arrayofmaj.length)
    for(var i=0;i<passwd.value.length;i++){
        for (var b=0;b<arrayofmaj.length;b++){
            if (passwd.value[i]==arrayofmaj[b]){
                maj="valid";
                console.log("it's entered");
                console.log(arrayofmaj[b]);
                break;
            }
            /*else{
                //console.log(passwd[i]);
                //console.log(arrayofmaj[b]);
            }*/
        }
        console.log("hello1");
        for (var b=0;b<arrayofmin.length;b++){
            if(passwd.value[i]==arrayofmin[b]){
                min="valid";
                console.log("it's entered");
                console.log(passwd[i]);
                //console.log(arrayofmaj[b]);
                break;
            }
            /*else{
                console.log(passwd[i]);
                console.log(arrayofmaj[b]);
            }*/
        }
        for(var b=0;b<arrayofspch.length;b++){
            if(passwd.value[i]==arrayofspch[b]){
                spch="valid";
                console.log("it's entered");
                //console.log(arrayofmaj[b]);
                break;
            }
            /*else{
                //console.log(passwd[i]);
                //console.log(arrayofmaj[b]);
            }*/
        }
    }
    console.log(maj,min,spch)
    if (maj=="valid" && min=="valid" && spch=="valid"){
        let texr=document.createElement("pre");
        let contenu=document.createTextNode("✅ Your password is strong");
        texr.appendChild(contenu);
        if (passwd.nextElementSibling.nextElementSibling==undefined){
            passwd.parentNode.appendChild(texr,document.getElementById('label3'));
        }
        else if(passwd.nextElementSibling.nextElementSibling.textContent=="Your password is not strong enough.Please try putting special and lowercase and uppercase characters in your password" || passwd.nextElementSibling.textContent=="✅ Your password is strong" ){
            passwd.parentElement.removeChild(passwd.nextSibling.nextSibling);
            passwd.parentNode.appendChild(texr,document.getElementById('label3'));
        }
    }
    else{
        let texr=document.createElement("ins");
        let contenu=document.createTextNode("Your password is not strong enough.Please try putting special and lowercase and uppercase characters in your password");
        texr.appendChild(contenu);
        if (passwd.nextElementSibling.nextElementSibling==undefined){
            passwd.parentNode.appendChild(texr,document.getElementById('label3'));
        }
        else if(passwd.nextElementSibling.nextElementSibling.textContent=="Your password is not strong enough.Please try putting special and lowercase and uppercase characters in your password" || passwd.nextElementSibling.textContent=="✅ Your password is strong" ){
            passwd.parentElement.removeChild(passwd.nextSibling.nextSibling);
            passwd.parentNode.appendChild(texr,document.getElementById('label3'));
        }
    }
    if(validity2=="valid" && validity1=="valid" && validity3=="valid" && maj=="valid" && min=="valid" && spch=="valid" ){
        setTimeout(function(){document.getElementById("login").style.contentVisibility="hidden";document.getElementById("login").style.backgroundColor="transparent"})
    }

    }
document.getElementById("submit").addEventListener("click",function(){checktext();checkemail();checkpassword()});
function showuppopup(){
    document.getElementById("login").style.contentVisibility="visible";
    document.getElementById("login").style.position="fixed"
    //document.getElementById("login").style.top='25%';
    document.getElementById("login").style.width="100vw";
    document.getElementById("login").style.height="100vh";
    /*document.querySelector("body").style.overflow="hidden";*/
    //document.getElementById('login').style.left='40%';
    document.getElementById("login").style.backgroundColor="rgba(0%,0%,0%,80%)";
    document.querySelector("form").style.backgroundColor="white";
    document.querySelector("form").style.padding="15px 15px 15px 15px";
}
forward=0
document.getElementById("buttonlogin").addEventListener("click",function(){showuppopup()});