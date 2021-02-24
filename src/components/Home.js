import React from 'react'
import { withRouter } from 'react-router-dom'

class Home extends React.Component {

    go() {
        console.log(' bowbow '+this.props)
        this.props.history.push('/')
    }

    render() {
        return (
            <div>
                 <div style={{height: "40px"}}></div>
                  <div  class="head" style={{backgroundColor: "rgb(143,255,204)", left:"25%", fontFamily:"Baskerville Old Face", fontSize:"80px", color:"green", textShadow:"2px 2px black"}}>
                     <h1><b>WELCOME TO PAYMENT PAGE OF PLANT NURSERY</b></h1> 
                     </div>
                     <div style={{height: "40px"}}></div>
                  <img src="https://www.doublebricks.co.uk/uploads/card2.jpeg" alt="PlantingTree" data-rimg="" srcSet="https://www.doublebricks.co.uk/uploads/card2.jpeg 1x" 
                  style={{ width: '1400px', height: '350px'}}></img>
                  <div style={{height: "40px"}}></div>
                <div class="container" class="text-white-50 bg-dark">
                <div class="highlights-banners-container">
                <div class="highlights-banners highlight-banners-count-4" class="d-inline-flex p-2">
      
        
          <div class="highlights-banners-block">
            
              <div class="highlights-banners-icon">
                
                  
      <svg class="icon-cell-phone " aria-hidden="true" focusable="false" role="presentation" xmlns="http://www.w3.org/2000/svg" width="23" height="39" viewBox="0 0 23 39">      <path fill="currentColor" fill-rule="evenodd" transform="translate(-154.000000, -121.000000)" d="M157.833333,160 L173.166667,160 C175.275511,160 177,158.270825 177,156.15625 L177,124.84375 C177,122.729175 175.275511,121 173.166667,121 L157.833333,121 C155.724489,121 154,122.729175 154,124.84375 L154,156.15625 C154,158.270825 155.724489,160 157.833333,160 Z M165.5,158.71875 C164.4144,158.71875 163.583333,157.885425 163.583333,156.796875 C163.583333,155.708325 164.4144,154.875 165.5,154.875 C166.5856,154.875 167.416667,155.708325 167.416667,156.796875 C167.416667,157.885425 166.5856,158.71875 165.5,158.71875 Z M162.946181,123.5625 L168.053819,123.5625 C168.407627,123.5625 168.694444,123.849318 168.694444,124.203125 L168.694444,124.203125 C168.694444,124.556932 168.407627,124.84375 168.053819,124.84375 L162.946181,124.84375 C162.592373,124.84375 162.305556,124.556932 162.305556,124.203125 L162.305556,124.203125 C162.305556,123.849318 162.592373,123.5625 162.946181,123.5625 Z M156,127.016304 L175,127.016304 L175,153.092391 L156,153.092391 L156,127.016304 Z"></path>    </svg>                                                              

                
              </div>
            

            <div class="highlights-banners-text">
              
                <span class="highlights-banners-heading">
                  Largest Nursery
                </span>
              

              
                <p>**1.2 Million plant lovers connected with us**</p>
              
            </div>
            
          </div>
        
      
        
          <div class="highlights-banners-block">
            
              <div class="highlights-banners-icon">
                
                  
                                            <svg class="icon-store " aria-hidden="true" focusable="false" role="presentation" xmlns="http://www.w3.org/2000/svg" width="44" height="40" viewBox="0 0 44 40">      <path fill="currentColor" fill-rule="evenodd" d="M39.555 5L44 9.13c0 2.663-2.13 4.87-4.702 4.87a4.621 4.621 0 0 1-4.324-2.922c-.752 1.69-2.38 2.922-4.325 2.922a4.621 4.621 0 0 1-4.324-2.922C25.573 12.768 23.945 14 22 14a4.621 4.621 0 0 1-4.325-2.922c-.751 1.69-2.38 2.922-4.324 2.922a4.621 4.621 0 0 1-4.325-2.922C8.275 12.768 6.646 14 4.702 14 2.13 14 0 11.793 0 9.13L4.325 5h35.23zM5 2V0h34v2H5zm32 15h.549c1.324 0 1.448.848 1.448 1.891L39 38.111C39 39.152 37.94 40 36.616 40H7.384C6.06 40 5 39.155 5 38.111V18.89C5 17.848 5.06 17 6.384 17h.654L7 33h30V17zm-8.35 1.313a.73.73 0 0 1 1.05-.156c.331.259.398.75.15 1.095l-7.5 10.435a.73.73 0 0 1-1.05.156.805.805 0 0 1-.15-1.095l7.5-10.435zm-8 0a.73.73 0 0 1 1.05-.156c.331.259.398.75.15 1.095l-7.5 10.435a.73.73 0 0 1-1.05.156.805.805 0 0 1-.15-1.095l7.5-10.435z"></path>    </svg>                        

                
              </div>
            

            <div class="highlights-banners-text">
              
                <span class="highlights-banners-heading">
                  All India Delivery
                </span>
              

              
                <p>Delivering greenery<strong> </strong>across India since 2014**</p>
              
            </div>
            
          </div>
        
      
        
          <div class="highlights-banners-block">
            
              <div class="highlights-banners-icon">
                
                  
                <svg width="60" height="40" viewBox="0 0 60 40">      <path fill="currentColor" fill-rule="evenodd" transform="translate(-263.000000, -117.000000)" d="M289,151.5 C289,154.537566 286.537566,157 283.5,157 C280.462434,157 278,154.537566 278,151.5 C278,151.331455 278.007581,151.164681 278.022422,151 L271,151 L271,140 L273,140 L273,149 L278.59971,149 C279.510065,147.219162 281.362657,146 283.5,146 C285.637343,146 287.489935,147.219162 288.40029,148.999999 L301,149 L301,119 L271,119 L271,117 L303,117 L303,126 L316.723739,126 C317.85789,126 318.895087,126.639588 319.404327,127.652985 L320.786845,130.404226 C322.242105,133.300224 323,136.496398 323,139.737476 L323,148 C323,149.656854 321.656854,151 320,151 L316.977578,151 C316.992419,151.164681 317,151.331455 317,151.5 C317,154.537566 314.537566,157 311.5,157 C308.462434,157 306,154.537566 306,151.5 C306,151.331455 306.007581,151.164681 306.022422,151 L288.977578,151 C288.992419,151.164681 289,151.331455 289,151.5 Z M319.417229,134.516568 L319.417798,134.118058 C319.418189,133.844298 319.362374,133.573373 319.253808,133.32206 L317.177681,128.516129 L310.567164,128.516129 C310.014879,128.516129 309.567164,128.963844 309.567164,129.516129 L309.567164,134.330091 C309.567164,134.882376 310.014879,135.330091 310.567164,135.330091 L318.602544,135.330091 C319.052028,135.330091 319.416588,134.966052 319.417229,134.516568 Z M311.5,155 C313.432997,155 315,153.432997 315,151.5 C315,149.567003 313.432997,148 311.5,148 C309.567003,148 308,149.567003 308,151.5 C308,153.432997 309.567003,155 311.5,155 Z M283.5,155 C285.432997,155 287,153.432997 287,151.5 C287,149.567003 285.432997,148 283.5,148 C281.567003,148 280,149.567003 280,151.5 C280,153.432997 281.567003,155 283.5,155 Z M264,123 L280,123 C280.552285,123 281,123.447715 281,124 C281,124.552285 280.552285,125 280,125 L264,125 C263.447715,125 263,124.552285 263,124 C263,123.447715 263.447715,123 264,123 Z M267,128 L280,128 C280.552285,128 281,128.447715 281,129 C281,129.552285 280.552285,130 280,130 L267,130 C266.447715,130 266,129.552285 266,129 C266,128.447715 266.447715,128 267,128 Z M271,133 L280,133 C280.552285,133 281,133.447715 281,134 C281,134.552285 280.552285,135 280,135 L271,135 C270.447715,135 270,134.552285 270,134 C270,133.447715 270.447715,133 271,133 Z"></path>    </svg>                                                    

                
              </div>
            

            <div class="highlights-banners-text">
              
                <span class="highlights-banners-heading">
                  Secure Shipping
                </span>
                <p>Diligent care taken to deliver healthy&nbsp; plants**</p>  
            </div>      
          </div>
          <div class="highlights-banners-block">
            
              <div class="highlights-banners-icon">
                                <svg class="icon-people-alternate " aria-hidden="true" focusable="false" role="presentation" xmlns="http://www.w3.org/2000/svg" width="46" height="37" viewBox="0 0 46 37">      <path fill="currentColor" fill-rule="nonzero" d="M12.619 13.125c1.742 0 4.256-2.437 4.256-4.725 0-4.403-1.033-6.6-4.256-6.6-3.224 0-4.256 2.197-4.256 6.6 0 2.288 2.514 4.725 4.256 4.725zm0 1.8c-2.724 0-6.056-3.23-6.056-6.525 0-5.277 1.467-8.4 6.056-8.4 4.588 0 6.056 3.123 6.056 8.4 0 3.295-3.333 6.525-6.056 6.525zM29.9 18.787c-3.647 0-7.638-3.939-7.638-9.106C22.262 3.743 25.476.7 29.9.7c4.424 0 7.638 3.043 7.638 8.981 0 5.167-3.99 9.106-7.638 9.106zM12.887 35.525c0-9.331 6.998-13.263 16.544-13.263 9.547 0 16.544 4.033 16.544 13.263 0 .594-.481 1.075-1.075 1.075H13.962a1.075 1.075 0 0 1-1.075-1.075zM1.827 26.25H9.39a.9.9 0 0 1 0 1.8H.9a.9.9 0 0 1-.9-.9c0-6.411 5.41-9.337 12.786-9.337 2.45 0 4.46.15 6.09.451a.9.9 0 0 1-.327 1.77c-1.511-.28-3.415-.421-5.763-.421-5.948 0-10.67 1.94-10.96 6.637z"></path>
                                </svg> 
              </div>
            <div class="highlights-banners-text">
                <span class="highlights-banners-heading">
                  Lifetime Support
                </span>
                <p>We help you grow your garden for lifetime**</p>
            </div>
          </div>
    </div>
  </div></div>
     </div>
        )
    }
}

export default withRouter(Home)
