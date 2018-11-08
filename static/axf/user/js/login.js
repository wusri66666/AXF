$(function () {
    $('#submit').click(login);
});

function login() {
    var name = $('#name').val();
    var pwd = $('#pwd').val();
    if(name.length < 3){
        alert('用户名过短');
        return;
    }
    if(pwd.length < 6){
        alert('密码过短');
        return;
    }
    // 密码做md5
    var enc_pwd = md5(pwd);
    // 发送ajax请求
    $.ajax({
        url:'/app/loginAPI/',
        data:{
            'name':name,
            'pwd':enc_pwd
        },
        method:'post',
        success:function (res) {
            if(res.code == 1){
                window.open(res.data,target='_self')
            }else{
                alert(res.msg)
            }
        }
    })
}