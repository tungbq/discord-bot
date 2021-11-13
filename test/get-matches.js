const cheerio = require('cheerio');

const requests = require('request-promise');

const lichThiDauUrl =
	'https://www.24h.com.vn/bong-da/lich-thi-dau-bong-da-hom-nay-moi-nhat-c48a364371.html';
// const lichThiDauUrl =
// 	'https://www.24h.com.vn/bong-da/lich-thi-dau-bong-da-hom-nay-moi-nhat-c48a364371.html?livescore_tab_date=2021-11-13';

const getMatches = () => {
	let matches = 'Not found';
	requests(lichThiDauUrl, (error, response, html) => {
		// Check status code.
		console.log(`Response code: ${response.statusCode}`);

		// Take actions.
		if (!error && response.statusCode == 200) {
			const $ = cheerio.load(html);

			$('.schedule_today').find('.cate-24h-foot-home-sche-content__list')
				.find('li')
				.each((index, el) => {
					const time = $(el)
						.find('.cate-24h-foot-home-sche-content__time strong')
						.text();

					const leftTeam = $(el)
						.find('.cate-24h-foot-home-sche-content__match--left span')
						.text();

					const rightTeam = $(el)
						.find('.cate-24h-foot-home-sche-content__match--right span')
						.text();

					const leftScore = $(el)
						.find('.cate-24h-foot-home-sche-content__match-score')
						.find('.match-fs_a a')
						.text();
					const rightScore = $(el)
						.find('.cate-24h-foot-home-sche-content__match-score')
						.find('.match-fs_b a')
						.text();
					const channel = $(el)
						.find('.cate-24h-foot-home-sche-content__chanel p')
						.text();

					matches = `${time} >> ${leftTeam} [${leftScore}]|[${rightScore}] ${rightTeam}`;
					if (channel) {
						matches += ` >> ${channel}`;
					}
					console.log(matches);
				});
		} else {
			console.log(error);
		}
	});
	return matches;
};

getMatches();

module.exports = {
	getMatches,
};
