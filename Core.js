var features = [];

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

    features = getFeatures($);
    for (var i = 0; i < features.length; i++) {
        if (features[i] == "responsive") {
            $('head').append('<link rel="stylesheet" href="https://raw.githubusercontent.com/sole-sohail/Pak-E-Services-Scripts/master/Responsive.css" type="text/css" />');
        }
        else if (features[i] == "removeads") {
            removeAds();
        }
    }
}));














function getFeatures($) {
    return $("#pak_e_services_script").attr('features').split(',');
}
function removeAds() {
    var adsElements = [
        'ins',
        'iframe',
        '#st-2',
        '#st-cmp-v2',
        '[class*=-ad]',
    ];

    setInterval(function () {
        for (var i = 0; i < adsElements.length; i++) {
            if (isElementExists($(adsElements[i]))) {
                try {
                    if (adsElements[i].indexOf("class*=-ad") < 0) {
                        $(adsElements[i]).next(":first").remove(), $(adsElements[i]).remove();
                    }
                    else {
                        $(adsElements[i]).remove();
                    }
                } catch (e) {

                }
            }
        }

    }, 1e3);
}