const blogsData = [
  {
    title: "The Remote Work Productivity Tricks and Tools You Need to Know",
    image:
      "https://trackingtime.co/wp-content/uploads/2022/08/Remote-Work-Productivity-Tricks-and-Tools.svg",
    bg: "#acb9f0",
    link: "https://trackingtime.co/blog/the-remote-work-productivity-tricks-and-tools-you-need-to-know.html",
    id: 1,
  },
  {
    title: "5 Best Ways to Reduce and Manage Overtime for Employees",
    image: "https://trackingtime.co/wp-content/uploads/2019/12/generico-1.svg",
    bg: "#01c3a9",
    link: "https://trackingtime.co/blog/5-best-ways-to-reduce-and-manage-overtime-for-employees.html",
    id: 2,
  },
  {
    title: "Must-Have Digital Marketing Agency Tools in 2022",
    image:
      "https://trackingtime.co/wp-content/uploads/2022/07/digital-marketing-agency-tools.svg",
    bg: "#01c3a9",
    link: "https://trackingtime.co/best-practices/must-have-digital-marketing-agency-tools-in-2022.html",
    id: 3,
  },
  {
    title:
      "How Time Tracking Can Solve Your Freelancing Productivity and Budget Problems",
    image:
      "https://trackingtime.co/wp-content/uploads/2022/07/Solve-Your-Freelancing-Productivity-and-Budget-Problems.svg",
    bg: "#acb9f0",
    link: "https://trackingtime.co/best-practices/how-time-tracking-can-solve-your-freelancing-productivity-and-budget-problems.html",
    id: 4,
  },
  {
    title:
      "Benefits Of Integrating Time Tracking Software With Your Access Control System",
    image:
      "https://trackingtime.co/wp-content/uploads/2022/07/Time-tracking-and-ERP-system-1.svg",
    bg: "#ff6164",
    link: "https://trackingtime.co/best-practices/integrating-time-tracking-with-access-control-system.html",
    id: 5,
  },
  {
    title: "10 Time Management Strategies to Boost Your Team’s Efficiency",
    image:
      "https://trackingtime.co/wp-content/uploads/2022/06/Time-Management-Strategies-to-Boost-your-Teams-Efficiency.svg",
    bg: "#acb9f0",
    link: "https://trackingtime.co/best-practices/time-management-strategies-to-boost-your-teams-efficiency.html",
    id: 6,
  },
  {
    title:
      "7 Best Management Practices to Improve Employee Productivity at Your Workplace",
    image:
      "https://trackingtime.co/wp-content/uploads/2022/05/Management-Practices-to-Improve-Employee-Productivity.svg",
    bg: "#555f6e",
    link: "https://trackingtime.co/productivity/7-best-management-practices-to-improve-employee-productivity.html",
    id: 7,
  },
  {
    title:
      "How to Streamline Workflows to Skyrocket Conversions without Working Longer Hours?",
    image:
      "https://trackingtime.co/wp-content/uploads/2022/04/How-to-Streamline-Workflows-to-Skyrocket-Conversions.svg",
    bg: "#acb9f0",
    link: "https://trackingtime.co/best-practices/how-to-streamline-workflows-to-skyrocket-conversions-without-working-longer-hours.html",
    id: 8,
  },
  {
    title: "7 Ways to Build a Positive Company Culture with a Remote Team",
    image:
      "https://trackingtime.co/wp-content/uploads/2022/04/Positive-Company-Culture-with-a-Remote-Team.svg",
    bg: "#ffd54f",
    link: "https://trackingtime.co/remote-work/7-ways-to-build-a-positive-company-culture-with-a-remote-team.html",
    id: 9,
  },
  {
    title: "Should Your Company Implement a Hybrid Work Model?",
    image:
      "https://trackingtime.co/wp-content/uploads/2022/04/hybrid-work-model.svg",
    bg: "#ffd54f",
    link: "https://trackingtime.co/remote-work/should-your-company-implement-a-hybrid-work-model.html",
    id: 10,
  },
  {
    title: "10 Ways to Build Your Company’s Awesome & Innovative Work Culture",
    image:
      "https://trackingtime.co/wp-content/uploads/2022/03/Awesome-_-Innovative-Work-Culture.svg",
    bg: "#00c3a9",
    link: "https://trackingtime.co/best-practices/10-ways-to-build-your-companys-awesome-innovative-work-culture.html",
    id: 11,
  },
  {
    title: "Best Practices for Internal Project Workflow Management",
    image:
      "https://trackingtime.co/wp-content/uploads/2022/03/Internal-Project-Workflow-Management.svg",
    bg: "#ff6164",
    link: "https://trackingtime.co/best-practices/best-practices-for-internal-project-workflow-management.html",
    id: 12,
  },
  {
    title: "Accounts Receivable Automation as a Time Saver for SMBs",
    image:
      "https://trackingtime.co/wp-content/uploads/2022/02/Automated-accounts-receivable-functionalities.svg",
    bg: "#00c3a9",
    link: "https://trackingtime.co/best-practices/accounts-receivable-automation-as-a-time-saver-for-smbs.html",
    id: 13,
  },
  {
    title: "Why Project Tracking Is Essential in Team Success",
    image:
      "https://trackingtime.co/wp-content/uploads/2022/02/Project-tracking.svg",
    bg: "#ffd54f",
    link: "https://trackingtime.co/best-practices/why-project-tracking-is-essential-in-team-success.html",
    id: 14,
  },
  {
    title: "TrackingTime Product Updates: A Full Recap",
    image:
      "https://trackingtime.co/wp-content/uploads/2022/01/2021-mid-year.recap-1.svg",
    bg: "#ffd54f",
    link: "https://trackingtime.co/best-practices/trackingtime-product-updates-a-full-recap.html",
    id: 15,
  },
  {
    title: "5 Alternative Time-Saving Techniques to Boost Productivity",
    image:
      "https://trackingtime.co/wp-content/uploads/2021/11/Time-saving-techniques.svg",
    bg: "#63bae2",
    link: "https://trackingtime.co/productivity/5-alternative-time-saving-techniques-to-boost-productivity.html",
    id: 16,
  },
  {
    title: "How to Create Performance Improvement Plans for Remote Workers",
    image:
      "https://trackingtime.co/wp-content/uploads/2021/11/Performance-improvement-plans.svg",
    bg: "#abb9f0",
    link: "https://trackingtime.co/productivity/performance-improvement-plans-for-remote-workers.html",
    id: 17,
  },
  {
    title: "New in TrackingTime: Plan Your Projects with Timeline",
    image: "https://trackingtime.co/wp-content/uploads/2021/11/timeline.svg",
    bg: "#579ae2",
    link: "https://trackingtime.co/best-practices/new-in-trackingtime-plan-your-projects-with-timeline.html",
    id: 18,
  },
  {
    title:
      "Remote and Hybrid Team Productivity Hacks to Keep Your Projects On Track",
    image:
      "https://trackingtime.co/wp-content/uploads/2021/10/Remote-and-Hybrid-Team-Productivity-Hacks-1.svg",
    bg: "#63bae2",
    link: "https://trackingtime.co/remote-work/remote-and-hybrid-team-productivity-hacks-to-keep-your-projects-on-track.html",
    id: 19,
  },
  {
    title: "TrackingTime Product Updates: 2021 Recap",
    image:
      "https://trackingtime.co/wp-content/uploads/2021/09/2021-mid-year.recap_.svg",
    bg: "#ffd54f",
    link: "https://trackingtime.co/best-practices/trackingtime-product-updates-2021-recap.html",
    id: 20,
  },
  {
    title: "SEO Software Market Trends You Shouldn’t Ignore in 2021",
    image:
      "https://trackingtime.co/wp-content/uploads/2021/09/SEO-software-market-trends.svg",
    bg: "#ffd54f",
    link: "https://trackingtime.co/blog/seo-software-market-trends-you-shouldnt-ignore-in-2021.html",
    id: 21,
  },
  {
    title: "12 Effortless Ways to Improve Time Management Strategies",
    image:
      "https://trackingtime.co/wp-content/uploads/2021/08/Improve-time-management.svg",
    bg: "#555f6e",
    link: "https://trackingtime.co/productivity/12-effortless-ways-to-improve-time-management.html",
    id: 22,
  },
  {
    title:
      "Get a Clear Picture of What’s Getting Done: Project Management by TrackingTime",
    image:
      "https://trackingtime.co/wp-content/uploads/2021/07/PM-ProductUpdate.svg",
    bg: "#00c33a9",
    link: "https://trackingtime.co/best-practices/project-management-by-trackingtime.html",
    id: 23,
  },
  {
    title: "New Normal: Remote Work Trends to Watch Out in 2021 and Beyond",
    image:
      "https://trackingtime.co/wp-content/uploads/2021/07/Remote-Work-Trends-01.svg",
    bg: "#555f6e",
    link: "https://trackingtime.co/remote-work/new-normal-remote-work-trends-to-watch-out-in-2021-and-beyond.html",
    id: 24,
  },
  {
    title: "Simple and Free Productivity Tools for Business Teams",
    image:
      "https://trackingtime.co/wp-content/uploads/2021/06/simple-free-productivity-tools.svg",
    bg: "#ffd54f",
    link: "https://trackingtime.co/productivity/simple-and-free-productivity-tools-for-business-teams.html",
    id: 25,
  },
  {
    title: "6 Customer Experience Trends to Watch Out for in 2021",
    image:
      "https://trackingtime.co/wp-content/uploads/2021/05/customer-experience.svg",
    bg: "#63bae2",
    link: "https://trackingtime.co/best-practices/6-customer-experience-trends-to-watch-out-for-in-2021.html",
    id: 26,
  },
  {
    title: "3 Creative Hacks to Boost Employee Performance",
    image:
      "https://trackingtime.co/wp-content/uploads/2017/12/productivity-software-to-survive-digital-economy.svg",
    bg: "#00c3a9",
    link: "https://trackingtime.co/productivity/3-creative-hacks-to-boost-employee-performance.html",
    id: 27,
  },
  {
    title:
      "How to Get the Most Out of TrackingTime Integrations with 2021’s Top Project Management Tools",
    image:
      "https://trackingtime.co/wp-content/uploads/2021/04/Integrations-2021.svg",
    bg: "#579ae2",
    link: "https://trackingtime.co/best-practices/how-to-get-the-most-out-of-trackingtime-integrations.html",
    id: 28,
  },
  {
    title:
      "The Big Marketing Clouds at a Glance: Adobe, Salesforce, Marketo and More",
    image:
      "https://trackingtime.co/wp-content/uploads/2021/03/AdobeSalesforceMarketo.svg",
    bg: "#ff6164",
    link: "https://trackingtime.co/productivity/big-marketing-clouds.html",
    id: 29,
  },
  {
    title: "Marketing Automation Tools to Try in 2021",
    image:
      "https://trackingtime.co/wp-content/uploads/2021/03/MarketingAutomationToolsToTry2021.svg",
    bg: "#579ae2",
    link: "https://trackingtime.co/productivity/marketing-automation-tools-to-try-in-2021.html",
    id: 30,
  },
];

