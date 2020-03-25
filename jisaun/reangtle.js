$(function(){
    var width = $('#width');
    var height = $('#height');
    var button = $('#calculate');
    var perimeter = $('#perimeter');
    var area = $('#area');
    console.log(1);
        
    button.click(function(){
        var w = Number(width.val()),
            h = Number(height.val())
        var p = 2 * (w + h),
            a = w * h
        console.log(p,a)
        perimeter.val(p)
        area.val(a)
    })
})
