import React from "react";

const Productivity = () => {
  const productivityData = [
    {
      title: "5 Best Ways to Reduce and Manage Overtime for Employees",
      image:
        "https://trackingtime.co/wp-content/uploads/2019/12/generico-1.svg",
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
  return <div>Productivity</div>;
};

export default Productivity;
