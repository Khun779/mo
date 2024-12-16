import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Hero17 from '../components/hero17'
import Features24 from '../components/features24'
import CTA26 from '../components/cta26'
import Features25 from '../components/features25'
import Pricing14 from '../components/pricing14'
import Steps2 from '../components/steps2'
import Testimonial17 from '../components/testimonial17'
import Contact10 from '../components/contact10'
import Footer4 from '../components/footer4'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Open Gullible Guanaco</title>
        <meta property="og:title" content="Open Gullible Guanaco" />
      </Helmet>
      <Navbar8
        page4Description={
          <Fragment>
            <span className="home-text100">
              Download my resume for more details
            </span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text101">Hire Me</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text102">Portfolio</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="home-text103">About Me</span>
          </Fragment>
        }
        link1={
          <Fragment>
            <span className="home-text104">About</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="home-text105">Resume</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="home-text106">Portfolio</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text107">Resume</span>
          </Fragment>
        }
        page1Description={
          <Fragment>
            <span className="home-text108">
              Learn more about my skills and experience
            </span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="home-text109">
              Check out some of my latest projects
            </span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text110">Contact</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="home-text111">Contact Me</span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="home-text112">
              Get in touch with me for project inquiries
            </span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text113">View Projects</span>
          </Fragment>
        }
      ></Navbar8>
      <Hero17
        action2={
          <Fragment>
            <span className="home-text114">Secondary action</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text115">Main action</span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text116">
              Medium length hero headline goes here
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text117">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat.
            </span>
          </Fragment>
        }
      ></Hero17>
      <Features24
        feature3Description={
          <Fragment>
            <span className="home-text118">
              Check out my latest projects below.
            </span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text119">View Projects</span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text120">
              Contact me for potential collaborations.
            </span>
          </Fragment>
        }
        feature1Title={
          <Fragment>
            <span className="home-text121">Hire Me</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text122">
              Experienced full-stack developer available for new opportunities.
            </span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text123">Contact</span>
          </Fragment>
        }
      ></Features24>
      <CTA26
        heading1={
          <Fragment>
            <span className="home-text124">Hire Me</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text125">
              Ready to take your project to the next level?
            </span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text126">Contact Me</span>
          </Fragment>
        }
      ></CTA26>
      <Features25
        feature3Description={
          <Fragment>
            <span className="home-text127">
              Implementing best coding practices to ensure maintainability,
              scalability, and performance of projects.
            </span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text128">
              Proficient in both front-end and back-end technologies, creating
              seamless and efficient web applications.
            </span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text129">Responsive Design</span>
          </Fragment>
        }
        feature1Title={
          <Fragment>
            <span className="home-text130">
              Full-Stack Development Expertise
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text131">
              Crafting websites that adapt to various screen sizes and devices
              for optimal user experience.
            </span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text132">Clean Code Practices</span>
          </Fragment>
        }
      ></Features25>
      <Pricing14
        plan3Price={
          <Fragment>
            <span className="home-text133">$29.99/month</span>
          </Fragment>
        }
        plan3Action={
          <Fragment>
            <span className="home-text134">Get Started</span>
          </Fragment>
        }
        plan11={
          <Fragment>
            <span className="home-text135">Basic plan</span>
          </Fragment>
        }
        plan1Action={
          <Fragment>
            <span className="home-text136">Get Started</span>
          </Fragment>
        }
        plan31={
          <Fragment>
            <span className="home-text137">Enterprise plan</span>
          </Fragment>
        }
        plan3Feature41={
          <Fragment>
            <span className="home-text138">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature2={
          <Fragment>
            <span className="home-text139">SEO Optimization</span>
          </Fragment>
        }
        plan2Feature11={
          <Fragment>
            <span className="home-text140">
              Example value for plan2Feature11
            </span>
          </Fragment>
        }
        plan3Feature51={
          <Fragment>
            <span className="home-text141">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature41={
          <Fragment>
            <span className="home-text142">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature2={
          <Fragment>
            <span className="home-text143">SEO Optimization</span>
          </Fragment>
        }
        plan3Feature21={
          <Fragment>
            <span className="home-text144">
              + Example value for plan3Feature21
            </span>
          </Fragment>
        }
        plan2Feature4={
          <Fragment>
            <span className="home-text145">Custom Analytics</span>
          </Fragment>
        }
        plan2Yearly={
          <Fragment>
            <span className="home-text146">Save 20% with yearly billing</span>
          </Fragment>
        }
        plan1Action1={
          <Fragment>
            <span className="home-text147">Subscribe Now</span>
          </Fragment>
        }
        plan2Action={
          <Fragment>
            <span className="home-text148">Get Started</span>
          </Fragment>
        }
        plan3Feature1={
          <Fragment>
            <span className="home-text149">+ Responsive Design</span>
          </Fragment>
        }
        plan2Feature3={
          <Fragment>
            <span className="home-text150">E-commerce Integration</span>
          </Fragment>
        }
        plan1Price1={
          <Fragment>
            <span className="home-text151">$99.99/year</span>
          </Fragment>
        }
        plan2={
          <Fragment>
            <span className="home-text152">Standard Plan</span>
          </Fragment>
        }
        plan2Feature21={
          <Fragment>
            <span className="home-text153">
              Example value for plan2Feature21
            </span>
          </Fragment>
        }
        plan2Action1={
          <Fragment>
            <span className="home-text154">Subscribe Now</span>
          </Fragment>
        }
        plan3Feature2={
          <Fragment>
            <span className="home-text155">+ SEO Optimization</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text156">
              Choose the perfect plan for you
            </span>
          </Fragment>
        }
        plan2Feature1={
          <Fragment>
            <span className="home-text157">Responsive Design</span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text158">Pricing plan</span>
          </Fragment>
        }
        plan3Feature31={
          <Fragment>
            <span className="home-text159">
              + Example value for plan3Feature31
            </span>
          </Fragment>
        }
        plan1={
          <Fragment>
            <span className="home-text160">Basic Plan</span>
          </Fragment>
        }
        plan21={
          <Fragment>
            <span className="home-text161">Business plan</span>
          </Fragment>
        }
        plan1Feature11={
          <Fragment>
            <span className="home-text162">
              Example value for plan1Feature11
            </span>
          </Fragment>
        }
        plan1Feature21={
          <Fragment>
            <span className="home-text163">
              Example value for plan1Feature21
            </span>
          </Fragment>
        }
        plan3Feature5={
          <Fragment>
            <span className="home-text164">+ Priority Support</span>
          </Fragment>
        }
        plan2Yearly1={
          <Fragment>
            <span className="home-text165">Billed annually at $199.99</span>
          </Fragment>
        }
        plan2Price={
          <Fragment>
            <span className="home-text166">$19.99/month</span>
          </Fragment>
        }
        plan3Yearly1={
          <Fragment>
            <span className="home-text167">$299.99 billed annually</span>
          </Fragment>
        }
        plan2Feature31={
          <Fragment>
            <span className="home-text168">
              Example value for plan2Feature31
            </span>
          </Fragment>
        }
        plan3Feature11={
          <Fragment>
            <span className="home-text169">
              + Example value for plan3Feature11
            </span>
          </Fragment>
        }
        plan1Yearly1={
          <Fragment>
            <span className="home-text170">Billed annually at $99.99</span>
          </Fragment>
        }
        plan2Price1={
          <Fragment>
            <span className="home-text171">$199.99/year</span>
          </Fragment>
        }
        plan3Yearly={
          <Fragment>
            <span className="home-text172">Save 20% with yearly billing</span>
          </Fragment>
        }
        plan3Feature4={
          <Fragment>
            <span className="home-text173">+ Custom Analytics</span>
          </Fragment>
        }
        plan3Price1={
          <Fragment>
            <span className="home-text174">$299.99/year</span>
          </Fragment>
        }
        plan1Feature31={
          <Fragment>
            <span className="home-text175">
              Example value for plan1Feature31
            </span>
          </Fragment>
        }
        plan1Feature3={
          <Fragment>
            <span className="home-text176">24/7 Support</span>
          </Fragment>
        }
        plan1Yearly={
          <Fragment>
            <span className="home-text177">Save 20% with yearly billing</span>
          </Fragment>
        }
        plan1Feature1={
          <Fragment>
            <span className="home-text178">Responsive Design</span>
          </Fragment>
        }
        plan3Feature3={
          <Fragment>
            <span className="home-text179">+ E-commerce Integration</span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="home-text180">
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
          </Fragment>
        }
        plan3Action1={
          <Fragment>
            <span className="home-text183">Subscribe Now</span>
          </Fragment>
        }
        plan1Price={
          <Fragment>
            <span className="home-text184">$9.99/month</span>
          </Fragment>
        }
        plan3={
          <Fragment>
            <span className="home-text185">Premium Plan</span>
          </Fragment>
        }
      ></Pricing14>
      <Steps2
        step1Description={
          <Fragment>
            <span className="home-text186">
              Welcome to my portfolio website! I am a full-stack developer
              passionate about creating innovative solutions.
            </span>
          </Fragment>
        }
        step3Description={
          <Fragment>
            <span className="home-text187">
              Check out some of my latest projects below with live demos and
              code links.
            </span>
          </Fragment>
        }
        step2Title={
          <Fragment>
            <span className="home-text188">Skills</span>
          </Fragment>
        }
        step2Description={
          <Fragment>
            <span className="home-text189">
              Proficient in HTML, CSS, JavaScript, React, Node.js, Express,
              MongoDB, and more.
            </span>
          </Fragment>
        }
        step1Title={
          <Fragment>
            <span className="home-text190">Introduction</span>
          </Fragment>
        }
        step3Title={
          <Fragment>
            <span className="home-text191">Portfolio</span>
          </Fragment>
        }
        step4Description={
          <Fragment>
            <span className="home-text192">
              Feel free to reach out via the contact form or connect with me on
              GitHub and LinkedIn.
            </span>
          </Fragment>
        }
        step4Title={
          <Fragment>
            <span className="home-text193">Contact Me</span>
          </Fragment>
        }
      ></Steps2>
      <Testimonial17
        author2Position={
          <Fragment>
            <span className="home-text194">CTO, Company XYZ</span>
          </Fragment>
        }
        author1Position={
          <Fragment>
            <span className="home-text195">CEO, Company ABC</span>
          </Fragment>
        }
        author1Name={
          <Fragment>
            <span className="home-text196">John Doe</span>
          </Fragment>
        }
        author3Name={
          <Fragment>
            <span className="home-text197">David Johnson</span>
          </Fragment>
        }
        review2={
          <Fragment>
            <span className="home-text198">
              [Your Name] exceeded our expectations with their work. They
              delivered quality code and were always available to address any
              concerns. Looking forward to working together again!
            </span>
          </Fragment>
        }
        author2Name={
          <Fragment>
            <span className="home-text199">Jane Smith</span>
          </Fragment>
        }
        author4Position={
          <Fragment>
            <span className="home-text200">Lead Developer, Tech Co.</span>
          </Fragment>
        }
        author4Name={
          <Fragment>
            <span className="home-text201">Sarah Williams</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text202">
              Read what my clients have to say about working with me.
            </span>
          </Fragment>
        }
        author3Position={
          <Fragment>
            <span className="home-text203">Founder, Startup123</span>
          </Fragment>
        }
        review1={
          <Fragment>
            <span className="home-text204">
              Working with [Your Name] was a fantastic experience. Their
              attention to detail and problem-solving skills are top-notch. I
              highly recommend them for any project!
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text205">Testimonials</span>
          </Fragment>
        }
        review3={
          <Fragment>
            <span className="home-text206">
              I&apos;m impressed by [Your Name]&apos;s technical expertise and
              professionalism. They played a key role in the success of our
              project. I would definitely hire them again.
            </span>
          </Fragment>
        }
        review4={
          <Fragment>
            <span className="home-text207">
              [Your Name] is a talented developer with a great eye for design.
              Their contributions were invaluable to our team. I highly
              recommend them for any web development project.
            </span>
          </Fragment>
        }
      ></Testimonial17>
      <Contact10
        content1={
          <Fragment>
            <span className="home-text208">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in ero.
            </span>
          </Fragment>
        }
        location1Description={
          <Fragment>
            <span className="home-text209">
              Feel free to reach out via email for any inquiries or
              opportunities.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text210">Locations</span>
          </Fragment>
        }
        location2Description={
          <Fragment>
            <span className="home-text211">
              You can also contact me directly by phone. Let&apos;s connect!
            </span>
          </Fragment>
        }
        location1={
          <Fragment>
            <span className="home-text212">Email: example@email.com</span>
          </Fragment>
        }
        location2={
          <Fragment>
            <span className="home-text213">Phone: +1234567890</span>
          </Fragment>
        }
      ></Contact10>
      <Footer4
        link5={
          <Fragment>
            <span className="home-text214">Link 5</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text215">Link 3</span>
          </Fragment>
        }
        link1={
          <Fragment>
            <span className="home-text216">Link 1</span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="home-text217">Terms of Service</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text218">Link 2</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text219">Link 4</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="home-text220">Cookies Settings</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="home-text221">Privacy Policy</span>
          </Fragment>
        }
      ></Footer4>
    </div>
  )
}

export default Home
