let SanPham = JSON.parse(localStorage.getItem('Product'));
function createProduct() {
    if (localStorage.getItem('Product') === null) {
        let Product = [
            {
                id: "0",
                img: "./img/xiaomi11.jpg",
                Name: "Điện thoại Xiaomi Mi 11 Lite",
                type: "Xiaomi",
                price: 9400
            },
            {

                id: "1",
                img: "./img/samsung-galaxy-z-fold-3.jpg",
                Name: "SS1",
                type: "Samsung",
                price: 1000
            },
            {

                id: "2",
                img: "./img/Minote10.jpg",
                Name: "Xiao2",
                type: "Xiaomi",
                price: 1000
            },
            {

                id: "3",
                img: "./img/xiaomi11.jpg",
                Name: "Xiao3",
                type: "Xiaomi",
                price: 9400
            },
            {

                id: "4",
                img: "./img/samsung-galaxy-z-fold-3.jpg",
                Name: "SS4",
                type: "Samsung",
                price: 1000
            },
            {

                id: "5",
                img: "./img/Minote10.jpg",
                Name: "Xiao5",
                type: "Xiaomi",
                price: 1000
            },
            {

                id: "6",
                img: "./img/xiaomi11.jpg",
                Name: "Xiao6",
                type: "Apple",
                price: 9400
            },
            {
                id: "7",
                img: "./img/xiaomi11.jpg",
                Name: "Xiao7",
                type: "Apple",
                price: 9500
            },
            {
                id: "8",
                img: "./img/xiaomi11.jpg",
                Name: "Xiao8",
                type: "Apple",
                price: 8300
            },
            {

                id: "9",
                img: "./img/Minote10.jpg",
                Name: "Xiao5",
                type: "Apple",
                price: 1000
            },
            {

                id: "10",
                img: "./img/xiaomi11.jpg",
                Name: "Xiao6",
                type: "Oppo",
                price: 9400
            },
            {
                id: "11",
                img: "./img/xiaomi11.jpg",
                Name: "Xiao7",
                type: "Oppo",
                price: 9500
            },
            {
                id: "12",
                img: "./img/xiaomi11.jpg",
                Name: "Xiao8",
                type: "Oppo",
                price: 8300
            },
            {
                id: "13",
                img: "./img/xiaomi11.jpg",
                Name: "Điện thoại Xiaomi Mi 11 Lite",
                type: "Xiaomi",
                price: 9400
            },
            {

                id: "14",
                img: "./img/samsung-galaxy-z-fold-3.jpg",
                Name: "SS1",
                type: "Samsung",
                price: 1000
            },
            {

                id: "15",
                img: "./img/Minote10.jpg",
                Name: "Xiao2",
                type: "Xiaomi",
                price: 1000
            },
            {

                id: "16",
                img: "./img/xiaomi11.jpg",
                Name: "Xiao3",
                type: "Xiaomi",
                price: 9400
            },
            {

                id: "17",
                img: "./img/xiaomi11.jpg",
                Name: "Xiao3",
                type: "Xiaomi",
                price: 9400
            },

            {

                id: "18",
                img: "./img/xiaomi11.jpg",
                Name: "Xiao3",
                type: "Xiaomi",
                price: 9400
            },
            {

                id: "19",
                img: "./img/xiaomi11.jpg",
                Name: "Xiao3",
                type: "Xiaomi",
                price: 9400
            }


        ];
        localStorage.setItem('Product', JSON.stringify(Product))
        SanPham = JSON.parse(localStorage.getItem('Product'));
    }
    else SanPham = JSON.parse(localStorage.getItem('Product'));
}
console.log("Chuỗi SP" + JSON.stringify(SanPham));
//Tạo Những Mảng Sản Phẩm Theo Hãng
// let Xiaomi = SanPham.filter(function(e) {
//     return e.type == "Xiaomi";
// });

// let Samsung = SanPham.filter(function(e) {
//     return e.type == "Samsung";
// });
// let Oppo = SanPham.filter(function(e) {
//     return e.type == "Oppo";
// });

//Lấy mảng tìm kiếm 
let Mangtsp = JSON.parse(localStorage.getItem('Mangsp'));

window.onload = function () {
    createProduct();
    LocSP();
    innerSoTrang();
    MangLoaiSP();
    checkvotk();
}

