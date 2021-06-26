import React, { Component } from 'react'

export default class SocialImpact extends Component {
    render() {
        return (
            <div>
                <section className="portfolio-area">
                    <div className="container text-center">    
                        <h3><b>PN Vietnam and 10 years of sustainable impact on Vietnam society</b></h3><br />
                        <div className="row pd-30">
                            <div className="col-sm-4">
                                <h1 style={{color: '#18A0FB'}}><b>500</b></h1>
                                <p>Beneficiaries</p>
                            </div>
                            <div className="col-sm-4"> 
                                <h1 style={{color: '#18A0FB'}}><b>350</b></h1>
                                <p>Alumni</p>    
                            </div>
                            <div className="col-sm-4">
                                <h1 style={{color: '#18A0FB'}}><b>633</b></h1>
                                <p>Average monthly salary of PNV alumni (USD)</p>
                            </div>
                        </div>
                    </div><br />
                    <div className="row text-center">
                            <div className="col-sm-3">
                                <h1 style={{color: '#18A0FB'}}><b>2000</b></h1>
                                <p>Indirect beneficiaries</p>
                            </div>
                            <div className="col-sm-3"> 
                                <h1 style={{color: '#18A0FB'}}><b>94%</b></h1>
                                <p>Graduates have qualified jobs</p>    
                            </div>
                            <div className="col-sm-3">
                                <h1 style={{color: '#18A0FB'}}><b>88%</b></h1>
                                <p>Alumni working in the IT sector</p>
                            </div>
                            <div className="col-sm-3">
                                <h1 style={{color: '#18A0FB'}}><b>36%</b></h1>
                                <p>Of their incomes used to support their own families</p>
                            </div>
                        </div>
                </section>
            </div>
        )
    }
}
