let SanPham = JSON.parse(localStorage.getItem('Product'));

window.onload = function(){
    innerTable();
    viewData();
};

function innerTable() {
    var url = window.location.href;
    var id = url.split('?');
    switch(id[1])
    {
        
        // case 'QLSP':
        //     InnerSP(SanPham);
        //     document.getElementById('FormThemSP').style.display ="flex";
        //     document.getElementById('tknone').style.display="none";
        //     document.getElementById('FormQLuser').style.display="none";
        //     break;
        // case 'QLDH':
            
        //     break;
        case 'TK':
            
            break;
        default :
            break;
    }
}

function innerUser(obj) {
    var s="";
    for(var i=0;i< obj.length;i++)
    {
        
    }
}

function InnerSP() {
    var s="";
    SanPham=JSON.parse(localStorage.getItem('Product'));
    document.getElementById('content').innerHTML=" ";
    document.getElementById('right').innerHTML = '<div id="FormThemSP"><p><label>ID Sản Phẩm: </label><input type="text" id="addID" value=""/></p><p><label>Tên Sản Phẩm: </label><input type="text" id="addName"  value=""/></p><p><label>Hãng Sản Phẩm: </label><input type="text" id="addHang"  value=""/></p><p><label>Giá Sản Phẩm: </label><input type="text" id="addPrice"  value=""/></p><p><label>Hình ảnh: </label></p><input type="file" id="addImg" name="ADDImage" accept="image/png, image/gif, image/jpeg" /><input type="button" value="Thêm" onclick="getIFSP()" id="addthem"/></div>'
    for(i=(SanPham.length-1); i >=0 ; i--)
    {
        document.getElementById('content').innerHTML += '<div class="SP"><div class="idSP">'+SanPham[i].id+'</div><div class="SPimg"><img src="'+SanPham[i].img+'" alt="" /></div><div class="TTSP"><div class="TenSP">'+SanPham[i].Name+'</div><div class="GiaSP">'+SanPham[i].price+'</div></div><div class="btn_SP"><div class="btnS"><div class="btn_S" onclick="innersuaSP('+i+')"><i class="fas fa-pen  " ></i></div></div><div class="btnClose"><div  class="btn_C" id="Xoa'+i+'" onclick="xoaSP(this.id)"><i class="fas fa-trash" ></i></div></div></div></div>';
    }    
}

//Quản Lý Sản Phẩm
var temp=0;
function inputGetValue(addr){
    var temp = document.getElementById(addr).value;
    return temp;
}
function getIFSP(){
    
    var id = document.getElementById('addID').value;
    if(document.getElementById("addthem").value=="Thêm")
    for( i=0; i<SanPham.length; i++)
    {
        if(SanPham[i].id==id)
        {
            alert("ID bị trùng");
            document.getElementById('addID').focus();
            return false;
        }

    }
    var imgval = document.getElementById('addImg').value;
    var img= '/img/'+imgval.split(/[\\]/)[2];
    var Name = document.getElementById('addName').value;
    var type = document.getElementById('addHang').value;
    var price = document.getElementById('addPrice').value;
        if(id==""||Name==""||type==""||price=="")
        {
            alert("Điền đầy đủ thông tin");
            return false;
        }
    var TempSP={
        id,
        img,
        Name,
        type,
        price
    }
    if(document.getElementById("addthem").value=="Thêm"){
        SanPham.push(TempSP);
        themSP(SanPham);
    }
    if(document.getElementById("addthem").value=="Sửa"){
        SanPham[temp]=TempSP;
        localStorage.setItem('Product', JSON.stringify(SanPham));
        InnerSP();
        document.getElementById("addthem").value="Thêm";
    }
}
function themSP(SP){

        localStorage.setItem('Product', JSON.stringify(SP));
        InnerSP();
}
function xoaSP(val){
    if(!confirm('Chắc xóa chứ?'))
        return false;

    SanPham=JSON.parse(localStorage.getItem('Product'));
    console.log((val.split(/[Xoa]/))[3]);
    var vt=(val.split(/[Xoa]/))[3];
    SanPham.splice(vt, 1);
    localStorage.setItem('Product', JSON.stringify(SanPham));
    InnerSP();
}

function innersuaSP(val){
    document.getElementById("addID").focus();
    document.getElementById('addID').value=SanPham[val].id;
    document.getElementById('addName').value=SanPham[val].Name;
    document.getElementById('addPrice').value=SanPham[val].price;
    document.getElementById('addHang').value=SanPham[val].type;
    document.getElementById("addthem").value="Sửa";
    temp=val;
}






