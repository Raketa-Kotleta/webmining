
const url = '.';
const selector = '.left-menu-container';
function insertLeftMenu(){
	let leftmenu = document.querySelector(selector)
	let id = document.body.id;
	leftmenu.innerHTML = `
	<div class="left-menu-content">
					<div class="left-menu-avatar"></div>
					<span class="left-menu-username">Yatsenko Dmitry Pavlovich</span>
					<div class="eng-version">
						<a class="">
							<img src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/640px-Flag_of_Russia.svg.png"/>
						</a>
					</div>
					<div class="left-menu-links">
						<ul>
							<li><a href="${url}/index_en.html">Resume</a></li>
							<li><a href="${url}/bio_en.html">Biography</a></li>
							<li><a href="${url}/referat_en.html">Abstract</a></li>
							<li><a href="${url}/lib_en.html">Library</a></li>
							<li><a href="${url}/links_en.html">Links</a></li>
							<li><a href="${url}/mining_en.html">Search report</a></li>
							<li><a href="${url}/own_en.html">Individual section</a></li>
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
	const ruPagename = pagename.replace('_en', '') + '.html';
	document.body.querySelector('.eng-version a').href = `${url}/${ruPagename}`
}
insertLeftMenu();

insertAnotherLangPageLink();