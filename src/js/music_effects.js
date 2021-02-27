/*Functions to create the masonry grid and expand create light box on selected element.*/



/*Key object pair with sound name and correspoding iframe soundcloud player link  */

var soundCloudLinks = {
 'yungxanhoe':'<iframe width="100%" height="160px" scrolling="no" frameborder="no" src="http://w.soundcloud.com/player/?url=http%3A//api.soundcloud.com/tracks/128431199&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
 'talk_og':'<iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/150045929&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
 'holyfield':'<iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/141783144&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
 'i_got_depressed_hoes':'<iframe width="100%" height="450" scrolling="no" frameborder="no" src="http://w.soundcloud.com/player/?url=http%3A//api.soundcloud.com/tracks/166832510&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
 'by_myself_no_help':'<iframe width="100%" height="450" scrolling="no" frameborder="no" src="http://w.soundcloud.com/player/?url=http%3A//api.soundcloud.com/tracks/169467965&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
 'broke_boi':'<iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/198858900&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
 'smash1':'<iframe width="100%" height="450" scrolling="no" frameborder="no" src="http://w.soundcloud.com/player/?url=http%3A//api.soundcloud.com/tracks/222979006&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
 'count_it_up':'<iframe width="100%" height="450" scrolling="no" frameborder="no" src="http://w.soundcloud.com/player/?url=http%3A//api.soundcloud.com/tracks/230729578&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
 'money_counter':'<iframe width="100%" height="450" scrolling="no" frameborder="no" src="http://w.soundcloud.com/player/?url=http%3A//api.soundcloud.com/tracks/222979067&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
 'whole_thang':'<iframe width="100%" height="450" scrolling="no" frameborder="no" src="http://w.soundcloud.com/player/?url=http%3A//api.soundcloud.com/tracks/213573826&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
 'peepin':'<iframe width="100%" height="450" scrolling="no" frameborder="no" src="http://w.soundcloud.com/player/?url=http%3A//api.soundcloud.com/tracks/216033631&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
 'sauce':'<iframe width="100%" height="450" scrolling="no" frameborder="no" src="http://w.soundcloud.com/player/?url=http%3A//api.soundcloud.com/tracks/230359385&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
 'just_a_dream':'<iframe width="100%" height="450" scrolling="no" frameborder="no" src="http://w.soundcloud.com/player/?url=http%3A//api.soundcloud.com/tracks/227012682&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
 'mercedez':'<iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/190342970&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
 'ever_since':'<iframe width="100%" height="450" scrolling="no" frameborder="no" src="http://w.soundcloud.com/player/?url=http%3A//api.soundcloud.com/tracks/227667971&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
 'dont_tell_nobody':'<iframe width="100%" height="450" scrolling="no" frameborder="no" src="http://w.soundcloud.com/player/?url=http%3A//api.soundcloud.com/tracks/218391524&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
 'dem_callin':'<iframe width="100%" height="450" scrolling="no" frameborder="no" src="http://w.soundcloud.com/player/?url=http%3A//api.soundcloud.com/tracks/236527412&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
 'ian_connor':'<iframe width="100%" height="450" scrolling="no" frameborder="no" src="http://w.soundcloud.com/player/?url=http%3A//api.soundcloud.com/tracks/227024285&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
 'this_cash':'<iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/271930248&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
 'ghost':'<iframe width="100%" height="450" scrolling="no" frameborder="no" src="http://w.soundcloud.com/player/?url=http%3A//api.soundcloud.com/tracks/238458186&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
 'fetti':'<iframe width="100%" height="450" scrolling="no" frameborder="no" src="http://w.soundcloud.com/player/?url=http%3A//api.soundcloud.com/tracks/205039892&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
 'heavy':'<iframe width="100%" height="450" scrolling="no" frameborder="no" src="http://w.soundcloud.com/player/?url=http%3A//api.soundcloud.com/tracks/290024062&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
 'left_right':'<iframe width="100%" height="450" scrolling="no" frameborder="no" src="http://w.soundcloud.com/player/?url=http%3A//api.soundcloud.com/tracks/244455117&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
 '2door':'<iframe width="100%" height="450" scrolling="no" frameborder="no" src="http://w.soundcloud.com/player/?url=http%3A//api.soundcloud.com/tracks/226625873&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
 'talk_remix':'<iframe width="100%" height="450" scrolling="no" frameborder="no" src="http://w.soundcloud.com/player/?url=http%3A//api.soundcloud.com/tracks/221514963&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
 'paper':'<iframe width="100%" height="450" scrolling="no" frameborder="no" src="http://w.soundcloud.com/player/?url=http%3A//api.soundcloud.com/tracks/230553176&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
 'speedy_gonzalez':'<iframe width="100%" height="450" scrolling="no" frameborder="no" src="http://w.soundcloud.com/player/?url=http%3A//api.soundcloud.com/tracks/230415319&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
 'pray_4_me':'<iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/165764152&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
 'these_niggas_mad_at_me':'<iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/251670515&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
 'splur_gang':'<iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/224465784&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
 'robber':'<iframe width="100%" height="450" scrolling="no" frameborder="no" src="http://w.soundcloud.com/player/?url=http%3A//api.soundcloud.com/tracks/215299099&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
 'fresh_freestyle':'<iframe width="100%" height="450" scrolling="no" frameborder="no" src="http://w.soundcloud.com/player/?url=http%3A//api.soundcloud.com/tracks/231875187&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
 'purple_pool':'<iframe width="100%" height="450" scrolling="no" frameborder="no" src="http://w.soundcloud.com/player/?url=http%3A//api.soundcloud.com/tracks/251711944&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
 'booty_chains':'<iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/265437778&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
 'ohh':'<iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/219011217&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
 'sneak_dissin':'<iframe width="100%" height="450" scrolling="no" frameborder="no" src="http://w.soundcloud.com/player/?url=http%3A//api.soundcloud.com/tracks/236732730&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
 'what_we_doin':'<iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/229796632&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
 'the_omen':'<iframe width="100%" height="450" scrolling="no" frameborder="no" src="http://w.soundcloud.com/player/?url=http%3A//api.soundcloud.com/tracks/218390548&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
 'too_much_dope':'<iframe width="100%" height="450" scrolling="no" frameborder="no" src="http://w.soundcloud.com/player/?url=http%3A//api.soundcloud.com/tracks/229022763&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
 'luh_da_feeling':'<iframe width="100%" height="450" scrolling="no" frameborder="no" src="http://w.soundcloud.com/player/?url=http%3A//api.soundcloud.com/tracks/205177656&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
 'freestyle_4_the_people':'<iframe width="100%" height="450" scrolling="no" frameborder="no" src="http://w.soundcloud.com/player/?url=http%3A//api.soundcloud.com/tracks/237005423&amp;auto_play=false&amp;hid  e_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
 '4tspoon':'<iframe width="100%" height="450" scrolling="no" frameborder="no" src="http://w.soundcloud.com/player/?url=http%3A//api.soundcloud.com/tracks/206482200&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
 'chill_freestyle':'<iframe width="100%" height="450" scrolling="no" frameborder="no" src="http://w.soundcloud.com/player/?url=http%3A//api.soundcloud.com/tracks/257276150&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
 'plug':'<iframe width="100%" height="450" scrolling="no" frameborder="no" src="http://w.soundcloud.com/player/?url=http%3A//api.soundcloud.com/tracks/233504170&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
 'of_course_we_ghetto_flowers':'<iframe width="100%" height="450" scrolling="no" frameborder="no" src="http://w.soundcloud.com/player/?url=http%3A//api.soundcloud.com/tracks/276233032&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
 'run_it':'<iframe width="100%" height="450" scrolling="no" frameborder="no" src="http://w.soundcloud.com/player/?url=http%3A//api.soundcloud.com/tracks/239122904&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
 'beef':'<iframe width="100%" height="450" scrolling="no" frameborder="no" src="http://w.soundcloud.com/player/?url=http%3A//api.soundcloud.com/tracks/223469533&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
 'what_remix':'<iframe width="100%" height="450" scrolling="no" frameborder="no" src="http://w.soundcloud.com/player/?url=http%3A//api.soundcloud.com/tracks/257544511&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
 'vlone_thug':'<iframe width="100%" height="450" scrolling="no" frameborder="no" src="http://w.soundcloud.com/player/?url=http%3A//api.soundcloud.com/tracks/252240529&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
 '3_chains':'<iframe width="100%" height="450" scrolling="no" frameborder="no" src="http://w.soundcloud.com/player/?url=http%3A//api.soundcloud.com/tracks/243438626&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
 'pump_fake':'<iframe width="100%" height="450" scrolling="no" frameborder="no" src="http://w.soundcloud.com/player/?url=http%3A//api.soundcloud.com/tracks/274770566&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
 'scorin':'<iframe width="100%" height="450" scrolling="no" frameborder="no" src="http://w.soundcloud.com/player/?url=http%3A//api.soundcloud.com/tracks/297306993&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
 '10kk':'<iframe width="100%" height="450" scrolling="no" frameborder="no" src="http://w.soundcloud.com/player/?url=http%3A//api.soundcloud.com/tracks/197904627&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
 'what':'<iframe width="100%" height="450" scrolling="no" frameborder="no" src="http://w.soundcloud.com/player/?url=http%3A//api.soundcloud.com/tracks/246551511&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
 'dallas':'<iframe width="100%" height="450" scrolling="no" frameborder="no" src="http://w.soundcloud.com/player/?url=http%3A//api.soundcloud.com/tracks/249750075&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
 'spike_lee':'<iframe width="100%" height="450" scrolling="no" frameborder="no" src="http://w.soundcloud.com/player/?url=http%3A//api.soundcloud.com/tracks/265088776&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
 'for_my_set':'<iframe width="100%" height="450" scrolling="no" frameborder="no" src="http://w.soundcloud.com/player/?url=http%3A//api.soundcloud.com/tracks/230360581&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
 'paper_chasin':'<iframe width="100%" height="450" scrolling="no" frameborder="no" src="http://w.soundcloud.com/player/?url=http%3A//api.soundcloud.com/tracks/221771809&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
 'telephone_calls':' <iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/290435593&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
 'no_pressure':'<iframe width="100%" height="450" scrolling="no" frameborder="no" src="http://w.soundcloud.com/player/?url=http%3A//api.soundcloud.com/tracks/265525235&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
 'geek_on_a_bitch':'<iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/285695585&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
 'with_the_fanta':'<iframe width="100%" height="450" scrolling="no" frameborder="no" src="http://w.soundcloud.com/player/?url=http%3A//api.soundcloud.com/tracks/240405799&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
 'i_know_u_know':'<iframe width="100%" height="450" scrolling="no" frameborder="no" src="http://w.soundcloud.com/player/?url=http%3A//api.soundcloud.com/tracks/163332526&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
 'come_here':'<iframe width="100%" height="450" scrolling="no" frameborder="no" src="http://w.soundcloud.com/player/?url=http%3A//api.soundcloud.com/tracks/212361702&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
 'fake_af':'<iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/213710934&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
 'tank':'<iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/271905877&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
 'booted_up':'<iframe width="100%" height="450" scrolling="no" frameborder="no" src="http://w.soundcloud.com/player/?url=http%3A//api.soundcloud.com/tracks/272547909&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
 'word_to_yams':'<iframe width="100%" height="450" scrolling="no" frameborder="no" src="http://w.soundcloud.com/player/?url=http%3A//api.soundcloud.com/tracks/291704433&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
 'action':'<iframe width="100%" height="450" scrolling="no" frameborder="no" src="http://w.soundcloud.com/player/?url=http%3A//api.soundcloud.com/tracks/268170767&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
 'outchea':'<iframe width="100%" height="450" scrolling="no" frameborder="no" src="http://w.soundcloud.com/player/?url=http%3A//api.soundcloud.com/tracks/222978977&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
 'blue_crystal':'<iframe width="100%" height="450" scrolling="no" frameborder="no" src="http://w.soundcloud.com/player/?url=http%3A//api.soundcloud.com/tracks/222965059&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
 'soul':'<iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/261675402&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
 'terror_shit':'<iframe width="100%" height="450" scrolling="no" frameborder="no" src="http://w.soundcloud.com/player/?url=http%3A//api.soundcloud.com/tracks/222494489&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
 'step':'<iframe width="100%" height="450" scrolling="no" frameborder="no" src="http://w.soundcloud.com/player/?url=http%3A//api.soundcloud.com/tracks/271340573&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
 'steez':'<iframe width="100%" height="450" scrolling="no" frameborder="no" src="http://w.soundcloud.com/player/?url=http%3A//api.soundcloud.com/tracks/221770357&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
 'lil_pill':'<iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/290969411&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
 'make_some_blow':'<iframe width="100%" height="450" scrolling="no" frameborder="no" src="http://w.soundcloud.com/player/?url=http%3A//api.soundcloud.com/tracks/281128547&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
 'cry':'<iframe width="100%" height="450" scrolling="no" frameborder="no" src="http://w.soundcloud.com/player/?url=http%3A//api.soundcloud.com/tracks/263892582&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
 'damn_shame':'<iframe width="100%" height="450" scrolling="no" frameborder="no" src="http://w.soundcloud.com/player/?url=http%3A//api.soundcloud.com/tracks/286481020&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
 'red_lean':'<iframe width="100%" height="450" scrolling="no" frameborder="no" src="http://w.soundcloud.com/player/?url=http%3A//api.soundcloud.com/tracks/294794504&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
 'carolina_blue':'<iframe width="100%" height="450" scrolling="no" frameborder="no" src="http://w.soundcloud.com/player/?url=http%3A//api.soundcloud.com/tracks/235144036&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
 'snow':'<iframe width="100%" height="450" scrolling="no" frameborder="no" src="http://w.soundcloud.com/player/?url=http%3A//api.soundcloud.com/tracks/239108639&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
 'club_pink':'<iframe width="100%" height="450" scrolling="no" frameborder="no" src="http://w.soundcloud.com/player/?url=http%3A//api.soundcloud.com/tracks/226738548&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
 'smash_2':'<iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/179721641&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
 'interlude':'<iframe width="100%" height="450" scrolling="no" frameborder="no" src="http://w.soundcloud.com/player/?url=http%3A//api.soundcloud.com/tracks/161727544&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
 '4_in_da_cup':'<iframe width="100%" height="450" scrolling="no" frameborder="no" src="http://w.soundcloud.com/player/?url=http%3A//api.soundcloud.com/tracks/264674780&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
 'faith':'<iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/261678287&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
 'foyb':'<iframe width="100%" height="450" scrolling="no" frameborder="no" src="http://w.soundcloud.com/player/?url=http%3A//api.soundcloud.com/tracks/295638001&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
 'mia':'<iframe width="100%" height="450" scrolling="no" frameborder="no" src="http://w.soundcloud.com/player/?url=http%3A//api.soundcloud.com/tracks/295868718&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
 'feel_this':'<iframe width="100%" height="450" scrolling="no" frameborder="no" src="http://w.soundcloud.com/player/?url=http%3A//api.soundcloud.com/tracks/290719389&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
 'straight_up':'<iframe width="100%" height="450" scrolling="no" frameborder="no" src="http://w.soundcloud.com/player/?url=http%3A//api.soundcloud.com/tracks/291069510&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
 'telly_and_tats':'<iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/315739101&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
 'minnesota_remix':'<iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/315338980&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
 'black_n_white':'<iframe width="100%" height="450" scrolling="no" frameborder="no" src="http://w.soundcloud.com/player/?url=http%3A//api.soundcloud.com/tracks/299545815&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
 '36_villanz':'<iframe width="100%" height="450" scrolling="no" frameborder="no" src="http://w.soundcloud.com/player/?url=http%3A//api.soundcloud.com/tracks/226738561&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
 'lost':'<iframe width="100%" height="450" scrolling="no" frameborder="no" src="http://w.soundcloud.com/player/?url=http%3A//api.soundcloud.com/tracks/161054830&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
 'dumb_hoe':'<iframe width="100%" height="450" scrolling="no" frameborder="no" src="http://w.soundcloud.com/player/?url=http%3A//api.soundcloud.com/tracks/272772142&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
 'hoe_come_fuck_this_money':'<iframe width="100%" height="450" scrolling="no" frameborder="no" src="http://w.soundcloud.com/player/?url=http%3A//api.soundcloud.com/tracks/296603058&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
 'money_bags':'<iframe width="100%" height="450" scrolling="no" frameborder="no" src="http://w.soundcloud.com/player/?url=http%3A//api.soundcloud.com/tracks/291448652&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
 'trip':'<iframe width="100%" height="450" scrolling="no" frameborder="no" src="http://w.soundcloud.com/player/?url=http%3A//api.soundcloud.com/tracks/293398027&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
 'tragic':'<iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/293844001&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
 'lemme_know':'<iframe width="100%" height="450" scrolling="no" frameborder="no" src="http://w.soundcloud.com/player/?url=http%3A//api.soundcloud.com/tracks/299818566&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe> ',
 'exotic':'<iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/299770692&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
 'another_day':'<iframe width="100%" height="450" scrolling="no" frameborder="no" src="http://w.soundcloud.com/player/?url=http%3A//api.soundcloud.com/tracks/300484615&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
 'smash_pt2':'<iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/179721641&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
 'these_hoes':'<iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/302449922&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
 'vango':'<iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/264005064&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
 'lil_boy':'<iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/307812370&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
 'zombies':'<iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/220287044&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
 'servin_swervin':'<iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/303632543&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
 'telly_lq':'<iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/308908981&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
 'faster':'<iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/310463094&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
 'southside_free':'<iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/311118475&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
 'pull_up':'<iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/318542085&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
 'raf':'<iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/322697091&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',  
'green_and_purple':'<iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/322834576&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>', 
'margiela_roof':'<iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/316258714&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
'new_bih':'<iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/335849472&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
'walk_inside_my_mansion':'<iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/317950184&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
'no_limit':'<iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/315334332&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
'ysl':'<iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/321983780&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
'styrofoam':'<iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/319803683&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
'sleeping_with_my_nine':'<iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/316758205&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
'magnolia':'<iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/317594712&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
'woke_up_like_this':'<iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/311653887&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
'lookin':'<iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/310475590&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
'butterfly_coupe':'<iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/335987180&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
'clouted_up':'<iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/335711935&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
'how_could_i_worry':'<iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/335810018&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
'in_my_car':'<iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/330113328&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
'motivated':'<iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/335809263&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
'wwtw':'<iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/335712773&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
'xxl_cypher':'<iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/332888418&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
};




