import React , { Component }from "react";
import {SocialMediaSection,Social,Icon,Socialp,SocialpSpan,SocialpSpanInfo} from './style.js'
import axios from "axios";
class socialmedia extends Component {
    state = {
      social: []
    }

    componentDidMount () {
        axios.get('js/data.json').then( res => { this.setState({ social: res.data.social }) } )
    }

    render(){

      const {social} = this.state;
      const socialItems = social.map( (socialItem) => {
        return (

          <Social key={socialItem.id} soc={socialItem.id}>
                <Icon className={socialItem.icon}></Icon>
                <Socialp>
                    <SocialpSpan>{socialItem.title}</SocialpSpan>
                    <SocialpSpanInfo>{socialItem.body}</SocialpSpanInfo>
                </Socialp>
            </Social>

        )
    })
    return (
      <SocialMediaSection>
            {socialItems}
      </SocialMediaSection>
    )
  }
}

export default socialmedia;