// chèn sản phẩm vào trang
class LoaiSP {
    idSP;
    tenSP;
    constructor(idsp, tensp) {
        this.idSP = idsp;
        this.tenSP = tensp;
    }
}
function MangLoaiSP() {
    var HangSP = [
        new LoaiSP("Xiaomi", "Xiaomi"),
        new LoaiSP("Samsung", "Samsung"),
        new LoaiSP("Apple", "Apple"),
        new LoaiSP("Oppo", "Oppo"),
    ];
    for (i = 0; i < HangSP.length; i++) {
        document.getElementById("MenuPC").innerHTML += '<a href="?SP=' + HangSP[i].idSP + '"  class="Hang"><div class="Danhmuc" id="' + HangSP[i].idSP + '" >' + HangSP[i].tenSP + '</div></a>'
    }

}

function innerSP(SP, soTrang) {
    for (i = 0; i < 8; i++) {
        if (i + 8 * soTrang < SP.length) {
            document.getElementById("SP" + (i + 1)).style.display = 'block';
            document.getElementById("SP" + (i + 1)).innerHTML = `  <img id="img${i}"  src=${SP[i + 8 * soTrang].img} alt=""> <div><div class="name" id="name${i}" style="font-size: 120%; ">${SP[i + 8 * soTrang].Name}</div><div class="price" id="price${i}" style="font-size: 120%; ">${SP[i + 8 * soTrang].price}đ</div></div><input type="button" value="+">`
        }
        else
            document.getElementById("SP" + (i + 1)).style.display = 'none';
    }
}

//sắp xếp mảng SPOf theo lựa chọn
function SapXep(val, SPOf) {
    switch (val) {
        case "BT":
            return SPOf;
            break;
        case "TD":
            SPOf.sort((a, b) => (a.price > b.price) ? 1 : -1);
            return SPOf;
            break;
        case "GD":
            SPOf.sort((a, b) => (a.price > b.price) ? -1 : 1);
            return SPOf;
            break;
        case "AZ":
            SPOf.sort((a, b) => (a.Name > b.Name) ? 1 : -1);
            return SPOf;
            break;
        case "ZA":
            SPOf.sort((a, b) => (a.Name > b.Name) ? -1 : 1);
            return SPOf;
            break;
        default:
            return SPOf;
            break;
    }
}

