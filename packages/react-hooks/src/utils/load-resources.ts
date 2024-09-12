export const loadStyles = (style: string | string[], ...sts: string[]) => {
	const styles = typeof style === 'string' ? [style, ...sts] : [...style, ...sts];

	return Promise.all(
		styles.map(sty => {
			return new Promise<HTMLLinkElement>((resole, reject) => {
				const link = document.createElement('link');
				link.rel = "stylesheet";
				link.type = "text/css";
				link.href = sty;
	
				link.onload = () => resole(link);
				link.onerror = (err) => reject(err);
	
				document.head.appendChild(link);
			})
		})
	)
}
