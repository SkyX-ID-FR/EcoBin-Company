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
$(function () { var fx = function fx() { $(".show_number_section ul li h1").each(function (i, el) { var data = parseInt(this.dataset.n, 10); var props = { "from": { "count": 0 }, "to": { "count": data } }; $(props.from).animate(props.to, { duration: 1000 * 1, step: function (now, fx) { $(el).text(Math.ceil(now)); }, complete:function() { if (el.dataset.sym !== undefined) { el.textContent = el.textContent.concat(el.dataset.sym) } } }); }); }; var reset = function reset() { if ($(this).scrollTop() > 90) { $(this).off("scroll"); fx() } }; $(window).on("scroll", reset); });