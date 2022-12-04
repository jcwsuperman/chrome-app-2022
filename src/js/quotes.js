const quotes = [
	{
		quote:
			"애국자는 항상 조국을 위해 죽겟다고 하지만 조국을 위해 누군가를 죽이는건 말하지 않는다.",
		author: "Bertrand Arthur William Russell",
	},
	{
		quote:
			"전쟁에선 어느 편이 스스로를 승자라고 부를지라도 승리자는 없고 모두 패배자뿐이다.",
		author: "Arthur Neville Chamberlain",
	},
	{
		quote: "삶이 있는 한 희망은 있다.",
		author: "Marcus Tullius Cicero",
	},
	{
		quote:
			"자기가 틀렸다는 사실을 인정하기란 어렵다. 특히나 무척 오랫동안 틀린 채로 살아왔을 때는.",
		author: "Fredrik Backman",
	},
	{
		quote: "열 길 물속은 알아도 한 길 사람 속은 모른다.",
		author: "속담",
	},
	{
		quote: "달도 차면 기운다.",
		author: "속담",
	},
	{
		quote: "구더기 무서워 장 못 담글까.",
		author: "속담",
	},
	{
		quote:
			"우리가 듣는 모든 것들은 의견이지, 사실이 아니다. 그리고 우리가 보는 모든 것들은 우리의 눈이 인지한 것이지, 진실이 아니다.",
		author: "Marcus Aurelius Antoninus",
	},
	{
		quote: "화에 대한 최선의 대답은 침묵이다.",
		author: "Marcus Aurelius Antoninus",
	},
	{
		quote:
			"삶의 아름다움 속에 머물러라. 하늘의 별을 보고 그들과 함께 흘러가고 있는 당신을 봐라.",
		author: "Marcus Aurelius Antoninus",
	},
];
const quoteBox = document.querySelector(".quote-box");
const quote = quoteBox.querySelector("span:first-child");
const author = quoteBox.querySelector("span:last-child");

deleteHidden(quoteBox);

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = `-${todaysQuote.author}-`;
