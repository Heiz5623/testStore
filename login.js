var arruser=[];
function taokhachhang(){
    if(localStorage.getItem('taikhoankhachhang')===null){
        arruser=[{taikhoan:'abc123',matkhau:'123123',nameuser:'taikhoan123',phone:'9999999999',thuoctinh:'1'},{taikhoan:'admin',matkhau:'admin',nameuser:'nguyenhaiduong',phone:'6969696969',thuoctinh:'0'}];
        localStorage.setItem('taikhoankhachhang',JSON.stringify(arruser));
    }else{
        arruser=JSON.parse(localStorage.getItem('taikhoankhachhang'));
    }
}
taokhachhang();
function nhap() {
    document.querySelector('.modal_login').style.display = "block";
}
function alertClose() {
    document.querySelector('.modal_login').style.display = "none";
}
function dk() {
    var dangki = document.querySelector('.form');
    dangki.innerHTML = '<h2 class="">REGISTER</h2> <div onclick="dkClose();" class="btnclose"><i class="icon_close far fa-times-circle"></i></div><div>Username</div><input class="in" type="text" placeholder="Enter your Username..." id="tk"><div style="color: red;" id="loitaikhoan"></div><div >Password</div><input class="in" type="text" placeholder="Enter your Password..." id="mk"><div style="color: red;" id="loimatkhau"></div><div>Name</div><input class="in" type="text" placeholder="Enter your Name..." id="nm"><div>Phone</div><input class="in" type="text"  placeholder="Enter your Phone..." id="ph"> <div style="color: red;" id="loiphone"></div><a href="#"><input type="button" class="dangnhap" onclick="register();" value="Đăng Kí"></input></a> <div class="footerfrom">Bạn đã có tài khoản ?<a href="#" style="color: darkgreen; opacity: 0.8; cursor: pointer; " onclick="dn()">Đăng Nhập</a></div>';
}
function dn() {
    var dangnhap = document.querySelector('.form');
    dangnhap.innerHTML = '<h2 class="">LOGIN</h2>  <div onclick="alertClose();" class="btnclose"><i class="icon_close far fa-times-circle"></i></div>    <div>       <div>Username</div>       <input class="in" type="text" placeholder="Enter your Username..." id="tk">  <div >Password</div>  <input class="in" type="password" placeholder="Enter your Password..." id="mk">   </div> <a href="#"><input type="button" class="dangnhap" onclick="login();" value="Đăng Nhập"></input></a>   <div class="footerfrom">Bạn đã có tài khoản chưa ?<a href="#" style="color: darkgreen; opacity: 0.8; cursor: pointer; " onclick="dk()">Đăng Kí</a></div>';
}
function dkClose() {
    document.querySelector('.modal_login').style.display = "none";
    dn();
}

function register() {
    var isregister=true;
    var arr = document.getElementsByTagName('input');
    var tk = arr[0].value;
    var mk = arr[1].value;
    var nm =arr[2].value;
    var ph= arr[3].value;
    if(tk.length<5||mk.length<5||nm.length==""||ph.length!=10 || isNaN(ph)){
        isregister=false;
        if(tk.length<5){
            document.getElementById('loitaikhoan').textContent="Tài khoản phải từ 5 kí tự";
            isregister=false;
        }if(mk.length<5){
            document.getElementById('loimatkhau').textContent="Mật khẩu phải từ 5 kí tự";
            isregister=false;
        }if(nm.length==""){
            alert("Không được bỏ trống");
            isregister=false;
        }if(ph.length!=10){
            document.getElementById('loiphone').textContent="Số điện thoại phải là 10 số";
            isregister=false;
        }
        if(isNaN(ph))
        {
            alert('Số điện thoại phải là dạng số');
            isregister=false;
        }
    }
    for(var index in arruser)
    {
        if(tk.toUpperCase()==arruser[index].taikhoan.toUpperCase())
        {
            isregister=false;
            alert('Tài khoản đã có người sử dụng');
            break;
        }
        if(ph==arruser[index].phone)
        {
            isregister=false;
            alert('Số điện thoại đã có người sử dụng');
            break;
        }
    }
    if(isregister)
    {
        var user={taikhoan: tk, matkhau: mk, nameuser:nm, phone: ph, thuoctinh:'1'};
        arruser.push(user);
        localStorage.setItem('taikhoankhachhang',JSON.stringify(arruser));
        alert('Đăng kí thành công');
        dn();
    }
}