const productivityData = [
  {
    title: "5 Best Ways to Reduce and Manage Overtime for Employees",
    image: "https://trackingtime.co/wp-content/uploads/2019/12/generico-1.svg",
    bg: "#ffd54f",
    link: "https://trackingtime.co/blog/5-best-ways-to-reduce-and-manage-overtime-for-employees.html",
    id: 1,
  },
  {
    title: "Hybrid Work Productivity: 5 Metrics You Should Track",
    image:
      "https://trackingtime.co/wp-content/uploads/2022/05/Hybrid-Work-Productivity.svg",
    bg: "#01c3a9",
    link: "https://trackingtime.co/productivity/hybrid-work-productivity-5-metrics-you-should-track.html",
    id: 2,
  },
  {
    title: "10 Smart Productivity Hacks You Should Know About",
    image:
      "https://trackingtime.co/wp-content/uploads/2022/05/Smart-Productivity-Hacks.svg",
    bg: "#ff6164",
    link: "https://trackingtime.co/productivity/10-smart-productivity-hacks-you-should-know-about.html",
    id: 3,
  },
  {
    title:
      "7 Best Management Practices to Improve Employee Productivity at Your Workplace",
    image:
      "https://trackingtime.co/wp-content/uploads/2022/05/Management-Practices-to-Improve-Employee-Productivity.svg",
    bg: "#555f6e",
    link: "https://trackingtime.co/productivity/7-best-management-practices-to-improve-employee-productivity.html",
    id: 4,
  },
  {
    title: "The Impact of Work Environment on Productivity: 10 Factors",
    image:
      "https://trackingtime.co/wp-content/uploads/2022/01/Impact-of-work-environment.svg",
    bg: "#579ae2",
    link: "https://trackingtime.co/productivity/the-impact-of-work-environment-on-productivity-10-factors.html",
    id: 5,
  },
  {
    title: " Remote Work Productivity Tips to Motivate Your Teams",
    image:
      "https://trackingtime.co/wp-content/uploads/2022/01/Remote-work-productivity.svg",
    bg: "#ffd54f",
    link: "https://trackingtime.co/productivity/7-remote-work-productivity-tips-to-motivate-your-teams.html",
    id: 6,
  },
  {
    title: "How to Improve Employee Productivity While Working Remotely?",
    image:
      "https://trackingtime.co/wp-content/uploads/2021/12/freelancing-productivity-and-budget-problems-1.svg",
    bg: "#00c3a9",
    link: "https://trackingtime.co/productivity/how-to-improve-employee-productivity-while-working-remotely.html",
    id: 7,
  },
  {
    title: "How to Plan Productive Project Meetings without Wasting Time",
    image:
      "https://trackingtime.co/wp-content/uploads/2021/11/Productive-project-meetings.svg",
    bg: "#abb9f0",
    link: "https://trackingtime.co/productivity/plan-productive-project-meetings-without-wasting-time.html",
    id: 8,
  },
  {
    title: "5 Alternative Time-Saving Techniques to Boost Productivity",
    image:
      "https://trackingtime.co/wp-content/uploads/2021/11/Time-saving-techniques.svg",
    bg: "#63bae2",
    link: "https://trackingtime.co/productivity/5-alternative-time-saving-techniques-to-boost-productivity.html",
    id: 9,
  },
  {
    title: "How to Create Performance Improvement Plans for Remote Workers",
    image:
      "https://trackingtime.co/wp-content/uploads/2021/11/Performance-improvement-plans.svg",
    bg: "#abb9f0",
    link: "https://trackingtime.co/productivity/performance-improvement-plans-for-remote-workers.html",
    id: 10,
  },
  {
    title: "5 Reasons Why Tracking Time Enhances Performance",
    image:
      "https://trackingtime.co/wp-content/uploads/2021/08/Tracking-Time-enhances-performance.svg",
    bg: "#ffd54f",
    link: "https://trackingtime.co/productivity/5-reasons-why-tracking-time-enhances-performance.html",
    id: 11,
  },
  {
    title: "12 Effortless Ways to Improve Time Management Strategies",
    image:
      "https://trackingtime.co/wp-content/uploads/2021/08/Improve-time-management.svg",
    bg: "#555f6e",
    link: "https://trackingtime.co/productivity/12-effortless-ways-to-improve-time-management.html",
    id: 12,
  },
  {
    title: "How HR Automation is Making a Difference in Business",
    image:
      "https://trackingtime.co/wp-content/uploads/2021/07/HR-Automation-Making-a-Difference-01.svg",
    bg: "#00c3a9",
    link: "https://trackingtime.co/productivity/how-hr-automation-is-making-a-difference-in-business.html",
    id: 13,
  },
  {
    title: "7 Effective Ways to Increase Sales Team Productivity",
    image:
      "https://trackingtime.co/wp-content/uploads/2021/06/7WaysToIncreaseSalesTeamProductivity.svg",
    bg: "#abb9f0",
    link: "https://trackingtime.co/productivity/7-effective-ways-to-increase-sales-team-productivity.html",
    id: 14,
  },
  {
    title: "6 Tips to Manage Your Time Wisely as a Freelancer",
    image:
      "https://trackingtime.co/wp-content/uploads/2021/06/6TipsToManageTime-Freelance-1.svg",
    bg: "#579ae2",
    link: "https://trackingtime.co/productivity/6-tips-to-manage-your-time-wisely-as-a-freelancer.html",
    id: 15,
  },
  {
    title: "Simple and Free Productivity Tools for Business Teams",
    image:
      "https://trackingtime.co/wp-content/uploads/2021/06/simple-free-productivity-tools.svg",
    bg: "#ffd54f",
    link: "https://trackingtime.co/productivity/simple-and-free-productivity-tools-for-business-teams.html",
    id: 16,
  },
  {
    title: "3 Creative Hacks to Boost Employee Performance",
    image:
      "https://trackingtime.co/wp-content/uploads/2017/12/productivity-software-to-survive-digital-economy.svg",
    bg: "#00c3a9",
    link: "https://trackingtime.co/productivity/3-creative-hacks-to-boost-employee-performance.html",
    id: 17,
  },
  {
    title: "Improving Time Tracking Routine as a Marketer",
    image:
      "https://trackingtime.co/wp-content/uploads/2021/04/improve-time-tracking-routine-marketer.svg",
    bg: "#ffd54f",
    link: "https://trackingtime.co/productivity/improving-time-tracking-routing-as-a-marketer.html",
    id: 18,
  },
  {
    title:
      "The Big Marketing Clouds at a Glance: Adobe, Salesforce, Marketo and More",
    image:
      "https://trackingtime.co/wp-content/uploads/2021/03/AdobeSalesforceMarketo.svg",
    bg: "#ff6164",
    link: "https://trackingtime.co/productivity/big-marketing-clouds.html",
    id: 19,
  },
  {
    title: "Marketing Automation Tools to Try in 2021",
    image:
      "https://trackingtime.co/wp-content/uploads/2021/03/MarketingAutomationToolsToTry2021.svg",
    bg: "#579ae2",
    link: "https://trackingtime.co/productivity/marketing-automation-tools-to-try-in-2021.html",
    id: 20,
  },
  {
    title:
      "CRM Software: Boost Your Company’s Productivity in Times of Pandemic",
    image:
      "https://trackingtime.co/wp-content/uploads/2021/03/SoftwareCRM-Productividad-pandemia-1.svg",
    bg: "#555f6e",
    link: "https://trackingtime.co/productivity/crm-software-boost-productivity-in-a-pandemic.html",
    id: 21,
  },
];

