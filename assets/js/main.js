/*
	Urban by TEMPLATED
	templated.co @templatedco
	Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
*/

(function($) {

    skel.breakpoints({
        xlarge: '(max-width: 1680px)',
        large: '(max-width: 1280px)',
        medium: '(max-width: 980px)',
        small: '(max-width: 736px)',
        xsmall: '(max-width: 480px)'
    });

    $(function() {

        var $window = $(window),
            $body = $('body'),
            $header = $('#header'),
            $banner = $('#banner');

        // Disable animations/transitions until the page has loaded.
        $body.addClass('is-loading');

        $window.on('load', function() {
            window.setTimeout(function() {
                $body.removeClass('is-loading');
            }, 100);
        });

        // Banner.
        var $banner = $('#banner');

        if ($banner.length > 0) {

            // IE fix.
            if (skel.vars.IEVersion < 12) {

                $window.on('resize', function() {

                    var wh = $window.height() * 0.60,
                        bh = $banner.height();

                    $banner.css('height', 'auto');

                    window.setTimeout(function() {

                        if (bh < wh)
                            $banner.css('height', wh + 'px');

                    }, 0);

                });

                $window.on('load', function() {
                    $window.triggerHandler('resize');
                });

            }
        }

        // Tabs.
        $('.flex-tabs').each(function() {

            var t = jQuery(this),
                tab = t.find('.tab-list li a'),
                tabs = t.find('.tab');

            tab.click(function(e) {

                var x = jQuery(this),
                    y = x.data('tab');

                // Set Classes on Tabs
                tab.removeClass('active');
                x.addClass('active');

                // Show/Hide Tab Content
                tabs.removeClass('active');
                t.find('.' + y).addClass('active');

                e.preventDefault();

            });

        });

        // Scrolly.
        $('.scrolly').scrolly({
            offset: function() {
                return $header.height() - 2;
            }
        });


        particlesJS.load('banner', 'assets/particlesjs-config.json', function() {
            let el = document.querySelector(".particles-js-canvas-el");
            el.setAttribute("height", "800px");
        });
    });

})(jQuery);