import React from "react";
import {
  Box,
  Grid,
  Icon,
  Input,
  Text,
  GridItem,
  Image,
} from "@chakra-ui/react";
import css from "./Integrations.module.css";
import { SearchIcon } from "@chakra-ui/icons";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Integrations = () => {
  const data = [
    {
      "col-12-4 href": "https://trackingtime.co/time-tracker-for-airtable",
      "logo src":
        "https://trackingtime.co/wp-content/themes/trackingtime-v4/img/temp/logos/airtable.png",
      gsearch: "Airtable",
      "col-12-4":
        "Powerful organizational spreadsheets that works exactly the way you want.",
    },
    {
      "col-12-4 href": "https://trackingtime.co/time-tracking-for-any-do",
      "logo src":
        "https://trackingtime.co/wp-content/themes/trackingtime-v4/img/temp/logos/anydo.png",
      gsearch: "Any.Do",
      "col-12-4":
        "Any.Do helps you get things done with your friends in a simple & elegant way.",
    },
    {
      "col-12-4 href": "https://trackingtime.co/time-tracking-for-asana",
      "logo src":
        "https://trackingtime.co/wp-content/themes/trackingtime-v4/img/temp/logos/asana.png",
      gsearch: "Asana",
      "col-12-4":
        "Asana puts tasks and conversations together to enable teamwork without email.",
    },
    {
      "col-12-4 href": "https://trackingtime.co/time-tracking-for-azendoo",
      "logo src":
        "https://trackingtime.co/wp-content/themes/trackingtime-v4/img/temp/logos/azendoo.png",
      gsearch: "Azendoo",
      "col-12-4":
        "Simplifies projects planning, documents sharing and teamwork synchronization for both your professional activity and your life.",
    },
    {
      "col-12-4 href": "https://trackingtime.co/azure-devops-time-tracking",
      "logo src":
        "https://trackingtime.co/wp-content/themes/trackingtime-v4/img/temp/logos/azure-devops.png",
      gsearch: "Azure DevOps",
      "col-12-4":
        "Continuous Delivery Services for teams to share code, track work, and ship software.",
    },
    {
      "col-12-4 href": "https://trackingtime.co/time-tracking-for-basecamp-2",
      "logo src":
        "https://trackingtime.co/wp-content/themes/trackingtime-v4/img/temp/logos/basecamp-2.png",
      gsearch: "Basecamp 2",
      "col-12-4":
        "Basecamp is a web-based project collaboration tool that allows groups of people to share files.",
    },
    {
      "col-12-4 href": "https://trackingtime.co/time-tracking-for-basecamp-3",
      "logo src":
        "https://trackingtime.co/wp-content/themes/trackingtime-v4/img/temp/logos/basecamp-3.png",
      gsearch: "Basecamp 3",
      "col-12-4":
        "Basecamp 3 is a web-based project collaboration tool that allows groups of people to share files.",
    },
    {
      "col-12-4 href": "https://trackingtime.co/time-tracking-for-bitbucket",
      "logo src":
        "https://trackingtime.co/wp-content/themes/trackingtime-v4/img/temp/logos/bitbucket.png",
      gsearch: "Bitbucket",
      "col-12-4":
        "Bitbucket is a code hosting site, for the Git and Mercurial version control systems.",
    },
    {
      "col-12-4 href": "https://trackingtime.co/time-tracking-clickup",
      "logo src":
        "https://trackingtime.co/wp-content/themes/trackingtime-v4/img/button/clickup-time-tracking.png",
      gsearch: "clickup",
      "col-12-4":
        "Docs, Reminders, Goals, Calendars, Chat, scheduling and more.",
    },
    {
      "col-12-4 href": "https://trackingtime.co/time-tracking-for-coda",
      "logo src":
        "https://trackingtime.co/wp-content/themes/trackingtime-v4/img/button/coda-time-tracking.png",
      gsearch: "coda",
      "col-12-4":
        "Coda blends the flexibility of a document, the power of a spreadsheet.",
    },
    {
      "col-12-4 href": "https://trackingtime.co/time-tracking-for-dixa",
      "logo src":
        "https://trackingtime.co/wp-content/themes/trackingtime-v4/img/button/dixa-time-tracking.png",
      gsearch: "dixa",
      "col-12-4":
        "Customer service platform that unifies phone, email, chat and messaging apps.",
    },
    {
      "col-12-4 href": "https://trackingtime.co/time-tracking-for-evernote",
      "logo src":
        "https://trackingtime.co/wp-content/themes/trackingtime-v4/img/button/evernote-time-tracking.png",
      gsearch: "Evernote",
      "col-12-4":
        "Create documents, collaborate on projects, and store information all in one place.",
    },
    {
      "col-12-4 href": "https://trackingtime.co/time-tracking-for-favro",
      "logo src":
        "https://trackingtime.co/wp-content/themes/trackingtime-v4/img/button/favro.png",
      gsearch: "Favro",
      "col-12-4":
        "Balance power and simplicity in the ideal collaboration app for developers.",
    },
    {
      "col-12-4 href": "https://trackingtime.co/time-tracking-for-figma",
      "logo src":
        "https://trackingtime.co/wp-content/themes/trackingtime-v4/img/button/figma-time-tracking.png",
      gsearch: "figma",
      "col-12-4":
        "Cloud-based platform that enables businesses to create custom designs.",
    },
    {
      "col-12-4 href": "https://trackingtime.co/time-tracking-for-flow",
      "logo src":
        "https://trackingtime.co/wp-content/themes/trackingtime-v4/img/temp/logos/flow.svg",
      gsearch: "Flow",
      "col-12-4":
        "Manage tasks, share files, have discussions, and capture ideas all in one place.",
    },
    {
      "col-12-4 href": "https://trackingtime.co/time-tracking-for-freshdesk",
      "logo src":
        "https://trackingtime.co/wp-content/themes/trackingtime-v4/img/temp/logos/freshdesk.png",
      gsearch: "Freshdesk",
      "col-12-4":
        "Freshdesk is an award-winning, online help desk software that allows you to support customers.",
    },
    {
      "col-12-4 href": "https://trackingtime.co/time-tracking-for-github",
      "logo src":
        "https://trackingtime.co/wp-content/themes/trackingtime-v4/img/temp/logos/github.png",
      gsearch: "GitHub",
      "col-12-4":
        "GitHub is a web-based hosting service for projects that use the Git revision control system.",
    },
    {
      "col-12-4 href": "https://trackingtime.co/time-tracking-gitlab",
      "logo src":
        "https://trackingtime.co/wp-content/themes/trackingtime-v4/img/temp/logos/gitlab.png",
      gsearch: "GitLab",
      "col-12-4":
        "GitLab is a on-premise or hosted Git repository management tool.",
    },
    {
      "col-12-4 href": "https://trackingtime.co/time-tracking-for-ringcentral",
      "logo src":
        "https://trackingtime.co/wp-content/themes/trackingtime-v4/img/button/ring-central-time-tracking.png",
      gsearch: "Ring Central",
      "col-12-4":
        "Conversation platform for teams to plan, share & organize work tasks.",
    },
    {
      "col-12-4 href": "https://trackingtime.co/time-tracking-for-gmail",
      "logo src":
        "https://trackingtime.co/wp-content/themes/trackingtime-v4/img/temp/logos/gmail.png",
      gsearch: "gmail",
      "col-12-4": "Gmail is a free search-based web-mail service by Google.",
    },
    {
      "col-12-4 href":
        "https://trackingtime.co/time-tracking-for-google-calendar",
      "logo src":
        "https://trackingtime.co/wp-content/themes/trackingtime-v4/img/button/google-calendar.png",
      gsearch: "Google Calendar",
      "col-12-4":
        "With Google Calendar, its easy to keep track of all your lifes important events in one place.",
    },
    {
      "col-12-4 href": "https://trackingtime.co/time-tracking-for-google-docs",
      "logo src":
        "https://trackingtime.co/wp-content/themes/trackingtime-v4/img/temp/logos/gdocs.png",
      gsearch: "google docs",
      "col-12-4":
        "Google Docs is an online word processor, part of Google Drive.",
    },
    {
      "col-12-4 href":
        "https://trackingtime.co/time-tracking-for-google-sheets",
      "logo src":
        "https://trackingtime.co/wp-content/themes/trackingtime-v4/img/temp/logos/gsheets.png",
      gsearch: "google sheets",
      "col-12-4":
        "Google Sheets is an online spreadsheet app that lets you create and format spreadsheets.",
    },
    {
      "col-12-4 href":
        "https://trackingtime.co/time-tracking-for-google-slides",
      "logo src":
        "https://trackingtime.co/wp-content/themes/trackingtime-v4/img/button/google-drive.png",
      gsearch: "google slides",
      "col-12-4": "Google Slides is a presentation app offered by Google.",
    },
    {
      "col-12-4 href": "https://trackingtime.co/track-time-google-tasks",
      "logo src":
        "https://trackingtime.co/wp-content/themes/trackingtime-v4/img/temp/logos/gtasks.png",
      gsearch: "google tasks",
      "col-12-4": "Tasks adds a to-do list to Gmail.",
    },
    {
      "col-12-4 href":
        "https://trackingtime.co/time-tracking-bot-for-google-chat",
      "logo src":
        "https://trackingtime.co/wp-content/themes/trackingtime-v4/img/button/google-chat.png",
      gsearch: "google chat",
      "col-12-4": "Collaborate on Google chat",
    },
    {
      "col-12-4 href":
        "https://trackingtime.co/time-tracking-for-google-workspace",
      "logo src":
        "https://trackingtime.co/wp-content/themes/trackingtime-v4/img/button/google-workspace.png",
      gsearch: "google workspace",
      "col-12-4":
        "Google Workspace consists of Gmail, Contacts, Calendar, Meet and Chat for communication.",
    },
    {
      "col-12-4 href": "https://trackingtime.co/time-tracking-insightly",
      "logo src":
        "https://trackingtime.co/wp-content/themes/trackingtime-v4/img/temp/logos/insightly.png",
      gsearch: "insightly",
      "col-12-4":
        "Web-based project and Customer Relationship Management (CRM) application.",
    },
    {
      "col-12-4 href": "https://trackingtime.co/time-tracking-for-jira",
      "logo src":
        "https://trackingtime.co/wp-content/themes/trackingtime-v4/img/temp/logos/jira.png",
      gsearch: "jira",
      "col-12-4":
        "JIRA is the leading bug tracking, issue tracking and project management tool.",
    },
    {
      "col-12-4 href": "https://trackingtime.co/time-tracking-for-linear",
      "logo src":
        "https://trackingtime.co/wp-content/themes/trackingtime-v4/img/button/linear-time-tracking.png",
      gsearch: "linear",
      "col-12-4": "The issue tracking tool you'll enjoy using.",
    },
    {
      "col-12-4 href": "https://trackingtime.co/time-tracking-for-meistertask",
      "logo src":
        "https://trackingtime.co/wp-content/themes/trackingtime-v4/img/button/meistertask-time-tracking.png",
      gsearch: "meistertask",
      "col-12-4": "Collaboration and task management tool on the web.",
    },
    {
      "col-12-4 href": "https://trackingtime.co/microsoft-to-do-time-tracking",
      "logo src":
        "https://trackingtime.co/wp-content/themes/trackingtime-v4/img/button/microsoft-to-do.png",
      gsearch: "Microsoft To Do",
      "col-12-4":
        "Microsoft To Do is a task management app to help you stay organized and manage your day-to-day.",
    },
    {
      "col-12-4 href":
        "https://trackingtime.co/microsoft-planner-time-tracking",
      "logo src":
        "https://trackingtime.co/wp-content/themes/trackingtime-v4/img/button/microsoft-planner.png",
      gsearch: "Microsoft Planner",
      "col-12-4":
        "Microsoft Planner lets you easily bring together teams, tasks, documents, and conversations for better results.",
    },
    {
      "col-12-4 href": "https://trackingtime.co/time-tracking-for-monday",
      "logo src":
        "https://trackingtime.co/wp-content/themes/trackingtime-v4/img/button/monday.png",
      gsearch: "Monday",
      "col-12-4":
        "Monday is a project management tool your team will actually enjoy using.",
    },
    {
      "col-12-4 href": "https://trackingtime.co/time-tracking-for-nifty",
      "logo src":
        "https://trackingtime.co/wp-content/themes/trackingtime-v4/img/button/nifty-time-tracking.png",
      gsearch: "nifty",
      "col-12-4": "Task management app to manage tasks, timelines and docs.",
    },
    {
      "col-12-4 href": "https://trackingtime.co/time-tracking-in-notion",
      "logo src":
        "https://trackingtime.co/wp-content/themes/trackingtime-v4/img/button/notion.png",
      gsearch: "Notion",
      "col-12-4":
        "Notion is the all-in-one workspace for notes, project management, documents, and collaboration.",
    },
    {
      "col-12-4 href": "https://trackingtime.co/time-tracking-for-outlook-com",
      "logo src":
        "https://trackingtime.co/wp-content/themes/trackingtime-v4/img/button/outlook.png",
      gsearch: "outlook.com",
      "col-12-4":
        "Outlook.com is a webmail service from Microsoft, successor of Hotmail.",
    },
    {
      "col-12-4 href": "https://trackingtime.co/time-tracking-for-podio",
      "logo src":
        "https://trackingtime.co/wp-content/themes/trackingtime-v4/img/temp/logos/podio.png",
      gsearch: "podio",
      "col-12-4":
        "Podio lets you build and shape the online workplace most fitting to your role.",
    },
    {
      "col-12-4 href": "https://trackingtime.co/time-tracking-for-redbooth",
      "logo src":
        "https://trackingtime.co/wp-content/themes/trackingtime-v4/img/temp/logos/redbooth.png",
      gsearch: "redbooth",
      "col-12-4":
        "Redbooth (formerly Teambox), the cloud-based company redefining collaboration and busines communications.",
    },
    {
      "col-12-4 href": "https://trackingtime.co/redmine-time-tracking",
      "logo src":
        "https://trackingtime.co/wp-content/themes/trackingtime-v4/img/temp/logos/redmine.png",
      gsearch: "redmine",
      "col-12-4":
        "Online project management software built on the Ruby on Rails framework specifically for small groups.",
    },
    {
      "col-12-4 href":
        "https://trackingtime.co/time-tracking-for-remember-the-milk",
      "logo src":
        "https://trackingtime.co/wp-content/themes/trackingtime-v4/img/temp/logos/remember-the-milk.png",
      gsearch: "remember the milk",
      "col-12-4":
        "Take your tasks anywhere with this feature-packed application.",
    },
    {
      "col-12-4 href": "https://trackingtime.co/time-tracking-for-smartsheet",
      "logo src":
        "https://trackingtime.co/wp-content/themes/trackingtime-v4/img/temp/logos/smartsheet.png",
      gsearch: "smartsheet",
      "col-12-4":
        "Smartsheet is a web-based project and task management and work collaboration software.",
    },
    {
      "col-12-4 href": "https://trackingtime.co/slack",
      "logo src":
        "https://trackingtime.co/wp-content/themes/trackingtime-v4/img/temp/logos/slack.png",
      gsearch: "slack",
      "col-12-4": "Slack brings all your communication together in one place.",
    },
    {
      "col-12-4 href": "https://trackingtime.co/time-tracking-for-supportpal",
      "logo src":
        "https://trackingtime.co/wp-content/themes/trackingtime-v4/img/button/SupportPal.png",
      gsearch: "supportpal",
      "col-12-4":
        "Powerful self-hosted help desk solution that is simple and intuitive to use.",
    },
    {
      "col-12-4 href": "https://trackingtime.co/time-tracking-for-taskade",
      "logo src":
        "https://trackingtime.co/wp-content/themes/trackingtime-v4/img/button/taskade.png",
      gsearch: "Taskade",
      "col-12-4":
        "Taskade is reimagining the to-do list by making it visual, structured, and collaborative.",
    },
    {
      "col-12-4 href":
        "https://trackingtime.co/time-tracking-for-microsoft-teams",
      "logo src":
        "https://trackingtime.co/wp-content/themes/trackingtime-v4/img/button/teams.png",
      gsearch: "Microsoft Teams",
      "col-12-4":
        "Microsoft Teams is the chat-based workspace that integrates all the people, content, and tools your team needs.",
    },
    {
      "col-12-4 href": "https://trackingtime.co/time-tracking-for-teamwork",
      "logo src":
        "https://trackingtime.co/wp-content/themes/trackingtime-v4/img/button/teamwork-time-tracking.png",
      gsearch: "teamwork",
      "col-12-4": "Teamwork is project management software.",
    },
    {
      "col-12-4 href": "https://trackingtime.co/time-tracking-for-ticktick",
      "logo src":
        "https://trackingtime.co/wp-content/themes/trackingtime-v4/img/button/ticktick.png",
      gsearch: "tick tick",
      "col-12-4":
        "Your daily must-have to-do & task list to make all things done and get life well organized.",
    },
    {
      "col-12-4 href": "https://trackingtime.co/time-tracking-for-todoist",
      "logo src":
        "https://trackingtime.co/wp-content/themes/trackingtime-v4/img/temp/logos/todoist.png",
      gsearch: "todoist",
      "col-12-4":
        "Todoist is a task manager thats useful, fast and easy to use.",
    },
    {
      "col-12-4 href": "https://trackingtime.co/time-tracking-for-trello",
      "logo src":
        "https://trackingtime.co/wp-content/themes/trackingtime-v4/img/temp/logos/trello.png",
      gsearch: "trello",
      "col-12-4":
        "Trello is a collaboration tool that organizes your projects into boards.",
    },
    {
      "col-12-4 href": "https://trackingtime.co/time-tracking-for-zendesk",
      "logo src":
        "https://trackingtime.co/wp-content/themes/trackingtime-v4/img/temp/logos/zendesk.png",
      gsearch: "zendesk",
      "col-12-4":
        "Offers on-demand help desk software, covering customer support, trouble tickets and knowledge base.",
    },
    {
      "col-12-4 href": "https://trackingtime.co/time-tracking-for-activecollab",
      "logo src":
        "https://trackingtime.co/wp-content/themes/trackingtime-v4/img/button/activecollab-time-tracking.png",
      gsearch: "activecollab",
      "col-12-4":
        "Project Management Tool in the Office & Productivity category.",
    },
    {
      "col-12-4 href": "https://trackingtime.co/time-tracking-for-agiled",
      "logo src":
        "https://trackingtime.co/wp-content/themes/trackingtime-v4/img/button/agiled-time-tracking.png",
      gsearch: "agiled",
      "col-12-4": "Project Management software.",
    },
    {
      "col-12-4 href": "https://trackingtime.co/time-tracking-for-assembla",
      "logo src":
        "https://trackingtime.co/wp-content/themes/trackingtime-v4/img/button/assembla-time-tracking.png",
      gsearch: "assembla",
      "col-12-4":
        "Online workspaces with best of breed tools like Tasks & Issue Management, SVN & Git Repositories.",
    },
    {
      "col-12-4 href": "https://trackingtime.co/time-tracking-for-axosoft",
      "logo src":
        "https://trackingtime.co/wp-content/themes/trackingtime-v4/img/button/axosoft-time-tracking.png",
      gsearch: "axosoft",
      "col-12-4": "Agile based projecment management software.",
    },
  ];
  return (
    <>
      {" "}
      <Navbar />
      <div className={css.main}>
        <Box className={css.top}>
          <Box className={css.heading}>
            <Box>
              <Text
                fontSize={{
                  base: "19px",
                  sm: "17.43px",
                  md: "19px",
                  lg: "19px",
                }}
                fontWeight={{ base: 700, sm: 600, md: 700, lg: 700 }}
                letterSpacing="3px"
              >
                TRACKING TIME BUTTON FOR CHROME
              </Text>
            </Box>
            <Box className={css.text2}>
              <Text
                fontSize={{ base: "50px", sm: "45px", md: "50px", lg: "50px" }}
                fontWeight={{ base: 700, sm: 600, md: 700, lg: 700 }}
              >
                TrackingTime Integrations
              </Text>
            </Box>
            <Box>
              <Text
                fontSize={{
                  base: "19px",
                  sm: "17.43px",
                  md: "19px",
                  lg: "19px",
                }}
                fontWeight={{ base: 700, sm: 600, md: 700, lg: 700 }}
                letterSpacing="3px"
              >
                TIME TRACKING INTEGRATIONS THAT YOU'LL LOVE
              </Text>
            </Box>
            <Box
              className={css.input}
              width={{ base: "50%", sm: "30%", md: "40%", lg: "50%" }}
            >
              <Input
                placeholder="SEARCH YOUR FAVORITE APP!"
                fontSize="14px"
                fontWeight="700"
                variant="ghost"
                _placeholder={{ color: "black", letterSpacing: "1px" }}
              />
              <Icon as={SearchIcon} />
            </Box>
            <Box className={css.text4}>
              <Text
                fontSize={{ base: "14px", sm: "14px", md: "16px", lg: "16px" }}
                fontWeight="600"
                lineHeight={"30px"}
                color="#7F8488"
              >
                Improve your time tracking and increase your productivity with
                these Integrations. See how much time you spend on each task or
                project! TrackingTime's integrations make it easy to keep track
                of your billable and non-billable tasks by integrating with more
                than 30 apps.
              </Text>
              <Text
                fontSize={{ base: "14px", sm: "14px", md: "16px", lg: "16px" }}
                fontWeight="600"
                lineHeight={"30px"}
                color="#7F8488"
              >
                TrackingTime can be integrated with other apps, such as project
                management, accounting, and customer support. Get instant
                timesheets and analytics with TrackingTime!
              </Text>
            </Box>
          </Box>
          <Box className={css.apps}>
            <Grid
              templateColumns={{
                base: "repeat(2,1fr)",
                sm: "repeat(2,1fr)",
                md: "repeat(2,1fr)",
                lg: "repeat(3,1fr)",
              }}
              gap="30px"
            >
              {data.map((el) => (
                <Box key={el.gsearch} className={css.grid_item}>
                  <Box className={css.img}>
                    <Image src={el["logo src"]} w="39px" h="39px" />
                  </Box>
                  <Box>
                    <Text
                      fontSize={{
                        base: "25px",
                        sm: "19px",
                        md: "19px",
                        lg: "25px",
                      }}
                      fontWeight={{ base: 700, sm: 700, md: 700, lg: 700 }}
                    >
                      {el.gsearch}
                    </Text>
                  </Box>
                  <Box>
                    <Text
                      display={{
                        base: "none",
                        sm: "none",
                        md: "none",
                        lg: "block",
                      }}
                      fontSize={{ base: "14px", lg: "14px" }}
                      color="#7F8488"
                      fontWeight={{ base: 700, lg: 600 }}
                    >
                      {el["col-12-4"]}
                    </Text>
                  </Box>
                </Box>
              ))}
            </Grid>
          </Box>
          <Box display="flex" justifyContent="flex-start" gap="6rem">
            <Box display="flex" justifyContent="flex-start">
              <Image
                w="530px"
                src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/temp/home/download-section/phone.png"
              />
            </Box>
            <Box display="flex" alignItems="center" justifyContent="center">
              <Box w="397px" display="flex" flexDirection="column" gap="2rem">
                <Box>
                  {" "}
                  <Text fontSize="40px" fontWeight="700">
                    Track Everywhere
                  </Text>
                </Box>
                <Box>
                  {" "}
                  <Text fontSize="15px">
                    Track your time everywhere you work with our mobile apps for
                    iOS and Android.
                  </Text>
                </Box>
                <Box display="flex" color="grey" gap="20px">
                  <Image
                    w="60px"
                    h="60px"
                    borderRadius="5px"
                    backgroundColor="black"
                    src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/temp/home/download-section/playstore.png"
                  />
                  <Image
                    w="60px"
                    h="60px"
                    borderRadius="5px"
                    backgroundColor="black"
                    src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/temp/home/download-section/apstore.png"
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </div>
      <Footer/>
    </>
  );
};

export default Integrations;
