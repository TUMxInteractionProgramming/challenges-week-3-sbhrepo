/*console.log('app is alive');*/

function switchChannel(channelName) {
    console.log('Tuning into channel' + channelName);
    return document.getElementById('chat-channel-name').innerHTML = channelName + ' <small>by <a style="color: white"; href="http://w3w.co/upgrading.never.helps" target="_blank"><strong>upgrading.never.helps</strong></a></small><img id="star-image" onclick="toggleStar();" src="http://ip.lfe.mw.tum.de/sections/star-o.png" alt="starred">';
}

function toggleStar() {
    console.log('Toggle star empty/full');
    if ($('#star-image').attr('src').indexOf("star-o.png") > -1)
        return $('#star-image').attr('src','http://ip.lfe.mw.tum.de/sections/star.png');
    else
        return $('#star-image').attr('src','http://ip.lfe.mw.tum.de/sections/star-o.png');
}

function unselectAll() {
    console.log('unselect all');
    $('#new-button').css('color', 'black');
    $('#new-button').css('border-bottom', '0px solid black');
    $('#trending-button').css('color', 'black');
    $('#trending-button').css('border-bottom', '0px solid black');
    $('#favorites-button').css('color', 'black');
    $('#favorites-button').css('border-bottom', '0px solid black');
}

function selectTab(tabId) {
    console.log('Changing to tab');
    unselectAll();
    $(tabId).css('color', '#3F51B5');
    $(tabId).css('border-bottom', '4px solid #3F51B5');

}

function toggleEmojisBox() {
    console.log('Toggle emojis box');
    if ($('#emojis-box').css('visibility').match('hidden'))
        $('#emojis-box').css('visibility','visible');
    else
        $('#emojis-box').css('visibility','hidden');
}