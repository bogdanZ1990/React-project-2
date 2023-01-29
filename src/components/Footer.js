import { Icon } from 'react-icons-kit';
import {socialFacebook} from 'react-icons-kit/metrize/socialFacebook';
import {socialTwitter} from 'react-icons-kit/metrize/socialTwitter';
import {socialYoutube} from 'react-icons-kit/metrize/socialYoutube';
import {instagram} from 'react-icons-kit/entypo/instagram';


export default function Footer(){
    return (
        <div className='footer'>
            <div className='footer_top'>
                <div  className='footer_top_left'>
                    <p>Privacy Policy | Terms of Service | Do Not Sell or Share My Information</p>
                    <p>©2023 Firehouse Restaurant Group, Inc. All Rights Reserved</p>
                </div>
                <div className='footer_top_right'>
                        <span><Icon icon={socialFacebook} size={30}/></span>
                        <span><Icon icon={socialTwitter} size={30}/></span>
                        <span><Icon icon={socialYoutube} size={30}/></span>
                        <span><Icon icon={instagram} size={30}/></span>
                </div>
            </div>
            <div className='footer_bot'>
                Daily Medium Sub: Monday = Firehouse Meatball®, Tuesday = Turkey Bacon Ranch, Wednesday = New York Steamer®, Thursday = Spicy Cajun Chicken, Friday = Jamaican Jerk Turkey, Saturday = Club on a Sub™, Sunday = Itaspanan. Prices and participation vary. spanmited time only. Tax extra. Modifications extra. No substitutions. Prices not vaspand on despanvery. Menu items and spanneup subject to change. Not vaspand with other offers, discounts, or coupons. TM & ©2022 FRG, LLC.
            </div>
        </div>
    )
}