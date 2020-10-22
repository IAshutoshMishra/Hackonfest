import emailjs from 'emailjs-com';
const siteMetadata = {
    title: `Hackon Fest 2`,
    siteUrl: `http://localhost`,
    capitalizeTitleOnHome: false,
    logo: `/images/hackonlogo.png`,
    icon: `/images/h.png`,
    titleImage: `/images/hackonlogo.png`,
    ogImage: `/images/hackonlogo.png`,
    twoColumnWall: true,
    cookiePolicy: true,
    introTag: `Bug Bounters Together`,
    description: `Skillship Foundation - with support of various active open source community contribuetr and the of team Ethical Hackers and Bug Bounters`,
    about:
        "Hack0nFest Insipired by you - for the community to the community. Hack0nFest Initiated by Skillship Foundation - with support of various active open source community contribuetr and the of team Ethical Hackers and Bug Bounters. we are creating the sparks in the Digital country of young blood through the Hack0nFest by giving them knowledge and guidance in the field of cybersecurity with the help of amazing Experience Mentors. For the Companies here is the opportunity to pick from the amazing talent pool that is expected to be present at the Hack0nFest2019. HACK0NFEST VISION Hack0n Fest is a global level BugBounty program where theparticipant will allow to participate from any countries border is not a barrier for them. Hack0n Fest is a 30 days Online fest, our primary motto is to help an individual to develop CREATIVE THINKING AND BUG BOUNTY SKILLS. Our vision is to give the opportunity to student Bug Bounters to come under the influence of some of the best Ethical Hackers in the country and experience new technology. We want to spark cyber awareness between the students and get the ideas and skills to be sharpened in the young blood. For the Companies here is the opportunity to pick from the amazing talent pool that is expected to be present at the Hack0nFest201.",
    author: `Skillship`,
    blogItemsPerPage: 10,
    portfolioItemsPerPage: 10,
    darkmode: true,
    switchTheme: true,
    navLinks: [
        {
            name: "HOME",
            url: "/",
        },
        {
            name: "ABOUT",
            url: "/about",
        },
        {
            name: "HALL OF FAME",
            url: "/halloffame",
        },
        {
            name: "HACKONFEST-2019",
            url: "https://hackonfest.com",
        },
        {
            name: "CONTACT",
            url: "/contact",
        },
    ],
    footerLinks: [
        {
            name: "",
            url: "",
        },
    ],
    social: [
        {
            name: "Twitter",
            icon: "/images/Twitter.svg",
            url: "https://twitter.com/hack0nfest?s=08",
        },
        {
            name: "Instagram",
            icon: "/images/Instagram.svg",
            url: "https://www.instagram.com/hack0nfest/",
        },
    ],
    contact: {
        // leave empty ('') or false to hide form
        api_url: "asho251@gmail.com",
        description: `No Worries we are here to support you`,
        mail: "skillshipfoundation@gmail.com",
        phone: "+91-955-235-6218",
        address: "298, skillship foundation, Nagpur India",
    },
    disqus: "elemental-netlify-com",
}

const beforeContactFormSubmit = data => {
    // Code 0 - success
    // Code 1 - Name
    // Code 2 - Email
    // Code 3 - Message
    // Code 4 - Other
    const errors = []

    if (data.name.trim().length < 2) {
        errors.push({
            code: 1,
            message: "Enter a name",
        })
    }

    if (!data.email.match(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/)) {
        errors.push({
            code: 2,
            message: "Enter a valid email address",
        })
    }

    if (data.message.trim().length < 15) {
        errors.push({
            code: 3,
            message: "Enter a message with atleast 15 characters",
        })
    }

    if (errors.length > 0)
        return {
            result: false,
            errors: errors,
        }

    return {
        data: {
            name: data.name,
            email: data.email,
            message: data.message,
        },
        result: true,
    }
}

const contactFormSubmit = async (api, data) => {
    // let res: any = await fetch(api, {
    //     method: "POST",
    //     body: JSON.stringify(data),
    //     headers: {
    //         Accept: "application/json",
    //         "Content-Type": "application/json",
    //     },
    // })

    // res = await res.json()

    // if (res.success) {
    //     return {
    //         result: true,
    //     }
    // }
    // return {
    //     result: false,
    //     ...res,
    // }

    emailjs.send('service_hdd0g6h','template_02wq49l', data, 'user_k0P2CZy5B7nOaR9WHZMAf')
	.then((res) => {
        if (res) {
            return {
                result: true,
            }
        }
        return {
            result: false,
            ...res,
        }
	});
}

const defaults = {
    disqus: null,
    twoColumnWall: true,
    darkmode: false,
    switchTheme: true,
    capitalizeTitleOnHome: true,
    cookiePolicy: false
}

Object.keys(defaults).forEach(item => {
    if (siteMetadata[item] === undefined) {
        siteMetadata[item] = defaults[item]
    }
})

export { siteMetadata, beforeContactFormSubmit, contactFormSubmit }
