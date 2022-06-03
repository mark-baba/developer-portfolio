import emoji from "react-easy-emoji";

export const greetings = {
	name: "Aniket Sarkar",
	title: "Hi all, I'm Aniket",
	description:
		"I'm passionate Full Stack web developer having an experience of web applications with Python, Django, Flask, Fastapi, React.js, Next.js and AWS. ",
	resumeLink:
		"https://drive.google.com/file/d/1Qn2fHqwCP4jihmjRNnG8slaksWwwPr5z/view?usp=drivesdk",
};

export const openSource = {
	githubUserName: "marktennyson",
};

export const contact = {};

export const socialLinks = {
	facebook: "https://www.facebook.com/aniket.sarkar.3538039",
	instagram: "https://www.instagram.com/blackhat_unofficial",
	twitter: "https://twitter.com/aniket2929",
	github: "https://github.com/marktennyson",
	linkedin: "https://www.linkedin.com/in/marktennyson29/",
};

export const skillsSection = {
	title: "What I do",
	subTitle:
		"CRAZY ENTHUASIATIC FULL STACK DEVELOPER",
	data: [
		{
			title: "Full Stack Development",
			lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
			skills: [
				emoji(
					"⚡ Building RESTful APIs in Django, Django REST Framework, Flask, Fastapi"
				),
				emoji(
					"⚡ Full cloud architecture using AWS."
				),
				emoji(
					"⚡ Building logical and fast frontend using Jquery."
				),
				emoji(
					"⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js"
				),
				emoji("⚡ Building responsive static websites using Next.js"),
			],
			softwareSkills: [
				{
					skillName: "HTML-5",
					fontAwesomeClassname: "vscode-icons:file-type-html",
				},
				{
					skillName: "CSS-3",
					fontAwesomeClassname: "vscode-icons:file-type-css",
				},
				{
					skillName: "JavaScript",
					fontAwesomeClassname: "logos:javascript",
				},
				{
					skillName: "VS Code",
					fontAwesomeClassname: "vscode-icons:file-type-vscode",
				},
				{
					skillName: "Python",
					fontAwesomeClassname: "logos:python",
				},
				{
					skillName: "Django",
					fontAwesomeClassname: "vscode-icons:file-type-django",
				},
				{
					skillName : "Flask",
					fontAwesomeClassname : 'bxl:flask'
				},
				{
					skillName: "Jquery",
					fontAwesomeClassname: "logos:jquery",
				},
				{
					skillName: "Reactjs",
					fontAwesomeClassname: "vscode-icons:file-type-reactjs",
				},
				{
					skillName: "Nextjs",
					fontAwesomeClassname: "vscode-icons:file-type-light-next",
				},
				{
					skillName : "Pip",
					fontAwesomeClassname : 'vscode-icons:file-type-pip'
				},
				{
					skillName: "NPM",
					fontAwesomeClassname: "logos:npm-icon",
				},
				{
					skillName: "Yarn",
					fontAwesomeClassname: "logos:yarn",
				}
			],
		},
		{
			title: "Cloud Infra-Architecture",
			lottieAnimationFile: "/lottie/skills/cloudinfra.json", // Path of Lottie Animation JSON File
			skills: [
				emoji("⚡ Experience of working on multiple cloud platforms"),
				emoji(
					"⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases"
				),
				emoji(
					"⚡ Building CI/CD pipelines for automated testing & deployment using Github Actions"
				),
			],
			softwareSkills: [
				{
					skillName: "AWS",
					fontAwesomeClassname: "logos:aws",
				},
				// {
				// 	skillName: "Azure",
				// 	fontAwesomeClassname: "logos:microsoft-azure",
				// },
				{
					skillName: "Heroku",
					fontAwesomeClassname: "logos:heroku-icon",
				},
				{
					skillName: "PostgreSQL",
					fontAwesomeClassname: "logos:postgresql",
				},
				{
					skillName: "Github",
					fontAwesomeClassname: "akar-icons:github-fill",
				},
				{
					skillName: "Docker",
					fontAwesomeClassname: "logos:docker-icon",
				},
				{
					skillName: "Github Actions",
					fontAwesomeClassname: "logos:github-actions",
				},
				// {
				// 	skillName: "Cloudinary",
				// 	fontAwesomeClassname: "logos:cloudinary",
				// },
				{
					skillName: "Nginx",
					fontAwesomeClassname: "logos:nginx",
				},
				{
					skillName: "Gunicorn",
					fontAwesomeClassname: "logos:gunicorn",
				},
				// {
				// 	skillName: "Sentry",
				// 	fontAwesomeClassname: "logos:sentry-icon",
				// },
			],
		},
		// {
		// 	title: "Blockchain",
		// 	lottieAnimationFile: "/lottie/skills/ethereum.json", // Path of Lottie Animation JSON File
		// 	skills: [
		// 		emoji(
		// 			"⚡ Experience in developing Smart Contract using Solidity & Ethereum"
		// 		),
		// 		emoji(
		// 			"⚡ Building Scripts for automated testing & deployment of Smart Contracts using Brownie & Infura"
		// 		),
		// 		emoji(
		// 			"⚡ Experience of using Openzeppelin Smart Contract Standards & Chainlink Oracles"
		// 		),
		// 		emoji(
		// 			"⚡ Developing NFT Smart Contracts using ERC-721 Token Standard"
		// 		),
		// 		emoji(
		// 			"⚡ Building Dapps with React.js & Solidity using Web3.js, Moralis & IPFS"
		// 		),
		// 	],
		// 	softwareSkills: [
		// 		{
		// 			skillName: "Ethereum",
		// 			fontAwesomeClassname: "logos:ethereum",
		// 		},
		// 		{
		// 			skillName: "Solidity",
		// 			fontAwesomeClassname: "logos:solidity",
		// 		},
		// 		{
		// 			skillName: "Web3js",
		// 			fontAwesomeClassname: "logos:web3js",
		// 		},
		// 		{
		// 			skillName: "Metamask",
		// 			fontAwesomeClassname: "logos:metamask-icon",
		// 		},
		// 		{
		// 			skillName: "Ganache",
		// 			fontAwesomeClassname: "logos:ganache-icon",
		// 		},
		// 	],
		// },
	],
};

