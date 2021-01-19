var links = document.querySelectorAll('nav ul li a');
var content = document.querySelectorAll('div.content');
var border = document.querySelector('span');
var lis = document.querySelectorAll('navLink');

for (let i = 0; i < links.length; i++){
	links[i].addEventListener('click', function(e){
    e.preventDefault();
		var activLinks = document.querySelector('navLink.activ');
		var activContent = document.querySelector('section>div.activ');

		activLinks.classList.remove('activ');
		activContent.classList.remove('activ');

		this.classList.add('activ');
		var attr = this.getAttribute('href');

		var activ = document.querySelector(attr);

		activ.classList.add('activ');

        var lisLength = lis.length;
        var lisWidth = 100 / lisLength;
        var position = i*lisWidth;
        border.style.left = position + '%';

	});
}