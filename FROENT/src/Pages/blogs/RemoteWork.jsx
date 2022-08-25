import React from "react";

const RemoteWork = () => {
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
      id: 21,
    },
  ];
  return <div>RemoteWork</div>;
};

export default RemoteWork;
