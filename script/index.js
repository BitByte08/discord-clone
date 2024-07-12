let idx=0;
let rastchatidx = "user0";

console.log('반가워요!');
function errorend(){
    document.getElementById("error").style.display='none';
}
function showerror(){
    document.getElementById("error").style.display='block';
}

let DMlist = document.getElementsByClassName('rectangle-parent');
let Onlinelist = document.getElementsByClassName('rectangle-div1');
let Alllist = document.getElementsByClassName('allfriends');

fetch('data.json').then((response)=>{return response.json()})
.then((obj)=>{
    obj.user.map((item)=>{
        idx++;
        console.log(item);
        if(item['state']==="online"){
            DMlist[0].innerHTML+=`<div class="dm1" id="no">
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
            Onlinelist[0].innerHTML+=listdiv;
            Alllist[0].innerHTML+=listdiv;
        }else{
            DMlist[0].innerHTML+=`<div class="dm1" id="no">
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
            Alllist[0].innerHTML+=listdiv2;
        }
    })
    all();
});
function all(){
    var a = document.querySelectorAll('.dm1');
    for(var i=0;i<a.length;i++){
        a[i].addEventListener('click',selector);
    }
    var a = document.querySelectorAll('.dm');    
    for(var i=0;i<a.length;i++){
        a[i].addEventListener('click',selector);
    }
}
function selector(){
    if(this.id==='yes') return;

    let html = this.innerHTML;
    html = html.replace('select1', 'select');
    html = html.replace('_no', '_on');
    this.innerHTML=html;
    let a = document.getElementById('yes');
    this.id = 'yes';

    let html2 = a.innerHTML;
    html2 = html2.replace('_on', '_no');
    html2 = html2.replace('select', 'select1');
    a.innerHTML=html2;
    a.id = 'no';

    let main = document.getElementById('mainon');
    let chat = document.getElementsByClassName('chat');
    let main2 = document.getElementsByClassName('info');
    if(this.parentNode.className!='dm-parent'){
        main.setAttribute('id','mainoff');
        chat[0].setAttribute('id','mainon');
        dmreader();
        return;
    }
    main.setAttribute('id','mainoff');
    main2[0].setAttribute('id','mainon');
    

    dmreader();
}
function dmreader(){
    let user = document.getElementById('yes');
    if(user.parentNode.className==='rectangle-parent'){
        let name = user.getElementsByClassName('name');
        let id = name[0].id;
        var chatdis = document.getElementsByClassName('chat');
        console.log(chatdis[0]);
        let newchat = chatdis[0].querySelector("#"+id);
        let lastchat = chatdis[0].querySelector("#"+rastchatidx);
        console.log(newchat);
        console.log(lastchat);
        lastchat.style.display='none';
        newchat.style.display='block';
        rastchatidx=id;
    }
}

document.querySelectorAll('#offmenu').forEach((item)=>{
    item.addEventListener("click",add);
});
document.querySelectorAll('#onmenu').forEach((item)=>{
    item.addEventListener("click",add);
});

function useradd(){
    if(idx>10){ showerror(); return;}
    let name = document.getElementById("username");
    DMlist[0].innerHTML+=`<div class="dm1" id="no">
                                    <div class="select1">
                                    </div>
                                    <div class="name" id="user${idx++}">${name.value}</div>
                                    <img class="user-frofile-img" alt="" src="source/frofile/discord_blue.png">
                                    <img class="component-12-icon1" alt="" src="source/frofile_icon/Online_no.svg">
                                </div>`;
    let listdiv=`<div class="onlineuser">
                    <img class="user-frofile-img2" alt="" src="source/frofile/discord_blue.png">
                    <img class="component-12-icon2" alt="" src="source/frofile_icon/Online_list.svg">
                    <span>${name.value}</span>
                    <p>온라인</p>
                </div>`;
    Onlinelist[0].innerHTML+=listdiv;
    Alllist[0].innerHTML+=listdiv;
    all();
    document.getElementById("username").value="";
}


function editdiv(classname){
    let div = document.getElementById('divon');
    div.setAttribute('id',"divoff");
    var div2 = document.querySelectorAll('.'+classname);
    div2[0].setAttribute('id','divon');
}
function add(){
    let html = this.innerHTML;
    if(html.indexOf('온라인')>0){
        editdiv('rectangle-div1');
    }else if(html.indexOf('모두')>0){
        editdiv('allfriends');
    }else if(html.indexOf('대기 중')>0){
        editdiv('request');
    }else if(html.indexOf('차단 목록')>0){
        editdiv('block');
    }else if(html.indexOf('친구 추가하기')>0){
        editdiv('addfriends');
    }

    let a = document.getElementById('onmenu');
    a.setAttribute('id','offmenu');
    this.setAttribute('id','onmenu');
}


// `<div class="dm1">
//     <div class="select">
//     </div>
//     <div class="name">Name</div>
//     <img class="user-frofile-img" alt="" src="/다운로드 (3).png">
//     <img class="component-12-icon1" alt="" src="/source/frofile_icon/Offline.svg">
// </div>`
// `<div class="dm1">
//     <div class="select">
//     </div>
//     <div class="name">Name</div>
//     <img class="user-frofile-img" alt="" src="/다운로드 (3).png">
//     <img class="component-12-icon" alt="" src="/source/frofile_icon/Online.svg">
// </div>`
// `<div class="dm1">
//                 <div class="select2">
//                 </div>
//                 <div class="name">Name</div>
//                 <img class="user-frofile-img" alt="" src="/다운로드 (3).png">
//                 <img class="component-12-icon" alt="" src="/source/frofile_icon/Online_no.svg">
//             </div>`
// `<div class="dm1">
//     <div class="select2">
//     </div>
//     <div class="name">Name</div>
//     <img class="user-frofile-img" alt="" src="/다운로드 (3).png">
//     <img class="component-12-icon1" alt="" src="/source/frofile_icon/Offline_no.svg">
// </div>`