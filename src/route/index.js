// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================

var header ={
	name: {
		firstname: 'Ivan',
		lastname: 'Krivosheya',
		},
	
	position:'Junior Fullstack JS Developer',
	
	salary: {
		cost:'600$',
		text:'в місяць',
		},
	address: 'Ukraine',
};

var footer = {
	social: {
		email: {
			text: 'ivanov@mail.com', 
			href: 'mailto:ivanov@mail.com', 
			},  
	

		phone: {
			text: '+380688943294',
			href: 'tel:+380688943294',
			},
		LinkedIn: {
			href: 'https://www.linkedin.com/in/ivan-krivosheya-baa58b274/',
			text: 'LinkedIn',
			},
	},
}

// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
// res.render генерує нам HTML сторінку

//            ↙ cюди вводимо назву файлу з сontainer
res.render('index', {})
//                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
//             ↙ cюди вводимо назву файлу з сontainer
res.render('summary', {
	// ↙ сюди вводимо JSON дані

	page: {
		title: 'Resume | Summary',
	},

	header,

	main: {
			summary: {
				title: 'Summary',
				big: true,
				text: `Open-minded for new technologies, with 1 years of
				experience in development. Whenever I start to
				work on a new project I learn the domain and try
				to understand the idea of the project. Good team
				player, every colleague is a friend to me.`,
			},
		
			experience: { 
				title:'Other experience', 
				big: false,
				text:`Pet project
				for parsing sport betting data from different platforms (
				odds ) and sport statistics ( tournament position, goals
				etc), analyzing by simple mathematics models and preparing
				probability for such events like: money line - first win /
				draw / second win, totals etc.`,
			},
		},

	footer,
})
})


router.get('/skills', function (req, res) {
//             ↙ cюди вводимо назву файлу з сontainer
res.render('skills', {
	// ↙ сюди вводимо JSON дані

	page: {
		title: 'Resume | Skills',
	},

	header,

	main: {
		skills: [
			{ 
				name: "HTML",
				point: 10,
				isTop: true,
			},
			{ 
				name: "Hendlbars",
				point: 9,
				isTop: false,

			},
			{ 
				name: "VS Code",
				point: 10,
				isTop: true,
			},
			{ 
				name: "Git",
				point: 10,
				isTop: true,
			},
			{ 
				name: "Terminal",
				point: 6,
				isTop:false,
			},
			{ 
				name: "NPM",
				point: 5,
				isTop: false,
			},
			{
				name: "React.js",
				point: 0,
			},
			{
				name: "PHP",
				point: null,
			},
		],
		
		hobbies: [
			{
				name:"doing sports",
				isMain: true
			},
			{
				name:"riding a bike",
				isMain: true
			},
			{
				name: "playing the guitar",
				isMain: false
			},
		],
	},
	
	footer,
	
})
})



router.get('/education', function (req, res) {
	//             ↙ cюди вводимо назву файлу з сontainer
	res.render('education', {
	// ↙ сюди вводимо JSON дані

	page: {
		title: 'Resume | Educatin',
	},

	header,

	main: {
		educations: [
			{
				name: "Державний податковий Університет",
				end: 2023,
				isEnd: true,
			},
			{
				name: "Національна академія внутрішніх справ",
				end: 2022,
				isEnd: true,
			},
			{
				name: "Law schoolss",
				end: null,
				isEnd: false,
			},
		],

		certificates: [
			{
				name: "Державний подаковий Університет",
				id: 123456
			},
			{
				name: "НАВС",
				id: 456789
			},
			{
				name: " Law schools",
				id: 789123
			},
		],
	},
	
	footer,
	
	})
})



router.get('/work', function (req, res) {
	//             ↙ cюди вводимо назву файлу з сontainer
	res.render('work', {
		// ↙ сюди вводимо JSON дані

		layout: 'big',
	
		page: {
			title: 'Resume | Work',
		},
	
		
	
		main: {
			works: [
				{
					position: 'Junior Fullstack Developer',
					company: {
						name: 'IT Brains',
						url: null,
					},
					duration: {
						from: "10.10.2020",
						to: null,
					},
					projectAmount: "3", 
					projects: [
						{
							name: 'Resume',
							url: 'https://web.skillzrun.com/learn/123771',
							about: 'Some info',
							
							stackAmount: '3',
							stacks: [
								{
									name: 'React.js',
								},
								{
									name: 'HTML / CSS',
								},
								{
									name: 'Node.js',
								},
							],
							awardAmount: '2',
							awards: [
								{
									name: 'Beckground verification...',
								},
								{
									name: 'Prepearing SEO optimized pages...',
								},
							],
						},
					],
					
					
				},
			],
		},

				
	
		footer,
	})
	})
	

	router.get('/person', function (req, res) {
		//             ↙ cюди вводимо назву файлу з сontainer
		res.render('person', {

			layout: 'person',

		  person: {
			name: 'Emma Johnson',
			age: 32,
			gender: 'Female',
			address: {
			  street: '123 Main St',
			  city: 'New York',
			  state: 'NY',
			  zip: '10001',
			  country: 'USA',
			},
			education: [
			  {
				degree: 'Bachelor of Science',
				major: 'Computer Science',
				university:
				  'Massachusetts Institute of Technology',
				graduationYear: 2012,
			  },
			],
			workExperience: [
			  {
				company: 'Google',
				title: 'Software Engineer',
				startDate: '2012-06-01',
				endDate: '2016-12-31',
				responsibilities: [
				  'Developed new features for Google Maps',
				  'Worked on improving search algorithms',
				],
				year_founded: 1990,
				industry: 'Technology',
				employees: [
				  {
					name: 'John Smith',
					position: 'CEO',
					department: 'Executive',
					projects: [
					  {
						name: 'Project Alpha',
						description:
						  'Developing new software platform',
						status: 'In Progress',
						teams: [
						  {
							team_name: 'Awesome Team',
							team_leader: {
							  name: 'John Smith',
							  title: 'Team Leader',
							  email: 'john.smith@example.com',
							},
							team_members: [
							  {
								name: 'Alice Johnson',
								title: 'Software Engineer',
								email:
								  'alice.johnson@example.com',
								skills: ['Java', 'Python', 'SQL'],
								projects: [
								  {
									name: 'Project A',
									description:
									  'Lorem ipsum dolor sit amet',
									technologies: [
									  'Java',
									  'Spring Framework',
									],
									team_members: [
									  {
										name: 'Bob Lee',
										title:
										  'Software Engineer',
									  },
									  {
										name: 'Cindy Chen',
										title: 'UI Designer',
									  },
									],
								  },
								],
							  },
							],
						  },
						],
					  },
					],
				  },
				],
			  },
			],
		  },
		})
	  })


// ================================================================

// Підключаємо роутер до бек-енду
module.exports = router
