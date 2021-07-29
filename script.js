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
function addforslider(){
    if (ddddd==3){
        ddddd==0;
    }
    else{
        ddddd++;
    }
}
function diminishforslider(){
    if (ddddd==0){
        ddddd==3;
    }
    else{
        ddddd--;
    }
}
document.getElementById("arrowleftquiz2").addEventListener("click",function(){addforslider()});
document.getElementById("arrowrightquiz2").addEventListener("click",function(){diminishforslider()})
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
function addforslider(){
    if (uuuuu==3){
        uuuuu==0;
    }
    else{
        uuuuu++;
    }
}
function diminishforslider(){
    if (uuuuu==0){
        uuuuu==3;
    }
    else{
        uuuuu--;
    }
}
document.getElementById("arrowleftquiz3").addEventListener("click",function(){addforslider()});
document.getElementById("arrowrightquiz3").addEventListener("click",function(){diminishforslider()})
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
    containerr=body;
    let html=document.querySelector('html');
    html.removeChild(body);
    video1=document.createElement("video");
    video1.setAttribute("autoplay")
    video1.setAttribute("controls")
    video1.setAttribute("oncanplaythrough","")
    source1=document.createElement("source")
    source1.setAttribute("src",src);
    html.appendChild(video1,source1);
}
function quit(){
    video2=document.querySelector("video");
    ttt=video2.videoDuration;
    ttt*=1000;
    console.log(ttt)
    setTimeout()
}