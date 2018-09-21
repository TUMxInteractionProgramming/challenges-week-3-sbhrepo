/*console.log('app is alive');*/

function switchChannel(channelName) {
    "use strict";
    console.log('Tuning into channel' + channelName);
    document.getElementById('chat-channel-name').innerHTML = channelName + ' <small>by <a style="color: white"; href="http://w3w.co/upgrading.never.helps" target="_blank"><strong>upgrading.never.helps</strong></a></small><img id="star-image" onclick="toggleStar();" src="http://ip.lfe.mw.tum.de/sections/star-o.png" alt="starred">';
}

function toggleStar() {
    "use strict";
    console.log('Toggle star empty/full');
    if ($('#star-image').attr('src').indexOf("star-o.png") > -1)
        $('#star-image').attr('src','http://ip.lfe.mw.tum.de/sections/star.png');
    else
        $('#star-image').attr('src','http://ip.lfe.mw.tum.de/sections/star-o.png');
}

function unselectAll() {
    "use strict";
    console.log('unselect all');
    $('#new-button').css('color', 'black');
    $('#new-button').css('border-bottom', '0px solid black');
    $('#trending-button').css('color', 'black');
    $('#trending-button').css('border-bottom', '0px solid black');
    $('#favorites-button').css('color', 'black');
    $('#favorites-button').css('border-bottom', '0px solid black');
}

function selectTab(tabId) {
    "use strict";
    console.log('Changing to tab');
    unselectAll();
    $(tabId).css('color', '#3F51B5');
    $(tabId).css('border-bottom', '4px solid #3F51B5');

}

function toggleEmojisBox() {
    "use strict";
    console.log('Toggle emojis box');
    if ($('#emojis-box').css('visibility').match('hidden'))
        $('#emojis-box').css('visibility','visible');
    else
        $('#emojis-box').css('visibility','hidden');
}