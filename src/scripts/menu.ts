(document.querySelector('.hamburger') as HTMLElement | null)?.addEventListener('click',() => {
	(document.querySelector('.nav-links') as HTMLElement | null)?.classList.toggle('expanded')
})