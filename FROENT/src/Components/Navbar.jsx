import React from 'react'
import styled from './Navbar.module.css'
import { Button } from '@chakra-ui/react'

const Navbar = () => {
  return (
    <div className={styled.main}>
      <div className={styled.innder_div}>
        <div className={styled.logo_div}>
          <img
            width="190px"
            height='19.78px'
            src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/layout/header/logo.svg"
            alt="Traking time"
          />
        </div>
        <div className={styled.catogories_outer}>
          <div className={styled.caaaaa} >
            <div>
              <h5 className={styled.cat}>INTEGRATIONS</h5>
            </div>
            <div>
              <h5 className={styled.cat}>BLOG</h5>
            </div>
            <div>
              <h5 className={styled.cat}>FEATURES</h5>
            </div>
            <div>
              <Button
                w="140px"
                h="36px"
                padding="10px 0"
                _hover={{ background: "#00AD95", color: "white" }}
                borderColor="#00AD95"
                color="#00AD95"
                border="2px"
                variant='outline'>
                <h5 className={styled.cat}>TRY IT FREE</h5>
              </Button>
            </div>
            <div>
              <Button
                w="140px"
                h="36px"
                padding="10px 0"
                bg="#00AD95"
                _hover={{ background: "white", color: "#00AD95" }}
                color="white"
                border="2px"
                borderColor="#00AD95"
                variant='outline'>
                <h5 className={styled.cat}>LOGIN</h5>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
