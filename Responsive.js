

(function (url, position, callback) {
    url = url || 'https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js';
    position = position || 0;
    if (!window.jQuery) {
        var head = document.getElementsByTagName('head')[0];
        var script = document.createElement("script");
        script.src = url;
        script.type = 'text/javascript';
        head.appendChild(script);
        head.insertBefore(script, head.childNodes[position]);
        script.onload = function () {
            if (typeof callback == 'function') {
                callback(jQuery);
            }
        };
    } else {
        if (typeof callback == 'function') {
            callback(jQuery);
        }
    }
}(function ($) {
    $('head').append('<link rel="stylesheet" href="style2.css" type="text/css" />');
}));