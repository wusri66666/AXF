$(function () {
    $('#myform').submit(function () {
        // 拿用户名判断不能为空，并且大于三位
        var name = $('#u_name').val();
        if(name.length < 3){
            alert('用户名过短');
            // 阻止提交
            return false
        }
        var pwd = $('#u_pwd').val();
        var confirm_pwd = $('#u_confirm_pwd').val();
        if(pwd == confirm_pwd & pwd.length >= 6){
            // 加密
            var enc_pwd = md5(pwd);
            var enc_confifrm_pwd = md5(confirm_pwd);
            // 设置回input
            $('#u_pwd').val(enc_pwd);
            $('#u_confirm_pwd').val(enc_confifrm_pwd)
        }else{
            alert('密码过短或不一致');
            return false
        }
    });

    $('#u_name').change(function () {
        var uname = $('#u_name').val();
        $.ajax({
            url:'/app/check_uname',
            data:{'uname':uname},
            method:'get',
            success:function (res) {
                // 提示用户
                if(res.code == 1){
                    $('#uname_msg').html(res.msg)
                }else{
                    alert(res.msg)
                }
            }
        })
    })
});