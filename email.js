'use strict';

document.addEventListener('DOMContentLoaded', function ()
{
	document.querySelectorAll('.email').forEach(function (a)
	{
		const address = a.getAttribute('href')
			.replace('say', 'con')
			.replace('-hi-', 'tact@orderly')
			.replace('of/', 'forest!com')
			.replaceAll('!', '.');

		a.setAttribute('href', 'mailto:' + address);
		a.textContent = address;
	});
});
