const cheerio = require('cheerio');

const requests = require('request-promise');

requests('https://123job.vn/tuyen-dung', (error, response, html) => {
	// gửi request đến trang
	console.log(response.statusCode); // 200, kiểm tra xem kết nối thành công không :D
	if (!error && response.statusCode == 200) {
		const $ = cheerio.load(html); // load HTML

		$('.job__list-item').each((index, el) => {
			// lặp từng phần tử có class là job__list-item
			const job = $(el).find('.job__list-item-title a').text(); // lấy tên job, được nằm trong thẻ a < .job__list-item-title
			const company = $(el).find('.job__list-item-company span').text();
			const address = $(el)
				.find('.job__list-item-info')
				.find('.address')
				.text();
			const salary = $(el).find('.job__list-item-info').find('.salary').text();

			console.log(job + ' | ', company + ' | ', address + ' | ', salary);
			console.log('------------');
		});
	} else {
		console.log(error);
	}
});
