/*Functions to create the masonry grid and expand create light box on selected element.*/

/*Key object pair with sound name and correspoding iframe soundcloud player link  */

// let masonry = require("masonry-layout");
var Masonry = require("masonry-layout");
let getSize = require("get-size");
var imagesLoaded = require("imagesloaded");

var soundCloudLinks = {
  talk_og:
    '<iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/150045929&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
  holyfield:
    '<iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/141783144&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
  by_myself_no_help:
    '<iframe width="100%" height="450" scrolling="no" frameborder="no" src="http://w.soundcloud.com/player/?url=http%3A//api.soundcloud.com/tracks/169467965&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
  broke_boi:
    '<iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/198858900&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
  smash1:
    '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/179719019&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/playboicarti" title="playboicarti" target="_blank" style="color: #cccccc; text-decoration: none;">playboicarti</a> · <a href="https://soundcloud.com/playboicarti/smash-prod-ethereal" title="smash prod. ethereal" target="_blank" style="color: #cccccc; text-decoration: none;">smash prod. ethereal</a></div>',
  count_it_up:
    '<iframe width="100%" height="450" scrolling="no" frameborder="no" src="http://w.soundcloud.com/player/?url=http%3A//api.soundcloud.com/tracks/230729578&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
  money_counter:
    '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/205233908&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/playboicarti" title="playboicarti" target="_blank" style="color: #cccccc; text-decoration: none;">playboicarti</a> · <a href="https://soundcloud.com/playboicarti/death-in-tune-money-counter-prod-plugs" title="death in tune - money counter - prod. mexikodro" target="_blank" style="color: #cccccc; text-decoration: none;">death in tune - money counter - prod. mexikodro</a></div>',
  whole_thang:
    '<iframe width="100%" height="450" scrolling="no" frameborder="no" src="http://w.soundcloud.com/player/?url=http%3A//api.soundcloud.com/tracks/213573826&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
  peepin:
    '<iframe width="100%" height="450" scrolling="no" frameborder="no" src="http://w.soundcloud.com/player/?url=http%3A//api.soundcloud.com/tracks/216033631&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
  sauce:
    '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/310284515&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/slimejesus" title="Slime" target="_blank" style="color: #cccccc; text-decoration: none;">Slime</a> · <a href="https://soundcloud.com/slimejesus/sauce-playboicarti" title="Sauce - Playboi Carti" target="_blank" style="color: #cccccc; text-decoration: none;">Sauce - Playboi Carti</a></div>',
  just_a_dream:
    '<iframe width="100%" height="450" scrolling="no" frameborder="no" src="http://w.soundcloud.com/player/?url=http%3A//api.soundcloud.com/tracks/227012682&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
  mercedez:
    '<iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/190342970&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
  ever_since:
    '<iframe width="100%" height="450" scrolling="no" frameborder="no" src="http://w.soundcloud.com/player/?url=http%3A//api.soundcloud.com/tracks/227667971&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
  dont_tell_nobody:
    '<iframe width="100%" height="450" scrolling="no" frameborder="no" src="http://w.soundcloud.com/player/?url=http%3A//api.soundcloud.com/tracks/218391524&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
  dem_callin:
    '<iframe width="100%" height="450" scrolling="no" frameborder="no" src="http://w.soundcloud.com/player/?url=http%3A//api.soundcloud.com/tracks/236527412&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
  ian_connor:
    '<iframe width="100%" height="450" scrolling="no" frameborder="no" src="http://w.soundcloud.com/player/?url=http%3A//api.soundcloud.com/tracks/227024285&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
  this_cash:
    '<iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/271930248&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
  ghost:
    '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/251908576&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/gnealz" title="Gnealz" target="_blank" style="color: #cccccc; text-decoration: none;">Gnealz</a> · <a href="https://soundcloud.com/gnealz/key-playboicarti-ghost-prodgnealz-bigemm" title="Key! &amp; Playboi Carti - Ghost (Prod.Gnealz &amp; BigEmm) NO DJ" target="_blank" style="color: #cccccc; text-decoration: none;">Key! &amp; Playboi Carti - Ghost (Prod.Gnealz &amp; BigEmm) NO DJ</a></div>',
  fetti:
    '<iframe width="100%" height="450" scrolling="no" frameborder="no" src="http://w.soundcloud.com/player/?url=http%3A//api.soundcloud.com/tracks/205039892&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
  heavy:
    '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/133733961&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/playboicarti" title="playboicarti" target="_blank" style="color: #cccccc; text-decoration: none;">playboicarti</a> · <a href="https://soundcloud.com/playboicarti/heavy-by-playboicarti" title="Playboi Carti - Heavy" target="_blank" style="color: #cccccc; text-decoration: none;">Playboi Carti - Heavy</a></div>',
  left_right:
    '<iframe width="100%" height="450" scrolling="no" frameborder="no" src="http://w.soundcloud.com/player/?url=http%3A//api.soundcloud.com/tracks/244455117&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
  "2door":
    '<iframe width="100%" height="450" scrolling="no" frameborder="no" src="http://w.soundcloud.com/player/?url=http%3A//api.soundcloud.com/tracks/226625873&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
  talk_remix:
    '<iframe width="100%" height="450" scrolling="no" frameborder="no" src="http://w.soundcloud.com/player/?url=http%3A//api.soundcloud.com/tracks/221514963&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
  paper:
    '<iframe width="100%" height="450" scrolling="no" frameborder="no" src="http://w.soundcloud.com/player/?url=http%3A//api.soundcloud.com/tracks/230553176&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
  speedy_gonzalez:
    '<iframe width="100%" height="450" scrolling="no" frameborder="no" src="http://w.soundcloud.com/player/?url=http%3A//api.soundcloud.com/tracks/230415319&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
  pray_4_me:
    '<iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/165764152&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
  splur_gang:
    '<iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/224465784&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
  robber:
    '<iframe width="100%" height="450" scrolling="no" frameborder="no" src="http://w.soundcloud.com/player/?url=http%3A//api.soundcloud.com/tracks/215299099&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
  fresh_freestyle:
    '<iframe width="100%" height="450" scrolling="no" frameborder="no" src="http://w.soundcloud.com/player/?url=http%3A//api.soundcloud.com/tracks/231875187&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
  purple_pool:
    '<iframe width="100%" height="450" scrolling="no" frameborder="no" src="http://w.soundcloud.com/player/?url=http%3A//api.soundcloud.com/tracks/251711944&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
  ohh:
    '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/219029105&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/mexikodro" title="MexikoDro | MOD" target="_blank" style="color: #cccccc; text-decoration: none;">MexikoDro | MOD</a> · <a href="https://soundcloud.com/mexikodro/playboi-carti-ohh-prod-mexikodro-mod" title="PlayBoi Carti - Ohh Ft. JuiceDaSavage SSR [Prod. MexikoDro] (Hoodrich Keem) [MOD]" target="_blank" style="color: #cccccc; text-decoration: none;">PlayBoi Carti - Ohh Ft. JuiceDaSavage SSR [Prod. MexikoDro] (Hoodrich Keem) [MOD]</a></div>',
  sneak_dissin:
    '<iframe width="100%" height="450" scrolling="no" frameborder="no" src="http://w.soundcloud.com/player/?url=http%3A//api.soundcloud.com/tracks/236732730&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
  what_we_doin:
    '<iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/229796632&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
  the_omen:
    '<iframe width="100%" height="450" scrolling="no" frameborder="no" src="http://w.soundcloud.com/player/?url=http%3A//api.soundcloud.com/tracks/218390548&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
  too_much_dope:
    '<iframe width="100%" height="450" scrolling="no" frameborder="no" src="http://w.soundcloud.com/player/?url=http%3A//api.soundcloud.com/tracks/229022763&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
  luh_da_feeling:
    '<iframe width="100%" height="450" scrolling="no" frameborder="no" src="http://w.soundcloud.com/player/?url=http%3A//api.soundcloud.com/tracks/205177656&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
  freestyle_4_the_people:
    '<iframe width="100%" height="450" scrolling="no" frameborder="no" src="http://w.soundcloud.com/player/?url=http%3A//api.soundcloud.com/tracks/237005423&amp;auto_play=false&amp;hid  e_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
  "4tspoon":
    '<iframe width="100%" height="450" scrolling="no" frameborder="no" src="http://w.soundcloud.com/player/?url=http%3A//api.soundcloud.com/tracks/206482200&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
  chill_freestyle:
    '<iframe width="100%" height="450" scrolling="no" frameborder="no" src="http://w.soundcloud.com/player/?url=http%3A//api.soundcloud.com/tracks/257276150&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
  plug:
    '<iframe width="100%" height="450" scrolling="no" frameborder="no" src="http://w.soundcloud.com/player/?url=http%3A//api.soundcloud.com/tracks/233504170&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
  of_course_we_ghetto_flowers:
    '<iframe width="100%" height="450" scrolling="no" frameborder="no" src="http://w.soundcloud.com/player/?url=http%3A//api.soundcloud.com/tracks/276233032&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
  run_it:
    '<iframe width="100%" height="450" scrolling="no" frameborder="no" src="http://w.soundcloud.com/player/?url=http%3A//api.soundcloud.com/tracks/239122904&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
  beef:
    '<iframe width="100%" height="450" scrolling="no" frameborder="no" src="http://w.soundcloud.com/player/?url=http%3A//api.soundcloud.com/tracks/223469533&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
  what_remix:
    '<iframe width="100%" height="450" scrolling="no" frameborder="no" src="http://w.soundcloud.com/player/?url=http%3A//api.soundcloud.com/tracks/257544511&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
  vlone_thug:
    '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/252266821&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/drkmlk" title="DRKMLK" target="_blank" style="color: #cccccc; text-decoration: none;">DRKMLK</a> · <a href="https://soundcloud.com/drkmlk/playboi-carti-x-unotheactivist-2900-vlone-thug" title="PLAYBOI CARTI X UNOTHEACTIVIST (2900) - VLONE THUG" target="_blank" style="color: #cccccc; text-decoration: none;">PLAYBOI CARTI X UNOTHEACTIVIST (2900) - VLONE THUG</a></div>',
  "3_chains":
    '<iframe width="100%" height="450" scrolling="no" frameborder="no" src="http://w.soundcloud.com/player/?url=http%3A//api.soundcloud.com/tracks/243438626&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
  pump_fake:
    '<iframe width="100%" height="450" scrolling="no" frameborder="no" src="http://w.soundcloud.com/player/?url=http%3A//api.soundcloud.com/tracks/274770566&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
  scorin:
    '<iframe width="100%" height="450" scrolling="no" frameborder="no" src="http://w.soundcloud.com/player/?url=http%3A//api.soundcloud.com/tracks/297306993&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
  "10kk":
    '<iframe width="100%" height="450" scrolling="no" frameborder="no" src="http://w.soundcloud.com/player/?url=http%3A//api.soundcloud.com/tracks/197904627&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
  what:
    '<iframe width="100%" height="450" scrolling="no" frameborder="no" src="http://w.soundcloud.com/player/?url=http%3A//api.soundcloud.com/tracks/246551511&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
  dallas:
    '<iframe width="100%" height="450" scrolling="no" frameborder="no" src="http://w.soundcloud.com/player/?url=http%3A//api.soundcloud.com/tracks/249750075&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
  spike_lee:
    '<iframe width="100%" height="450" scrolling="no" frameborder="no" src="http://w.soundcloud.com/player/?url=http%3A//api.soundcloud.com/tracks/265088776&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
  for_my_set:
    '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/272043019&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/user-459664752" title="SLIME!" target="_blank" style="color: #cccccc; text-decoration: none;">SLIME!</a> · <a href="https://soundcloud.com/user-459664752/playboi-carti-for-my-set" title="Playboi Carti - For My Set" target="_blank" style="color: #cccccc; text-decoration: none;">Playboi Carti - For My Set</a></div>',
  paper_chasin:
    '<iframe width="100%" height="450" scrolling="no" frameborder="no" src="http://w.soundcloud.com/player/?url=http%3A//api.soundcloud.com/tracks/221771809&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
  telephone_calls:
    ' <iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/290435593&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
  no_pressure:
    '<iframe width="100%" height="450" scrolling="no" frameborder="no" src="http://w.soundcloud.com/player/?url=http%3A//api.soundcloud.com/tracks/265525235&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
  with_the_fanta:
    '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/241805258&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/proxybaby" title="@ProdbyVIP" target="_blank" style="color: #cccccc; text-decoration: none;">@ProdbyVIP</a> · <a href="https://soundcloud.com/proxybaby/playboi-carti-wit-tha-fanta-lsd-ii" title="Playboi Carti - With The Fanta  (Prod. Culti)" target="_blank" style="color: #cccccc; text-decoration: none;">Playboi Carti - With The Fanta  (Prod. Culti)</a></div>',
  i_know_u_know:
    '<iframe width="100%" height="450" scrolling="no" frameborder="no" src="http://w.soundcloud.com/player/?url=http%3A//api.soundcloud.com/tracks/163332526&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
  come_here:
    '<iframe width="100%" height="450" scrolling="no" frameborder="no" src="http://w.soundcloud.com/player/?url=http%3A//api.soundcloud.com/tracks/212361702&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
  fake_af:
    '<iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/213710934&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
  tank:
    '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/613919337&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/evo-lutionz" title="EvoLutionz" target="_blank" style="color: #cccccc; text-decoration: none;">EvoLutionz</a> · <a href="https://soundcloud.com/evo-lutionz/playboi-carti-tank-best-version" title="Playboi Carti- Tank Best Version" target="_blank" style="color: #cccccc; text-decoration: none;">Playboi Carti- Tank Best Version</a></div>',
  booted_up:
    '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/272260866&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/djtwinchi" title="RealDjTwin" target="_blank" style="color: #cccccc; text-decoration: none;">RealDjTwin</a> · <a href="https://soundcloud.com/djtwinchi/2-booted-up-dj-twin-feat-sean-kingston-playboi-carti-prod-stupid-kool" title="2. Booted Up - Dj Twin (Feat. Sean Kingston &amp; Playboi Carti) (Prod Stupid Kool)" target="_blank" style="color: #cccccc; text-decoration: none;">2. Booted Up - Dj Twin (Feat. Sean Kingston &amp; Playboi Carti) (Prod Stupid Kool)</a></div>',
  word_to_yams:
    '<iframe width="100%" height="450" scrolling="no" frameborder="no" src="http://w.soundcloud.com/player/?url=http%3A//api.soundcloud.com/tracks/291704433&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
  action:
    '<iframe width="100%" height="450" scrolling="no" frameborder="no" src="http://w.soundcloud.com/player/?url=http%3A//api.soundcloud.com/tracks/268170767&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
  outchea:
    '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/246145017&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/ejhodges15" title="Ejhodges15" target="_blank" style="color: #cccccc; text-decoration: none;">Ejhodges15</a> · <a href="https://soundcloud.com/ejhodges15/outchea-playboicarti" title="Outchea - Playboi Carti" target="_blank" style="color: #cccccc; text-decoration: none;">Outchea - Playboi Carti</a></div>',
  blue_crystal:
    '<iframe width="100%" height="450" scrolling="no" frameborder="no" src="http://w.soundcloud.com/player/?url=http%3A//api.soundcloud.com/tracks/222965059&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
  soul:
    '<iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/261675402&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
  step:
    '<iframe width="100%" height="450" scrolling="no" frameborder="no" src="http://w.soundcloud.com/player/?url=http%3A//api.soundcloud.com/tracks/271340573&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
  steez:
    '<iframe width="100%" height="450" scrolling="no" frameborder="no" src="http://w.soundcloud.com/player/?url=http%3A//api.soundcloud.com/tracks/221770357&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
  lil_pill:
    '<iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/290969411&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
  make_some_blow:
    '<iframe width="100%" height="450" scrolling="no" frameborder="no" src="http://w.soundcloud.com/player/?url=http%3A//api.soundcloud.com/tracks/281128547&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
  cry:
    '<iframe width="100%" height="450" scrolling="no" frameborder="no" src="http://w.soundcloud.com/player/?url=http%3A//api.soundcloud.com/tracks/263892582&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
  damn_shame:
    '<iframe width="100%" height="450" scrolling="no" frameborder="no" src="http://w.soundcloud.com/player/?url=http%3A//api.soundcloud.com/tracks/286481020&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
  red_lean:
    '<iframe width="100%" height="450" scrolling="no" frameborder="no" src="http://w.soundcloud.com/player/?url=http%3A//api.soundcloud.com/tracks/294794504&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
  carolina_blue:
    '<iframe width="100%" height="450" scrolling="no" frameborder="no" src="http://w.soundcloud.com/player/?url=http%3A//api.soundcloud.com/tracks/235144036&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
  snow:
    '<iframe width="100%" height="450" scrolling="no" frameborder="no" src="http://w.soundcloud.com/player/?url=http%3A//api.soundcloud.com/tracks/239108639&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
  club_pink:
    '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/262884945&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/trillaissance" title="EssenceTrill©" target="_blank" style="color: #cccccc; text-decoration: none;">EssenceTrill©</a> · <a href="https://soundcloud.com/trillaissance/playboi-carti-club-pink-feat-nessly" title="Playboi Carti - Club Pink (feat. Nessly)" target="_blank" style="color: #cccccc; text-decoration: none;">Playboi Carti - Club Pink (feat. Nessly)</a></div>',
  smash_2:
    '<iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/179721641&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
  interlude:
    '<iframe width="100%" height="450" scrolling="no" frameborder="no" src="http://w.soundcloud.com/player/?url=http%3A//api.soundcloud.com/tracks/161727544&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
  "4_in_da_cup":
    '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/312136357&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/moneybagbandit" title="MoneyBagBandit" target="_blank" style="color: #cccccc; text-decoration: none;">MoneyBagBandit</a> · <a href="https://soundcloud.com/moneybagbandit/playboi-carti-4-in-da-cup" title="Playboi Carti - 4 In Da Cup" target="_blank" style="color: #cccccc; text-decoration: none;">Playboi Carti - 4 In Da Cup</a></div>',
  faith:
    '<iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/261678287&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
  foyb:
    '<iframe width="100%" height="450" scrolling="no" frameborder="no" src="http://w.soundcloud.com/player/?url=http%3A//api.soundcloud.com/tracks/295638001&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
  mia:
    '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/312071493&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/vloneplug666666" title="ッツシヅ" target="_blank" style="color: #cccccc; text-decoration: none;">ッツシヅ</a> · <a href="https://soundcloud.com/vloneplug666666/playboi-carti-mia-prod-by" title="PLAYBOI CARTI ~ MIA [PROD BY ICYTWAT &amp; ETHEREAL]" target="_blank" style="color: #cccccc; text-decoration: none;">PLAYBOI CARTI ~ MIA [PROD BY ICYTWAT &amp; ETHEREAL]</a></div>',
  feel_this:
    '<iframe width="100%" height="450" scrolling="no" frameborder="no" src="http://w.soundcloud.com/player/?url=http%3A//api.soundcloud.com/tracks/290719389&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
  straight_up:
    '<iframe width="100%" height="450" scrolling="no" frameborder="no" src="http://w.soundcloud.com/player/?url=http%3A//api.soundcloud.com/tracks/291069510&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
  black_n_white:
    '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/301269076&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/conmannn" title="Conner Day" target="_blank" style="color: #cccccc; text-decoration: none;">Conner Day</a> · <a href="https://soundcloud.com/conmannn/playboi-carti-black-n-white" title="Playboi Carti -  Black N White" target="_blank" style="color: #cccccc; text-decoration: none;">Playboi Carti -  Black N White</a></div>',
  "36_villanz":
    '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/213751706&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/zacaveli06" title="Zacaveli" target="_blank" style="color: #cccccc; text-decoration: none;">Zacaveli</a> · <a href="https://soundcloud.com/zacaveli06/ir-cartier-x-36-villianz" title="$ir Cartier x 36 Villianz" target="_blank" style="color: #cccccc; text-decoration: none;">$ir Cartier x 36 Villianz</a></div>',
  lost:
    '<iframe width="100%" height="450" scrolling="no" frameborder="no" src="http://w.soundcloud.com/player/?url=http%3A//api.soundcloud.com/tracks/161054830&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
  money_bags:
    '<iframe width="100%" height="450" scrolling="no" frameborder="no" src="http://w.soundcloud.com/player/?url=http%3A//api.soundcloud.com/tracks/291448652&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
  lemme_know:
    '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/840577753&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/alpha1337" title="Alpha" target="_blank" style="color: #cccccc; text-decoration: none;">Alpha</a> · <a href="https://soundcloud.com/alpha1337/ethereal-lemme-know-ft-playboi-carti-og" title="Ethereal - Lemme Know ft Playboi Carti (OG)" target="_blank" style="color: #cccccc; text-decoration: none;">Ethereal - Lemme Know ft Playboi Carti (OG)</a></div>',
  exotic:
    '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/628703430&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/tony55568" title="ant.ttt" target="_blank" style="color: #cccccc; text-decoration: none;">ant.ttt</a> · <a href="https://soundcloud.com/tony55568/exotic-playboi-carti-trippie-blue" title="exotic - playboi carti &amp; trippie blue //////// prod. @jackwiththemac" target="_blank" style="color: #cccccc; text-decoration: none;">exotic - playboi carti &amp; trippie blue //////// prod. @jackwiththemac</a></div>',
  another_day:
    '<iframe width="100%" height="450" scrolling="no" frameborder="no" src="http://w.soundcloud.com/player/?url=http%3A//api.soundcloud.com/tracks/300484615&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
  smash_pt2:
    '<iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/179721641&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
  vango:
    '<iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/264005064&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
  zombies:
    '<iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/220287044&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
  servin_swervin:
    '<iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/303632543&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
  faster:
    '<iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/310463094&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
  pull_up:
    '<iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/318542085&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
  raf:
    '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/324007698&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/asapmob" title="ASAPMob" target="_blank" style="color: #cccccc; text-decoration: none;">ASAPMob</a> · <a href="https://soundcloud.com/asapmob/raf" title="RAF (feat. A$AP Rocky, Frank Ocean, Lil Uzi Vert, Playboi Carti &amp; Quavo)" target="_blank" style="color: #cccccc; text-decoration: none;">RAF (feat. A$AP Rocky, Frank Ocean, Lil Uzi Vert, Playboi Carti &amp; Quavo)</a></div>',
  green_and_purple:
    '<iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/322834576&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
  margiela_roof:
    '<iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/316258714&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
  new_bih:
    '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/400861686&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/buterflyboi" title="isaibeme" target="_blank" style="color: #cccccc; text-decoration: none;">isaibeme</a> · <a href="https://soundcloud.com/buterflyboi/playboi-carti-new-bih-prod" title="playboi carti ~ new bih (prod. 100staccs)" target="_blank" style="color: #cccccc; text-decoration: none;">playboi carti ~ new bih (prod. 100staccs)</a></div>',
  walk_inside_my_mansion:
    '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/420361096&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/dielitordontdie" title="dielitordontdie !" target="_blank" style="color: #cccccc; text-decoration: none;">dielitordontdie !</a> · <a href="https://soundcloud.com/dielitordontdie/playboi-carti-walk-inside-my-mansion-ft-quavo" title="Playboi Carti - Walk Inside My Mansion ft. Quavo" target="_blank" style="color: #cccccc; text-decoration: none;">Playboi Carti - Walk Inside My Mansion ft. Quavo</a></div>',
  no_limit:
    '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/315472993&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/thesehitsdayum" title="THESEHITSDAYUM" target="_blank" style="color: #cccccc; text-decoration: none;">THESEHITSDAYUM</a> · <a href="https://soundcloud.com/thesehitsdayum/playboi-carti-no-limit-ft-g-herbo" title="Playboi Carti - &quot;No Limit&quot; ft. G Herbo" target="_blank" style="color: #cccccc; text-decoration: none;">Playboi Carti - &quot;No Limit&quot; ft. G Herbo</a></div>',
  ysl:
    '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/362766353&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/trapafiend" title="Trap-fiend &amp; Reposts ✪" target="_blank" style="color: #cccccc; text-decoration: none;">Trap-fiend &amp; Reposts ✪</a> · <a href="https://soundcloud.com/trapafiend/playboi-carti-ysl-ft-gunna" title="Playboi Carti - YSL Ft. Gunna" target="_blank" style="color: #cccccc; text-decoration: none;">Playboi Carti - YSL Ft. Gunna</a></div>',
  styrofoam:
    '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/303421356&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/margielamadmanx" title="MARGIELA MADMAN" target="_blank" style="color: #cccccc; text-decoration: none;">MARGIELA MADMAN</a> · <a href="https://soundcloud.com/margielamadmanx/playboi-carti-styrofoam" title="Playboi Carti - Styrofoam" target="_blank" style="color: #cccccc; text-decoration: none;">Playboi Carti - Styrofoam</a></div>',
  sleeping_with_my_nine:
    '<iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/316758205&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
  magnolia:
    '<iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/317594712&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
  woke_up_like_this:
    '<iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/311653887&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
  lookin:
    '<iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/310475590&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
  butterfly_coupe:
    '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/335971233&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/finesseegod2" title="Finesse God 2" target="_blank" style="color: #cccccc; text-decoration: none;">Finesse God 2</a> · <a href="https://soundcloud.com/finesseegod2/yung-bans-butterfly-coupe-ft-playboi-carti" title="Yung Bans - Butterfly Coupe (Ft. Playboi Carti)" target="_blank" style="color: #cccccc; text-decoration: none;">Yung Bans - Butterfly Coupe (Ft. Playboi Carti)</a></div>',
  clouted_up:
    '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/807988408&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/wockhardtsoulja" title="Wockhardtsoulja" target="_blank" style="color: #cccccc; text-decoration: none;">Wockhardtsoulja</a> · <a href="https://soundcloud.com/wockhardtsoulja/playboi-carti-clouted-up-prod-stoopidxool" title="Playboi carti - Clouted up [Prod. Stoopidxool &amp; Mexikodro]" target="_blank" style="color: #cccccc; text-decoration: none;">Playboi carti - Clouted up [Prod. Stoopidxool &amp; Mexikodro]</a></div>',
  how_could_i_worry:
    '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/404713626&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/shakejunt2001" title="@brandoxantana" target="_blank" style="color: #cccccc; text-decoration: none;">@brandoxantana</a> · <a href="https://soundcloud.com/shakejunt2001/playboicarti-how-could-i-worry-bout-that-prod-ethereal" title="PlayboiCarti - How Could I Worry Bout That" target="_blank" style="color: #cccccc; text-decoration: none;">PlayboiCarti - How Could I Worry Bout That</a></div>',
  in_my_car:
    '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/538843134&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/user-672349913" title="DJ OZONE" target="_blank" style="color: #cccccc; text-decoration: none;">DJ OZONE</a> · <a href="https://soundcloud.com/user-672349913/playboi-carti-in-my-car" title="Playboi carti - In My Car" target="_blank" style="color: #cccccc; text-decoration: none;">Playboi carti - In My Car</a></div>',
  wwtw:
    '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/346541562&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/user-449126032" title="HEEEAAATSEEEAAAKKKERRSS" target="_blank" style="color: #cccccc; text-decoration: none;">HEEEAAATSEEEAAAKKKERRSS</a> · <a href="https://soundcloud.com/user-449126032/yung-gleesh-wwtw-feat-playboi-carti-lil-yachty-wshh-exclusive-official-audio" title="Yung Gleesh &quot;WWTW&quot; Feat. Playboi Carti &amp; Lil Yachty (WSHH Exclusive - Official Audio)" target="_blank" style="color: #cccccc; text-decoration: none;">Yung Gleesh &quot;WWTW&quot; Feat. Playboi Carti &amp; Lil Yachty (WSHH Exclusive - Official Audio)</a></div>',
};