/*At the same time the active class is added remove the the image and the title (ITS IN THE SOUNDCLOUD PLAYER) 
aka just include the soundcloud player. Obviously all the songs have different urls so I will store those urls 
in a static key object pair and each grid item has the song title as id*/
function addSoundCloudPlayer(currentItem){
		//var example = '<iframe class="player" width="100%" height="150px" scrolling="no" frameborder="no" src="http://w.soundcloud.com/player/?url=http%3A//api.soundcloud.com/tracks/273078901&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>';
		$(currentItem).append(example);
}


/* Change to toggleSoundCloudPlayer*/
function toggleSoundCloudPlayer(currentItem, currentItemContent){
    console.log(($(currentItem).attr('id')));
   var playerLink = soundCloudLinks[$(currentItem).attr('id')]
    console.log("Printing Player Linker for current song -->  " + playerLink);
		//Convert jquery object to node
		var container = $(currentItem).get(0);
		console.log(currentItem);
		console.log( 'Is there a player? --> ' +   $('.player').length );
		if( $('.player').length >  0){
				console.log('Removing soundcloud player');
				$(currentItem).remove("iframe");
		}else{
			console.log('Adding soundcloud player');
			$(currentItemContent).append(playerLink);
			
		}
}



function removeExpand(currentItem){
	console.log('Calling removeExapand'); 
	$(currentItem).toggleClass('expand');
}




 $(document).ready(function(){
 	 //appendImages(10);
    $('.grid-item').hover(function() {
    	if( !($(this).hasClass('expand')) ){
     	   $(this).addClass('grow');
    	}
    }, function() {
        $(this).removeClass('grow');
    });
    //Initialize
	var grid  = $('#grid').masonry({
		columnWidth:'.grid-sizer',
		itemSelector:'.grid-item',
		percentPosition:true
	});
    //adjustCoverHeight();
     grid.on( 'click', '.grid-item-content', function(){
     	//$('audio').get(0).play();
  		var itemContent = this;
  		var itemElem = itemContent.parentNode;
  		$(itemElem).removeClass('grow');
  		removeAllActive();
  		toggleSoundCloudPlayer(itemElem,itemContent);
  		//(itemContent);
  		setItemContentPixelSize( itemContent );
  		console.log('toggling expand class');
  		$( itemElem ).toggleClass('expand');	
  		// force redraw	
  		var redraw = itemContent.offsetWidth;
  		// renable default transition
  		itemContent.style[ transitionProp ] = '';
  		addTransitionListener( itemContent );
  		setItemContentTransitionSize( itemContent, itemElem );
  		grid.masonry();
	});
});