const remoteWorkData = [
  {
    title: "The Remote Work Productivity Tricks and Tools You Need to Know",
    image:
      "https://trackingtime.co/wp-content/uploads/2022/08/Remote-Work-Productivity-Tricks-and-Tools.svg",
    bg: "#acb9f0",
    link: "https://trackingtime.co/blog/the-remote-work-productivity-tricks-and-tools-you-need-to-know.html",
    id: 1,
  },
  {
    title: "Work Productivity Best Practices for Your Remote Team",
    image:
      "https://trackingtime.co/wp-content/uploads/2022/04/Online-Communities.svg",
    bg: "#ff6164",
    link: "https://trackingtime.co/remote-work/work-productivity-best-practices-for-your-remote-team.html",
    id: 2,
  },
  {
    title: "7 Ways to Build a Positive Company Culture with a Remote Team",
    image:
      "https://trackingtime.co/wp-content/uploads/2022/04/Positive-Company-Culture-with-a-Remote-Team.svg",
    bg: "#ffd54f",
    link: "https://trackingtime.co/remote-work/7-ways-to-build-a-positive-company-culture-with-a-remote-team.html",
    id: 3,
  },
  {
    title: "Should Your Company Implement a Hybrid Work Model?",
    image:
      "https://trackingtime.co/wp-content/uploads/2022/04/hybrid-work-model.svg",
    bg: "#ffd54f",
    link: "https://trackingtime.co/remote-work/should-your-company-implement-a-hybrid-work-model.html",
    id: 4,
  },
  {
    title: "How to Track the Performance of Your Remote Team",
    image:
      "https://trackingtime.co/wp-content/uploads/2022/03/Performance-tracking-of-Your-Remote-Team.svg",
    bg: "#00c3a9",
    link: "https://trackingtime.co/remote-work/how-to-track-the-performance-of-your-remote-team.html",
    id: 5,
  },
  {
    title: "Hybrid Work: How to Collaborate Smartly",
    image:
      "https://trackingtime.co/wp-content/uploads/2022/02/Smart-collaboration-1.svg",
    bg: "#ff6164",
    link: "https://trackingtime.co/remote-work/hybrid-work-how-to-collaborate-smartly.html",
    id: 6,
  },
  {
    title: "7 Remote Work Productivity Tips to Motivate Your Teams",
    image:
      "https://trackingtime.co/wp-content/uploads/2022/01/Remote-work-productivity.svg",
    bg: "#ff6164",
    link: "https://trackingtime.co/productivity/7-remote-work-productivity-tips-to-motivate-your-teams.html",
    id: 7,
  },
  {
    title: "5 Communication Tools You Need for Remote Work",
    image:
      "https://trackingtime.co/wp-content/uploads/2021/12/5-communication-tools.svg",
    bg: "#ffd54f",
    link: "https://trackingtime.co/remote-work/5-communication-tools-you-need-for-remote-work.html",
    id: 8,
  },
  {
    title: "How to Improve Employee Productivity While Working Remotely?",
    image:
      "https://trackingtime.co/wp-content/uploads/2021/12/freelancing-productivity-and-budget-problems-1.svg",
    bg: "#00c3a9",
    link: "https://trackingtime.co/productivity/how-to-improve-employee-productivity-while-working-remotely.html",
    id: 9,
  },
  {
    title: "7 Best Practices to Lead and Manage Remote Teams",
    image:
      "https://trackingtime.co/wp-content/uploads/2021/11/Lead-and-manage-remote-teams.svg",
    bg: "#ffd54f",
    link: "https://trackingtime.co/remote-work/7-best-practices-to-lead-and-manage-remote-teams.html",
    id: 10,
  },
  {
    title:
      "Remote and Hybrid Team Productivity Hacks to Keep Your Projects On Track",
    image:
      "https://trackingtime.co/wp-content/uploads/2021/10/Remote-and-Hybrid-Team-Productivity-Hacks-1.svg",
    bg: "#63bae2",
    link: "https://trackingtime.co/remote-work/remote-and-hybrid-team-productivity-hacks-to-keep-your-projects-on-track.html",
    id: 11,
  },
  {
    title:
      "What Is the Impact of Increased Remote Working on the Language Industry?",
    image:
      "https://trackingtime.co/wp-content/uploads/2021/09/Remote-Working-Impacted-the-Language-Industry-01.svg",
    bg: "#579ae2",
    link: "https://trackingtime.co/remote-work/how-has-increased-remote-working-impacted-the-language-industry.html",
    id: 12,
  },
  {
    title: "New Normal: Remote Work Trends to Watch Out in 2021 and Beyond",
    image:
      "https://trackingtime.co/wp-content/uploads/2021/07/Remote-Work-Trends-01.svg",
    bg: "#555f6e",
    link: "https://trackingtime.co/remote-work/new-normal-remote-work-trends-to-watch-out-in-2021-and-beyond.html",
    id: 13,
  },
  {
    title:
      "Bringing the Office Home: Set up a Home Workspace That Inspires Productivity",
    image:
      "https://trackingtime.co/wp-content/uploads/2021/05/bringing-the-office-home-1.svg",
    bg: "#ff6164",
    link: "https://trackingtime.co/remote-work/home-workspace-that-inspires-productivity.html",
    id: 14,
  },
  {
    title:
      "A Practical Guide to Work from Home While Avoiding Burn Out and Keeping Your Sanity",
    image:
      "https://trackingtime.co/wp-content/uploads/2021/03/A-Practical-Guide-to-work-frome-home.svg",
    bg: "#00c3a9",
    link: "https://trackingtime.co/remote-work/a-practical-guide-to-work-from-home-while-avoiding-burn-out.html",
    id: 15,
  },
  {
    title: "Is Time Tracking Secure: Dos & Don’ts for Working from Home",
    image: "https://trackingtime.co/wp-content/uploads/2021/02/Dos-Donts.svg",
    bg: "#ffd54f",
    link: "https://trackingtime.co/remote-work/dos-donts-for-working-from-home.html",
    id: 16,
  },
  {
    title:
      "All-in-One Tools for Freelancers to Improve Time and Task Management in 2021",
    image:
      "https://trackingtime.co/wp-content/uploads/2020/12/SHARE-SmartConstruction-SaveTimeWithTechnology@2x-1.jpg",
    bg: "#579ae2",
    link: "https://trackingtime.co/remote-work/all-in-one-tools-for-freelancers-2021.html",
    id: 17,
  },
  {
    title:
      "5 Effective Tips on Running a Successful Business with Remote Employees",
    image:
      "https://trackingtime.co/wp-content/uploads/2020/10/5effectivetipsonrunningasuccesfullbusinesswithremoteemployees.svg",
    bg: "#ff6164",
    link: "https://trackingtime.co/remote-work/tips-on-running-a-successful-business-with-remote-employees.html",
    id: 18,
  },
  {
    title: "Google Workspace Is the New Solution for Team Collaboration",
    image:
      "https://trackingtime.co/wp-content/uploads/2020/10/GoogleSuite-TrackingTime-BOT-2.svg",
    bg: "#63bae2",
    link: "https://trackingtime.co/remote-work/google-workspace-new-solution-for-team-collaboration.html",
    id: 19,
  },
  {
    title:
      "The Digitalization Era and How It Has Reinvented Internal Communication",
    image:
      "https://trackingtime.co/wp-content/uploads/2020/09/The-digitalization-era-and-internal-communication-01.svg",
    bg: "#abb9f0",
    link: "https://trackingtime.co/remote-work/digitalization-and-internal-communication.html",
    id: 20,
  },
  {
    title: "5 Tips for Those Experiencing Remote Employee Burnout",
    image: "https://trackingtime.co/wp-content/uploads/2020/08/Chime-1.svg",
    bg: "#ffd54f",
    link: "https://trackingtime.co/remote-work/remote-employee-burnout.html",
    id: 21,
  },
  {
    title: "Accounting Software for Freelancers and SMBs",
    image:
      "https://trackingtime.co/wp-content/uploads/2020/07/DE-Fu%CC%88r-Freelancer-and-KMU.svg",
    bg: "#abb9f0",
    link: "https://trackingtime.co/remote-work/accounting-software-for-freelancers-and-smbs.html",
    id: 22,
  },
];

