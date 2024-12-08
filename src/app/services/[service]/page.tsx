"use client";
import PageHeader from '@/components/page-header';
import React, { useEffect } from 'react'
import Aos from "aos";
import Link from 'next/link';
type ServiceKey = "opentext-solutions" | "servicenow-implementation-and-support" | "devops-consulting" | "dynatrace-performance-monitoring" | "chatbot-development" | "automation-services" | "web-designing";

const data = {
  "opentext-solutions": {
    desc: "Your technology advisor for the digital age.",
    title1: "Our IT Consulting Services",
    img: "/images/services/itconsulting.png",
    para1: "We offer comprehensive services to help businesses navigate the constantly evolving world of technology. Our team of experienced consultants provide strategic advice and guidance on a range of IT-related topics, including cybersecurity, cloud computing, data management, and software development. With our expertise and commitment to excellence, we help businesses stay ahead of the curve in the rapidly changing technology landscape.",
    title2: "Our Solutions for Development Services",
    items: [
      {
        link: true,
        title: "Workday Services",
        desc: "Techthrivesystem Workday Consulting Services offers efficient and responsive management for Workday applications to help businesses in financial management, human resource management, and business planning. We have a workforce with the expertise to assist businesses in capitalizing more on core business priorities while significantly lowering expenses and ensuring long-term sustainability."
      },
      {
        link: true,
        title: "Kronos Consulting Services",
        desc: "Global clients are served by our Kronos Service Line. Contributing significantly both on-site and in the cloud. Time & Attendance, Leave Management, Activity Management, Advanced Scheduling, and Analytics end-to-end implementation and support. When it comes to contract workforce management, end-to-end business processes, Techthrivesystem is unique in offering Kronos solutions."
      },
      {
        link: true,
        title: "Jira Consulting Services",
        desc: "Techthrivesystem offers Jira consulting services to help businesses run more efficiently while also being more productive. We will help you scale, develop, and grow, no matter what your needs are. Utilise Techthrivesystem consulting services for Jira software, Jira work management, Confluence, and other tools to start living a more productive life. You'll find it easier with us."
      },
      {
        link: true,
        title: "Salesforce Consulting",
        desc: "Techthrivesystem will improve the customer experience while transforming the way your business operates. Your business can benefit from greater efficiency and a higher return on investment by implementing Salesforce applications and working with a Certified Salesforce Consultant. As a certified Salesforce consultant, we assist you in growing your company by developing CRM tools tailored to your industry."
      },
      {
        link: true,
        title: "Service Now Consulting",
        desc: "The ServiceNow consulting services provided by Techthrivesystem help companies enhance their overall productivity by streamlining their IT operations. By offering a range of IT service management (ITSM) tools and automation capabilities, our ServiceNow consulting services provide businesses with a variety of benefits that will accelerate your business growth."
      },
    ]
  },
  "servicenow-implementation-and-support": {
    desc: "Leading the way in software development services.",
    title1: "Bespoke Services",
    img: "/images/services/devimg.jpg",
    para1: "The goal of our development services is to provide innovative and efficient solutions that improve business processes, enhance the customer experience, and increase productivity. With the ever-evolving technological landscape, IT development companies strive to stay up-to-date with the latest trends and advancements to ensure that their solutions are always cutting-edge.",
    title2: "Our Solutions for Development Services",
    items: [
      {
        link: true,
        title: "Mobile App Development",
        desc: "We constantly work to provide our clients with top-notch app development services as a leading mobile app development company in Dubai, Virginia, USA. We provide the most cutting-edge and scalable enterprise-grade solutions available, from full-stack development to just consulting."
      },
      {
        link: true,
        title: "UI/UX",
        desc: "Techthrivesystem is a reputable UI/UX design firm focused on offering clients user-friendly and growth-oriented solutions. Our expert UI-UX designers analyze industry trends and conduct in-depth research to incorporate into the design and deliver cutting-edge user interfaces and experiences."
      },
      {
        link: true,
        title: "Web Design/Development",
        desc: "Our services are designed to use next-generation technologies to develop breakthroughs that will help businesses stand out from the crowd. We are a professional web development company that offers end-to-end custom web apps to meet business requirements."
      },
      {
        link: true,
        title: "E-commerce Development",
        desc: "E-commerce solutions to empower you with customer retention and your digital business goals. We assist in enhancing client satisfaction, and generating revenue. We ensure that the best development technologies and a strong business plan are used to create your website."
      },
      {
        link: true,
        title: "Enterprise Solutions",
        desc: "We provide business solutions that focus on outcomes and return on investment. To ensure turnaround time is as quick as possible, we concentrate on the pain points for our clients and offer tailored solutions. We engage with clients, and how we come up with creative solutions."
      },
      {
        link: true,
        title: "QA/Testing",
        desc: "We provide guidance on the best quality assurance procedures and assist in their creation and application. We provide outstanding QA automation testing services to assist businesses in reducing time-to-market while maintaining a high level of quality."
      },
    ]
  },
  "devops-consulting": {
    desc: "Empowering Your Workforce.",
    title1: "Our Staffing Services",
    img: "/images/services/staffing.png",
    para1: "At Techthrivesystem, we specialise in providing a range of staffing solutions to help businesses meet their workforce needs. We work with companies across various industries to deliver customised staffing solutions that fit their unique requirements. Our team of experienced recruiters and staffing specialists use their industry knowledge and expertise to source and screen top talent.",
    title2: "Our Solutions for Development Services",
    items: [
      {
        link: true,
        title: "Staffing Services",
        desc: "Our team of experienced recruiters and staffing specialists use their industry knowledge and expertise to source and screen top talent, ensuring that our clients have access to the best candidates for their job openings. Whether you need staffing services for short-term projects or permanent positions, delivering exceptional service and results-driven solutions."
      },
      {
        link: true,
        title: "Recruitment Services",
        desc: "As a leading staffing company, we offer comprehensive recruitment services to help businesses find the right talent for their organizations. We take a personalized approach to recruitment, and goals to identify the best candidates for their job openings."
      },
    ]
  },
  "dynatrace-performance-monitoring": {
    desc: "We leverage high-tech emerging technologies in your business to accomplish your goals.",
    title1: "Our Technological Services",
    img: "/images/services/emerging.png",
    para1: "Emerging technologies are giving businesses the power to innovate and adapt in a rapidly evolving virtual era, allowing them to maintain a competitive edge and succeed. Techthrivesystem has assisted several businesses in achieving increased efficiency and business adaptability by delivering ideal solutions. Let's work together to make the most of emerging technology!",
    title2: "Our solutions with emerging technologies",
    items: [
      {
        link: true,
        title: "Data Science",
        desc: "We develop innovative models and systems in accordance with the particular demands of our clients to make sure their needs are addressed. We provide a unified approach to strategy optimisation by combining our knowledge in behavioural analysis, time series modelling, and mathematical optimisation."
      },
      {
        link: true,
        title: "AI and Machine Learning",
        desc: "Our AI and Machine Learning services provide businesses with access to machine learning and AI algorithms to automate processes, analyse data, and improve decision-making. These services can be used in areas such as natural language processing, computer vision, and predictive analytics."
      },
      {
        link: true,
        title: "Extended Reality",
        desc: "XR has the ability to transform the way people interact with the world and has the potential to revolutionise many industries as it enables businesses to create new and innovative ways of engaging with customers, improving efficiency, and more, making it a crucial aspect of the digital transformation journey."
      },
      {
        link: true,
        title: "Blockchain",
        desc: "Businesses can quickly and effortlessly develop, test, and deploy block chain technology using Techthrivesystem's Blockchain Services without having to spend a lot of money on expensive infrastructure. Also, we provide a number of services, such as security, node management, and smart contract development."
      },
      {
        link: true,
        title: "Automation",
        desc: "Our team of skilled experts specialises in creating and executing bespoke automation solutions that are catered to each client's specific requirements. We use cutting-edge technology and industry best practises to automate operations, boost productivity, and cut down on mistakes."
      },
    ]
  },
  "chatbot-development": {
    desc: "Elevate your online presence with our leading-edge digital marketing strategies.",
    title1: "Marketing Services",
    img: "/images/services/digital.png",
    para1: "Techthrivesystem is a specialized agency that offers a range of services to help businesses promote their products or services online. Our goal is to help businesses increase their online visibility, attract more customers, and ultimately, grow their revenue. With the constantly evolving digital landscape, a digital marketing service providing company keeps up with the latest trends and best practices to ensure that their clients stay ahead of the competition.",
    title2: "How do our services benefit businesses?",
    items: [
      {
        link: false,
        title: "Increased Brand Awareness",
        desc: "We can help businesses reach a wider audience through various online channels, such as social media, search engines, and email marketing, leading to increased brand visibility and awareness."
      },
      {
        link: false,
        title: "Targeted Marketing",
        desc: "Our digital marketing services allow businesses to target specific audiences based on demographics, interests, and behavior. This makes marketing initiatives more effective and efficient."
      },
      {
        link: false,
        title: "Cost-Effective",
        desc: "We can be more cost-effective than traditional advertising methods like TV and print ads, as this allows businesses to reach a wider audience with a smaller budget."
      },
      {
        link: false,
        title: "Higher Conversion Rates",
        desc: "By targeting the right audience with the right message, we can help businesses improve their conversion rates and increase sales."
      },
      {
        link: false,
        title: "Competitive Advantage",
        desc: "Businesses that invest in our digital marketing services can gain a competitive advantage over their competitors who rely solely on traditional marketing methods."
      },
    ]
  },
  "automation-services": {
    desc: "Elevate your online presence with our leading-edge digital marketing strategies.",
    title1: "Marketing Services",
    img: "/images/services/digital.png",
    para1: "Techthrivesystem is a specialized agency that offers a range of services to help businesses promote their products or services online. Our goal is to help businesses increase their online visibility, attract more customers, and ultimately, grow their revenue. With the constantly evolving digital landscape, a digital marketing service providing company keeps up with the latest trends and best practices to ensure that their clients stay ahead of the competition.",
    title2: "How do our services benefit businesses?",
    items: [
      {
        link: false,
        title: "Increased Brand Awareness",
        desc: "We can help businesses reach a wider audience through various online channels, such as social media, search engines, and email marketing, leading to increased brand visibility and awareness."
      },
      {
        link: false,
        title: "Targeted Marketing",
        desc: "Our digital marketing services allow businesses to target specific audiences based on demographics, interests, and behavior. This makes marketing initiatives more effective and efficient."
      },
      {
        link: false,
        title: "Cost-Effective",
        desc: "We can be more cost-effective than traditional advertising methods like TV and print ads, as this allows businesses to reach a wider audience with a smaller budget."
      },
      {
        link: false,
        title: "Higher Conversion Rates",
        desc: "By targeting the right audience with the right message, we can help businesses improve their conversion rates and increase sales."
      },
      {
        link: false,
        title: "Competitive Advantage",
        desc: "Businesses that invest in our digital marketing services can gain a competitive advantage over their competitors who rely solely on traditional marketing methods."
      },
    ]
  },
  "web-designing": {
    desc: "Elevate your online presence with our leading-edge digital marketing strategies.",
    title1: "Marketing Services",
    img: "/images/services/digital.png",
    para1: "Techthrivesystem is a specialized agency that offers a range of services to help businesses promote their products or services online. Our goal is to help businesses increase their online visibility, attract more customers, and ultimately, grow their revenue. With the constantly evolving digital landscape, a digital marketing service providing company keeps up with the latest trends and best practices to ensure that their clients stay ahead of the competition.",
    title2: "How do our services benefit businesses?",
    items: [
      {
        link: false,
        title: "Increased Brand Awareness",
        desc: "We can help businesses reach a wider audience through various online channels, such as social media, search engines, and email marketing, leading to increased brand visibility and awareness."
      },
      {
        link: false,
        title: "Targeted Marketing",
        desc: "Our digital marketing services allow businesses to target specific audiences based on demographics, interests, and behavior. This makes marketing initiatives more effective and efficient."
      },
      {
        link: false,
        title: "Cost-Effective",
        desc: "We can be more cost-effective than traditional advertising methods like TV and print ads, as this allows businesses to reach a wider audience with a smaller budget."
      },
      {
        link: false,
        title: "Higher Conversion Rates",
        desc: "By targeting the right audience with the right message, we can help businesses improve their conversion rates and increase sales."
      },
      {
        link: false,
        title: "Competitive Advantage",
        desc: "Businesses that invest in our digital marketing services can gain a competitive advantage over their competitors who rely solely on traditional marketing methods."
      },
    ]
  },
}