let grid;

/* Change to toggleSoundCloudPlayer*/
function toggleSoundCloudPlayer(currentItem, currentItemContent) {
  var playerLink = soundCloudLinks[$(currentItem).attr("id")];
  if ($(".player").length > 0) {
    $(currentItem).remove("iframe");
  } else {
    $(currentItemContent).append(playerLink);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  $(".grid-item").hover(
    function () {
      if (!$(this).hasClass("expand")) {
        $(this).addClass("grow");
      }
    },
    function () {
      $(this).removeClass("grow");
    }
  );
  grid = new Masonry("#grid", {
    columnWidth: ".grid-sizer",
    itemSelector: ".grid-item",
    percentPosition: true,
  });
  //adjustCoverHeight();
  $("#grid").on("click", ".grid-item-content", function () {
    var itemContent = this;
    var itemElem = itemContent.parentNode;
    $(itemElem).removeClass("grow");
    removeAllActive();
    toggleSoundCloudPlayer(itemElem, itemContent);
    setItemContentPixelSize(itemContent);
    $(itemElem).toggleClass("expand");
    // force redraw
    // renable default transition
    itemContent.style[transitionProp] = "";
    addTransitionListener(itemContent);
    setItemContentTransitionSize(itemContent, itemElem);
    grid.layout();
  });
});

