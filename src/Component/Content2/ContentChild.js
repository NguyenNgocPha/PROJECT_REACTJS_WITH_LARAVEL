import React, { Component } from 'react';
import Managers from './Managers';
import Partners from './Partners';
import DonateForm from './DonateForm';
import Student_Speech from './Student_Speech';
import ValuePNV from './ValuePNV';
import Mission from './Mission';
import ITRaisesIT from './ITRaisesIT';
import SocialImpact from './SocialImpact';
import Testimonials from './Testimonials';
import Image from './Image';


export default class ContentChild extends Component {
    render() {
        return (
            <div>
                <Image />
                <Mission />
                <SocialImpact />
                <ValuePNV />
                <Student_Speech />
                <ITRaisesIT />
                <DonateForm />
                <Testimonials/>
                <Managers />
                <Partners />
            </div>
        )
    }
}
