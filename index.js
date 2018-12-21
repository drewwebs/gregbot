const SlackBot = require('slackbots');
const axios = require('axios');

const bot = new SlackBot({
	token: 'xoxb-423524192886-508499241890-0K23c1KEssb64NfrH5Asi2rq',
	name: 'gregbot'
});

// Start Handler
bot.on('start', () => {
	const params = {
		icon_emoji: ':logo:'
	}
	
	bot.postMessageToChannel('dev-botspam', 'Ask Me How To Make Stuff!', params);
});

// Error Handler
bot.on('error', err => console.log(err));

// Message Handler
bot.on('message', (data) => {
	if(data.type !== 'message' || data.subtype === 'bot_message') {
		return;
	}
	var lowercaseText = data.text.toLowerCase();
	handleMessage(lowercaseText);
});

// Respond to Data
function handleMessage(message) {
	if(message.includes('recipe'))		{
		const params = {
		icon_emoji: ':logo:'
	}
	if(message.includes('matcha'))	{
		bot.postMessageToChannel('dev-botspam', 'Here is the recipe for matcha: \n' + matchaRecipe, params);
		
	}
	if(message.includes('nu brew'))	{
		bot.postMessageToChannel('dev-botspam', 'Here is there recipe for nu brew! \n' + nubrewRecipe, params)
	}
}
}

// Matcha Recipe
var matchaRecipe = 
		`\`\`\`12oz: 5g of matcha (using the large end of matcha spoon), 3oz hot water
		
16oz: 7g of matcha (using the large end of matcha spoon), 4oz hot water
	
20oz: 9g of matcha (using the large end of matcha spoon), 5oz hot water\`\`\``
		

// Nu Brew Recipe
var nubrewRecipe = 
	`\`\`\`1\) Combine in blender: 24oz Cold Brew, 8oz Half & Half, 4oz Nutella. 
	
2\) Blend
	
3\) Finish by diluting with another 22oz Cold Brew\`\`\`

Or, for hotshots....

\`\`\`1\) Combine in blender: 12oz Half & Half, 12oz cold water & 3 yellow scoops of Nutella

2\) Blend!\`\`\``