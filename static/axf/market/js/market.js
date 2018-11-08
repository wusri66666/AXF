var cate_toggle_tag = false;
var sort_toggle_tag = false;
$(function () {
    // 给全部类型加点击事件
    $('#all_cate').click(cate_toggle);
    $('#cates').click(cate_toggle);

    // 给综合排序加点击事件
    $('#all_sort').click(sort_toggle);
    $('#sorts').click(sort_toggle);

    // 加操作
    $('.addShopping').click(function () {
        $current_bt = $(this);
        // 获取点击商品的id
        var g_id = $current_bt.attr('g_id');

        $.ajax({
            url:"/app/CartAPI/",
            data:{
                g_id:g_id,
                type:'add'
            },
            method:'post',
            success:function (res) {
                if(res.code == 1){
                    $current_bt.prev().html(res.data)
                }
                if(res.code == 2){
                    window.open(res.data,target='_self')
                }
                if(res.code == 3){
                    alert(res.msg)
                }
            }
        })
    });

    $('.subShopping').click(function () {
         $current_bt = $(this);
        // 获取点击商品的id
        var g_id = $current_bt.attr('g_id');
        if($current_bt.next().html() == '0'){
            return;
        }
        $.ajax({
            url:"/app/CartAPI/",
            data:{
                g_id:g_id,
                type:'sub'
            },
            method:'post',
            success:function (res) {
                if(res.code == 1){
                    $current_bt.next().html(res.data)
                }
                if(res.code == 2){
                    window.open(res.data,target='_self')
                }
            }
        })
    });
});

function sort_toggle() {
    $('#sorts').toggle();
     if(sort_toggle_tag == false){
        $('#all_sort').find('span').removeClass("glyphicon glyphicon-chevron-down").addClass('glyphicon glyphicon-chevron-up');
        sort_toggle_tag = true
    } else {
        $('#all_sort').find('span').removeClass("glyphicon glyphicon-chevron-up").addClass('glyphicon glyphicon-chevron-down');
        sort_toggle_tag = false
    }
}

function cate_toggle() {
    $('#cates').toggle();
    if(cate_toggle_tag == false){
        $('#all_cate').find('span').removeClass("glyphicon glyphicon-chevron-down").addClass('glyphicon glyphicon-chevron-up');
        cate_toggle_tag = true
    } else {
        $('#all_cate').find('span').removeClass("glyphicon glyphicon-chevron-up").addClass('glyphicon glyphicon-chevron-down');
        cate_toggle_tag = false
    }
}