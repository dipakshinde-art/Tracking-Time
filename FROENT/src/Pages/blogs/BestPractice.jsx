import React from "react";

const BestPractice = () => {
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
      title:
        "A Guide to Employee Engagement: What Is It and Why It’s Important",
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
  return <div>BestPractice</div>;
};

export default BestPractice;
