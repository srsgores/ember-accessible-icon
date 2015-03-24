/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-arrow-drop-down': '&#xe600;',
		'icon-arrow-drop-up': '&#xe601;',
		'icon-expand-less': '&#xe602;',
		'icon-expand-more': '&#xe603;',
		'icon-more-horiz': '&#xe604;',
		'icon-more-vert': '&#xe605;',
		'icon-unfold-less': '&#xe606;',
		'icon-unfold-more': '&#xe607;',
		'icon-layout': '&#xe608;',
		'icon-layout2': '&#xe609;',
		'icon-layout3': '&#xe60a;',
		'icon-layout4': '&#xe60b;',
		'icon-layout5': '&#xe60c;',
		'icon-layout6': '&#xe60d;',
		'icon-layout7': '&#xe60e;',
		'icon-layout8': '&#xe60f;',
		'icon-layout9': '&#xe610;',
		'icon-layout10': '&#xe611;',
		'icon-layout11': '&#xe612;',
		'icon-layout12': '&#xe613;',
		'icon-layout13': '&#xe614;',
		'icon-layout14': '&#xe615;',
		'icon-stats': '&#xe616;',
		'icon-stats2': '&#xe617;',
		'icon-envelope': '&#xe618;',
		'icon-envelope2': '&#xe619;',
		'icon-home': '&#xe900;',
		'icon-home2': '&#xe901;',
		'icon-home3': '&#xe902;',
		'icon-office': '&#xe903;',
		'icon-newspaper': '&#xe904;',
		'icon-pencil': '&#xe905;',
		'icon-blog': '&#xe909;',
		'icon-paint-format': '&#xe90c;',
		'icon-image': '&#xe90d;',
		'icon-images': '&#xe90e;',
		'icon-camera': '&#xe90f;',
		'icon-headphones': '&#xe910;',
		'icon-music': '&#xe911;',
		'icon-play': '&#xe912;',
		'icon-film': '&#xe913;',
		'icon-bullhorn': '&#xe91a;',
		'icon-connection': '&#xe91b;',
		'icon-mic': '&#xe91e;',
		'icon-book': '&#xe91f;',
		'icon-books': '&#xe920;',
		'icon-library': '&#xe921;',
		'icon-file-text': '&#xe922;',
		'icon-profile': '&#xe923;',
		'icon-file-text2': '&#xe926;',
		'icon-file-picture': '&#xe927;',
		'icon-file-music': '&#xe928;',
		'icon-file-play': '&#xe929;',
		'icon-file-video': '&#xe92a;',
		'icon-file-zip': '&#xe92b;',
		'icon-copy': '&#xe92c;',
		'icon-paste': '&#xe92d;',
		'icon-stack': '&#xe92e;',
		'icon-folder': '&#xe92f;',
		'icon-folder-open': '&#xe930;',
		'icon-folder-plus': '&#xe931;',
		'icon-folder-minus': '&#xe932;',
		'icon-folder-download': '&#xe933;',
		'icon-folder-upload': '&#xe934;',
		'icon-price-tag': '&#xe935;',
		'icon-price-tags': '&#xe936;',
		'icon-coin-dollar': '&#xe93b;',
		'icon-calculator': '&#xe940;',
		'icon-lifebuoy': '&#xe941;',
		'icon-phone': '&#xe942;',
		'icon-phone-hang-up': '&#xe943;',
		'icon-address-book': '&#xe944;',
		'icon-envelop': '&#xe945;',
		'icon-pushpin': '&#xe946;',
		'icon-location': '&#xe947;',
		'icon-compass': '&#xe949;',
		'icon-map': '&#xe94b;',
		'icon-history': '&#xe94d;',
		'icon-clock': '&#xe94e;',
		'icon-clock2': '&#xe94f;',
		'icon-alarm': '&#xe950;',
		'icon-bell': '&#xe951;',
		'icon-calendar': '&#xe953;',
		'icon-printer': '&#xe954;',
		'icon-keyboard': '&#xe955;',
		'icon-display': '&#xe956;',
		'icon-mobile': '&#xe958;',
		'icon-drawer': '&#xe95c;',
		'icon-drawer2': '&#xe95d;',
		'icon-box-add': '&#xe95e;',
		'icon-box-remove': '&#xe95f;',
		'icon-download': '&#xe960;',
		'icon-upload': '&#xe961;',
		'icon-floppy-disk': '&#xe962;',
		'icon-database': '&#xe964;',
		'icon-undo': '&#xe965;',
		'icon-redo': '&#xe966;',
		'icon-undo2': '&#xe967;',
		'icon-redo2': '&#xe968;',
		'icon-forward': '&#xe969;',
		'icon-reply': '&#xe96a;',
		'icon-bubble': '&#xe96b;',
		'icon-bubbles': '&#xe96c;',
		'icon-bubbles2': '&#xe96d;',
		'icon-bubble2': '&#xe96e;',
		'icon-user': '&#xe971;',
		'icon-users': '&#xe972;',
		'icon-user-plus': '&#xe973;',
		'icon-user-minus': '&#xe974;',
		'icon-user-check': '&#xe975;',
		'icon-user-tie': '&#xe976;',
		'icon-spinner': '&#xe97a;',
		'icon-binoculars': '&#xe985;',
		'icon-search': '&#xe986;',
		'icon-enlarge': '&#xe989;',
		'icon-shrink': '&#xe98a;',
		'icon-key': '&#xe98d;',
		'icon-lock': '&#xe98f;',
		'icon-unlocked': '&#xe990;',
		'icon-wrench': '&#xe991;',
		'icon-equalizer': '&#xe992;',
		'icon-equalizer2': '&#xe993;',
		'icon-cog': '&#xe994;',
		'icon-cogs': '&#xe995;',
		'icon-aid-kit': '&#xe998;',
		'icon-bug': '&#xe999;',
		'icon-pie-chart': '&#xe99a;',
		'icon-stats-dots': '&#xe99b;',
		'icon-stats-bars': '&#xe99c;',
		'icon-stats-bars2': '&#xe99d;',
		'icon-trophy': '&#xe99e;',
		'icon-gift': '&#xe99f;',
		'icon-glass': '&#xe9a0;',
		'icon-mug': '&#xe9a2;',
		'icon-spoon-knife': '&#xe9a3;',
		'icon-leaf': '&#xe9a4;',
		'icon-rocket': '&#xe9a5;',
		'icon-meter': '&#xe9a6;',
		'icon-hammer2': '&#xe9a8;',
		'icon-fire': '&#xe9a9;',
		'icon-bin2': '&#xe9ad;',
		'icon-briefcase': '&#xe9ae;',
		'icon-airplane': '&#xe9af;',
		'icon-truck': '&#xe9b0;',
		'icon-road': '&#xe9b1;',
		'icon-accessibility': '&#xe9b2;',
		'icon-target': '&#xe9b3;',
		'icon-shield': '&#xe9b4;',
		'icon-power': '&#xe9b5;',
		'icon-switch': '&#xe9b6;',
		'icon-power-cord': '&#xe9b7;',
		'icon-clipboard': '&#xe9b8;',
		'icon-list-numbered': '&#xe9b9;',
		'icon-list': '&#xe9ba;',
		'icon-list2': '&#xe9bb;',
		'icon-tree': '&#xe9bc;',
		'icon-menu': '&#xe9bd;',
		'icon-menu2': '&#xe9be;',
		'icon-menu3': '&#xe9bf;',
		'icon-menu4': '&#xe9c0;',
		'icon-cloud': '&#xe9c1;',
		'icon-cloud-download': '&#xe9c2;',
		'icon-cloud-upload': '&#xe9c3;',
		'icon-cloud-check': '&#xe9c4;',
		'icon-download3': '&#xe9c7;',
		'icon-upload3': '&#xe9c8;',
		'icon-sphere': '&#xe9c9;',
		'icon-earth': '&#xe9ca;',
		'icon-link': '&#xe9cb;',
		'icon-flag': '&#xe9cc;',
		'icon-attachment': '&#xe9cd;',
		'icon-eye': '&#xe9ce;',
		'icon-eye-plus': '&#xe9cf;',
		'icon-eye-minus': '&#xe9d0;',
		'icon-eye-blocked': '&#xe9d1;',
		'icon-bookmark': '&#xe9d2;',
		'icon-bookmarks': '&#xe9d3;',
		'icon-sun': '&#xe9d4;',
		'icon-star-empty': '&#xe9d7;',
		'icon-star-full': '&#xe9d9;',
		'icon-heart': '&#xe9da;',
		'icon-heart-broken': '&#xe9db;',
		'icon-man': '&#xe9dc;',
		'icon-woman': '&#xe9dd;',
		'icon-warning': '&#xea07;',
		'icon-notification': '&#xea08;',
		'icon-question': '&#xea09;',
		'icon-plus': '&#xea0a;',
		'icon-minus': '&#xea0b;',
		'icon-info': '&#xea0c;',
		'icon-cancel-circle': '&#xea0d;',
		'icon-blocked': '&#xea0e;',
		'icon-cross': '&#xea0f;',
		'icon-checkmark': '&#xea10;',
		'icon-checkmark2': '&#xea11;',
		'icon-enter': '&#xea13;',
		'icon-exit': '&#xea14;',
		'icon-loop': '&#xea2d;',
		'icon-loop2': '&#xea2e;',
		'icon-infinite': '&#xea2f;',
		'icon-shuffle': '&#xea30;',
		'icon-tab': '&#xea45;',
		'icon-move-up': '&#xea46;',
		'icon-move-down': '&#xea47;',
		'icon-sort-alpha-asc': '&#xea48;',
		'icon-sort-alpha-desc': '&#xea49;',
		'icon-sort-numeric-asc': '&#xea4a;',
		'icon-sort-numberic-desc': '&#xea4b;',
		'icon-sort-amount-asc': '&#xea4c;',
		'icon-sort-amount-desc': '&#xea4d;',
		'icon-filter': '&#xea5b;',
		'icon-page-break': '&#xea68;',
		'icon-pagebreak': '&#xea6e;',
		'icon-table': '&#xea70;',
		'icon-table2': '&#xea71;',
		'icon-insert-template': '&#xea72;',
		'icon-share': '&#xea7d;',
		'icon-terminal': '&#xea81;',
		'icon-mail4': '&#xea86;',
		'icon-google': '&#xea87;',
		'icon-google-plus': '&#xea88;',
		'icon-facebook2': '&#xea8d;',
		'icon-twitter': '&#xea91;',
		'icon-youtube3': '&#xea99;',
		'icon-vimeo': '&#xea9c;',
		'icon-flickr2': '&#xeaa1;',
		'icon-dropbox': '&#xeaaf;',
		'icon-onedrive': '&#xeab0;',
		'icon-github2': '&#xeab2;',
		'icon-github4': '&#xeab4;',
		'icon-wordpress': '&#xeab6;',
		'icon-apple': '&#xeabf;',
		'icon-android': '&#xeac1;',
		'icon-windows': '&#xeac2;',
		'icon-soundcloud': '&#xeac4;',
		'icon-linkedin2': '&#xeac9;',
		'icon-file-pdf': '&#xeada;',
		'icon-file-openoffice': '&#xeadb;',
		'icon-file-word': '&#xeadc;',
		'icon-file-excel': '&#xeadd;',
		'icon-libreoffice': '&#xeade;',
		'icon-chrome': '&#xeae5;',
		'icon-firefox': '&#xeae6;',
		'icon-IE': '&#xeae7;',
		'icon-opera': '&#xeae8;',
		'icon-safari': '&#xeae9;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());