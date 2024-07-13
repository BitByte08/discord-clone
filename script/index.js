let idx=0; //자주쓰는 변수 선언
let lastidx = "user0";
let Dmlist = document.getElementsByClassName('rectangle-parent');
let OnlineUserlist = document.getElementsByClassName('rectangle-div1');
let AllUserList = document.getElementsByClassName('allfriends');
let Chatlist = document.getElementsByClassName('chat');
let TopUserlist = document.getElementsByClassName('topusername');
let SectionBtnMenu = document.getElementsByClassName('frame-parent');


function hideError(){
    document.getElementById("error").style.display='none';
}
function showError(){
    document.getElementById("error").style.display='block';
}
document.querySelectorAll('#offmenu').forEach((item)=>{
    item.addEventListener("click",changeSection);
});
document.querySelectorAll('#onmenu').forEach((item)=>{
    item.addEventListener("click",changeSection);
});
function switchSection(classname){
    let selectedDiv = document.getElementById('divon');
    selectedDiv.setAttribute('id',"divoff");
    var selectDiv = document.querySelectorAll('.'+classname);
    selectDiv[0].setAttribute('id','divon');
}
function showTopUsername(){
    if(TopUserlist[0].id==='topoff'){
        document.getElementById('topon').setAttribute('id','topoff');
        TopUserlist[0].setAttribute('id','topon');
    }
}
function setUserInfo(id,name){
    Chatlist[0].innerHTML+=`<div class="chatdisplay" id="user${id}" style="display: none;"onKeyPress="if(event.keyCode==13){addchatnode()}">
    <div class="add-btn-child2"></div>
    <img src="source/icon/addchat.svg"><input type="text" id = "us${id}"placeholder="@${name}에게 메시지 보내기">
    </div>`;
    TopUserlist[0].innerHTML+=`<div id="tuser${id}" style = "display:none">
    <img src="source/frofile/discord_blue.png">
    <span>${name}</span>
    </div>`
}
function addEventListenerDm(){
    var a = document.querySelectorAll('.dm1');
    for(var i=0;i<a.length;i++){
        a[i].addEventListener('click',userSelector);
    }
    var a = document.querySelectorAll('.dm');    
    for(var i=0;i<a.length;i++){
        a[i].addEventListener('click',userSelector);
    }
}
function changeSection(){
    let html = this.innerHTML;
    if(html.indexOf('온라인')>0){
        switchSection('rectangle-div1');
    }else if(html.indexOf('모두')>0){
        switchSection('allfriends');
    }else if(html.indexOf('대기 중')>0){
        switchSection('request');
    }else if(html.indexOf('차단 목록')>0){
        switchSection('block');
    }else if(html.indexOf('친구 추가하기')>0){
        switchSection('addfriends');
    }
    let a = document.getElementById('onmenu');
    a.setAttribute('id','offmenu');
    this.setAttribute('id','onmenu');
}
function switchDm(){
    let user = document.getElementById('yes');
    if(user.parentNode.className==='rectangle-parent'){
        let name = user.getElementsByClassName('name');
        let id = name[0].id;
        var chatdis = document.getElementsByClassName('chat');
        let newchat = chatdis[0].querySelector("#"+id);
        let lastchat = chatdis[0].querySelector("#"+lastidx);
        let newtop = TopUserlist[0].querySelector("#t"+id);
        let lasttop = TopUserlist[0].querySelector("#t"+lastidx);
        lastchat.style.display='none';
        newchat.style.display='block';
        lasttop.style.display='none';
        newtop.style.display='block';
        lastidx=id;
        showTopUsername();
    }
}
function addFriend(){
    if(idx>10){ showError(); return;}
    let name = document.getElementById("username");
    Dmlist[0].innerHTML+=`<div class="dm1" id="no">
                                    <div class="select1">
                                    </div>
                                    <div class="name" id="user${idx}">${name.value}</div>
                                    <img class="user-frofile-img" alt="" src="source/frofile/discord_blue.png">
                                    <img class="component-12-icon1" alt="" src="source/frofile_icon/Online_no.svg">
                                </div>`;
    let listdiv=`<div class="onlineuser">
                    <img class="user-frofile-img2" alt="" src="source/frofile/discord_blue.png">
                    <img class="component-12-icon2" alt="" src="source/frofile_icon/Online_list.svg">
                    <span>${name.value}</span>
                    <p>온라인</p>
                </div>`;
    OnlineUserlist[0].innerHTML+=listdiv;
    AllUserList[0].innerHTML+=listdiv;
    setUserInfo(idx++,name.value);
    addEventListenerDm();
    document.getElementById("username").value="";
}
function searchOnlineUser(){
    let OnlineUser = OnlineUserlist[0].getElementsByClassName('onlineuser');
    let finder = document.getElementById('findUser');
    if(finder.value===""){
        for(let User=0;User<OnlineUser.length;User++){
            OnlineUser[User].style.display='block';
        }
    }
    for(let User=0;User<OnlineUser.length;User++){
        let Username = OnlineUser[User].getElementsByTagName('span');
        if(Username[0].innerHTML.indexOf(finder.value)===-1){
            OnlineUser[User].style.display='none';
        }else{
            OnlineUser[User].style.display='block';
        }
    }
}
function searchOfflineUser(){
    let OnlineUser = AllUserList[0].getElementsByClassName('onlineuser');
    let OfflineUser = AllUserList[0].getElementsByClassName('offlineuser');
    let finder = document.getElementById('findUserAll');
    if(finder.value===""){
        for(let User=0;User<OnlineUser.length;User++){
            OnlineUser[User].style.display='block';
        }
        for(let User=0;User<OfflineUser.length;User++){
            OfflineUser[User].style.display='block';
        }
    }else{
        for(let User=0;User<OnlineUser.length;User++){
            let Username = OnlineUser[User].getElementsByTagName('span');
            if(Username[0].innerHTML.indexOf(finder.value)===-1){
                OnlineUser[User].style.display='none';
            }
            else{
                OnlineUser[User].style.display='block';
            }
        }
        for(let User=0;User<OfflineUser.length;User++){
            let Username = OfflineUser[User].getElementsByTagName('span');
            if(Username[0].innerHTML.indexOf(finder.value)===-1){
                OfflineUser[User].style.display='none';
            }
            else{
                OfflineUser[User].style.display='block';
            }
        }
    }
}
fetch('data.json').then((response)=>{return response.json()}).then((obj)=>{
    obj.user.map((item)=>{
        idx++;
        if(item['state']==="online"){
            Dmlist[0].innerHTML+=`<div class="dm1" id="no">
                                    <div class="select1">
                                    </div>
                                    <div class="name" id="user${item['id']}">${item['name']}</div>
                                    <img class="user-frofile-img" alt="" src="${item['img']}">
                                    <img class="component-12-icon1" alt="" src="source/frofile_icon/Online_no.svg">
                                </div>`;
            let listdiv=`<div class="onlineuser">
                                        <img class="user-frofile-img2" alt="" src="${item['img']}">
                                        <img class="component-12-icon2" alt="" src="source/frofile_icon/Online_list.svg">
                                        <span>${item['name']}</span>
                                        <p>온라인</p>
                                    </div>`;
            setUserInfo(item['id'],item['name']);
            OnlineUserlist[0].innerHTML+=listdiv;
            AllUserList[0].innerHTML+=listdiv;
        }else{
            Dmlist[0].innerHTML+=`<div class="dm1" id="no">
                                    <div class="select1">
                                    </div>
                                    <div class="name" id="user${item['id']}">${item['name']}</div>
                                    <img class="user-frofile-img" alt="" src="${item['img']}">
                                    <img class="component-12-icon1" alt="" src="source/frofile_icon/Offline_no.svg">
                                </div>`
            let listdiv2=`<div class="offlineuser">
                            <img class="user-frofile-img2" alt="" src="${item['img']}">
                            <img class="component-12-icon2" alt="" src="source/frofile_icon/Offline_list.svg">
                            <span>${item['name']}</span>
                            <p>오프라인</p>
                        </div>`;
            setUserInfo(item['id'],item['name']);
            AllUserList[0].innerHTML+=listdiv2;
        }
    })
    addEventListenerDm();
});
function addchatnode(){
    var today = new Date();
    let year = today.getFullYear(),month = (today.getMonth()+1),date = today.getDate();
    today = (year*10000)+(month+1)*100+date;
    let todaystr = year + "년 " +month+"월 " + date+"일";
    let onchat = document.getElementById(lastidx);
    let onchatnode = onchat.getElementsByClassName("chatlist");
    let inputidx = lastidx.replace('user','us');
    let inputchat = document.getElementById(inputidx);
    if(onchatnode.length==0){
        onchat.innerHTML+=`<div class="chatlist"><div class="day" id="${(today)}">
                                    <fieldset><legend>${todaystr}</legend></fieldset>
                                    <div class="chatNode">
                                        <img src="source/frofile/discord_blue.png">
                                        <span>admin</span>
                                        <div class="chatp">

                                            <p>${inputchat.value}</p>
                                        </div>
                                    </div>
                                </div></div>`;
    }else if(document.getElementById(today)===null){
        let list = onchat.getElementsByClassName('chatlist');
        list[0].innerHTML+=`<div class="chatlist"><div class="day" id="${today}">
        <fieldset><legend>${todaystr}</legend></fieldset>
        <div class="chatNode">
            <img src="source/frofile/discord_blue.png">
            <span>admin</span>
            <div class="chatp">

                <p>${inputchat.value}</p>
            </div>
        </div>
    </div></div>`;
    }
    else{
        let chatp = onchatnode[0].getElementsByClassName("chatp");
        chatp[0].innerHTML += `<p>${inputchat.value}</p>`;
    }
    inputchat.value="";
}


function userSelector(){
    if(this.id==='yes') return;

    let select_btn= this.innerHTML;
    select_btn = select_btn.replace('select1', 'select');
    select_btn = select_btn.replace('_no', '_on');
    this.innerHTML= select_btn;
    let selected_id = document.getElementById('yes');
    this.id = 'yes';

    let selected_btn = selected_id.innerHTML;
    selected_btn = selected_btn.replace('_on', '_no');
    selected_btn = selected_btn.replace('select', 'select1');
    selected_id.innerHTML=selected_btn;
    selected_id.id = 'no';

    let main = document.getElementById('mainon');
    let chat = document.getElementsByClassName('chat');
    let main2 = document.getElementsByClassName('info');
    if(this.parentNode.className!='dm-parent'){
        main.setAttribute('id','mainoff');
        chat[0].setAttribute('id','mainon');
        switchDm();
        return;
    }
    main.setAttribute('id','mainoff');
    main2[0].setAttribute('id','mainon');
    document.getElementById('topon').setAttribute('id','topoff');
    SectionBtnMenu[0].setAttribute('id','topon');
    

    switchDm();
}






