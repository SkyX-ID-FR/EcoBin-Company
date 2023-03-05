/* 
     ______   ______   ______   ___    _______    ________  ___   __      
    /_____/\ /_____/\ /_____/\ /__/\ /_______/\  /_______/\/__/\ /__/\    
    \::::_\/_\:::__\/ \:::_ \ \\::\ \\::: _  \ \ \__.::._\/\::\_\\  \ \   
     \:\/___/\\:\ \  __\:\ \ \ \\:_\/ \::(_)  \/_   \::\ \  \:. `-\  \ \  
      \::___\/_\:\ \/_/\\:\ \ \ \      \::  _  \ \  _\::\ \__\:. _    \ \ 
       \:\____/\\:\_\ \ \\:\_\ \ \      \::(_)  \ \/__\::\__/\\. \`-\  \ \
        \_____\/ \_____\/ \_____\/       \_______\/\________\/ \__\/ \__\/                                                                      
        2022-23 Eco'Bin© Society - Website developed by SkyX [ID FR] & XlaTor !
*/

console.log("Eco'Bin© Official Website will been launched ! ✨");
$("#menu_responsive_button").click(function() {  $("#responsive_menu_popup").fadeIn(); $(".video-js").addClass("disabled_video"); });
$("#close_icon").click(function() { $("#responsive_menu_popup").fadeOut(); $(".video-js").removeClass("disabled_video"); });

/* 📈 Animation with Number List Item Graph Section : 📉 */
$(function() { var fx = function fx() { $(".show_number_section ul li h1").each(function (i, el) { var data = parseInt(this.dataset.n, 10); var props = { "from": { "count": 0 }, "to": { "count": data } }; $(props.from).animate(props.to, { duration: 1000 * 1, step: function (now, fx) { $(el).text(Math.ceil(now)); }, complete:function() { if (el.dataset.sym !== undefined) { el.textContent = el.textContent.concat(el.dataset.sym) } } }); }); }; var reset = function reset() { if ($(this).scrollTop() > 90) { $(this).off("scroll"); fx() } }; $(window).on("scroll", reset); });

/* 📸 Product Image Selector JS : 📸 */
$("#item_1").click(function() { $("#item_1").addClass("disabled"); $("#item_2").removeClass("disabled"); $("#item_3").removeClass("disabled"); $("#mockup_img").attr("src", "https://mir-s3-cdn-cf.behance.net/project_modules/disp/77aab221768987.563073339a275.jpg"); });
$("#item_2").click(function() { $("#item_2").addClass("disabled"); $("#item_1").removeClass("disabled"); $("#item_3").removeClass("disabled"); $("#mockup_img").attr("src", "https://mir-s3-cdn-cf.behance.net/project_modules/disp/17870a21768987.56307333a1a90.jpg"); });
$("#item_3").click(function() { $("#item_3").addClass("disabled"); $("#item_1").removeClass("disabled"); $("#item_2").removeClass("disabled"); $("#mockup_img").attr("src", "https://mir-s3-cdn-cf.behance.net/project_modules/disp/6308c821768987.56307333ab785.jpg"); });