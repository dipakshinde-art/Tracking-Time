import React from "react";

const Blog = () => {
  const blogs = [
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
      image:
        "https://trackingtime.co/wp-content/uploads/2019/12/generico-1.svg",
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
      title:
        "10 Ways to Build Your Company’s Awesome & Innovative Work Culture",
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
  return <div>Blog</div>;
};

export default Blog;
