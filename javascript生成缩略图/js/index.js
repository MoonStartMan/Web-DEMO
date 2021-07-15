//  数据
var imageData = [];
//  存放图片的数组
var imageArray = [];
//  压缩尺寸的大小
var reduceSize = {
    width: "",
    height: ""
}

//  向data里面添加图片
function addImageInData() {
    var dataItem
    for (let i = 0; i < imageArray.length; i++) {
        dataItem = {
            img: imageArray[i]
        }
        imageData.push(dataItem)
    }
}

//  创建多个图片
function createTemplate(template) {
    for (let i = 0; i < imageData.length; i++) {
        const templateItem = template[i]
        $(".image-show-box").append(
            `
            <div class="image-list">
                <img src=${templateItem.img} alt="">
            </div>
            `
        )
    }
}

//  图片点击上传
$("#file").on('change', function () {
    var filePath
    var fileFormat
    var src
    var imgFiles = $(this)[0].files
    for (let i = 0; i < imgFiles.length; i++) {
        filePath = imgFiles[i].name
        fileFormat = filePath.split('.')[1].toLowerCase()
        src = window.URL.createObjectURL(imgFiles[i])
        if (!fileFormat.match(/png|jpg|jpeg/)) {
            alert('上传错误,文件格式必须为: png/jpg/jpeg')
            return
        }
        imageArray.push(src)
    }
    addImageInData()
    createTemplate(imageData);
})

//  修改缩略图展示文字
function changeControlText() {
    var widthText = $(".show-control-size-box").find(".bingo-text").eq(0)
    var heightText = $(".show-control-size-box").find(".bingo-text").eq(1)
    widthText.text(reduceSize.width)
    heightText.text(reduceSize.height)
}

//  选择尺寸按钮
var controlListBox = $(".control-list-box")
var controlList = controlListBox.find(".control-list")
for (let i = 0; i < controlList.length; i++) {
    controlList.eq(i).click(function () {
        switch (i) {
            case 0:
                reduceSize.width = 50;
                reduceSize.height = 50;
                break;
            case 1:
                reduceSize.width = 100;
                reduceSize.height = 100;
                break;
            case 2:
                reduceSize.width = 125;
                reduceSize.height = 125;
                break;
            case 3:
                reduceSize.width = 150;
                reduceSize.height = 150;
                break;
            case 4:
                reduceSize.width = 175;
                reduceSize.height = 175;
                break;
            case 5:
                reduceSize.width = 200;
                reduceSize.height = 200;
                break;
            default:
                break;
        }
        changeControlText()
    })
}

//  显示缩略图

function resizeImage(src, callback, w, h) {
    var canvas = document.createElement("canvas"),
        ctx = canvas.getContext("2d"),
        im = new Image();
    w = w || 0,
        h = h || 0;
    im.onload = function () {
        //为传入缩放尺寸用原尺寸
        !w && (w = this.width);
        !h && (h = this.height);
        //以长宽最大值作为最终生成图片的依据
        if (w !== this.width || h !== this.height) {
            var ratio;
            if (w > h) {
                ratio = this.width / w;
                h = this.height / ratio;
            } else if (w === h) {
                if (this.width > this.height) {
                    ratio = this.width / w;
                    h = this.height / ratio;
                } else {
                    ratio = this.height / h;
                    w = this.width / ratio;
                }
            } else {
                ratio = this.height / h;
                w = this.width / ratio;
            }
        }
        //以传入的长宽作为最终生成图片的尺寸
        if (w > h) {
            var offset = (w - h) / 2;
            canvas.width = canvas.height = w;
            ctx.drawImage(im, 0, offset, w, h);
        } else if (w < h) {
            var offset = (h - w) / 2;
            canvas.width = canvas.height = h;
            ctx.drawImage(im, offset, 0, w, h);
        } else {
            canvas.width = canvas.height = h;
            ctx.drawImage(im, 0, 0, w, h);
        }
        callback(canvas.toDataURL("image/png"));
    }
    im.src = src;
}

function setImage(image, width, height) {
    resizeImage(image, function(data){
        image.src = data
    },width,height)
}

//  生成缩略图图片
function createImage(template) {
    for (let i = 0; i < imageData.length; i++) {
        const templateItem = template[i]
        $(".breviary-box").append(
            `
            <div class="breviary-box-list">
                <img src="${templateItem.img}" alt="">
            </div>
            `
        )
    }
    var lists = document.getElementsByClassName("breviary-box-list")
    var img;
    for (let i = 0; i < lists.length; i++) {
        img = lists[i].getElementsByTagName("img")[0]
        setImage(img, reduceSize.width, reduceSize.height)
    }
}

//  点击生成缩略图
$("#createBtn").click(function () {
    createImage(imageData)
    $(".breviary-box-list").width(reduceSize.width)
    $(".breviary-box-list").height(reduceSize.height)
})

//  下载图片
function downloadImg() {
    var list = $(".breviary-box").find(".breviary-box-list");
    for (let i = 0; i < list.length; i++) {
        var img = document.getElementsByClassName("breviary-box")[0].getElementsByClassName("breviary-box-list")[i].getElementsByTagName("img")[0];
        var url = img.src;
        var a = document.createElement("a")
        var event = new MouseEvent("click")
        a.download = `${i}`
        a.href = url
        a.dispatchEvent(event)
    }
}

//  点击下载
$("#download-btn").click(function () {
    downloadImg()
})