var data = [
    {
        number:1
    },
    {
        number:2
    },
    {
        number:3
    },
    {
        number:4
    },
    {
        number:5
    },
    {
        number:6
    },
    {
        number:7
    },
    {
        number:8
    },
    {
        number:9
    },
    {
        number:10
    },
    {
        number:11
    },
    {
        number:12
    },
    {
        number:13
    },
    {
        number:14
    },
    {
        number:15
    },
    {
        number:16
    },
    {
        number:17
    },
    {
        number:18
    },
    {
        number:19
    },
    {
        number:20
    },
    {
        number:21
    },
    {
        number:22
    },
]

var pageSize =7;
var pageNo=0;
var totalPage =Math.ceil((data.length/7));
var totallSize= data.length;
var box = document.getElementsByClassName("box")[0];
var numberBox = document.getElementsByClassName("number-box")[0];

for(let i=0 ;i<totalPage;i++) {
    var numberBtn = [];
    numberBtn[i]= document.createElement("button");
    numberBtn[i].innerHTML = i+1;
    numberBox.appendChild(numberBtn[i]);
}

function createTem(template) {
    if(pageNo == 0) {
        $(".box").empty();
        for(let i=(pageSize*pageNo);i<pageSize; i++) {
            const templateItem = template[i];
            $(".box").append(`
            <div class="list">
                <div class="text">${templateItem.number}</div>
            </div>
            `)
        }
    } else if(pageNo+1 == totalPage){
        $(".box").empty();
        for(let i=(pageSize*pageNo);i<totallSize; i++) {
            const templateItem = template[i];
            $(".box").append(`
            <div class="list">
                <div class="text">${templateItem.number}</div>
            </div>
            `)
        }
    } else {
        $(".box").empty();
        for(let i=(pageSize*pageNo);i<(pageSize*pageNo)+pageSize; i++) {
            const templateItem = template[i];
            $(".box").append(`
            <div class="list">
                <div class="text">${templateItem.number}</div>
            </div>
            `)
        }
    }
}

createTem(data);

document.getElementsByClassName("pre")[0].addEventListener("click", function(){
    if(pageNo != 0) {
        pageNo --;
    }
    createTem(data);
})

document.getElementsByClassName("next")[0].addEventListener("click", function(){
    if(pageNo != totalPage-1){
        pageNo ++;
    }
    createTem(data);
})

var length = document.getElementsByClassName("number-box")[0].getElementsByTagName("button").length;

for(let i=0; i<length; i++) {
    document.getElementsByClassName("number-box")[0].getElementsByTagName("button")[i].addEventListener("click", function(e){
        pageNo = i;
        createTem(data);
        e.preventDefault();
    })
}