function login() {
    var arr = document.getElementsByTagName('input');
    var TK = arr[0].value;
    var MK= arr[1].value;
    if (TK == "" || MK == "") {
        alert("Hãy nhập đầy đủ thông tin");

    } else {
        var userArray1= this.arruser;
        var inputUsername = document.getElementById('tk').value;
        var inputPassword = document.getElementById('mk').value;
        console.log( inputPassword);
        console.log( userArray1);
        for (var i = 0; i <userArray1.length; i++) {
            if (userArray1[i].taikhoan == inputUsername && userArray1[i].matkhau ==  inputPassword )
            {
                localStorage.setItem('tendangnhap',JSON.stringify(inputUsername));
                alertClose();
                alert('Đăng nhập thành công');
                if(userArray1[i].thuoctinh=='0'){
                    document.getElementById("nutchuyensangadmin").innerHTML='<a href="admin.html"><i class="fas fa-users-cog"></i></a>';
                    localStorage.setItem('abc','2');
                    var nutouttaikhoan=document.querySelector('.vtk');                              
                    nutouttaikhoan.innerHTML='<a href="#" class="outtk"><i class="fas fa-sign-out-alt vitri_nutdangnhap" onclick="logout();"></i></a>'; 
                    return;
                }
                console.log(userArray1[i].thuoctinh=='0');
                localStorage.setItem('abc','1');
                document.getElementById('showmuahang').style.display='flex';
                checkvotk();
                return;
            }
            console.log(userArray1[i].matkhau);
            if(userArray1[i].taikhoan == inputUsername && userArray1[i].matkhau !=  inputPassword )
            {
                alert('Sai mật khẩu');
                return;
            }
            if(userArray1[i].taikhoan != inputUsername && userArray1[i].matkhau !=  inputPassword )
            {
                var d=0;
                d++;
            }
        }
        if(d>0)
        {
            alert('Sai tài khoản hoặc mật khẩu');
            return;
        }
    }
}
function logout(){
    var outtaikhoan=document.querySelector('.outtk');
    outtaikhoan.innerHTML='<i class="far fa-user-circle vitri_nutdangnhap" onclick="nhap();" ></i>';
    document.getElementById('tenuser').innerHTML='';
    document.getElementById('showmuahang').style.display='none';
    document.getElementById("nutchuyensangadmin").innerHTML='';
    localStorage.setItem('abc','0');   
}
function checkvotk()
{
    var t=JSON.parse(localStorage.getItem('abc'));
    if(t==0)
    {
        var votaikhoan=document.querySelector('.vtk');
        votaikhoan.innerHTML='<i class="far fa-user-circle vitri_nutdangnhap" onclick="nhap();" ></i>';
    }if(t==1){
        var nutouttaikhoan=document.querySelector('.vtk');                          
        nutouttaikhoan.innerHTML='<a href="#" class="outtk"><i class="fas fa-sign-out-alt vitri_nutdangnhap" onclick="logout();"></i></a>';   
        var innerten=JSON.parse(localStorage.getItem('tendangnhap'));
        document.getElementById('tenuser').innerHTML=innerten;
        document.getElementById('showmuahang').style.display='flex';
        return;
    }
    if(t==2)
    {
        var nutouttaikhoan=document.querySelector('.vtk');                          
        nutouttaikhoan.innerHTML='<a href="#" class="outtk"><i class="fas fa-sign-out-alt vitri_nutdangnhap" onclick="logout();"></i></a>';   
        document.getElementById("nutchuyensangadmin").innerHTML='<a href="admin.html"><i class="fas fa-users-cog"></i></a>';
    }
    else{
        localStorage.setItem('abc','0');
    }
}