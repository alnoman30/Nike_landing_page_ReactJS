import React from 'react'


import styles from './hero.module.css'

const Hero = () => {
  return (
    <div className={styles.hero}>
        <div className={styles.hero_content}>
            <h1>Your feet deserve the best</h1>
            <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
            <div className={styles.hero_btn}>
                <div className={styles.btn1}>
                    <button>Shop Now</button>
                </div>
                <div className={styles.btn2}>
                    <button>Category</button>
                </div>
            </div>
            <div className={styles.shopping}>
          <p>Also Available On</p>

          <div className={styles.brand_icons}>
            <a href="#"><img src="/images/amazon.png" alt="amazon-logo" /></a>
            <a href="#"><img src="/images/flipkart.png" alt="flipkart-logo" /></a>
          </div>
        </div>
        </div>
        <div className={styles.hero_image}>
            <img src="./images/shoe_image.png" alt="" />
        </div>
      
    </div>
  )
}

export default Hero;

// 