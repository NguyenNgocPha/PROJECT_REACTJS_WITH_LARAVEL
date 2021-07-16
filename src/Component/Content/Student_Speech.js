import React, { Component } from 'react'; 
 
 
export default class Student_Speech extends Component {
    myFunction=()=> {
        var dots = document.getElementById("dots");
        var moreText = document.getElementById("more");
        var btnText = document.getElementById("myBtn");
      
        if (dots.style.display === "none") {
          dots.style.display = "inline";
          btnText.innerHTML = "Read more"; 
          moreText.style.display = "none";
        } else {
          dots.style.display = "none";
          btnText.innerHTML = "Read less"; 
          moreText.style.display = "inline";
        }
      }
    render() {
        return (
            <div>
                
                <section id="portfolio" className="portfolio-area">
                    <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                        <div className="section-title text-center pb-20">
                            <h3 className="title"><b>DISCOVER</b></h3>
                            <p className="text">Launched in 2010 in Danang, Passerelles numériques Vietnam (PNV) offers full 
                            scholarships to our 3-year, high-quality IT training program in: Web Development, Mobile Development
                            and Automated Testing. Each of these specializations is taught holistically, including both technical 
                            and soft skills alongside a robust personal development program.</p>
                        </div> {/* row */}
                        </div>
                    </div> {/* row */}
                    <div className="row">
                        <div className="col-lg-12">
                        <div className="portfolio-menu pt-30 text-center">
                            <ul>
                            <li data-filter="*" className="active">All</li>
                            <li data-filter=".branding-3">Image</li>
                            <li data-filter=".planning-3">Information 1</li>
                            <li data-filter=".marketing-3">Information 2</li>
                            <li data-filter=".research-3">Content</li>
                            </ul>
                        </div> {/* portfolio menu */}
                        </div>
                    </div> {/* row */}
                    <div className="row grid">
                        <div className="col-lg-6 col-sm-8 branding-3 planning-3">
                        <div className="single-portfolio mt-30 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.2s">
                            <div className="portfolio-image">
                            <img src="assets/images/Students/huou.jpg" alt="" />                          
                            </div>
                        </div> {/* single portfolio */}
                        </div>
                        <div className="col-lg-5 col-sm-5 marketing-3 research-3">
                        <div className="single-portfolio mt-30 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.4s">
                            <div className="portfolio-image">
                                <h6>“I chose to say no”</h6><br />
                                <p>13 May 2021</p><br />
                                <div>
                                    
                                </div>
                                <p>Ho T.H. – second-year student at 
                                    Passerelles numeriques Vietnam confided. 
                                    H. chose to say no to those prejudices 
                                    that when a girl is 18, she should 
                                    get married to fulfill her piety. 
                                    H. chose to say no to the thoughts of 
                                    staying at home and working to support her <span id="dots">...</span><span style={{display:"none"}}>family instead of going to school.
                                    H. chose to say no to giving up her dream, the dream that changes her life – getting into college.
                                    H. was born and raised in a mountainous area in Hung Hoa district, Quang Tri province. 
                                    She is from the Van Kieu ethnic group. H.’s family includes her parents, 2 brothers, 3 younger sisters. 
                                    They are farmers and have to depend on the field of cassava for livelihoods. Cassava is only harvested once a year. 
                                    In some years, when cassava cannot be harvested because of the poor crop, the whole family has to suffer from hunger. 
                                    There are times, H.’s parents had to borrow rice from neighbors so H and her siblings could have something to eat.
                                    Sometimes, hearing parents argue over a handful of rice, H. burst into tears. “I feel helpless and hopeless because 
                                    I can’t do anything to help them”, H said. Although that little girl struggled to make ends meet, she always nurtured
                                    the desire of pursuing higher education, a gateway to change her life. Be brave to choose differently H.’s dream of 
                                    school was repeatedly suppressed by those prejudices about being poor and early marriage until H knew about 
                                    Passerelles numériques – an NGO providing free 3-year IT training for underprivileged youth. H was so determined to get in PNV
                                    because of her strong belief that PNV will give H a different choice – a choice can change her life.
                                    For the first time in 20 years, H. had a cake for her birthday. For the first time in her life, she can go to school 
                                    and not worry about food on a daily basis. PNV not only gave H. an IT training course but also a home, where she can 
                                    be supported by her friends and teachers. “I want to build a house for my parents. I want to take them on a trip to 
                                    Danang because they never once see the beach and I want to buy them a big cake because they have never tasted a cake 
                                    before. And I want to share my wonderful life here at PNV with everyone in my village”. H. shared. 
                                    Currently, H. is continuing her second-year program at PNV with 44 classmates. Join PNV to watch H.’s small steps 
                                    on the journey of self-discovery and a life-changing dream. You don’t need to be different to be extraordinary, 
                                    sometimes all you need is a little courage to choose differently.
                                    </span><button className="readMore" onclick={this.myFunction} id="myBtn">read more</button>
                                </p>
                                    
                                    
                                </div>
                                
                        </div> 
                        </div>
                    </div>
                    <div className="row grid">            
                        <div className="col-lg-4 col-sm-4 planning-3 research-3">
                        <div className="single-portfolio mt-30 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.2s">
                            <div className="portfolio-image">
                            <h6>Blossom in the storm</h6><br />
                            <p>5 May 2021</p><br />
                            <p>“Every person is born with a destiny” – That is 
                                what Tran T.Q., a Passerelles numériques Vietnam 
                                student of batch 20, currently a software engineer, 
                                told about the story of her life. 
                                Like a flower in the thunderstorms, 
                                the young girl has been <span id="dots">...</span>
                                <span style={{display:"none"}}>
                                constantly striving towards a better future.
                                <h6>The flower grows from storms</h6>
                                Born and raised in Da Nang city, from a young age, Q. was self-conscious of her own 
                                situation. Separated parents, Q. lived with her mother, sister, and a half-brother 
                                from a young age. The young girl’s family only relies on her mother’s meager salary 
                                of just under one million dong per month to live through the day. Q. has had an uneasy 
                                childhood with her alcoholic father, and until now Q. has completely lost contact with him. 
                                The lack of love from her father was the reason for her inferiority complex. But despite 
                                the difficult circumstances, she is always grateful for the love of her mother and her 
                                brothers and sisters. The young girl smiled and confided that sometimes she kept comparing 
                                with people with better conditions, but then realized how fortunate she was when she met more 
                                struggling people around her.
                                <p>Although having a lot of difficulties, Tran T.Q. has always wanted to pursue 
                                further education and expand her knowledge. However, the door to the university at 
                                that time seemed to have closed when Q. did not get a scholarship and she knew that 
                                the tuition for four years of university was much higher than what her family could 
                                afford. Q. then learned about PNV – where has helped the strong girl learn many 
                                things and have a stable life like today, through a meeting at her high school. 
                                With hope and determination, she decided to apply to PNV.</p>
                                <h6>Light at the end of the tunnel</h6>
                                Q. shared that fate brought her to PNV. When it seemed that the dream of being a 
                                student was blown out, Q. heard Mr. Nguyen – a teacher that later became her teacher 
                                at PNV – talk about the organization at the meeting. After going through a rigorous 
                                selection process, the young lady officially became a PNV student. PNV has given Q. a 
                                chance to sustainably escape poverty through education. She has always felt lucky to be 
                                a student of PNV and until now she is always grateful to the teachers who had wholeheartedly 
                                taught and cared for her and other students. Not only was she provided with a thorough and 
                                quality IT training program, but English skills are also one of the things Q. is proud of 
                                after the three-year schooling. From a student feeling inferior to others about her English 
                                skills, Q. is now able to confidently communicate with her colleagues at Enouvo IT 
                                Solutions – where she works as a developer.
                                <p>Sharing about her changing life, with Tran T.Q., PNV is a place for her to expand 
                                    her knowledge and improve her skills, which has helped her become an IT engineer. 
                                    However, the most valuable thing that still makes her choke every time she talks 
                                    about is the friends who have accompanied her in PNV for three years. During that 
                                    time, a terrible event happened when her mother, who had always been by Q.’s side, 
                                    passed away. And it was her close friends who had helped the young girl to overcome 
                                    the pain and move forward.
                                </p>
                                    Talking about Q., Ms. Nguyen Phuong (PNV’s External Relations Officer), who 
                                    often works side by side with PNV’s students, expressed admiration for this young 
                                    girl’s fortitude. As Q. affirmed, in life up to now, there are still many things that 
                                    are not going smoothly and sometimes she feels discouraged, yet “sow a thought, reap 
                                    an act”, as long as she can be positive and try to self-adjust, she can overcome all 
                                    the challenges awaiting her in the future. Currently, Tran T.Q. has a better life 
                                    with a stable and qualified job. Having been through so many storms, the young girl 
                                    has always been resilient. PNV has given her a chance of life-changing, now it’s 
                                    time for “the little flower” to keep conquering and developing in her journey of life.
                                </span>
                                <button className="readMore" onclick={this.myFunction} id="myBtn">read more</button>
                            </p>
                            </div>
                        </div> {/* single portfolio */}
                        </div>
                        <div className="col-lg-7 col-sm-8 marketing-3">
                        <div className="single-portfolio mt-30 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.4s">
                            <div className="portfolio-image">
                            <img src="assets/images/Students/quyen.jpg" alt="" />
                            </div>
                        </div> {/* single portfolio */}
                        </div>
                    </div> {/* row */}
                    </div> {/* container */}
                </section>
            </div>
            
        )
        
    }
    
}
 
 

