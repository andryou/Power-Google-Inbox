chrome.extension.sendRequest({reqtype: "get-settings"}, function(response) {
	if (response.dock == 'true' || response.compact == 'true' || response.compactnav == 'true' || response.hidebody == 'true' || response.bundlebg == 'true' || response.largercompose == 'true') {
		var css = document.createElement('style');
		css.type = 'text/css';
		css.id = 'ayinboxcss';
		var styles = '';
		if (response.compactnav == 'true') {
			styles += '.lQ { /* left nav ul */ line-height: 25px !important; } ';
			styles += '.cQ, .cN { /* left nav li */ padding-top: 0 !important; padding-bottom: 0 !important; } ';
			styles += '.f0, .B0 { /* settings label list */ line-height: 28px !important; } ';
			styles += '.rA, .cC, .i5 .Jz { /* settings label list icons */ margin-top: 0px !important; } ';
			styles += '.gN, .io { /* menu list icons */ margin-top: 0px !important; } ';
		}
		if (response.compact == 'true') {
			/* standard email list */
			styles += '.section-header { /* message list date */ line-height: 1 !important; } ';
			styles += '.jS { /* email listing */ margin: 0px !important; } ';
			styles += '.g-aq.b0 { /* email options */ padding: 2px 24px !important; } ';
			/* read email */
			styles += '.bJ { /* read message title */ padding: 10px 20px !important; } ';
			styles += '.ol { /* read message sender avatar */ margin: 13px 20px !important; } ';
			styles += '.pF { /* read message body top */ padding: 10px 20px 0 !important; margin-bottom:: 0px !important; } ';
			styles += '.he { /* read message body bottom */ margin: 0 20px 10px 80px !important; } ';
			styles += '.bc { /* quick reply box */ padding: 10px 20px !important; } ';
			/* bundles */
			styles += '.rk { /* bundle options sub */ padding: 10px 0px !important; } ';
		}
		if (response.hidebody == 'true') {
			styles += '.jS.kl, .jS .o6.aI, .rv .aI { /* message preview */ display: none !important; } ';
		}
		if (response.hidereminder == 'true') {
			styles += '.jS .tu { /* message add reminder */ display: none !important; } ';
		}
		if (response.bundlebg == 'true') {
			styles += '.an.aT { /* background-color */ background: #ffc; } ';
		}
		if (response.largercompose == 'true') {
			styles += '.k { /* larger compose window */ width: 700px !important; } @media (min-height:516px) { .aR { min-height: 155px; } } @media (min-height:596px) { .aR { min-height: 270px; } } @media (min-height:650px) { .aR { min-height: 400px; } }';
			
		}
		css.appendChild(document.createTextNode(styles));
		document.getElementsByTagName("html")[0].appendChild(css);
	}	
});