// Lọc Sản Phẩm theo Hãng và số trang để Inner sản phẩm
function LocSP(val = 0, SX = 0) {
    if (val != 0)
        var sotrang = val.value - 1;
    else
        var sotrang = 0;
    var url = location.href;
    var Hang = url.split(/[?,#]/);

    if (SX == 0)
        var sort = "BT";
    var sort = SX;
    var t = SanPham;
    if (Hang[1] == undefined) {
        var t = SanPham;
    }//regex
    else if (Hang[1].split(/[=]/)[0] == "SP") {
        if (Hang[1].split(/[=]/)[1] == "Timkiem")
            t = Mangtsp;
        else var t = SanPham.filter(function (e) {
            return e.type == Hang[1].split(/[=]/)[1];
        });
    }
    console.log(t);
    innerSP(SapXep(sort, t), sotrang);
}




var t = 0;
//Ktra Đang ở trang của hãng nào
// function ktraHang(){
//     var url = location.href;
//     var Hang = url.split(/[?,#]/);
//     switch (Hang[1]) {
//         case "SP=Xiaomi":
//                 innerSoTrang(Xiaomi);
//             break;
//         case "SP=Samsung":
//                 innerSoTrang(Samsung); 
//             break;

//         case "SP=Oppo":
//                 innerSoTrang(Oppo);     
//             break;   
//         default:
//                 innerSoTrang(SanPham);      
//             break;
//     }
// }
// căng cứ vào length của 1Hãng để tạo số trang
function innerSoTrang() {
    var url = location.href;
    var Hang = url.split(/[=]/);
    console.log(Hang[1]);
    var temp = SanPham.filter(function (e) {
        return e.type == Hang[1];
    });
    if (Hang[1] == "Timkiem") {
        temp = Mangtsp;
        max = Math.ceil(temp.length / 8);
    }
    if (Hang[1] != undefined)
        max = Math.ceil(temp.length / 8);
    else
        max = Math.ceil(SanPham.length / 8);
    console.log(max);
    for (i = 1; i <= max; i++) {
        document.getElementById("sotrang2").innerHTML += '<a href="#"><input class="soTrang" id="sT' + i + '" type="button" value="' + i + '" onclick="LocSP(this, ' + document.getElementsByClassName("loc").value + ')"></a>'
    }
}

function ShowIfSP(SP) {
    document.getElementById("ThongTinSP").style.display = 'flex';
    document.getElementById("ifSP_Overlay").style.display = 'flex';
    console.log(SP);
    id = (SP.split(/[SP]/));
    var IDimg = "img" + id[2];
    var img = $('#SP' + id[2] + ' img').attr('src');
    var name = document.getElementById("name" + (id[2] - 1) + "").innerHTML;
    var price = document.getElementById("price" + (id[2] - 1) + "").innerHTML;
    console.log(price);
    document.getElementById("ThongTinSP").innerHTML = '<img src="' + img + '" alt=""><div id="ThongTinSP_text"><div id="name_TTSP">' + name + '</div><div id="gia_TTSP">' + price + '</div><div ><input class="SoluongSP" type="button" value="-" onclick="TangSLSP(this.value)"><input class="SoluongSP" id="soluongSP" type="text" min="1" max="10" value="1"><input class="SoluongSP"type="button" value="+" onclick="TangSLSP(this.value)"></div><input id="order" type="button" onclick="check();getTTSP();" value="Order"></div>'
}
var arrgiohang = [];
function check() {
    var t = JSON.parse(localStorage.getItem('abc'));
    if (t == 0) {
        nhap();
    }
    if (t == 1) {
        if (document.getElementById("soluongSP").value <= 0) {
            document.getElementById("soluongSP").focus();
            return;
        }
    }
}
function hoadon() {

}
function TatTTSP(val) {
    document.getElementById("ifSP_Overlay").style.display = "none";
}

function TangSLSP(val) {
    if (val == '+') {
        (document.getElementById("soluongSP").value)++;
    }
    if (val == '-') {
        if ((document.getElementById("soluongSP").value) != 1)
            (document.getElementById("soluongSP").value)--;
    }
}

//Function chạy tìm sản phẩm
function timkiemsp() {
    var productArr = SanPham;
    var Timkiem = document.getElementById('timkiem');
    let Arrayfind = [];
    var r = 0;
    for (i = 0; i < productArr.length; i++) {
        var tensp = productArr[i].Name.toLowerCase();
        var tentk = Timkiem.value.toLowerCase();
        if (tensp.indexOf(tentk) !== -1) {
            Arrayfind[r] = productArr[i];
            r++;
        }
    }
    return Arrayfind;
}
function Runtimkiemsp() {
    localStorage.setItem('Mangsp', JSON.stringify(timkiemsp()));
    window.location.href = "?SP=Timkiem";
}


//Function chưa sử dụng
// function hienmenu()
// {   
//     switch (t) {
//         case 0:
//             document.getElementById("menu1").style.display="none";
//             document.getElementById("menu").value=">>";
//             t++;
//             break;
//         case 1:
//             document.getElementById("menu1").style.display="flex";
//             document.getElementById("menu").value="<<";
//             t=0;
//             break;
//         default:
//             return false;
//             break;
//     }

// }


// ,
// {

//     id: "9",
//     img: "./img/samsung-galaxy-z-fold-3.jpg",
//     Name: "SS9",
//     type: "Samsung",
//     price: 2000
// },
// {

//     id: "10",
//     img: "./img/Minote10.jpg",
//     Name: "Xiao10",
//     type: "Xiaomi",
//     price: 3000
// },
// {

//     id: "11",
//     img: "./img/xiaomi11.jpg",
//     Name: "Xiao11",
//     type: "Xiaomi",
//     price: 4000
// },
// {

//     id: "12",
//     img: "./img/samsung-galaxy-z-fold-3.jpg",
//     Name: "SS12",
//     type: "Samsung",
//     price: 1000
// },
// {

//     id: "13",
//     img: "./img/Mingote10.jpg",
//     Name: "Xiao13",
//     type: "Xiaomi",
//     price: 500
// },
// {

//     id: "14",
//     img: "./img/xiaomi11.jpg",
//     Name: "Xiao14",
//     type: "Xiaomi",
//     price: 200
// },
// {
//     id: "15",
//     img: "./img/xiaomi11.jpg",
//     Name: "Xiao15",
//     type: "Xiaomi",
//     price: 100
// },
// {
//     id: "16",
//     img: "./img/xiaomi11.jpg",
//     Name: "SS16",
//     type: "Samsung",
//     price: 4000
// },
// {

//     id: "17",
//     img: "./img/xiaomi11.jpg",
//     Name: "Xiao11",
//     type: "Xiaomi",
//     price: 4000
// },
// {

//     id: "18",
//     img: "./img/samsung-galaxy-z-fold-3.jpg",
//     Name: "SS12",
//     type: "Samsung",
//     price: 1000
// },
// {

//     id: "19",
//     img: "./img/Mingote10.jpg",
//     Name: "Xiao13",
//     type: "Xiaomi",
//     price: 500
// },
// {

//     id: "20",
//     img: "./img/xiaomi11.jpg",
//     Name: "Xiao14",
//     type: "Xiaomi",
//     price: 200
// },
// {
//     id: "21",
//     img: "./img/xiaomi11.jpg",
//     Name: "Xiao15",
//     type: "Xiaomi",
//     price: 100
// },
// {
//     id: "22",
//     img: "./img/xiaomi11.jpg",
//     Name: "SS16",
//     type: "Samsung",
//     price: 4000
// },
// {

//     id: "23",
//     img: "./img/xiaomi11.jpg",
//     Name: "Điện thoại Xiaomi Mi 11 Lite",
//     type: "Xiaomi",
//     price: 9400
// },
// {

//     id: "24",
//     img: "./img/samsung-galaxy-z-fold-3.jpg",
//     Name: "SS1",
//     type: "Samsung",
//     price: 1000
// },
// {

//     id: "25",
//     img: "./img/Minote10.jpg",
//     Name: "Xiao2",
//     type: "Xiaomi",
//     price: 1000
// },
// {

//     id: "26",
//     img: "./img/xiaomi11.jpg",
//     Name: "Xiao3",
//     type: "Xiaomi",
//     price: 9400
// },
// {

//     id: "27",
//     img: "./img/samsung-galaxy-z-fold-3.jpg",
//     Name: "SS4",
//     type: "Samsung",
//     price: 1000
// },
// {

//     id: "28",
//     img: "./img/Minote10.jpg",
//     Name: "Xiao5",
//     type: "Xiaomi",
//     price: 1000
// },
// {

//     id: "29",
//     img: "./img/xiaomi11.jpg",
//     Name: "Xiao6",
//     type: "Xiaomi",
//     price: 9400
// },
// {
//     id: "30",
//     img: "./img/xiaomi11.jpg",
//     Name: "Xiao7",
//     type: "Xiaomi",
//     price: 9500
// },
// {
//     id: "31",
//     img: "./img/xiaomi11.jpg",
//     Name: "Xiao8",
//     type: "Xiaomi",
//     price: 8300
// },
// {
//     id: "32",
//     img: "./img/xiaomi11.jpg",
//     Name: "Xiao8",
//     type: "Xiaomi",
//     price: 8300
// },
// {
//     id: "33",
//     img: "./img/xiaomi11.jpg",
//     Name: "Xiao8",
//     type: "Xiaomi",
//     price: 8300
// }
// var arr=[
//     {
//         idhoadon:'0',
//         tentaikhoan:'123',
//         sodienthoai:'0987654321',
//         sanpham:[
//             {
//                 id: "0",
//                 img: "/img/xiaomi11.jpg",
//                 Name: "Điện thoại Xiaomi Mi 11 Lite",
//                 type: "Xiaomi",
//                 price: 9400},
//             {
//                 id: "2",
//                 img: "/img/Minote10.jpg",
//                 Name: "Xiao2",
//                 type: "Xiaomi",
//                 price: 1000,
//             },
//             {
//                 id: "3",
//                 img: "/img/xiaomi11.jpg",
//                 Name: "Xiao3",
//                 type: "Xiaomi",
//                 price: 9400
//             }
//         ]
//     },
//     {
//         idhoadon:'1',
//         tentaikhoan:'321',
//         sodienthoai:'0987644321',
//         sanpham:[
//             {
//                 id: "0",
//                 img: "/img/xiaomi11.jpg",
//                 Name: "abc",
//                 type: "Xiaomi",
//                 price: 9400},
//             {
//                 id: "2",
//                 img: "/img/Minote10.jpg",
//                 Name: "abc",
//                 type: "Xiaomi",
//                 price: 1000,
//             },
//             {
//                 id: "3",
//                 img: "/img/xiaomi11.jpg",
//                 Name: "abc",
//                 type: "Xiaomi",
//                 price: 9400
//             }
//         ]
//     },{
//         idhoadon:'3',
//         tentaikhoan:'321',
//         sodienthoai:'0987644321',
//         sanpham:[
//             {
//                 id: "0",
//                 img: "/img/xiaomi11.jpg",
//                 Name: "abc1",
//                 type: "Xiaomi",
//                 price: 9400},
//             {
//                 id: "2",
//                 img: "/img/Minote10.jpg",
//                 Name: "abc1",
//                 type: "Xiaomi",
//                 price: 1000,
//             },
//             {
//                 id: "3",
//                 img: "/img/xiaomi11.jpg",
//                 Name: "abc",
//                 type: "Xiaomi",
//                 price: 9400
//             }
//         ]
//     }
//     ];
//     console.log(arr);
//     localStorage.setItem('llll',JSON.stringify(arr));