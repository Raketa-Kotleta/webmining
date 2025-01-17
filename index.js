
const url = '.';
const selector = '.left-menu-container'
function insertLeftMenu(){
	let leftmenu = document.querySelector(selector)
	let id = document.body.id;
	leftmenu.innerHTML = `
	<div class="left-menu-content">
					<div class="left-menu-avatar"></div>
					<span class="left-menu-username">Яценко Дмитрий Павлович</span>
					<div class="eng-version">
						<a class="">
							<img src="https://t4.ftcdn.net/jpg/00/73/96/03/360_F_73960308_QF7KzcFIFHFb3HuPMYFIPI25d6m4cCHt.jpg"/>
						</a>
					</div>
					<div class="left-menu-links">
						<ul>
							<li><a href="${url}/index.html">Резюме</a></li>
							<li><a href="${url}/bio.html">Биография</a></li>
							<li><a href="${url}/referat.html">Реферат</a></li>
							<li><a href="${url}/lib.html">Библиотека</a></li>
							<li><a href="${url}/links.html">Ссылки</a></li>
							<li><a href="${url}/mining.html">Отчет о поиске</a></li>
							<li><a href="${url}/own.html">Индивидуальный раздел</a></li>
							<li><a href="${url}/eumk.html">ЭУМК</a></li>
						</ul>
					</div>
				</div>
	`
	const ul = document.querySelector(selector + ' ul');
	ul.children[id-1].classList.add('active');
}

function insertAnotherLangPageLink(){
	let id = document.body.id;
	const ul = document.querySelector(selector + ' ul');
	const a = ul.children[id-1].querySelector('a');
	const pagename = a.href.split('/').at(-1).split('.')[0];
	const engPagename = pagename + '_en.html';
	document.body.querySelector('.eng-version a').href = `${url}/${engPagename}`
}

insertLeftMenu();
insertAnotherLangPageLink();
insertAnotherLangPageLink();