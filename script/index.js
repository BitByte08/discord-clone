fetch('data.json').then((response)=>{return response.json()})
.then((obj)=>{
    let DMlist = document.getElementsByClassName('rectangle-parent');
    obj.user.map((item)=>{
        console.log(item);
        if(item['state']==="online"){
            DMlist[0].innerHTML+=`<div class="dm1" id="no">
                                    <div class="select1">
                                    </div>
                                    <div class="name" id="${item['id']}">${item['name']}</div>
                                    <img class="user-frofile-img" alt="" src="${item['img']}">
                                    <img class="component-12-icon1" alt="" src="/source/frofile_icon/Online_no.svg">
                                </div>`
        }else{
            DMlist[0].innerHTML+=`<div class="dm1" id="no">
                                    <div class="select1">
                                    </div>
                                    <div class="name" id="${item['id']}">${item['name']}</div>
                                    <img class="user-frofile-img" alt="" src="${item['img']}">
                                    <img class="component-12-icon1" alt="" src="/source/frofile_icon/Offline_no.svg">
                                </div>`
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
    let idx = html.indexOf('class="name" id=');
    if(idx<0) return -1;
    html[idx+17];
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