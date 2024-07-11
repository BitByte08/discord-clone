fetch('data.json').then((response)=>{return response.json()})
.then((obj)=>{
    let DMlist = document.getElementsByClassName('rectangle-parent');
    obj.user.map((item)=>{
        console.log(item);
        if(item['state']==="online"){
            DMlist[0].innerHTML+=`<div class="dm1">
                                    <div class="select1">
                                    </div>
                                    <div class="name">${item['name']}</div>
                                    <img class="user-frofile-img" alt="" src="${item['img']}">
                                    <img class="component-12-icon1" alt="" src="/source/frofile_icon/Online_no.svg">
                                </div>`
        }else{
            DMlist[0].innerHTML+=`<div class="dm1">
                                    <div class="select1">
                                    </div>
                                    <div class="name">${item['name']}</div>
                                    <img class="user-frofile-img" alt="" src="${item['img']}">
                                    <img class="component-12-icon1" alt="" src="/source/frofile_icon/Offline_no.svg">
                                </div>`
        }
    })
})


`<div class="dm1">
    <div class="select">
    </div>
    <div class="name">Name</div>
    <img class="user-frofile-img" alt="" src="/다운로드 (3).png">
    <img class="component-12-icon1" alt="" src="/source/frofile_icon/Offline.svg">
</div>`
`<div class="dm1">
    <div class="select">
    </div>
    <div class="name">Name</div>
    <img class="user-frofile-img" alt="" src="/다운로드 (3).png">
    <img class="component-12-icon" alt="" src="/source/frofile_icon/Online.svg">
</div>`
`<div class="dm1">
                <div class="select2">
                </div>
                <div class="name">Name</div>
                <img class="user-frofile-img" alt="" src="/다운로드 (3).png">
                <img class="component-12-icon" alt="" src="/source/frofile_icon/Online_no.svg">
            </div>`
`<div class="dm1">
    <div class="select2">
    </div>
    <div class="name">Name</div>
    <img class="user-frofile-img" alt="" src="/다운로드 (3).png">
    <img class="component-12-icon1" alt="" src="/source/frofile_icon/Offline_no.svg">
</div>`