const bestPracticeData = [
  {
    title: "Must-Have Digital Marketing Agency Tools in 2022",
    image:
      "https://trackingtime.co/wp-content/uploads/2022/07/digital-marketing-agency-tools.svg",
    bg: "#00c3a9",
    link: "https://trackingtime.co/best-practices/must-have-digital-marketing-agency-tools-in-2022.html",
    id: 1,
  },
  {
    title:
      "How Time Tracking Can Solve Your Freelancing Productivity and Budget Problems",
    image:
      "https://trackingtime.co/wp-content/uploads/2022/07/Solve-Your-Freelancing-Productivity-and-Budget-Problems.svg",
    bg: "#acb9f0",
    link: "https://trackingtime.co/best-practices/how-time-tracking-can-solve-your-freelancing-productivity-and-budget-problems.html",
    id: 2,
  },
  {
    title:
      "Benefits Of Integrating Time Tracking Software With Your Access Control System",
    image:
      "https://trackingtime.co/wp-content/uploads/2022/07/Time-tracking-and-ERP-system-1.svg",
    bg: "#ff6164",
    link: "https://trackingtime.co/best-practices/integrating-time-tracking-with-access-control-system.html",
    id: 3,
  },
  {
    title: "10 Time Management Strategies to Boost Your Team’s Efficiency",
    image:
      "https://trackingtime.co/wp-content/uploads/2022/06/Time-Management-Strategies-to-Boost-your-Teams-Efficiency.svg",
    bg: "#00c3a9",
    link: "https://trackingtime.co/best-practices/time-management-strategies-to-boost-your-teams-efficiency.html",
    id: 4,
  },
  {
    title: "6 Best Practices for Employee Retention",
    image:
      "https://trackingtime.co/wp-content/uploads/2022/06/Employee-Retention.svg",
    bg: "#ffd54f",
    link: "https://trackingtime.co/best-practices/6-best-practices-for-employee-retention.html",
    id: 5,
  },
  {
    title: "A Guide to Employee Engagement: What Is It and Why It’s Important",
    image:
      "https://trackingtime.co/wp-content/uploads/2022/06/Employee-Engagement.svg",
    bg: "#ff6164",
    link: "https://trackingtime.co/best-practices/a-guide-to-employee-engagement-what-is-it-and-why-its-important.html",
    id: 6,
  },
  {
    title:
      "8 Mobile App Development and Design Trends to Watch Out for in 2022",
    image:
      "https://trackingtime.co/wp-content/uploads/2022/05/Mobile-App-Development-and-Design-Trends.svg",
    bg: "#ff6164",
    link: "https://trackingtime.co/best-practices/8-mobile-app-trends-to-watch-out-for-in-2022.html",
    id: 7,
  },
  {
    title: "Top 6 Employee Attendance Trackers to Consider in 2022",
    image:
      "https://trackingtime.co/wp-content/uploads/2022/05/Top-6-Employee-Attendance-Trackers.svg",
    bg: "#00c3a9",
    link: "https://trackingtime.co/best-practices/top-6-employee-attendance-trackers-to-consider-in-2022.html",
    id: 8,
  },
  {
    title:
      "How to Streamline Workflows to Skyrocket Conversions without Working Longer Hours?",
    image:
      "https://trackingtime.co/wp-content/uploads/2022/04/How-to-Streamline-Workflows-to-Skyrocket-Conversions.svg",
    bg: "#00c3a9",
    link: "https://trackingtime.co/best-practices/how-to-streamline-workflows-to-skyrocket-conversions-without-working-longer-hours.html",
    id: 9,
  },
  {
    title: "8 Skills That Make You a Powerful Digital Marketing Manager",
    image:
      "https://trackingtime.co/wp-content/uploads/2022/03/Powerful-Digital-Marketing-Manager.svg",
    bg: "#555f6e",
    link: "https://trackingtime.co/best-practices/8-skills-that-make-you-a-powerful-digital-marketing-manager.html",
    id: 10,
  },
  {
    title: "10 Ways to Build Your Company’s Awesome & Innovative Work Culture",
    image:
      "https://trackingtime.co/wp-content/uploads/2022/03/Awesome-_-Innovative-Work-Culture.svg",
    bg: "#00c3a9",
    link: "https://trackingtime.co/best-practices/10-ways-to-build-your-companys-awesome-innovative-work-culture.html",
    id: 11,
  },
  {
    title: "Best Practices for Internal Project Workflow Management",
    image:
      "https://trackingtime.co/wp-content/uploads/2022/03/Internal-Project-Workflow-Management.svg",
    bg: "#ff6164",
    link: "https://trackingtime.co/best-practices/best-practices-for-internal-project-workflow-management.html",
    id: 12,
  },
  {
    title: "Accounts Receivable Automation as a Time Saver for SMBs",
    image:
      "https://trackingtime.co/wp-content/uploads/2022/02/Automated-accounts-receivable-functionalities.svg",
    bg: "#00c3a9",
    link: "https://trackingtime.co/best-practices/accounts-receivable-automation-as-a-time-saver-for-smbs.html",
    id: 13,
  },
  {
    title: "Why Project Tracking Is Essential in Team Success",
    image:
      "https://trackingtime.co/wp-content/uploads/2022/02/Project-tracking.svg",
    bg: "#ffd54f",
    link: "https://trackingtime.co/best-practices/why-project-tracking-is-essential-in-team-success.html",
    id: 14,
  },
  {
    title: "Top 7 Video Marketing Analytics Tools",
    image:
      "https://trackingtime.co/wp-content/uploads/2022/01/Video-marketing-analytics-tools.svg",
    bg: "#ffd54f",
    link: "https://trackingtime.co/best-practices/top-7-video-marketing-analytics-tools.html",
    id: 15,
  },
  {
    title: "TrackingTime Product Updates: A Full Recap",
    image:
      "https://trackingtime.co/wp-content/uploads/2022/01/2021-mid-year.recap-1.svg",
    bg: "#63bae2",
    link: "https://trackingtime.co/best-practices/trackingtime-product-updates-a-full-recap.html",
    id: 16,
  },
  {
    title: "Transform Your Social Media into a High Performing Tool",
    image:
      "https://trackingtime.co/wp-content/uploads/2022/01/Transform-your-social-media.svg",
    bg: "#abb9f0",
    link: "https://trackingtime.co/best-practices/transform-your-social-media-into-a-high-performing-tool.html",
    id: 17,
  },
  {
    title: "Best Apps for Developers in 2021",
    image:
      "https://trackingtime.co/wp-content/uploads/2021/12/Best-software-and-tools-for-developer.svg",
    bg: "#555f6e",
    link: "https://trackingtime.co/best-practices/best-apps-for-developers-in-2021.html",
    id: 18,
  },
  {
    title: "What Is the Risk of Overwork and How to Control It",
    image:
      "https://trackingtime.co/wp-content/uploads/2021/12/Risk-of-overwork-and-control-it.svg",
    bg: "#ff6164",
    link: "https://trackingtime.co/best-practices/what-is-the-risk-of-overwork-and-how-to-control-it.html",
    id: 19,
  },
  {
    title: "10 Types of Employee Recognition and Rewards for Your Team",
    image:
      "https://trackingtime.co/wp-content/uploads/2021/12/Employee-recognition-and-rewards-for-team.svg",
    bg: "#abb9f0",
    link: "https://trackingtime.co/best-practices/10-types-of-employee-recognition-and-rewards-for-your-team.html",
    id: 20,
  },
];

const resourcesData = [
  {
    title: "Free Time Card Calculator",
    image:
      "https://trackingtime.co/wp-content/uploads/2020/09/free-time-card-calculator.svg",
    bg: "#abb9f0",
    link: "https://trackingtime.co/resources/free-time-card-calculator.html",
    id: 1,
  },
  {
    title: "Free PDF and Excel Timesheet Templates",
    image: "https://trackingtime.co/wp-content/uploads/2020/10/pdf-xls-5.svg",
    bg: "#63bae2",
    link: "https://trackingtime.co/resources/free-timesheet-templates.html",
    id: 2,
  },
  {
    title: "Employee Timekeeper for FLSA Compliance",
    image: "https://trackingtime.co/wp-content/uploads/2020/09/FLSA-5.svg",
    bg: "#01c3a9",
    link: "https://trackingtime.co/resources/employee-timekeeper-for-flsa-compliance.html",
    id: 3,
  },
];
export {
  blogsData,
  productivityData,
  remoteWorkData,
  bestPracticeData,
  resourcesData,
};
