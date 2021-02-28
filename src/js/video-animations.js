/* JQ/JS functions to make plaboy bunny spin on open and close and animations for transitioning the content*/

var youtubeLinks = {
  what:
    '	<iframe width="1000" height="1000px" src="https://www.youtube.com/embed/wcJVXg7gg4w?autoplay=0&controls=2&autohide=0" frameborder="0" allowfullscreen></iframe>',
  broke_boi:
    '<iframe width="560" height="315" src="https://www.youtube.com/embed/3XOETXVL424" frameborder="0" allowfullscreen></iframe>',
  fetti:
    '<iframe width="560" height="315" src="https://www.youtube.com/embed/A5IvyeAeEOM" frameborder="0" allowfullscreen></iframe>',
  sneak_dissin:
    '<iframe width="560" height="315" src="https://www.youtube.com/embed/OYwGimL6Buo" frameborder="0" allowfullscreen></iframe>',
  pray_4_me:
    '<iframe width="560" height="315" src="https://www.youtube.com/embed/RGMr3tMwakI" frameborder="0" allowfullscreen></iframe>',
  talk_icytwat:
    '<iframe width="560" height="315" src="https://www.youtube.com/embed/DokszoiLh1Q" frameborder="0" allowfullscreen></iframe>',
  no_pressure:
    '	<iframe width="560" height="315" src="https://www.youtube.com/embed/SnHJ-kqGUrc" frameborder="0" allowfullscreen></iframe>',
  by_myself:
    '<iframe width="560" height="315" src="https://www.youtube.com/embed/xWCzMx4jURI" frameborder="0" allowfullscreen></iframe>',
  mercedez:
    '<iframe width="560" height="315" src="https://www.youtube.com/embed/s1jQY0s2foM" frameborder="0" allowfullscreen></iframe>',
  outchea:
    '<iframe width="560" height="315" src="https://www.youtube.com/embed/xdd6F15A1wI" frameborder="0" allowfullscreen></iframe>',
  ghost:
    '<iframe width="560" height="315" src="https://www.youtube.com/embed/Unqu9hUYKF8" frameborder="0" allowfullscreen></iframe>',
  "3_chains":
    '<iframe width="560" height="315" src="https://www.youtube.com/embed/zF4ZC3d8SkA" frameborder="0" allowfullscreen></iframe>',
  talk:
    '	<iframe width="560" height="315" src="https://www.youtube.com/embed/VdtxO0lFxnE" frameborder="0" allowfullscreen></iframe>',
  broke_boi_live:
    '<iframe width="560" height="315" src="https://www.youtube.com/embed/8nYhd0OjThA" frameborder="0" allowfullscreen></iframe>',
  plug:
    '<iframe width="560" height="315" src="https://www.youtube.com/embed/_y5wyRPxQzg" frameborder="0" allowfullscreen></iframe>',
  cry:
    '	<iframe width="560" height="315" src="https://www.youtube.com/embed/tIWpD2A155E" frameborder="0" allowfullscreen></iframe>',
  steez:
    '<iframe width="560" height="315" src="https://www.youtube.com/embed/H2dv-nfl15c" frameborder="0" allowfullscreen></iframe>',
  carti_toronto:
    '	<iframe width="560" height="315" src="https://www.youtube.com/embed/tnyI51TrFYk" frameborder="0" allowfullscreen></iframe>',
  bari_carti:
    '<iframe width="560" height="315" src="https://www.youtube.com/embed/kSos-a1wePg" frameborder="0" allowfullscreen></iframe>',
  know_nothing_carti:
    '	<iframe width="560" height="315" src="https://www.youtube.com/embed/MFv0uoveNdQ" frameborder="0" allowfullscreen></iframe>',
  come_up_carti:
    '<iframe width="560" height="315" src="https://www.youtube.com/embed/pFyn6Z7PQLw" frameborder="0" allowfullscreen></iframe>',
  awful_records_carti:
    '	<iframe width="560" height="315" src="https://www.youtube.com/embed/4Z8xXD90wFA" frameborder="0" allowfullscreen></iframe>',
  carti_mexikodro:
    '<iframe width="560" height="315" src="https://www.youtube.com/embed/tP8460z0eH0" frameborder="0" allowfullscreen></iframe>',
  vfiles_carti_uzi:
    '<iframe width="560" height="315" src="https://www.youtube.com/embed/77dNyEOMOUE" frameborder="0" allowfullscreen></iframe>',
  ghetto_flowers:
    '<iframe width="560" height="315" src="https://www.youtube.com/embed/Vukw5rA9uWU" frameborder="0" allowfullscreen></iframe>',
  what_live:
    '<iframe width="560" height="315" src="https://www.youtube.com/embed/5eumqRFhS6I" frameborder="0" allowfullscreen></iframe>',
  left_right_tour:
    '<iframe width="560" height="315" src="https://www.youtube.com/embed/uqOUv7ZmXMo" frameborder="0" allowfullscreen></iframe>',
  carti_live_comp:
    '<iframe width="560" height="315" src="https://www.youtube.com/embed/VKNSBikYMP4" frameborder="0" allowfullscreen></iframe>',
  what_live_concert:
    '<iframe width="560" height="315" src="https://www.youtube.com/embed/K8cTT1HDPp4" frameborder="0" allowfullscreen></iframe>',
  carti_complex_interview:
    '<iframe width="560" height="315" src="https://www.youtube.com/embed/iHJoS6GpeKc" frameborder="0" allowfullscreen></iframe>',
  vfiles_carti_interview_alt:
    '<iframe width="560" height="315" src="https://www.youtube.com/embed/zYtJdIr1sqM" frameborder="0" allowfullscreen></iframe>',
  hot97_interview:
    '<iframe width="560" height="315" src="https://www.youtube.com/embed/MOURO7uQ0eE" frameborder="0" allowfullscreen></iframe>',
  wokeuplikethis_lyrics:
    '<iframe width="560" height="315" src="https://www.youtube.com/embed/ZVA_TdxFEy4" frameborder="0" allowfullscreen></iframe>',
  rolling_loud:
    '<iframe width="560" height="315" src="https://www.youtube.com/embed/G3P_7YriuJk" frameborder="0" allowfullscreen></iframe>',
  shop_talk:
    '<iframe width="560" height="315" src="https://www.youtube.com/embed/jPkLlmKXEE0" frameborder="0" allowfullscreen></iframe>',
  carti_everything:
    '<iframe width="560" height="315" src="https://www.youtube.com/embed/rHO6TiPLHqw" frameborder="0" allowfullscreen></iframe>',
  when_yatchy_met_carti:
    '<iframe width="560" height="315" src="https://www.youtube.com/embed/E5uHzO6L_EQ" frameborder="0" allowfullscreen></iframe>',
  xxl_bts:
    '<iframe width="560" height="315" src="https://www.youtube.com/embed/6oWaIBzwByU" frameborder="0" allowfullscreen></iframe>',
  magnolia_ad:
    '<iframe width="560" height="315" src="https://www.youtube.com/embed/uKJtB5ao15E" frameborder="0" allowfullscreen></iframe>',
  xxl_freestyle:
    '<iframe width="560" height="315" src="https://www.youtube.com/embed/o483VZ5kB_E" frameborder="0" allowfullscreen></iframe>',
  xxl_cypher:
    '<iframe width="560" height="315" src="https://www.youtube.com/embed/aO12BCNUlLU" frameborder="0" allowfullscreen></iframe>',
  magnolia:
    '<iframe width="560" height="315" src="https://www.youtube.com/embed/oCveByMXd_0" frameborder="0" allowfullscreen></iframe>',
  summer_bummer:
    '<iframe width="560" height="315" src="https://www.youtube.com/embed/AcVQJJoD45w" frameborder="0" allowfullscreen></iframe>'
};

function addYoutubeVideo(currentHeading) {
  var cur_parent = $(currentHeading).parent();
  console.log($(cur_parent).next("div"));
  var idPanel = $(cur_parent).next("div");
  var vidContainer = $(idPanel).find(".contents-video");
  console.log(vidContainer);
  var video_id = $(idPanel).attr("id");
  console.log(video_id);
  vidContainer.append(youtubeLinks[video_id]);
}

function removeAllSpin(currentElement) {
  console.log("Calling remove all spin");
  $.each($(".logo"), function(index, val) {
    if (!$(currentElement).is(this)) {
      $(this).removeClass("spin-class");
    }
  });
}

function removeAllVideos() {
  console.log("Calling remove all videos");
  $.each($(".contents-video"), function(index, val) {
    console.log(this);
    $("iframe").remove();
  });
}

$(document).ready(function() {
  $logoClass = $(".panel-title");
  $logoClass.on("click", function() {
    var bunny = $(this).find("img");
    removeAllVideos();
    addYoutubeVideo(this);
    removeAllSpin(bunny);
    $(bunny).toggleClass("spin-class");
  });
});