const ServiceComponent = ({ params }: { params: { service: string } }) => {
  useEffect(() => {
    Aos.init({
      duration: 1000, // Animation duration
    });
  }, []);
  const serviceName = params.service

  if (Object.keys(data).includes(serviceName) === false) return <div className='h-full w-full overflow-hidden pb-12'>
    <p className='uppercase text-md md:text-4xl font-semibold text-red-600 mt-10 text-center'>404 - Service not exits</p>
  </div>
  const serviceData = data[serviceName as ServiceKey];
  return (
    <div className='h-full w-full overflow-hidden pb-12'>
      <PageHeader title={serviceName} desc={serviceData.desc} />
      <div className="md:p-16 p-4 grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
        <div>
          <h2 className='md:text-5xl text-4xl font-bold'><span className='text-[#1A1F65]'>{serviceData.title1} </span></h2>
          <p className="mt-4 text-gray-600 text-lg">{serviceData.para1}</p>
        </div>
        <div className="mt-12 md:mt-0">
          <img src={serviceData.img} alt="About Us Image" className="object-cover rounded-lg shadow-md" />
        </div>
      </div>
      <div className='xs:p-4 sm:p-8 md:16 gap-4 md:gap-8 flex flex-col'>
        <h2 className='text-4xl text-center font-bold text-[#211E6D]'>{serviceData.title2}</h2>
        <div className='grid gap-4 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto'>
          {
            serviceData.items.map((item, i) => {
              return(
                <Link key={i} href={item.link ? `/services/${serviceName.toLowerCase().replaceAll(" ", "-")}/${item.title.toLowerCase().replaceAll("/", "-").replaceAll(" ", "-")}` : `/services/${serviceName.toLowerCase().replaceAll(" ", "-")}`}>
                  <div className='bg-white border border-gray-200 h-full rounded-lg p-3 flex flex-col gap-1 cursor-pointer hover:shadow-lg transition-shadow' data-aos="fade-up" data-aos-delay="300">
                        {/* <img src="/images/usps/delivery.png" className='h-12 w-fit' alt="" /> */}
                        <p className='text-xl font-semibold'>
                            <span>
                                {item.title}
                            </span>
                        </p>
                        <span className='h-1 w-14 rounded bg-[#211E6D]'></span>
                        <p className='mt-3 text-left border-l-[3px] -ml-3 pl-3 flex-1'>
                            {item.desc}
                        </p>
                        {
                          item.link && 
                          <p className="flex mt-2 w-fit items-center px-2 py-[0.4rem] text-sm text-center font-semibold bg-[#0f588c] hover:bg-sky-700 transition-all text-white rounded-2xl shadow-lg">
                            Get more detail
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                          </p>
                        }
                    </div>
                </Link>
              )
            })
          }
            </div>
      </div>
    </div>
  )
}

export default ServiceComponent