// Tài Khoảng
function viewData()
{
    if(localStorage.getItem('taikhoankhachhang')===null)
    {
        return false;
    }
    let arruser=JSON.parse (localStorage.getItem('taikhoankhachhang')); 
    var table='<table class="bang" border="1" cellpading="5"><thead><tr><th>ID</th><th>Tên tài khoản</th><th>Mật khẩu</th><th>Tên khách hàng</th><th>Số điện thoại</th><th>Công cụ</th></tr></thead><tbody>';
    for(var i=2;i<arruser.length;i++)
    {
        table+='<tr>';
        table+='<td>'+(i-1)+'</td>';
        table+='<td>'+arruser[i].taikhoan+'</td>';
        table+='<td>'+arruser[i].matkhau+'</td>';
        table+='<td>'+arruser[i].nameuser+'</td>';
        table+='<td>'+arruser[i].phone+'</td>';
        table+='<td><i class="fas fa-user-times nutxoa_taikhoan" style="color:red; float: left" onclick="deleteuser('+i+');"></i></td>';
        table+='</tr>';
    }
    table+='<tbody></table>';
    document.getElementById('content').innerHTML=table;
    document.getElementById('right').innerHTML='<div class="right_user"><input type="text" placeholder="Nhập tài khoản/tên/sđt muốn tìm" id="timuser"><input type="button" value="Tìm kiếm"onclick="timkiemtaikhoan();"></div>';
}
function deleteuser(id)
{
    let arruser=JSON.parse (localStorage.getItem('taikhoankhachhang'));  
        if(confirm("Bạn có muốn xóa người dùng này"))
        {
            arruser.splice(id,1);
        }            
    localStorage.setItem('taikhoankhachhang', JSON.stringify(arruser));  
    viewData();    
}
function timkiemtaikhoan()
{
    var tktaikhoan=document.getElementById('timuser').value;
    let arruser=JSON.parse (localStorage.getItem('taikhoankhachhang')); 
    var table='<table class="bang" border="1" cellpading="5"><thead><tr><th>ID</th><th>Tên tài khoản</th><th>Mật khẩu</th><th>Tên khách hàng</th><th>Số điện thoại</th><th>Công cụ</th></tr></thead><tbody>';
    for(var i=2;i<arruser.length;i++)
    {
        if(arruser[i].taikhoan==tktaikhoan||arruser[i].nameuser==tktaikhoan||arruser[i].phone==tktaikhoan)
        {          
            table+='<tr>';
            table+='<td>'+(i-1)+'</td>';
            table+='<td>'+arruser[i].taikhoan+'</td>';
            table+='<td>'+arruser[i].matkhau+'</td>';
            table+='<td>'+arruser[i].nameuser+'</td>';
            table+='<td>'+arruser[i].phone+'</td>';
            table+='<td><i class="fas fa-user-times nutxoa_taikhoan" style="color:red; float: left" onclick="deleteuser('+i+');"></i></td>';
            table+='</tr>';
        }
    }
    table+='<tbody></table>';
    document.getElementById('content').innerHTML=table;
}