var docElem = document.documentElement;
var transitionProp =
  typeof docElem.style.transition == "string"
    ? "transition"
    : "WebkitTransition";
var transitionEndEvent = {
  WebkitTransition: "webkitTransitionEnd",
  transition: "transitionend",
}[transitionProp];

function setItemContentPixelSize(itemContent) {
  var previousContentSize = getSize(itemContent);
  // disable transition
  itemContent.style[transitionProp] = "none";
  // set current size in pixels
  itemContent.style.width = previousContentSize.width + "px";
  itemContent.style.height = previousContentSize.height + "px";
}

function addTransitionListener(itemContent) {
  // reset 100%/100% sizing after transition end
  var onTransitionEnd = function () {
    itemContent.style.width = "";
    itemContent.style.height = "";
    itemContent.removeEventListener(transitionEndEvent, onTransitionEnd);
  };
  itemContent.addEventListener(transitionEndEvent, onTransitionEnd);
}

function setItemContentTransitionSize(itemContent, itemElem) {
  // set new size
  var size = getSize(itemElem);
  itemContent.style.width = size.width + "px";
  itemContent.style.height = size.height + "px";
}

/*If class is already active do not remove the active because the toggleClass will already do that	 */
/* Also remove the soundCloud player and make the image and span display visible*/
function removeAllActive() {
  $.each($(".grid-item"), function () {
    $("iframe").remove();
    $(this).removeClass("expand");
  });
}
/* Images loaded not in masonry, but needed*/

imagesLoaded("#grid", function () {
  // images have loaded
  new Masonry("#grid", {
    columnWidth: ".grid-sizer",
    itemSelector: ".grid-item",
    percentPosition: true,
  });
});