export const SkillBars = [
	{
		Stack: "Frontend/Design", //Insert stack or technology you have experience in
		progressPercentage: "70", //Insert relative proficiency in percentage
	},
	{
		Stack: "Backend",
		progressPercentage: "90",
	},
	{
		Stack: "Programming",
		progressPercentage: "80",
	},
];

export const educationInfo = [
	{
		schoolName: "Mira High School",
		subHeader: "Higher Secondary",
		duration: "April 2014 - March 2016",
		// desc: "",
		// descBullets: [
		// 	"Lorem ipsum dolor sit amet, consectetur adipdfgiscing elit",
		// 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
		// ],
	},
	{
		schoolName: "Bengal Institute of Technology",
		subHeader: "Bachelor of Technology",
		duration: "August 2016 - June 2020",
		// desc: "",
		// descBullets: [
		// 	"Lorem ipsum dolor sit amet, consectetur adipdfgiscing elit",
		// 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
		// ],
	},
];

export const experience = [
	{
		role: "Software Engineer",
		company: "Cloodon Learning Private Limited",
		companylogo: "/img/icons/common/seeklms-cloodon.jpg",
		date: "March 2021 – Present",
		desc: "Cloodon is a project based company that provides SEEKLMS, a learning management system. I am working with the cutting edge technologies like Python Django to build the backend and JQuery for the frontend logics",
		// descBullets: [
		// 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
		// 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
		// ],
	},
	{
		role: "Python Developer",
		company: "Triunits Infotech Private Limited",
		companylogo: "/img/icons/common/triunits.jpg",
		date: "July 2020 - December 2020",
		desc: "This is my first company where I learned about the different fundamentals of web development. I was fortunate enough to got a chance to work with AWS to build the cloud infrastructure with the Devops team.",
	},
];

export const projects = [
	{
		name: "Acqude.com (Ecommerce)",
		desc: "Ecommerce platform for shoes and garments.",
		link: "https://acqude.com",
	},
	{
		name: "Navycut",
		desc: "The Full-stack web framework to meet the developer's expectation.",
		github: "https://github.com/FlaskAio/navycut",
		link: "https://flaskaio.aniketsarkar.info/navycut/"
	},
	{
		name: "Flask-Mailing",
		desc: "Flask mail system for sending mails(individual, bulk) ,attachments(individual, bulk) fully asynchronously.",
		github: "https://github.com/marktennyson/flask-mailing",
		link: "https://gh.aniketsarkar.info/flask-mailing/"
	},
	{
		name: "Flask-Express",
		desc: "Provide the interactive service like expressJs to the flask app.",
		github: "https://github.com/marktennyson/flask-express",
		link: "https://gh.aniketsarkar.info/flask-express/"
	},
	{
		name: "Fastapi-MailMan",
		desc: "Porting Django's email implementation to your FastAPI applications.",
		github: "https://github.com/marktennyson/fastapi-mailman",
		link: "https://gh.aniketsarkar.info/fastapi-mailman/",
	},
	{
		name: "Fastapi-Tortoise",
		desc: "Adds asynchronous Tortoise ORM(Like Django-ORM) support for flask app.",
		github: "https://github.com/marktennyson/Flask-Tortoise",
		link: "https://gh.aniketsarkar.info/Flask-Tortoise/",
	},
];

// export const feedbacks = [
// 	{
// 		name: "John Smith",
// 		feedback:
// 			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.",
// 	},
// 	{
// 		name: "John Smith",
// 		feedback:
// 			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.",
// 	},
// ];
