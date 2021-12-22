let SanPham = JSON.parse(localStorage.getItem('Product'));
let HangSP = JSON.parse(localStorage.getItem('HangSP'));
window.onload = function(){
    viewData();
    soluonghangbanduoc();
};

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
    document.getElementById('right').innerHTML = '<div id="FormThemSP"><p><label>ID Sản Phẩm: </label><input type="text" disabled   id="addID" value="'+(parseInt(SanPham[(SanPham.length-1)].id)+1)+'"/></p><p><label>Tên Sản Phẩm: </label><input type="text" id="addName"  value=""/></p><p><label>Hãng Sản Phẩm: </label><input type="text" id="addHang"  value=""/></p><p><label>Giá Sản Phẩm: </label><input type="number" id="addPrice"  value=""/></p><p><label>Hình ảnh: </label></p><input type="file" id="addImg" name="ADDImage" accept="image/png, image/gif, image/jpeg, image/jpg" /><div style="display: flex; flex-direction: row"><input type="button" value="Thêm" onclick="getIFSP()" id="addthem"/><input style="display: none" type="button" value="Hủy" onclick="huysuaSP()" id="addhuy"/></div></div>'
    for(i=SanPham.length-1; i>=0 ; i--)
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
    
    var id=document.getElementById('addID').value;
    if(document.getElementById("addthem").value=="Thêm")
    {
        id = parseInt(SanPham[(SanPham.length-1)].id)+1;
        // for( i=0; i<SanPham.length; i++)
        // {
        //     if(SanPham[i].id==id)
        //     {
        //         alert("ID bị trùng");
        //         document.getElementById('addID').focus();
        //         return false;
        //     }

        // }
    }

    var imgval = document.getElementById('addImg').value;
    if(imgval.split(/[\\]/)[2]!=null)
    {
        var img= './img/'+imgval.split(/[\\]/)[2];
        console.log(imgval.split(/[\\]/)[2]);
    }
    else
    img='/img/no_image.png';
    console.log(img);
    var Name = document.getElementById('addName').value;
    var type = document.getElementById('addHang').value;
    
    var price = document.getElementById('addPrice').value;
        if(id==""||Name==""||type==""||price=="")
        {
            alert("Điền đầy đủ thông tin");
            return false;
        }

    for( i=0; i<HangSP.length; i++)
        {
            if((HangSP[i].tenSP).toLowerCase()==type.toLowerCase())
            {
                type=HangSP[i].tenSP;
                break;
            }
            else
            if(i==(HangSP.length-1))
            {
                var answer = window.confirm("Hãng này chưa tồn tại tồn tại bạn muốn thêm vào không?")
                if(answer){
                    var HangSPtemp = JSON.parse(localStorage.getItem(HangSP));
                    HangSPtemp =
                        {
                            idSP: type,
                            tenSP: type
                        }
                    HangSP.push(HangSPtemp);
                    localStorage.setItem('HangSP',JSON.stringify(HangSP));
                    break;
                }
                else
                return false;
            }
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
    document.getElementById("addhuy").style.display='flex'
    temp=val;
}
function huysuaSP(){
    document.getElementById("addthem").value="Thêm";
    document.getElementById("addhuy").style.display='none'
    document.getElementById('addID').value=parseInt(SanPham[(SanPham.length-1)].id)+1;
    document.getElementById('addName').value="";
    document.getElementById('addPrice').value="";
    document.getElementById('addHang').value="";
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
        table+='<td><i class="fas fa-user-times nutxoa_taikhoan" style="color:red;" onclick="deleteuser('+i+');"></i></td>';
        table+='</tr>';
    }
    table+='<tbody></table>';
    document.getElementById('content').innerHTML=table;
    document.getElementById('right').innerHTML='<div class="right_user"><input type="text" placeholder="Nhập tài khoản/tên/sđt muốn tìm" id="timuser"><input type="button" value="Tìm kiếm" onclick="timkiemtaikhoan();" id="buton_amin"></div>';
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
            table+='<td><i class="fas fa-user-times nutxoa_taikhoan" style="color:red;" onclick="deleteuser('+i+');"></i></td>';
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
    var table='<table class="bang" border="1" cellpading="5"><thead><tr><th>Tên khách hàng</th><th>Số điện thoại liên lạc</th><th>Thông tin chi tiết đơn hàng</th><th>Ngày mua hàng</th><th>Tình trạng đơn hàng</th><th>Hủy đơn</th></tr></thead><tbody>';
    for(var index in arrhoadon)
    {
        table+='<tr>';
        table+='<td>'+arrhoadon[index].TenTK+'</td>';
        table+='<td>'+arrhoadon[index].SDT+'</td>';
        table+='<td class="showchitet"><input class="buttonchitiet" type="button" value="Chi tiết" onclick="inerchitiet('+index+');" id="buton_amin"></td>';
        table+='<td>'+arrhoadon[index].time+'</td>';
        table+='<td id ="tinhtrang">'+arrhoadon[index].tinhtrang+'</td>';
        if(arrhoadon[index].deletenone=="0")
        {
            table+='<td><div id="none_xoa"><i class="fas fa-trash-alt nutxoa_donhang" style="color:red;" onclick="delete_donhang('+index+');"></i></div></td>';
        }else{
            table+='<td><div id="none_xoa"></div></td>';
        }
        table+='</tr>';
    }
    table+='<tbody></table>';
    document.getElementById('content').innerHTML=table;
    document.getElementById('right').innerHTML='<div class="right_hoadon"><select id="xuli" onchange="locdanhsachdonhang();"><option value="0">Tất Cả</option><option value="1">Chưa xử lý</option><option value="2">Đã xử lý</option></select><div class="nhapngaythang"><input type="date" placeholder="Nhập ngày tháng bắt đầu " id="ngaybatdau"><input type="date" placeholder="Nhập ngày tháng kết thúc " id="ngayketthuc"><input type="button" value="Tìm kiếm"onclick="timkiemtime();"id="buton_amin"></div></div>';
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
            if(arrhoadon[index].deletenone=="0")
        {
            document.getElementById('nutxacnhan').innerHTML='<input type="button" value="xử lý" onclick="donhangxacnhanxuly('+index+');" id="buton_amin">';
        }else{
            document.getElementById('nutxacnhan').innerHTML='';
            showhoadon();
        }
            document.getElementById('chitietsp').innerHTML+='<div>Tên sản phẩm: '+tensanpham+', Giá tiền: '+giasanpham+', Số lượng: '+soluongsanpham+'</div>';
            document.getElementById('tongtien_donhang').innerHTML='<div style="color: red;">Tổng tiền của đơn hàng là: '+tong+'$</div>';
        }
        }
    }
    document.getElementById('chitietten').innerHTML=tenkh;
    document.getElementById('chitietsdt').innerHTML=sdtkh;
}
var timez=new Date()
function donhangxacnhanxuly(id)
{
    let arrhoadon=JSON.parse(localStorage.getItem('DonHang'));
    for(var index in arrhoadon)
    {
        if(index==id)
        {
            arrhoadon[index].tinhtrang='Đã Xử Lý';
            arrhoadon[index].deletenone='1';
            arrhoadon[index].time=timez;
            document.getElementById('chitiethd').style.display='none';
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
        var table='<table class="bang" border="1" cellpading="5"><thead><tr><th>Tên khách hàng</th><th>Số điện thoại liên lạc</th><th>Thông tin chi tiết đơn hàng</th><th>Ngày mua hàng</th><th>Tình trạng đơn hàng</th><th>Hủy đơn</th></tr></thead><tbody>';
        for(var index in arrhoadon)
        {
            if(arrhoadon[index].tinhtrang=='Chưa Xử Lý')
            {
                table+='<tr>';
                table+='<td>'+arrhoadon[index].TenTK+'</td>';
                table+='<td>'+arrhoadon[index].SDT+'</td>';
                table+='<td class="showchitet"><input class="buttonchitiet" type="button" value="Chi tiết" onclick="inerchitiet('+index+');" id="buton_amin"></td>';
                table+='<td>'+arrhoadon[index].time+'</td>';
                table+='<td id ="tinhtrang">'+arrhoadon[index].tinhtrang+'</td>';
                if(arrhoadon[index].deletenone=="0")
                {
                    table+='<td><div id="none_xoa"><i class="fas fa-trash-alt nutxoa_donhang" style="color:red;" onclick="delete_donhang('+index+');"></i></div></td>';
                }else{
                    table+='<td><div id="none_xoa"></div></td>';
                }
                table+='</tr>';
            }
        }
        table+='<tbody></table>';
    document.getElementById('content').innerHTML=table;
    }
    if(daxl=="2")
    {
        var table='<table class="bang" border="1" cellpading="5"><thead><tr><th>Tên khách hàng</th><th>Số điện thoại liên lạc</th><th>Thông tin chi tiết đơn hàng</th><th>Ngày mua hàng</th><th>Tình trạng đơn hàng</th><th>Hủy đơn</th></tr></thead><tbody>';       
        for(var index in arrhoadon)
        {
            if(arrhoadon[index].tinhtrang=='Đã Xử Lý')
            {
                table+='<tr>';
                table+='<td>'+arrhoadon[index].TenTK+'</td>';
                table+='<td>'+arrhoadon[index].SDT+'</td>';
                table+='<td class="showchitet"><input class="buttonchitiet" type="button" value="Chi tiết" onclick="inerchitiet('+index+');" id="buton_amin"></td>';
                table+='<td>'+arrhoadon[index].time+'</td>';
                table+='<td id ="tinhtrang">'+arrhoadon[index].tinhtrang+'</td>';
                if(arrhoadon[index].deletenone=="0")
                {
                    table+='<td><div id="none_xoa"><i class="fas fa-trash-alt nutxoa_donhang" style="color:red;" onclick="delete_donhang('+index+');"></i></div></td>';
                }else{
                    table+='<td><div id="none_xoa"></div></td>';
                }
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
    var table='<table class="bang" border="1" cellpading="5"><thead><tr><th>Tên khách hàng</th><th>Số điện thoại liên lạc</th><th>Thông tin chi tiết đơn hàng</th><th>Ngày mua hàng</th><th>Tình trạng đơn hàng</th><th>Hủy đơn</th></tr></thead><tbody>';        
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
                table+='<td class="showchitet"><input class="buttonchitiet" type="button" value="Chi tiết" onclick="inerchitiet('+index+');" id="buton_amin"></td>';
                table+='<td>'+arrhoadon[index].time+'</td>';
                table+='<td id ="tinhtrang">'+arrhoadon[index].tinhtrang+'</td>';
                if(arrhoadon[index].deletenone=="0")
                {
                    table+='<td><div id="none_xoa"><i class="fas fa-trash-alt nutxoa_donhang" style="color:red;" onclick="delete_donhang('+index+');"></i></div></td>';
                }else{
                    table+='<td><div id="none_xoa"></div></td>';
                }
                table+='</tr>';
            }
        }
        table+='<tbody></table>';
    document.getElementById('content').innerHTML=table;
}
function delete_donhang(idxoadon)
{
    let arrhoadon=JSON.parse(localStorage.getItem('DonHang'));
    if(confirm('Bạn có muốn xóa đơn hàng này?'))
    {
        arrhoadon.splice(idxoadon,1);
    }
    localStorage.setItem('DonHang', JSON.stringify(arrhoadon));  
    showhoadon(); 
}



var arr=[];
function thongke()
{
    
    var tongthunhap=0;
    var tongsoluongspbanduoc=0;
    var tongslmoiloaisp=0;
    let arrhoadon=JSON.parse(localStorage.getItem('DonHang'));
    let arrsp=JSON.parse(localStorage.getItem('Product'));
    console.log(arrsp);
    for(var index in arrhoadon)
    {
        if(arrhoadon[index].tinhtrang=='Đã Xử Lý')
        {
            for(i=0;i<arrhoadon[index].SanPham.length;i++)
            {
                var tinhtien=parseInt(arrhoadon[index].SanPham[i].Gia);
                var tinhsoluong=parseInt(arrhoadon[index].SanPham[i].SoluongSP);
                tongthunhap+=tinhtien*tinhsoluong;
                tongsoluongspbanduoc+=tinhsoluong;
                for(var index1 in arrsp)
                {
                    if(arrhoadon[index].SanPham[i].TenSP==arrsp[index1].Name)
                    {
                        var tinhsoluong=parseInt(arrhoadon[index].SanPham[i].SoluongSP);
                        console.log(tinhsoluong)
                                tongslmoiloaisp+=tinhsoluong;
                                var hang=arrsp[index1].type;
                                var ss={hang,tinhsoluong};
                                arr.push(ss);
                                // document.getElementById('content').innerHTML='<div>Tổng số lượng '+arrsp[index1].type+' đã bán là: '+tinhsoluong+'</div>';
                                // '<div>Tổng số lượng Xiaomi đã bán: '+tongslmoispXiaomi+'</div><div>Tổng số lượng Samsung đã bán: '+tongslmoispSamsung+'</div><div>Tổng số lượng Apple đã bán: '+tongslmoispApple+'</div><div>Tổng số lượng Oppo đã bán: '+tongslmoispOppo+'</div><div>Tổng số sản phẩm đã bán: '+tongsoluongspbanduoc+'</div>';
                                // document.getElementById('right').innerHTML='<div>Tổng số sản phẩm đã bán: '+tongsoluongspbanduoc+'</div><div>Tổng tiền thu nhập: '+tongthunhap+'$</div>';
                                // break;                                 
                    }
                }
            }
        }
    }
    localStorage.setItem('nnn',JSON.stringify(arr));
    // for(var index in arrhoadon)
    // {
    //     if(arrhoadon[index].tinhtrang=='Đã Xử Lý')
    //     {   
    //         for(i=0;i<arrhoadon[index].SanPham.length;i++)
    //         {
    //             var tinhtien=parseInt(arrhoadon[index].SanPham[i].Gia);
    //         var tinhsoluong=parseInt(arrhoadon[index].SanPham[i].SoluongSP);
    //         tongthunhap+=tinhtien*tinhsoluong;
    //         tongsoluongspbanduoc+=tinhsoluong;
    //         // document.getElementById('content').innerHTML='Tổng số lượng bán được: '+tongsoluongspbanduoc+'';
    //             for(var index1 in arrsp)
    //             {     
    //             if(arrsp[index1].Name==arrhoadon[index].SanPham[i].TenSP)
    //             {
    //             console.log(arrsp[index1].Name==arrhoadon[index].SanPham[i].TenSP);
    //             if(arrsp[index1].type=='Xiaomi')
    //             {
    //                 console.log(arrsp[index1].type=='Xiaomi');
    //                 console.log(arrsp[index1].type);
    //                 var tinhsoluong=parseInt(arrhoadon[index].SanPham[i].SoluongSP);
    //                 console.log(tinhsoluong)
    //                 tongslmoispXiaomi+=tinhsoluong;
    //                 console.log(tongslmoispXiaomi);
    //                 break;
    //             }

    //             if(arrsp[index1].type=='Samsung')
    //             {
    //                 var tinhsoluong=parseInt(arrhoadon[index].SanPham[i].SoluongSP);
    //                 tongslmoispSamsung+=tinhsoluong; 
    //                 break;                 
    //             }
    //             if(arrsp[index1].type=='Apple')
    //             {
    //                 var tinhsoluong=parseInt(arrhoadon[index].SanPham[i].SoluongSP);
    //                 tongslmoispApple+=tinhsoluong; 
    //                 break;   
    //             }
    //             if(arrsp[index1].type=='Oppo')
    //             {
    //                 var tinhsoluong=parseInt(arrhoadon[index].SanPham[i].SoluongSP);
    //                 tongslmoispOppo+=tinhsoluong;
    //                 break;
    //             }
    //             }
    //             }
    //         }
    //     }
    // }
    // document.getElementById('content').innerHTML='<div>Tổng số lượng Xiaomi đã bán: '+tongslmoispXiaomi+'</div><div>Tổng số lượng Samsung đã bán: '+tongslmoispSamsung+'</div><div>Tổng số lượng Apple đã bán: '+tongslmoispApple+'</div><div>Tổng số lượng Oppo đã bán: '+tongslmoispOppo+'</div><div>Tổng số sản phẩm đã bán: '+tongsoluongspbanduoc+'</div>';
    //             document.getElementById('right').innerHTML='Tổng tiền thu nhập: '+tongthunhap+'$';
}



function soluonghangbanduoc(){
    let arrsp=JSON.parse(localStorage.getItem('Product'));
    let arrhoadon=JSON.parse(localStorage.getItem('DonHang'));
    for(var index in arrhoadon)
    {
        if(arrhoadon[index].tinhtrang=='Đã Xử Lý')
        {
        var timeslbanduoc=arrhoadon[index].time;
            for(i=0;i<arrhoadon[index].SanPham.length;i++)
            {
                for(var index1 in arrsp)
                {
                    if(arrhoadon[index].SanPham[i].TenSP==arrsp[index1].Name)
                    {
                        var tinhsoluong=parseInt(arrhoadon[index].SanPham[i].SoluongSP);
                                var hang=arrsp[index1].type;
                                var ss={hang,tinhsoluong,timeslbanduoc};
                                arr.push(ss);
                                // document.getElementById('right').innerHTM='<input type="button" value="all" onclick="kkk();">';
                                // document.getElementById('content').innerHTML='<div>Tổng số lượng '+arrsp[index1].type+' đã bán là: '+tinhsoluong+'</div>';
                                // '<div>Tổng số lượng Xiaomi đã bán: '+tongslmoispXiaomi+'</div><div>Tổng số lượng Samsung đã bán: '+tongslmoispSamsung+'</div><div>Tổng số lượng Apple đã bán: '+tongslmoispApple+'</div><div>Tổng số lượng Oppo đã bán: '+tongslmoispOppo+'</div><div>Tổng số sản phẩm đã bán: '+tongsoluongspbanduoc+'</div>';
                                // break;                                 
                    }
                }
            }
        }
    }
    localStorage.setItem('nnn',JSON.stringify(arr));
            
}
function kkk()
{
    let arr=JSON.parse(localStorage.getItem('nnn'));
    for(i=0;i<arr.length-1;i++)
    {
        for(j=i+1;j<arr.length;j++)
        {
        if(arr[j].hang==arr[i].hang)
        {
        var qqq=parseInt(arr[i].tinhsoluong);
        var zzz=parseInt(arr[j].tinhsoluong);
            qqq+=zzz;
            arr[i].tinhsoluong=qqq;
            arr.splice(j,1);
            j--;
        localStorage.setItem('nnn',JSON.stringify(arr));
        }
    }
    }
}
function hhh()
{
    var s='';
    var tongthunhap=0;
    var tongsoluongspbanduoc=0;
    let arrhoadon=JSON.parse(localStorage.getItem('DonHang'));
    let arr=JSON.parse(localStorage.getItem('nnn'));
    console.log(arr);
    for(var index in arr)
    {
        var z=arr[index].hang;
        var p=arr[index].tinhsoluong;
        console.log(z);
        console.log(p);
        s+='<div class="Tongsl"><div>Tổng số lượng '+z+' đã bán</div> <div>'+p+'</div></div>';
    }
    document.getElementById('content').innerHTML=s;
    for(var index in arrhoadon)
    {
        if(arrhoadon[index].tinhtrang=='Đã Xử Lý')
        {
            for(i=0;i<arrhoadon[index].SanPham.length;i++)
            {
                var tinhtien=parseInt(arrhoadon[index].SanPham[i].Gia);
                var tinhsoluong=parseInt(arrhoadon[index].SanPham[i].SoluongSP);
                tongthunhap+=tinhtien*tinhsoluong;
                tongsoluongspbanduoc+=tinhsoluong;
            }
        }
        document.getElementById('right').innerHTML='<div class="TongDT">Tổng số sản phẩm đã bán: '+tongsoluongspbanduoc+'</div><div class="TongDT">Tổng tiền thu nhập: '+tongthunhap+'$</div><div id="bangloctime"><input type="number" name="" id="loctime"/><input type="button" value="Lọc theo năm" onclick="loctimedoanhthu();"/></div>';
    }
}
function loctimedoanhthu()
{
    var s='';
    var tongthunhap=0;
    var tongsoluongspbanduoc=0;
    var tongthunhap=0;
    var tongsoluongspbanduoc=0;
    var loc=document.getElementById('loctime').value;
    var m=12;
    var d=31;
    var zzzz=loc+'/'+m+'/'+d;
    var timel= new Date(loc);
    var end=new Date(zzzz);
    let arrhoadon=JSON.parse(localStorage.getItem('DonHang'));
    let arr=JSON.parse(localStorage.getItem('nnn'));
    for(var index in arrhoadon)
    {      
        if(arrhoadon[index].tinhtrang=="Đã Xử Lý")
        {
            var timee=new Date( arrhoadon[index].time);
            if(timee>=timel&&timee<=end)
            {
                console.log(timee>=timel&&timee<=end);
                for(i=0;i<arrhoadon[index].SanPham.length;i++)
                {
                var tinhtien=parseInt(arrhoadon[index].SanPham[i].Gia);
                var tinhsoluong=parseInt(arrhoadon[index].SanPham[i].SoluongSP);
                tongthunhap+=tinhtien*tinhsoluong;
                tongsoluongspbanduoc+=tinhsoluong;
                }
            }
        document.getElementById('right').innerHTML='<div class="TongDT">Tổng số sản phẩm đã bán: '+tongsoluongspbanduoc+'</div><div class="TongDT">Tổng tiền thu nhập: '+tongthunhap+'$</div><div id="bangloctime"><input type="number" name="" id="loctime"/><input type="button" value="Lọc theo năm" onclick="loctimedoanhthu();"/></div>';
        }
    }
}
//Hiển thị menu
function htmenu(){
    var t=document.getElementById('menu');
    if(t.style.display =="block") t.style.display="none";
    else  t.style.display="block";
}