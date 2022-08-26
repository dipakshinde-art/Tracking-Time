import React from 'react'
import css from './Landing.module.css';
import { Button, Input, Text, Image } from '@chakra-ui/react'
const Landingpage = () => {
  return (
    <div className={css.main}>
      <div className={css.head}>
        <div>
          <h1>TRACKINGTIME TIME TRACKER SOFTWARE</h1>
        </div>
        <div>
          <h2>SET AND FORGET TIME TRACKING</h2>
        </div>
        <div>
          <h4>Bring your productivity to the next level.</h4>
        </div>
      </div>
      <div className={css.btn} >
        <Input
          w="265px"
          h="40px"
          textColor="black"
          textAlign="center"
          _placeholder={{ opacity: 1, color: 'black' }}
          borderColor="black"
          color='black'
          placeholder='Your work Email' />
        <Button
          bgColor="#00AD95"
          color="white"
          w="210px"
          h="40px"
          _hover={{ bgColor: "#00AD95" }}>
          START FOR FREE!
        </Button>
      </div>
      <div className={css.tt_logo}>
        <div>
          <img
            src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/keywords/google-key.png"
            alt="" />
          <a
            href="">
            <h3>Sign in with Google</h3>
          </a>
        </div>
        <img
          src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/layout/header/ilus-header-2.svg"
          alt="" />
      </div>
      <div className={css.slider_outer}>
        <div
          className={css.slider}>
          <Text fontSize="16px" color="#7F8488" fontWeight="600">Companies of all shapes and sizes use TrackingTime:</Text>
          <div className={css.slide_track}>
            <div className={css.slide}>
              <img src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/home/logos/color/logo2.jpg" alt="" />
            </div>
            <div className={css.slide}>
              <img src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/home/logos/color/logo3.jpg" alt="" />
            </div>
            <div className={css.slide}>
              <img src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/home/logos/color/logo4.jpg" alt="" />
            </div>
            <div className={css.slide}>
              <img src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/home/logos/color/logo5.jpg" alt="" />
            </div>
            <div className={css.slide}>
              <img src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/home/logos/color/logo6.jpg" alt="" />
            </div>
            <div className={css.slide}>
              <img src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/home/logos/color/logo7.jpg" alt="" />
            </div>
            <div className={css.slide}>
              <img src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/home/logos/color/logo8.jpg" alt="" />
            </div>
            <div className={css.slide}>
              <img src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/home/logos/color/logo9.jpg" alt="" />
            </div>
            <div className={css.slide}>
              <img src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/home/logos/color/logo10.jpg" alt="" />
            </div>
            <div className={css.slide}>
              <img src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/home/logos/color/logo11.jpg" alt="" />
            </div>

            <div className={css.slide}>
              <img src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/home/logos/color/logo2.jpg" alt="" />
            </div>
            <div className={css.slide}>
              <img src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/home/logos/color/logo3.jpg" alt="" />
            </div>
            <div className={css.slide}>
              <img src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/home/logos/color/logo4.jpg" alt="" />
            </div>
            <div className={css.slide}>
              <img src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/home/logos/color/logo5.jpg" alt="" />
            </div>
            <div className={css.slide}>
              <img src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/home/logos/color/logo6.jpg" alt="" />
            </div>
            <div className={css.slide}>
              <img src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/home/logos/color/logo7.jpg" alt="" />
            </div>
            <div className={css.slide}>
              <img src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/home/logos/color/logo8.jpg" alt="" />
            </div>
            <div className={css.slide}>
              <img src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/home/logos/color/logo9.jpg" alt="" />
            </div>
            <div className={css.slide}>
              <img src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/home/logos/color/logo10.jpg" alt="" />
            </div>
            <div className={css.slide}>
              <img src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/home/logos/color/logo11.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className={css.fea}>
        <div>
          <Text fontSize="18px" fontWeight="extrabold">THE FEATURES YOUR PROJECT MANAGEMENT APP IS MISSING.</Text>
        </div>
        <div>
          <div className={css.fea_grid}>
            <div>
              <Image src='https://trackingtime.co/wp-content/themes/trackingtime-v4/img/keywords/article-1.svg' />
            </div>
            <div>
              <h3>Measure your team’s productivity</h3>
            </div>
            <div>
              <p>Get a record of the worked hours and keep your projects in order, be abreast of ongoing or completed projects with our super friendly app.</p>
            </div>
          </div>
          <div className={css.fea_grid}>
            <div>
              <Image src='https://trackingtime.co/wp-content/themes/trackingtime-v4/img/keywords/article-2.svg' />
            </div>
            <div>
              <h3>The most flexible reporting engine</h3>
            </div>
            <div>
              <p>Project budgeting, client billing, payroll, productivity analytics and much more: No matter what kind of reports you need, TrackingTime has got you covered.</p>
            </div>
          </div>
          <div className={css.fea_grid}>
            <div>
              <Image src='https://trackingtime.co/wp-content/themes/trackingtime-v4/img/keywords/article-3.svg' />
            </div>
            <div>
              <h3>Monitor your team’s workload, in real time</h3>
            </div>
            <div>
              <p>See every work in progress and measure the productivity of your team by monitoring them in real time</p>
            </div>
          </div>
        </div>
      </div>
      <div className={css.addtime}>
        <div>
          <img width='231px' height='140px' src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/temp/logos/grupo.svg" alt="" />
          <div className={css.addchild1}>
            <h2>Add time tracking to your favorite business apps</h2>
          </div>
          <div className={css.addchild2}>
            <p>No matter where your employees work, TrackingTime works with them. Install the TrackingTime Button for Chrome and Firefox and track time right within the productivity apps your employees use everyday.</p>
          </div>
          <Button _hover={{ bgColor: 'black', color: "white" }} variant="outline" colorScheme='black' border="2px" w='140px' h='36px' fontSize='11px' fontWeight="extrabold" letterSpacing="2px">SEE ALL</Button>
        </div>
        <div className={css.apps}>
          <div>
            <img src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/temp/logos/asana.png" alt="" />
            <h3>Asana</h3>
            <p>Asana puts tasks and conversations together to enable teamwork without email.</p>
          </div>
          <div>
            <img src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/temp/logos/trello.png" alt="" />
            <h3>Trello</h3>
            <p>Trello is a collaboration tool that organizes your projects into boards.</p>
          </div>
          <div>
            <img src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/temp/logos/todoist.png" alt="" />
            <h3>Todoist</h3>
            <p>Todoist is a task manager thats useful, fast and easy to use.</p>
          </div>
          <div>
            <img src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/temp/logos/smartsheet.png" alt="" />
            <h3>Smartsheet</h3>
            <p>Smartsheet is a web-based project and task management and work collaboration software.</p>
          </div>
        </div>
      </div>
      <div className={css.cards}>
        <div>
          <img src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/keywords/slider-1.svg" alt="" />
          <h3>Timecards Approval</h3>
          <p>Track clock in and out times with no effort.</p>
        </div>
        <div>
          <img src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/keywords/slider-2.svg" alt="" />
          <h3>Bugeting</h3>
          <p>Keep your projects on time and budget.</p>
        </div>
        <div>
          <img src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/keywords/slider-3.svg" alt="" />
          <h3>Work schedules</h3>
          <p>Specify when your employees are expected to be at their job.</p>
        </div>
        <div>
          <img src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/keywords/slider-4.svg" alt="" />
          <h3>Timesheet audits</h3>
          <p>Avoid data inconsistencies with just one click.</p>
        </div>
      </div>
      <div className={css.end}>
        <div>
          <img src="https://i.postimg.cc/fbYjyZdg/Screenshot-1183.png" alt="" />
        </div>
        <div>
          <div>
            <h2>Get professional timesheets done in no time!</h2>
            <p>Sign up today and join thousands of people around the world using TrackingTime to simplify their timesheets.</p>
          </div>
          <div className={css.btn2}>
            <Input
              w="265px"
              h="40px"
              textColor="black"
              textAlign="center"
              _placeholder={{ opacity: 1, color: 'black' }}
              borderColor="black"
              color='black'
              placeholder='Your work Email' />
            <Button
              bgColor="#00AD95"
              color="white"
              w="210px"
              h="40px"
              _hover={{ bgColor: "#00AD95" }}>
              START FOR FREE!
            </Button>
          </div>
          <div className={css.glogo}>
              <img
                src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/keywords/google-key.png"
                alt="" />
              <a
                href="">
                <h3>Sign in with Google</h3>
              </a>
            </div>
        </div>
      </div>

    </div>
  )
}

export default Landingpage