var docElem = document.documentElement;
var transitionProp = typeof docElem.style.transition == 'string' ?
    'transition' : 'WebkitTransition';
var transitionEndEvent = {
  WebkitTransition: 'webkitTransitionEnd',
  transition: 'transitionend'
}[ transitionProp ];

function setItemContentPixelSize( itemContent ) {
  var previousContentSize = getSize( itemContent );
  // disable transition
  itemContent.style[ transitionProp ] = 'none';
  // set current size in pixels
  itemContent.style.width = previousContentSize.width + 'px';
  itemContent.style.height = previousContentSize.height + 'px';
}

function addTransitionListener( itemContent ) {
  // reset 100%/100% sizing after transition end
  var onTransitionEnd = function() {
    itemContent.style.width = '';
    itemContent.style.height = '';
    itemContent.removeEventListener( transitionEndEvent, onTransitionEnd );
  };
  itemContent.addEventListener( transitionEndEvent, onTransitionEnd );
}

function setItemContentTransitionSize( itemContent, itemElem ) {
  // set new size
  var size = getSize( itemElem );
  itemContent.style.width = size.width + 'px';
  itemContent.style.height = size.height + 'px';
}




/*If class is already active do not remove the active because the toggleClass will already do that	 */
/* Also remove the soundCloud player and make the image and span display visible*/
function removeAllActive(){
	console.log("Calling remove all active");
	$.each($('.grid-item'), function(index, val){
	//if( ($(this).hasClass('expand')) ){
		//	console.log('Current item has expand class');
		//}else{
			/* Remove soundcloud player and make all other opened songs close */
			$('iframe').remove();
			$(this).removeClass('expand');
		});
}

/*Same image for now, but later accept array with img path + get number from array */
function appendImages(nubmerImages){
		console.log("Calling append images!" + nubmerImages);
		for(var i=0;i<nubmerImages;i++){
			var div = $('<div><div class="grid-item-content"> <img class="img-fluid" src='+ '../images/carti_gun1.jpg' + '>'+ 
				'</div></div>');
			div.addClass('grid-item');
			console.log(div);
			$('#grid').append(div);
		}
}




// function adjustCoverHeight(){
//   //var totalWidth = $( window ).width();
//   var gridItemWidth = $('.grid-item').width();
//   /* Set height equal to width*/
//    $('.grid-item').height(gridItemWidth +'px');
//   var gridItemHeight = $('.grid-item').height();
//   console.log('Adjusted height of Covers' + ' width: ' + gridItemWidth + ' height: ' + gridItemHeight);
// }



/* Images loaded not in masonry, but needed*/
$('#grid').imagesLoaded().progress( function() {
  		$('#grid').masonry();
	}); 