function showhoadon()
{
    let arrhoadon=JSON.parse(localStorage.getItem('DonHang'));
    console.log(arrhoadon);
    var table='<table class="bang" border="1" cellpading="5"><thead><tr><th>Tên khách hàng</th><th>Số điện thoại liên lạc</th><th>Thông tin chi tiết đơn hàng</th><th>Ngày mua hàng</th><th>Tình trạng đơn hàng</th></tr></thead><tbody>';
    for(var index in arrhoadon)
    {
        table+='<tr>';
        table+='<td>'+arrhoadon[index].TenTK+'</td>';
        table+='<td>'+arrhoadon[index].SDT+'</td>';
        table+='<td class="showchitet"><input class="buttonchitiet" type="button" value="Chi tiết" onclick="inerchitiet('+index+');"></td>';
        table+='<td>'+arrhoadon[index].time+'</td>';
        table+='<td id ="tinhtrang">'+arrhoadon[index].tinhtrang+'</td>';
        table+='</tr>';
    }
    table+='<tbody></table>';
    document.getElementById('content').innerHTML=table;
    document.getElementById('right').innerHTML='<div class="right_hoadon"><select id="xuli" onchange="locdanhsachdonhang();"><option value="0">Mặc Định</option><option value="1">Chưa xử lý</option><option value="2">Đã xử lý</option></select><div class="nhapngaythang"><input type="date" placeholder="Nhập ngày tháng bắt đầu " id="ngaybatdau"><input type="date" placeholder="Nhập ngày tháng kết thúc " id="ngayketthuc"><input type="button" value="Tìm kiếm"onclick="timkiemtime();"></div></div>';
}
function inerchitiet(id)
{
    document.querySelector('.modal_login').style.display = "block";
    document.getElementById('chitietsp').innerHTML='';
    var tong=0;
    let arrhoadon=JSON.parse(localStorage.getItem('DonHang'));
    for(var index in arrhoadon)
    {
        if(index==id)  
        { 
        var tenkh=arrhoadon[index].TenTK;
        var sdtkh=arrhoadon[index].SDT;
        for(i=0;i<arrhoadon[index].SanPham.length;i++)
        {
            var tensanpham=arrhoadon[index].SanPham[i].TenSP;
            var giasanpham=arrhoadon[index].SanPham[i].Gia;
            var soluongsanpham=arrhoadon[index].SanPham[i].SoluongSP;
            var gsp=parseInt(arrhoadon[index].SanPham[i].Gia);
            var slsp=parseInt(arrhoadon[index].SanPham[i].SoluongSP);
            tong+=gsp*slsp;
            document.getElementById('nutxacnhan').innerHTML='<input type="button" value="xử lý" onclick="donhangxacnhanxuly('+index+');">';
            document.getElementById('chitietsp').innerHTML+='<div>Tên sản phẩm: '+tensanpham+', Giá tiền: '+giasanpham+', Số lượng: '+soluongsanpham+'</div>';
            document.getElementById('tongtien_donhang').innerHTML='Tổng tiền của đơn hàng là: '+tong+'đ';
        }
        }
    }
    document.getElementById('chitietten').innerHTML=tenkh;
    document.getElementById('chitietsdt').innerHTML=sdtkh;
}
function donhangxacnhanxuly(id)
{
    let arrhoadon=JSON.parse(localStorage.getItem('DonHang'));
    for(var index in arrhoadon)
    {
        if(index==id)
        {
            arrhoadon[index].tinhtrang='Đã Xử Lý';
        }
    }
    localStorage.setItem('DonHang',JSON.stringify(arrhoadon));
    showhoadon();
}
function locdanhsachdonhang()
{
    var daxl=document.getElementById('xuli').value;
    let arrhoadon=JSON.parse(localStorage.getItem('DonHang'));
    if(daxl=="1")
    {
        var table='<table class="bang" border="1" cellpading="5"><thead><tr><th>Tên khách hàng</th><th>Số điện thoại liên lạc</th><th>Thông tin chi tiết đơn hàng</th><th>Ngày mua hàng</th><th>Tình trạng đơn hàng</th></tr></thead><tbody>';        for(var index in arrhoadon)
        {
            if(arrhoadon[index].tinhtrang=='Chưa Xử Lý')
            {
                table+='<tr>';
                table+='<td>'+arrhoadon[index].TenTK+'</td>';
                table+='<td>'+arrhoadon[index].SDT+'</td>';
                table+='<td class="showchitet"><input class="buttonchitiet" type="button" value="Chi tiết" onclick="inerchitiet('+index+');"></td>';
                table+='<td>'+arrhoadon[index].time+'</td>';
                table+='<td id ="tinhtrang">'+arrhoadon[index].tinhtrang+'</td>';
                table+='</tr>';
            }
        }
        table+='<tbody></table>';
    document.getElementById('content').innerHTML=table;
    }
    if(daxl=="2")
    {
        var table='<table class="bang" border="1" cellpading="5"><thead><tr><th>Tên khách hàng</th><th>Số điện thoại liên lạc</th><th>Thông tin chi tiết đơn hàng</th><th>Ngày mua hàng</th><th>Tình trạng đơn hàng</th></tr></thead><tbody>';        for(var index in arrhoadon)
        {
            if(arrhoadon[index].tinhtrang=='Đã Xử Lý')
            {
                table+='<tr>';
                table+='<td>'+arrhoadon[index].TenTK+'</td>';
                table+='<td>'+arrhoadon[index].SDT+'</td>';
                table+='<td class="showchitet"><input class="buttonchitiet" type="button" value="Chi tiết" onclick="inerchitiet('+index+');"></td>';
                table+='<td>'+arrhoadon[index].time+'</td>';
                table+='<td id ="tinhtrang">'+arrhoadon[index].tinhtrang+'</td>';
                table+='</tr>';
            }
        }
        table+='<tbody></table>';
    document.getElementById('content').innerHTML=table;
    }
    if(daxl=="0")
    {
        showhoadon();
    }
           
}
function timkiemtime()
{
    let arrhoadon=JSON.parse(localStorage.getItem('DonHang'));
    var ngaybatdau=document.getElementById('ngaybatdau').value;
    var ngayketthuc=document.getElementById('ngayketthuc').value;
    var begin=new Date(ngaybatdau);
    var end=new Date(ngayketthuc);
    console.log(begin);
    console.log(end);
    var table='<table class="bang" border="1" cellpading="5"><thead><tr><th>Tên khách hàng</th><th>Số điện thoại liên lạc</th><th>Thông tin chi tiết đơn hàng</th><th>Ngày mua hàng</th><th>Tình trạng đơn hàng</th></tr></thead><tbody>';        
    for(var index in arrhoadon)
        {
            var timemua=new Date(arrhoadon[index].time);
            console.log(timemua);
            console.log(arrhoadon[index].time);
            if(end<begin)
            {
                alert('Ngày bắt đầu không được nhỏ hơn ngày kết thúc');
                return;
            }
            if(timemua>=begin &&timemua<=end)
            {
                console.log(timemua>=begin&&timemua<=end);
                table+='<tr>';
                table+='<td>'+arrhoadon[index].TenTK+'</td>';
                table+='<td>'+arrhoadon[index].SDT+'</td>';
                table+='<td class="showchitet"><input class="buttonchitiet" type="button" value="Chi tiết" onclick="inerchitiet('+index+');"></td>';
                table+='<td>'+arrhoadon[index].time+'</td>';
                table+='<td id ="tinhtrang">'+arrhoadon[index].tinhtrang+'</td>';
                table+='</tr>';
            }
        }
        table+='<tbody></table>';
    document.getElementById('content').innerHTML=table;
}