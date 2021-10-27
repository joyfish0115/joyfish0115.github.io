$(document).ready(function() {
	$('#fullpage').fullpage({
		//options here
        anchors:['firstPage', 'secondPage', 'thirdPage', 'fourthPage'],
        menu: '#js-Menu',
        autoScrolling:false,
        fitToSection:false
	});

    $('.dropdown-toggle').hover(
        function() {
          $menu.css('opacity',1);
        },
        function() {
          $menu.css('opacity',0);
        });
});