<script lang="ts">
	const quotes = [
		{
			q: 'In the world of digital currencies, the social network around open source projects has become a critical test bed for ideas, products, services, and early users.',
			a: 'Meltem Demirors'
		},
		{
			q: "The thing I think is often misunderstood about Ripple is people say, 'Oh, Ripple is a centralized platform.' To me, this is a legacy perspective. Ripple's technology, IRP, is open source; XRP Ledger is open source.",
			a: 'Brad Garlinghouse '
		},
		{
			q: 'For the first time, open source, peer-to-peer protocol developers can monetize their project on a protocol level.',
			a: 'Olaf Carlson-Wee '
		},
		{
			q: 'Users and entrepreneurs building new business models off the blockchain means that there are competing interests on how best to scale the network. Linux, also an open source software project, had similar growing pains.',
			a: 'Brock Pierce'
		},
		{
			q: 'Google is committed to open source and open APIs, and part of that is creating a partner-friendly place.',
			a: 'Diane Greene '
		},
		{
			q: "With TensorFlow, when we started to develop it, we kind of looked at ourselves and said: 'Hey, maybe we should open source this.'",
			a: 'Jeff Dean'
		},
		{
			q: 'In real open source, you have the right to control your own destiny.',
			a: 'Linus Torvalds'
		},
		{
			q: "Open source production has shown us that world-class software, like Linux and Mozilla, can be created with neither the bureaucratic structure of the firm nor the incentives of the marketplace as we've known them.",
			a: 'Howard Rheingold'
		},
		{
			q: "In true open source development, there's lots of visibility all the way through the development process.",
			a: 'Brian Behlendorf'
		},
		{
			q: "I often compare open source to science. To where science took this whole notion of developing ideas in the open and improving on other peoples' ideas and making it into what science is today and the incredible advances that we have had. And I compare that to witchcraft and alchemy, where openness was something you didn't do.",
			a: 'Linus Torvalds'
		},
		{
			q: 'Open source can propagate to fill all the nooks and crannies that people want it to fill.',
			a: 'Mitch Kapor'
		},
		{
			q: "One thing about open source is that even the failures contribute to the next thing that comes up. Unlike a company that could spend a million dollars in two years and fail and there's nothing really to show for it, if you spend a million dollars on open source, you probably have something amazing that other people can build on.",
			a: 'Matt Mullenweg'
		},
		{
			q: "The open source nature of the Internet is both a blessing and a curse, because just as much as we can watch what's happening around the world, we can also be watched.",
			a: 'Alicia Garza'
		},
		{
			q: 'There were open source projects and free software before Linux was there. Linux in many ways is one of the more visible and one of the bigger technical projects in this area, and it changed how people looked at it because Linux took both the practical and ideological approach.',
			a: 'Linus Torvalds'
		},
		{
			q: 'Many people think that open source projects are sort of chaotic and and anarchistic. They think that developers randomly throw code at the code base and see what sticks.',
			a: 'Mitchell Baker'
		},
		{
			q: 'I would never jeopardize classified information to be brought out to the public. This information is all open source. There is no reason to worry about classification. It is simply an attempt by bureaucrats to cover their rear ends.',
			a: 'Curt Weldon'
		},
		{
			q: "What is al Qaeda? It's an open source religious political movement that works off the global supply chain.",
			a: 'Thomas Friedman'
		},
		{
			q: 'EdX will be a creating a platform which will be open source, not for profit, and a portal for a website where universities will offer their courses. For example, MIT courses will be offered as MITx and Harvard courses as HarvardX.',
			a: 'Anant Agarwal'
		},
		{
			q: 'The biggest challenge for open source is that as it enters the consumer market, as projects like WordPress and Firefox have done, you have to create a user experience that is on par or better than the proprietary alternatives.',
			a: 'Matt Mullenweg'
		},
		{
			q: 'The Internet browser is the most susceptible to viruses. The browser is naive about downloading and executing software. Google is trying to help by releasing the Chrome browser as open source.',
			a: 'Vint Cerf'
		},
		{
			q: "What's kept Java from being used as widely as possible is there hasn't been an Open Source implementation of it that's gotten really widespread use.",
			a: 'Brian Behlendorf'
		},
		{
			q: "I'm not of the opinion that all software will be open source software. There is certain software that fits a niche that is only useful to a particular company or person: for example, the software immediately behind a web site's user interface. But the vast majority of software is actually pretty generic.",
			a: 'Brian Behlendorf'
		},
		{
			q: 'The more money Automattic makes, the more we invest into Free and Open Source software that belongs to everybody and services to make that software sing.',
			a: 'Matt Mullenweg'
		},
		{
			q: "Many users of the GNU/Linux system will not have heard the ideas of free software. They will not be aware that we have ideas, that a system exists because of ethical ideals, which were omitted from ideas associated with the term 'open source.'",
			a: 'Richard Stallman'
		},
		{
			q: "The name Firefox is not part of the open source licence, and that's why it's important to us.",
			a: 'Mitchell Baker'
		},
		{
			q: "The main languages out of which web applications are built - whether it's Perl or Python or PHP or any of the other languages - those are all open source languages. So the infrastructure of the web is open source... the web as we know it is completely dependent on open source.",
			a: 'Mitch Kapor'
		},
		{
			q: 'I want to put culture on a track so that it becomes more inclusive, more open source.',
			a: 'Virgil Abloh'
		},
		{
			q: 'In open source, we feel strongly that to really do something well, you have to get a lot of people involved.',
			a: 'Linus Torvalds'
		},
		{
			q: 'Empowerment of individuals is a key part of what makes open source work, since in the end, innovations tend to come from small groups, not from large, structured efforts.',
			a: "Tim O'Reilly"
		},
		{
			q: "There are two main methodologies of open source development. There's the Apache model, which is design by committee - great for things like web servers. Then you have the benevolent dictator model. That's what Ubuntu is doing, with Mark Shuttleworth.",
			a: 'Matt Mullenweg'
		},
		{
			q: "Al Qaeda is nothing more than a mutant supply chain. They're playing off the same platform as Wal-Mart and Dell. They're just not restrained by it. What is al Qaeda? It's an open source religious political movement that works off the global supply chain.",
			a: 'Thomas Friedman'
		},
		{
			q: 'Basically, if reverse engineering is banned, then a lot of the open source community is doomed to fail.',
			a: 'Jon Johansen'
		},
		{
			q: "I think, fundamentally, open source does tend to be more stable software. It's the right way to do things.",
			a: 'Linus Torvalds'
		},
		{
			q: "I am greatly proud of the fact that 'Doom' is one of those things where everything that has a 32-bit processor has had 'Doom' run on it, and I think that's been one of the great aspects of having it be open source: having everything out there means that people have maintained that and kept it up to date.",
			a: 'John Carmack'
		},
		{
			q: "We have a very active testing community which people don't often think about when you have open source.",
			a: 'Mitchell Baker'
		},
		{
			q: "I think the way IBM has embraced the open source philosophy has been quite astonishing, but gratifying. I hope they'll do very well with it.",
			a: 'Larry Wall'
		},
		{
			q: "It's amazing what you can get on open source now if you actually use the right search engines to find the material.",
			a: "Gus O'Donnell"
		},
		{
			q: 'WordPress.com is the only service of its kind that not only lets you export your data, but gives you an open source package you can run on pretty much any web host out there to run your own instance of the software. So the freedom is really in your hands.',
			a: 'Matt Mullenweg'
		},
		{
			q: "Huge open source organizations like Red Hat and Mozilla manage the collaboration of hundreds of people who don't know one another and have spent no time hanging around the water cooler.",
			a: 'Margaret Heffernan'
		},
		{
			q: "If you want to build an open source project, you can't let your ego stand in the way. You can't rewrite everybody's patches, you can't second-guess everybody, and you have to give people equal control.",
			a: 'Rasmus Lerdorf'
		},
		{
			q: "Success for open source is when the term 'open source' becomes a non-factor in the decision making process, when people hear about Linux and compare it to Windows NT, and they compare it on the feature set and don't have much of an excuse not to use it.",
			a: 'Brian Behlendorf'
		},
		{
			q: 'It seems like the web, particularly software as a service, provides ample opportunities for you to flourish economically, completely aligned with the broader open source community.',
			a: 'Matt Mullenweg'
		},
		{
			q: 'People who study primate societies make a distinction between two kinds of cultural interactions, agonic and hedonic. In agonic societies, you gain status by asserting dominance over others. In hedonic societies, you gain status by drawing attention to yourself. Open source is a hedonic culture.',
			a: 'Eric S. Raymond'
		},
		{
			q: "The question of trademark is pretty unsettled in the open source world. The trademark is important in a consumer product, but there are a few groups who feel it's a restriction they can't live with.",
			a: 'Mitchell Baker'
		},
		{
			q: 'When my co-founder and I first had the idea for IronPort, an email security company, we triangulated a list of the 20 most relevant people in email - former CEOs, open source technologists, investors and thought leaders.',
			a: 'Scott Weiss'
		},
		{
			q: 'In open source, you really have to be near the watershed to have an impact on the source code. Customers want to be near the key contributors to the code, not a level removed.',
			a: 'Peter Fenton'
		},
		{
			q: 'Intellectual property is an important legal and cultural issue. Society as a whole has complex issues to face here: private ownership vs. open source, and so on.',
			a: 'Tim Berners-Lee'
		},
		{
			q: "If you are in this business long enough, you hear about a thousand things that are going to kill you. Open source? Yeah, we are not dead yet. Cloud? That's not new; it's a new name.",
			a: 'Safra A. Catz'
		},
		{
			q: 'The free sharing and teaching of open source is incompatible with the notion of the solitary genius.',
			a: 'Golan Levin'
		},
		{
			q: "Certainly there's a phenomenon around open source. You know free software will be a vibrant area. There will be a lot of neat things that get done there.",
			a: 'Bill Gates'
		},
		{
			q: 'I have really become a huge believer in the power of open source.',
			a: 'Peter Levine'
		},
		{ q: 'For me, open source is a moral thing.', a: 'Matt Mullenweg' },
		{
			q: "When I first got into technology I didn't really understand what open source was. Once I started writing software, I realized how important this would be.",
			a: 'Matt Mullenweg'
		},
		{
			q: 'All of our code is open source, so it can be used for other projects.',
			a: 'Miguel de Icaza'
		},
		{
			q: "Al Qaeda is nothing more than a mutant supply chain. They're playing off the same platform as Wal-Mart and Dell. They're just not restrained by it. What is al Qaeda? It's an open source religious political movement that works off the global supply chain. That's what we're up against in Iraq. We're up against a suicide supply chain.",
			a: 'Thomas Friedman'
		},
		{
			q: "We're not done yet, but two things WordPress has been able to exemplify is that open source can create great user experiences and that it's possible to have a successful commercial entity and a wider free software community living and working in harmony.",
			a: 'Matt Mullenweg'
		},
		{
			q: "Open source is a beautiful way of collaborating; but what's happening on the free Internet is more akin to the 'crowdsourcing' of journalists and other content creators by advertisers who no longer have to pay them - only the search engines that parse their articles.",
			a: 'Douglas Rushkoff'
		},
		{
			q: 'Companies have been trying to figure out what it is that makes open source work.',
			a: 'Brian Behlendorf'
		},
		{
			q: "I won't sit here and say an Open Source project will do things faster than a closed source, but one of the reasons why is that it sits on a whole lot of things that came before it.",
			a: 'Brian Behlendorf'
		},
		{
			q: 'Philip Greenspun had a huge impact on me. He was the first person I knew of that embraced online communities, created a real business around open source, gave back to the community through education, and inspired me to explore photography.',
			a: 'Matt Mullenweg'
		},
		{
			q: "If you think of the ideas of open source applied to information in an encyclopedia, you get to Wikipedia - lots and lots of small contributions that bubble up to something that's meaningful.",
			a: 'Matt Mullenweg'
		},
		{
			q: 'Open platforms historically undergo a lot of scrutiny, but there are a lot of advantages to having an open source platform from a security standpoint.',
			a: 'Sundar Pichai'
		},
		{
			q: "We do care about control and privacy. It's one of the reasons we are so focused on having our systems be open source, so you or someone technically savvy you know can verify what the software is doing.",
			a: 'Mitchell Baker'
		},
		{
			q: "The accomplishment of open source is that it is the back end of the web, the invisible part, the part that you don't see as a user.",
			a: 'Mitch Kapor'
		},
		{
			q: 'I think open source is an evolutionary idea for humanity, this idea of transparency. It played out for us in the technology world, but it also played out with the idea of a truth and reconciliation commission and Wikipedia.',
			a: 'Megan Smith'
		},
		{
			q: "Android phones in China are more 'Android open source' rather than Android in the way we are all used to here. So a lot of phones don't have Google Play, etc.",
			a: 'Sundar Pichai'
		}
	];

	let quote = quotes[Math.floor(Math.random() * quotes.length)];

	setInterval(() => {
		quote = quotes[Math.floor(Math.random() * quotes.length)];
	}, 10000);
</script>

<blockquote class="shadow">
	<p>{quote.q}</p>
	<footer>{quote.a}</footer>
</blockquote>

<style>
	blockquote {
		width: fit-content;
		max-width: 90vw;
		margin: 0, auto;
		padding: 1rem;
		font-size: 1rem;
		line-height: 1.5;
		font-style: italic;
	}
	blockquote p {
		margin: 0;
		padding: 0;
	}
	blockquote footer {
		margin: 0;
		margin-top: 0.5rem;
		padding: 0;
		font-size: 1rem;
		line-height: 1;
		font-weight: bold;
	}
</style>
